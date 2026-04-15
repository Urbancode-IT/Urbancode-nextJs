'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Clock, Cloud, Server, Database, ArrowRight, X, Sparkles } from 'lucide-react';
import './GetCertified.css';

import { certifications } from '@/app/data/certificationData';

// Custom Tilt Card Component for 3D effect
const TiltCard = ({ children, className, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);

        // Set CSS variables for glass glow effect
        e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={className}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

const GetCertified = () => {
    const scrollRef = useRef(null);
    const [expandedBrand, setExpandedBrand] = useState(null);
    const [showNext, setShowNext] = useState(true);
    const [showPrev, setShowPrev] = useState(false);

    const allCerts = Object.values(certifications);
    
    const brands = [
        { name: 'AWS', icon: <Cloud size={16} />, logo: '/images/home/amazon.png', color: '#FF9900' },
        { name: 'CNCF', icon: <Server size={16} />, logo: '/images/home/fullstack.png', color: '#326CE5' },
        { name: 'Microsoft', icon: <Database size={16} />, logo: '/images/home/microsoft.png', color: '#00A4EF' },
    ];

    const getBrandMainCert = (brandName) => {
        return allCerts.find(c => c.brand === brandName && c.featuredByBrand) || 
               allCerts.find(c => c.brand === brandName) || 
               allCerts?.[0];
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const track = scrollRef.current;
            const firstItem = track.querySelector('.gc-track-item');
            if (firstItem) {
                const styles = window.getComputedStyle(track);
                const gap = parseFloat(styles.gap) || 30;
                const itemWidth = firstItem.offsetWidth;
                const scrollAmount = itemWidth + gap;
                const scrollTo = direction === 'left' ? track.scrollLeft - scrollAmount : track.scrollLeft + scrollAmount;
                track.scrollTo({ left: scrollTo, behavior: 'smooth' });
            }
        }
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowPrev(scrollLeft > 20);
            setShowNext(scrollLeft + clientWidth < scrollWidth - 20);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [expandedBrand]);

    const filteredModules = expandedBrand 
        ? allCerts.filter(c => c.brand === expandedBrand && c.id !== getBrandMainCert(expandedBrand).id)
        : [];

    return (
        <section className="gc-section">
            <div className="gc-container">
                <div className="gc-header-box">
                    <motion.h2 
                        className="section-main-title text-shine"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Choose Your Career Path
                    </motion.h2>
                </div>

                <div className="gc-main-outer">
                    <AnimatePresence mode="wait">
                        {!expandedBrand ? (
                            <motion.div 
                                key="initial"
                                className="gc-initial-view"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="gc-brands-grid">
                                    {brands.map((brand, idx) => {
                                        const cert = getBrandMainCert(brand.name);
                                        return (
                                            <motion.div 
                                                key={brand.name}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                                            >
                                                <TiltCard 
                                                    className="gc-brand-box-wrapper"
                                                    onClick={() => setExpandedBrand(brand.name)}
                                                >
                                                    <div className="gc-initial-card">
                                                        <div className="gc-card-glass-glow"></div>
                                                        <span className="gc-featured-tag" style={{ '--accent': brand.color }}>
                                                            {brand.name} ECOSYSTEM
                                                        </span>
                                                        <div className="gc-brand-wrap">
                                                            <img src={brand.logo} alt={brand.name} />
                                                        </div>
                                                        <h3 className="gc-featured-title">{cert.title}</h3>
                                                        <p className="gc-featured-desc">{cert.description}</p>
                                                        
                                                        <div className="gc-featured-meta">
                                                            <div className="gc-meta-item">
                                                                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                                                <span>{cert.rating}</span>
                                                            </div>
                                                            <div className="gc-meta-item">
                                                                <Clock size={16} className="clock-icon" />
                                                                <span>{cert.duration}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="gc-expand-hint">
                                                            Explore Roadmap <ArrowRight size={18} />
                                                        </div>
                                                    </div>
                                                </TiltCard>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="expanded"
                                className="gc-inner-layout"
                                initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="gc-featured-side">
                                    <motion.div 
                                        className="gc-featured-card"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <button className="gc-close-btn" onClick={() => setExpandedBrand(null)} aria-label="Go back">
                                            <X size={20} />
                                        </button>

                                        <div className="gc-featured-content">
                                            <span className="gc-featured-tag" style={{ '--accent': brands.find(b => b.name === expandedBrand)?.color }}>
                                                {expandedBrand} MASTERCLASS
                                            </span>
                                            <div className="gc-brand-wrap">
                                                <img src={brands.find(b => b.name === expandedBrand)?.logo} alt={expandedBrand} />
                                            </div>
                                            <h3 className="gc-featured-title">{getBrandMainCert(expandedBrand).title}</h3>
                                            <p className="gc-featured-desc">{getBrandMainCert(expandedBrand).description}</p>
                                            
                                            <div className="gc-featured-meta">
                                                <div className="gc-meta-item">
                                                    <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                                    <span>{getBrandMainCert(expandedBrand).rating}</span>
                                                </div>
                                                <div className="gc-meta-item">
                                                    <Clock size={16} />
                                                    <span>{getBrandMainCert(expandedBrand).totalHours} hours</span>
                                                </div>
                                            </div>
                                            
                                            <Link href={`/certifications/${getBrandMainCert(expandedBrand).slug}`} className="gc-start-btn">
                                                Start Path <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="gc-tracks-side">
                                    <motion.div 
                                        className="gc-tracks-header"
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h2 className="gc-tracks-title">{expandedBrand} <span>Curriculum</span></h2>
                                    </motion.div>

                                    <div className="gc-carousel-wrap">
                                        <div className="gc-modules-scroller" ref={scrollRef} onScroll={checkScroll}>
                                            {filteredModules.map((module, i) => (
                                                <motion.div
                                                    key={module.id}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + i * 0.05 }}
                                                    className="gc-track-item"
                                                >
                                                    <Link href={`/certifications/${module.slug}`} className="gc-track-card">
                                                        <div className="gc-card-shine"></div>
                                                        <div className="gc-track-logo">
                                                            <img src={module.brandLogo} alt={module.brand} />
                                                        </div>
                                                        <div className="gc-track-body">
                                                            <h4 className="gc-track-title">{module.title}</h4>
                                                            <div className="gc-track-footer">
                                                                <span className="gc-track-tag">{module.brand}</span>
                                                                <div className="gc-track-meta-mini">
                                                                    <Clock size={12} />
                                                                    <span>{module.duration}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <AnimatePresence>
                                            {showPrev && (
                                                <motion.button 
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    className="gc-side-nav prev" 
                                                    onClick={() => scroll('left')}
                                                >
                                                    <ChevronLeft size={24} />
                                                </motion.button>
                                            )}
                                            {showNext && (
                                                <motion.button 
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    className="gc-side-nav next" 
                                                    onClick={() => scroll('right')}
                                                >
                                                    <ChevronRight size={24} />
                                                </motion.button>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default GetCertified;


