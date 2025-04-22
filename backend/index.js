const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const Image = require('./models/image');
const { log } = require('console');

dotenv.config(); // Load .env variables
console.log('👀 Loaded MONGO_URI:', process.env.MONGO_URI);

const app = express();

// Middleware to parse JSON and form data (used once at the top)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check and create uploads folder if it doesn’t exist
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Connect to MongoDB with updated settings
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 50000, // Wait for 50 seconds
  socketTimeoutMS: 45000,          // Wait for 45 seconds before timing out
})
  .then(() => console.log('🧠 Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if connection fails
  });

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed 😭'), false);
  }
};

const upload = multer({ storage, fileFilter });

// POST /upload route to handle image uploads
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded 😬' });

    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    const savedImage = await newImage.save();

    res.status(201).json({
      message: 'Image uploaded and saved to MongoDB 🛸',
      image: savedImage
    });
  } catch (err) {
    console.error('Image upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Product Schema
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// POST /addproduct route to handle product additions
app.post('/addproduct', async (req, res) => {
  try {
    // Log the incoming data to ensure you are receiving the correct body
    console.log('Incoming product data:', req.body);

    let products = await Product.find({}); // FIXED here, changed `product` to `Product`
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id: id, // Use the newly generated `id`
      name: req.body.name,
      image: req.body.image, // Assuming image is a file path or URL string
      description: req.body.description,
      newPrice: req.body.newPrice,
      oldPrice: req.body.oldPrice,
    });

    await product.save();
    console.log("✅ Product saved to MongoDB");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (err) {
    console.error('Product save error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});
// Creating API for deleting products 

app.post('/removeproduct',async(req,res)=>{
await Product.findOneAndDelete({id:req.body.id});
console.log("Removed ");
res.json({
  success:true,
  name:req.body.name,
})
})
// Start the server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
