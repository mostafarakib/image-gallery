import React from "react";
import "./ImageGallery.css";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card-container">
      <img className="card-image" src={image.img} alt="" />
    </div>
  );
};

export default ImageCard;
