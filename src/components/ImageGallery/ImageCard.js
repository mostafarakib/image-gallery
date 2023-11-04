import { useState } from "react";
import "./ImageGallery.css";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  IMAGE_CARD: "imageCard",
};

const ImageCard = ({ image, setSelectedImages, index, moveImage }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [, ref] = useDrag({
    type: ItemTypes.IMAGE_CARD,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.IMAGE_CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

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
    <div
      className={`image-card-container ${isChecked ? "checked" : ""}`}
      ref={(node) => ref(drop(node))}
    >
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
