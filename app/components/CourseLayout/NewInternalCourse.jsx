"use client";
import React, { useState } from "react";
import "./NewInternalCourse.css";
import {
    FaStar,
    FaArrowRight,
    FaChevronDown,
} from "react-icons/fa";
import { FiPlus, FiMinus, FiDownload } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProgramCohorts from "./ProgramCohorts";

import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import CourseAssistant from "@/app/components/CourseAssistant/CourseAssistant";
import KidsMascot    from "./KidsMascot";

const NewInternalCourse = ({ data }) => {
    // Check if data exists
    if (!data) return <div style={{ padding: '100px', textAlign: 'center' }}>Course data not found.</div>;

    const { heroData, highlightsData, curriculumData, toolsData, faqData } = data;

    // ===========================================================================
    // STATE MANAGEMENT
    // ===========================================================================

    // --- Curriculum State ---
    const [curriculumActiveIndex, setCurriculumActiveIndex] = useState(null);
    const [curriculumPage, setCurriculumPage] = useState(0);
    const itemsPerPage = 5;

    // --- FAQ State ---
    const [faqActiveIndex, setFaqActiveIndex] = useState(null);
    const [faqPage, setFaqPage] = useState(0);
    const faqItemsPerPage = 5;

    // --- Enquiry Modal State ---
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const [isJoinOpen, setIsJoinOpen] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState(null);
    
    // --- SubCourse State ---
    const [activeSubCourseIndex, setActiveSubCourseIndex] = useState(0);


    // ===========================================================================
    // LOGIC & HANDLERS
    // ===========================================================================

    // --- Curriculum Handling ---
    const totalCurriculumPages = Math.ceil(curriculumData.length / itemsPerPage);
    const currentCurriculumItems = curriculumData.slice(
        curriculumPage * itemsPerPage,
        (curriculumPage + 1) * itemsPerPage
    );

    const toggleCurriculumItem = (index) => {
        setCurriculumActiveIndex(curriculumActiveIndex === index ? null : index);
    };

    const handleCurriculumNext = () => {
        if (curriculumPage < totalCurriculumPages - 1) {
            setCurriculumPage(curriculumPage + 1);
            setCurriculumActiveIndex(null);
        }
    };

    const handleCurriculumPrev = () => {
        if (curriculumPage > 0) {
            setCurriculumPage(curriculumPage - 1);
            setCurriculumActiveIndex(null);
        }
    };

    // --- FAQ Handling ---
    const totalFaqPages = Math.ceil(faqData.length / faqItemsPerPage);
    const currentFaqItems = faqData.slice(
        faqPage * faqItemsPerPage,
        (faqPage + 1) * faqItemsPerPage
    );

    const toggleFAQ = (index) => {
        setFaqActiveIndex(faqActiveIndex === index ? null : index);
    };

    const handleFaqNext = () => {
        if (faqPage < totalFaqPages - 1) {
            setFaqPage(faqPage + 1);
            setFaqActiveIndex(null);
        }
    };

    const handleFaqPrev = () => {
        if (faqPage > 0) {
            setFaqPage(faqPage - 1);
            setFaqActiveIndex(null);
        }
    };

    const handleEnrollClick = () => {
        setIsEnquiryOpen(true);
    };

    const isHighlighted = (item) => {
        const keywords = [".net", "angular", "mern stack"];
        const content = (item.q + " " + item.a).toLowerCase();
        return keywords.some(keyword => content.includes(keyword));
    };


    // ===========================================================================
    // RENDER
    // ===========================================================================
    return (
        <div className="nict-course-page">

            {/* 1. HERO SECTION */}
            <section className="nict-courses-hero">
                <div className="nict-hero-inner nict-hero-split">
                    {/* LEFT CONTENT */}
                    <div className="nict-hero-content left">
                        {heroData.highlightText && heroData.highlightText.toLowerCase().includes("ai powered fullstack") && (
                            <div className="nict-updated-course-banner">
                                <span className="nict-updated-banner-icon">💡</span>
                                <p className="nict-updated-banner-text">
                                    (AI powered fullstack is the updated course for mern stack) 
                                </p>
                            </div>
                        )}
                        <h1 className="nict-hero-title">
                            {(() => {
                                const title = heroData.highlightText || "";
                                const words = title.split(" ");
                                if (words.length <= 2) {
                                    return <span className="nict-hero-title-shine">{title}</span>;
                                }
                                const firstPart = words.slice(0, -2).join(" ");
                                const lastPart = words.slice(-2).join(" ");
                                return (
                                    <>
                                        <span className="nict-hero-title-plain">{firstPart}{" "}</span>
                                        <span className="nict-hero-title-shine">{lastPart}</span>
                                    </>
                                );
                            })()}
                        </h1>

                        <p className="nict-hero-subtitle">{heroData.subtitle}</p>

                        <div className="nict-hero-rating-pill">
                            <div className="nict-rating-stars">
                                {Array.from({ length: heroData.totalStars }).map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>
                            <span className="nict-rating-text">
                                {heroData.reviewCount} students ({heroData.rating}/5)
                            </span>
                        </div>

                        <div className="nict-hero-btns-group">
                            <button className="nict-hero-btn" onClick={handleEnrollClick}>
                                Enroll now <FaArrowRight className="nict-btn-icon" />
                            </button>
                            {!data.isKidsSpace && (
                                <button
                                    className="nict-hero-btn secondary"
                                    onClick={() => {
                                        const el = document.getElementById('batches-section');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Join Now
                                </button>
                            )}
                            <button className="nict-hero-btn secondary" onClick={() => setIsBrochureOpen(true)}>
                                <FiDownload className="nict-btn-icon" /> Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* RIGHT – interactive mascot for Kids Space, image for all others */}
                    {data.isKidsSpace ? (
                        <div className="nict-hero-mascot-wrapper">
                            <KidsMascot courseName={heroData.highlightText} />
                        </div>
                    ) : (
                        <div className={`nict-hero-image-wrapper ${heroData.isLegacyImage ? 'legacy-image-wrapper' : ''}`}>
                            <div className={heroData.isLegacyImage ? 'legacy-image-container' : ''}>
                                <img
                                    src={heroData.image || "/mern.png"}
                                    alt={heroData.highlightText}
                                    className={`nict-hero-image ${heroData.isLegacyImage ? 'legacy-image' : ''}`}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>


            {/* 2. COURSE HIGHLIGHTS */}
            <section className="nict-course-highlights">
                <h2 className="nict-course-highlights-title">Course Highlights</h2>
                <div className="nict-course-highlights-grid">
                    {highlightsData.map((item, index) => (
                        <div className="nict-highlight-card" key={index}>
                            <div className="nict-highlight-icon">{item.icon}</div>
                            <p className="nict-highlight-label">{item.label}</p>
                            <p className="nict-highlight-value">{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* 3. TOOLS COVERED */}
            {!data.isKidsSpace && (
                <div className="nict-tools-section">
                    <section className="nict-tools-covered">
                        <h2 className="nict-tools-main-title">Tools Covered</h2>

                        <div className="nict-tools-grid">
                            {toolsData && toolsData.map((tool, index) => (
                                <div className="nict-tool-card" key={tool.id || index}>
                                    <div className="nict-tool-icon-box">
                                        <img src={tool.icon} alt={tool.name} />
                                    </div>
                                    <span className="nict-tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}

            {/* 3.5. PROGRAMS */}
            {data.subCourses && (
                <div className="nict-programs-section" style={{ marginBottom: '60px' }}>
                    <div className="nict-curriculum-header text-center mb-4">
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Programs</h2>
                    </div>
                    
                    <div className="nict-programs-container mx-auto" style={{
                        maxWidth: '900px',
                        background: 'rgba(240, 245, 250, 0.6)',
                        borderRadius: '20px',
                        padding: '40px 20px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                    }}>
                        <div className="d-flex justify-content-center mb-4">
                            <div style={{
                                display: 'inline-flex',
                                background: '#ffffff',
                                borderRadius: '50px',
                                padding: '5px',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                            }}>
                                {data.subCourses.map((sub, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSubCourseIndex(index)}
                                        style={{
                                            border: 'none',
                                            padding: '10px 25px',
                                            borderRadius: '50px',
                                            background: activeSubCourseIndex === index ? 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' : 'transparent',
                                            color: activeSubCourseIndex === index ? '#fff' : '#000',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            margin: '0 5px',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {sub.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <div className="mb-4 mt-2">
                                <span className="fw-bold d-inline-flex align-items-center" style={{ 
                                    fontSize: '1.25rem', 
                                    color: '#198754', 
                                    backgroundColor: 'rgba(25, 135, 84, 0.1)', 
                                    padding: '8px 25px', 
                                    borderRadius: '50px',
                                    border: '1px solid rgba(25, 135, 84, 0.2)'
                                }}>
                                    <i className="bi bi-clock-history me-2"></i>
                                    {data.subCourses[activeSubCourseIndex].duration}
                                </span>
                            </div>
                            <p className="mx-auto text-center" style={{ 
                                maxWidth: '700px', 
                                fontSize: '1.1rem', 
                                lineHeight: '1.6',
                                color: '#495057',
                                fontStyle: 'italic',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                padding: '15px 20px',
                                borderRadius: '10px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                            }}>
                                "{data.subCourses[activeSubCourseIndex].desc}"
                            </p>
                            
                            <div className="d-flex justify-content-center mt-4">
                                <ul className="text-start text-muted" style={{ lineHeight: '1.8', listStyle: 'none', paddingLeft: 0, display: 'inline-block' }}>
                                    {data.subCourses[activeSubCourseIndex].features?.map((feature, idx) => (
                                        <li key={idx} className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 4. COURSE CURRICULUM */}
            <div className="nict-curriculum-section">
                <section className="nict-course-curriculum">
                    <div className="nict-curriculum-header">
                        <h2>Course Curriculum</h2>
                    </div>

                    <div className="nict-curriculum-list">
                        {currentCurriculumItems.map((item, index) => {
                            // Safely map items, if item.items isn't in mappedCurriculum format, we just print the item.content
                            return (
                            <div
                                key={item.id}
                                className={`nict-curriculum-item ${curriculumActiveIndex === index ? "active" : ""}`}
                            >
                                <div
                                    className="nict-curriculum-title"
                                    onClick={() => toggleCurriculumItem(index)}
                                >
                                    <div className="nict-title-left">
                                        <span className="nict-index">{item.id}</span>
                                        <span className="nict-text">{item.title}</span>
                                    </div>

                                    {curriculumActiveIndex === index ? <FiMinus /> : <FiPlus />}
                                </div>

                                <div className="nict-curriculum-collapse">
                                    <div className="nict-curriculum-content">
                                        {item.content ? item.content : (
                                            <ul className="mb-0 ps-3">
                                                {(item.items || []).map((subitem, i) => (
                                                    <li key={i} className="mb-1 lh-base text-secondary">{subitem}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>

                    <div className="nict-curriculum-navigation">
                        <button
                            className={`nict-nav-arrow ${curriculumPage === 0 ? "nict-disabled" : ""}`}
                            onClick={handleCurriculumPrev}
                            disabled={curriculumPage === 0}
                        >
                            <MdChevronLeft />
                        </button>

                        <div className="nict-nav-dots">
                            {[...Array(totalCurriculumPages)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`nict-dot ${curriculumPage === i ? "active" : ""}`}
                                    onClick={() => {
                                        setCurriculumPage(i);
                                        setCurriculumActiveIndex(null);
                                    }}
                                ></span>
                            ))}
                        </div>

                        <button
                            className={`nict-nav-arrow ${curriculumPage === totalCurriculumPages - 1 ? "nict-disabled" : ""}`}
                            onClick={handleCurriculumNext}
                            disabled={curriculumPage === totalCurriculumPages - 1}
                        >
                            <MdChevronRight />
                        </button>
                    </div>

                    <div className="nict-brochure-action">
                        <button className="nict-brochure-btn" onClick={() => setIsBrochureOpen(true)}>
                            <FiDownload />
                            Download Brochure
                        </button>
                    </div>
                </section>
            </div>

            {/* Program Cohorts (only for non-kids-space) */}
            {!data.isKidsSpace && (
                <ProgramCohorts 
                    batches={data.batches}
                    onApply={(batch) => {
                        setSelectedBatch(batch);
                        setIsJoinOpen(true);
                    }} 
                />
            )}


            {/* 5. FAQ SECTION */}
            <section className="nict-faq-section">
                <div className="nict-faq-container">
                    {/* LEFT COLUMN */}
                    <div className="nict-faq-column left">
                        <div className="nict-faq-left">
                            <h4 className="nict-faq-title-main">Frequently <br /> Asked Questions</h4>
                            <div className="nict-faq-contact-box">
                                <h5>Still have any Question?</h5>
                                <p>
                                    Send us an email and we’ll get back to you as soon as possible!
                                </p>
                                <button className="nict-faq-mail-btn" onClick={() => (window.location.href = "mailto:admin@urbancode.in")}>
                                    Send mail
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="nict-faq-column right">
                        <div className="nict-faq-right">
                            {currentFaqItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`nict-faq-item ${faqActiveIndex === index ? "nict-active" : ""} ${isHighlighted(item) ? 'nict-highlighted' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="nict-faq-question">
                                        <span>{item.q}</span>
                                        <FaChevronDown />
                                    </div>

                                    <div className="nict-faq-collapse">
                                        <div className="nict-faq-answer">{item.a}</div>
                                    </div>
                                </div>
                            ))}

                            {totalFaqPages > 1 && (
                                <div className="nict-curriculum-navigation mt-4">
                                    <button
                                        className={`nict-nav-arrow ${faqPage === 0 ? "nict-disabled" : ""}`}
                                        onClick={handleFaqPrev}
                                        disabled={faqPage === 0}
                                    >
                                        <MdChevronLeft />
                                    </button>

                                    <div className="nict-nav-dots">
                                        {[...Array(totalFaqPages)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`nict-dot ${faqPage === i ? "active" : ""}`}
                                                onClick={() => {
                                                    setFaqPage(i);
                                                    setFaqActiveIndex(null);
                                                }}
                                            ></span>
                                        ))}
                                    </div>

                                    <button
                                        className={`nict-nav-arrow ${faqPage === totalFaqPages - 1 ? "nict-disabled" : ""}`}
                                        onClick={handleFaqNext}
                                        disabled={faqPage === totalFaqPages - 1}
                                    >
                                        <MdChevronRight />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. ENQUIRY FORM MODAL */}
            <EnquiryFormModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                courseName={heroData.highlightText || "Course"}
            />

            <EnquiryFormModal
                isOpen={isBrochureOpen}
                onClose={() => setIsBrochureOpen(false)}
                courseName={heroData.highlightText || "Course"}
                isBrochureMode={true}
                downloadUrls={[heroData.brochure || "/brochure.jpg"]}
            />

            <EnquiryFormModal
                isOpen={isJoinOpen}
                onClose={() => setIsJoinOpen(false)}
                courseName={heroData.highlightText || "Course"}
                isJoinMode={true}
                batchInfo={selectedBatch}
            />

            {/* Course Assistant - Active for all courses in this layout */}
            {/* <CourseAssistant courseName={heroData.highlightText} /> */}
        </div>
    );
};

export default NewInternalCourse;
