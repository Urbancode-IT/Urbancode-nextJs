'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Globe2, Mic2, BookOpenCheck, ClipboardCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import EnquiryFormModal from '@/app/components/common/EnquiryFormModal.jsx';
import { destinations } from '@/app/study-abroad/data.js';
import './ProficiencyTrainingSection.css';

const CARD_WIDTH_DESKTOP = 320;
const CARD_GAP_DESKTOP = 20;
const ARROW_WIDTH = 48;
const ARROW_GAP = 12;
const MEDIA_HEIGHT_DESKTOP = 170;

function getCardMetrics(windowWidth, rowWidth = 0) {
  if (windowWidth < 480) {
    const cardGap = 10;
    const cardWidth = rowWidth > 0 ? Math.floor(rowWidth) : 218;
    return { cardWidth, cardGap, mediaHeight: 112, arrowWidth: 38 };
  }

  if (windowWidth < 768) {
    const cardGap = 12;
    const cardWidth = rowWidth > 0 ? Math.floor(rowWidth) : 248;
    return { cardWidth, cardGap, mediaHeight: 132, arrowWidth: 42 };
  }

  if (windowWidth < 1024) {
    return { cardWidth: 300, cardGap: 16, mediaHeight: 158, arrowWidth: 44 };
  }

  return {
    cardWidth: CARD_WIDTH_DESKTOP,
    cardGap: CARD_GAP_DESKTOP,
    mediaHeight: MEDIA_HEIGHT_DESKTOP,
    arrowWidth: ARROW_WIDTH,
  };
}

function useCarouselMetrics(rowRef) {
  const [metrics, setMetrics] = useState(() => {
    if (typeof window === 'undefined') {
      return getCardMetrics(1440);
    }
    return getCardMetrics(window.innerWidth);
  });

  const updateMetrics = useCallback(() => {
    const rowWidth = rowRef.current?.clientWidth ?? 0;
    setMetrics(getCardMetrics(window.innerWidth, rowWidth));
  }, [rowRef]);

  useEffect(() => {
    updateMetrics();
    const resizeObserver = new ResizeObserver(updateMetrics);
    if (rowRef.current) resizeObserver.observe(rowRef.current);
    window.addEventListener('resize', updateMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateMetrics);
    };
  }, [rowRef, updateMetrics]);

  const cardStep = metrics.cardWidth + metrics.cardGap;
  return { ...metrics, cardStep };
}

function calcWholeCardLayout(containerWidth, itemCount, cardWidth, cardGap) {
  const cardStep = cardWidth + cardGap;
  const isMonitor = typeof window !== 'undefined' && window.innerWidth >= 1440;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const totalWidth = itemCount * cardWidth + (itemCount - 1) * cardGap;

  if (isMobile) {
    return {
      needsArrows: itemCount > 1,
      visibleCount: 1,
      maxIndex: Math.max(0, itemCount - 1),
    };
  }

  if (totalWidth <= containerWidth) {
    return { needsArrows: false, visibleCount: itemCount, maxIndex: 0 };
  }

  let visibleCount = Math.max(1, Math.floor((containerWidth + cardGap) / cardStep));

  if (isMonitor && visibleCount >= 3) {
    visibleCount = Math.min(3, itemCount);
  }

  const maxIndex = Math.max(0, itemCount - visibleCount);
  return { needsArrows: true, visibleCount, maxIndex };
}

const featureHighlights = [
  {
    title: 'IELTS, PTE & Duolingo',
    detail: 'Exam Preparation',
    icon: BookOpenCheck,
  },
  {
    title: 'Mock Tests & Practice',
    detail: 'Band Score Focus',
    icon: ClipboardCheck,
  },
  {
    title: 'Study Abroad Pathway',
    detail: 'Global Admissions',
    icon: Globe2,
  },
  {
    title: 'Communication Skills',
    detail: 'Professional English',
    icon: Mic2,
  },
];

const examItems = [
  {
    id: 'ielts-academic',
    type: 'training',
    tag: 'IELTS Academic',
    title: 'IELTS Academic',
    description: 'Target university admissions with focused coaching across all four modules for undergraduate, postgraduate, and professional pathways.',
    meta: '30 / 20 / 12 Hour Plans',
    image: '/images/study-abroad/ielts_3d.png',
    path: '/study-abroad#english-proficiency',
    enquiryCourse: 'IELTS Academic',
  },
  {
    id: 'pte',
    type: 'training',
    tag: 'PTE Training',
    title: 'PTE Academic',
    description: 'Computer-based exam preparation with machine-scoring strategies and timed mock practice.',
    meta: 'Fast Results Focus',
    image: '/images/study-abroad/pte_3d.png',
    path: '/study-abroad#english-proficiency',
    enquiryCourse: 'PTE Academic',
  },
  {
    id: 'duolingo',
    type: 'training',
    tag: 'Duolingo Training',
    title: 'Duolingo English Test',
    description: 'Modern online proficiency prep for flexible test scheduling and global university acceptance.',
    meta: 'Online Test Ready',
    image: '/images/study-abroad/duolingo_3d.png',
    path: '/study-abroad#english-proficiency',
    enquiryCourse: 'Duolingo English Test',
  },
];

const languageItems = [
  {
    id: 'ielts-general',
    type: 'training',
    tag: 'IELTS General',
    title: 'IELTS General Training',
    description: 'Structured coaching across Listening, Reading, Writing, and Speaking with band-focused strategies for work and migration.',
    meta: '30 / 20 / 12 Hour Plans',
    image: '/images/courses-images/ielts.jpg',
    path: '/courses/languages/ielts-general-training',
    enquiryCourse: 'IELTS General Training',
  },
  {
    id: 'spoken-english',
    type: 'communication',
    tag: 'Communication',
    title: 'Spoken English',
    description: 'Build fluency, pronunciation, and interview-ready confidence through guided speaking practice.',
    meta: '1 Month Program',
    image: '/images/courses-images/spoken-english.jpg',
    path: '/courses/languages/spoken-english',
    enquiryCourse: 'Spoken English',
  },
  {
    id: 'corporate-communication',
    type: 'communication',
    tag: 'Communication',
    title: 'Corporate Communication',
    description: 'Professional writing, presentations, meetings, and workplace communication for career growth.',
    meta: '1 Month Program',
    image: '/images/courses-images/communication.jpg',
    path: '/courses/languages/corporate-communication',
    enquiryCourse: 'Corporate Communication',
  },
  {
    id: 'english-language',
    type: 'communication',
    tag: 'Communication',
    title: 'English Language',
    description: 'Beginner to advanced modules designed to strengthen grammar, vocabulary, and everyday fluency.',
    meta: '3 Level Track',
    image: '/images/courses-images/english.jpg',
    path: '/courses/languages/english-language',
    enquiryCourse: 'English Language',
  },
];

const studyAbroadItems = destinations.map((dest) => ({
  id: `study-${dest.country.toLowerCase().replace(/\s+/g, '-')}`,
  type: 'study-abroad',
  tag: 'Study Abroad',
  title: `Study in ${dest.country}`,
  description: dest.description,
  meta: dest.universities,
  image: dest.image,
  path: `/study-abroad/${dest.country.toLowerCase().replace(/\s+/g, '-')}`,
  enquiryCourse: `Study Abroad - ${dest.country}`,
}));

const mbbsItems = [
  {
    id: 'mbbs',
    type: 'mbbs',
    tag: 'MBBS Abroad',
    title: 'Study MBBS Abroad',
    description: 'NMC-approved, WHO-listed universities across Europe and Central Asia with English-medium instruction and full admission support.',
    meta: '6+ Destinations',
    image: '/images/study-abroad/std5.jpg',
    path: '/study-abroad',
    enquiryCourse: 'MBBS Abroad',
  },
];

const carouselGroups = [
  {
    id: 'exam-training',
    hubType: 'training',
    hubTag: 'Exam Preparation',
    hubTitle: 'IELTS, PTE & Duolingo',
    panelTitle: 'IELTS, PTE & Duolingo',
    hubDesc: 'Academic English proficiency programs for global university admissions and visa pathways.',
    hubMeta: '3 Programs',
    hubImage: '/images/study-abroad/ielts_3d.png',
    items: examItems,
  },
  {
    id: 'languages',
    hubType: 'communication',
    hubTag: 'Languages',
    hubTitle: 'Language & Communication',
    panelTitle: 'Languages',
    hubDesc: 'IELTS General Training plus spoken, corporate, and foundational English programs.',
    hubMeta: '4 Programs',
    hubImage: '/images/courses-images/spoken-english.jpg',
    items: languageItems,
  },
  {
    id: 'study-abroad',
    hubType: 'study-abroad',
    hubTag: 'Study Abroad',
    hubTitle: 'Study Abroad Destinations',
    panelTitle: 'Study Abroad',
    hubDesc: 'Admissions support for USA, UK, Canada, Australia, Germany, Ireland, New Zealand, and Singapore.',
    hubMeta: `${destinations.length} Countries`,
    hubImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    items: studyAbroadItems,
  },
  {
    id: 'mbbs',
    hubType: 'mbbs',
    hubTag: 'MBBS Abroad',
    hubTitle: 'Study MBBS Abroad',
    panelTitle: 'MBBS Abroad',
    hubDesc: 'Medical education pathways at NMC-approved universities with complete admission support.',
    hubMeta: '6+ Destinations',
    hubImage: '/images/study-abroad/std5.jpg',
    items: mbbsItems,
  },
];

function FeatureHighlightsRow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textPhase, setTextPhase] = useState('in');
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const transitionRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const goToNext = useCallback(() => {
    setTextPhase('out');

    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }

    transitionRef.current = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % featureHighlights.length);
      setTextPhase('in');
    }, 320);
  }, []);

  useEffect(() => {
    if (!isMobile || isPaused) return undefined;

    const interval = setInterval(goToNext, 3500);

    return () => clearInterval(interval);
  }, [isMobile, isPaused, goToNext]);

  useEffect(() => () => {
    if (transitionRef.current) clearTimeout(transitionRef.current);
  }, []);

  const pauseHandlers = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onTouchStart: () => setIsPaused(true),
    onTouchEnd: () => setIsPaused(false),
  };

  if (isMobile) {
    const active = featureHighlights[activeIndex];
    const ActiveIcon = active.icon;

    return (
      <div className="prof-feature-row" {...pauseHandlers}>
        <div className="prof-feature-item prof-feature-item--mobile-ticker">
          <div className={`prof-feature-icon prof-feature-icon--${textPhase}`} key={`feature-icon-${activeIndex}`}>
            <ActiveIcon size={18} strokeWidth={2.2} aria-hidden="true" />
          </div>
          <div className="prof-feature-text-viewport">
            <div className={`prof-feature-text-slide prof-feature-text-slide--${textPhase}`}>
              <span className="prof-feature-title">{active.title}</span>
              <span className="prof-feature-detail">{active.detail}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="prof-feature-row">
      <div className="prof-feature-viewport">
        <div className="prof-feature-track">
          {featureHighlights.map(({ title, detail, icon: Icon }) => (
            <div key={title} className="prof-feature-item">
              <div className="prof-feature-icon">
                <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <div className="prof-feature-text">
                <span className="prof-feature-title">{title}</span>
                <span className="prof-feature-detail">{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardMedia({ item, mediaHeight }) {
  const isExternal = item.image.startsWith('http');
  const useContain = item.type === 'training' && item.image.endsWith('.png');

  return (
    <div className={`prof-card-media prof-card-media--${item.type}`}>
      <div
        className="prof-card-media-frame"
        style={{ height: mediaHeight }}
      >
        {isExternal ? (
          <img src={item.image} alt={item.title} className="prof-card-image" loading="lazy" />
        ) : (
          <Image
            src={item.image}
            alt={item.title}
            className={`prof-card-image ${useContain ? 'prof-card-image--contain' : ''}`}
            width={288}
            height={mediaHeight}
          />
        )}
      </div>
    </div>
  );
}

function ProficiencyCard({ item, onEnquire, slideIndex = 0, animate = false, cardWidth, mediaHeight }) {
  const router = useRouter();

  return (
    <article
      className={`prof-card ${animate ? 'prof-card--child' : ''}`}
      style={{
        width: cardWidth,
        flex: `0 0 ${cardWidth}px`,
        '--slide-index': slideIndex,
      }}
      onClick={() => router.push(item.path)}
    >
      <CardMedia item={item} mediaHeight={mediaHeight} />
      <div className="prof-card-body">
        <span className={`prof-card-tag prof-card-tag--${item.type}`}>{item.tag}</span>
        <h3 className="prof-card-title">{item.title}</h3>
        <p className="prof-card-desc">{item.description}</p>
        <div className="prof-card-footer">
          <span className="prof-card-meta">{item.meta}</span>
          <button
            type="button"
            className="prof-card-enquire"
            onClick={(e) => {
              e.stopPropagation();
              onEnquire(item);
            }}
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
}

function HubMedia({ group, mediaHeight }) {
  const src = group.hubImage;
  const isExternal = src.startsWith('http');
  const useContain = group.hubType === 'training' && src.endsWith('.png');

  return (
    <div className={`prof-card-media prof-card-media--${group.hubType}`}>
      <div
        className="prof-card-media-frame prof-hub-media-frame"
        style={{ height: mediaHeight }}
      >
        {isExternal ? (
          <img src={src} alt="" className="prof-card-image" loading="lazy" />
        ) : (
          <Image
            src={src}
            alt=""
            className={`prof-card-image ${useContain ? 'prof-card-image--contain' : ''}`}
            width={288}
            height={mediaHeight}
          />
        )}
      </div>
    </div>
  );
}

function HubCard({ group, onOpen, cardWidth, mediaHeight }) {
  return (
    <button
      type="button"
      className={`prof-hub-card prof-card prof-card--${group.hubType}`}
      style={{ width: cardWidth, flex: `0 0 ${cardWidth}px` }}
      onClick={() => onOpen(group.id)}
      aria-label={`${group.hubTitle}. View programs`}
    >
      <HubMedia group={group} mediaHeight={mediaHeight} />
      <div className="prof-card-body">
        <span className={`prof-card-tag prof-card-tag--${group.hubType}`}>{group.hubTag}</span>
        <h3 className="prof-card-title">{group.hubTitle}</h3>
        <p className="prof-card-desc">{group.hubDesc}</p>
        <div className="prof-card-footer prof-hub-footer">
          <span className="prof-hub-explore">
            Explore <ChevronRight size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </button>
  );
}

function ExpandedGroupPanel({ group, onBack, onEnquire }) {
  const rowRef = useRef(null);
  const { cardWidth, cardGap, mediaHeight, cardStep } = useCarouselMetrics(rowRef);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [needsArrows, setNeedsArrows] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const itemCount = group.items.length;

  const recalcLayout = useCallback(() => {
    if (!rowRef.current) return;

    const contentWidth = rowRef.current.clientWidth;
    const layout = calcWholeCardLayout(contentWidth, itemCount, cardWidth, cardGap);

    setNeedsArrows(layout.needsArrows);
    setVisibleCount(layout.visibleCount);
    setMaxIndex(layout.maxIndex);
    setIndex((prev) => Math.min(prev, layout.maxIndex));
  }, [itemCount, cardWidth, cardGap]);

  useEffect(() => {
    recalcLayout();
    const resizeObserver = new ResizeObserver(recalcLayout);
    if (rowRef.current) resizeObserver.observe(rowRef.current);
    window.addEventListener('resize', recalcLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', recalcLayout);
    };
  }, [recalcLayout]);

  useEffect(() => {
    if (!needsArrows || isPaused || maxIndex === 0) return undefined;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [needsArrows, maxIndex, isPaused]);

  const viewportWidth = visibleCount * cardWidth + (visibleCount - 1) * cardGap;

  const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <div
      className="prof-expanded-panel"
      style={{ '--prof-card-gap': `${cardGap}px` }}
    >
      <div className="prof-expanded-header">
        <button
          type="button"
          className="prof-expanded-close"
          onClick={onBack}
          aria-label="Back to categories"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Back
        </button>
        <h3 className="prof-expanded-title">{group.panelTitle}</h3>
        <span className="prof-expanded-header-spacer" aria-hidden="true" />
      </div>

      <div
        className="prof-carousel-layout prof-inner-layout"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <button
          type="button"
          className={`prof-nav-btn prof-nav-btn--inline prev ${!needsArrows || index === 0 ? 'is-disabled' : ''}`}
          onClick={goPrev}
          disabled={!needsArrows || index === 0}
          aria-label="Previous program"
          aria-hidden={!needsArrows}
          tabIndex={needsArrows ? 0 : -1}
        >
          &#10094;
        </button>

        <div className="prof-inner-row" ref={rowRef}>
          <div
            className="prof-inner-viewport"
            style={{ width: `${viewportWidth}px`, maxWidth: '100%' }}
          >
            <div
              className="prof-inner-track"
              style={{
                gap: cardGap,
                transform: needsArrows ? `translateX(-${index * cardStep}px)` : undefined,
              }}
            >
              {group.items.map((item, i) => (
                <ProficiencyCard
                  key={item.id}
                  item={item}
                  onEnquire={onEnquire}
                  slideIndex={i}
                  animate
                  cardWidth={cardWidth}
                  mediaHeight={mediaHeight}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`prof-nav-btn prof-nav-btn--inline next ${!needsArrows || index >= maxIndex ? 'is-disabled' : ''}`}
          onClick={goNext}
          disabled={!needsArrows || index >= maxIndex}
          aria-label="Next program"
          aria-hidden={!needsArrows}
          tabIndex={needsArrows ? 0 : -1}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default function ProficiencyTrainingSection() {
  const shellRef = useRef(null);
  const rowRef = useRef(null);
  const { cardWidth, cardGap, mediaHeight, cardStep } = useCarouselMetrics(rowRef);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [needsArrows, setNeedsArrows] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryCourse, setEnquiryCourse] = useState('');
  const [expandedGroupId, setExpandedGroupId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const groupCount = carouselGroups.length;
  const expandedGroup = expandedGroupId
    ? carouselGroups.find((g) => g.id === expandedGroupId)
    : null;

  const openGroup = useCallback((groupId) => {
    setIsClosing(false);
    setExpandedGroupId(groupId);
    setIsPaused(true);
  }, []);

  const closeGroup = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(() => {
      setExpandedGroupId(null);
      setIsClosing(false);
      setIsPaused(false);
    }, 380);
  }, []);

  const recalcLayout = useCallback(() => {
    if (!rowRef.current || expandedGroupId) return;

    const contentWidth = rowRef.current.clientWidth;
    const layout = calcWholeCardLayout(contentWidth, groupCount, cardWidth, cardGap);

    setNeedsArrows(layout.needsArrows);
    setVisibleCount(layout.visibleCount);
    setMaxIndex(layout.maxIndex);
    setIndex((prev) => Math.min(prev, layout.maxIndex));
  }, [groupCount, cardWidth, cardGap, expandedGroupId]);

  useEffect(() => {
    recalcLayout();
    const resizeObserver = new ResizeObserver(recalcLayout);
    if (rowRef.current) resizeObserver.observe(rowRef.current);
    window.addEventListener('resize', recalcLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', recalcLayout);
    };
  }, [recalcLayout]);

  useEffect(() => {
    if (!needsArrows || isPaused || enquiryOpen || expandedGroupId) return undefined;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [needsArrows, maxIndex, isPaused, enquiryOpen, expandedGroupId]);

  const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const viewportWidth = visibleCount * cardWidth + (visibleCount - 1) * cardGap;

  const openEnquiry = (item) => {
    setEnquiryCourse(item.enquiryCourse);
    setEnquiryOpen(true);
  };

  return (
    <section className="prof-section" aria-labelledby="proficiency-training-title">
      <div className="prof-section-inner">
        <div className="prof-section-header home-section-header">
          <div className="home-section-title-wrap">
            <h2 id="proficiency-training-title" className="section-main-title text-shine">
              IELTS and Study Abroad Training
            </h2>
          </div>

          <FeatureHighlightsRow />
        </div>

        <div
          className={`prof-track-shell ${expandedGroupId ? 'has-expanded-group' : ''} ${isClosing ? 'is-closing' : ''}`}
          ref={shellRef}
          onMouseEnter={() => !expandedGroupId && setIsPaused(true)}
          onMouseLeave={() => !expandedGroupId && setIsPaused(false)}
        >
          {!expandedGroupId && (
            <div className="prof-carousel-layout">
              <button
                type="button"
                className={`prof-nav-btn prof-nav-btn--inline prev ${!needsArrows || index === 0 ? 'is-disabled' : ''}`}
                onClick={goPrev}
                disabled={!needsArrows || index === 0}
                aria-label="Previous category"
                aria-hidden={!needsArrows}
                tabIndex={needsArrows ? 0 : -1}
              >
                &#10094;
              </button>

              <div className="prof-carousel-row" ref={rowRef}>
                <div
                  className="prof-viewport prof-hubs-viewport"
                  style={{ width: `${viewportWidth}px`, maxWidth: '100%' }}
                >
                  <div
                    className="prof-track prof-hubs-track"
                    style={{
                      gap: cardGap,
                      transform: needsArrows ? `translateX(-${index * cardStep}px)` : undefined,
                    }}
                  >
                    {carouselGroups.map((group) => (
                      <div
                        key={group.id}
                        className="prof-card-group"
                        style={{ width: cardWidth, flex: `0 0 ${cardWidth}px` }}
                      >
                        <HubCard
                          group={group}
                          onOpen={openGroup}
                          cardWidth={cardWidth}
                          mediaHeight={mediaHeight}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={`prof-nav-btn prof-nav-btn--inline next ${!needsArrows || index >= maxIndex ? 'is-disabled' : ''}`}
                onClick={goNext}
                disabled={!needsArrows || index >= maxIndex}
                aria-label="Next category"
                aria-hidden={!needsArrows}
                tabIndex={needsArrows ? 0 : -1}
              >
                &#10095;
              </button>
            </div>
          )}

          {expandedGroup && (
            <ExpandedGroupPanel
              group={expandedGroup}
              onBack={closeGroup}
              onEnquire={openEnquiry}
            />
          )}
        </div>

        <div className="prof-section-cta">
          <Link href="/study-abroad" className="prof-primary-link">
            Explore Study Abroad Programs
          </Link>
          <Link href="/courses/languages" className="prof-secondary-link">
            View All Language Courses
          </Link>
        </div>
      </div>

      <EnquiryFormModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        courseName={enquiryCourse}
        useExternalCourses={false}
        extraOptions={[
          'IELTS Academic',
          'IELTS General Training',
          'PTE Academic',
          'Duolingo English Test',
          'Spoken English',
          'Corporate Communication',
          'English Language',
          ...destinations.map((dest) => `Study Abroad - ${dest.country}`),
          'MBBS Abroad',
        ]}
        isSelectMode={!enquiryCourse}
      />
    </section>
  );
}
