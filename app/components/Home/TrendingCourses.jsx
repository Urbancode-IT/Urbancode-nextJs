'use client';

import React, { useRef, useState, useEffect } from 'react';
import './TrendingCourses.css';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";

const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    duration: "12 Weeks",
    description: "Master advanced React concepts like Render Props, HOCs, and the latest Hooks patterns for scalable applications.",
    image: "/images/courses/React-1.webp",
  },
  {
    id: 2,
    title: "Java Programming Masterclass",
    duration: "10 Weeks",
    description: "Learn Java from scratch to advanced level, including OOPS, Collections, and Multi-threading.",
    image: "/images/courses/Java-1.webp",
  },
  {
    id: 3,
    title: "Fullstack MERN Development",
    duration: "15 Weeks",
    description: "Build complete web applications using MongoDB, Express, React, and Node.js.",
    image: "/images/courses/MERN.webp",
  },
  {
    id: 4,
    title: "AWS Cloud Architecture",
    duration: "14 Weeks",
    description: "Scale your applications globally using AWS, Azure, and modern DevOps practices.",
    image: "/images/courses/AWSNEW.webp",
  },
  {
    id: 5,
    title: "Business English Masterclass",
    duration: "8 Weeks",
    description: "Improve your professional communication, presentation, and writing skills for a global career.",
    image: "/images/courses/EnglishLanguagess.webp",
  },
  {
    id: 6,
    title: "Data Analytics with Power BI",
    duration: "6 Weeks",
    description: "Transform raw data into beautiful, interactive, and insightful web visualizations using Power BI.",
    image: "/images/courses/PowerBII.webp",
  },
  {
    id: 7,
    title: "Microsoft SharePoint Master",
    duration: "9 Weeks",
    description: "Master document management, collaboration, and intranet solutions using SharePoint Online.",
    image: "/images/courses/SharePoint.webp",
  },
  {
    id: 8,
    title: "Professional Software Testing",
    duration: "11 Weeks",
    description: "Learn manual and automated testing, bug tracking, and quality assurance best practices.",
    image: "/images/courses/SoftwareTestingg.webp",
  },
  {
    id: 9,
    title: "Enterprise .NET Core",
    duration: "13 Weeks",
    description: "Build robust, cross-platform enterprise applications using C# and the .NET Core framework.",
    image: "/images/courses/Net.webp",
  },
  {
    id: 10,
    title: "React Native Full Stack",
    duration: "16 Weeks",
    description: "Develop high-performance, native-like mobile applications for iOS and Android using React Native and a Node.js backend.",
    image: "/images/courses/React2.webp",
  }
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
        sliderRef.current.scrollBy({ left: 290, behavior: 'smooth' }); // 260 + 30
      }
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -290, behavior: 'smooth' });
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
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [isAtEnd, isPaused, selectedCourse, showEnquiry]);

  const handleEnrollClick = () => {
    setShowEnquiry(true);
  };

  return (
    <div className="trending-section-container">
      <div className="trending-header">
        <h2>Exciting offers</h2>
      </div>

      <div
        className="trending-slider-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className={`nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev}>&lt;</button>

        <div className="trending-scroll-track" ref={sliderRef} onScroll={checkScrollPosition}>
          {courses.map((course) => (
            <div key={course.id} className="trending-course-card" onClick={() => setSelectedCourse(course)}>
              <div className="trending-image-box">
                <img src={course.image} alt={course.title} />
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
                <img src={selectedCourse.image} alt={selectedCourse.title} />
              </div>
              <div className="trending-modal-info">
                <h3>{selectedCourse.title}</h3>
                <div className="info-meta">
                  <span><strong>Duration:</strong> {selectedCourse.duration}</span>
                </div>
                <p>{selectedCourse.description}</p>
                <button className="trending-enroll-trigger" onClick={handleEnrollClick}>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      <EnquiryFormModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        courseName={selectedCourse?.title || "Trending Course"}
      />
    </div>
  );
};

export default TrendingCourses;
