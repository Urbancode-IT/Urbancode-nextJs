'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaGlobeAmericas, FaUniversity, FaCheckCircle, FaChevronRight, FaBookOpen, FaUserTie, FaCheckDouble, FaMapMarkerAlt, FaMedal, FaPlus, FaMinus, FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import '../StudyAbroad.css';

const StudyInUSA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(-1);
    const [faqPage, setFaqPage] = useState(0);

    const faqs = [
        {
                "q": "Is it tougher to get a student visa for the USA?",
                "a": "No, as long as you submit the right documents, show proper finances, and prepare well for your interview, getting a US student visa is as easy as getting one for any other country."
        },
        {
                "q": "What are the basic requirements for studying in the USA?",
                "a": "You'll need a valid passport, an I-20 form from your university, proof of academic qualifications, English language proficiency (like TOEFL or IELTS), and proof of financial ability."
        },
        {
                "q": "How do I apply for an F-1 student visa?",
                "a": "Once you receive your I-20 form from your U.S. institution, you need to pay the SEVIS fee, fill out the DS-160 form, schedule a visa interview at a U.S. embassy or consulate, and provide necessary documents."
        },
        {
                "q": "Can I work while studying in the USA?",
                "a": "Yes, international students on an F-1 visa can work on-campus up to 20 hours per week during the academic term and full-time during holidays."
        },
        {
                "q": "What should I know about the U.S. education system?",
                "a": "The U.S. system is very flexible. You often don't need to declare your major until the end of your second year of a bachelor's degree, allowing you to explore different subjects."
        },
        {
                "q": "What is OPT and CPT?",
                "a": "Optional Practical Training (OPT) allows graduates to work for 1-3 years. Curricular Practical Training (CPT) allows you to do internships during your studies."
        },
        {
                "q": "Are scholarships available for international students in the USA?",
                "a": "Yes, many universities offer merit-based and need-based scholarships for international students, which can significantly reduce tuition costs."
        },
        {
                "q": "How much does it cost to live in the USA?",
                "a": "Living expenses vary greatly by state and city, but generally range from $10,000 to $18,000 per year, covering accommodation, food, travel, and personal expenses."
        },
        {
                "q": "What is a GPA and why is it important?",
                "a": "GPA (Grade Point Average) is a number that represents your academic performance. US universities use it to evaluate your eligibility for admission and scholarships."
        },
        {
                "q": "Do I need SAT or GRE scores?",
                "a": "Many universities have become test-optional, but top-tier institutions may still require SAT (for bachelors) or GRE/GMAT (for masters) scores. It depends on the specific university."
        }
];
    const faqsPerPage = 5;
    const totalPages = Math.ceil(faqs.length / faqsPerPage);
    const displayedFaqs = faqs.slice(faqPage * faqsPerPage, (faqPage + 1) * faqsPerPage);

    const handleNextFaqPage = () => {
        if (faqPage < totalPages - 1) {
            setFaqPage(faqPage + 1);
            setOpenFaq(-1);
        }
    };

    const handlePrevFaqPage = () => {
        if (faqPage > 0) {
            setFaqPage(faqPage - 1);
            setOpenFaq(-1);
        }
    };

    return (
        <div className="study-abroad-container bg-light min-vh-100 pb-5">
            {/* Breadcrumb */}
            <div className="container pt-4 pb-2">
                <div className="d-flex align-items-center text-muted small fw-medium">
                    <Link href="/" className="text-decoration-none text-muted hover-success">Home</Link>
                    <FaChevronRight className="mx-2" style={{ fontSize: '0.7rem' }} />
                    <Link href="/study-abroad" className="text-decoration-none text-muted hover-success">Study Abroad</Link>
                    <FaChevronRight className="mx-2" style={{ fontSize: '0.7rem' }} />
                    <span className="text-dark fw-bold">USA</span>
                </div>
            </div>

            {/* Banner Section inside Page content */}
            <div className="container mt-2 mb-5">
                <div className="country-banner-box" 
                    style={{ 
                        backgroundImage: `url('${"https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1920"}')`
                    }}>
                    <div className="country-banner-content">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="country-banner-title text-white">
                                Study in <span className="country-banner-accent">USA</span>
                            </h1>
                            <p className="country-banner-desc mb-0">
                                Your ultimate guide to global education, top universities, and career success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Intro & Promo Card Section */}
            <section className="section-padding py-3">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '2.5rem' }}>Begin Your Journey in <span className="text-success">USA</span></h2>
                            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Studying in the USA offers international students access to cutting-edge technology, world-class research, and advanced English language skills, all while gaining valuable intercultural experience. The U.S. education system is renowned for its academic standards, diverse institutions, and a vast array of specialized degrees.
                            </p>
                            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Studying in the USA provides a dynamic and diverse educational experience. The education system emphasizes a broad-based approach to learning, allowing students to explore various fields before specializing, and encouraging interdisciplinary studies that prepare them for complex, real-world challenges.
                            </p>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-success px-4 py-2 rounded-pill fw-bold shadow-sm">
                                Request Callback
                            </button>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0 rounded-4 overflow-hidden position-relative shadow-lg" style={{ background: 'linear-gradient(135deg, #ff7e67 0%, #ff5b4f 100%)', color: 'white' }}>
                                <div className="card-body p-5 position-relative z-index-1 text-center">
                                    <div className="mb-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-white text-danger rounded-circle shadow" style={{ width: '80px', height: '80px', fontSize: '30px' }}>
                                            <FaMedal />
                                        </div>
                                    </div>
                                    <h3 className="fw-bold mb-3">Fund Your Education</h3>
                                    <p className="mb-4" style={{ fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.6' }}>
                                        Every Urbancode student gets expert guidance to win a scholarship at their dream university. Rewards include tuition fee discounts ranging from partial up to 100% waivers. Call us now and apply!
                                    </p>
                                    <button onClick={() => setIsModalOpen(true)} className="btn btn-dark w-100 rounded-pill py-3 fw-bold">
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section-padding py-5 bg-white">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <h2 className="fw-bold text-dark mb-4">Key Advantages of <span className="text-success">USA</span></h2>
                            <ul className="list-unstyled">
                                
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>1.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Study in top USA universities at affordable cost</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>2.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Consistently ranks among the world's top education institutions</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>3.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Wide availability of scholarships for international students</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>4.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>High average salary for graduates globally</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>5.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Post study work permit up to 3 years (STEM)</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>6.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Global leader in technological advancements and research</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>7.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Flexible academic environment to explore interests</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>8.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>Over 4,000 higher education institutions to choose from</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0 rounded-4 shadow-sm" style={{ backgroundColor: '#fcf6e3' }}>
                                <div className="card-body p-4 p-lg-5 text-center">
                                    <h4 className="fw-bold mb-4 text-dark">Your Pathway to Success in USA</h4>
                                    
                                    <div className="row g-3 mb-4">
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaUserTie className="text-warning fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>Personalised Guidance</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaBookOpen className="text-primary fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>English Coaching</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaUniversity className="text-danger fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>University Shortlist</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaCheckDouble className="text-success fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>Visa Assurance</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)} className="btn btn-dark w-100 rounded-pill py-3 fw-bold shadow-sm">
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Info Section */}
            <section className="section-padding py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h3 className="fw-bold text-dark mb-4">Popular Academic Disciplines</h3>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                In USA, academic degrees are categorized into several levels. Foundation courses provide basic preparatory education. Bachelor degrees represent the completion of undergraduate studies, typically lasting three to four years. Master degrees follow, offering advanced, specialized knowledge usually attained within one to two years. Doctorate degrees are the highest academic qualifications, involving rigorous research.
                            </p>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                The best courses in USA offer diverse specializations, including Computer Science, Data Science, Business Analytics, Engineering, Health Informatics, and Artificial Intelligence. These programs provide cutting-edge education and prepare students for global opportunities.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold text-dark mb-4">Undergraduate & Postgraduate Opportunities</h3>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                Top-ranked universities in USA offer high-quality education, producing graduates excelling in their fields. The programs provide academic versatility, allowing for customized study experiences with flexible courses and extracurricular activities.
                            </p>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                These programs help students succeed both academically and professionally by sharpening their competitive edge and boosting their marketability. Graduating from an institution in USA significantly enhances global career prospects and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding py-5 bg-white">
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div className="text-center mb-5">
                        <h3 className="fw-bold text-dark mb-2">Got Questions? We have Answers</h3>
                        <p className="text-muted">Find quick answers to common queries about studying in USA</p>
                    </div>
                    
                    <div className="faq-container">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={faqPage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {displayedFaqs.map((faq, idx) => {
                                    const actualIndex = (faqPage * faqsPerPage) + idx;
                                    const isOpen = openFaq === actualIndex;
                                    return (
                                        <div key={actualIndex} className="study-faq-item mb-3">
                                            <button 
                                                className="study-faq-question" 
                                                onClick={() => setOpenFaq(isOpen ? -1 : actualIndex)}
                                            >
                                                <span>{faq.q}</span>
                                                <div className="study-faq-btn-circle flex-shrink-0 ms-3">
                                                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                                                </div>
                                            </button>
                                            <div 
                                                className="study-faq-answer-wrapper"
                                                style={{
                                                    maxHeight: isOpen ? '400px' : '0px',
                                                }}
                                            >
                                                <p className="study-faq-answer-text">{faq.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="study-faq-pagination">
                                <button 
                                    className="study-faq-nav-btn"
                                    onClick={handlePrevFaqPage}
                                    disabled={faqPage === 0}
                                    aria-label="Previous Page"
                                >
                                    <FaChevronLeft size={14} />
                                </button>
                                
                                <div className="study-faq-dots">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`study-faq-dot ${faqPage === i ? 'active' : ''}`}
                                            onClick={() => {
                                                setFaqPage(i);
                                                setOpenFaq(-1);
                                            }}
                                        ></span>
                                    ))}
                                </div>

                                <button 
                                    className="study-faq-nav-btn"
                                    onClick={handleNextFaqPage}
                                    disabled={faqPage === totalPages - 1}
                                    aria-label="Next Page"
                                >
                                    <FaChevronRight size={14} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* All Other Destinations Suggestion */}
            <section className="section-padding py-5 bg-light">
                <div className="container">
                    <h3 className="fw-bold text-dark mb-5 text-center">Discover More Global Opportunities</h3>
                    <div className="row g-4 justify-content-center">
                        
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/uk" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in UK</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/canada" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in Canada</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/australia" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in Australia</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/germany" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in Germany</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/ireland" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in Ireland</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/new-zealand" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in New Zealand</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/study-abroad/singapore" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '180px', backgroundImage: `url('${"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1920"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-3 text-center bg-white">
                                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>Study in Singapore</h5>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.9rem' }}>
                                            Explore <FaChevronRight size={10} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <EnquiryFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                courseName="Study in USA" 
            />
            
            {/* Style handled globally in StudyAbroad.css */}
        </div>
    );
};

export default StudyInUSA;
