import React from "react";
import "./TopBar.css";

const TopBar = ({ selectedImages, handleDelete }) => {
  return (
    <div className="topbar-container">
      {selectedImages.length > 0 ? (
        <div className="topbar-selected-items">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              style={{ marginRight: "1rem" }}
              checked={true}
            />
            <h4>{selectedImages.length} items selected</h4>
          </div>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : (
        <h4>Gallery</h4>
      )}
    </div>
  );
};

export default TopBar;
