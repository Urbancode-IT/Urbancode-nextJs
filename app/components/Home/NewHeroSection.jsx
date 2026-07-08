// NewHeroSection.jsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import './NewHeroSection.css';
import EnquiryFormModal from '../common/EnquiryFormModal';

/* ─── Flight Loading Overlay ─── */
const FlightOverlay = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="flight-overlay">
      <div className="flight-inner">
        <svg className="flight-plane" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 32L28 8l4 12 20-8-10 20 10 4-24 8 4-12L4 32z" fill="#00B56F" opacity="0.9"/>
          <path d="M28 8L32 20M32 20L52 12M32 20L42 40M42 40L52 16M42 40L18 48M18 48L32 20M18 48L22 36" stroke="#004F30" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div className="flight-trail" />
        <p className="flight-label">Preparing your study abroad journey…</p>
      </div>
    </div>
  );
};

const HeroTop = ({ onEnrollClick, onStudyAbroadClick }) => {
  return (
    <div className="hero-top">
      <div className="new-hero-title">
        <span className="hero-title-line1"> The right skill today</span>
        <br />
        <span className="hero-title-line2">for the right career tomorrow</span>
      </div>
      <p className="new-hero-description">
        Master in-demand IT skills with expert-led training, hands-on projects, certification programs, and career-focused learning all in one place.
      </p>
      <div className="hero-buttons">
        {/* Enroll Now first (primary style) */}
        <button onClick={onEnrollClick} className="hero-btn-primary">
          <span>Enroll now</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58331 10.9997H17.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.9999 4.58301L17.4166 10.9997L10.9999 17.4163" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Study Abroad second (secondary / outline style) */}
        <button onClick={onStudyAbroadClick} className="hero-btn-secondary">
          <span>Study Abroad</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58331 10.9997H17.4166" stroke="url(#sa_gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.9999 4.58301L17.4166 10.9997L10.9999 17.4163" stroke="url(#sa_gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="sa_gradient" x1="4.58331" y1="10.9997" x2="17.4166" y2="10.9997" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B56F" />
                <stop offset="1" stopColor="#004F30" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

const cardsData = [
  {
    level: 'BEGINNER',
    title: 'AI Powered Fullstack',
    desc: 'Master HTML, CSS and React alongside AI tools to build interactive web applications',
    duration: '12 Weeks • React + AI',
    gradient: 'linear-gradient(129.99deg, #7A1FCD -3.08%, #CA90FF 119.93%)',
    link: '/courses/fullstack-development/ai-powered-fullstack'
  },
  {
    level: 'ADVANCED',
    title: 'AI and ML',
    desc: 'Deep dive into Machine Learning algorithms and Artificial Intelligence models.',
    duration: '8 Weeks • Certification',
    gradient: 'linear-gradient(129.31deg, #9F6E00 -2.98%, #EAB94B 118.56%)',
    link: '/courses/ai-and-data-science/ai-and-ml'
  },
  {
    level: 'INTERMEDIATE',
    title: 'Gen AI',
    desc: 'Learn Generative AI to build intelligent applications and robust automation.',
    duration: '10 Weeks • Python',
    gradient: 'linear-gradient(130.3deg, #A22C27 -5.39%, #FF7C77 115.93%)',
    link: '/courses/ai-and-data-science/gen-ai'
  },
  {
    level: 'INTERMEDIATE',
    title: 'Power Automate',
    desc: 'Automate repetitive tasks and workflows seamlessly using Microsoft Power Automate.',
    duration: '14 Weeks • Hands-on',
    gradient: 'linear-gradient(130.48deg, #02284F 2.78%, #036AD5 122.15%)',
    link: '/courses/automation/microsoft-power-automate'
  }
];

import Link from 'next/link';

const HeroBottom = ({
  carouselRef,
  carouselWrapperRef,
  cardsContainerStyle,
  isHovered,
  setIsHovered,
  onCarouselScroll,
  onScrollCards,
  canScrollPrev,
  canScrollNext,
}) => {
  return (
    <div className="hero-bottom">
      <div className="hero-bottom-header">
        <h2 className="hero-bottom-title">AI Powered Courses</h2>
        <Link href="/courses-categories" className="hero-bottom-explore">
          Explore All &rarr;
        </Link>
      </div>

      {/* Nav arrows + card carousel — arrows visible on mobile AND tablet */}
      <div className="hero-cards-wrapper" ref={carouselWrapperRef}>
        <button
          type="button"
          className="hero-cards-nav hero-cards-nav-prev"
          onClick={() => onScrollCards(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous courses"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div
          className="hero-cards-container"
          ref={carouselRef}
          style={cardsContainerStyle}
          onScroll={onCarouselScroll}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cardsData.map((card, index) => (
            <Link href={card.link} key={index} className="hero-card" style={{ background: card.gradient, textDecoration: 'none' }}>
              <span className="hero-card-level">{card.level}</span>
              <div className="hero-card-glass">
                <h3 className="hero-card-title">{card.title}</h3>
                <p className="hero-card-desc">{card.desc}</p>
              </div>
              <div className="hero-card-footer">
                <span className="hero-card-duration">{card.duration}</span>
                <button className="hero-card-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 14.1667L14.1666 5.83337" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83331 5.83337H14.1666V14.1667" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="hero-cards-nav hero-cards-nav-next"
          onClick={() => onScrollCards(1)}
          disabled={!canScrollNext}
          aria-label="Next courses"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const CARD_WIDTH = 260;
const CARD_GAP = 16;

export default function NewHeroSection() {
  const router = useRouter();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [showFlightOverlay, setShowFlightOverlay] = useState(false);
  const carouselRef = React.useRef(null);
  const carouselWrapperRef = React.useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleStudyAbroadClick = useCallback(() => {
    setShowFlightOverlay(true);
  }, []);

  const handleFlightDone = useCallback(() => {
    setShowFlightOverlay(false);
    router.push('/study-abroad');
  }, [router]);

  const updateScrollButtons = React.useCallback(() => {
    const slider = carouselRef.current;
    if (!slider) return;
    setCanScrollPrev(slider.scrollLeft > 4);
    setCanScrollNext(slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 4);
  }, []);

  // Works out how many WHOLE cards fit in the scrollable area (≤1024px).
  // Desktop (>1024px) uses CSS grid — no JS needed there.
  React.useEffect(() => {
    const computeCardsPerView = () => {
      const wrapper = carouselWrapperRef.current;
      const width = window.innerWidth;

      if (!wrapper || width > 1024) {
        setCardsPerView(null); // desktop: CSS grid handles layout
      } else {
        // Subtract the 48px of wrapper padding (24px each side) used for arrows
        const available = wrapper.clientWidth - 48;
        const count = Math.max(1, Math.floor((available + CARD_GAP) / (CARD_WIDTH + CARD_GAP)));
        setCardsPerView(count);
      }
      updateScrollButtons();
    };

    computeCardsPerView();
    window.addEventListener('resize', computeCardsPerView);
    return () => window.removeEventListener('resize', computeCardsPerView);
  }, [updateScrollButtons]);

  // Auto-scroll: advances one card every 3s on mobile + tablet (≤1024px).
  // Pauses when the user hovers or touches the carousel.
  React.useEffect(() => {
    const handleAutoScroll = () => {
      const slider = carouselRef.current;
      if (window.innerWidth > 1024 || isHovered || !slider) return;

      // How far each step is — one card width + gap
      const step = CARD_WIDTH + CARD_GAP;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // If we're at (or near) the end, jump back to start
      if (slider.scrollLeft >= maxScroll - 4) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: step, behavior: 'smooth' });
      }

      setTimeout(updateScrollButtons, 350);
    };

    const interval = setInterval(handleAutoScroll, 3000);
    return () => clearInterval(interval);
  }, [isHovered, updateScrollButtons]);

  const handleCarouselScroll = () => {
    const slider = carouselRef.current;
    if (!slider) return;
    updateScrollButtons();
  };

  const handleScrollCards = (direction) => {
    const slider = carouselRef.current;
    if (!slider) return;
    const amount = (CARD_WIDTH + CARD_GAP) * (cardsPerView || 1);
    slider.scrollBy({ left: direction * amount, behavior: 'smooth' });
    setTimeout(updateScrollButtons, 350);
  };

  // cardsContainerStyle limits the scroll-track width to exactly N whole cards
  const cardsContainerStyle =
    cardsPerView != null
      ? { width: cardsPerView * (CARD_WIDTH + CARD_GAP) - CARD_GAP }
      : undefined;

  return (
    <>
      {showFlightOverlay && <FlightOverlay onDone={handleFlightDone} />}
      <section className="new-hero-section">
        <div className="hero-bg-container"></div>

        <div className="new-hero-content">
          <HeroTop
            onEnrollClick={() => setIsEnquiryModalOpen(true)}
            onStudyAbroadClick={handleStudyAbroadClick}
          />
          <HeroBottom
            carouselRef={carouselRef}
            carouselWrapperRef={carouselWrapperRef}
            cardsContainerStyle={cardsContainerStyle}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            onCarouselScroll={handleCarouselScroll}
            onScrollCards={handleScrollCards}
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
          />
        </div>

        <EnquiryFormModal 
          isOpen={isEnquiryModalOpen} 
          onClose={() => setIsEnquiryModalOpen(false)} 
          isSelectMode={true}
          extraOptions={[
            "Full Stack Development",
            "Python with AI",
            "Data Science",
            "MERN Stack",
            "Software Testing",
            "Digital Marketing",
            "UI/UX Design",
            "AWS / Cloud Computing",
            "Cybersecurity",
            "Help me choose my course"
          ]}
        />
      </section>
    </>
  );
}