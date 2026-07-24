"use client";

import { motion } from "motion/react";
import styles from "./ProofStrip.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const POINTS = [
  {
    num: "01",
    title: "Industry-Proven Leadership",
    body: "Our founders built and scaled this exact model at a national roofing company. That experience is behind every inspection, every claim, and every job we take on.",
  },
  {
    num: "02",
    title: "Claims That Actually Close",
    body: "We work with a trusted public adjuster network to take your insurance claim from first filing to full payout. No paperwork left on the table, no lowball settlements.",
  },
  {
    num: "03",
    title: "Production That Delivers",
    body: "Our sales and production teams are separate by design. Once you sign, a dedicated crew owns your project through completion and warranty, no handoff drop.",
  },
] as const;

export default function ProofStrip() {
  return (
    <section id="approach" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {POINTS.map((point, i) => (
          <motion.div
            key={point.num}
            className={styles.item}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.13 }}
          >
            <span className={styles.num}>{point.num}</span>
            <h3 className={styles.title}>{point.title}</h3>
            <p className={styles.body}>{point.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
