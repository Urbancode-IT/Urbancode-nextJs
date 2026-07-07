'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import './BranchAnnouncement.css';

const BranchAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ribbonCut, setRibbonCut] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Show popup on every page load after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // After card appears, trigger ribbon cut sequence
  useEffect(() => {
    if (isOpen) {
      // Ribbon holds for a moment, then cuts
      const ribbonTimer = setTimeout(() => {
        setRibbonCut(true);
        launchConfetti();
      }, 1400);

      // Content reveals after ribbon falls
      const contentTimer = setTimeout(() => {
        setContentReady(true);
      }, 2000);

      return () => {
        clearTimeout(ribbonTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [isOpen]);

  const launchConfetti = () => {
    const defaults = {
      startVelocity: 28,
      spread: 360,
      ticks: 70,
      zIndex: 10001,
      disableForReducedMotion: true,
    };

    // Green & gold themed confetti burst from center
    confetti({
      ...defaults,
      particleCount: 50,
      origin: { x: 0.5, y: 0.45 },
      colors: ['#22c55e', '#4ade80', '#86efac', '#16a34a', '#fbbf24', '#d9f99d'],
      scalar: 1.2,
    });

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 30,
        origin: { x: 0.3, y: 0.5 },
        colors: ['#22c55e', '#4ade80', '#fbbf24'],
        scalar: 0.9,
      });
      confetti({
        ...defaults,
        particleCount: 30,
        origin: { x: 0.7, y: 0.5 },
        colors: ['#22c55e', '#4ade80', '#fbbf24'],
        scalar: 0.9,
      });
    }, 250);
  };

  const handleClose = () => {
    setIsOpen(false);
    setRibbonCut(false);
    setContentReady(false);
  };

  // Card entry animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: 80,
      rotateX: 12,
      filter: 'blur(12px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 },
        filter: { duration: 0.5 },
        scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 40,
      rotateX: -6,
      filter: 'blur(8px)',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  // Content items stagger
  const itemVariants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`branch-announce-overlay ${isOpen ? 'active' : ''}`}>
          {/* Backdrop */}
          <motion.div
            className="branch-announce-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={handleClose}
          />

          {/* Card */}
          <motion.div
            className="branch-announce-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Green glow orb */}
            <div className="branch-announce-glow" />

            {/* Shine sweep */}
            <div className="branch-announce-shine" />

            {/* Floating particles */}
            <div className="branch-announce-particles">
              <div className="branch-announce-particle" />
              <div className="branch-announce-particle" />
              <div className="branch-announce-particle" />
              <div className="branch-announce-particle" />
              <div className="branch-announce-particle" />
            </div>

            {/* ══════ RIBBON CUTTING ══════ */}
            <div className={`ribbon-container ${ribbonCut ? 'cut' : ''}`}>
              {/* Scissors icon in the center */}
              <div className="ribbon-scissors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="3" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <circle cx="6" cy="18" r="3" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <line x1="8.5" y1="7.5" x2="20" y2="16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="8.5" y1="16.5" x2="20" y2="8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Left ribbon half */}
              <div className="ribbon-half ribbon-left">
                <div className="ribbon-band">
                  <span className="ribbon-text d-flex align-items-center gap-1"><Sparkles size={14} /> GRAND OPENING <Sparkles size={14} /></span>
                </div>
                <div className="ribbon-fold" />
              </div>

              {/* Right ribbon half */}
              <div className="ribbon-half ribbon-right">
                <div className="ribbon-band">
                  <span className="ribbon-text d-flex align-items-center gap-1"><Sparkles size={14} /> GRAND OPENING <Sparkles size={14} /></span>
                </div>
                <div className="ribbon-fold" />
              </div>

              {/* Cut spark */}
              <div className="ribbon-spark" />
            </div>

            {/* Close */}
            <button
              className="branch-announce-close"
              onClick={handleClose}
              aria-label="Close announcement"
            >
              <X size={18} />
            </button>

            {/* Content — revealed after ribbon cut */}
            <div className={`branch-announce-inner ${contentReady ? 'revealed' : ''}`}>
              <motion.h2
                className="branch-announce-title"
                variants={itemVariants}
                initial="hidden"
                animate={contentReady ? 'visible' : 'hidden'}
                custom={0}
              >
                We&apos;re Now in
              </motion.h2>

              <motion.div
                className="branch-announce-location"
                variants={itemVariants}
                initial="hidden"
                animate={contentReady ? 'visible' : 'hidden'}
                custom={0.12}
              >
                Tirunelveli
              </motion.div>

              <motion.p
                className="branch-announce-desc"
                variants={itemVariants}
                initial="hidden"
                animate={contentReady ? 'visible' : 'hidden'}
                custom={0.24}
              >
                Urbancode is expanding! Our newest branch is now open in
                Tirunelveli — bringing world-class IT training closer to you.
              </motion.p>

              <motion.div
                className="branch-announce-address"
                variants={itemVariants}
                initial="hidden"
                animate={contentReady ? 'visible' : 'hidden'}
                custom={0.34}
              >
                <MapPin size={16} className="branch-announce-address-icon" />
                <span className="branch-announce-address-text">
                  Fab Sapphire Towers, No.29/5, 3rd Floor,
                  <br />
                  South Bye Pass Road, Tirunelveli — 627005
                </span>
              </motion.div>

              <motion.a
                href="/contact-us"
                className="branch-announce-cta"
                variants={itemVariants}
                initial="hidden"
                animate={contentReady ? 'visible' : 'hidden'}
                custom={0.44}
                onClick={handleClose}
              >
                <span>Explore</span>
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BranchAnnouncement;
