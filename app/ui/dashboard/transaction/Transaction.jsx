import Image from "next/image";
import React from "react";
import styles from "./transaction.module.css";

const Transaction = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>Lastest Transactions</h2>
        <h4 className={styles.title}>
          Total <strong>{transactions.length}</strong> $/day
        </h4>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Account</td>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={item.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {item.name}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
              <td>{item.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
