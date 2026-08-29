"use client";

import { motion } from "framer-motion";

export default function PortfolioProjectCTA() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pf-project-cta" aria-label="Start a project">
      <motion.div
        className="pf-project-cta__inner"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="pf-project-cta__title">
          Turn your vision into a{" "}
          <span className="pf-gradient-text">world-class product</span>
        </h2>
        <p className="pf-project-cta__desc">
          From concept to launch, our engineers and designers build scalable web apps,
          mobile experiences, and AI-powered platforms that win clients and drive growth.
        </p>
        <div className="pf-project-cta__actions">
          <button type="button" className="pf-btn-shine" onClick={() => scrollTo("contact")}>
            Start Your Project
          </button>
          <button type="button" className="pf-btn-outline" onClick={() => scrollTo("projects")}>
            View Our Work
          </button>
        </div>
        <div className="pf-project-cta__stats">
          <div className="pf-project-cta__stat">
            <span className="pf-project-cta__stat-num">20+</span>
            <span className="pf-project-cta__stat-label">Projects Delivered</span>
          </div>
          <div className="pf-project-cta__stat">
            <span className="pf-project-cta__stat-num">6</span>
            <span className="pf-project-cta__stat-label">Industries Served</span>
          </div>
          <div className="pf-project-cta__stat">
            <span className="pf-project-cta__stat-num">2+</span>
            <span className="pf-project-cta__stat-label">Years of Excellence</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
