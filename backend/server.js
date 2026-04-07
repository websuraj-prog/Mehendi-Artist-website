require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.log("MongoDB error:", err));


// schema
const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const Image = mongoose.model("Image", imageSchema);


// multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });


// serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// upload API
app.post("/upload", upload.single("image"), async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const newImage = new Image({
      url: imageUrl
    });

    await newImage.save();

    res.json({
      message: "Image uploaded successfully",
      url: imageUrl
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

});


// =============================
// serve React frontend
// =============================

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {

  res.sendFile(
    path.join(__dirname, "../frontend/dist/index.html")
  );

});


// start server
app.listen(PORT, () => {

  console.log("Server running on port", PORT);

});