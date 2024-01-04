import React from "react";
import styles from "@/app/ui/dashboard/products/addproducts.module.css";
import { addProduct } from "@/app/lib/actions";

const addProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className={styles.input}
        />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          className={styles.input}
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          required
          className={styles.input}
        />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addProductPage;
