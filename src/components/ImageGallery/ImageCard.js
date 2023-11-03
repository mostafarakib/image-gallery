import { useState } from "react";
import "./ImageGallery.css";

const ImageCard = ({ image, setSelectedImages }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleImageSelection = (imageId) => {
    setIsChecked(!isChecked);

    setSelectedImages((prevSelectedImages) => {
      if (!prevSelectedImages.includes(imageId)) {
        return [...prevSelectedImages, imageId];
      } else {
        return prevSelectedImages.filter((id) => id !== imageId);
      }
    });
  };
  return (
    <div className={`image-card-container ${isChecked ? "checked" : ""}`}>
      <label htmlFor={image.id}>
        <img className="card-image" src={image.img} alt="" />
      </label>
      <input
        type="checkbox"
        className="card-checkbox"
        id={image.id}
        checked={isChecked}
        onChange={() => {
          handleImageSelection(image.id);
        }}
      />
    </div>
  );
};

export default ImageCard;
