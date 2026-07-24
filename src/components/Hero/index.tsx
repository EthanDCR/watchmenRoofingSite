"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";
import styles from "./Hero.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const HOBBLE_INTERVAL_MS = 5000;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_OUT },
  },
};

export default function Hero() {
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
    <section className={styles.hero}>
      {/* Rings breathe in slowly behind everything */}
      <motion.div
        className={styles.ringsWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.0, ease: "easeOut", delay: 0.4 }}
      >
        <StormRings />
      </motion.div>

      <div className={`container ${styles.content}`}>
        {/* ── Left column: text ── */}
        <motion.div
          className={styles.textCol}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className={styles.eyebrow}>
            Storm Damage Roofing — Tulsa, OK &amp; Surrounding Areas
          </motion.p>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            Storm damage doesn&rsquo;t wait.<br />
            <em>Neither do we.</em>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subhead}>
            Watchmen Roofing monitors storm activity across the region so we&rsquo;re
            on the ground fast when severe weather hits. We inspect your roof,
            document the damage, and manage your insurance claim from start to finish.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className={styles.cta}
            animate={ctaControls}
            style={{ display: "inline-block" }}
          >
            Request a Free Inspection
          </motion.a>
        </motion.div>

        {/* ── Right column: video ── */}
        <motion.div
          className={styles.videoCol}
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.75 }}
        >
          <div className={styles.videoFrame}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={styles.video}
            >
              <source src="https://ruwcyviwkhtrxmgullug.supabase.co/storage/v1/object/sign/watchmen-videos/st-thomas-square.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MjJlYjM1YS02NGM4LTQ2MDUtOGU0ZC0wZDBiYmM1Yzg0NjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3YXRjaG1lbi12aWRlb3Mvc3QtdGhvbWFzLXNxdWFyZS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODc4NTk2LCJleHAiOjE4MTY0MTQ1OTZ9.F-ADXz1D8xv9CTcrWSD4DkwGAfI-b1jVUGpaLh762Nw" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StormRings() {
  const cx = 1036;
  const cy = 360;

  const rings = [
    { rx: 72,  ry: 58,  rot: -8, stroke: "var(--orange-500)", sw: 1.5, op: 0.6  },
    { rx: 155, ry: 122, rot:  5, stroke: "var(--orange-500)", sw: 1.2, op: 0.42 },
    { rx: 248, ry: 192, rot: -4, stroke: "var(--orange-500)", sw: 1.0, op: 0.28 },
    { rx: 355, ry: 270, rot:  6, stroke: "var(--orange-300)", sw: 0.8, op: 0.18 },
    { rx: 475, ry: 358, rot: -3, stroke: "var(--orange-300)", sw: 0.6, op: 0.11 },
    { rx: 610, ry: 455, rot:  4, stroke: "var(--orange-300)", sw: 0.5, op: 0.06 },
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
      <circle cx={cx} cy={cy} r="4" fill="var(--orange-500)" opacity="0.75" />
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
