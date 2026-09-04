// NewHeroSection.jsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './NewHeroSection.css';
import EnquiryFormModal from '../common/EnquiryFormModal';
import FlightTransition from '../animations/FlightTransition';
import BannerSlider from '../common/BannerSlider';

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
    level: 'ADVANCED',
    title: 'AI Software Engineering(6 Months)',
    desc: 'Fullstack web + React Native — React, Node.js, MongoDB, and AWS in 6 months.',
    duration: '6 Months • Fullstack + Mobile',
    gradient: 'linear-gradient(129.99deg, #001D3A -3.08%, #035CB7 119.93%)',
    link: '/courses/fullstack-development/ai-software-engineering',
    isNew: true,
  },
  {
    level: 'BEGINNER',
    title: 'AI Powered Fullstack',
    desc: 'Master HTML, CSS and React alongside AI tools to build interactive web applications',
    duration: '12 Weeks • React + AI',
    gradient: 'linear-gradient(129.99deg, #5B21B6 -3.08%, #A78BFA 119.93%)',
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

const defaultHomeBanners = [
  {
    src: '/images/home/6-month-program-banner.webp',
    alt: 'AI Software Engineering Certification Program (6 Months)',
    type: 'link',
    link: '/courses/fullstack-development/ai-software-engineering'
  },
  {
    src: '/images/home/studyabroad.webp',
    alt: 'Study Abroad 2027',
    type: 'link',
    link: '/study-abroad'
  },
  {
    src: '/images/home/IELTS Banner.png',
    alt: 'IELTS Training',
    type: 'link',
    link: '/study-abroad#english-proficiency'
  },
  {
    src: '/images/home/data-engineering-with-azure.webp',
    alt: 'Data Engineering with Microsoft Azure',
    type: 'link',
    link: '/courses/data-engineering/data-engineering-with-microsoft-azure'
  }
];

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
          className="hero-cards-nav hero-cards-nav-prev prev"
          onClick={() => onScrollCards(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous courses"
        >
          ❮
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
          {cardsData.map((card) => (
            <Link
              href={card.link}
              key={card.link}
              className={`hero-card${card.isNew ? ' hero-card--fresh' : ''}`}
              style={{ '--hero-card-gradient': card.gradient }}
              aria-label={`View ${card.title} course`}
            >
              <span className="hero-card-level">
                {card.isNew ? <span className="hero-card-live-dot" aria-hidden="true" /> : null}
                {card.level}
              </span>
              <div className="hero-card-glass">
                <h3 className="hero-card-title course-name-shine-light">{card.title}</h3>
                <p className="hero-card-desc">{card.desc}</p>
              </div>
              <div className="hero-card-footer">
                <span className="hero-card-duration">{card.duration}</span>
                <span className="hero-card-btn" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 14.1667L14.1666 5.83337" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83331 5.83337H14.1666V14.1667" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="hero-cards-nav hero-cards-nav-next next"
          onClick={() => onScrollCards(1)}
          disabled={!canScrollNext}
          aria-label="Next courses"
        >
          ❯
        </button>
      </div>
    </div>
  );
};


export default function NewHeroSection({ banners = [] }) {
  const visibleBanners = banners.length > 0 ? banners : defaultHomeBanners;
  const router = useRouter();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [showFlightOverlay, setShowFlightOverlay] = useState(false);
  const carouselRef = React.useRef(null);
  const carouselWrapperRef = React.useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(null);
  const [heroCardWidth, setHeroCardWidth] = useState(260);
  const [heroCardGap, setHeroCardGap] = useState(20);
  const [heroContainerWidth, setHeroContainerWidth] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const getHeroMetrics = React.useCallback(() => {
    const wrapper = carouselWrapperRef.current;
    if (!wrapper) return null;

    const width = window.innerWidth;
    const arrowSpace = width > 1024 ? 104 : 48;
    const available = wrapper.clientWidth - arrowSpace;

    let defaultCardWidth = 260;
    let cardGap = 14;
    if (width >= 1440) {
      defaultCardWidth = 290;
      cardGap = 22;
    } else if (width >= 1025) {
      defaultCardWidth = 230;
      cardGap = 16;
    } else if (width <= 1024) {
      defaultCardWidth = 260;
      cardGap = 14;
    }

    let cardWidth = defaultCardWidth;
    if (available < defaultCardWidth) {
      cardWidth = Math.max(Math.floor(available), 180);
    }

    const rawCount = Math.max(1, Math.floor((available + cardGap) / (cardWidth + cardGap)));
    const count = width >= 1440 ? Math.min(rawCount, 4) : rawCount;
    const containerWidth = Math.min(available, count * (cardWidth + cardGap) - cardGap);

    return { cardWidth, cardGap, cardsPerView: count, containerWidth };
  }, []);

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
    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  // Whole cards only at every breakpoint; shrink card if one full card cannot fit.
  React.useEffect(() => {
    const computeCardsPerView = () => {
      const metrics = getHeroMetrics();
      if (!metrics) return;

      setCardsPerView(metrics.cardsPerView);
      setHeroCardWidth(metrics.cardWidth);
      setHeroCardGap(metrics.cardGap);
      setHeroContainerWidth(metrics.containerWidth);
      updateScrollButtons();
    };

    computeCardsPerView();
    window.addEventListener('resize', computeCardsPerView);
    return () => window.removeEventListener('resize', computeCardsPerView);
  }, [getHeroMetrics, updateScrollButtons]);

  // Auto-scroll: advances one page of visible cards every 3s.
  React.useEffect(() => {
    const handleAutoScroll = () => {
      const slider = carouselRef.current;
      if (isHovered || !slider) return;

      const step = (heroCardWidth + heroCardGap) * (cardsPerView || 1);
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 4) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: step, behavior: 'smooth' });
      }

      setTimeout(updateScrollButtons, 350);
    };

    const interval = setInterval(handleAutoScroll, 3000);
    return () => clearInterval(interval);
  }, [isHovered, updateScrollButtons, heroCardWidth, heroCardGap, cardsPerView]);

  const handleCarouselScroll = () => {
    const slider = carouselRef.current;
    if (!slider) return;
    updateScrollButtons();
  };

  const handleScrollCards = (direction) => {
    const slider = carouselRef.current;
    if (!slider) return;

    const amount = (heroCardWidth + heroCardGap) * (cardsPerView || 1);
    slider.scrollBy({ left: direction * amount, behavior: 'smooth' });
    setTimeout(updateScrollButtons, 350);
  };

  const cardsContainerStyle = heroContainerWidth != null ? {
    width: heroContainerWidth,
    maxWidth: '100%',
    '--hero-card-width': `${heroCardWidth}px`,
  } : undefined;

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
          <div className="hero-banner-slot">
            <BannerSlider banners={visibleBanners} />
          </div>
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