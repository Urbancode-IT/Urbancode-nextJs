'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import EnquiryFormModal from '../common/EnquiryFormModal';
import './FestivePopup.css';

const FestivePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('festive_popup_shown');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        triggerConfetti();
        sessionStorage.setItem('festive_popup_shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 10001
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePosterClick = () => {
    setIsEnquiryOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="festive-popup-overlay">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="festive-backdrop"
              onClick={handleClose}
            />
            
            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="festive-content-wrapper"
            >
              <div className="festive-poster-card">
                <button className="close-btn" onClick={handleClose} aria-label="Close">
                  <X size={24} />
                </button>
                
                <div 
                  className="festive-image-container clickable" 
                  onClick={handlePosterClick}
                  title="Click to Enquire"
                >
                  <Image 
                    src="/images/courses/tamilnewyear.jpg" 
                    alt="Tamil New Year Special"
                    width={600}
                    height={800}
                    className="festive-image"
                    priority
                  />
                  <div className="festive-shimmer"></div>
                  <div className="click-indicator">
                    <span>Click to Enquire Now!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <EnquiryFormModal 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        courseName="Tamil New Year Special Offer"
      />
    </>
  );
};

export default FestivePopup;
