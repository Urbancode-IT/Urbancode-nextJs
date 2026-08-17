'use client';

import React, { useRef, useState, useEffect } from 'react';
import './TrendingCourses.css';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: "AI & Machine Learning",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "Don't just use AI — learn how AI works. Build the skills behind intelligent applications using Python, Machine Learning, Deep Learning, and NLP.",
    tools: ["Python", "Machine Learning", "Deep Learning", "NLP", "TensorFlow", "Keras"],
    highlights: [
      "Practical AI skills with industry tools",
      "TensorFlow, PyTorch, Keras & more",
      "Build real-world AI projects",
      "100% Placement Support"
    ],
    image: "/images/home/posters/AI-&-ML-poster-independence-theme-9,16.webp",
  },
  {
    id: 2,
    title: "Automation Testing",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "Upgrade from Manual to Automation Testing. Build practical automation skills with Java Selenium, Playwright, Maven, and Jenkins.",
    tools: ["Java Selenium", "Playwright", "Maven", "Jenkins"],
    highlights: [
      "Test Smarter. Automate Faster.",
      "Java Selenium & Playwright",
      "CI/CD with Maven & Jenkins",
      "Grow Your Career"
    ],
    image: "/images/home/posters/Automation-testing--independence-theme-poster-9,16.webp",
  },
  {
    id: 3,
    title: "AWS + DevOps",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "Building an application is one thing. Deploying and scaling it is another. Learn modern Cloud & DevOps practices with AWS, Docker, and Kubernetes.",
    tools: ["AWS", "DevOps", "Docker", "Kubernetes"],
    highlights: [
      "Master the Cloud",
      "Automate the Workflow",
      "Docker & Kubernetes",
      "Real-world Deployments"
    ],
    image: "/images/home/posters/independence-theme-AWS-poster-9,16.webp",
  },
  {
    id: 4,
    title: "Data Analytics",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "Data is everywhere. But can you turn it into decisions? Learn to transform raw data into actionable insights using Power BI, Tableau, Databricks, and Matplotlib.",
    tools: ["Power BI", "Tableau", "Databricks", "Matplotlib"],
    highlights: [
      "Data -> Insights -> Better Decisions",
      "Power BI & Tableau Dashboards",
      "Real business datasets",
      "Interview & Placement support"
    ],
    image: "/images/home/posters/independence-theme-Data-Analytics-poster-9,16.webp",
  },
  {
    id: 5,
    title: "Data Engineering",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "Data Analysts need data. But who builds the systems behind it? Learn how modern data platforms are built with Azure, Apache Spark, MySQL, and PySpark.",
    tools: ["Azure", "Apache Spark", "MySQL", "PySpark"],
    highlights: [
      "Build Data Infrastructure",
      "Azure & Apache Spark",
      "PySpark & MySQL pipelines",
      "Modern Business systems"
    ],
    image: "/images/home/posters/independence-theme-Data-Engineering-poster-9,16.webp",
  },
  {
    id: 6,
    title: "MERN Stack Development",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "You know coding. But can you build a complete application? Build modern, real-world web applications with MERN Stack — MongoDB, Express.js, React.js, Node.js.",
    tools: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlights: [
      "Frontend + Backend + Database",
      "Full-Stack Skills",
      "Real-world project builds",
      "Job-ready portfolio"
    ],
    image: "/images/home/posters/MERN-poster-independence-theme-9,16.webp",
  },
  {
    id: 7,
    title: "Power Automate",
    duration: "2 Months",
    badge: "FREEDOM SALE",
    description: "Master Microsoft Power Automate and build real-world workflows that drive productivity. Automate repetitive tasks, build approval workflows, and work with real business use cases.",
    tools: ["Power Automate", "Microsoft 365", "Power Apps", "SharePoint"],
    highlights: [
      "Automate repetitive tasks",
      "Build Approval Workflows",
      "Work with Real business use cases",
      "Microsoft ecosystem integration"
    ],
    image: "/images/home/posters/independence-theme-Power-Automate-poster-9,16.webp",
    // comingSoonImage: true,
  },
  {
    id: 8,
    title: ".NET + Angular",
    duration: "3 Months",
    badge: "FREEDOM SALE",
    description: "Combine the power of C# .NET backend with Angular frontend to build scalable enterprise-level web applications used in top MNCs worldwide.",
    tools: ["C# .NET", "Angular", "SQL Server", "REST APIs"],
    highlights: [
      "Enterprise-grade web apps",
      "C# .NET + Angular full-stack",
      "REST API development",
      "MNC-ready skills"
    ],
    image:  "/images/home/posters/independence-theme-.Net-Angular-poster-9,16.webp",
    // comingSoonImage: true,
  },
];

const TrendingCourses = () => {
    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);

    const checkScrollPosition = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const atStart = scrollLeft <= 1;
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1;
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
    };

    const slideNext = () => {
        if (sliderRef.current) {
            if (isAtEnd) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: 310, behavior: 'smooth' });
            }
        }
    };

    const slidePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -310, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && !selectedCourse && !showEnquiry) {
                slideNext();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isAtEnd, isPaused, selectedCourse, showEnquiry]);

    const handleEnrollClick = () => {
        setShowEnquiry(true);
    };

    return (
        <div className="trending-section-container">
            <div className="trending-header text-center mb-5">
                <h2 className="section-main-title text-shine">Featured Courses</h2>
            </div>

            <div
                className="trending-slider-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <button className={`nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev}>&lt;</button>

                <div className="trending-scroll-track" ref={sliderRef} onScroll={checkScrollPosition}>
                    {courses.map((course) => (
                        <div
                           key={course.id}
                           className="trending-course-card freedom-highlight"
                           onClick={() => setSelectedCourse(course)}
                        >
                            <div className="freedom-badge"></div>

                            <div className="trending-image-box">
                                {course.image ? (
                                    <Image
                                        src={course.image}
                                        alt={`${course.title} Training in Chennai`}
                                        className="trending-image-fg"
                                        width={280}
                                        height={400}
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div className="coming-soon-placeholder">
                                        <div className="cs-icon">🎯</div>
                                        <div className="cs-course-name">{course.title}</div>
                                        <div className="cs-label">Poster Coming Soon</div>
                                        <div className="cs-tools">
                                            {course.tools.map((tool, i) => (
                                                <span key={i} className="cs-tool-tag">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="card-hover-overlay">
                                    <span>View Details</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className={`nav-side-btn next ${isAtEnd ? 'is-disabled' : ''}`} onClick={slideNext}>&gt;</button>
            </div>

            {selectedCourse && (
                <div className="trending-modal-backdrop" onClick={() => setSelectedCourse(null)}>
                    <div className="trending-modal-body" onClick={(e) => e.stopPropagation()}>
                        <button className="trending-modal-close" onClick={() => setSelectedCourse(null)}>&times;</button>
                        <div className="trending-modal-content">
                            <div className="trending-modal-media">
                                {selectedCourse.image ? (
                                    <Image
                                        src={selectedCourse.image}
                                        alt={`${selectedCourse.title} - Urbancode Edutech`}
                                        width={400}
                                        height={600}
                                        style={{ objectFit: 'cover', borderRadius: '20px 0 0 20px', width: '100%', height: '100%' }}
                                    />
                                ) : (
                                    <div className="modal-cs-placeholder">
                                        <div className="mcs-icon">🎯</div>
                                        <div className="mcs-name">{selectedCourse.title}</div>
                                        <div className="mcs-label">Poster Coming Soon</div>
                                    </div>
                                )}
                            </div>
                            <div className="trending-modal-info">
                                <div className="modal-freedom-tag">&#127470;&#127475; FREEDOM SALE</div>
                                <h3>{selectedCourse.title}</h3>
                                {selectedCourse.duration && (
                                  <div className="info-meta">
                                      <span><strong>Duration:</strong> {selectedCourse.duration}</span>
                                  </div>
                                )}
                                <p>{selectedCourse.description}</p>

                                {selectedCourse.highlights && (
                                    <ul className="modal-highlights">
                                        {selectedCourse.highlights.map((h, i) => (
                                            <li key={i}><span className="highlight-dot">&#10022;</span> {h}</li>
                                        ))}
                                    </ul>
                                )}

                                {selectedCourse.tools && (
                                    <div className="modal-tools">
                                        {selectedCourse.tools.map((tool, i) => (
                                            <span key={i} className="modal-tool-tag">{tool}</span>
                                        ))}
                                    </div>
                                )}

                                <div className="trending-modal-btns">
                                    <button className="trending-enroll-trigger" onClick={handleEnrollClick}>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <EnquiryFormModal
                isOpen={showEnquiry}
                onClose={() => setShowEnquiry(false)}
                courseName={selectedCourse?.title || "Freedom Sale Course"}
                useCourseEnquiryApi={true}
            />
        </div>
    );
};

export default TrendingCourses;
