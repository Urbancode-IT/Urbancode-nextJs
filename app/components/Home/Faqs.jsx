'use client';
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { homeFaqs as faqs } from "../../data/homeFaqs";
import "./faqs.css";

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);
    const isHighlightedByKeyword = (faq) => {
        if (faq.highlight) return true;
        const keywords = [".net", "next.js", "angular"];
        const content = (faq.question + " " + faq.answer).toLowerCase();
        return keywords.some(keyword => content.includes(keyword));
    };

    const totalPages = Math.ceil(faqs.length / itemsPerPage);
    const currentFaqs = faqs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const nextSlide = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setActiveIndex(null);
    };

    const prevSlide = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setActiveIndex(null);
    };

    // Autoplay Logic
    useEffect(() => {
        let interval;
        if (activeIndex === null) { // Only auto-play if no question is open
            interval = setInterval(() => {
                nextSlide();
            }, 6000); // 6 seconds
        }
        return () => clearInterval(interval);
    }, [activeIndex, currentPage, totalPages]);

    return (
        <div 
            className="faq-section container"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
            <div className="text-center home-section-title-wrap">
                <h2 className="section-main-title text-shine">Let's get you more info</h2>
            </div>
            <div className="row align-items-start g-4">
                {/* Left Section */}
                <div className="col-lg-4 col-md-12 order-2 order-lg-1 ">
                    <div className="faq-left text-center text-lg-start">
                        <h3 className="faq-title fw-bold d-none d-md-block">Frequently <br /> Asked Questions</h3>
                        <div className="faq-contact-box mt-5 p-4 rounded-4 shadow-sm">
                            <h4 className="fw-semibold faq-contact-heading">Have a Question?</h4>
                            <p className="text-muted small mb-3">
                                Send us an email and we’ll get back to you as soon as possible!
                            </p>
                            <button className="faq-mail-btn px-4 py-2 rounded-3"><a href="mailto:admin@urbancode.in">Send mail</a></button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-8 col-md-12 order-1 order-lg-2">
                    <div className="faq-accordion-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="faq-page-content"
                            >
                                {currentFaqs.map((faq, index) => (
                                    <div key={index} className={`faq-item mb-3 ${isHighlightedByKeyword(faq) ? 'highlighted-faq' : ''}`}>
                                        <button
                                            type="button"
                                            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => toggleFAQ(index)}
                                            aria-expanded={activeIndex === index}
                                            aria-controls={`faq-answer-${currentPage}-${index}`}
                                            id={`faq-question-${currentPage}-${index}`}
                                        >
                                            <span>{faq.question}</span>
                                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                        </button>
                                        <div
                                            id={`faq-answer-${currentPage}-${index}`}
                                            className="faq-answer"
                                            role="region"
                                            aria-labelledby={`faq-question-${currentPage}-${index}`}
                                            style={{
                                                maxHeight: activeIndex === index ? '400px' : '0px',
                                            }}
                                        >
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Controls */}
                    <div className="faq-pagination mt-4 d-flex align-items-center justify-content-center gap-4">
                        <button className="faq-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                            ❮
                        </button>
                        <div className="faq-dots">
                            {[...Array(totalPages)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`faq-dot ${currentPage === i ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentPage(i);
                                        setActiveIndex(null);
                                    }}
                                ></span>
                            ))}
                        </div>
                        <button className="faq-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
