'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import './GetCertified.css';

import { certifications } from '@/app/data/certificationData';

const GetCertified = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const [showNext, setShowNext] = useState(true);
    const [showPrev, setShowPrev] = useState(false);

    // Get main certification and modules dynamically
    const mainCertification = Object.values(certifications).find(c => c.featured) || Object.values(certifications)[0];
    const modules = Object.values(certifications).filter(c => !c.featured);

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

    // Auto scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 20;

                if (isAtEnd) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scroll('right');
                }
            }
        }, 4000); // Scroll every 4 seconds

        return () => clearInterval(interval);
    }, []);

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
                    <p className="gc-section-subtitle">Earn globally recognized credentials. Explore independent certification tracks designed by industry leaders to accelerate your career.</p>
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
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                                                <div className="gc-step-badge">
                                                    {module.brand} Track
                                                </div>
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
