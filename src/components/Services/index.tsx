"use client";

import { motion } from "motion/react";
import styles from "./Services.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE_OUT, delay },
});

const SECONDARY = [
  {
    title: "Residential Storm Restoration",
    body: "Storm damage on your home? We get there fast, document everything, and manage your homeowner's insurance claim through to a full payout and restored roof.",
    tag: "Residential",
  },
  {
    title: "Insurance Claim Support",
    body: "Every project includes full insurance navigation. We know how insurers scope damage and we document accordingly — so your claim doesn't come back short.",
    tag: "Every Project",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">

        {/* ── Header ── */}
        <motion.div className={styles.header} {...fadeUp()}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 className={styles.heading}>Built for every roof, every claim.</h2>
        </motion.div>

        {/* ── Body: featured left, stack right ── */}
        <div className={styles.body}>

          {/* Commercial Roofing — featured */}
          <motion.div className={styles.featured} {...fadeUp(0.1)}>
            <div>
              <span className={styles.badge}>Primary Service</span>
              <h3 className={styles.featuredTitle}>Commercial Roofing</h3>
              <p className={styles.featuredBody}>
                Our core business. We handle full commercial roof systems — from
                detailed damage scoping and insurance documentation to complete
                installation and long-term warranty. TPO, EPDM, modified bitumen,
                metal — we work with the systems that commercial properties actually
                need, and we back every job with a warranty that holds.
              </p>
            </div>
            <div>
              <p className={styles.metaLabel}>Systems we work with</p>
              <ul className={styles.metaList}>
                <li>TPO</li>
                <li>EPDM</li>
                <li>Modified Bitumen</li>
                <li>Metal Roofing</li>
                <li>Built-Up Roofing</li>
              </ul>
            </div>
          </motion.div>

          {/* Secondary stack */}
          <div className={styles.grid}>
            {SECONDARY.map((svc, i) => (
              <motion.div
                key={svc.title}
                className={styles.card}
                {...fadeUp(0.15 + i * 0.1)}
              >
                <span className={styles.cardTag}>{svc.tag}</span>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardBody}>{svc.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
