'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaArrowRight, FaAward } from 'react-icons/fa';
import EnquiryFormModal from '../common/EnquiryFormModal';
import FlightTransition from '../animations/FlightTransition';
import './HomePremiumHero.css';

/* ── Course URL map ── */
const COURSE_URLS = {
    'react-js':  'https://www.urbancode.in/courses/fullstack-development/react.js',
    'data-analytics': 'https://www.urbancode.in/training/data-analytics',
    'ai-ml':     'https://www.urbancode.in/courses/ai-and-data-science/ai-and-ml',
    'software-testing': 'https://www.urbancode.in/training/automation-testing',
    'aws':       'https://www.urbancode.in/training/aws-devops',
    'study-abroad': '/study-abroad',
};

const HomePremiumHero = () => {
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [isFlying, setIsFlying] = useState(false);

    /* ── Click handler: play launch animation then navigate ── */
    const handleCourseClick = (e, courseKey) => {
        e.preventDefault();
        const url = COURSE_URLS[courseKey];
        const el = e.currentTarget;
        if (!url || !el) return;
        el.classList.add('course-icon-launching');
        setTimeout(() => { window.location.href = url; }, 1050);
    };

    /* ── Click handler: Study Abroad flight animation ── */
    const handleStudyAbroadClick = (e) => {
        e.preventDefault();
        setIsFlying(true);
        setTimeout(() => {
            window.location.href = COURSE_URLS['study-abroad'];
        }, 3000);
    };

    // Mobile course data
    const mobileCourses = [
        { label: 'Full stack', src: '/images/home/home-hero/react (2).png', key: 'react-js',  size: 'large'  },
        { label: 'Data Analytics',   src: '/images/home/home-hero/data analytics-nobg.png',    key: 'data-analytics',    size: 'small'  },
        { label: 'AI / ML',  src: '/images/home/home-hero/AI.png',        key: 'ai-ml',     size: 'center' },
        { label: 'Software Testing', src: '/images/home/home-hero/testing-nobg.png',     key: 'software-testing',   size: 'small'  },
        { label: 'AWS',  src: '/images/home/home-hero/aws (1)-nobg.png',      key: 'aws',   size: 'large'  },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const badgeAnim = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const titleLineAnim = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const pillarAnim = {
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const iconFadeInAnim = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const drawLineAnim = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5, transition: { duration: 0.8, ease: "easeInOut" } }
    };

    return (
        <section className="premium-hero-section">
            {/* Background Images */}
            <motion.img 
                src="/images/home/home-hero/bg-image-1.png" 
                alt="" 
                className="premium-bg-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5 }}
            />
            <motion.img 
                src="/images/home/home-hero/bg-image-2.png" 
                alt="" 
                className="premium-bg-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.5 }}
            />

            <div className="premium-hero-content">
                <div className="premium-text-block" style={{ marginTop: '100px', marginBottom: '0px' }}>
                    {/* Step 1: Top Badge */}
                    {/* <motion.a 
                        href="/courses"
                        className="premium-badge"
                        style={{ textDecoration: 'none' }}
                        initial="hidden"
                        animate="visible"
                        variants={badgeAnim}
                    >
                        <span className="premium-badge-dot"></span>
                        Enroll Now for Our Upcoming IT Courses
                        <FaArrowRight size={10} style={{ marginLeft: '4px' }} />
                    </motion.a> */}

                    {/* Step 2: Title */}
                    <h1 className="premium-title" style={{
							fontWeight: 500,
							fontSize: '52px',
							lineHeight: '56px',
							letterSpacing: '-2px',
							color: '#1C1D22',
							maxWidth: '900px',
							margin: '0 0 16px 0',
						}}>
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={titleLineAnim}
                        >
                            The right skill today
                        </motion.span>
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={titleLineAnim}
                            transition={{ delay: 0.2 }}
                        >
                            for the right career tomorrow
                        </motion.span>
                    </h1>

                    {/* Step 3: Description */}
                    <motion.p 
                        className="premium-desc"
                        style={{ fontSize: '16px', lineHeight: '24px' }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.6 }}
                    >
                        Master in-demand IT skills with expert-led training, hands-on projects, certification programs, and career-focused learning-all in one place.
                    </motion.p>

                    {/* Step 4: CTA Buttons */}
                    <motion.div 
                        className="premium-cta-container"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.9 }}
                    >
                        <button className="premium-btn-primary" onClick={() => setShowEnquiry(true)}>
                            Enroll Now <FaArrowRight size={14} />
                        </button>
                        <a 
                            href={COURSE_URLS['study-abroad']} 
                            className="premium-btn-secondary"
                            onClick={handleStudyAbroadClick}
                        >
                            <span className="premium-btn-text-gradient">Study Abroad</span>
                        </a>
                        <a 
                            href="#certification-section"
                            className="premium-btn-certificate"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('certification-section');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <FaAward size={14} /> Get Certified
                        </a>
                    </motion.div>
                </div>

                {/* ── Mobile / Tablet Mini Pillar Layout ── */}
                <div className="premium-mobile-pillars">
                    {mobileCourses.map(({ label, src, key, size }, idx) => (
                        <a
                            key={idx}
                            href={COURSE_URLS[key]}
                            className={`premium-mobile-pillar-item premium-mobile-pillar-${size}`}
                            onClick={(e) => handleCourseClick(e, key)}
                        >
                            <div className="premium-mobile-pillar-label">{label}</div>  
                            <div className="premium-mobile-pillar-icon">
                                <img src={src} alt={label} className="course-icon-img" />
                            </div>
                            <div className="premium-mobile-pillar-body">
                                <div className="premium-mobile-pillar-cap"></div>
                                <div className="premium-mobile-pillar-shaft"></div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Step 5 & 6 & 7 & 8: Pillar System (Desktop/Tablet) */}
                <div className="premium-pillars-wrapper">
                    {/* Pillar 1: Left Large */}
                    <motion.div 
                        className="premium-pillar-container pillar-left-large"
                        initial="hidden" animate="visible" variants={pillarAnim} transition={{ delay: 1.2 }}
                    >
                        <motion.a
                            href={COURSE_URLS['react-js']}
                            className="premium-course-icon-wrapper"
                            initial="hidden" animate="visible" variants={iconFadeInAnim} transition={{ delay: 1.5 }}
                            onClick={(e) => handleCourseClick(e, 'react-js')}
                        >
                            <img src="/images/home/home-hero/react (2).png" alt="React" className="course-icon-img" />
                        </motion.a>
                        {/* <svg style={{ position: 'absolute', top: -110, left: 82.5, overflow: 'visible', zIndex: 1 }} width="1" height="1">
                            <motion.path d="M 57.5 0 L 0 0 L 0 65" stroke="#00B56F" strokeWidth="2" strokeDasharray="6 6" fill="none" initial="hidden" animate="visible" variants={drawLineAnim} transition={{ delay: 1.8 }} />
                        </svg>
                        <motion.div className="premium-course-label" style={{ top: -130, left: 140 }} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.1}}>Full stack</motion.div> */}
                        <img src="/images/home/home-hero/side-big-pillar.png" alt="Pillar" className="premium-pillar-img" />
                    </motion.div>

                    {/* Pillar 2: Left Small */}
                    <motion.div 
                        className="premium-pillar-container pillar-left-small"
                        initial="hidden" animate="visible" variants={pillarAnim} transition={{ delay: 1.4 }}
                    >
                        <motion.a
                            href={COURSE_URLS['data-analytics']}
                            className="premium-course-icon-wrapper"
                            initial="hidden" animate="visible" variants={iconFadeInAnim} transition={{ delay: 1.6 }}
                            onClick={(e) => handleCourseClick(e, 'data-analytics')}
                        >
                            <img src="/images/home/home-hero/data analytics-nobg.png" alt="Data Analytics" className="course-icon-img" />
                        </motion.a>
                        {/* <svg style={{ position: 'absolute', top: -100, left: 100, overflow: 'visible', zIndex: 1 }} width="1" height="1">
                            <motion.path d="M 20 0 L 0 0 L 0 55" stroke="#00B56F" strokeWidth="2" strokeDasharray="6 6" fill="none" initial="hidden" animate="visible" variants={drawLineAnim} transition={{ delay: 1.9 }} />
                        </svg>
                        <motion.div className="premium-course-label" style={{ top: -120, left: 120 }} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.2}}>Data Analytics</motion.div> */}
                        <img src="/images/home/home-hero/side-small-pillar.png" alt="Pillar" className="premium-pillar-img" />
                    </motion.div>

                    {/* Pillar 3: Center Giant (AI) */}
                    <motion.div 
                        className="premium-pillar-container pillar-center"
                        initial="hidden" animate="visible" variants={pillarAnim} transition={{ delay: 1.6 }}
                    >
                        <motion.a
                            href={COURSE_URLS['ai-ml']}
                            className="premium-ai-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
                            onClick={(e) => handleCourseClick(e, 'ai-ml')}
                        >
                            <img src="/images/home/home-hero/AI.png" alt="AI Center" className="course-icon-img" />
                        </motion.a>
                        <img src="/images/home/home-hero/center-big-pillar.png" alt="Center Pillar" className="premium-pillar-img" />
                    </motion.div>

                    {/* Pillar 4: Right Small */}
                    <motion.div 
                        className="premium-pillar-container pillar-right-small"
                        initial="hidden" animate="visible" variants={pillarAnim} transition={{ delay: 1.8 }}
                    >
                        <motion.a
                            href={COURSE_URLS['software-testing']}
                            className="premium-course-icon-wrapper"
                            initial="hidden" animate="visible" variants={iconFadeInAnim} transition={{ delay: 1.7 }}
                            onClick={(e) => handleCourseClick(e, 'software-testing')}
                        >
                            <img src="/images/home/home-hero/testing-nobg.png" alt="Software Testing" className="course-icon-img" />
                        </motion.a>
                        {/* <svg style={{ position: 'absolute', top: -100, left: 100, overflow: 'visible', zIndex: 1 }} width="1" height="1">
                            <motion.path d="M -54 0 L 0 0 L 0 55" stroke="#00B56F" strokeWidth="2" strokeDasharray="6 6" fill="none" initial="hidden" animate="visible" variants={drawLineAnim} transition={{ delay: 2.0 }} />
                        </svg> */}
                        {/* <motion.div className="premium-course-label" style={{ top: -120, left: -90 }} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.3}}>Software Testing</motion.div> */}
                        <img src="/images/home/home-hero/side-small-pillar.png" alt="Pillar" className="premium-pillar-img" />
                    </motion.div>

                    {/* Pillar 5: Right Large */}
                    <motion.div 
                        className="premium-pillar-container pillar-right-large"
                        initial="hidden" animate="visible" variants={pillarAnim} transition={{ delay: 2.0 }}
                    >
                        <motion.a
                            href={COURSE_URLS['aws']}
                            className="premium-course-icon-wrapper"
                            initial="hidden" animate="visible" variants={iconFadeInAnim} transition={{ delay: 1.8 }}
                            onClick={(e) => handleCourseClick(e, 'aws')}
                        >
                            <img src="/images/home/home-hero/aws (1)-nobg.png" alt="AWS" className="course-icon-img" />
                        </motion.a>
                        {/* <svg style={{ position: 'absolute', top: -110, left: 82.5, overflow: 'visible', zIndex: 1 }} width="1" height="1">
                            <motion.path d="M -56.5 0 L 0 0 L 0 65" stroke="#00B56F" strokeWidth="2" strokeDasharray="6 6" fill="none" initial="hidden" animate="visible" variants={drawLineAnim} transition={{ delay: 2.1 }} />
                        </svg>
                        <motion.div className="premium-course-label" style={{ top: -130, left: -110 }} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.4}}>AWS</motion.div> */}
                        <img src="/images/home/home-hero/side-big-pillar.png" alt="Pillar" className="premium-pillar-img" />
                    </motion.div>

                </div>
            </div>

            {/* Enquiry Form Modal */}
            <EnquiryFormModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />

            {/* Flight Animation for Study Overseas */}
            <FlightTransition isAnimating={isFlying} />
        </section>
    );
};

export default HomePremiumHero;
