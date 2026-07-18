"use client";

import { motion } from "motion/react";
import styles from "./Process.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    num: "01",
    title: "Storm Tracking",
    body: "We monitor storm cells across the region. When severe weather hits, we already know which areas were affected and we move immediately.",
  },
  {
    num: "02",
    title: "Inspection & Scope",
    body: "We get to your property fast and document every inch of damage — roof, gutters, flashing, and anything else the storm touched.",
  },
  {
    num: "03",
    title: "Insurance Navigation",
    body: "We work your claim directly with your insurer, making sure the damage scope is complete and the payout reflects what the job actually costs.",
  },
  {
    num: "04",
    title: "Production",
    body: "Our production team — separate from sales — executes the repair or replacement to spec, on schedule, without cutting corners.",
  },
  {
    num: "05",
    title: "Warranty & Follow-Up",
    body: "Every job comes with a warranty. We follow up after completion to make sure everything held and you're taken care of.",
  },
] as const;

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.heading}>Five steps. One team. Done right.</h2>
        </motion.div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE_OUT, delay: i * 0.1 }}
            >
              {/* Number + connecting line */}
              <div className={styles.indicator}>
                <span className={styles.num}>{step.num}</span>
                {i < STEPS.length - 1 && <div className={styles.connector} />}
              </div>

              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
