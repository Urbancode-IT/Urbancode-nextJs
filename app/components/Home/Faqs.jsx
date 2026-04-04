'use client';
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./faqs.css";

const faqs = [
    // Slide 1: Automation Testing
    {
        question: "What is Automation Testing and why is it important?",
        answer: "Automation Testing uses scripts and tools to execute tests automatically, ensuring faster execution, higher accuracy, and better coverage. It's essential for modern CI/CD pipelines in Agile and DevOps environments."
    },
    {
        question: "Which tools are commonly used in Automation Testing?",
        answer: "Popular tools include Selenium for web automation, Playwright for modern cross-browser testing, and frameworks built with TypeScript or Java. For API testing, Postman and Rest Assured are industry standards."
    },
    {
        question: "What skills are required to become an Automation Tester?",
        answer: "Key skills include programming (Java, Python, or TypeScript), understanding testing concepts, experience with tools like Selenium or Playwright, API testing, version control (Git), and CI/CD tools like Jenkins."
    },
    {
        question: "Is Automation Testing a good career in 2026?",
        answer: "Yes, it is in high demand due to rapid digital transformation and DevOps adoption. Professionals skilled in Playwright and API automation are highly sought after in the tech industry."
    },

    // Slide 2: Playwright & API
    {
        question: "Can Playwright be used for API testing?",
        answer: "Yes, Playwright has built-in support for API testing through its APIRequestContext, allowing you to send HTTP requests directly without external tools for a complete testing solution."
    },
    {
        question: "What are the advantages of using Playwright for API + UI testing?",
        answer: "Using Playwright for both ensures faster execution and better coverage. You can validate backend responses, seed test data via APIs, and verify UI behavior in a single automated workflow."
    },
    {
        question: "What programming languages are best for modern Automation?",
        answer: "While Java and Python are standard, TypeScript is increasingly popular due to its static typing and seamless integration with modern frameworks like Playwright."
    },
    {
        question: "How does Automation Testing fit into DevOps?",
        answer: "It's a core component of DevOps, enabling continuous testing within CI/CD pipelines to ensure faster releases and higher software reliability."
    },

    // Slide 3: CCNA & Networking
    {
        question: "What is CCNA and who should pursue it?",
        answer: "CCNA is a foundational networking certification from Cisco. It's ideal for beginners and IT support engineers looking to build a strong career in networking and infrastructure management."
    },
    {
        question: "What are the career opportunities after CCNA?",
        answer: "After earning your CCNA, you can pursue high-growth roles such as Network Engineer, Network Administrator, System Administrator, and IT Support Engineer."
    },
    {
        question: "Is CCNA difficult for beginners?",
        answer: "While concepts like subnetting can be challenging, our structured training and hands-on lab practice with Cisco Packet Tracer make it achievable for anyone."
    },
    {
        question: "Is CCNA still valuable in 2026?",
        answer: "Absolutely. Demand for networking professionals remains critical due to the expansion of cloud computing, cybersecurity, and global enterprise infrastructure."
    },

    // Slide 4: React Native & Mobile
    {
        question: "What is React Native and why use it?",
        answer: "React Native is an open-source framework by Meta for building cross-platform mobile apps using a single JavaScript codebase for both Android and iOS."
    },
    {
        question: "How is React Native different from native app development?",
        answer: "It uses a shared codebase, significantly reducing development time and cost while still providing near-native performance and look-and-feel."
    },
    {
        question: "Can React Native apps achieve native performance?",
        answer: "Yes, it delivers near-native performance using native components and bridges, and can be further optimized with native modules for complex tasks."
    },
    {
        question: "Is React Native a good career choice in 2026?",
        answer: "Yes, its popularity and cost-effectiveness for startups and enterprises ensure strong demand for developers skilled in cross-platform mobile solutions."
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
