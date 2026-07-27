'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaAward, FaUniversity, FaSearch, FaStethoscope, FaGlobeAmericas, FaUserMd, FaPlaneDeparture, FaClipboardCheck, FaHospital, FaArrowRight, FaGraduationCap, FaRegClock, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaClipboardList, FaLaptop, FaEdit, FaFileAlt } from 'react-icons/fa';
import { Send } from "lucide-react";
import { submitEnquiryForm } from "@/lib/api/api";
import Swal from 'sweetalert2';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import TestimonialCarousel from '../components/Home/TestimonialCarousel';
import { destinations, services, testimonials, showcaseData } from './data';
import '../components/Home/NewHeroSection.css';
import '../components/CourseLayout/ProgramCohorts.css';
import './StudyAbroad.css';
import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";

/* ── Counting animation stats banner for MBBS section ─────────────── */
function useCountUp(target, duration = 1800, started = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);
    return count;
}

const MbbsStatsBanner = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { end: 6,   suffix: '+',    label: 'MBBS Destinations',   gradient: 'linear-gradient(135deg,#667eea,#764ba2)', shadow: 'rgba(102,126,234,0.35)' },
        { end: 50,  suffix: '+',    label: 'Partner Universities', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', shadow: 'rgba(245,87,108,0.35)' },
        { end: 6,   suffix: ' Yrs', label: 'Programme Duration',  gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', shadow: 'rgba(79,172,254,0.35)' },
        { end: 100, suffix: '%',    label: 'Admission Support',   gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', shadow: 'rgba(67,233,123,0.35)' },
    ];

    return (
        <div className="mbbs-stats-banner" ref={ref}>
            {stats.map((s, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const count = useCountUp(s.end, 1600, visible);
                return (
                    <div className="mbbs-stat-item" key={i} style={{ background: s.gradient, boxShadow: `0 20px 50px ${s.shadow}` }}>
                        {/* gloss overlay */}
                        <span className="mbbs-stat-gloss" />
                        <span className="mbbs-stat-val">{count}{s.suffix}</span>
                        <span className="mbbs-stat-label">{s.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

const getCountryFlag = (uni) => {
    if (!uni) return "";
    const lower = uni.toLowerCase();
    if (lower.includes("uk") || lower.includes("united kingdom")) return "🇬🇧";
    if (lower.includes("ireland")) return "🇮🇪";
    if (lower.includes("usa") || lower.includes("us") || lower.includes("united states")) return "🇺🇸";
    if (lower.includes("canada")) return "🇨🇦";
    if (lower.includes("australia")) return "🇦🇺";
    if (lower.includes("germany")) return "🇩🇪";
    if (lower.includes("singapore")) return "🇸🇬";
    if (lower.includes("france")) return "🇫🇷";
    if (lower.includes("new zealand")) return "🇳🇿";
    return "🎓";
};

// Fixed-size hero stat cards — same 220px card at every screen size (desktop, tablet, mobile).
// The HeroStatsCarousel below handles fitting them via arrows, not by resizing the cards.
const heroStatCards = [
    { image: "/images/study-abroad/cards/admits.png", val: "Top 1%", label: "Global Admits", gradient: "linear-gradient(130.48deg, #02284F 2.78%, #036AD5 122.15%)" },
    { image: "/images/study-abroad/cards/visa.png", val: "98%", label: "Visa Success", gradient: "linear-gradient(129.99deg, #0f5132 -3.08%, #20c997 119.93%)" },
    { image: "/images/study-abroad/cards/scholarship.png", val: "100%", label: "Scholarships", gradient: "linear-gradient(129.31deg, #9F6E00 -2.98%, #EAB94B 118.56%)" },
    { image: "/images/study-abroad/cards/universities.png", val: "500+", label: "Universities", gradient: "linear-gradient(129.99deg, #7A1FCD -3.08%, #CA90FF 119.93%)" },
    { image: "/images/study-abroad/cards/experience.png", val: "10+ Years", label: "Expert Guidance", gradient: "linear-gradient(130.3deg, #A22C27 -5.39%, #FF7C77 115.93%)" },
];
const AnimatedHeroStatVal = ({ text }) => {
    const match = text.match(/(\d+)/);
    if (!match) return <>{text}</>;
    
    const num = parseInt(match[0], 10);
    const prefix = text.substring(0, match.index);
    const suffix = text.substring(match.index + match[0].length);
    
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const count = useCountUp(num, 1500, visible);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const renderHeroCard = (card, key, compact = false, cardSize) => (
    <div
        className={`hero-card ${compact ? 'hero-card-compact' : ''}`}
        key={key}
        style={{
            background: card.gradient || 'linear-gradient(135deg, #1f2937, #111827)',
            ...(cardSize ? { width: cardSize, flex: `0 0 ${cardSize}px`, aspectRatio: '1 / 1' } : {}),
        }}
    >
        {card.image && (
            <div className="hero-card-media">
                <img src={card.image} alt={card.val} loading="lazy" />
            </div>
        )}
        <div className="hero-card-glass">
            {card.icon}
            <h3 className="hero-card-title text-center"><AnimatedHeroStatVal text={card.val} /></h3>
            <p className="hero-card-desc text-center">{card.label}</p>
        </div>
    </div>
);

/* Mobile / tablet carousel — one stat card at a time, full-width scaled square */
const HeroStatMobileCarousel = ({ cards }) => {
    const carouselRef = useRef(null);
    const wrapperRef = useRef(null);

    const autoScrollRef = useRef(null);
    const resumeTimerRef = useRef(null);

    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const updateScrollButtons = useCallback(() => {
        const slider = carouselRef.current;
        if (!slider) return;

        const step = slider.clientWidth;
        if (!step) return;

        const maxScrollLeft = slider.scrollWidth - step;
        const index = Math.round(slider.scrollLeft / step);
        const hasOverflow = maxScrollLeft > 1;

        setCurrentIndex(index);
        setCanScrollPrev(hasOverflow && slider.scrollLeft > 1);
        setCanScrollNext(hasOverflow && slider.scrollLeft < maxScrollLeft - 1);
    }, [cards.length]);

    const scrollToCard = useCallback((index) => {
        const slider = carouselRef.current;
        if (!slider) return;

        const step = slider.clientWidth;
        if (!step) return;

        const targetIndex = Math.max(0, Math.min(index, cards.length - 1));
        const maxScrollLeft = Math.max(0, slider.scrollWidth - step);

        slider.scrollTo({
            left: Math.min(step * targetIndex, maxScrollLeft),
            behavior: 'smooth',
        });

        setCurrentIndex(targetIndex);
    }, [cards.length]);

    const pauseAutoScroll = () => {
        setIsPaused(true);
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
    };

    const handleScrollCards = (direction) => {
        pauseAutoScroll();

        let next = currentIndex + direction;
        if (next < 0) next = cards.length - 1;
        if (next >= cards.length) next = 0;

        scrollToCard(next);
    };

    useEffect(() => {
        const onResize = () => updateScrollButtons();
        window.addEventListener('resize', onResize);
        updateScrollButtons();
        return () => window.removeEventListener('resize', onResize);
    }, [updateScrollButtons]);

    useEffect(() => {
        const slider = carouselRef.current;
        if (!slider) return;

        const hasOverflow = slider.scrollWidth > slider.clientWidth + 1;
        if (!hasOverflow) return;

        clearInterval(autoScrollRef.current);
        autoScrollRef.current = setInterval(() => {
            if (isPaused) return;

            let next = currentIndex + 1;
            if (next >= cards.length) next = 0;
            scrollToCard(next);
        }, 3000);

        return () => clearInterval(autoScrollRef.current);
    }, [currentIndex, isPaused, cards.length, scrollToCard]);

    useEffect(() => {
        const slider = carouselRef.current;
        if (!slider) return;

        updateScrollButtons();
        const observer = new ResizeObserver(() => updateScrollButtons());
        observer.observe(slider);
        return () => observer.disconnect();
    }, [updateScrollButtons]);

    return (
        <div className="study-stat-carousel-wrapper" ref={wrapperRef}>
            <button
                type="button"
                className="hero-cards-nav hero-cards-nav-prev"
                onClick={() => handleScrollCards(-1)}
                disabled={cards.length <= 1}
                aria-label="Previous stat"
            >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="study-stat-cards-outer">
                <div
                    className="study-stat-cards-container"
                    ref={carouselRef}
                    onScroll={updateScrollButtons}
                    onTouchStart={pauseAutoScroll}
                    onTouchMove={pauseAutoScroll}
                    onTouchEnd={pauseAutoScroll}
                    onMouseDown={pauseAutoScroll}
                >
                    {cards.map((card, index) => (
                        <div key={`stat-mobile-${index}`} className="study-stat-card-slide">
                        <div
                            className="study-stat-card"
                            style={{ background: card.gradient || 'linear-gradient(135deg, #1f2937, #111827)' }}
                        >
                            {card.image && (
                                <div className="study-stat-card-media">
                                    <img src={card.image} alt={card.val} loading="lazy" />
                                </div>
                            )}
                            <div className="study-stat-card-glass">
                                <h3 className="study-stat-card-title">{card.val}</h3>
                                <p className="study-stat-card-desc">{card.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <button
                type="button"
                className="hero-cards-nav hero-cards-nav-next"
                onClick={() => handleScrollCards(1)}
                disabled={cards.length <= 1}
                aria-label="Next stat"
            >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────────
   HeroStats — responsive card-count carousel.

   FIX (vs. earlier version): the ResizeObserver now watches
   `wrapperRef` (.hero-cards-wrapper), a container whose width is
   controlled purely by CSS/layout and is NEVER set inline by this
   component. The old version watched `viewportRef`, but this
   component also sets `viewportRef`'s inline width based on the
   very same calculation — so every recalculation resized the
   thing it was measuring, causing the count to drift instead of
   cleanly reporting 5 → 4 → 3 → 2 cards as the screen shrinks.

   Arrow space (2 × 42px button + 10px gap each) is subtracted
   from the available width BEFORE dividing by card step, so the
   computed count is guaranteed to actually fit next to the arrows.
   ───────────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────────
   HeroStats — unified responsive carousel.

   The ResizeObserver measures the wrapper width and computes how
   many 220px cards fit. On mobile this naturally yields count=1,
   viewportWidth=220px, step=236px — one compact card at a time
   with arrows on each side. No special mobile path needed.

   Touch swipe is wired up on the viewport for mobile.
   ───────────────────────────────────────────────────────────── */
const HeroStats = ({ cards }) => {
    const wrapperRef = useRef(null);
    const viewportRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [needsArrows, setNeedsArrows] = useState(false);
    const [visibleCount, setVisibleCount] = useState(cards.length);
    const [cardWidth, setCardWidth] = useState(150);
    const [gap, setGap] = useState(16);

    // Touch / swipe refs
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);

    const ARROW_WIDTH = 42;
    const ARROW_GAP = 10;
    const step = cardWidth + gap;

    useEffect(() => {
        const recalc = () => {
            if (!wrapperRef.current) return;

            const isMonitor = window.innerWidth >= 1440;
            const isDesktop = window.innerWidth >= 821 && window.innerWidth < 1440;
            const GAP = isMonitor ? 20 : 16;

            const cs = window.getComputedStyle(wrapperRef.current);
            const paddingLeft = parseFloat(cs.paddingLeft) || 0;
            const paddingRight = parseFloat(cs.paddingRight) || 0;
            const contentWidth = wrapperRef.current.clientWidth - paddingLeft - paddingRight;

            /* Desktop and Monitor: fit all 5 cards in one row - no carousel arrows */
            if (isMonitor || isDesktop) {
                const CARD_WIDTH = Math.floor((contentWidth - (cards.length - 1) * GAP) / cards.length);
                setCardWidth(CARD_WIDTH);
                setGap(GAP);
                setNeedsArrows(false);
                setMaxIndex(0);
                setIndex(0);
                setVisibleCount(cards.length);
                return;
            }

            const CARD_WIDTH = isDesktop ? 220 : 150;
            setCardWidth(CARD_WIDTH);
            setGap(GAP);
            const cardStep = CARD_WIDTH + GAP;

            const totalWidth = cards.length * CARD_WIDTH + (cards.length - 1) * GAP;

            // All cards fit — no arrows needed
            if (totalWidth <= contentWidth) {
                setNeedsArrows(false);
                setMaxIndex(0);
                setIndex(0);
                setVisibleCount(cards.length);
                return;
            }

            // Arrows needed — reserve their space, count whole cards in what remains
            const arrowsSpace = (ARROW_WIDTH + ARROW_GAP) * 2;
            const availableForCards = contentWidth - arrowsSpace;
            const count = Math.max(1, Math.floor((availableForCards + GAP) / cardStep));
            const newMaxIndex = Math.max(0, cards.length - count);
            setNeedsArrows(true);
            setVisibleCount(count);
            setMaxIndex(newMaxIndex);
            setIndex((prev) => Math.min(prev, newMaxIndex));
        };

        recalc();
        const resizeObserver = new ResizeObserver(recalc);
        if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
        window.addEventListener('resize', recalc);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', recalc);
        };
    }, [cards]);

    const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));
    const goNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));

    // Touch swipe handlers
    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0; };
    const handleTouchMove  = (e) => { touchDeltaX.current = e.touches[0].clientX - touchStartX.current; };
    const handleTouchEnd   = () => {
        if (touchDeltaX.current > 40)  goPrev();
        else if (touchDeltaX.current < -40) goNext();
        touchDeltaX.current = 0;
    };

    // JS-sets an exact pixel width on the viewport so only whole cards show
    const viewportWidth = needsArrows
        ? visibleCount * cardWidth + (visibleCount - 1) * gap
        : undefined;

    return (
        <div className="hero-cards-wrapper" ref={wrapperRef}>
            <div className="hero-cards-carousel">
                {needsArrows && (
                    <button
                        type="button"
                        className="hero-cards-arrow hero-cards-arrow-left"
                        onClick={goPrev}
                        disabled={index === 0}
                        aria-label="Previous"
                    >
                        &#8249;
                    </button>
                )}

                <div
                    className="hero-cards-viewport"
                    ref={viewportRef}
                    style={viewportWidth ? { width: viewportWidth, flexShrink: 0, overflow: 'hidden' } : { overflow: 'hidden', width: '100%' }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className={`hero-cards-track ${needsArrows ? '' : 'centered'}`}
                        style={needsArrows ? { transform: `translateX(-${index * step}px)` } : undefined}
                    >
                        {cards.map((card, i) => renderHeroCard(card, `card-${i}`, false, cardWidth))}
                    </div>
                </div>

                {needsArrows && (
                    <button
                        type="button"
                        className="hero-cards-arrow hero-cards-arrow-right"
                        onClick={goNext}
                        disabled={index === maxIndex}
                        aria-label="Next"
                    >
                        &#8250;
                    </button>
                )}
            </div>
        </div>
    );
};

const StudyAbroadPage = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [modalTitle, setModalTitle] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: "", message: "" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        education: "",
        course: "",
        message: ""
    });

    const [activeProficiency, setActiveProficiency] = useState("IELTS");
    const [activeShowcase, setActiveShowcase] = useState("Australia");

    // Mobile "view all" toggles — each card section shows 3 cards on mobile until expanded
    const [showAllServices, setShowAllServices] = useState(false);
    const [showAllDestinations, setShowAllDestinations] = useState(false);

    // MBBS slider state
    const mbbsScrollRef = useRef(null);
    const scrollMbbs = (dir) => {
        if (mbbsScrollRef.current) {
            const amount = window.innerWidth > 768 ? 340 : 280;
            mbbsScrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (mbbsScrollRef.current) {
                const amount = window.innerWidth > 768 ? 340 : 280;
                const { scrollLeft, scrollWidth, clientWidth } = mbbsScrollRef.current;
                
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    // Reached end, loop back
                    mbbsScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    mbbsScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
                }
            }
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    const [showBatches, setShowBatches] = useState(false);

    const proficiencyData = {
      IELTS: {
    title: "Achieve 7+ Band in IELTS in just 4 weeks!",
    description: "Join thousands of successful IELTS aspirants who have boosted their scores with Urbancode's expert guidance. Our structured coaching, proven strategies, and personalized study plans help you master all four modules—Listening, Reading, Writing, and Speaking—effectively.",
    highlights: [
        "Accepted in UK, Canada, Australia, and New Zealand",
        "Flexible test dates",
        "Comprehensive preparation material provided"
    ],
    certificateImage: "/images/study-abroad/ielts_3d.png",
    // bgColor: "linear-gradient(45deg, #804A8A 0%, #3A0353 100%)"
},

PTE: {
    title: "Achieve Your Target PTE Score in 4 weeks!",
    description: "Join successful PTE aspirants who have boosted their scores with our expert guidance. A computer-based English language test for non-native English speakers who want to study abroad.",
    highlights: [
        "Fast results (typically within 48 hours)",
        "Unbiased machine scoring",
        "Accepted by thousands of universities worldwide"
    ],
    certificateImage: "/images/study-abroad/pte_3d.png",
    // bgColor: "linear-gradient(45deg, #ee0039 0%, #54091b 100%)"
},

Duolingo: {
    title: "Master the Duolingo English Test with Ease!",
    description: "A modern, convenient, and affordable English proficiency assessment. You can take the test online, anytime, anywhere in under an hour, with our comprehensive preparation.",
    highlights: [
        "Take the test from home",
        "Results in 2 days",
        "Accepted by over 4000 institutions globally"
    ],
    certificateImage: "/images/study-abroad/duolingo_3d.png",
    // bgColor: "linear-gradient(45deg, #2a925a 0%, #96d947 100%)"
}
    };

    const handleEnquireClick = (country, title = null) => {
        setSelectedCountry(country);
        setModalTitle(title);
        setIsModalOpen(true);
    };

    const handleOpenModal = (title = null) => {
        setSelectedCountry("");
        setModalTitle(title);
        setIsModalOpen(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: "", message: "" });

        const { name, email, phone, country, education, course } = formData;

        if (!name.trim() || name.trim().length < 3) {
            Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please enter a valid name (min 3 characters).', confirmButtonColor: '#036c2d' });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please enter a valid email address.', confirmButtonColor: '#036c2d' });
            return;
        }
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length < 7 || cleanPhone.length > 15) {
            Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please enter a valid 7 to 15 digit mobile number.', confirmButtonColor: '#036c2d' });
            return;
        }
        if (!country) {
            Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please select a preferred destination.', confirmButtonColor: '#036c2d' });
            return;
        }
        if (!education) {
            Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please select your highest qualification.', confirmButtonColor: '#036c2d' });
            return;
        }
        if (!course.trim()) {
            Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please enter your preferred course.', confirmButtonColor: '#036c2d' });
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: cleanPhone,
            course: `Study Abroad - ${formData.country} (${formData.course})`,
            message: `Education Level: ${formData.education}\nMessage: ${formData.message}`,
            mode: "Online/Offline"
        };

        try {
            const result = await submitEnquiryForm(submissionData);
            if (result.success) {
                router.push('/study-abroad-thankyou');
                setFormData({ name: "", email: "", phone: "", country: "", education: "", course: "", message: "" });
            } else {
                Swal.fire({ icon: 'error', title: 'Oops...', text: result.message || "Failed to send. Please try again.", confirmButtonColor: '#d33' });
            }
        } catch (error) {
            Swal.fire({ icon: 'error', title: 'Oops...', text: "Something went wrong. Please try again later.", confirmButtonColor: '#d33' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const destinationOptions = [
        "USA", "UK", "Canada", "Australia", "Germany", "Ireland", "Singapore"
    ];

    const educationOptions = [
        "12th Standard", "Undergraduate", "Postgraduate", "PhD"
    ];

    const mbbsCountries = [
        { code: "ro", country: "Romania",    fee: "From ~₹25L", duration: "6 Years", tag: "EU Degree"       },
        { code: "ru", country: "Russia",     fee: "From ~₹20L", duration: "6 Years", tag: "NMC Approved"    },
        { code: "ua", country: "Ukraine",    fee: "From ~₹18L", duration: "6 Years", tag: "Budget Friendly" },
        { code: "am", country: "Armenia",    fee: "From ~₹22L", duration: "6 Years", tag: "Safe Campus"     },
        { code: "ge", country: "Georgia",    fee: "From ~₹24L", duration: "6 Years", tag: "WHO Listed"      },
        { code: "kg", country: "Kyrgyzstan", fee: "From ~₹16L", duration: "6 Years", tag: "Most Affordable" },
    ];


    return (
        <div className="study-abroad-container">

            {/* Hero Section */}
            <section className="new-hero-section study-premium-override">
                {/* Skyline Background */}
                <div className="hero-bg-container"></div>

                <div className="new-hero-content">
                    <div className="hero-top">
                        <div className="new-hero-title">
                            <span className="hero-title-line1">Design your <span style={{ color: "#000" }}>international</span></span>
                            <br />
                            <span className="hero-title-line2">academic future today</span>
                        </div>
                    <p className="new-hero-description">
                        Launch your career on the global stage. Urbancode offers strategic guidance for admissions into leading universities in the US, UK, Canada, and beyond with complete scholarship support.
                    </p>
                    <div className="hero-buttons">
                        <button onClick={() => handleOpenModal('Start Your Application')} className="hero-btn-primary">
                            <span>Start Application</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58331 10.9997H17.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.9999 4.58301L17.4166 10.9997L10.9999 17.4163" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button onClick={() => document.getElementById('english-proficiency').scrollIntoView({ behavior: 'smooth' })} className="hero-btn-secondary">
                            <span className="d-flex align-items-center"><FaGraduationCap className="me-2" size={18} /> IELTS PTE Training</span>
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

                    {isModalOpen && (
                        <div className="study-abroad-modal-overlay" onClick={() => setIsModalOpen(false)}>
                            <div className="study-abroad-modal" onClick={(e) => e.stopPropagation()}>
                                <button className="study-abroad-modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                                <div className="study-abroad-modal-content">
                                    <div className="text-center mb-4">
                                        <h3 className="h3 fw-bold mt-3 mb-2 text-dark">Start Your Application</h3>
                                        <p className="small text-muted">Share your details and one of our study abroad experts will contact you quickly.</p>
                                    </div>
                                    {formStatus.message && (
                                        <div className={`alert alert-${formStatus.type === 'error' ? 'danger' : 'success'} mb-4 text-center`}>
                                            {formStatus.message}
                                        </div>
                                    )}
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="row g-2">
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Full Name</label>
                                                <FormInput name="name" placeholder="Enter your full name" required value={formData.name} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Email Address</label>
                                                <FormInput type="email" name="email" placeholder="Enter your email address" required value={formData.email} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Phone Number</label>
                                                <FormInput type="tel" name="phone" placeholder="Enter your phone number" required value={formData.phone} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Preferred Destination</label>
                                                <FormSelect name="country" placeholder="Choose your destination" options={destinationOptions} required value={formData.country} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Highest Qualification</label>
                                                <FormSelect name="education" placeholder="Select your current qualification" options={educationOptions} required value={formData.education} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Course Interest</label>
                                                <FormInput name="course" placeholder="Preferred course (e.g. MS in CS)" required value={formData.course} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label fw-semibold">Additional Details</label>
                                                <FormTextarea name="message" rows="4" placeholder="Tell us about your goals or if you need scholarship support" value={formData.message} onChange={handleFormChange} disabled={isSubmitting} />
                                            </div>
                                            <div className="col-12 text-center mt-2">
                                                <button type="submit" className="submit-btn-lg" disabled={isSubmitting}>
                                                    {isSubmitting ? 'Sending...' : 'Submit Application'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div className="hero-bottom">
                    <div className="hero-stat-mobile-carousel">
                        <HeroStatMobileCarousel cards={heroStatCards} />
                    </div>
                    <div className="hero-cards-desktop-container">
                        <HeroStats cards={heroStatCards} />
                    </div>
                </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding services-section-light">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Our Expert Services</h2>
                        <p>Comprehensive support from planning to your first day on campus. We handle the complexity so you can focus on your future.</p>

                        <motion.div
                            className="premium-free-service-banner"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="pfsb-content">
                                <span className="pfsb-icon"><FaAward /></span>
                                <span className="pfsb-text">100% Free Service for Students*</span>
                                <span className="pfsb-exception">(Except Germany)</span>
                            </div>
                        </motion.div>
                    </div>
<div
 className={`row g-4 ${
    showAllServices ? "show-all-mobile" : ""
 }`}
>                        {services.map((service, index) => (
                            <div className={`col-lg-3 col-md-6 view-all-item ${index >= 3 ? 'extra-mobile-card' : ''}`} key={index}>
                                <motion.div
                                    className="service-box"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="service-icon">{service.icon}</div>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    {services.length > 3 && (
                        <div className="view-all-mobile-wrap">
                            <button
                                type="button"
                                className="view-all-mobile-btn"
                                onClick={() => setShowAllServices(v => !v)}
                            >
                                {showAllServices ? 'View Less' : `View All ${services.length}`}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Destinations Section */}
            <section className="section-padding destinations-section-light">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Top Study Destinations</h2>
                        <p>Choose your pathway to global excellence. We represent top universities across 8+ major educational hubs worldwide.</p>
                    </div>
                    <div className={`row g-4 view-all-container ${showAllDestinations ? 'show-all-mobile' : ''}`}>
                        {destinations.map((dest, index) => (
                            <div className={`col-lg-3 col-md-6 view-all-item ${index >= 3 ? 'extra-mobile-card' : ''}`} key={index}>
                                <motion.div
                                    className="destination-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="destination-img-box">
                                        <img src={dest.image} alt={dest.country} />
                                    </div>
                                    <div className="destination-info">
                                        <h3>{dest.country}</h3>
                                        <p>{dest.description}</p>
                                        <span className="uni-count"><FaUniversity className="me-2" />{dest.universities}</span>
                                        <div className="dest-btn-group">
                                            <button className="dest-btn dest-btn-primary" onClick={() => handleEnquireClick(dest.country, `Enquire About Studying in ${dest.country}`)}>Enquire Now</button>
                                            <Link href={`/study-abroad/${dest.country.toLowerCase().replace(/\s+/g, '-')}`} className="dest-btn dest-btn-outline">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    {destinations.length > 3 && (
                        <div className="view-all-mobile-wrap">
                            <button
                                type="button"
                                className="view-all-mobile-btn"
                                onClick={() => setShowAllDestinations(v => !v)}
                            >
                                {showAllDestinations ? 'View Less' : `View All ${destinations.length}`}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* MBBS Abroad Section */}
            <section className="section-padding mbbs-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Study MBBS Abroad</h2>
                        <p>Turn your dream of becoming a doctor into reality. Study at NMC-approved, WHO-listed universities across Europe and Central Asia — with English-medium instruction and total costs far below Indian private medical colleges.</p>
                    </div>

                    {/* Stats banner with counting animation */}
                    <MbbsStatsBanner />

                    {/* Scrolling ticker */}
                    <div className="mbbs-ticker-wrap">
                        <div className="mbbs-ticker-track">
                            {[
                                "NMC & WHO Recognised",
                                "Globally Valid Degree",
                                "No Donation / Capitation Fee",
                                "Clinical Hospital Training",
                                "100% English Medium",
                                "FMGE / NExT Coaching",
                                "Affordable Tuition Fees",
                                "Safe Campus Environment",
                                "NMC & WHO Recognised",
                                "Globally Valid Degree",
                                "No Donation / Capitation Fee",
                                "Clinical Hospital Training",
                                "100% English Medium",
                                "FMGE / NExT Coaching",
                                "Affordable Tuition Fees",
                                "Safe Campus Environment",
                            ].map((text, i) => (
                                <span className="mbbs-ticker-pill" key={i}>
                                    <span className="mbbs-ticker-dot" />
                                    {text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Why MBBS abroad */}
                    <div className="mbbs-why-grid">
                        {[
                            { icon: <FaUniversity />,      title: "Accredited Universities",  desc: "WHO-listed and NMC-recognised government & private medical universities." },
                            { icon: <FaStethoscope />,     title: "Clinical Exposure",         desc: "Structured hospital rotations in affiliated teaching hospitals abroad." },
                            { icon: <FaPlaneDeparture />,  title: "End-to-End Support",        desc: "University shortlisting, visa, travel, and pre-departure briefing covered." },
                            { icon: <FaAward />,           title: "Affordable Education",      desc: "Complete MBBS abroad at a fraction of Indian private college fees." },
                        ].map((item, i) => (
                            <motion.div
                                className="mbbs-why-card"
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <div className="mbbs-why-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Country cards header */}
                    <div className="mbbs-destinations-header mt-5">
                        <h3 className="mbbs-destinations-title">Top Countries for MBBS Abroad</h3>
                        <p>Choose from trusted destinations with quality medical education and strong FMGE pass records.</p>
                    </div>

                    {/* Unified responsive slider (matches home page style) */}
                    <div className="mbbs-unified-slider-container">
                        <button className="mbbs-unified-arrow prev" onClick={() => scrollMbbs(-1)} aria-label="Previous">
                            <FaChevronLeft />
                        </button>
                        
                        <div className="mbbs-unified-track" ref={mbbsScrollRef}>
                            {mbbsCountries.map((c, i) => (
                                <motion.div className="mbbs-country-card" key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}>
                                    <div className="mbbs-card-img-box">
                                        <img
                                            src={`https://flagcdn.com/w320/${c.code}.png`}
                                            srcSet={`https://flagcdn.com/w160/${c.code}.png 1x, https://flagcdn.com/w320/${c.code}.png 2x`}
                                            alt={`${c.country} flag`}
                                            className="mbbs-card-flag-img"
                                        />
                                    </div>
                                    <div className="mbbs-card-info">
                                        <h3 className="mbbs-card-country-name">{c.country}</h3>
                                        <span className="mbbs-card-uni-count">
                                            <FaStethoscope className="me-2" />{c.duration} · MBBS
                                        </span>
                                        <p className="mbbs-card-fee-text">{c.fee} total · {c.tag}</p>
                                        <div className="mbbs-dest-btn-group">
                                            <button className="dest-btn dest-btn-primary"
                                                onClick={() => handleEnquireClick(`MBBS in ${c.country}`, `Apply for MBBS in ${c.country}`)}>
                                                Enquire Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="mbbs-unified-arrow next" onClick={() => scrollMbbs(1)} aria-label="Next">
                            <FaChevronRight />
                        </button>
                    </div>

                </div>
            </section>

            {/* Dream Country Benefits Showcase Section */}
            <section className="section-padding showcase-section">
                <div className="container">
                    <div className="section-header mb-4">
                        <h2 className="section-main-title text-shine">Benefits of Your Dream Country</h2>
                        <p className="fs-6">Get a detailed overview of what makes each destination a top choice for international studies, tailored to your career aspirations.</p>
                    </div>

                    <div
                        className="showcase-card-wrapper position-relative overflow-hidden rounded-4 shadow-lg"
                        style={{
                            backgroundImage: `url(${showcaseData[activeShowcase].bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'all 0.6s ease'
                        }}
                    >
                        <div className="showcase-card-overlay" style={{ background: showcaseData[activeShowcase].gradient }} />

                        <div className="position-relative z-index-2 p-3 p-md-4">
                            <div className="mb-4 pb-3 border-bottom border-white border-opacity-10">
                                <div className="showcase-tabs-container position-relative">
                                    <div className="showcase-tabs-bar">
                                        {Object.keys(showcaseData).map((key) => (
                                            <button
                                                key={key}
                                                className={`showcase-tab ${activeShowcase === key ? 'active' : ''}`}
                                                onClick={() => setActiveShowcase(key)}
                                                style={{ '--active-accent': showcaseData[key].accentColor }}
                                            >
                                                <span className="me-2">{showcaseData[key].flagEmoji}</span>
                                                {showcaseData[key].flagName}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-7 text-white">
                                    <motion.div
                                        key={activeShowcase}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ '--country-accent': showcaseData[activeShowcase].accentColor }}
                                    >
                                        <h2 className="showcase-country-title country-title-handwritten">
                                            {showcaseData[activeShowcase].title}
                                        </h2>

                                        <h4 className="showcase-country-subtitle fw-bold mb-3">
                                            {showcaseData[activeShowcase].subtitle}
                                        </h4>

                                        <ul className="showcase-highlights-list list-unstyled mb-4">
                                            {showcaseData[activeShowcase].highlights.map((highlight, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="d-flex align-items-center mb-2"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                >
                                                    <span className="showcase-bullet-dot me-3">•</span>
                                                    <span className="showcase-highlight-text fs-6">{highlight}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <button
                                            className="showcase-expert-btn px-4 py-2 rounded-pill fw-bold text-white shadow-sm"
                                            style={{
                                                background: showcaseData[activeShowcase].accentColor,
                                                borderColor: 'transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onClick={() => handleEnquireClick(activeShowcase, `Study in ${activeShowcase}`)}
                                        >
                                            {showcaseData[activeShowcase].btnText}
                                        </button>
                                    </motion.div>
                                </div>

                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="showcase-graphic-wrap position-relative w-100 d-flex justify-content-center align-items-center" style={{ height: '280px' }}>
                                        <motion.div
                                            key={`flag-${activeShowcase}`}
                                            className="showcase-flag-brush position-absolute"
                                            style={{ backgroundImage: `url(${showcaseData[activeShowcase].flagUrl})` }}
                                            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                                            animate={{ opacity: 0.8, scale: 1, rotate: -5 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <motion.div
                                            key={`landmark-${activeShowcase}`}
                                            className="showcase-landmark-frame position-absolute"
                                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        >
                                            <img src={showcaseData[activeShowcase].landmarkUrl} alt={`${activeShowcase} Landmark`} />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* English Proficiency Section */}
            <section id="english-proficiency" className="section-padding proficiency-section">
                <div className="container">
                    <div className="section-header row align-items-center justify-content-center mb-5 text-start" style={{ textAlign: 'left' }}>
                        <div className="col-lg-6">
                            <h2 className="section-main-title text-shine mb-4" style={{ textAlign: 'left' }}>Master Your English Proficiency</h2>
                            <p className="proficiency-main-desc text-muted" style={{ textAlign: 'left' }}>
                                English proficiency certifications like <strong>IELTS, PTE, and Duolingo</strong> are essential milestones in your study abroad journey.
                                At Urbancode, we provide comprehensive, result-oriented training for all these exams.
                                Master the language under the guidance of experts with over <strong>10+ years of professional experience</strong> and achieve your target score with confidence.
                            </p>
                            <Link
                                href="/study-abroad/evaluation-form"
                                className="eval-test-btn"
                            >
                                <span>Demo class Evaluation form</span>
                            </Link>
                        </div>
                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <img src="/images/study-abroad/ielts.png" alt="English Proficiency" className="img-fluid" style={{ maxHeight: '350px', objectFit: 'contain' }} />
                        </div>
                    </div>

                    <div className="proficiency-tabs-container">
                        <div className={`proficiency-glass-container prof-bg-${activeProficiency.toLowerCase()}`}>
                            <div className="proficiency-button-parent">
                            <div className="proficiency-buttons">
                                {Object.keys(proficiencyData).map((key) => (
                                    <button
                                        key={key}
                                        className={`prof-tab-btn ${activeProficiency === key ? 'active' : ''}`}
                                        onClick={() => setActiveProficiency(key)}
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>
                            </div>

                            <motion.div
                                key={activeProficiency}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="proficiency-content-card"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-5 text-center mb-4 mb-lg-0">
                                        <div className="prof-cert-container mobile-padded-img">
                                            <img
                                                src={proficiencyData[activeProficiency].certificateImage}
                                                alt={`${activeProficiency} Certificate`}
                                                className="prof-cert-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <h3 className="prof-title prof-glass-title">{proficiencyData[activeProficiency].title}</h3>
                                        <p className="prof-desc prof-glass-desc">{proficiencyData[activeProficiency].description}</p>
                                        <div className="d-flex flex-wrap gap-3 align-items-center">
                                            <button
                                                className="btn-prof-enquire prof-glass-btn m-0"
                                                onClick={() => handleEnquireClick(activeProficiency, `Enroll in ${activeProficiency} Course`)}
                                            >
                                                Enroll with us now!
                                            </button>
                                            <button
                                                className="btn-prof-enquire prof-glass-btn m-0"
                                                onClick={() => setShowBatches(!showBatches)}
                                            >
                                                Course Structures
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {showBatches && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="prof-batches prof-batches-glass mt-5 p-4 rounded-4"
                                    >
                                        <div className="text-center mb-4">
                                            <h4 className="fw-bold mb-2" style={{ fontSize: '26px', letterSpacing: '1px', color: '#002B5B' }}>
                                                {activeProficiency} COURSE STRUCTURES
                                            </h4>
                                            <p className="small fw-bold" style={{ color: '#444' }}>Flexible options. Expert guidance. Your success, our mission.</p>
                                        </div>

                                        <div className="row g-4 mb-4 align-items-stretch">
                                            {/* COMPLETE COURSE */}
                                            <div className="col-md-4">
                                                <div className="course-struct-card h-100 p-4 rounded-4 d-flex flex-column" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(0, 43, 91, 0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                                                    <div className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-3" style={{ borderColor: 'rgba(0, 43, 91, 0.1) !important' }}>
                                                        <div className="course-badge text-white px-3 py-1 fw-bold rounded-pill" style={{ backgroundColor: '#002B5B', fontSize: '13px' }}>COMPLETE {activeProficiency}</div>
                                                        <div className="course-hours fw-bold text-center bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '55px', height: '55px', border: '2px solid #002B5B', color: '#002B5B' }}>
                                                            <span style={{ fontSize: '20px', lineHeight: '1' }}>30</span>
                                                            <span style={{ fontSize: '9px', fontWeight: '600' }}>HOURS</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-3 mb-3">
                                                        <FaGraduationCap className="fs-1 flex-shrink-0" style={{ color: '#002B5B' }} />
                                                        <p className="small fw-bold mb-0 text-dark" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>A comprehensive 30-hour program designed for learners seeking end-to-end {activeProficiency} preparation.</p>
                                                    </div>
                                                    <ul className="list-unstyled small fw-semibold mb-0 mt-auto text-dark" style={{ fontSize: '13.5px' }}>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#002B5B' }}/> <span>Covers all four modules – Listening, Reading, Writing, and Speaking</span></li>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#002B5B' }}/> <span>Language development, grammar, vocabulary enhancement</span></li>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#002B5B' }}/> <span>Test strategies and extensive practice</span></li>
                                                        <li className="mb-0 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#002B5B' }}/> <span>Personalised feedback for continuous improvement</span></li>
                                                    </ul>
                                                    <div className="mt-4 pt-3 border-top text-center" style={{ borderColor: 'rgba(0, 43, 91, 0.1) !important' }}>
                                                        <button 
                                                            className="btn rounded-pill w-100 fw-bold shadow-sm course-enroll-btn py-2" 
                                                            style={{ background: 'linear-gradient(135deg, #001B3B, #004B8B)', color: 'white', letterSpacing: '0.5px' }}
                                                            onClick={() => handleEnquireClick(activeProficiency, `Enroll in Complete ${activeProficiency} Course`)}
                                                        >
                                                            Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FOCUSED TRAINING */}
                                            <div className="col-md-4">
                                                <div className="course-struct-card h-100 p-4 rounded-4 d-flex flex-column" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(0, 128, 128, 0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                                                    <div className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-3" style={{ borderColor: 'rgba(0, 128, 128, 0.1) !important' }}>
                                                        <div className="course-badge text-white px-3 py-1 fw-bold rounded-pill" style={{ backgroundColor: '#008080', fontSize: '13px' }}>FOCUSED TRAINING</div>
                                                        <div className="course-hours fw-bold text-center bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '55px', height: '55px', border: '2px solid #008080', color: '#008080' }}>
                                                            <span style={{ fontSize: '20px', lineHeight: '1' }}>20</span>
                                                            <span style={{ fontSize: '9px', fontWeight: '600' }}>HOURS</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-3 mb-3">
                                                        <div className="flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: '#008080', color: 'white' }}>
                                                            <FaCheckCircle className="fs-4" />
                                                        </div>
                                                        <p className="small fw-bold mb-0 text-dark" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>A structured 20-hour program tailored for candidates who already possess a good command of English but require targeted training in specific {activeProficiency} modules or skill areas.</p>
                                                    </div>
                                                    <ul className="list-unstyled small fw-semibold mb-0 mt-auto text-dark" style={{ fontSize: '13.5px' }}>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#008080' }}/> <span>Focused training on specific modules or skills</span></li>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#008080' }}/> <span>Emphasis on exam techniques and accuracy</span></li>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#008080' }}/> <span>Time management strategies</span></li>
                                                        <li className="mb-0 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#008080' }}/> <span>Guided practice to improve band scores</span></li>
                                                    </ul>
                                                    <div className="mt-4 pt-3 border-top text-center" style={{ borderColor: 'rgba(0, 128, 128, 0.1) !important' }}>
                                                        <button 
                                                            className="btn rounded-pill w-100 fw-bold shadow-sm course-enroll-btn py-2" 
                                                            style={{ background: 'linear-gradient(135deg, #005050, #00B0B0)', color: 'white', letterSpacing: '0.5px' }}
                                                            onClick={() => handleEnquireClick(activeProficiency, `Enroll in Focused Training for ${activeProficiency}`)}
                                                        >
                                                            Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CRASH COURSE */}
                                            <div className="col-md-4">
                                                <div className="course-struct-card h-100 p-4 rounded-4 d-flex flex-column" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(102, 51, 153, 0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                                                    <div className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-3" style={{ borderColor: 'rgba(102, 51, 153, 0.1) !important' }}>
                                                        <div className="course-badge text-white px-3 py-1 fw-bold rounded-pill" style={{ backgroundColor: '#663399', fontSize: '13px' }}>CRASH COURSE</div>
                                                        <div className="course-hours fw-bold text-center bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '55px', height: '55px', border: '2px solid #663399', color: '#663399' }}>
                                                            <span style={{ fontSize: '20px', lineHeight: '1' }}>12</span>
                                                            <span style={{ fontSize: '9px', fontWeight: '600' }}>HOURS</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-3 mb-3">
                                                        <div className="flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: '#663399', color: 'white' }}>
                                                            <FaPlaneDeparture className="fs-4" />
                                                        </div>
                                                        <p className="small fw-bold mb-0 text-dark" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>A fast-paced 12-hour revision program ideal for candidates appearing for the {activeProficiency} exam in the near future.</p>
                                                    </div>
                                                    <ul className="list-unstyled small fw-semibold mb-0 mt-auto text-dark" style={{ fontSize: '13.5px' }}>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#663399' }}/> <span>Key test strategies and high-impact tips</span></li>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#663399' }}/> <span>Common question types across all modules</span></li>
                                                        <li className="mb-2 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#663399' }}/> <span>Mock practice for real exam experience</span></li>
                                                        <li className="mb-0 d-flex gap-2 align-items-start"><FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#663399' }}/> <span>Maximise performance in a limited timeframe</span></li>
                                                    </ul>
                                                    <div className="mt-4 pt-3 border-top text-center" style={{ borderColor: 'rgba(102, 51, 153, 0.1) !important' }}>
                                                        <button 
                                                            className="btn rounded-pill w-100 fw-bold shadow-sm course-enroll-btn py-2" 
                                                            style={{ background: 'linear-gradient(135deg, #461379, #9653D9)', color: 'white', letterSpacing: '0.5px' }}
                                                            onClick={() => handleEnquireClick(activeProficiency, `Enroll in Crash Course for ${activeProficiency}`)}
                                                        >
                                                            Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="features-section mt-4 p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                            <div className="text-center mb-4 position-relative">
                                                <hr className="position-absolute w-100" style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 0, opacity: 0.1, borderColor: '#002B5B' }} />
                                                <span className="badge px-4 py-2 position-relative" style={{ backgroundColor: '#002B5B', fontSize: '13px', zIndex: 1 }}>EVERY COURSE INCLUDES</span>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <div className="mb-2 d-flex justify-content-center align-items-center rounded-circle" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0, 43, 91, 0.1)' }}>
                                                            <FaClipboardList className="fs-4" style={{ color: '#002B5B' }} />
                                                        </div>
                                                        <h6 className="fw-bold mb-2" style={{ fontSize: '13px', color: '#002B5B' }}>CUSTOMISED STUDY PLAN</h6>
                                                        <p className="text-muted small mb-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>A personalised plan tailored to your goals, strengths, and target band.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <div className="mb-2 d-flex justify-content-center align-items-center rounded-circle" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0, 128, 128, 0.1)' }}>
                                                            <FaLaptop className="fs-4" style={{ color: '#008080' }} />
                                                        </div>
                                                        <h6 className="fw-bold mb-2" style={{ fontSize: '13px', color: '#008080' }}>HANDS-ON LEARNING</h6>
                                                        <p className="text-muted small mb-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>Interactive sessions, practical strategies, and real exam simulations.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <div className="mb-2 d-flex justify-content-center align-items-center rounded-circle" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(102, 51, 153, 0.1)' }}>
                                                            <FaEdit className="fs-4" style={{ color: '#663399' }} />
                                                        </div>
                                                        <h6 className="fw-bold mb-2" style={{ fontSize: '13px', color: '#663399' }}>REGULAR ASSIGNMENTS</h6>
                                                        <p className="text-muted small mb-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>Carefully designed assignments to reinforce learning and track progress.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <div className="mb-2 d-flex justify-content-center align-items-center rounded-circle" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(230, 126, 34, 0.1)' }}>
                                                            <FaClipboardCheck className="fs-4" style={{ color: '#e67e22' }} />
                                                        </div>
                                                        <h6 className="fw-bold mb-2" style={{ fontSize: '13px', color: '#e67e22' }}>MOCK TESTS WITH FEEDBACK</h6>
                                                        <p className="text-muted small mb-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>Regular mock tests will be corrected in detail and personalised feedback will be provided.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                        </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Section
            <section id="consultation" className="section-padding consultation-section">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <FormCard className="p-0" style={{ background: 'linear-gradient(180deg, #e3f0eb 0%, #f3f5f3 100%)', border: 'none', overflow: 'visible' }}>
                        <div className="p-3 p-md-4">
                            <div className="text-center mb-3">
                                <h3 className="h3 fw-bold mt-3 mb-2 text-dark">Book Your Free Consultation</h3>
                                <p className="small text-muted">Get personalized guidance for your international academic journey.</p>
                            </div>

                            {formStatus.message && (
                                <div className={`alert alert-${formStatus.type === 'error' ? 'danger' : 'success'} mb-4 text-center`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit}>
                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <FormInput name="name" placeholder="Full Name" required value={formData.name} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-md-6">
                                        <FormSelect name="country" placeholder="Preferred Destination" options={destinationOptions} required value={formData.country} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-md-6">
                                        <FormSelect name="education" placeholder="Highest Qualification" options={educationOptions} required value={formData.education} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput name="course" placeholder="Preferred Course (e.g. MS in CS)" required value={formData.course} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-12">
                                        <FormTextarea name="message" rows="3" placeholder="Message (Optional) - Tell us about your goals..." value={formData.message} onChange={handleFormChange} disabled={isSubmitting} />
                                    </div>
                                    <div className="col-12 text-center mt-2">
                                        <FormButton
                                            type="submit"
                                            variant="success"
                                            className="px-4 py-2 rounded-pill"
                                            loading={isSubmitting}
                                            style={{ minWidth: '160px', backgroundColor: '#444444', border: 'none' }}
                                        >
                                            {isSubmitting ? "Sending..." : "Submit"}
                                        </FormButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </FormCard>
                </div>
            </section> */}

            {/* Testimonials Section — Voice That Matters */}
            
            <section className="success-stories-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <div className="section-header text-center mb-0">
                        <h2 className="section-main-title text-shine">The Voice That Matters</h2>
                    </div>
                </div>
                <TestimonialCarousel />
            </section>

            {/* Enquiry Modal */}
            <EnquiryFormModal
                isOpen={isModalOpen}
                onClose={() => { setIsModalOpen(false); setModalTitle(null); }}
                courseName={`Study Abroad - ${selectedCountry}`}
                customTitle={modalTitle}
            />
        </div>
    );
};

export default StudyAbroadPage;