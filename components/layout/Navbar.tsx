// Navbar.js
"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export enum EActiveNavSection {
  AboutBand = 1,
  Tour = 2,
  Contact = 3,
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavSection, setActiveNavSection] = useState(
    EActiveNavSection.Tour
  );
  const searchParams = useSearchParams();

  const activeSectionHandler: { [key: string]: EActiveNavSection } = {
    ["kde-hrajeme"]: EActiveNavSection.Tour,
    ["kontakt"]: EActiveNavSection.Contact,
    ["o-kapele"]: EActiveNavSection.AboutBand,
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.split("#")[1];
    const section = activeSectionHandler[hash];
    if (hash && section) {
      setActiveNavSection(section);
    }
  }, [searchParams]);

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
              scroll={true}
              className={`${styles["c-menu-link"]} ${
                activeNavSection === EActiveNavSection.AboutBand &&
                styles["c-menu-link--active"]
              }`}
            >
              Kapela
            </Link>
          </li>
          <li>
            <Link
              href="/#kde-hrajeme"
              scroll={true}
              className={`${styles["c-menu-link"]} ${
                activeNavSection === EActiveNavSection.Tour &&
                styles["c-menu-link--active"]
              }`}
            >
              Kde hrajeme
            </Link>
          </li>
          <li>
            <Link
              href="/#kontakt"
              scroll={true}
              className={`${styles["c-menu-link"]} ${
                activeNavSection === EActiveNavSection.Contact &&
                styles["c-menu-link--active"]
              }`}
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
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href="/#o-kapele"
              scroll={true}
              className={`${styles["c-mobile-menu-link"]} ${
                activeNavSection === EActiveNavSection.AboutBand &&
                styles["c-menu-link--active"]
              }`}
            >
              O kapele
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href="/#kde-hrajeme"
              scroll={true}
              className={`${styles["c-mobile-menu-link"]} ${
                activeNavSection === EActiveNavSection.Tour &&
                styles["c-menu-link--active"]
              }`}
            >
              Kde hrajeme
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href="/#kontakt"
              scroll={true}
              className={`${styles["c-mobile-menu-link"]} ${
                activeNavSection === EActiveNavSection.Contact &&
                styles["c-menu-link--active"]
              }`}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
