// src/pages/Winners.tsx
import React from "react";
import styles from "./Winners.module.css";

type Winner = {
  id: number;
  name: string;
  time: string;
};

const Winners: React.FC = () => {
  const winners: Winner[] = [
    { id: 1, name: "Car 1", time: "00:32.45" },
    { id: 2, name: "Car 3", time: "00:33.10" },
    { id: 3, name: "Car 7", time: "00:33.55" },
    { id: 4, name: "Car 2", time: "00:34.20" },
    { id: 5, name: "Car 5", time: "00:35.00" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🏆 Winners Leaderboard</h2>
      <ul className={styles.list}>
        {winners.map((winner, index) => (
          <li
            key={winner.id}
            className={`${styles.item} ${index % 2 === 0 ? styles.even : styles.odd}`}
          >
            <span className={styles.rank}>#{index + 1}</span>
            <span className={styles.name}>{winner.name}</span>
            <span className={styles.time}>{winner.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Winners;
