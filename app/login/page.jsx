import React from "react";
import styles from "@/app/ui/login/login.module.css";
import LoginForm from "./loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
