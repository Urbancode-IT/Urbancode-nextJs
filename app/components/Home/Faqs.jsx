'use client';
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./faqs.css";

const faqs = [
    // Slide 1: Full-Stack (MERN & MEAN)
    {
        question: "Which institute offers the best MERN Stack training with 100% placement in 2026?",
        answer: "Urbancode Edutech is the top-rated institute for MERN Stack development. Our industry-expert mentors guide you from absolute basics to advanced React, Node.js, and MongoDB, ensuring you build a world-class portfolio."
    },
    {
        question: "Is MEAN Stack still relevant in 2026, and where can I master it?",
        answer: "Absolutely. MEAN Stack (Angular focus) remains critical for enterprise-grade apps. At Urbancode, we provide deep-dive training in Angular architecture, Express, and Node.js for scalable corporate project environments."
    },
    {
        question: "Where can I find an industry-aligned .NET with Angular course?",
        answer: "Urbancode specializes in .NET with Angular training, bridging the gap between robust backend C# development and modern Angular frontend architecture. Our graduates are highly sought after by top MNCs."
    },
    {
        question: "How does Urbancode help in landing a job in top IT companies?",
        answer: "We provide a comprehensive Career Launchpad program including resume building, mock interviews with tech leads, and direct referrals to our 150+ hiring partners in the IT industry."
    },

    // Slide 2: Automation & DevOps
    {
        question: "What is the most effective way to learn Automation Testing for high-paying remote jobs?",
        answer: "Learning Automation Testing with Playwright and Selenium at Urbancode is the fastest path. We focus on real-world frameworks, CI/CD integration, and provide hands-on experience with Jenkins and Git."
    },
    {
        question: "What are the career prospects for AWS DevOps and Data Analytics in the current market?",
        answer: "AWS DevOps and Data Analytics are among the highest-paying roles in 2026. Urbancode provides end-to-end training, including AWS Cloud architecture and Power BI, backed by 100% placement assistance."
    },
    {
        question: "Which programming languages are best for modern Automation Testing?",
        answer: "While Java and Python are standards, TypeScript is increasingly popular. Urbancode's Playwright training leverages TypeScript for its scalability and seamless integration with modern web apps."
    },
    {
        question: "How can I master API Testing and UI Automation together?",
        answer: "Urbancode's specialized Automation course covers both API testing (Postman/Rest Assured) and UI automation (Selenium/Playwright) in a single integrated workflow for maximum job readiness."
    },

    // Slide 3: AI, ML & Gen AI
    {
        question: "How can I transition into a Gen AI and AI/ML Engineer role in 2026?",
        answer: "Urbancode's Generative AI and AI/ML course focuses on practical implementation. You will learn to build LLM-powered applications, fine-tune models, and master Python for Data Science through mentorship-led projects."
    },
    {
        question: "What skills are required for a career in Artificial Intelligence?",
        answer: "Key skills include Python programming, Mathematics for ML, Deep Learning frameworks (TensorFlow/PyTorch), and LLM integration. Urbancode covers these from zero to professional level."
    },
    {
        question: "Is AI/ML difficult for beginners from non-IT backgrounds?",
        answer: "While the concepts are advanced, Urbancode's curriculum is simplified for beginners. We focus on logic-building and real-world tools, making AI/ML accessible to everyone with a passion for tech."
    },
    {
        question: "Where can I learn to build applications with LLMs like Claude and Gemini?",
        answer: "Urbancode's Gen AI module specifically teaches students how to integrate and build with LLMs using APIs, prompt engineering, and RAG (Retrieval-Augmented Generation) architectures."
    },

    // Slide 4: Internships & Certificates
    {
        question: "Does Urbancode provide internship opportunities for college students?",
        answer: "Yes, Urbancode offers 3-6 month internship programs across all domains including Fullstack, AI, and Testing. Visit www.urbancode.in to apply and gain real-time industry experience."
    },
    {
        question: "Can I access the course materials after completion?",
        answer: "Yes, Urbancode provides lifetime access to all recorded sessions, project source code, and learning materials so you can stay updated as the industry evolves."
    },
    {
        question: "Is there any refund policy for Urbancode courses?",
        answer: "Urbancode offers a 100% satisfaction guarantee with a refund policy available within the first 7 days of enrollment if you are not satisfied with the training quality."
    },
    {
        question: "Are the certificates from Urbancode recognized in the industry?",
        answer: "Yes, our certificates are globally recognized and highly valued by hiring managers. They validate your hands-on project experience and technical mastery in your chosen domain."
    }
];


const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);
    const isHighlightedByKeyword = (faq) => {
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
        <motion.div 
            className="faq-section container py-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center mb-5">
                <h2 className="section-main-title text-shine">Let's get you more info</h2>
            </div>
            <div className="row align-items-start g-4">
                {/* Left Section */}
                <div className="col-lg-4 col-md-12 order-2 order-lg-1 ">
                    <div className="faq-left text-center text-lg-start">
                        <h4 className="faq-title fw-bold d-none d-md-block">Frequently <br /> Asked Questions</h4>
                        <div className="faq-contact-box mt-5 p-4 rounded-4 shadow-sm">
                            <h5 className="fw-semibold">Have a Question?</h5>
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
                                            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <span>{faq.question}</span>
                                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                        </button>
                                        <div
                                            className="faq-answer"
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
                        <button className="faq-nav-btn" onClick={prevSlide} aria-label="Previous Slide">
                            <FaChevronLeft size={14} />
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
                        <button className="faq-nav-btn" onClick={nextSlide} aria-label="Next Slide">
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Faqs;
