import React from "react";
import styles from "../styles.module.css";

const ImageGalleryItem = ({ image, onSetLargeImage }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImg}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onSetLargeImage(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
