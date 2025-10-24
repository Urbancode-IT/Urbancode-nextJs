"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import event1 from "@/public/images/events/event1.jpg";
import event3 from "@/public/images/events/event3.jpg";
import "./events.css";

const events = [
  {
    id: 1,
    title: "BB Grand Meet 2025",
    description:
      "Annual business networking event bringing together industry leaders and innovators.",
    date: "March 15, 2025",
    image: event1.src,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    description:
      "Conference featuring the latest trends in technology and digital transformation.",
    date: "December 10, 2024",
    image: event3.src,
  },
  {
    id: 3,
    title: "Innovation Summit",
    description: "Showcasing breakthrough innovations and future technologies.",
    date: "November 20, 2024",
    image: event1.src,
  },
  {
    id: 4,
    title: "Digital Workshop",
    description:
      "Hands-on workshop on digital marketing and modern web development.",
    date: "October 5, 2024",
    image: event3.src,
  },
  {
    id: 5,
    title: "AI & Future Tech Expo",
    description:
      "Exploring artificial intelligence and the next generation of smart technology.",
    date: "August 22, 2024",
    image: event1.src,
  },
  {
    id: 6,
    title: "Startup Connect",
    description:
      "An event connecting entrepreneurs, investors, and innovators.",
    date: "July 12, 2024",
    image: event3.src,
  },
];

export default function EventsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    // Dynamically import bootstrap JS only on client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const carouselEl = document.getElementById("multiEventCarousel");
      if (carouselEl) {
        const bsCarousel = new bootstrap.Carousel(carouselEl, {
          interval: 3000,
          ride: "carousel",
          wrap: true,
        });
        return () => bsCarousel.dispose();
      }
    });
  }, []);

  // Group events for 3 per slide
  const groupedEvents = [];
  for (let i = 0; i < events.length; i += 3) {
    groupedEvents.push(events.slice(i, i + 3));
  }

  return (
    <section ref={ref} className="aboutus-events py-5 overflow-hidden">
      <div className="container">
        <div
          className={`text-center mb-5 ${
            inView ? "fade-in-up visible" : "fade-in-up"
          }`}
        >
          <h2 className=" fw-bold text-success mb-3 text-shine">Events</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Stay updated with our latest events, conferences, and networking
            opportunities
          </p>
        </div>

        <div
          id="multiEventCarousel"
          className={`carousel slide ${
            inView ? "fade-in-up visible" : "fade-in-up"
          }`}
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {groupedEvents.map((group, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center bg-cust">
                  {group.map((event) => (
                    <div
                      key={event.id}
                      className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                    >
                      <div className="event-card card border-0 shadow-lg">
                        <div className="event-img-wrapper position-relative overflow-hidden rounded-top">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="img-fluid event-img"
                          />
                          <div className="img-overlay"></div>
                        </div>
                        <div className="card-body p-4 text-start">
                          <small className="text-primary fw-semibold">
                            {event.date}
                          </small>
                          <h5 className="card-title mt-2 mb-2 fw-bold text-dark">
                            {event.title}
                          </h5>
                          <p className="card-text text-muted small">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#multiEventCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#multiEventCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
}
