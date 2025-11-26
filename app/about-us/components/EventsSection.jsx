"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventsSection.css";

const events = [
  {
    id: 4,
  id: 4,
  title: "Emerging Trends in Business AI",
  date: "September 16, 2025",
  location: "St Joseph's College Of Engineering, Chennai",
  badge: "Seminar",
  attendees: "180+ Attendees",
  description:
    "Students explored how AI is reshaping modern business workflows, decision-making, automation, and the future of work across industries.",
  img: "/images/events/event5.jpg",
  },
  {
    id: 1,
    title: "BB GRAND MEET UP 2025",
    date: "April 21, 2025",
    location: "Guindy, Chennai – The Ramada Plaza",
    badge: "Workshop",
    attendees: "150+ Attendees",
    description:
      "A complete guide for final-year students to prepare for interviews, improve resumes, and approach companies effectively.",
    img: "/images/events/event1.jpg",
  },
  {
    id: 2,
    title: "Workshop & Seminars",
    date: "Jun 15, 2024",
    location: "SIMATS Engineering, Thandalam – 602105",
    badge: "Seminar",
    attendees: "200+ Attendees",
    description:
      "Industry experts shared insights on skill trends, future job roles, and the importance of personal branding in careers.",
    img: "/images/events/event4.png",
  },
  {
    id: 3,
    title: "Urbancode AI Workshop",
    date: "March 19, 2024",
    location: "Kings Engineering College, Sriperumbudur",
    badge: "Bootcamp",
    attendees: "90+ Attendees",
    description:
      "Students worked on live startup ideas with mentors guiding them through business models, pitch decks, and funding basics.",
    img: "/images/events/event3.jpg",
  },
];

const EventSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const slideTimer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideTimer);
  }, [current, isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="event-section">
      <div className="container">
        
        <h2 className="event-heading">
          <span className="campus-word">Campus</span>{" "}
          <span className="text-shine">Events We Conducted</span>
        </h2>

        <p className="subtitle">
          Empowering students with skills, opportunities, and industry exposure through engaging campus events.
        </p>

        <div
          className="events-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {events.map((event, i) => {
            let position = "";
            if (i === current) position = "active";
            else if (i === (current - 1 + events.length) % events.length) position = "prev";
            else if (i === (current + 1) % events.length) position = "next";

            return (
              <div key={event.id} className={`event-card ${position}`}>
                <div className="event-img">
                  <img src={event.img} alt={event.title} />
                  <div className="event-badge">{event.badge}</div>
                </div>

                <div className="event-content">
                  <h5>{event.title}</h5>

                  <p><i className="fas fa-calendar-alt"></i> {event.date}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>

                  <p className="event-description">{event.description}</p>

                  <div className="event-footer">
                    <span><i className="fas fa-users"></i> {event.attendees}</span>
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="slider-controls">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="slider-dots">
            {events.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => goToSlide(i)}
              ></div>
            ))}
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default EventSection;
