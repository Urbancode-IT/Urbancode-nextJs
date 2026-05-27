'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import './ComingSoonPopup.css';

const ComingSoonPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('coming_soon_popup_shown');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('coming_soon_popup_shown', 'true');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="coming-soon-popup-overlay">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="coming-soon-backdrop"
              onClick={handleClose}
            />
            
            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="coming-soon-content-wrapper"
            >
              <div className="coming-soon-poster-card">
                <button className="close-btn" onClick={handleClose} aria-label="Close">
                  <X size={24} />
                </button>
                
                <div className="coming-soon-image-container">
                  <Image 
                    src="/images/courses/coming-soon.webp" 
                    alt="New Chapter Begins - Coming Soon"
                    width={600}
                    height={800}
                    className="coming-soon-image"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComingSoonPopup;
