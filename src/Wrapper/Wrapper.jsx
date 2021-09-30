import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = ({ header, content, footer }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerStyle}>{header}</div>
      <div className={styles.content}>
        <div>{content}</div>
      </div>
      <div className={styles.footerStyle}>{footer}</div>
    </div>
  );
};

export default Wrapper;
