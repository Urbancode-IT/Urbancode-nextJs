'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import EnquiryFormModal from '../common/EnquiryFormModal';
import './FestivePopup.css';

const SESSION_KEY = 'deepavali_popup_shown_2026';

const FestivePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem(SESSION_KEY);
    if (hasShown) return undefined;

    const timer = setTimeout(() => {
      setIsOpen(true);
      launchCelebration();
      sessionStorage.setItem(SESSION_KEY, 'true');
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const launchCelebration = () => {
    const defaults = {
      startVelocity: 32,
      spread: 70,
      ticks: 80,
      zIndex: 10001,
      disableForReducedMotion: true,
      colors: ['#fbbf24', '#f59e0b', '#ef4444', '#fb923c', '#fde68a', '#ffffff'],
    };

    // IPL-style scoreboard bursts rising from bottom
    confetti({
      ...defaults,
      particleCount: 55,
      origin: { x: 0.5, y: 1 },
      angle: 90,
      scalar: 1.15,
    });
    confetti({
      ...defaults,
      particleCount: 35,
      origin: { x: 0.18, y: 1 },
      angle: 75,
      scalar: 0.95,
    });
    confetti({
      ...defaults,
      particleCount: 35,
      origin: { x: 0.82, y: 1 },
      angle: 105,
      scalar: 0.95,
    });

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 40,
        origin: { x: 0.5, y: 0.85 },
        angle: 90,
        startVelocity: 24,
      });
    }, 280);
  };

  const handleClose = () => setIsOpen(false);

  const handleEnquire = () => {
    setIsEnquiryOpen(true);
    setIsOpen(false);
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.72,
      y: 120,
      rotateX: 14,
      filter: 'blur(12px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 },
        filter: { duration: 0.5 },
        scale: { duration: 0.75, ease: [0.34, 1.56, 0.64, 1] },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.88,
      y: 56,
      rotateX: -6,
      filter: 'blur(8px)',
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <div className="festive-popup-overlay deepavali-popup-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="festive-backdrop deepavali-backdrop"
              onClick={handleClose}
            />

            <motion.div
              className="deepavali-scorecard"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ perspective: 1200 }}
            >
              <div className="deepavali-scorecard-glow" aria-hidden />
              <div className="deepavali-scorecard-shine" aria-hidden />
              <div className="deepavali-sparks" aria-hidden>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <button
                type="button"
                className="deepavali-close"
                onClick={handleClose}
                aria-label="Close Deepavali offer"
              >
                <X size={18} />
              </button>

              <p className="deepavali-eyebrow">
                <Sparkles size={14} aria-hidden />
                Deepavali Special
                <Sparkles size={14} aria-hidden />
              </p>

              <h2 className="deepavali-title">Light up your career this Deepavali</h2>
              <p className="deepavali-sub">
                Festive offers on IT courses — live projects, mentorship, and placement support.
              </p>

              <div className="deepavali-stats" aria-hidden>
                <div>
                  <strong>20%</strong>
                  <span>Festive off</span>
                </div>
                <div>
                  <strong>Live</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>Job</strong>
                  <span>Support</span>
                </div>
              </div>

              <button type="button" className="deepavali-cta" onClick={handleEnquire}>
                Enquire now
                <ArrowRight size={16} aria-hidden />
              </button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <EnquiryFormModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        courseName="Deepavali Special Offer"
        leadPlace="Deepavali celebration popup"
      />
    </>
  );
};

export default FestivePopup;
