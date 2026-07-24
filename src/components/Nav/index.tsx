"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Logo lockup */}
        <a href="#" className={styles.logoLink} aria-label="Watchmen Roofing — home">
          <Image
            src="/updatedWatchmenLogo.png"
            alt="Watchmen Roofing"
            width={480}
            height={150}
            priority
            className={styles.logo}
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={styles.cta}>
                Request Free Inspection
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className={styles.drawer} aria-label="Mobile navigation">
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={styles.drawerCta}
                onClick={() => setMenuOpen(false)}
              >
                Request Inspection
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
