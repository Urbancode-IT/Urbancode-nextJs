import React, { useState, useEffect } from "react";
import { Globe, Smartphone, Database, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./ServicesOffer.css";

const OFFERS = [
  {
    id: 1,
    icon: <Globe size={28} />,
    title: "Custom Web Development",
    description: "End-to-end websites and web apps — responsive, fast, SEO-optimized, built for real-world impact.",
    tags: ["MERN", "MEAN", ".NET", "Python"]
  },
  {
    id: 2,
    icon: <Smartphone size={28} />,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps using Flutter & React Native — elegant and performant on iOS and Android.",
    tags: ["Flutter", "React Native", "Firebase"]
  },
  {
    id: 3,
    icon: <Database size={28} />,
    title: "AI & Data Solutions",
    description: "Intelligent dashboards, ML models, and AI features embedded into your business workflows.",
    tags: ["Power BI", "Tableau", "ML", "Python"]
  }
];

const ServicesOffer = () => {
  const [index, setIndex] = useState(1); // Default to middle card
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % OFFERS.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);
  };

  // ── AUTOPLAY ANIMATION ──
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 1800); // Even faster: 1.8 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, index]);

  return (
    <section className="services-offer" id="services-offer">
      <div className="offer-container">
        <div className="offer-header">

          <h2>Services for <span className="text-green">Clients</span></h2>
          <p className="offer-desc">
            Whether you need a digital product built or your team upskilled — we deliver excellence every time.
          </p>
        </div>

        <div 
          className="offer-slider-wrapper"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className="offer-slider">
            {OFFERS.map((o, i) => {
              // Calculate relative position
              let position = i - index;
              if (position < -1) position += OFFERS.length;
              if (position > 1) position -= OFFERS.length;

              const isActive = position === 0;
              const isSide = Math.abs(position) === 1;

              return (
                <motion.div
                  key={o.id}
                  className={`offer-card ${isActive ? "active" : ""} ${isSide ? "side" : ""}`}
                  initial={false}
                  animate={{
                    x: position * 280, // Offset based on position
                    scale: isActive ? 1.1 : 0.85,
                    opacity: isActive ? 1 : 0.6,
                    zIndex: isActive ? 10 : 5,
                    rotateY: position * -15,
                  }}
                  transition={{ type: "spring", stiffness: 600, damping: 40 }}
                >
                  <div className="offer-icon-box">
                    <span className="offer-icon">{o.icon}</span>
                  </div>
                  <h3 className="offer-title">{o.title}</h3>
                  <p className="offer-description">{o.description}</p>
                  <div className="offer-tags">
                    {o.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="offer-tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
