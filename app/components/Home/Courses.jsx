"use client";
import React, { useRef, useState, useEffect } from 'react';
import './courses.css';
import { useRouter } from 'next/navigation';

const coursesData = [
    {
        id: 1,
        title: "Fullstack Development",
        description: "Full Stack Development covers both frontend and backend to build complete, scalable web applications.",
        image: "/images/home/p1.webp",
        logo: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        ],
        path: "/courses/web-and-app-development"
    },
    {
        id: 2,
        title: "MERN Stack",
        description: "MERN Stack is a powerful full-stack JavaScript technology for building modern web applications.",
        image: "/images/home/p2.webp",
        logo: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        ],
        path: "/courses/web-and-app-development"
    },
    {
        id: 3,
        title: "AWS",
        description: "AWS is a cloud platform that provides scalable computing, storage, and services to build and deploy applications.",
        image: "/images/home/p3.webp",
        logo: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"],
        path: "/courses/cloud-and-devops"
    },
    {
        id: 4,
        title: "Data Science",
        description: "Data Science combines statistics, data analysis, and machine learning to understand and analyze actual phenomena.",
        image: "/images/home/p4.webp",
        logo: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        ],
        path: "/courses/data-science"
    },
    {
        id: 5,
        title: "UI/UX Design",
        description: "UI/UX Design focuses on creating interfaces that look good and offer a seamless user experience.",
        image: "/images/home/p5.webp",
        logo: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"],
        path: "/courses/ui-ux-designing"
    },
    {
        id: 6,
        title: "DevOps",
        description: "DevOps focuses on automating development, deployment, and infrastructure to deliver applications faster and more reliably.",
        image: "/images/home/p6.webp",
        logo: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"],

        path: "/courses/cloud-and-devops"
    },
    {
        id: 7,
        title: "Python Programming",
        description: "Learn Python for web development, data analysis, usage in AI and scientific computing.",
        image: "/images/home/p7.webp",
        logo: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
        path: "/courses/programming-languages"
    }
];

const CourseCard = ({ course }) => {
    const router = useRouter();
    return (
        <div className="course-card" onClick={() => router.push(course.path)} style={{ cursor: 'pointer' }}>
            <div className="card-image-container">
                <img src={course.image} alt={course.title} className="card-image" />
                <div className="glass-overlay">
                    <div className="card-content-wrapper">
                        <div className="title-container">
                            <h3 className="card-title">{course.title}</h3>
                        </div>
                        <div className="card-footer-row">
                            <div className="card-logo-row">
                                {course.logo.map((logoUrl, index) => (
                                    <div key={index} className="logo-container">
                                        <img src={logoUrl} alt="logo" className="card-logo" />
                                    </div>
                                ))}
                            </div>
                            <div className="card-arrow">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
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

const Courses = () => {
    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const checkScrollPosition = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const atStart = scrollLeft <= 1;
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1;
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            slideNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, isAtEnd]);

    const slideNext = () => {
        if (sliderRef.current) {
            if (isAtEnd) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: 321, behavior: 'smooth' });
            }
        }
    };

    const slidePrev = () => {
        if (sliderRef.current) {
            if (isAtStart) {
                sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: -321, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="placement-container-wrapper">
            <div className="placement-content">
                <div className="left-text-section">
                    <h2>
                        100% <br />
                        Placement <br />
                        Courses
                    </h2>
                </div>
                <div
                    className="courses-slider-wrapper"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="courses-slider-container">
                        <div
                            className="courses-track"
                            ref={sliderRef}
                            onScroll={checkScrollPosition}
                        >
                            {coursesData.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </div>
                    <div className="navigation-controls">
                        <div className="prev-btn-placeholder">
                            <button className="nav-btn prev-btn" onClick={slidePrev}>
                                &lt;
                            </button>
                        </div>
                        <div className="progress-bar-container">
                            <div className={`progress-line ${isAtStart ? 'active' : ''}`}></div>
                            <div className={`progress-line ${!isAtStart ? 'active' : ''}`}></div>
                        </div>
                        <button
                            className="nav-btn next-btn"
                            onClick={slideNext}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
