"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PortfolioSection({ children, className = "", id, as: Tag = "section" }) {
  const MotionTag = motion[Tag] || motion.section;

  return (
    <MotionTag
      id={id}
      className={`pf-section ${className}`.trim()}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
