import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Tran Hien DEV</div>
      <span>@ All rights reserved.</span>
    </div>
  );
};

export default Footer;
