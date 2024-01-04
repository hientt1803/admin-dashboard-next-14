import React from "react";
import styles from "@/app/ui/dashboard/users/addusers.module.css";
import { addUser } from "@/app/lib/actions";

const addUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          className={styles.input}
        />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          required
          className={styles.input}
        />
        <select name="isAdmin" id="isAdmin">
          <option value={true} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addUserPage;
