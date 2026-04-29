import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Aboutus.css";
const heroImg = "/portfolio/hero.png.jpeg";
import aboutData from "./aboutData";

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
    <section id="about" className="glass-about-section">
      <div className="glass-blobs">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
      </div>

      <div className="glass-about-container">
        <motion.div
          className="main-glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-grid">

            <div className="glass-content-left">
              <motion.h2
                className="glass-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                About <span className="text-green">Us</span>
              </motion.h2>

              <motion.p
                className="glass-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {aboutData.mainSection.description}
              </motion.p>

              <a href="https://www.urbancode.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button
                  className="glass-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {aboutData.mainSection.cta}
                </motion.button>
              </a>
            </div>

            {/* RIGHT: ONE BIG TAG */}
            <div className="glass-stack-right">
              <motion.div
                className="big-tag-container"
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.3 } }}
              >
                {/* TAG HOLE + STRING — top-left */}
                <div className="tag-hole-area">
                  <div className="tag-string-top"></div>
                  <div className="tag-hole"></div>
                </div>

                {/* ALL IMAGES FLIP INSIDE THIS ONE TAG */}
                <div className="tag-image-stage">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentCard.id}
                      src={currentCard.image}
                      alt={currentCard.title || currentCard.name}
                      className="tag-flipping-image"
                      onError={(e) => { e.currentTarget.src = heroImg; }}
                      initial={{ opacity: 0, scale: 0.85, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{
                        opacity: 0,
                        scale: 0.85,
                        rotateY: 90,
                        transition: { duration: 0.4, ease: "easeIn" }
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </AnimatePresence>
                </div>

                {/* TAG FOOTER */}
                <div className="tag-footer">
                  <div className="tag-footer-text">
                    <h4>{currentCard.title || currentCard.name}</h4>
                    <p>{currentCard.subtitle}</p>
                  </div>
                  <div className="dot-indicators">
                    {aboutData.focusPoints.map((_, i) => (
                      <div
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                      ></div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
