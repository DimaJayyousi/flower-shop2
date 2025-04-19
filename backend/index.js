// index.js
require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 4000; 

// Middleware
app.use(express.json());
app.use(cors());

// Static folder to serve images
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// Make sure upload/images exists!
const uploadDir = path.join(__dirname, "upload/images");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});
const upload = multer({ storage });

// Debug logging
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Basic route
app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

// Upload route
app.post("/upload", upload.single("product"), (req, res) => {
    console.log("Upload route hit");

    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded" });
    }

    res.status(200).send({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
});

// Start server
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
