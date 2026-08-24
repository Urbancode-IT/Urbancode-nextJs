"use client";
import React, { useRef, useState, useEffect } from 'react';
import './courses.css';
import { useRouter } from 'next/navigation';
import { FaRocket, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const coursesData = [
    {
        id: 1,
        title: "MERN Stack",
        description: "Master MongoDB, Express.js, React, and Node.js for complete full-stack JavaScript applications.",
        image: "/images/home/t11.webp",
        path: "/courses/fullstack-development/ai-powered-fullstack"
    },
    {
        id: 2,
        title: "MEAN Stack",
        description: "Build robust web applications using MongoDB, Express.js, Angular, and Node.js.",
        image: "/images/home/t22.webp",
        path: "/training/mean-stack"
    },
    {
        id: 3,
        title: ".NET Angular",
        description: "Enterprise-grade development combining the power of .NET Core with the flexibility of Angular.",
        image: "/images/home/t3.webp",
        path: "/training/dotnet-angular"
    },
    {
        id: 4,
        title: "Data Analytics",
        description: "Transform raw data into meaningful insights using Python, SQL, and modern BI tools.",
        image: "/images/home/t44.webp",
        path: "/training/data-analytics"
    },
    {
        id: 5,
        title: "AI/ML",
        description: "Deep dive into Artificial Intelligence and Machine Learning algorithms and real-world applications.",
        image: "/images/home/t5.webp",
        path: "/training/ai-ml"
    },
    {
        id: 6,
        title: "Automation Testing",
        description: "Learn to automate software testing processes using Selenium, Java, and modern frameworks.",
        image: "/images/home/t66.webp",
        path: "/training/automation-testing"
    },
    {
        id: 7,
        title: "AWS DevOps",
        description: "Master cloud infrastructure and CI/CD pipelines with Amazon Web Services and DevOps tools.",
        image: "/images/home/t7.webp",
        path: "/training/aws-devops"
    }
];

import Image from 'next/image';

const CourseCard = ({ course }) => {
    const router = useRouter();
    return (
        <div className="jg-course-card" onClick={() => router.push(course.path)} style={{ cursor: 'pointer' }}>
            <div className="jg-card-img-container">
                <Image 
                    src={course.image} 
                    alt={`${course.title} `} 
                    className="jg-card-img" 
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                />
                <div className="jg-card-glass-overlay">
                    <div className="jg-card-content-stack">
                        <div className="jg-card-title-box">
                            <h3 className="jg-card-title-text">{course.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CourseDetailPlaceholder = ({ name }) => {
    const router = useRouter();
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>{name} Page</h1>
            <p>This page is currently under development. Specific content will be added soon.</p>
            <button onClick={() => router.back()}>Go Back</button>
        </div>
    );
};


const FeatureSubtitles = () => {
    const features = [
        {
            title: "100+ Placements",
            icon: <FaRocket />,
            detail: "Top MNCs"
        },
        {
            title: "Live Projects",
            icon: <FaLaptopCode />,
            detail: "Industry Grade"
        },
        {
            title: "Mock Interviews",
            icon: <FaHandshake />,
            detail: "Career Ready"
        }
    ];

    return (
        <div className="jg-features-subtitles">
            {features.map((feature, idx) => (
                <div key={idx} className="jg-feature-subtitle-item">
                    <div className="jg-feature-subtitle-icon-wrapper">
                        {feature.icon}
                    </div>
                    <div className="jg-feature-subtitle-text">
                        <span className="jg-feature-subtitle-title">{feature.title}</span>
                        <span className="jg-feature-subtitle-detail">{feature.detail}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

import { motion } from "framer-motion";

const Courses = () => {
    const sliderRef = useRef(null);
    const [items, setItems] = useState([...coursesData, ...coursesData]); // Clone for infinite loop
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const requestRef = useRef();
    const speed = 1.0; // Pixels per frame

    // Viewport Visibility Observer: Only occupy CPU resources when element is in view!
    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            setIsVisible(true); // Fallback for legacy runtimes
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.05, rootMargin: '100px' } // Pre-warm the loop 100px before entry
        );

        const currentTrack = sliderRef.current;
        if (currentTrack) {
            observer.observe(currentTrack);
        }

        return () => {
            if (currentTrack) {
                observer.unobserve(currentTrack);
            }
        };
    }, []);

    // Highly optimized frame animation loop
    useEffect(() => {
        if (!isVisible || isPaused) {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }
            return;
        }

        const animate = () => {
            if (!sliderRef.current) return;
            const track = sliderRef.current;
            const scrollWidth = track.scrollWidth;

            track.scrollLeft += speed;

            // Infinite loop scroll resetting
            if (track.scrollLeft >= (scrollWidth / 2)) {
                track.scrollLeft = 0;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }
        };
    }, [isVisible, isPaused]);

    const checkScrollPosition = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const atStart = scrollLeft <= 1;
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1;
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
    };

    useEffect(() => {
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);

    const slideNext = () => {
        if (sliderRef.current) {
            const track = sliderRef.current;
            const firstCard = track.querySelector('.jg-course-card');
            if (firstCard) {
                const cardWidth = firstCard.getBoundingClientRect().width;
                const styles = window.getComputedStyle(track);
                const gap = parseFloat(styles.gap) || 20;
                const scrollStep = cardWidth + gap;

                if (isAtEnd) {
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const currentScroll = track.scrollLeft;
                    const nextTarget = Math.round((currentScroll + scrollStep) / scrollStep) * scrollStep;
                    track.scrollTo({ left: nextTarget, behavior: 'smooth' });
                }
            }
        }
    };

    const slidePrev = () => {
        if (sliderRef.current) {
            const track = sliderRef.current;
            const firstCard = track.querySelector('.jg-course-card');
            if (firstCard) {
                const cardWidth = firstCard.getBoundingClientRect().width;
                const styles = window.getComputedStyle(track);
                const gap = parseFloat(styles.gap) || 20;
                const scrollStep = cardWidth + gap;

                if (isAtStart) {
                    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
                } else {
                    const currentScroll = track.scrollLeft;
                    const prevTarget = Math.round((currentScroll - scrollStep) / scrollStep) * scrollStep;
                    track.scrollTo({ left: prevTarget, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <div
            className="jg-courses-section-wrapper"
        >
            <div className="jg-courses-main-content">
                <div 
                    className="jg-courses-header-container home-section-header"
                >
                    <h2 className="section-main-title text-shine">
                        100% Job Guaranteed Courses
                    </h2>
                    <FeatureSubtitles />
                </div>
                <div
                    className="jg-courses-slider-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button className={`jg-nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev} aria-label="Previous">❮</button>

                    <div className="jg-courses-glass-track-wrapper">
                        <div
                            className="jg-courses-scroll-track"
                            ref={sliderRef}
                            onScroll={checkScrollPosition}
                            style={{
                                scrollSnapType: isPaused ? 'x mandatory' : 'none',
                                scrollBehavior: isPaused ? 'smooth' : 'auto'
                            }}
                        >
                            {items.map((course, index) => (
                                <CourseCard key={`${course.id}-${index}`} course={course} />
                            ))}
                        </div>
                    </div>

                    <button className={`jg-nav-side-btn next ${isAtEnd ? 'is-disabled' : ''}`} onClick={slideNext} aria-label="Next">❯</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
