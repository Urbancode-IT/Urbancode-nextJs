"use client";

import React, { useState, useRef, useEffect } from "react";
import "./NewPortfolioDesign.css";

/* Helper component for counting up numbers when scrolled into view */
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        } else {
          setHasAnimated(false); // Reset on exit so it re-animates on every scroll into view
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      setCount(0);
      return;
    }

    const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericEnd)) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      const current = Math.floor((1 - (1 - progress) * (1 - progress)) * numericEnd);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, end, duration]);

  const prefix = end.toString().startsWith("+") ? "+" : "";

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ── Internal Applications data ─────────────────────────────────── */
const INTERNAL_APPS = [
  {
    id: 1,
    name: "Zen",
    desc: "Engineering & consultancy delivering innovative solutions across oil & gas, infrastructure, and industrial projects.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Seyal",
    desc: "IT consulting services dedicated to helping businesses reach their full potential through technology.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Progz",
    desc: "Tax consulting, GST filing and financial training services dedicated to providing expert tax education.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Jobzenter",
    desc: "Training and placement portal connecting Full Stack, Testing, and BI talent with employers.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  },
];

// Online image links as requested (no generated/local images)
const HERO_CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
];

const ABOUT_IMAGES = {
  teamMain: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  collaboration: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  experienceCity: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  avatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  ],
};

const CLIENT_LOGOS = [
  "Quantum",
  "Stellar",
  "Vanguard",
  "Acme Corp",
  "GlobalNet",
  "NovaTech",
  "Quantum",
];

const SERVICES_LIST = [
  {
    num: "[01]",
    title: "Web Development",
    desc: "We build fast, secure, and scalable websites tailored to your business goals. From corporate websites to custom web applications, we deliver responsive solutions that provide an exceptional user experience across all devices.",
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    num: "[02]",
    title: "App Development",
    desc: "Build powerful, scalable, and user-friendly mobile applications tailored to your business needs. We develop high-performance Android and iOS apps that deliver seamless experiences and drive business growth.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    num: "[03]",
    title: "AI & Data Solutions",
    desc: "Intelligent dashboards, ML models, and AI features embedded into your business workflows.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    ]
  },
];

const SELECTED_WORKS = [
  {
    id: 1,
    bannerTitle: "Creating Exceptional Interior Design Experiences.",
    tags: ["Web Design", "Interior"],
    mockupImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    cardTitle: "VM Plus Interior",
    cardDesc: "We craft elegant, functional spaces that reflect your personality and transform the way you live and work.",
    bgTheme: "#ded7d0",
  },
  {
    id: 2,
    bannerTitle: "Crafting Timeless Jewelry, Made by Hand",
    tags: ["Web Design", "E-Commerce"],
    mockupImg: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    cardTitle: "Craftlogically Me",
    cardDesc: "Discover beautifully handcrafted rings, earrings, and unique pieces designed to celebrate your individual style.",
    bgTheme: "#fbe4c4",
  },
  {
    id: 3,
    bannerTitle: "Creating Exceptional Interior Design Experiences.",
    tags: ["Web Design", "Interior"],
    mockupImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    cardTitle: "Jobzenter",
    cardDesc: "We craft elegant, functional spaces that reflect your personality and transform the way you live and work.",
    bgTheme: "#fef3c7",
  },
  {
    id: 4,
    bannerTitle: "Creating Exceptional Interior Design Experiences.",
    tags: ["Web Design", "Interior"],
    mockupImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    cardTitle: "Petrokens",
    cardDesc: "We craft elegant, functional spaces that reflect your personality and transform the way you live and work.",
    bgTheme: "#dbeafe",
  },
  {
    id: 5,
    bannerTitle: "Empower Your IT Career with Techtrendz SRL",
    tags: ["Web Design", "Interior"],
    mockupImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    cardTitle: "Techtrendz",
    cardDesc: "We craft elegant, functional spaces that reflect your personality and transform the way you live and work.",
    bgTheme: "#f3e8ff",
  },
  {
    id: 6,
    bannerTitle: "Your Trusted Partner for Finance & Tax Solutions.",
    tags: ["Web Design", "Interior"],
    mockupImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    cardTitle: "Synergy",
    cardDesc: "We craft elegant, functional spaces that reflect your personality and transform the way you live and work.",
    bgTheme: "#e0f2fe",
  },
];

export default function NewPortfolioDesign() {
  const [openService, setOpenService] = useState(-1); // Default to all closed as shown in image 1
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll slider smooth one by one and update active app in first card
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAppIndex((prev) => (prev + 1) % INTERNAL_APPS.length);
      if (sliderRef.current) {
        const container = sliderRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 380, behavior: "smooth" });
        }
      }
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    setActiveAppIndex((prev) => (prev - 1 + INTERNAL_APPS.length) % INTERNAL_APPS.length);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    setActiveAppIndex((prev) => (prev + 1) % INTERNAL_APPS.length);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="new-portfolio-root">
      {/* Hero Section */}
      <section className="np-hero-section">
        <div className="np-container">
          <h1 className="np-hero-title">
            Designing websites that <br />
            help businesses <span className="np-text-green">grow.</span>
          </h1>

          <p className="np-hero-subtitle">
            We build premium digital experiences for SaaS and tech companies. Combining <br />
            Swiss-inspired design with cutting-edge technology.
          </p>

          <div className="np-hero-buttons">
            <button type="button" className="np-btn-dark">
              Get Started <span className="np-arrow">→</span>
            </button>
            <button type="button" className="np-btn-outline">
              View Work
            </button>
          </div>

          {/* Horizontal Image Carousel Bar */}
          <div className="np-hero-carousel-wrap">
            <div className="np-hero-carousel-track">
              {HERO_CAROUSEL_IMAGES.map((img, idx) => (
                <div key={idx} className="np-hero-card">
                  <img src={img} alt={`Work sample ${idx + 1}`} loading="lazy" />
                </div>
              ))}
              {HERO_CAROUSEL_IMAGES.map((img, idx) => (
                <div key={`dup-${idx}`} className="np-hero-card">
                  <img src={img} alt={`Work sample ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Client Ticker */}
      <section className="np-trusted-section">
        <p className="np-trusted-label">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
        <div className="np-ticker-wrap">
          <div className="np-ticker-track">
            {CLIENT_LOGOS.map((logo, i) => (
              <span key={i} className="np-ticker-item">{logo}</span>
            ))}
            {CLIENT_LOGOS.map((logo, i) => (
              <span key={`dup-${i}`} className="np-ticker-item">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="np-about-section">
        <div className="np-container">
          <div className="np-badge-wrap">
            <span className="np-pill-badge">About us</span>
          </div>

          <h2 className="np-about-headline">
            <strong className="np-text-bold">Urbancode Edutech Solutions is a premier skill development and technology training provider.</strong>{" "}
            <span className="np-text-muted">
              We believe in empowering students and professionals with cutting-edge skills, enabling them to thrive in today's digital landscape.
            </span>
          </h2>

          {/* About Bento Grid */}
          <div className="np-about-bento">
            <div className="np-bento-card np-bento-img-card">
              <img src={ABOUT_IMAGES.teamMain} alt="Our team" className="np-bento-bg" />
              <div className="np-bento-icon-top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <div className="np-bento-bottom-glass">
                <h3><AnimatedCounter end="100" suffix="+" /></h3>
                <p>Delivering impactful digital solutions across diverse industries with quality, creativity, and precision.</p>
              </div>
            </div>

            <div className="np-bento-card np-bento-light-card">
              <span className="np-bento-sublabel">Happy Clients</span>
              <h3 className="np-bento-big-stat"><AnimatedCounter end="100" suffix="+" /></h3>
              <div className="np-avatar-stack">
                {ABOUT_IMAGES.avatars.map((av, i) => (
                  <img key={i} src={av} alt={`Client avatar ${i}`} className="np-avatar-img" />
                ))}
              </div>
              <p className="np-bento-foot-text">
                Trusted by 50+ clients who chose us to turn their ideas into impactful digital experiences.
              </p>
            </div>

            <div className="np-bento-col-stack">
              <div className="np-bento-card np-bento-city-card">
                <img src={ABOUT_IMAGES.experienceCity} alt="City experience" className="np-bento-bg" />
                <div className="np-bento-overlay-text">
                  <span className="np-micro-label">Experience</span>
                  <h3 className="np-city-stat"><AnimatedCounter end="+2" /></h3>
                  <p>Delivering thoughtful, user-focused digital experiences through design and creativity.</p>
                </div>
              </div>

              <div className="np-bento-card np-bento-dark-stat">
                <div className="np-dark-stat-inner">
                  <span>Client Satisfaction</span>
                  <strong><AnimatedCounter end="99" suffix="%" /></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="np-why-section">
        <div className="np-container">
          <div className="np-badge-wrap">
            <span className="np-pill-badge">Why choose us</span>
          </div>

          <h2 className="np-why-headline">
            We create high-performing websites and mobile apps that combine intuitive design with reliable technology—helping brands launch faster and grow with confidence.
          </h2>

          <div className="np-why-curved-wrapper">
            <div className="np-why-left-features">
              <div className="np-why-feat-item">
                <h3>Expert Team</h3>
                <span className="np-feat-sub">Design &amp; Development Specialists</span>
                <p>Skilled designers and developers working together from idea to launch.</p>
              </div>
              <div className="np-why-feat-item">
                <h3>Tailored Solutions</h3>
                <span className="np-feat-sub">Designed Around Your Needs</span>
                <p>Every website and app is shaped to fit your brand, users and goals</p>
              </div>
            </div>

            <div className="np-why-center-image-card">
              <div className="np-curved-mask">
                <img src={ABOUT_IMAGES.collaboration} alt="Team collaboration" />
              </div>
            </div>

            <div className="np-why-right-features">
              <div className="np-why-feat-item">
                <h3>Proven Results</h3>
                <span className="np-feat-sub">Built For Business Growth</span>
                <p>Fast, scalable digital products focused on real user and business outcomes.</p>
              </div>
              <div className="np-why-feat-item">
                <h3>End-To-End Support</h3>
                <span className="np-feat-sub">From Strategy To Launch</span>
                <p>We handle UX, UI, development, testing and ongoing support in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Services Section */}
      <section className="np-services-section">
        <div className="np-container">
          <div className="np-dark-services-card">
            <div className="np-services-header">
              <span className="np-dark-pill">✦ Services</span>
              <h2>
                Crafting Experiences That <br />
                Leave A Lasting Mark
              </h2>
            </div>

            <div className="np-services-accordion">
              {SERVICES_LIST.map((srv, index) => {
                const isOpen = openService === index;
                return (
                  <div
                    key={srv.num}
                    className={`np-accordion-row ${isOpen ? "is-open" : ""}`}
                    onClick={() => setOpenService(isOpen ? -1 : index)}
                  >
                    <div className="np-accordion-main">
                      <span className="np-srv-num">{srv.num}</span>

                      {!isOpen ? (
                        /* CLOSED STATE (Image 1): Title on left, short description in middle */
                        <div className="np-srv-closed-content">
                          <h3 className="np-srv-title">{srv.title}</h3>
                          <p className="np-srv-desc-closed">{srv.desc}</p>
                        </div>
                      ) : (
                        /* OPEN STATE (Image 2): Title & description stacked on left, 2 website previews on right */
                        <div className="np-srv-open-content">
                          <div className="np-srv-open-text">
                            <h3 className="np-srv-title">{srv.title}</h3>
                            <p className="np-srv-desc-open">{srv.desc}</p>
                          </div>
                          <div className="np-srv-preview-cards">
                            {srv.images.map((imgUrl, i) => (
                              <div key={i} className="np-srv-preview-frame">
                                <img src={imgUrl} alt={`${srv.title} preview ${i + 1}`} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <button type="button" className="np-srv-toggle" aria-label="Toggle details">
                        {isOpen ? "−" : "+"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="np-services-footer">
              <button type="button" className="np-btn-white">
                Let's Talk →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="np-works-section">
        <div className="np-container">
          <div className="np-works-header">
            <div>
              <span className="np-pill-badge">Our Works</span>
              <h2 className="np-works-title">Selected Work</h2>
            </div>
            <a href="#projects" className="np-view-all-link">
              View all projects →
            </a>
          </div>

          <div className="np-works-grid">
            {SELECTED_WORKS.map((work) => (
              <div key={work.id} className="np-work-card-unit">
                <div className="np-work-banner-box" style={{ backgroundColor: work.bgTheme }}>
                  <div className="np-work-banner-top">
                    <h3>{work.bannerTitle}</h3>
                    <div className="np-work-tags">
                      {work.tags.map((t) => (
                        <span key={t} className="np-work-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="np-work-screen-frame">
                    <img src={work.mockupImg} alt={work.cardTitle} loading="lazy" />
                  </div>
                </div>
                <div className="np-work-card-info">
                  <h3>{work.cardTitle}</h3>
                  <p>{work.cardDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Internal Applications – Dynamic First Big Card + Small Containers ── */}
      <section className="np-internal-section">
        <div className="np-container">
          <div className="np-internal-header-row">
            <h2 className="np-internal-title">Our Internal Applications</h2>
            <div className="np-internal-arrows">
              <button type="button" className="np-arrow-btn" onClick={scrollLeft} aria-label="Previous app">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button type="button" className="np-arrow-btn" onClick={scrollRight} aria-label="Next app">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l6 6-6 6"/></svg>
              </button>
            </div>
          </div>

          <div className="np-internal-slider" ref={sliderRef}>
            {INTERNAL_APPS.map((app, index) => {
              const isBig = index === 0;
              // If it's the first card, dynamically show active index content (e.g. Seyal on scroll)
              const displayApp = isBig ? INTERNAL_APPS[activeAppIndex] : app;
              return (
                <div key={app.id} className={`np-icard-slide ${isBig ? "np-icard-slide--big" : ""}`}>
                  {/* Container matching image background and styling */}
                  <div className="np-icard-outer-container">
                    {/* Image inside container placed on the right side */}
                    <div className="np-icard-inner-preview">
                      <img src={displayApp.img} alt={displayApp.name} loading="lazy" />
                    </div>
                  </div>
                  <div className="np-icard-body">
                    <h3>{displayApp.name}</h3>
                    <p>{displayApp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Meet Our Team Section ── */}
      <section className="np-team-section">
        <div className="np-container">
          <div className="np-badge-wrap" style={{ justifyContent: 'flex-start' }}>
            <span className="np-pill-badge">Our Team</span>
          </div>

          <div className="np-team-header-row">
            <h2 className="np-team-title">Meet Our Team</h2>
            <div className="np-team-arrows">
              <button type="button" className="np-team-arrow-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button type="button" className="np-team-arrow-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l6 6-6 6"/></svg>
              </button>
            </div>
          </div>

          <div className="np-team-grid">
            <div className="np-team-card">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="Siva Sankara Pandian" />
              <div className="np-team-info">
                <h3>Siva Sankara Pandian</h3>
                <p>Developer</p>
              </div>
            </div>

            <div className="np-team-card">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Rohini" />
              <div className="np-team-info">
                <h3>Rohini</h3>
                <p>Developer</p>
              </div>
            </div>

            <div className="np-team-card np-team-card-placeholder">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" alt="Team Member" />
              <div className="np-team-info">
                <h3>Arun Kumar</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>

            <div className="np-team-card np-team-card-placeholder">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Team Member" />
              <div className="np-team-info">
                <h3>Priya Dharshini</h3>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section (Uploaded Image 2) ── */}
      <section className="np-testimonials-section">
        <div className="np-container">
          <div className="np-badge-wrap" style={{ justifyContent: 'flex-start' }}>
            <span className="np-pill-badge">Testimonials</span>
          </div>

          <div className="np-testimonials-header">
            <h2>What People Are Saying</h2>
            <div className="np-testimonials-arrows">
              <button type="button" className="np-arrow-btn-light">←</button>
              <button type="button" className="np-arrow-btn-light">→</button>
            </div>
          </div>

          <div className="np-testimonials-grid">
            <div className="np-testimonial-card">
              <div className="np-testi-top">
                <span className="np-testi-star">★ 5/5</span>
                <span className="np-testi-num">1/10</span>
              </div>
              <p className="np-testi-text">
                I've tried many platforms, but UI Wiki stands out for its attention to detail and clean aesthetics. Highly recommend!
              </p>
              <div className="np-testi-user">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Ashley cook" />
                <div>
                  <h4>Ashley cook</h4>
                  <span>CEO, company</span>
                </div>
              </div>
            </div>

            <div className="np-testimonial-card">
              <div className="np-testi-top">
                <span className="np-testi-star">★ 5/5</span>
                <span className="np-testi-num">2/10</span>
              </div>
              <p className="np-testi-text">
                UI Wiki transformed our design process! The templates are modern, user-friendly, and saved us countless hours.
              </p>
              <div className="np-testi-user">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="James Anderson" />
                <div>
                  <h4>James Anderson</h4>
                  <span>CFO, company</span>
                </div>
              </div>
            </div>

            <div className="np-testimonial-card">
              <div className="np-testi-top">
                <span className="np-testi-star">★ 5/5</span>
                <span className="np-testi-num">3/10</span>
              </div>
              <p className="np-testi-text">
                As a freelancer, having high-quality components and reliable layouts makes me a faster partner.
              </p>
              <div className="np-testi-user">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Howard Miller" />
                <div>
                  <h4>Howard Miller</h4>
                  <span>CMO, company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section (Uploaded Image 2) ── */}
      <section className="np-faq-section">
        <div className="np-container">
          <div className="np-faq-layout">
            {/* Left FAQ Intro + Got A Question Box */}
            <div className="np-faq-left">
              <h2>Frequently Asked Question</h2>
              <p className="np-faq-sub">
                Find quick answers about Veluno sunglasses - from style and care to shipping and returns
              </p>

              <div className="np-faq-callout-card">
                <h3>Got A Question?</h3>
                <p>Find quick answers about Veluno sunglasses - from style and care to shipping and returns</p>
                <button type="button" className="np-faq-callout-btn">Got Questions?</button>
                <div className="np-faq-question-watermark">?</div>
              </div>
            </div>

            {/* Right FAQ Accordion List */}
            <div className="np-faq-right">
              <div className="np-faq-item np-faq-item--active">
                <div className="np-faq-item-header">
                  <h4>What's the story behind Veluno eyewear?</h4>
                  <span>−</span>
                </div>
                <div className="np-faq-item-body">
                  Veluno is built around minimal design and everyday luxury - crafted for people who value subtle statement pieces over loud trends.
                </div>
              </div>

              <div className="np-faq-item">
                <div className="np-faq-item-header">
                  <h4>Will these sunglasses suit my lifestyle?</h4>
                  <span>+</span>
                </div>
              </div>

              <div className="np-faq-item">
                <div className="np-faq-item-header">
                  <h4>How durable are the frames?</h4>
                  <span>+</span>
                </div>
              </div>

              <div className="np-faq-item">
                <div className="np-faq-item-header">
                  <h4>Is there any glare reduction in the lenses?</h4>
                  <span>+</span>
                </div>
              </div>

              <div className="np-faq-item">
                <div className="np-faq-item-header">
                  <h4>What if I'm not satisfied with my purchase?</h4>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get In Touch Contact Glassmorphism Section (Uploaded Image 3) ── */}
      <section className="np-contact-section">
        <div className="np-container">
          <div className="np-contact-banner">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Office background"
              className="np-contact-bg-img"
            />
            <div className="np-contact-overlay"></div>

            <div className="np-contact-content-grid">
              {/* Left Column: Glassmorphism Info */}
              <div className="np-contact-left-card">
                <h2>
                  <span className="np-contact-title-white">Want to <br />talk to us?</span> <br />
                  <span className="np-text-green-accent">Get in touch</span>
                </h2>

                <div className="np-contact-field-group">
                  <span className="np-contact-chip">Address</span>
                  <p>
                    52/159, Velachery Rd, Next to Guru Nanak College,<br />
                    Near Phoenix Marketcity, Velachery, Chennai, 600042
                  </p>
                </div>

                <div className="np-contact-field-group">
                  <span className="np-contact-chip">Email</span>
                  <p>admin@urbancode.in</p>
                </div>

                <div className="np-contact-field-group">
                  <span className="np-contact-chip">Phone</span>
                  <p>+91 98787 98797</p>
                </div>
              </div>

              {/* Right Column: Glassmorphism Form */}
              <div className="np-contact-form-card">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="np-form-group">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="np-form-group">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="np-form-group">
                    <input type="tel" placeholder="Phone" />
                  </div>
                  <div className="np-form-group">
                    <textarea placeholder="Message" rows={4}></textarea>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <button type="submit" className="np-contact-submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── New Footer matching design screenshot ── */}
      <footer className="np-footer">
        <div className="np-footer-top">
          <div className="np-footer-brand">
            <img src="/images/home/logo.png" alt="Urbancode" className="np-footer-logo" />
            <div className="np-footer-socials">
              {/* X / Twitter */}
              <a href="https://x.com/urbancode" target="_blank" rel="noopener noreferrer" aria-label="X" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.861L1.696 2.25H8.02l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61563183054002" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.8.714-1.8 1.768v2.319h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/urbancode_edutech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.074 4.771 4.771.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.074 4.771-4.771 4.771-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.074-4.771-4.771-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.074-4.771 4.771-4.771 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.76 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.76-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UC7ngZ5r2ov-qoXJRjaXJGKA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="np-footer-tagline-col">
            <p className="np-footer-tagline">
              We design powerful digital experiences. From responsive websites to intuitive mobile apps,{" "}
              <span className="np-footer-tagline-highlight">we turn your ideas into products that grow your business.</span>
            </p>
            <a href="/contact-us" className="np-footer-cta-btn">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="np-footer-bottom">
          <a href="/terms-and-conditions" className="np-footer-bottom-link">Terms &amp; Conditions</a>
          <p className="np-footer-copy">© 2026 Urbancode. All rights reserved.</p>
          <a href="/privacy-policy" className="np-footer-bottom-link">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}



