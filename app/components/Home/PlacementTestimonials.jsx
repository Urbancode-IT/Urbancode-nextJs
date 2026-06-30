"use client";

import React, { useRef, useState, useCallback } from 'react';
import './PlacementTestimonials.css';
import { motion } from 'framer-motion';
import { Quote, Star, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonialsData = [
    {
        id: 1,
        name: "Arun Kumar",
        course: "Data Analyst",
        company: "First Source",
        package: "₹9 LPA",
        review: "The hands-on projects and intensive interview preparation at Urbancode were absolute game-changers for my career transition. Mastering SQL and Power BI through real-world datasets gave me the technical edge needed to crack the interview at First Source. I felt incredibly confident and well-prepared throughout the entire recruitment process.",
        status: "Placed",
        image: "https://i.pravatar.cc/150?u=arun"
    },
    {
        id: 2,
        name: "Latha",
        course: "Frontend Developer",
        company: "Datanetiix",
        package: "₹8.0 LPA",
        review: "Excellent mentors who explained complex JavaScript and React concepts in a way that was so easy to grasp. The focus on building responsive UIs and modern CSS techniques was exactly what I needed. The placement support at Urbancode is truly 100% as promised, and I'm thrilled to start my journey as a Frontend Developer at Datanetiix.",
        status: "Hired",
        image: "https://i.pravatar.cc/150?u=priya"
    },
    {
        id: 3,
        name: "Divyabharathi",
        course: "Software Engineer",
        company: "VKnowLabs Private Limited",
        package: "₹5.2 LPA",
        review: "Landing a job at VKnowLabs Private Limited was my ultimate dream. The technical rounds were exceptionally tough, but the mock interviews and deep-dives into Data Structures and Algorithms here prepared me perfectly. The constant encouragement from the trainers kept me motivated through the most challenging parts of the course.",
        status: "Successfully Employed",
        image: "https://i.pravatar.cc/150?u=rahul"
    },
    {
        id: 4,
        name: "Hemalatha",
        course: "QA Engineer",
        company: "Krypto into system pvt ltd",
        package: "₹11 LPA",
        review: "The curriculum is very up-to-date with industry standards. Learning Automation Testing with Selenium and Java through real-time projects helped me land a high-paying job. The lab facilities and the availability of mentors for doubt clearing even after class hours were major highlights of my experience.",
        status: "Placed",
        image: "https://i.pravatar.cc/150?u=sneha"
    },
    {
        id: 5,
        name: "Jayamaheshwari",
        course: "Software Engineer",
        company: "Vincilium",
        package: "₹6.5 LPA",
        review: "I loved the focused learning environment at Urbancode. The deep dive into React hooks, state management, and API integration was exactly what top tech firms are looking for. The soft skills training also played a huge role in helping me present myself effectively during the technical interviews.",
        status: "Hired",
        image: "https://i.pravatar.cc/150?u=karthik"
    },
    {
        id: 6,
        name: "Sajina",
        course: "Quality Engineer",
        company: "Sopra Steria India Limited",
        package: "₹12 LPA",
        review: "Great experience overall! The .NET ecosystem and C# fundamentals were explained in great detail. Building a comprehensive portfolio through the course projects really impressed the recruiters at Sopra Steria. I highly recommend Urbancode to anyone looking for serious career growth in IT.",
        status: "Placed",
        image: "https://i.pravatar.cc/150?u=aisha"
    }
];

const TestimonialCard = ({ data, index }) => {
    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.split(" ");
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };

    return (
        <motion.div
            className="pt-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Blurred background circles for premium look */}
            <div className="pt-bg-circle pt-circle-1"></div>
            <div className="pt-bg-circle pt-circle-2"></div>

            <div className="pt-card-header">
                <div className="pt-student-initials-wrapper">
                    <span className="pt-student-initials">{getInitials(data.name)}</span>
                </div>
                <div className="pt-student-meta">
                    <h3 className="pt-student-name">{data.name}</h3>
                    <span className="pt-course-name">{data.course}</span>
                </div>
            </div>

            <div className="pt-card-content">
                <Quote className="pt-quote-icon" fill="currentColor" />
                <p className="pt-testimonial-text">"{data.review}"</p>
                <div className="pt-stars">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" stroke="none" />
                    ))}
                </div>
            </div>

            <div className="pt-card-footer">
                <div className="pt-company-info">
                    {/* <span className="pt-placed-at">Placed At</span> */}
                    <div className="pt-company-badge">
                        <Briefcase size={16} className="pt-company-icon" />
                        <span className="pt-company-name">{data.company}</span>
                    </div>
                </div>
                <div className="pt-salary-badge">
                    {data.package}
                </div>
            </div>

            <div className="pt-accent-line"></div>
        </motion.div>
    );
};

const PlacementTestimonials = () => {
    const mobileSliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = testimonialsData.length;

    const scrollToIndex = useCallback((index) => {
        const clamped = Math.max(0, Math.min(index, total - 1));
        setCurrentIndex(clamped);
        if (mobileSliderRef.current) {
            const cardWidth = mobileSliderRef.current.clientWidth;
            mobileSliderRef.current.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' });
        }
    }, [total]);

    const handlePrev = () => scrollToIndex(currentIndex - 1);
    const handleNext = () => scrollToIndex(currentIndex + 1);

    return (
        <section className="pt-section-wrapper">
            {/* Background Motion Elements */}
            <div className="pt-section-bg-motion">
                <div className="pt-motion-blob pt-blob-1"></div>
                <div className="pt-motion-blob pt-blob-2"></div>
            </div>

            <div className="pt-container">
                <motion.div
                    className="pt-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-main-title text-shine">What Our Alumni Says</h2>
                </motion.div>

                {/* Desktop Grid */}
                <div className="pt-grid">
                    {testimonialsData.map((item, index) => (
                        <TestimonialCard key={item.id} data={item} index={index} />
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="pt-mobile-slider-wrapper">
                    <div className="pt-mobile-track" ref={mobileSliderRef}>
                        {testimonialsData.map((item, index) => (
                            <div className="pt-mobile-slide" key={item.id}>
                                <TestimonialCard data={item} index={0} />
                            </div>
                        ))}
                    </div>

                    {/* Prev / Next Buttons */}
                    <div className="pt-mobile-nav">
                        <button
                            className={`pt-mobile-nav-btn ${currentIndex === 0 ? 'pt-nav-disabled' : ''}`}
                            onClick={handlePrev}
                            aria-label="Previous"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="pt-dots">
                            {testimonialsData.map((_, i) => (
                                <button
                                    key={i}
                                    className={`pt-dot ${i === currentIndex ? 'pt-dot-active' : ''}`}
                                    onClick={() => scrollToIndex(i)}
                                    aria-label={`Go to card ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className={`pt-mobile-nav-btn ${currentIndex === total - 1 ? 'pt-nav-disabled' : ''}`}
                            onClick={handleNext}
                            aria-label="Next"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementTestimonials;
