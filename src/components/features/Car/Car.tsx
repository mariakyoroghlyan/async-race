import React from "react";
import styles from "./Car.module.css"

type CarProps = {
    src: string,
    alt: string
}

const Car: React.FC<CarProps> = ({src, alt}) => {
  return <img src={src} alt={alt} className={styles.car} />;
}

export default Car;