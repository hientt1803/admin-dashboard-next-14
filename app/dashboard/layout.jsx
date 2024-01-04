import React from "react";
import NavBar from "../ui/dashboard/navbar/NavBar";
import SideBar from "../ui/dashboard/sidebar/SideBar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/Footer";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
