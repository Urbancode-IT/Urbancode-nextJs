"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "../../data/projectsData";
import "./HeroProjectTwister.css";

export default function HeroProjectTwister() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const project = PORTFOLIO_PROJECTS[index];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-showcase" aria-live="polite">
      <div
        className="hero-showcase__frame pf-shine-card"
        onClick={scrollToProjects}
        onKeyDown={(e) => e.key === "Enter" && scrollToProjects()}
        role="button"
        tabIndex={0}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            className="hero-showcase__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="hero-showcase__cat">{project.category}</span>
            <strong className="hero-showcase__title">{project.title}</strong>
          </motion.div>
        </AnimatePresence>

        <div className="hero-showcase__chrome">
          <div className="hero-showcase__dots">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-showcase__url">
            {project.link.replace("https://", "").replace("www.", "")}
          </div>
        </div>

        <div className="hero-showcase__viewport">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.id}
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="hero-showcase__thumbs">
        {PORTFOLIO_PROJECTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`hero-showcase__thumb pf-shine-card${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Preview ${p.title}`}
          >
            <img src={p.image} alt="" />
          </button>
        ))}
      </div>

      <p className="hero-showcase__note">
        <span className="pf-gradient-text">20+ projects</span> delivered
      </p>
    </div>
  );
}
