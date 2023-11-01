import React, { useEffect, useState } from "react";
import "./ImageGallery.css";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div className="image-gallery-container">
      {images.map((img) => (
        <ImageCard image={img} />
      ))}
    </div>
  );
};

export default ImageGallery;
