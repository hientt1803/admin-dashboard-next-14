"use client";

import { authenticate } from "@/app/lib/actions";
import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const [username, setUsername] = useState("securityuser");
  const [password, setPassword] = useState("123456");

  return (
    <form action={formAction} className={styles.form}>
      <h2 className={styles.title}>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button}>Login</button>
      <span>{state && state}</span>
    </form>
  );
};

export default LoginForm;
