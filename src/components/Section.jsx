import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ children, className, id, variant = 'fadeUp', delay = 0 }) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay } },
    },
  };
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant] || variants.fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}
