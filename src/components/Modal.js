import React from 'react'
import styles from "../styles.module.css";

const Modal = ({ largeImageUrl, onClick }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={largeImageUrl} alt="modal" onClick={onClick} />
      </div>
    </div>
  );
};

export default Modal;
