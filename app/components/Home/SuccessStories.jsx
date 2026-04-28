"use client";

import React, { useRef, useEffect, useState } from "react";
import "./SuccessStories.css";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const successStoriesData = [
  {
    id: 1,
    name: "Arjun Krishnan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    previousRole: "Junior Developer",
    currentRole: "SDE-II",
    company: "Zoho",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Zoho_logo.svg", 
    review: "The MERN Stack course completely transformed my career. I went from a basic web developer to landing a role at Zoho within 3 months of completing the course.",
    course: "MERN Stack Development",
    package: "₹8.5 LPA",
    transition: "120% Hike"
  },
  {
    id: 2,
    name: "Priya Sundaram",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    previousRole: "Fresh Graduate",
    currentRole: "Data Analyst",
    company: "Capgemini",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
    review: "Data Analytics course was incredibly hands-on. The Power BI projects we built directly helped me in my interviews. Urbancode's placement support is unmatched.",
    course: "Data Analytics & BI",
    package: "₹7.2 LPA",
    transition: "Dream Placement"
  },
  {
    id: 3,
    name: "Rahul Vijayan",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    previousRole: "System Admin",
    currentRole: "DevOps Engineer",
    company: "Infosys",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    review: "AWS DevOps certification from Urbancode opened doors I never imagined. The live project experience gave me a real edge over other candidates.",
    course: "AWS DevOps & Cloud",
    package: "₹9.0 LPA",
    transition: "Career Pivot"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    previousRole: "Manual Tester",
    currentRole: "Frontend Engineer",
    company: "TCS",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    review: "The React.js modules were top-notch. The instructors guide you through real-world scenarios. Got placed as a Frontend Engineer easily.",
    course: "MERN Stack Development",
    package: "₹6.5 LPA",
    transition: "Role Transition"
  },
  {
    id: 5,
    name: "Vikram Singh",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    previousRole: "Technical Support",
    currentRole: "QA Automation",
    company: "Cognizant",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
    review: "Software Testing course covered everything from manual to automation with Selenium. It really helped me clear my technical rounds.",
    course: "Software Testing Automation",
    package: "₹5.5 LPA",
    transition: "100% Hike"
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
      const gap = 24;
      
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector('.success-card');
      const cardWidth = card ? card.offsetWidth : 380;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector('.success-card');
      const cardWidth = card ? card.offsetWidth : 380;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section className="success-stories-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-main-title text-shine">
            Real Careers, Real Transitions
          </h2>
          <p className="section-subtitle">See how our graduates transformed their careers in Chennai's IT landscape.</p>
        </div>

        <div 
          className="slider-container-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button className="slider-nav-btn left" onClick={scrollLeft} aria-label="Scroll left">
            <ChevronLeft size={20} />
          </button>
          
          <div className="success-cards-container" ref={scrollContainerRef}>
            {successStoriesData.map((story) => (
              <div key={story.id} className="success-card">
                <div className="success-card-top">
                  <div className="success-avatar-wrapper">
                    <Image 
                      src={story.avatar} 
                      alt={story.name} 
                      width={80} 
                      height={80} 
                      className="success-avatar-img"
                    />
                    {story.transition && (
                      <span className="success-transition-badge">{story.transition}</span>
                    )}
                  </div>
                  <div className="success-header-text">
                    <h3 className="success-student-name">{story.name}</h3>
                    <p className="success-course-label">{story.course}</p>
                  </div>
                </div>

                <div className="success-career-path">
                  <div className="path-item">
                    <span className="path-label">PREVIOUSLY</span>
                    <span className="path-value">{story.previousRole}</span>
                  </div>
                  <div className="path-arrow">→</div>
                  <div className="path-item">
                    <span className="path-label">HIRED AS</span>
                    <span className="path-value highlight">{story.currentRole}</span>
                  </div>
                </div>
                
                <div className="success-card-body">
                  <Quote className="success-quote-icon" size={16} />
                  <p className="success-student-review">{story.review}</p>
                </div>

                <div className="success-card-footer">
                  <div className="success-company-box">
                    <img src={story.companyLogo} alt={story.company} className="success-company-logo" />
                  </div>
                  <div className="success-package-box">
                    <span className="package-val">{story.package}</span>
                    <span className="package-lab">Salary Package</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-nav-btn right" onClick={scrollRight} aria-label="Scroll right">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="success-progress-indicator">
          <div className="progress-bar-track">
            <div className="progress-bar-fill"></div>
          </div>
          <span className="progress-text">Empowering dreams across Chennai</span>
        </div>
      </div>
    </section>
  );
}
