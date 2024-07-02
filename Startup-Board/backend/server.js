const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import fs to check and create directories
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://launchpadConnect:root@123@ac-46lvasg-shard-00-00.yxtvtfa.mongodb.net:27017,ac-46lvasg-shard-00-01.yxtvtfa.mongodb.net:27017,ac-46lvasg-shard-00-02.yxtvtfa.mongodb.net:27017/?ssl=true&replicaSet=atlas-10xzmc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Startup Board API');
});

// Ensure the upload directory exists
const uploadDir = path.join(__dirname, 'upload/images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Image storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });
 
//Schema for creating Startups
const Startup = mongoose.model("Startup", {
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_location: {
    type: Number,
    required: true,
  },
  old_location: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  availability: {
    type: Boolean,
    default: true,
  },
})


// Creating Upload endpoint
app.use('/images', express.static(uploadDir));
app.post('/upload', upload.single('startups'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: 'No file uploaded' });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server running on port ${PORT}`);
  } else {
    console.log('Error: ' + error);
  }
});
