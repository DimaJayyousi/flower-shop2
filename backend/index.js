const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const Image = require('./models/image'); // assumes you have an Image schema/model

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Auto-create uploads/images folder
const uploadDir = path.join(__dirname, 'uploads/images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('📁 Created uploads/images directory');
}

// Multer config to save in uploads/images
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/gif'];
  allowed.includes(file.mimetype) ? cb(null, true) : cb(new Error('Only images allowed! 😤'), false);
};

const upload = multer({ storage, fileFilter });

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 50000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log('🧠 Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Upload route
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded 😬' });

    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    const savedImage = await newImage.save();

    res.status(201).json({
      message: 'Image uploaded & saved to MongoDB 🛸',
      image: savedImage,
    });
  } catch (err) {
    console.error('Image upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Product schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  newPrice: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// Add Product
app.post('/addproduct', async (req, res) => {
  try {
    const last = await Product.findOne().sort({ id: -1 });
    const newId = last ? last.id + 1 : 1;

    const product = new Product({
      id: newId,
      name: req.body.name,
      image: req.body.image, // Should be image path from upload
      description: req.body.description,
      newPrice: req.body.newPrice,
      oldPrice: req.body.oldPrice,
    });

    await product.save();
    console.log("✅ Product saved to MongoDB");

    res.json({ success: true, name: req.body.name });
  } catch (err) {
    console.error('Product save error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Remove product by ID
app.post('/removeproduct', async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ id: req.body.id });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Product with ID ${req.body.id} not found 🕵️‍♀️`,
      });
    }

    console.log(`🗑️ Removed product: ${deleted.name}`);
    res.json({ success: true, name: deleted.name });
  } catch (err) {
    console.error('Product removal error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all products
app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("📦 All products fetched");
    res.json(products);
  } catch (err) {
    console.error('Fetching products failed:', err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});