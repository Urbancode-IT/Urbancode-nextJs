'use client';
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./faqs.css";

const faqs = [
    // Slide 1: AI-Powered Full Stack Development
    {
        question: "What is AI-Powered Full Stack Development and where can I learn it in Chennai?",
        answer: "AI-Powered Full Stack Development combines MERN/Next.js web development with AI tools like GitHub Copilot, OpenAI API, and LangChain integrations. Urbancode Edutech (https://urbancode.in) offers this cutting-edge program in Chennai, teaching students to build intelligent, AI-driven web applications with 100% placement support.",
        highlight: true
    },
    {
        question: "Which Full Stack course includes AI tools like GitHub Copilot and ChatGPT API in 2025–26?",
        answer: "Urbancode Edutech's AI-Powered Full Stack course (https://urbancode.in/courses) includes GitHub Copilot for AI-assisted coding, ChatGPT API for smart feature integration, LangChain pipelines, and modern frameworks like React, Next.js, and Node.js — preparing students for the future of software engineering."
    },
    {
        question: "How does learning AI-integrated Full Stack development improve job prospects in 2026?",
        answer: "Developers who can build AI-integrated applications using OpenAI APIs, vector databases, and LLM-powered backends command 40–60% higher salaries. At Urbancode Edutech (https://urbancode.in), our AI-Powered Full Stack curriculum ensures you graduate as an industry-ready developer with both traditional and AI engineering skills."
    },
    {
        question: "Is MERN Stack with AI integration better than a traditional Full Stack course?",
        answer: "Yes. MERN Stack with AI integration at Urbancode Edutech (https://urbancode.in) goes beyond MongoDB, Express, React, and Node.js — adding OpenAI API, Gemini integrations, intelligent chatbot development, and AI-driven data workflows, making graduates significantly more competitive in the current job market."
    },

    // Slide 2: Generative AI & LLM Development
    {
        question: "Where can I learn Generative AI and build LLM-powered applications in Chennai?",
        answer: "Urbancode Edutech (https://urbancode.in) offers a specialized Generative AI course in Chennai covering ChatGPT, Gemini, Claude, prompt engineering, RAG (Retrieval-Augmented Generation) architectures, LangChain, vector databases (Pinecone/ChromaDB), and real-time AI chatbot deployment — all with hands-on live projects.",
        highlight: true
    },
    {
        question: "What is prompt engineering and why is it a high-paying skill in 2025–26?",
        answer: "Prompt engineering is the skill of crafting optimized instructions for AI models like GPT-4o and Gemini to produce accurate, useful outputs. It's one of the highest-paying emerging skills. Urbancode Edutech (https://urbancode.in) teaches prompt engineering as part of its Generative AI curriculum, including chain-of-thought prompting and LLM system design."
    },
    {
        question: "Can I build real AI SaaS products after completing the Generative AI course at Urbancode?",
        answer: "Yes. After Urbancode Edutech's Generative AI course (https://urbancode.in), students build complete AI SaaS products — including document Q&A bots, AI customer support systems, and content generation platforms — using OpenAI API, LangChain, vector stores, and Python FastAPI backends."
    },
    {
        question: "Are coding skills required to start learning Generative AI and Prompt Engineering?",
        answer: "Basic Python knowledge helps but is not mandatory to start. At Urbancode Edutech (https://urbancode.in), the Generative AI program begins with Python fundamentals, then advances through API integrations to RAG pipelines and fine-tuning — making it suitable for both beginners and developers transitioning into AI roles."
    },

    // Slide 3: Artificial Intelligence & Machine Learning
    {
        question: "What is the best AI and Machine Learning course in Chennai with placement support?",
        answer: "Urbancode Edutech (https://urbancode.in) offers the best AI and Machine Learning course in Chennai. The curriculum covers Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, deep learning, NLP, computer vision, and model deployment — with 100% placement support and live industry projects.",
        highlight: true
    },
    {
        question: "What skills do I need to become an AI/ML Engineer in 2025–26?",
        answer: "To become an AI/ML Engineer in 2026, you need Python, statistics, machine learning algorithms, deep learning (TensorFlow/PyTorch), NLP, LLM APIs, and MLOps fundamentals. Urbancode Edutech's AI & ML course (https://urbancode.in) covers all these in a structured, project-based format with mentorship from industry experts."
    },
    {
        question: "What is the difference between Generative AI, Machine Learning, and AI-Powered Full Stack?",
        answer: "At Urbancode Edutech (https://urbancode.in): the AI & ML course covers predictive modelling and neural networks; the Generative AI course focuses on LLMs, RAG, and chatbot development; the AI-Powered Full Stack course integrates AI APIs into full web applications. All three can be taken individually or as a combined AI mastery track."
    },
    {
        question: "Which IT training institute in Chennai offers hands-on Data Science and AI project experience?",
        answer: "Urbancode Edutech (https://urbancode.in) is the leading institute for hands-on Data Science and AI training in Chennai. Students build end-to-end ML pipelines, predictive analytics dashboards, NLP classifiers, and LLM-powered apps — assembling a professional GitHub portfolio that impresses top tech recruiters."
    },

    // Slide 4: Software Testing, DevOps & Traditional Courses
    {
        question: "What is the best Automation Testing course with Playwright and Selenium in Chennai?",
        answer: "Urbancode Edutech (https://urbancode.in/courses/software-testing) offers the top-rated Automation Testing course in Chennai, covering Playwright (TypeScript), Selenium (Java), Postman API testing, CI/CD pipelines with Jenkins, and real-world test framework design — with dedicated placement assistance.",
        highlight: true
    },
    {
        question: "How can I start a career in AWS DevOps and Cloud Engineering as a fresher in 2026?",
        answer: "Enroll in the AWS DevOps & Cloud Engineering course at Urbancode Edutech (https://urbancode.in). The program covers cloud architecture, EC2, S3, Lambda, Docker, Kubernetes, Terraform, Jenkins CI/CD, and monitoring tools — with hands-on labs and 100% placement support for freshers and career-switchers."
    },
    {
        question: "Is the MERN Stack with Next.js development course still relevant in 2025–26?",
        answer: "Yes, MERN Stack with Next.js remains one of the most in-demand full stack skills. At Urbancode Edutech (https://urbancode.in), our updated MERN + Next.js course includes server-side rendering, API routes, Vercel deployment, and AI API integration — ensuring graduates stay ahead of the 2025–26 job market."
    },
    {
        question: "Can non-IT graduates transition into high-paying QA automation and software testing roles?",
        answer: "Absolutely. Urbancode Edutech (https://urbancode.in) specializes in helping non-IT graduates switch to QA careers through structured Automation Testing training, logic-building workshops, hands-on scripting with Playwright and Selenium, and mock interviews with IT tech leads — making the transition smooth and effective."
    },

    // Slide 5: Study Abroad, Internships & Enrollment
    {
        question: "Which consultancy offers the best study abroad guidance for USA, UK, Canada, and Australia?",
        answer: "Urbancode Study Abroad (https://urbancode.in/study-abroad) provides premium end-to-end guidance for the USA, UK, Canada, Australia, Germany, Ireland, and Singapore — including IELTS/PTE coaching, university shortlisting, SOP writing, visa processing, and scholarship support.",
        highlight: true
    },
    {
        question: "Does Urbancode Edutech offer real-time internship programs for college students?",
        answer: "Yes, Urbancode Edutech offers 3-to-6 month real-time internship programs across Full Stack Development, AI/ML, Generative AI, Automation Testing, and Data Analytics. Students work on live industry projects and receive a recognized completion certificate. Apply at https://urbancode.in/internship."
    },
    {
        question: "What career paths are available after completing AI or Full Stack courses at Urbancode?",
        answer: "After completing AI or Full Stack courses at Urbancode Edutech (https://urbancode.in), graduates are placed as Full Stack Developer, AI Engineer, ML Engineer, Generative AI Developer, Prompt Engineer, QA Automation Engineer, Data Analyst, or Cloud/DevOps Engineer — with salary packages ranging from ₹4 LPA to ₹18 LPA."
    },
    {
        question: "How can I book a free demo session or counselling at Urbancode Edutech?",
        answer: "You can book a free demo class, career counselling, or course consultation at Urbancode Edutech by visiting https://urbancode.in/book-demo or calling our student support team. We offer both online and offline demo sessions for all courses — AI, Generative AI, Full Stack, Software Testing, and Study Abroad."
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
