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

  const scrollToCourses = () => {
    const element = document.getElementById('kids-courses-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="kids-hero-section">
      <div className="kids-hero-container">
        <div className="kids-hero-content-left">
          <div className="kids-hero-text-wrap">
            <h1 className="kids-hero-main-title">
              Keep <span className="highlight-text">
                Learning
                <svg className="underline-svg" viewBox="0 0 262 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15C50 8 150 8 260 15" stroke="#00B56F" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M10 5C60 -2 160 -2 250 5" stroke="#00B56F" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </span><br />
              on Track
            </h1>
            <p className="kids-hero-description">
              When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach
            </p>
            <div className="kids-hero-action">
              <button 
                onClick={() => setShowEnquiry(true)}
                className="kids-enroll-btn"
              >
                Enroll now
              </button>
              <img src="/images/KidsImages/arrow.png" alt="arrow" className="kids-arrow-img" />
            </div>
          </div>

          <div className="kids-hero-stats-grid">
            <div className="stat-card-gray stat-mentors">
              <h2 className="stat-number">210+</h2>
              <p className="stat-label">Best certified mentors worldwide</p>
            </div>
            <div 
              className="stat-card-gray stat-transform"
              onClick={scrollToCourses}
            >
              <div className="stat-image-placeholder">
                 <img src="/images/KidsImages/junior.png" alt="Transforming" />
              </div>
              <h3 className="stat-title">Transforming schools and substitute teachers</h3>
              <div className="stat-icon-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <img src="/images/KidsImages/scribble.png" alt="scribble" className="kids-scribble-img" />
            </div>
          </div>
        </div>

        <div className="kids-hero-image-right" onClick={scrollToCourses}>
          <div className="image-bg-blob"></div>
          <img 
            src="/images/KidsImages/kidsspace-hero.png" 
            alt="Kid with books" 
            className="main-hero-img"
          />
          <div className="decoration-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <div className="pear-decoration">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C10 2 8 4 8 7C8 8.5 8.5 10 9.5 11C8 12.5 7 14.5 7 17C7 19.5 9 22 12 22C15 22 17 19.5 17 17C17 14.5 16 12.5 14.5 11C15.5 10 16 8.5 16 7C16 4 14 2 12 2Z" stroke="#FAF8F4" strokeWidth="1"/>
             </svg>
          </div>
        </div>
      </div>

      {showEnquiry && (
        <EnquiryFormModal
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          courseName="Kids Course Enrollment"
        />
      )}
    </section>
  );
};

export default KidsHero;
