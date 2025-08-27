// src/components/features/Car/CarControl.tsx
import React from "react";
import styles from "./CarControl.module.css";
import { FaPlay, FaRedo } from "react-icons/fa";

type CarControlProps = {
  createName: string;
  createColor: string;
  renameName: string;
  renameColor: string;
  onChange: (field: string, value: string) => void;
  onRace?: () => void;
  onReset?: () => void;
  onCreate?: () => void;
  onRename?: () => void;
};

const CarControl: React.FC<CarControlProps> = ({
  createName,
  createColor,
  renameName,
  renameColor,
  onChange,
  onRace,
  onReset,
  onCreate,
  onRename,
}) => {
  return (
    <div className={styles.container}>
      {/* Race / Reset controls */}
      <div className={styles.controlBox}>
        <button className={styles.startButton} onClick={onRace}>
          Race <FaPlay className={styles.iconSize} size={20} />
        </button>
        <button className={styles.resetButton} onClick={onReset}>
          Reset <FaRedo  className={styles.iconSize} size={20} />
        </button>
      </div>

      {/* Create Car */}
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
          className={styles.colorSelect}
          type="color"
          value={createColor}
          onChange={(e) => onChange("createColor", e.target.value)}
        />
        <button className={styles.submitButton} onClick={onCreate}>
          Create
        </button>
      </div>

      {/* Rename Car */}
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
          className={styles.colorSelect}
          onChange={(e) => onChange("renameColor", e.target.value)}
        />
        <button className={styles.submitButton} onClick={onRename}>
          Change
        </button>
      </div>
    </div>
  );
};

export default CarControl;
