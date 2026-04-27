"use client";

import React, { useRef, useEffect, useState } from "react";
import "./SuccessStories.css";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const successStoriesData = [
  {
    id: 1,
    name: "Arjun Krishnan",
    initials: "AK",
    role: "Full Stack Developer",
    company: "Zoho Corporation",
    companyLogo: "🏢", 
    review: "The MERN Stack course completely transformed my career. I went from a basic web developer to landing a role at Zoho within 3 months of completing the course.",
    course: "MERN Stack — 2024 Batch",
    package: "₹8.5 LPA",
    videoSrc: "/videos/testimonial3.mp4"
  },
  {
    id: 2,
    name: "Priya Sundaram",
    initials: "PS",
    role: "Data Analyst",
    company: "Capgemini",
    companyLogo: "🏢",
    review: "Data Analytics course was incredibly hands-on. The Power BI projects we built directly helped me in my interviews. Urbancode's placement support is unmatched.",
    course: "Data Analytics — 2024 Batch",
    package: "₹7.2 LPA",
    videoSrc: "/videos/testimonial2.mp4"
  },
  {
    id: 3,
    name: "Rahul Vijayan",
    initials: "RV",
    role: "Cloud DevOps Engineer",
    company: "Infosys",
    companyLogo: "🏢",
    review: "AWS DevOps certification from Urbancode opened doors I never imagined. The live project experience gave me a real edge over other candidates in the interview.",
    course: "AWS DevOps — 2023 Batch",
    package: "₹9.0 LPA",
    videoSrc: "/videos/testimonial1.mp4"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    initials: "SR",
    role: "Frontend Engineer",
    company: "TCS",
    companyLogo: "🏢",
    review: "The React.js modules were top-notch. The instructors guide you through real-world scenarios. Got placed as a Frontend Engineer easily.",
    course: "MERN Stack — 2024 Batch",
    package: "₹6.5 LPA",
    videoSrc: "/videos/kids-testimonial-video1.mp4"
  },
  {
    id: 5,
    name: "Vikram Singh",
    initials: "VS",
    role: "Software Tester",
    company: "Cognizant",
    companyLogo: "🏢",
    review: "Software Testing course covered everything from manual to automation with Selenium. It really helped me clear my technical rounds.",
    course: "Software Testing — 2023 Batch",
    package: "₹5.5 LPA",
    videoSrc: "/videos/testimonial1.mp4"
  },
  {
    id: 6,
    name: "Ananya Patel",
    initials: "AP",
    role: "Python Developer",
    company: "Wipro",
    companyLogo: "🏢",
    review: "Python development was made so easy to understand. The Django projects were the highlight of my resume during the campus drive.",
    course: "Python Full Stack — 2024 Batch",
    package: "₹7.0 LPA",
    videoSrc: "/videos/testimonial2.mp4"
  },
  {
    id: 7,
    name: "Karthik Raj",
    initials: "KR",
    role: "Backend Developer",
    company: "HCLTech",
    companyLogo: "🏢",
    review: "Node.js and MongoDB concepts were taught beautifully. The placement cell scheduled multiple interviews until I secured my dream job.",
    course: "MERN Stack — 2023 Batch",
    package: "₹8.0 LPA",
    videoSrc: "/videos/testimonial3.mp4"
  },
  {
    id: 8,
    name: "Neha Sharma",
    initials: "NS",
    role: "Data Scientist",
    company: "Tech Mahindra",
    companyLogo: "🏢",
    review: "The Machine Learning models and Data Science concepts were explained from scratch. Mock interviews boosted my confidence immensely.",
    course: "Data Science — 2024 Batch",
    package: "₹10.5 LPA",
    videoSrc: "/videos/testimonial1.mp4"
  },
  {
    id: 9,
    name: "Mohammad Ali",
    initials: "MA",
    role: "Cloud Architect",
    company: "Accenture",
    companyLogo: "🏢",
    review: "Excellent AWS training with hands-on labs. The certification helped me negotiate a higher salary and secure a senior role.",
    course: "AWS DevOps — 2023 Batch",
    package: "₹12.0 LPA",
    videoSrc: "/videos/testimonial2.mp4"
  },
  {
    id: 10,
    name: "Pooja Desai",
    initials: "PD",
    role: "UI/UX Designer",
    company: "IBM",
    companyLogo: "🏢",
    review: "The design principles and Figma practicals were amazing. My portfolio was so strong that I got hired immediately after the course.",
    course: "Web Development — 2024 Batch",
    package: "₹6.8 LPA",
    videoSrc: "/videos/testimonial3.mp4"
  },
  {
    id: 11,
    name: "Ravi Kumar",
    initials: "RK",
    role: "Full Stack Developer",
    company: "Mindtree",
    companyLogo: "🏢",
    review: "Urbancode's MERN stack curriculum is perfectly aligned with industry needs. The 100% placement assistance is genuine and effective.",
    course: "MERN Stack — 2024 Batch",
    package: "₹7.5 LPA",
    videoSrc: "/videos/testimonial1.mp4"
  },
  {
    id: 12,
    name: "Divya Nair",
    initials: "DN",
    role: "Business Analyst",
    company: "LTI Mindtree",
    companyLogo: "🏢",
    review: "The Data Analytics course gave me the SQL and Tableau skills needed to transition from a non-IT background to a core IT role.",
    course: "Data Analytics — 2023 Batch",
    package: "₹8.2 LPA",
     videoSrc: "/videos/testimonial1.mp4"
  },
  {
    id: 13,
    name: "Suresh Babu",
    initials: "SB",
    role: "Software Engineer",
    company: "Amazon",
    companyLogo: "🏢",
    review: "The advanced problem-solving sessions and data structures focus completely changed my coding approach. Forever grateful to the mentors.",
    course: "Python Full Stack — 2024 Batch",
    package: "₹15.0 LPA",
    videoSrc: "/videos/testimonial1.mp4"
  }
];

export default function SuccessStories() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const interval = setInterval(() => {
      const card = container.querySelector('.success-card');
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 30;
      
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector('.success-card');
      const cardWidth = card ? card.offsetWidth : 380;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 30), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector('.success-card');
      const cardWidth = card ? card.offsetWidth : 380;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 30, behavior: 'smooth' });
    }
  };

  return (
    <section className="success-stories-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-main-title text-shine">
            Success Stories
          </h2>
        </div>

        <div 
          className="slider-container-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button className="slider-btn left-btn" onClick={scrollLeft} aria-label="Scroll left">
            <ChevronLeft size={24} />
          </button>
          
          <div className="success-cards-container" ref={scrollContainerRef}>
            {successStoriesData.map((story) => (
              <div key={story.id} className="success-card">
                <div className="success-card-header">
                  <div className="student-avatar">
                    {story.initials}
                  </div>
                  <div className="student-info">
                    <h3 className="student-name">{story.name}</h3>
                    <p className="student-role">{story.role}</p>
                    <div className="company-badge">
                      <span className="company-icon">{story.companyLogo}</span>
                      <span className="company-name">{story.company}</span>
                    </div>
                  </div>
                </div>
                
                {story.videoSrc && (
                  <div className="success-card-video-container">
                    <video 
                        src={story.videoSrc + "#t=0.5"} 
                        controls 
                        playsInline
                        preload="metadata"
                        className="success-video"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <div className="success-card-body">
                  <Quote className="quote-icon" size={20} fill="var(--color-brand)" stroke="none" />
                  <p className="student-review">{story.review}</p>
                </div>

                <div className="success-card-footer">
                  <div className="course-info">
                    <span className="course-icon">📚</span>
                    <span className="course-name">{story.course}</span>
                  </div>
                  <div className="package-info">
                    <span className="package-label">Package secured</span>
                    <span className="package-value">{story.package}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn right-btn" onClick={scrollRight} aria-label="Scroll right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
