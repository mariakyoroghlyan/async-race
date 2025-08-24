// CarControl.tsx
import React from "react";
import styles from "./CarControl.module.css";

type CarControlProps = {
  createName: string;
  createColor: string;
  renameName: string;
  renameColor: string;
  onChange: (field: string, value: string) => void;
};

const CarControl: React.FC<CarControlProps> = ({
  createName,
  createColor,
  renameName,
  renameColor,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.creationBox}>
        <span className={styles.text}>Create Car</span>
        <input
          className={styles.backgroundReset}
          type="text"
          placeholder="New car name"
          value={createName}
          onChange={(e) => onChange("createName", e.target.value)}
        />
        <input
          className={styles.backgroundReset}  
          type="color"
          value={createColor}
          onChange={(e) => onChange("createColor", e.target.value)}
        />
        <button className={styles.submitButton}>Create</button>
      </div>

      {/* <div className={styles.line}></div> */}

      <div className={styles.changingBox}>
        <span className={styles.text}>Rename Car</span>

        <input
          type="text"
          placeholder="Rename car"
          value={renameName}
          className={styles.backgroundReset}
          onChange={(e) => onChange("renameName", e.target.value)}
        />
        <input
          type="color"
          value={renameColor}
          className={styles.backgroundReset}
          onChange={(e) => onChange("renameColor", e.target.value)}
        />
        <button className={styles.submitButton}>Change</button>
      </div>
    </div>
  );
};

export default CarControl;
