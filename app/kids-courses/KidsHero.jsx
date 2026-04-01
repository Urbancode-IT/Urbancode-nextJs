'use client';
import React, { useState } from 'react';
import EnquiryFormModal from '../components/common/EnquiryFormModal';
import './KidsHero.css';

/**
 * KidsHero Component
 * A responsive, full-viewport hero section designed for a kids-facing course or space.
 * Features smooth scaling fonts, semantic HTML, and an anchored responsive image.
 */
const KidsHero = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section className="kids-hero-container">
      {/* Content Section: Heading, Subheading, and Button */}
      <div className="kids-hero-content">
        <h1 className="kids-hero-heading" id="kids-hero-title">
          From Screen Time to <br /> Skill Time
        </h1>
        <p className="kids-hero-subheading">
          Turn your child's curiosity into creativity
        </p>
        <button 
          onClick={() => setShowEnquiry(true)}
          className="kids-hero-button" 
          aria-label="Enroll in a kids course today"
        >
          Enroll today
        </button>
      </div>

      {showEnquiry && (
        <EnquiryFormModal
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          courseName="Kids Course Enrollment"
        />
      )}

      {/* Image Section: Anchored at the bottom of the 100vh hero */}
      <div className="kids-hero-image-wrapper">
        <img 
          src="/images/home/kidshero.png" 
          alt="Group of happy, curious kids learning" 
          className="kids-hero-image"
          loading="eager"
          itemProp="image"
        />
      </div>
    </section>
  );
};

export default KidsHero;
