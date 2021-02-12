import React from "react";

import styles from "./Image.module.css";

const Image = ({
  src,
  alt = "Image",
  width = 40,
  height = "auto",
  objectFit = "cover",
  radius = 0,
}) => {
  return (
    <div
      className={styles.imageContainer}
      style={{
        width,
        minWidth: width,
        height,
        minHeight: height,
        objectFit,
        borderRadius: radius,
      }}
    >
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default Image;
