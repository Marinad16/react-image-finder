import React from "react";
import styles from "../styles.module.css";

const Button = ({ fetchImagesQuery }) => {
  return (
    <button className={styles.Button} onClick={fetchImagesQuery}>
      Load more
    </button>
  );
};

export default Button;
