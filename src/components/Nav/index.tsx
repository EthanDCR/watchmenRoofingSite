"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
] as const;

const HOBBLE_INTERVAL_MS = 6000;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaControls = useAnimationControls();

  useEffect(() => {
    const hobbleTimer = setInterval(() => {
      ctaControls.start({
        rotate: [0, -8, 8, -6, 6, -3, 3, 0],
        transition: { duration: 0.55, ease: "easeInOut" },
      });
    }, HOBBLE_INTERVAL_MS);

    return () => clearInterval(hobbleTimer);
  }, [ctaControls]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Logo lockup */}
        <a href="#" className={styles.logoLink} aria-label="United Guardian Roofing & Construction — home">
          <Image
            src="/newColorLogo.png"
            alt="United Guardian Roofing & Construction"
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
              <motion.a
                href="#contact"
                className={styles.cta}
                animate={ctaControls}
                style={{ display: "inline-block" }}
              >
                Request Free Inspection
              </motion.a>
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
