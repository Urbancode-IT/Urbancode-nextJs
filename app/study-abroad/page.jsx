'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaAward, FaUniversity, FaSearch, FaStethoscope, FaGlobeAmericas, FaUserMd, FaPlaneDeparture, FaClipboardCheck, FaHospital, FaArrowRight } from 'react-icons/fa';
import { Send } from "lucide-react";
import { submitEnquiryForm } from "@/lib/api/api";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { destinations, services, testimonials, showcaseData } from './data';
import '../components/Home/NewHeroSection.css';
import '../components/CourseLayout/ProgramCohorts.css';
import './StudyAbroad.css';
import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";

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
    { icon: <FaUniversity size={24} color="#60a5fa" className="mb-2" />, val: "Top 1%", label: "Global Admits" },
    { icon: <FaCheckCircle size={24} color="#34d399" className="mb-2" />, val: "98%", label: "Visa Success" },
    { icon: <FaAward size={24} color="#fbbf24" className="mb-2" />, val: "Scholarships", label: "Up to 100% Funding" },
    { icon: <FaGlobeAmericas size={24} color="#a78bfa" className="mb-2" />, val: "500+", label: "Universities" },
    { icon: <FaStar size={24} color="#f472b6" className="mb-2" />, val: "10+ Years", label: "Expert Guidance" },
];

const renderHeroCard = (card, key, compact = false) => (
    <div className={`hero-card ${compact ? 'hero-card-compact' : ''}`} key={key}>
        <div className="hero-card-glass">
            {card.icon}
            <h3 className="hero-card-title text-center">{card.val}</h3>
            <p className="hero-card-desc text-center">{card.label}</p>
        </div>
    </div>
);

// Mobile version: one compact card visible at a time, auto-advances on a timer,
// with dot indicators — a proper slide-by-slide carousel, not a continuous scroll strip.
const HeroStatsMarquee = ({ cards }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % cards.length);
        }, 2200);
        return () => clearInterval(timer);
    }, [cards.length]);

    return (
        <div className="hero-cards-wrapper hero-cards-wrapper-single">
            <div className="hero-cards-viewport-single">
                <div
                    className="hero-cards-track-single"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {cards.map((card, i) => (
                        <div className="hero-card-single-slide" key={`slide-${i}`}>
                            {renderHeroCard(card, `mcard-${i}`, true)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Desktop/tablet version: fixed 220px cards, manual arrow-controlled carousel.
// Cards keep a fixed width and stay in a single row; when they don't all fit,
// left/right arrow buttons step through them one at a time (with a peek of the
// next/previous card), instead of wrapping to a second row.
const HeroStatsCarousel = ({ cards }) => {
    const viewportRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [needsArrows, setNeedsArrows] = useState(false);

    const CARD_WIDTH = 220;
    const GAP = 16;
    const step = CARD_WIDTH + GAP;

    useEffect(() => {
        const recalc = () => {
            if (!viewportRef.current) return;
            const availableWidth = viewportRef.current.offsetWidth;
            const totalWidth = cards.length * CARD_WIDTH + (cards.length - 1) * GAP;

            if (totalWidth <= availableWidth) {
                setNeedsArrows(false);
                setMaxIndex(0);
                setIndex(0);
            } else {
                const visibleCount = Math.max(1, Math.floor(availableWidth / step));
                const newMaxIndex = Math.max(0, cards.length - visibleCount);
                setNeedsArrows(true);
                setMaxIndex(newMaxIndex);
                setIndex((prev) => Math.min(prev, newMaxIndex));
            }
        };

        recalc();
        const resizeObserver = new ResizeObserver(recalc);
        if (viewportRef.current) resizeObserver.observe(viewportRef.current);
        window.addEventListener('resize', recalc);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', recalc);
        };
    }, [cards, step]);

    const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));
    const goNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));

    return (
        <div className="hero-cards-wrapper">
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

                <div className="hero-cards-viewport" ref={viewportRef}>
                    <div
                        className={`hero-cards-track ${needsArrows ? '' : 'centered'}`}
                        style={needsArrows ? { transform: `translateX(-${index * step}px)` } : undefined}
                    >
                        {cards.map((card, i) => renderHeroCard(card, `card-${i}`, false))}
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

// Top-level switch: mobile gets the compact auto-scroll marquee,
// desktop/tablet get the fixed-size arrow carousel.
const HeroStats = ({ cards }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkViewport = () => setIsMobile(window.innerWidth <= 767);
        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    return isMobile ? <HeroStatsMarquee cards={cards} /> : <HeroStatsCarousel cards={cards} />;
};

const StudyAbroadPage = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
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

    const proficiencyData = {
        IELTS: {
            title: "IELTS (International English Language Testing System)",
            description: "The world's most popular English language proficiency test for higher education and global migration. It assesses your Listening, Reading, Writing, and Speaking skills.",
            highlights: ["Accepted in UK, Canada, Australia, and New Zealand", "Flexible test dates", "Comprehensive preparation material provided"],
            certificateImage: "/images/study-abroad/IELTS (1).jpg"
        },
        PTE: {
            title: "PTE (Pearson Test of English)",
            description: "A computer-based English language test for non-native English speakers who want to study abroad. It is known for fast results and an unbiased computer-based scoring system.",
            highlights: ["Fast results (typically within 48 hours)", "Unbiased machine scoring", "Accepted by thousands of universities worldwide"],
            certificateImage: "/images/study-abroad/PTE.jpg"
        },
        Duolingo: {
            title: "Duolingo English Test",
            description: "A modern, convenient, and affordable English proficiency assessment. You can take the test online, anytime, anywhere in under an hour.",
            highlights: ["Take the test from home", "Results in 2 days", "Accepted by over 4000 institutions globally"],
            certificateImage: "/images/study-abroad/1.webp"
        }
    };

    const handleEnquireClick = (country) => {
        setSelectedCountry(country);
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
            setFormStatus({ type: "error", message: "Please enter a valid name (min 3 characters)." });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFormStatus({ type: "error", message: "Please enter a valid email address." });
            return;
        }
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
            setFormStatus({ type: "error", message: "Please enter a valid 10-digit mobile number." });
            return;
        }
        if (!country) {
            setFormStatus({ type: "error", message: "Please select a preferred destination." });
            return;
        }
        if (!education) {
            setFormStatus({ type: "error", message: "Please select your highest qualification." });
            return;
        }
        if (!course.trim()) {
            setFormStatus({ type: "error", message: "Please enter your preferred course." });
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
                setFormStatus({ type: "error", message: result.message || "Failed to send. Please try again." });
            }
        } catch (error) {
            setFormStatus({ type: "error", message: "Something went wrong. Please try again later." });
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
                        <button onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })} className="hero-btn-primary">
                            <span>Start Application</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58331 10.9997H17.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.9999 4.58301L17.4166 10.9997L10.9999 17.4163" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button onClick={() => document.getElementById('english-proficiency').scrollIntoView({ behavior: 'smooth' })} className="hero-btn-secondary">
                            <span>🎓 IELTS PTE Training</span>
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

                <div className="hero-bottom pt-5">
                    <HeroStats cards={heroStatCards} />
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
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
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
                </div>
            </section>

            {/* Destinations Section */}
            <section className="section-padding destinations-section-light">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Top Study Destinations</h2>
                        <p>Choose your pathway to global excellence. We represent top universities across 8+ major educational hubs worldwide.</p>
                    </div>
                    <div className="row g-4">
                        {destinations.map((dest, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
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
                                            <button className="dest-btn dest-btn-primary" onClick={() => handleEnquireClick(dest.country)}>Enquire Now</button>
                                            <Link href={`/study-abroad/${dest.country.toLowerCase().replace(/\s+/g, '-')}`} className="dest-btn dest-btn-outline">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MBBS Abroad Section */}
            <section className="section-padding mbbs-section">
                <div className="container">

                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Study MBBS Abroad</h2>
                        <p>Turn your dream of becoming a doctor into reality. Study at NMC-approved, WHO-listed universities across Europe and Central Asia — with English-medium instruction and total costs far below Indian private medical colleges.</p>
                    </div>

                    {/* Stats banner */}
                    <div className="mbbs-stats-banner">
                        {[
                            { val: "6+",    label: "MBBS Destinations" },
                            { val: "50+",   label: "Partner Universities" },
                            { val: "6 Yrs", label: "Programme Duration" },
                            { val: "100%",  label: "Admission Support" },
                        ].map((s, i) => (
                            <div className="mbbs-stat-item" key={i}>
                                <span className="mbbs-stat-val">{s.val}</span>
                                <span className="mbbs-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>

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
                    <div className="mbbs-destinations-header">
                        <h3 className="mbbs-destinations-title">Top Countries for MBBS Abroad</h3>
                        <p>Choose from trusted destinations with quality medical education and strong FMGE pass records.</p>
                    </div>

           <div className="mbbs-countries-grid">
  {[
    { code: "ro", country: "Romania",    fee: "From ~₹25L", duration: "6 Years", tag: "EU Degree"       },
    { code: "ru", country: "Russia",     fee: "From ~₹20L", duration: "6 Years", tag: "NMC Approved"    },
    { code: "ua", country: "Ukraine",    fee: "From ~₹18L", duration: "6 Years", tag: "Budget Friendly" },
    { code: "am", country: "Armenia",    fee: "From ~₹22L", duration: "6 Years", tag: "Safe Campus"     },
    { code: "ge", country: "Georgia",    fee: "From ~₹24L", duration: "6 Years", tag: "WHO Listed"      },
    { code: "kg", country: "Kyrgyzstan", fee: "From ~₹16L", duration: "6 Years", tag: "Most Affordable" },
  ].map((c, i) => (
    <motion.div className="mbbs-country-card" key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}>
      <div className="mbbs-card-img-box">
        <img
          src={`https://flagcdn.com/w160/${c.code}.png`}
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
            onClick={() => handleEnquireClick(`MBBS in ${c.country}`)}>
            Enquire Now
          </button>
          {/* <button className="dest-btn dest-btn-outline"
            onClick={() => handleEnquireClick(`MBBS in ${c.country} - Details`)}>
            Know More
          </button> */}
        </div>
      </div>
    </motion.div>
  ))}
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
                                            onClick={() => handleEnquireClick(activeShowcase)}
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
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Master Your English Proficiency</h2>
                        <p className="proficiency-main-desc">
                            English proficiency certifications like <strong>IELTS, PTE, and Duolingo</strong> are essential milestones in your study abroad journey.
                            At Urbancode, we provide comprehensive, result-oriented training for all these exams.
                            Master the language under the guidance of experts with over <strong>10+ years of professional experience</strong> and achieve your target score with confidence.
                        </p>
                    </div>

                    <div className="proficiency-tabs-container">
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

                        <motion.div
                            key={activeProficiency}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="proficiency-content-card"
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h3 className="prof-title">{proficiencyData[activeProficiency].title}</h3>
                                    <p className="prof-desc">{proficiencyData[activeProficiency].description}</p>
                                    <div className="prof-highlights">
                                        {proficiencyData[activeProficiency].highlights.map((h, i) => (
                                            <div key={i} className="prof-h-item">
                                                <FaCheckCircle className="text-success me-2" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="btn-prof-enquire mt-4"
                                        onClick={() => handleEnquireClick(activeProficiency)}
                                    >
                                        Enroll for {activeProficiency} Coaching
                                    </button>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block text-center">
                                    <div className="prof-cert-container">
                                        <img
                                            src={proficiencyData[activeProficiency].certificateImage}
                                            alt={`${activeProficiency} Certificate`}
                                            className="prof-cert-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="prof-batches mt-5">
                            <h2 className="cohorts-title mb-4" style={{ fontSize: '24px' }}>Batches</h2>
                            <div className="cohorts-list" style={{ padding: 0 }}>
                                <div className="cohort-row-card">
                                    <div className="cohort-name-col">
                                        <div className="batch-dot"></div>
                                        <span className="batch-name-text">Regular Classes</span>
                                    </div>
                                    <div className="cohort-info-col">
                                        <span className="info-label">🕒 TIME</span>
                                        <span className="info-value">11:00 AM IST</span>
                                    </div>
                                    <div className="cohort-info-col">
                                        <span className="info-label">📅 BATCH TYPE</span>
                                        <span className="info-value">Weekday (Mon-Fri)</span>
                                    </div>
                                    <div className="cohort-action-col">
                                        <button className="btn btn-success fw-bold px-4 rounded-pill" onClick={() => handleEnquireClick(activeProficiency)}>Join Now</button>
                                    </div>
                                </div>

                                <div className="cohort-row-card">
                                    <div className="cohort-name-col">
                                        <div className="batch-dot"></div>
                                        <span className="batch-name-text">Fast Track</span>
                                    </div>
                                    <div className="cohort-info-col">
                                        <span className="info-label">🕒 TIME</span>
                                        <span className="info-value">02:00 PM IST</span>
                                    </div>
                                    <div className="cohort-info-col">
                                        <span className="info-label">📅 BATCH TYPE</span>
                                        <span className="info-value">Weekday (Mon-Fri)</span>
                                    </div>
                                    <div className="cohort-action-col">
                                        <button className="btn btn-success fw-bold px-4 rounded-pill" onClick={() => handleEnquireClick(activeProficiency)}>Join Now</button>
                                    </div>
                                </div>

                                <div className="cohort-row-card">
                                    <div className="cohort-name-col">
                                        <div className="batch-dot"></div>
                                        <span className="batch-name-text">Weekend Classes</span>
                                    </div>
                                    <div className="cohort-info-col">
                                        <span className="info-label">🕒 TIME</span>
                                        <span className="info-value">11:00 AM IST</span>
                                    </div>
                                    <div className="cohort-info-col">
                                        <span className="info-label">📅 BATCH TYPE</span>
                                        <span className="info-value">Weekend (Sat-Sun)</span>
                                    </div>
                                    <div className="cohort-action-col">
                                        <button className="btn btn-success fw-bold px-4 rounded-pill" onClick={() => handleEnquireClick(activeProficiency)}>Join Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Section */}
            <section id="consultation" className="section-padding consultation-section">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <FormCard className="p-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #e3f0eb 0%, #f3f5f3 100%)', border: 'none' }}>
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
            </section>

            {/* Testimonials Section */}
            <section className="section-padding success-stories-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-main-title text-shine">Success Stories</h2>
                        <p className="section-subtitle">Join hundreds of students who realized their dreams through our expert guidance and support.</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {testimonials.map((test, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <motion.div
                                    className="test-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="quote-watermark">"</div>

                                    <div className="test-header">
                                        <div className="avatar-wrapper">
                                            <img src={test.image} alt={test.name} className="test-avatar" />
                                            <div className="visa-check-badge">
                                                <FaCheckCircle />
                                            </div>
                                        </div>
                                        <div className="test-user">
                                            <div className="user-name-row">
                                                <h5>{test.name}</h5>
                                                <span className="visa-approved-text">Visa Approved</span>
                                            </div>
                                            <span className="user-uni">
                                                <span className="uni-flag">{getCountryFlag(test.university)}</span>
                                                <span className="uni-name">{test.university}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="rating-stars">
                                        {[...Array(test.rating)].map((_, i) => <FaStar key={i} />)}
                                    </div>

                                    <div className="test-divider"></div>

                                    <p className="test-text">"{test.review}"</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Modal */}
            <EnquiryFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName={`Study Abroad - ${selectedCountry}`}
            />
        </div>
    );
};

export default StudyAbroadPage;