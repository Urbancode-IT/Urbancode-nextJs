'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaAward, FaUniversity, FaSearch } from 'react-icons/fa';
import { Send } from "lucide-react";
import { submitEnquiryForm } from "@/lib/api/api";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { destinations, services, testimonials, showcaseData } from './data';
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

        // Basic Validation
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

        // Prepare data for existing handler
        const submissionData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: cleanPhone,
            course: `Study Abroad - ${formData.country} (${formData.course})`,
            message: `Education Level: ${formData.education}\nMessage: ${formData.message}`,
            mode: "Online/Offline" // Default for the handler
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
            {/* ... hero and other sections ... */}
            {/* Hero Section */}
            <section className="study-hero">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative py-5">
                        
                        {/* Interactive Floating Milestone Badges */}
                        <div className="floating-container d-none d-lg-block">
                            <motion.div 
                                className="milestone-badge badge-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ 
                                    opacity: 1, 
                                    x: 0,
                                    y: [0, -12, 0] 
                                }}
                                transition={{ 
                                    opacity: { duration: 0.5 },
                                    x: { duration: 0.5 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                            >
                                <div className="badge-icon icon-green"><FaCheckCircle /></div>
                                <div className="badge-content">
                                    <span className="badge-val">98%</span>
                                    <span className="badge-txt">Visa Success</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="milestone-badge badge-top-right"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: [0, 15, 0] 
                                }}
                                transition={{ 
                                    opacity: { duration: 0.7 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                whileHover={{ scale: 1.1, rotate: -2 }}
                            >
                                <div className="badge-icon icon-gold"><FaAward /></div>
                                <div className="badge-content">
                                    <span className="badge-val">100+</span>
                                    <span className="badge-txt">Scholarship Partners</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="milestone-badge badge-bottom-right"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ 
                                    opacity: 1, 
                                    x: 0,
                                    y: [0, -18, 0] 
                                }}
                                transition={{ 
                                    opacity: { duration: 0.9 },
                                    x: { duration: 0.9 },
                                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                whileHover={{ scale: 1.1, rotate: 3 }}
                            >
                                <div className="badge-icon icon-blue"><FaUniversity /></div>
                                <div className="badge-content">
                                    <span className="badge-val">Top 1%</span>
                                    <span className="badge-txt">Global University Admits</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-9 study-hero-main py-5">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="hero-title-main fw-bold">
                                    Design Your <span className="highlight-box text-shine">International</span><br className="d-none d-sm-block" /> 
                                    Academic Future Today
                                </h1>
                                <p className="hero-subtitle-new mt-3">
                                    Launch your career on the global stage. Urbancode offers strategic guidance for admissions into leading universities in the US, UK, Canada, and beyond with complete scholarship support.
                                </p>

                                <div className="trusted-students-row d-flex align-items-center justify-content-center mt-4">
                                    <div className="student-avatars d-flex">
                                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="student1" className="mini-avatar" />
                                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="student2" className="mini-avatar ms-n2" />
                                        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="student3" className="mini-avatar ms-n2" />
                                    </div>
                                    <div className="trusted-plus ms-3">+1k</div>
                                    <span className="trusted-text ms-2">Joined by 1,000+ aspiring global leaders</span>
                                </div>
                                
                                <div className="mt-4">
                                    <motion.button 
                                        onClick={() => document.getElementById('consultation').scrollIntoView({behavior: 'smooth'})} 
                                        className="request-callback-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        Start Your Application
                                    </motion.button>
                                </div>

                                <div className="stats-divider-line mt-5"></div>
{/* 
                                <div className="hero-trust-row mt-4">
                                    <div className="trust-item">
                                        <span className="trust-val">100+</span> 
                                        <span className="trust-txt">University Tie-ups</span>
                                    </div>
                                    <div className="trust-item">
                                        <span className="trust-val">1000+</span> 
                                        <span className="trust-txt">Success Stories</span>
                                    </div>
                                    <div className="trust-item">
                                        <span className="trust-val">50+</span> 
                                        <span className="trust-txt">Study Abroad Experts</span>
                                    </div>
                                </div> */}
                            </motion.div>
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
                            className="free-service-badge mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge-pill-modern">
                                <FaCheckCircle className="me-2" />
                                100% Free Service for Students* 
                                <span className="exception-text small ms-2">(Except Germany)</span>
                            </span>
                        </motion.div>
                    </div>
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <motion.div 
                                    className="service-box"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
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

            {/* Dream Country Benefits Showcase Section */}
            <section className="section-padding showcase-section">
                <div className="container">
                    <div className="section-header mb-4">
                        <h2 className="section-main-title text-shine fs-2">Benefits of Your Dream Country</h2>
                        <p className="fs-6">Get a detailed overview of what makes each destination a top choice for international studies, tailored to your career aspirations.</p>
                    </div>

                    <div className="showcase-card-wrapper position-relative overflow-hidden rounded-4 shadow-lg"
                        style={{
                            backgroundImage: `url(${showcaseData[activeShowcase].bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'all 0.6s ease'
                        }}>
                        {/* Overlay with flag-themed gradient */}
                        <div className="showcase-card-overlay" style={{ background: showcaseData[activeShowcase].gradient }} />

                        <div className="position-relative z-index-2 p-3 p-md-4">
                            {/* Choose your dream country tab bar (At the TOP of the card) */}
                            <div className="mb-4 pb-3 border-bottom border-white border-opacity-10">
                                <div className="showcase-tabs-container position-relative">
                                    <div className="showcase-tabs-bar">
                                        {Object.keys(showcaseData).map((key) => (
                                            <button 
                                                key={key}
                                                className={`showcase-tab ${activeShowcase === key ? 'active' : ''}`}
                                                onClick={() => setActiveShowcase(key)}
                                                style={{
                                                    '--active-accent': showcaseData[key].accentColor
                                                }}
                                            >
                                                <span className="me-2">{showcaseData[key].flagEmoji}</span>
                                                {showcaseData[key].flagName}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                {/* Left side: Content */}
                                <div className="col-lg-7 text-white">
                                    <motion.div
                                        key={activeShowcase}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
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

                                {/* Right side: Art Composition (dome & flag brush stroke) */}
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
            <section className="section-padding proficiency-section">
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
                    </div>
                </div>
            </section>

            {/* Consultation Section */}
            <section id="consultation" className="section-padding consultation-section">
                <div className="container" style={{maxWidth: '700px'}}>
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
                                        <FormInput 
                                            name="name" 
                                            placeholder="Full Name" 
                                            required 
                                            value={formData.name} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email Address" 
                                            required 
                                            value={formData.email} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput 
                                            type="tel" 
                                            name="phone" 
                                            placeholder="Phone Number" 
                                            required 
                                            value={formData.phone} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormSelect 
                                            name="country" 
                                            placeholder="Preferred Destination"
                                            options={destinationOptions}
                                            required 
                                            value={formData.country} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormSelect 
                                            name="education" 
                                            placeholder="Highest Qualification"
                                            options={educationOptions}
                                            required 
                                            value={formData.education} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput 
                                            name="course" 
                                            placeholder="Preferred Course (e.g. MS in CS)" 
                                            required 
                                            value={formData.course} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <FormTextarea 
                                            name="message" 
                                            rows="3" 
                                            placeholder="Message (Optional) - Tell us about your goals..." 
                                            value={formData.message} 
                                            onChange={handleFormChange} 
                                            disabled={isSubmitting}
                                        />
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
                                    {/* Watermark Quote Icon */}
                                    <div className="quote-watermark">“</div>
                                    
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
                                    
                                    <p className="test-text">
                                        "{test.review}"
                                    </p>
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
