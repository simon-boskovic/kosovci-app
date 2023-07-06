// Navbar.js
"use client";
import { useState } from "react";
import styles from "../../styles/Navbar.module.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles["c-navbar-wrapper"]}>
      <div className={styles["c-navbar"]}>
        <div className={styles["c-logo"]}>LOGO KOSOVCI</div>
        <div
          className={`${styles["c-menu-toggle-wrap"]} ${
            isMenuOpen ? styles["c-menu-toggle-wrap--is-open"] : ""
          }`}
          onClick={handleMenuToggle}
        >
          <div className={styles["c-menu-toggle-line"]}></div>
          <div className={styles["c-menu-toggle-line"]}></div>
          <div className={styles["c-menu-toggle-line"]}></div>
        </div>
        <ul
          className={`${styles["c-menu"]} ${
            isMenuOpen ? styles["c-menu--open"] : ""
          }`}
        >
          <li>
            <a href="#o-kapele" className={styles["c-menu-link"]}>
              O kapele
            </a>
          </li>
          <li>
            <a href="#kde-hrajeme" className={styles["c-menu-link"]}>
              Kde hrajeme
            </a>
          </li>
          <li>
            <a href="#kontakt" className={styles["c-menu-link"]}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${styles["c-mobile-menu"]} ${
          isMenuOpen ? styles["c-mobile-menu--open"] : ""
        }`}
      >
        <div>O kapele</div>
        <div>Kde hrajeme</div>
        <div>Kontakt</div>
      </div>
    </nav>
  );
}
