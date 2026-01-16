"use client";
import React, { useRef, useState, useEffect } from 'react';
import './courses.css';
import { useRouter } from 'next/navigation';

const coursesData = [
    {
        id: 1,
        title: "MERN Stack",
        description: "Master MongoDB, Express.js, React, and Node.js for complete full-stack JavaScript applications.",
        image: "/images/home/t1.webp",
        path: "/training/mern-stack"
    },
    {
        id: 2,
        title: "MEAN Stack",
        description: "Build robust web applications using MongoDB, Express.js, Angular, and Node.js.",
        image: "/images/home/t2.webp",
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
        image: "/images/home/t4.webp",
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
        image: "/images/home/t6.webp",
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

const CourseCard = ({ course }) => {
    const router = useRouter();
    return (
        <div className="jg-course-card" onClick={() => router.push(course.path)} style={{ cursor: 'pointer' }}>
            <div className="jg-card-img-container">
                <img src={course.image} alt={course.title} className="jg-card-img" />
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


const MiniFeatureBox = () => {
    const features = [
        {
            title: "800+ Placements",
            text: "Successful career transitions into top MNCs like Zoho & Amazon.",
            icon: "🚀"
        },
        {
            title: "Live Projects",
            text: "Gain hands-on experience with 10+ real-world industry projects.",
            icon: "💻"
        },
        {
            title: "Mock Interviews",
            text: "Dedicated personality development and interview prep sessions.",
            icon: "🤝"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="jg-mini-feature-box">
            <div className="jg-feature-inner">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`jg-feature-slide ${idx === activeIndex ? 'active' : ''}`}
                    >
                        <span className="jg-feature-icon">{feature.icon}</span>
                        <div className="jg-feature-content">
                            <h4 className="jg-feature-title">{feature.title}</h4>
                            <p className="jg-feature-text">{feature.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="jg-feature-indicators">
                {features.map((_, idx) => (
                    <div
                        key={idx}
                        className={`jg-feature-dot ${idx === activeIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
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
            const firstCard = sliderRef.current.querySelector('.jg-course-card');
            const cardWidth = firstCard ? firstCard.clientWidth : 300;
            const gap = 20;
            const scrollAmount = cardWidth + gap;

            if (isAtEnd) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const slidePrev = () => {
        if (sliderRef.current) {
            const firstCard = sliderRef.current.querySelector('.jg-course-card');
            const cardWidth = firstCard ? firstCard.clientWidth : 300;
            const gap = 20;
            const scrollAmount = cardWidth + gap;

            if (isAtStart) {
                sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="jg-courses-section-wrapper">
            <div className="jg-courses-main-content">
                <div className="jg-courses-text-container">
                    <h2 className="jg-courses-title text-shine">
                        100% <br />
                        Job Guarantee <br />
                        Courses
                    </h2>
                    <MiniFeatureBox />
                </div>
                <div
                    className="jg-courses-slider-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button className={`jg-nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev}>&lt;</button>

                    <div className="jg-courses-glass-track-wrapper">
                        <div
                            className="jg-courses-scroll-track"
                            ref={sliderRef}
                            onScroll={checkScrollPosition}
                        >
                            {coursesData.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </div>

                    <button className={`jg-nav-side-btn next ${isAtEnd ? 'is-disabled' : ''}`} onClick={slideNext}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
