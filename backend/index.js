const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // ✅ fixed this line
const { error } = require("console");

app.use(express.json());
app.use(cors());

//database connection with mongo db 
mongoose.connect("mongodb+srv://dimajayousi:smile77820@cluster0.alzq4jx.mongodb.net/Poeny")

//API creation 

app.get("/" ,(req,res)=>{
    res.send("Express App is Running")
})
app.listen(port,(error)=>{
    if(!error){
        console.log("server Running on port"+port)

    }
    else{
        console.log("Error"+error)
    }
})



const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});


const upload = multer({ storage: storage });

// serve static images
app.use('/images', express.static('upload/images'));

// image upload endpoint
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});
