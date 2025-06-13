import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { useAdmin } from "../../context/AdminContext";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAdminLoggedIn } = useAdmin();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('mehendiImages')) || [];
    setImages(stored);
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "Mehndi-images"); 
    formData.append("cloud_name", "dpgyt0wsv"); 

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dpgyt0wsv/image/upload",
        formData
      );

      const newImageUrl = res.data.secure_url;
      const updatedImages = [...images, { id: Date.now(), url: newImageUrl }];
      setImages(updatedImages);
      localStorage.setItem("mehendiImages", JSON.stringify(updatedImages));
      setSelectedFile(null);
      alert("Uploaded!");
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed");
    }
  };

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== currentIndex + index);
    setImages(updatedImages);
    localStorage.setItem("mehendiImages", JSON.stringify(updatedImages));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <div className="gallery-container" id="gallery">
      <h2 className="gallery-title">Gallery</h2>

      {isAdminLoggedIn && (
        <div className="upload-section">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}

      <div className="image-grid">
        {visibleImages.map((img, idx) => (
          <div className="image-wrapper" key={img.id}>
            <img src={img.url} alt="mehendi-img" className="gallery-image" />
            {isAdminLoggedIn && (
              <button className="delete-btn" onClick={() => handleDelete(idx)}>Delete</button>
            )}
          </div>
        ))}
      </div>

      <div className="gallery-controls">
        <button
          onClick={() => setCurrentIndex(Math.max(currentIndex - 4, 0))}
          disabled={currentIndex === 0}
        >
          {"< Prev"}
        </button>
        <button
          onClick={() => setCurrentIndex(currentIndex + 4)}
          disabled={currentIndex + 4 >= images.length}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
