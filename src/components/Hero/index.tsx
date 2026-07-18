"use client";

import { motion } from "motion/react";
import styles from "./Hero.module.css";

// Matches the --ease-out token defined in globals.css
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Parent: triggers staggered reveal of children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

// Each child drops down from the nav and fades in
const itemVariants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_OUT },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Rings breathe in slowly behind the content */}
      <motion.div
        className={styles.ringsWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.0, ease: "easeOut", delay: 0.4 }}
      >
        <StormRings />
      </motion.div>

      <div className={`container ${styles.content}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className={styles.eyebrow}>
            Commercial Roofing &amp; Storm Restoration — Tulsa, OK
          </motion.p>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            We track every storm.<br />
            <em>Then we protect your roof.</em>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subhead}>
            The United Guardian leadership team built this exact model at a national
            roofing company — live storm tracking, a proven public adjuster network,
            and a production process that keeps sales and execution separate.
            Now we&rsquo;re bringing that playbook to Tulsa.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className={styles.cta}
          >
            Request a Free Inspection
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function StormRings() {
  const cx = 1036;
  const cy = 360;

  const rings = [
    { rx: 72,  ry: 58,  rot: -8, stroke: "var(--gold-500)", sw: 1.5, op: 0.6  },
    { rx: 155, ry: 122, rot:  5, stroke: "var(--gold-500)", sw: 1.2, op: 0.42 },
    { rx: 248, ry: 192, rot: -4, stroke: "var(--gold-500)", sw: 1.0, op: 0.28 },
    { rx: 355, ry: 270, rot:  6, stroke: "var(--gold-300)", sw: 0.8, op: 0.18 },
    { rx: 475, ry: 358, rot: -3, stroke: "var(--gold-300)", sw: 0.6, op: 0.11 },
    { rx: 610, ry: 455, rot:  4, stroke: "var(--gold-300)", sw: 0.5, op: 0.06 },
  ] as const;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx={cx} cy={cy} r="4" fill="var(--gold-500)" opacity="0.75" />
      {rings.map((r, i) => (
        <ellipse
          key={i}
          cx={cx} cy={cy}
          rx={r.rx} ry={r.ry}
          fill="none"
          stroke={r.stroke}
          strokeWidth={r.sw}
          opacity={r.op}
          transform={`rotate(${r.rot}, ${cx}, ${cy})`}
        />
      ))}
    </svg>
  );
}
