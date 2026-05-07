"use client";

import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventsSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const events = [
  {
    id: 1,
    title: "Emerging Trends in Business AI",
    description: "Students explored how AI is reshaping modern business workflows, decision-making, automation, and the future of work across industries.",
    date: "September 16, 2025",
    location: "St Joseph's College Of Engineering, Chennai",
    badge: "Seminar",
    attendees: "180+",
    img: "/images/events/event5.jpg",
  },
  {
    id: 2,
    title: "BB GRAND MEET UP 2025",
    description: "A complete guide for final-year students to prepare for interviews, improve resumes, and approach companies effectively.",
    date: "April 21, 2025",
    location: "Guindy, Chennai – The Ramada Plaza",
    badge: "Workshop",
    attendees: "150+",
    img: "/images/events/event1.jpg",
  },
  {
    id: 3,
    title: "Workshop & Seminars",
    description: "Industry experts shared insights on skill trends, future job roles, and the importance of personal branding in careers.",
    date: "Jun 15, 2024",
    location: "SIMATS Engineering, Thandalam – 602105",
    badge: "Seminar",
    attendees: "200+",
    img: "/images/events/event4.png",
  },
  {
    id: 4,
    title: "Urbancode AI Workshop",
    description: "Students worked on live startup ideas with mentors guiding them through business models, pitch decks, and funding basics.",
    date: "March 19, 2024",
    location: "Kings Engineering College, Sriperumbudur",
    badge: "Bootcamp",
    attendees: "90+",
    img: "/images/events/event3.jpg",
  },
];

const EventSection = () => {
  const container = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".stacked-event-card");
    const indicator = document.querySelector(".scroll-stack-indicator");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${events.length * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    tl.to(indicator, { opacity: 0, y: 30, duration: 0.2 }, 0);

    cards.forEach((card, i) => {
      if (i === 0) return;

      tl.fromTo(card, 
        { 
          y: "110vh",
          scale: 0.9,
          opacity: 0,
          rotateX: -10,
        },
        { 
          y: "0%",
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power2.out",
        },
        i * 0.8
      );

      if (i > 0) {
        tl.to(cards[i-1], {
          scale: 0.85,
          opacity: 0.4,
          filter: "blur(8px)",
          duration: 1,
          ease: "power2.inOut"
        }, i * 0.8);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="event-stacked-pin-section">
      <div className="container h-100 p-0 position-relative d-flex flex-column align-items-center justify-content-center">
        
        <div className="event-header-overlay">
          <h2 className="section-main-title">
            <span style={{ color: 'var(--color-text)' }}>Campus</span>{" "}
            <span className="text-shine">Events We Conducted</span>
          </h2>
        </div>

        <div className="cards-stack-layer">
          {events.map((event, i) => (
            <div 
              key={event.id} 
              className="stacked-event-card"
              style={{ zIndex: i + 1 }}
            >
              <div className="card-inner-luxury">
                <div className="event-img-wrapper-full">
                  <img src={event.img} alt={event.title} className="card-bg-img" />
                  <div className="event-badge-premium">{event.badge}</div>
                </div>

                <div className="card-luxury-content">
                  <h5 className="luxury-title">{event.title}</h5>
                  <p className="luxury-description">{event.description}</p>
                  
                  {/* Metadata Row with all 3 in one line */}
                  <div className="luxury-info-strip">
                    <span className="info-badge">
                      <i className="fas fa-calendar-alt"></i> {event.date}
                    </span>
                    <span className="info-badge location-badge">
                      <i className="fas fa-map-marker-alt"></i> {event.location}
                    </span>
                    <span className="info-badge attendees-badge">
                      <i className="fas fa-users"></i> {event.attendees}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Animated Arrow Indicator */}
        <div className="scroll-stack-indicator">
          <div className="indicator-v-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventSection;
