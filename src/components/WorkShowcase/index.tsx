"use client";

import { motion } from "motion/react";
import styles from "./WorkShowcase.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  { src: "/jon-vids/beach-professional-center.mp4",    label: "Beach Professional Center"   },
  { src: "/jon-vids/central-baptist-church.mp4",       label: "Central Baptist Church"       },
  { src: "/jon-vids/first-presbyterian-church.mp4",    label: "First Presbyterian Church"    },
  { src: "/jon-vids/tpo-roof-inspections-walkthrough.mp4", label: "TPO Roof Inspections"      },
] as const;

export default function WorkShowcase() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <h2 className={styles.heading}>Real jobs. Real results.</h2>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.src}
              className={styles.item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.1 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src={project.src} type="video/mp4" />
              </video>
              <div className={styles.overlay}>
                <span className={styles.label}>{project.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
