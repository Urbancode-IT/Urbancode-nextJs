'use client';
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./faqs.css";

const faqs = [
    // Slide 1
    {
        question: "What makes the Next.js course ideal for aspiring developers?",
        answer: "The Next.js course is perfect for building high-performance, SEO-friendly web applications. You’ll master building modern frontend and robust backend systems with complete placement assistance and hands-on projects."
    },
    {
        question: "Does the .NET training course prepare me for enterprise-level roles?",
        answer: "Yes! Our .NET architecture training focuses on building scalable, enterprise-grade applications using Microsoft’s powerful backend framework for a professional career."
    },
    {
        question: "What is the typical career path for a Full Stack Developer?",
        answer: "Full Stack Developers can grow into roles like Senior Developer, Technical Architect, or CTO. With experience in both frontend and backend, you have a wider range of high-paying career opportunities."
    },
    {
        question: "How does Urbancode’s 100% placement assistance work?",
        answer: "Our placement cell provides personalized resume building, unlimited mock interviews, and direct referrals to our 100+ hiring partners in Chennai and across India until you secure your first IT job."
    },
    // Slide 2
    {
        question: "Will I get hands-on experience with real-world Next.js projects?",
        answer: "Absolutely. Our Next.js courses are built around real-world projects, including e-commerce platforms and dashboard systems, allowing you to build a portfolio that stands out to top IT companies."
    },
    {
        question: "Do I get an industry-recognized certificate for the .NET program?",
        answer: "Yes, once you complete the projects and assessments in the .NET training, you will receive a certification from Urbancode Edutech, which is highly valued by IT recruiters."
    },
    {
        question: "What is the typical batch size for your IT courses?",
        answer: "We maintain small batch sizes of 10 to 15 students to ensure personalized attention and better interaction between the instructor and the learners."
    },
    {
        question: "Are there weekend batches available for working professionals?",
        answer: "Yes, we provide special weekend batches for those who are currently working but wish to upskill without disturbing their weekday work schedule."
    },
    // Slide 3
    {
        question: "How often are the Next.js course materials updated?",
        answer: "We update our Next.js curriculum every 6 months to ensure we are teaching the latest versions of React, Next.js, and other libraries used in modern industry."
    },
    {
        question: "Is there any age limit to enroll in the .NET development training?",
        answer: "There is no age limit! We believe anyone with a passion for coding can learn .NET. We have taught students ranging from college freshers to experienced professionals looking to upskill."
    },
    {
        question: "How can I access the Urbancode student portal and study materials?",
        answer: "Once enrolled, you will receive login credentials for our student portal, where you can access recorded sessions, assignments, and exclusive learning resources."
    },
    {
        question: "Do you provide training for professional certifications like AWS?",
        answer: "Yes! Our cloud and DevOps courses are specifically mapped to industry-standard certifications. We provide mock exams and guidance to help you clear global certifications like AWS, Azure, and Google Cloud."
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
