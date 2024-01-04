import Image from "next/image";
import React from "react";
import styles from "./team.module.css";

const Team = ({ teams }) => {
  return (
    <div className={styles.container}>
      {teams.map((team) => (
        <div className={styles.item} key={team.id}>
          <div className={styles.imgContainer}>
            <Image
              src={team.img || "/astronaut.png"}
              alt=""
              width={250}
              height={250}
              loading="lazy"
            />
          </div>
          <div className={styles.texts}>
            <span className={styles.number}>{team.name}</span>
            <span className={styles.title}>{team.email}</span>
            <span className={styles.detail}>
              <span className={styles.positive}>{team.position}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
