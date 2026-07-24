"use client";

import { motion } from "motion/react";
import styles from "./WorkShowcase.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  { src: "https://ruwcyviwkhtrxmgullug.supabase.co/storage/v1/object/sign/watchmen-videos/beach-professional-center.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MjJlYjM1YS02NGM4LTQ2MDUtOGU0ZC0wZDBiYmM1Yzg0NjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3YXRjaG1lbi12aWRlb3MvYmVhY2gtcHJvZmVzc2lvbmFsLWNlbnRlci5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODc4NTQ0LCJleHAiOjE4MTY0MTQ1NDR9.ZnVSO7h9vTPgEyhSnhu-dSFha3Go4fXSJdbMGThJAwE", label: "Beach Professional Center" },
  { src: "https://ruwcyviwkhtrxmgullug.supabase.co/storage/v1/object/sign/watchmen-videos/central-baptist-church.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MjJlYjM1YS02NGM4LTQ2MDUtOGU0ZC0wZDBiYmM1Yzg0NjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3YXRjaG1lbi12aWRlb3MvY2VudHJhbC1iYXB0aXN0LWNodXJjaC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODc4NTYwLCJleHAiOjE4MTY0MTQ1NjB9.3njBz-XsA2J8SO7MTJb-eMSGM6sP1Ws_EVft80up184", label: "Central Baptist Church" },
  { src: "https://ruwcyviwkhtrxmgullug.supabase.co/storage/v1/object/sign/watchmen-videos/first-presbyterian-church.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MjJlYjM1YS02NGM4LTQ2MDUtOGU0ZC0wZDBiYmM1Yzg0NjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3YXRjaG1lbi12aWRlb3MvZmlyc3QtcHJlc2J5dGVyaWFuLWNodXJjaC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODc4NTgxLCJleHAiOjE4MTY0MTQ1ODF9.M7-Eusjuo553qfnG5FoyCIEtCalZwLKKad2t3hW8A0s", label: "First Presbyterian Church" },
  { src: "https://ruwcyviwkhtrxmgullug.supabase.co/storage/v1/object/sign/watchmen-videos/tpo-roof-inspections-walkthrough.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MjJlYjM1YS02NGM4LTQ2MDUtOGU0ZC0wZDBiYmM1Yzg0NjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3YXRjaG1lbi12aWRlb3MvdHBvLXJvb2YtaW5zcGVjdGlvbnMtd2Fsa3Rocm91Z2gubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDg3ODYxNiwiZXhwIjoxODE2NDE0NjE2fQ.E_jBjbdP6_sOtOWeBtkglHUiMt4sJo1hnNFiqEEQxGc", label: "TPO Roof Inspections" },
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
