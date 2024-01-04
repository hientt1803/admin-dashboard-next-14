import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchSingleUsers } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const SingleUserPage = async ({ params }) => {
  const { slug } = params;
  const user = await fetchSingleUsers(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="username">username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder={user.password} />
          <label htmlFor="address">address</label>
          <textarea name="address" rows={10} placeholder={user.address} />
          <label htmlFor="isAdmin">is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor="isActive">is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
