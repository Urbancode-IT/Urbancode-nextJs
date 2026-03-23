'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import './GetCertified.css';

const GetCertified = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const [showNext, setShowNext] = useState(true);
    const [showPrev, setShowPrev] = useState(false);

    const mainCertification = {
        brandLogo: '/images/home/amazon.png',
        title: 'AWS Certified Cloud Practitioner',
        description: 'Master the fundamentals of AWS Cloud. Build your high-paying career starting with this foundation.',
        rating: '4.8',
        ratingsCount: '1,245 ratings',
        totalHours: '12 total hours',
        courseCount: '8 modules',
        slug: 'aws-certified-cloud-practitioner'
    };

    const modules = [
        {
            id: 1,
            title: 'Cisco Certified Network Associate (CCNA)',
            image: '/images/home/cisco.png',
            step: 'Step 1 of 6',
            duration: '45 mins',
            slug: 'cisco-ccna'
        },
        {
            id: 2,
            title: 'Microsoft Power BI Data Analyst',
            image: '/images/home/microsoft.png',
            step: 'Step 2 of 5',
            duration: '52 mins',
            slug: 'microsoft-power-bi'
        },
        {
            id: 3,
            title: 'Google Cloud Digital Leader',
            image: '/images/home/ai_ml_logo.png',
            step: 'Step 3 of 4',
            duration: '38 mins',
            slug: 'google-cloud-digital-leader'
        },
        {
            id: 4,
            title: 'CompTIA Security+ SY0-701',
            image: '/images/home/fullstack.png',
            step: 'Step 4 of 8',
            duration: '1.5 hours',
            slug: 'aws-certified-cloud-practitioner' // Dummy reuse
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - 300 : scrollLeft + 300;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowPrev(scrollLeft > 10);
            setShowNext(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    return (
        <section className="gc-section" ref={containerRef}>
            <div className="container px-4">
                <motion.div 
                    className="gc-header-box"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-main-title text-shine">Get Certified & Get Ahead</h2>
                    <p className="gc-section-subtitle">Skip the generic courses. Follow a proven certification path designed by industry experts to boost your career trajectory.</p>
                </motion.div>
                
                <div className="gc-container">
                    {/* Left Featured Card */}
                    <motion.div 
                        className="gc-featured-card"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="gc-featured-badge">Featured Track</div>
                        <img src={mainCertification.brandLogo} alt="Brand" className="gc-brand-logo" />
                        <h3 className="gc-featured-title">{mainCertification.title}</h3>
                        <p className="gc-featured-desc">{mainCertification.description}</p>
                        
                        <div className="gc-meta-group">
                            <div className="gc-meta-item">
                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                <span>{mainCertification.rating} ({mainCertification.ratingsCount})</span>
                            </div>
                            <div className="gc-meta-item">
                                <Clock size={14} />
                                <span>{mainCertification.totalHours}</span>
                            </div>
                        </div>
                        
                        <Link href={`/certifications/${mainCertification.slug}`} className="gc-main-cta">
                            Start Learning Path
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {/* Right Scrollable Modules */}
                    <div className="gc-modules-container">
                        <motion.div 
                            className="gc-modules-wrapper" 
                            ref={scrollRef} 
                            onScroll={checkScroll}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            {modules.map((module, i) => (
                                <Link 
                                    key={module.id} 
                                    href={`/certifications/${module.slug}`}
                                    className="gc-module-link"
                                >
                                    <div className="gc-module-card">
                                        <div className="gc-module-img-box">
                                            <img src={module.image} alt={module.title} className="gc-module-img" />
                                            <div className="gc-module-overlay">
                                                <span>View Details</span>
                                            </div>
                                        </div>
                                        <div className="gc-module-info">
                                            <h4 className="gc-module-title">{module.title}</h4>
                                            <div className="gc-module-footer">
                                                <div className="gc-step-badge">{module.step}</div>
                                                <div className="gc-duration">
                                                    <Clock size={10} />
                                                    {module.duration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>

                        {/* Nav Buttons */}
                        <div className="gc-nav-controls">
                            <button className={`gc-nav-btn prev ${!showPrev ? 'hidden' : ''}`} onClick={() => scroll('left')}>
                                <ChevronRight className="rotate-180" />
                            </button>
                            <button className={`gc-nav-btn next ${!showNext ? 'hidden' : ''}`} onClick={() => scroll('right')}>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetCertified;
