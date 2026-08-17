// NewHeroSection.jsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import './NewHeroSection.css';
import EnquiryFormModal from '../common/EnquiryFormModal';

import FlightTransition from '../animations/FlightTransition';

const HeroTop = ({ onEnrollClick, onStudyAbroadClick }) => {
  return (
    <div className="hero-top">
      <div className="new-hero-title">
        <span className="hero-title-line1"> From job ready tech skills </span>
        <br />
        <span className="hero-title-line2"> to overseas education </span>
        {/* <br/> */}
        {/* <span className="hero-title-line3"> tomorrow</span> */}
      </div>
      <p className="new-hero-description">
Explore AI-powered courses with placement guarantee and overseas education consulting with expert guidance. One place for every path forward!      </p>
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
  },
  {
    level: 'ADVANCED',
    title: 'Data Engineering with Azure',
    desc: 'Build scalable data pipelines on Microsoft Azure using Synapse, ADF, and Databricks.',
    duration: '12 Weeks • Data Engineering',
    gradient: 'linear-gradient(129.31deg, #025043 -2.98%, #048C7F 118.56%)',
    link: '/courses/data-engineering/data-engineering-with-microsoft-azure'
  },
  {
    level: 'ADVANCED',
    title: 'Data Analyst with Azure',
    desc: 'Become a Data Analyst with Azure. Master SQL, Python, ADF, and Power BI.',
    duration: '12 Weeks • Data Analyst',
    gradient: 'linear-gradient(129.99deg, #8A2B06 -3.08%, #DE5C24 119.93%)',
    link: '/courses/ai-and-data-science/data-analyst-with-microsoft-azure'
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
    setTimeout(() => {
      setShowFlightOverlay(false);
      router.push('/study-abroad');
    }, 3200);
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

      if (!wrapper) return;
      
      const arrowSpace = width > 1024 ? 104 : 48; // 36px arrow + 16px gap = 52px each side on desktop, 48px padding on mobile
      const available = wrapper.clientWidth - arrowSpace;
      const cardWidth = (width >= 1025 && width <= 1439) ? 230 : 290;
      const cardGap = width > 1024 ? (width <= 1439 ? 16 : 22) : 14;
      const rawCount = Math.max(1, Math.floor((available + cardGap) / (cardWidth + cardGap)));
      // On monitor (≥1440px) cap to 4 cards — nav arrows handle the rest
      const count = width >= 1440 ? Math.min(rawCount, 4) : rawCount;
      setCardsPerView(count);
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
      if (isHovered || !slider) return;

      const width = window.innerWidth;
      const cardWidth = (width >= 1025 && width <= 1439) ? 230 : 290;
      const cardGap = width > 1024 ? (width <= 1439 ? 16 : 22) : 14;
      
      // How far each step is — one card width + gap
      const step = cardWidth + cardGap;
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
    const width = window.innerWidth;
    const cardWidth = (width >= 1025 && width <= 1439) ? 230 : 290;
    const cardGap = width > 1024 ? (width <= 1439 ? 16 : 22) : 14;
    
    const amount = (cardWidth + cardGap) * (cardsPerView || 1);
    slider.scrollBy({ left: direction * amount, behavior: 'smooth' });
    setTimeout(updateScrollButtons, 350);
  };

  // cardsContainerStyle limits the scroll-track width to exactly N whole cards
  let cardsContainerStyle = undefined;
  if (cardsPerView != null && typeof window !== 'undefined') {
    const w = window.innerWidth;
    const cWidth = (w >= 1025 && w <= 1439) ? 230 : 290;
    const cGap = w > 1024 ? (w <= 1439 ? 16 : 22) : 14;
    cardsContainerStyle = { width: cardsPerView * (cWidth + cGap) - cGap };
  }

  return (
    <>
      <FlightTransition isAnimating={showFlightOverlay} />
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
          useCourseEnquiryApi={true}
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