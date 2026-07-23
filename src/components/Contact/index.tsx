"use client";

import { motion } from "motion/react";
import styles from "./Contact.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE_OUT, delay },
});

const DETAILS = [
  { label: "Phone", value: "phone number", href: null },
  { label: "Email", value: " email address", href: null },
//  { label: "Service Area", value: "Tulsa, OK & Surrounding Areas", href: null },
] as const;

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.layout}`}>

        <motion.div className={styles.info} {...fadeUp()}>
          <p className={styles.eyebrow}>Get In Touch</p>
          <h2 className={styles.heading}>
            Ready to protect <em>your home?</em>
          </h2>
          <p className={styles.sub}>
            Schedule a free roof inspection and we&rsquo;ll assess any storm damage,
            walk you through the insurance process, and get your property back to
            full strength.
          </p>

          <ul className={styles.details}>
            {DETAILS.map((d) => (
              <li key={d.label} className={styles.detailItem}>
                <span className={styles.detailLabel}>{d.label}</span>
                {d.href ? (
                  <a href={d.href} className={styles.detailValue}>{d.value}</a>
                ) : (
                  <span className={styles.detailValue}>{d.value}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          className={styles.form}
          {...fadeUp(0.15)}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input type="text" name="name" className={styles.input} required />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input type="email" name="email" className={styles.input} required />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Phone</span>
              <input type="tel" name="phone" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Property Address</span>
              <input type="text" name="address" className={styles.input} />
            </label>
          </div>

          <button type="submit" className={styles.submit}>
            Submit Request
          </button>
        </motion.form>

      </div>
    </section>
  );
}
