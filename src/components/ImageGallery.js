import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "../styles.module.css";

const ImageGallery = ({ images, onSetLargeImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onSetLargeImage={onSetLargeImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
