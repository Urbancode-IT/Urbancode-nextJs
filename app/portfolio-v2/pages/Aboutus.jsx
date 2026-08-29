import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Aboutus.css";
import aboutData from "./aboutData";

const fallbackImg = "/portfolio/hero.png.jpeg";

function AboutUs() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutData.focusPoints.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentCard = aboutData.focusPoints[index];

  return (
    <section id="about" className="glass-about-section pf-section">
      <div className="glass-about-container">
        <motion.div
          className="main-glass-card pf-shine-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-grid">
            <div className="glass-content-left">
              <div className="pf-section-head" style={{ textAlign: "left", marginBottom: 20 }}>
                <h2 className="glass-heading">
                  About <span className="text-green">Us</span>
                </h2>
              </div>

              <p className="glass-description">{aboutData.mainSection.description}</p>

              <a
                href="https://www.urbancode.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-cta-link"
              >
                <span className="pf-btn-shine glass-cta">{aboutData.mainSection.cta}</span>
              </a>
            </div>

            <div className="glass-stack-right">
              <div className="about-panel pf-shine-card">
                <div className="about-panel__image">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentCard.id}
                      src={currentCard.image}
                      alt={currentCard.title || currentCard.name}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImg;
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                </div>
                <div className="about-panel__footer">
                  <h4>{currentCard.title || currentCard.name}</h4>
                  <p>{currentCard.subtitle}</p>
                  <div className="dot-indicators">
                    {aboutData.focusPoints.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`dot${i === index ? " active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Focus ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
