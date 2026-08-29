"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DigitalFuture.css";

const CAPABILITIES = [
  {
    id: "01",
    label: "Product Engineering",
    detail: "Web and mobile products built for scale, security, and long-term maintainability.",
  },
  {
    id: "02",
    label: "Team Enablement",
    detail: "Corporate training and upskilling aligned to your stack and delivery goals.",
  },
  {
    id: "03",
    label: "AI Integration",
    detail: "Intelligent features, automation, and data pipelines embedded into your workflows.",
  },
  {
    id: "04",
    label: "Long-term Partnership",
    detail: "Dedicated support from discovery through launch, iteration, and growth.",
  },
];

function formatStatusTime(date) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
}

const DigitalFuture = () => {
  const [active, setActive] = useState(0);
  const [currentTime, setCurrentTime] = useState(() => formatStatusTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % CAPABILITIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tick = () => setCurrentTime(formatStatusTime(new Date()));
    tick();
    const clock = setInterval(tick, 1000);
    return () => clearInterval(clock);
  }, []);

  return (
    <section className="digital-future pf-section" id="digital-future">
      <div className="digital-future__container">
        <div className="digital-future__layout">
          <motion.div
            className="digital-future__copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="pf-section-head pf-section-head--rich" style={{ textAlign: "left", marginBottom: 0 }}>
              <h2>
                Digital <span className="text-green">Future</span>
              </h2>
            </div>
            <p className="digital-future__subheading">
              Whether you need a product built, a team trained, or a long-term technology partner —
              Urbancode delivers with precision and accountability.
            </p>
            <ul className="digital-future__list">
              <li>Agile delivery with clear milestones</li>
              <li>Production-grade architecture and QA</li>
              <li>Transparent communication at every stage</li>
            </ul>
          </motion.div>

          <motion.div
            className="digital-future__device"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="df-phone-wrap">
              <div className="df-phone pf-shine-card">
                <div className="df-phone__island" />
                <div className="df-phone__screen">
                  <div className="df-phone__status">
                    <span className="df-phone__time">{currentTime}</span>
                    <div className="df-phone__status-icons" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="df-phone__header">
                    <span className="df-phone__brand">Urbancode</span>
                    <span className="df-phone__live">
                      <span className="df-phone__live-dot" />
                      LIVE
                    </span>
                  </div>

                  <div className="df-phone__ticker-window">
                    <div className="df-phone__ticker-track">
                      {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
                        <div key={`${item.id}-${i}`} className="df-phone__ticker-item">
                          <span className="df-phone__ticker-id">{item.id}</span>
                          <span className="df-phone__ticker-label">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="df-phone__dots">
                    {CAPABILITIES.map((item, i) => (
                      <span
                        key={item.id}
                        className={`df-phone__dot${i === active ? " df-phone__dot--active" : ""}`}
                      />
                    ))}
                  </div>

                  <div className="df-phone__banner">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="df-phone__banner-label">{CAPABILITIES[active].label}</span>
                        <p>{CAPABILITIES[active].detail}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="df-phone__home-bar" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalFuture;
