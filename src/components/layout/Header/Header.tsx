// src/components/Header/Header.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import buttonStyles from "../../ui/Button/Button.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={buttonStyles.button}>
          Garage
        </NavLink>
        <NavLink to="/winners" className={buttonStyles.button}>
          Winners
        </NavLink>
      </nav>
      <img className={styles.logo} src="/logo.webp" alt="Logo" />
    </header>
  );
};

export default Header;
