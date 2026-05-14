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
// import CourseAssistant from "@/app/components/CourseAssistant/CourseAssistant";

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

    // --- Enquiry Modal State ---
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);


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
    const toggleFAQ = (index) => {
        setFaqActiveIndex(faqActiveIndex === index ? null : index);
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
                        <h1 className="nict-hero-title">
                            <span className="nict-hero-title-light">{heroData.titleTop}</span>
                            <span className="nict-hero-title-bold">{heroData.highlightText}</span>
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
                            <button className="nict-hero-btn secondary" onClick={() => setIsBrochureOpen(true)}>
                                <FiDownload className="nict-btn-icon" /> Download Brochure
                            </button>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="nict-hero-image-wrapper">
                        <img
                            src={heroData.image || "/mern.png"}
                            alt={heroData.highlightText}
                            className="nict-hero-image"
                        />
                    </div>
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

            {/* 4. COURSE CURRICULUM */}
            <div className="nict-curriculum-section">
                <section className="nict-course-curriculum">
                    <div className="nict-curriculum-header">
                        <h2>Course Curriculum</h2>
                        <button className="nict-brochure-btn" onClick={() => setIsBrochureOpen(true)}>
                            <FiDownload />
                            Download Brochure
                        </button>
                    </div>

                    <div className="nict-curriculum-list">
                        {currentCurriculumItems.map((item, index) => (
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
                                    <div className="nict-curriculum-content">{item.content}</div>
                                </div>
                            </div>
                        ))}
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
                </section>
            </div>

            {/* Program Cohorts Section */}
            {/* <ProgramCohorts onApply={() => setIsEnquiryOpen(true)} /> */}


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
                            {faqData.map((item, index) => (
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

            {/* Course Assistant - Active for all courses in this layout */}
            {/* <CourseAssistant courseName={heroData.highlightText} /> */}
        </div>
    );
};

export default NewInternalCourse;
