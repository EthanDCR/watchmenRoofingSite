"use client";

import { motion } from "motion/react";
import styles from "./Coverage.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const MARKETS = [
  {
    state: "Oklahoma",
    label: "Primary Market",
    cities: ["Tulsa", "Oklahoma City", "Broken Arrow", "Owasso", "Jenks"],
    active: true,
  },
  {
    state: "Kansas",
    label: "Active Expansion",
    cities: ["Wichita", "Kansas City"],
    active: true,
  },
  {
    state: "Missouri",
    label: "Active Expansion",
    cities: ["Joplin", "Springfield"],
    active: true,
  },
  {
    state: "Arkansas",
    label: "Licensing Pending",
    cities: ["Fort Smith", "Fayetteville"],
    active: false,
  },
  {
    state: "Texas",
    label: "Licensing Pending",
    cities: ["Amarillo", "Wichita Falls"],
    active: false,
  },
] as const;

export default function Coverage() {
  return (
    <section id="coverage" className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <p className={styles.eyebrow}>Service Area</p>
          <h2 className={styles.heading}>
            Tulsa-based. <em>Midwest-bound.</em>
          </h2>
          <p className={styles.sub}>
            We started where the storms are worst — Tornado Alley. As we earn
            our licenses state by state, we bring the same crew, the same
            standards, and the same results to every market we enter.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {MARKETS.map((market, i) => (
            <motion.div
              key={market.state}
              className={`${styles.market} ${market.active ? styles.marketActive : styles.marketPending}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
            >
              <div className={styles.marketTop}>
                <span className={styles.marketState}>{market.state}</span>
                <span className={`${styles.marketLabel} ${market.active ? styles.labelActive : styles.labelPending}`}>
                  {market.label}
                </span>
              </div>
              <ul className={styles.cityList}>
                {market.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
