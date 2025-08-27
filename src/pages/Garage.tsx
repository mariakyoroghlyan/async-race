import React from "react";
import Car from "../components/features/Car/Car";
import styles from "./Garage.module.css";
import CarControl from "../components/features/Car/CarControl";


const Garage: React.FC = () => {
  const cars: string[] = Array.from({ length: 7 }, (_, i) => `/car.webp`);

  const handleSelect = (id: number) => {
    console.log("Selected car", id);
  };

  const handleRemove = (id: number) => {
    console.log("Removed car", id);
  };

  return (
    <div className={styles.garageSection}>
      <CarControl />

      <div className={styles.track}>
        {cars.map((carSrc, index) => (
          <div key={index} className={styles.roadContainer}>
            <div className={styles.lane}>
              <div className={styles.controls}>
                <button
                  className={`${styles.btn} ${styles.select}`}
                  onClick={() => handleSelect(index + 1)}
                >
                  Select
                </button>
                <button
                  className={`${styles.btn} ${styles.remove}`}
                  onClick={() => handleRemove(index + 1)}
                >
                  Remove
                </button>
              </div>

              <div className={styles.engineControl}>
                <button className={styles.engineStart}>A</button>
                <button className={styles.engineStop}>B</button>
              </div>

              <Car src={carSrc} alt={`Car ${index + 1}`} />
            </div>
            <div className={styles.destination}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Garage;
