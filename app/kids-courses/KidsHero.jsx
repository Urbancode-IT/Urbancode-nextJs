'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import EnquiryFormModal from '../components/common/EnquiryFormModal';
import './KidsHero.css';

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

        <div className="kh2-left">

          {/* 1 – Announcement badge */}
          <div className="kh2-badge-wrap">
            <button
              className="kh2-badge"
              onClick={goToPlayzone}
              id="kids-hero-playzone-card"
              aria-label="Visit Kids Play Zone — free coding games"
            >
              {/* Character illustration left */}
              <div className="kh2-badge-char" aria-hidden="true">
                <img
                  src="/images/KidsImages/playzone-mascot.png"
                  alt=""
                  className="kh2-badge-char-img"
                />
              </div>

              {/* Body text */}
              <div className="kh2-badge-body">

                {/* Eyebrow */}
                <div className="kh2-badge-eyebrow">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M6.5 1L7.8 4.7H11.7L8.5 7L9.8 10.7L6.5 8.4L3.2 10.7L4.5 7L1.3 4.7H5.2L6.5 1Z" fill="#00C16A"/>
                  </svg>
                  <span className="kh2-live-tag">Free </span>
                </div>

                {/* Title with mixed colors */}
                <div className="kh2-badge-title">
                  <span className="kh2-title-kids">Kids </span>
                  <span className="kh2-title-play">Play </span>
                  <span className="kh2-title-zone">Zone</span>
                </div>

                {/* Subtext */}
                <div className="kh2-badge-subtext">Safe. Fun. Always for Kids!</div>

                {/* Decorative leaf bottom right of body */}
                <span className="kh2-badge-leaf-br" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M3 17C3 17 6 10 14 8C14 8 12 15 3 17Z" fill="#4ade80"/>
                  </svg>
                </span>
              </div>

              {/* Decorative elements top-right of body */}
              <div className="kh2-badge-decos" aria-hidden="true">
                <span className="kh2-deco-leaf-tl">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M3 17C3 17 6 10 14 8C14 8 12 15 3 17Z" fill="#4ade80"/>
                  </svg>
                </span>
                <span className="kh2-deco-star">
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 1L7.8 4.7H11.7L8.5 7L9.8 10.7L6.5 8.4L3.2 10.7L4.5 7L1.3 4.7H5.2L6.5 1Z" fill="#FFC83D"/>
                  </svg>
                </span>
              </div>

              {/* Notch divider */}
              <div className="kh2-badge-notch" aria-hidden="true">
                <div className="kh2-notch-dot" />
                <div className="kh2-notch-dot" />
                <div className="kh2-notch-dot" />
              </div>

              {/* CTA pill */}
              <div className="kh2-badge-cta" aria-hidden="true">
                <span className="kh2-badge-cta-label">Play Now</span>
                <span className="kh2-badge-cta-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.22)"/>
                    <path d="M5 8h6M8.5 5.5L11 8l-2.5 2.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </button>
          </div>

          {/* 2 – Headline */}
          <h1 className="kh2-title">
            Preparing Kids for a World Beyond{' '}
            <span className="kh2-highlight">
              Textbooks
              <svg
                className="kh2-underline-svg"
                viewBox="0 0 220 14"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 10C55 4 140 4 217 10" stroke="#00C16A" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M10 4C65 -1 145 -1 210 4" stroke="#00C16A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>

          {/* 3 – Description */}
          <p className="kh2-desc">
            Beyond academics, nurturing the creators and innovators of tomorrow.
          </p>

          {/* 4 – CTA buttons */}
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

        {/* RIGHT COLUMN */}
        <div className="kh2-right">
          <div className="kh2-hero-card" id="kids-hero-image-section">
            <img
              src="/images/KidsImages/kidsspace-heroo.png"
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