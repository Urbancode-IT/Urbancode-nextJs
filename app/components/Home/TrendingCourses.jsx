'use client';

import React, { useRef, useState, useEffect } from 'react';
import './TrendingCourses.css';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";

const courses = [
//       {
//   id: 1,
//   title: "Tamil New Year Special",
// //   duration: "3 Months",
//   description: "Wish you a very Happy Tamil New Year! Celebrate the spirit of new beginnings with our special course offerings. Embrace the joy of learning and growth this Tamil New Year with us!",
//   image: "/images/courses/tamilnewyear.jpg",
// },
 {
  id: 9,
  title: "Kids Web Design Summer Camp",
  duration: "3 Months",
  description: "Introduce kids to the exciting world of web design! Learn HTML, CSS, and basic design skills to create fun and interactive websites. Perfect for beginners to build creativity and confidence.",
  image: "/images/courses/web-design-kids.webp",
},
{
  id: 10,
  title: "Kids Python Programming Summer Camp",
  duration: "3 Months",
  description: "Make coding fun with Python! Kids will learn basic programming concepts, logic building, and create simple games and projects in an easy and engaging way.",
  image: "/images/courses/python-kids.webp",
},
{
  id: 11,
  title: "Data Analytics Summer Camp",
  duration: "3 Months",
  description: "Learn how to analyze data, create reports, and gain valuable insights using modern analytics tools. Students will explore data visualization, dashboards, and real-world business case studies in an easy-to-understand way.",
  image: "/images/courses/poster11.webp",
},
{
  id: 12,
  title: "Power Automate Summer Camp",
  duration: "3 Months",
  description: "Discover the power of automation with Microsoft Power Automate. Students will learn to create workflows, automate repetitive tasks, connect apps, and improve productivity through hands-on projects.",
  image: "/images/courses/poster12.webp",
},
{
  id: 13,
  title: "Generative AI Summer Camp",
  duration: "3 Months",
  description: "Explore the exciting world of Generative AI and learn how AI tools can create text, images, and smart solutions. Students will work on creative AI projects while understanding the basics of modern artificial intelligence.",
  image: "/images/courses/poster13.webp",
},
  
  {
    id: 2,
    title: "React JS + Next.js Development",
    duration: "3 Months",
    description: "Develop high-performance web applications using React and Next.js with modern UI, API integration, and best practices.",
    image: "/images/courses/poster2.webp",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    duration: "3 Months",
    description: "Master MongoDB, Express.js, React, and Node.js to build full-stack applications with real-time project experience.",
    image: "/images/courses/poster6.webp",
  },
  {
    id: 4,
    title: "Cloud Data Engineering",
    duration: "3 Months",
    description: "Learn Google Cloud, Airflow, MySQL, and Python to build scalable data pipelines and handle real-time data processing.",
    image: "/images/courses/poster3.webp",
  },
//   {
//     id: 5,
//     title: "Data Analyst",
//     duration: "3 Months",
//     description: "Analyze and visualize data using Excel, SQL, Power BI, and Python. Work on real-time datasets and business insights.",
//     image: "/images/courses/poster4.webp",
//   },
  {
    id: 6,
    title: ".NET + Angular Development",
    duration: "3 Months",
    description: "Combine C# .NET backend with Angular frontend to build scalable enterprise-level web applications.",
    image: "/images/courses/poster5.webp",
  },
//    {
//   id: 7,
//   title: "Generative AI Development",
//   duration: "3 Months",
//   description: "Learn to build intelligent AI applications using Generative AI, LLMs, and modern tools like OpenAI, LangChain, and Python. Create chatbots, AI assistants, and real-world AI solutions.",
//   image: "/images/courses/gen-ai-poster.webp",
// },
// {
//     id: 8,
//     title: "Mobile App Development (Android & iOS)",
//     duration: "3 Months",
//     description: "Build cross-platform mobile apps using React Native. Create real-world applications with a single JavaScript codebase.",
//     image: "/images/courses/poster1.webp",
//   },

 

];

import { motion } from 'framer-motion';

import Image from 'next/image';

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
        <motion.div 
            className="trending-section-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="trending-header text-center mb-5">
                <h2 className="section-main-title text-shine">Featured Courses</h2>
            </div>

            <motion.div
                className="trending-slider-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button className={`nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev}>&lt;</button>

                <div className="trending-scroll-track" ref={sliderRef} onScroll={checkScrollPosition}>
                    {courses.map((course) => (
                        <div 
                           key={course.id} 
                           className={`trending-course-card ${[9, 10].includes(course.id) ? 'special-highlight' : ''}`} 
                           onClick={() => setSelectedCourse(course)}
                        >
                            {[9, 10].includes(course.id) && (
                                <div className="special-badge"></div>
                            )}
                            <div className="trending-image-box">
                                <Image 
                                    src={course.image} 
                                    alt={`${course.title} Training in Chennai`} 
                                    className="trending-image-fg" 
                                    width={300}
                                    height={400}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="card-hover-overlay">
                                    <span>View Details</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className={`nav-side-btn next ${isAtEnd ? 'is-disabled' : ''}`} onClick={slideNext}>&gt;</button>
            </motion.div>

            {selectedCourse && (
                <div className="trending-modal-backdrop" onClick={() => setSelectedCourse(null)}>
                    <div className="trending-modal-body" onClick={(e) => e.stopPropagation()}>
                        <button className="trending-modal-close" onClick={() => setSelectedCourse(null)}>&times;</button>
                        <div className="trending-modal-content">
                            <div className="trending-modal-media">
                                <Image 
                                    src={selectedCourse.image} 
                                    alt={`${selectedCourse.title} - Urbancode Edutech`} 
                                    width={400}
                                    height={500}
                                    style={{ objectFit: 'cover', borderRadius: '12px' }}
                                />
                            </div>
                            <div className="trending-modal-info">
                                <h3>{selectedCourse.title}</h3>
                                {selectedCourse.duration && (
                                  <div className="info-meta">
                                      <span><strong>Duration:</strong> {selectedCourse.duration}</span>
                                  </div>
                                )}
                                <p>{selectedCourse.description}</p>
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
                courseName={selectedCourse?.title || "Trending Course"}
            />
        </motion.div>
    );
};

export default TrendingCourses;
