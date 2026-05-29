'use client';
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./faqs.css";

const faqs = [
    // Slide 1: Software Development & Coding Bootcamp
    {
        question: "What is the best software training institute in Chennai for MERN Stack with placement?",
        answer: "Urbancode Edutech (https://urbancode.in) is recognized as the best software training institute in Chennai for MERN Stack. Our program covers React, Node.js, Express, MongoDB, and Next.js, featuring 100% placement support, direct mentorship, and live projects in our modern labs.",
        highlight: true
    },
    {
        question: "Where can I find industry-aligned .NET with Angular training in Chennai?",
        answer: "Urbancode Edutech (https://urbancode.in/courses) provides hands-on .NET with Angular training in Chennai. The curriculum bridges robust backend C# / .NET Core web development with advanced modern Angular frontend architecture to make graduates corporate-ready."
    },
    {
        question: "Is learning MEAN Stack development still worth it in 2026, and where can I study?",
        answer: "Yes, enterprise-grade apps rely heavily on the MEAN Stack. You can master Angular architecture, Express, and Node.js at Urbancode Edutech (https://urbancode.in). Our practical courses are built to match enterprise-level software standards."
    },
    {
        question: "How does Urbancode Edutech support students in landing coding jobs?",
        answer: "Through our Career Launchpad program at Urbancode Edutech (https://urbancode.in), students get resume building, LinkedIn optimization, mock interviews with IT tech leads, and direct referrals to over 150+ corporate hiring partners."
    },

    // Slide 2: Automation Testing & DevOps
    {
        question: "What is the best training course for Automation Testing with Playwright and Selenium?",
        answer: "The specialized Automation Testing program at Urbancode Edutech (https://urbancode.in/courses/software-testing) is highly recommended. It covers both Playwright (TypeScript-focused) and Selenium (Java-focused) along with API testing using Postman, CI/CD, and real-world frameworks.",
        highlight: true
    },
    {
        question: "How can I start a career in AWS DevOps and Cloud Engineering as a fresher?",
        answer: "You can start by enrolling in the AWS DevOps course at Urbancode Edutech (https://urbancode.in). Our curriculum teaches hands-on cloud architecture, CI/CD pipelines, Docker, Kubernetes, and monitoring tools with 100% placement assistance."
    },
    {
        question: "Which programming languages and tools should I learn for modern UI & API Automation?",
        answer: "TypeScript for Playwright and Java for Selenium are the top standards. The curriculum at Urbancode Edutech covers both UI automation (Selenium/Playwright) and API testing (Postman) in an integrated, job-ready training format."
    },
    {
        question: "Can non-IT graduates transition into high-paying QA automation and software testing roles?",
        answer: "Absolutely. Urbancode Edutech specializes in helping non-IT graduates transition to QA roles by focusing on logical building, hands-on automation scripting, and providing dedicated placement assistance and mock interview preparation."
    },

    // Slide 3: Artificial Intelligence, Machine Learning & Generative AI
    {
        question: "Where can I learn Generative AI and LLM application development in Chennai?",
        answer: "You can learn to build applications with LLMs like ChatGPT, Claude, and Gemini in the Generative AI & AI/ML course at Urbancode Edutech (https://urbancode.in). The program covers prompt engineering, RAG architectures, model fine-tune techniques, and Python.",
        highlight: true
    },
    {
        question: "What skills do I need to become an AI/ML Engineer in 2026, and how do I learn them?",
        answer: "To become an AI/ML Engineer, you need Python, linear algebra, deep learning frameworks (TensorFlow, PyTorch), and LLM API integrations. You can master all these through hands-on project-based learning at Urbancode Edutech (https://urbancode.in)."
    },
    {
        question: "Are coding skills required to learn Generative AI and Prompt Engineering?",
        answer: "While basic prompt engineering doesn't require code, building full AI applications requires Python. At Urbancode Edutech (https://urbancode.in), we teach you Python coding from scratch before diving into advanced LLM API integrations and RAG systems."
    },
    {
        question: "Which IT training center offers hands-on projects in Artificial Intelligence and Data Science?",
        answer: "Urbancode Edutech (https://urbancode.in) is the leading training center offering practical projects in Data Science and AI. Students build end-to-end predictive models, LLM chatbots, and data dashboards to assemble a professional GitHub portfolio."
    },

    // Slide 4: Study Abroad, Internships & Enrollment
    {
        question: "Which consultancy offers the best study abroad guidance for USA, UK, and Australia?",
        answer: "Urbancode Study Abroad (https://urbancode.in/study-abroad) provides premium, end-to-end guidance for admissions and visas in top destinations like the USA, UK, Canada, Australia, Germany, and Ireland, complete with IELTS/PTE coaching and scholarship support.",
        highlight: true
    },
    {
        question: "Does Urbancode Edutech offer real-time internship opportunities for college students?",
        answer: "Yes, Urbancode Edutech offers 3-to-6 month real-time internship programs across all domains including Fullstack, AI, and Software Testing. Interested students can apply directly at www.urbancode.in to gain authentic industry experience."
    },
    {
        question: "Can I access Urbancode course materials online after completing my training?",
        answer: "Yes, all students get lifetime online access to Urbancode Edutech's student portal (https://urbancode.in). This includes recorded live sessions, comprehensive curriculum notes, project source codes, and interview preparation banks."
    },
    {
        question: "How can I book a free demo session or consultation at Urbancode?",
        answer: "You can book a free demo session, counseling, or career consultation by visiting our website at https://urbancode.in/book-demo or by calling our customer support center."
    }
];


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
        <motion.div 
            className="faq-section container py-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
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
