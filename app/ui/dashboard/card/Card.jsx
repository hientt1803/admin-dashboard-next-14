import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({card}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{card.title}</span>
        <span className={styles.number}>{card.value}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{card.percent}%</span> more than last month
        </span>
      </div>
    </div>
  );
};

export default Card;
