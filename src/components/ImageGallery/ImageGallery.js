import React, { useEffect, useState } from "react";
import "./ImageGallery.css";
import ImageCard from "./ImageCard";
import TopBar from "./TopBar/TopBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const handleDelete = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  const moveImage = (dragIndex, hoverIndex) => {
    const imageToMove = images[dragIndex];
    const updatedImages = [...images];
    updatedImages.splice(dragIndex, 1);
    updatedImages.splice(hoverIndex, 0, imageToMove);
    setImages(updatedImages);
  };

  return (
    <div>
      <TopBar selectedImages={selectedImages} handleDelete={handleDelete} />

      <DndProvider backend={HTML5Backend}>
        <div className="image-gallery-container">
          {images.map((img, index) => (
            <ImageCard
              image={img}
              index={index}
              setSelectedImages={setSelectedImages}
              moveImage={moveImage}
              key={img.id}
            />
          ))}
          <label
            className="image-card-container add-img-card-container"
            htmlFor="add-image-input"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <svg
                fill="#000000"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M14,24.138c3.071,0,5.569-2.498,5.569-5.568C19.569,15.498,17.071,13,14,13s-5.569,2.498-5.569,5.569 C8.431,21.64,10.929,24.138,14,24.138z"></path>
                    <path d="M1,0v40v12h50V40V0H1z M3,2h46v27.643L37.676,19.262c-0.196-0.179-0.454-0.268-0.72-0.262 c-0.265,0.012-0.515,0.129-0.694,0.325l-8.363,9.159l3.808,3.808c0.391,0.391,0.391,1.023,0,1.414C31.512,33.902,31.256,34,31,34 s-0.512-0.098-0.707-0.293l-3.826-3.654l-4.743-4.743c-0.374-0.373-0.972-0.392-1.368-0.044L3.621,40H3V2z M49,50H3v-8h46V50z"></path>
                  </g>
                </g>
              </svg>
              <span style={{ marginTop: "10px" }}>Add Image</span>
            </div>
          </label>
          <input type="file" name="" id="add-image-input" />
        </div>
      </DndProvider>
    </div>
  );
};

export default ImageGallery;
