'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import EnquiryFormModal from '../components/common/EnquiryFormModal';
import './KidsHero.css';

/**
 * KidsHero v2 – Premium EdTech Redesign
 * Mobile  : single column → badge → title → desc → hero card → stats → CTAs
 * Tablet  : 2-col → left text | right hero card with floating elements
 * Desktop : wide 2-col with trust band below
 */
const KidsHero = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const router = useRouter();

  const goToPlayzone = () => router.push('/kids-courses/playzone');
  const scrollToCourses = () => {
    const el = document.getElementById('kids-courses-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="kh2-section">
      <div className="kh2-inner">

        {/* ════════ LEFT COLUMN ════════
            On mobile: display:contents dissolves this wrapper so
            children become direct flex items of kh2-inner, allowing
            correct order: badge(1) → title(2) → desc(3) → [card](4) → stats(5) → cta(6)
        */}
        <div className="kh2-left">

          {/* 1 – Announcement badge */}
          <div className="kh2-badge-wrap">
            <button
              className="kh2-badge"
              onClick={goToPlayzone}
              id="kids-hero-playzone-card"
              aria-label="Visit Kids Play Zone"
            >
              <span className="kh2-badge-text">Kids Play Zone is Live!</span>
              <span className="kh2-badge-link">Free coding games →</span>
            </button>
          </div>

          {/* 2 – Headline */}
          <h1 className="kh2-title">
             Preparing Kids for a World Beyond {' '}
            <span className="kh2-highlight">
              Textbooks
              <svg className="kh2-underline-svg" viewBox="0 0 220 14" fill="none" aria-hidden="true">
                <path d="M3 10C55 4 140 4 217 10" stroke="#00C16A" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M10 4C65 -1 145 -1 210 4"  stroke="#00C16A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </span>
          </h1>

          {/* 3 – Description */}
          <p className="kh2-desc">
           Beyond academics, nurturing the creators and innovators of tomorrow.
          </p>

          {/* CTA buttons */}
          <div className="kh2-cta-row">
            <button
              className="kh2-btn-primary"
              onClick={() => setShowEnquiry(true)}
              id="kids-hero-enroll-btn"
            >
              Book Free Demo
            </button>
            <button
              className="kh2-btn-secondary"
              onClick={scrollToCourses}
              id="kids-hero-explore-btn"
            >
              Explore Courses
            </button>
          </div>
        </div>

        {/* ════════ RIGHT COLUMN — Hero Card (order:4 on mobile) ════════ */}
        <div className="kh2-right">
          <div className="kh2-hero-card" id="kids-hero-image-section">
            {/* Main child image — no bg, no floating cards */}
            <img
              src="/images/KidsImages/kidsspace-hero.png"
              alt="Kid learning to code"
              className="kh2-card-img"
            />
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
