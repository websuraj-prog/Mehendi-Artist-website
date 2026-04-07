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


// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.log(err));


// schema
const imageSchema = new mongoose.Schema({

  url: String,

  uploadedAt: {
    type: Date,
    default: Date.now
  }

});

const Image = mongoose.model("Image", imageSchema);


// multer
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function (req, file, cb) {

    cb(null, Date.now() + "-" + file.originalname);

  }

});

const upload = multer({ storage });


// uploads folder serve
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// upload API
app.post("/upload", upload.single("image"), async (req, res) => {

  try {

    const imageUrl =
      req.protocol + "://" +
      req.get("host") +
      "/uploads/" +
      req.file.filename;

    const newImage = new Image({

      url: imageUrl

    });

    await newImage.save();

    res.json({

      message: "Image uploaded",
      url: imageUrl

    });

  } catch (err) {

    res.status(500).json({

      message: "error"

    });

  }

});


// ===============================
// serve Vite frontend (dist)
// ===============================

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {

  res.sendFile(
    path.join(__dirname, "../dist/index.html")
  );

});


// start server
app.listen(PORT, () => {

  console.log("Server running on port", PORT);

});