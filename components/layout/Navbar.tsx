// Navbar.js
"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles["c-navbar-wrapper"]} ${
        isScrolled ? styles["c-navbar-wrapper--scrolled"] : ""
      }`}
    >
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
            <Link
              href="/#o-kapele"
              scroll={false}
              className={styles["c-menu-link"]}
            >
              Kapela
            </Link>
          </li>
          <li>
            <Link
              href="/#kde-hrajeme"
              scroll={false}
              className={styles["c-menu-link"]}
            >
              Kde hrajeme
            </Link>
          </li>
          <li>
            <Link
              href="/#kontakt"
              scroll={false}
              className={styles["c-menu-link"]}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles["c-mobile-menu"]} ${
          isMenuOpen ? styles["c-mobile-menu--open"] : ""
        }`}
      >
        <ul>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/#o-kapele"
              scroll={false}
              className={styles["c-mobile-menu-link"]}
            >
              O kapele
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/#kde-hrajeme"
              scroll={false}
              className={styles["c-mobile-menu-link"]}
            >
              Kde hrajeme
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/#kontakt"
              scroll={false}
              className={styles["c-mobile-menu-link"]}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
