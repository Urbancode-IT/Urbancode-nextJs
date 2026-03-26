'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TeamSection.css';

const teamMembers = [
  // CEOs
  { id: 'ceo-1', name: 'Rajesh Kumar', role: 'Chief Executive Officer', category: 'CEOs', image: 'https://randomuser.me/api/portraits/men/32.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'ceo-2', name: 'Siddharth Varma', role: 'Co-Founder & COO', category: 'CEOs', image: 'https://randomuser.me/api/portraits/men/44.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'ceo-3', name: 'Ananya Sharma', role: 'Chief Strategy Officer', category: 'CEOs', image: 'https://randomuser.me/api/portraits/women/43.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'ceo-4', name: 'Vikram Mehta', role: 'Chief Technical Officer', category: 'CEOs', image: 'https://randomuser.me/api/portraits/men/22.jpg', linkedin: '#', twitter: '#', github: '#' },
  
  // IT Team
  { id: 'it-1', name: 'Arjun Suresh', role: 'Full Stack Developer', category: 'IT', image: 'https://randomuser.me/api/portraits/men/52.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'it-2', name: 'Karthik Selvam', role: 'Solutions Architect', category: 'IT', image: 'https://randomuser.me/api/portraits/men/62.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'it-3', name: 'Rahul Nair', role: 'Cybersecurity Analyst', category: 'IT', image: 'https://randomuser.me/api/portraits/men/72.jpg', linkedin: '#', twitter: '#', github: '#' },
  
  // Designers
  { id: 'design-1', name: 'Sneha Patel', role: 'UI/UX Design Lead', category: 'Designers', image: 'https://randomuser.me/api/portraits/women/44.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'design-2', name: 'Priya Ramesh', role: 'Creative Director', category: 'Designers', image: 'https://randomuser.me/api/portraits/women/35.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'design-3', name: 'Divya Nair', role: 'Brand Identity Designer', category: 'Designers', image: 'https://randomuser.me/api/portraits/women/12.jpg', linkedin: '#', twitter: '#', github: '#' },
  
  // Consultants
  { id: 'consult-1', name: 'Meera Krishnan', role: 'Education Consultant', category: 'Consultants', image: 'https://randomuser.me/api/portraits/women/63.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'consult-2', name: 'Sanjay Gupta', role: 'Career Growth Mentor', category: 'Consultants', image: 'https://randomuser.me/api/portraits/men/84.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'consult-3', name: 'Aakash Singh', role: 'Academic Advisor', category: 'Consultants', image: 'https://randomuser.me/api/portraits/men/91.jpg', linkedin: '#', twitter: '#', github: '#' },
  
  // Marketing
  { id: 'market-1', name: 'Ishita Roy', role: 'Digital Marketing Head', category: 'Marketing', image: 'https://randomuser.me/api/portraits/women/8.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'market-2', name: 'Kunal Kapoor', role: 'Social Media Expert', category: 'Marketing', image: 'https://randomuser.me/api/portraits/men/15.jpg', linkedin: '#', twitter: '#', github: '#' },
  { id: 'market-3', name: 'Rohan Deshmukh', role: 'Content Strategist', category: 'Marketing', image: 'https://randomuser.me/api/portraits/men/25.jpg', linkedin: '#', twitter: '#', github: '#' },
];

const categories = ['All', 'CEOs', 'IT', 'Designers', 'Consultants', 'Marketing'];

/* ── SVG Icons ─────────────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ── Component ──────────────────────────────────────────────────── */
export default function TeamSection() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCols, setVisibleCols] = useState(4);

  // Update visibleCols based on same breakpoints as CSS
  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w <= 991) setVisibleCols(2);
      else if (w <= 1199) setVisibleCols(3);
      else setVisibleCols(4);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const filteredMembers = teamMembers.filter(m => 
    activeCategory === 'All' ? true : m.category === activeCategory
  );

  /* Scroll-reveal */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) section.classList.add('team-section--visible'); },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* Arrow scroll — one full page of visible cards */
  const scroll = useCallback((dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir === 'left' ? -track.clientWidth : track.clientWidth, behavior: 'smooth' });
  }, []);

  return (
    <section
      className="team-section"
      ref={sectionRef}
      aria-labelledby="team-section-title"
    >
      <div className="container">
        {/* Header */}
        <div className="team-header">
          <h2 id="team-section-title" className="section-main-title">
            Meet Our <span className="text-shine">Expert Team</span>
          </h2>
          
          {/* Innovated Filter Pills */}
          <div className="team-filter-pill-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`team-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  // Reset scroll on category change
                  if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="active-pill"
                    className="active-pill-bg"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scroller shell */}
        <div className="team-scroller-shell">
          {/* Track — only center if items fit in the current view */}
          <div className={`team-track ${filteredMembers.length <= visibleCols ? 'centered' : ''}`} ref={trackRef}>
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredMembers.map((member, index) => (
                <motion.div 
                  key={`${activeCategory}-${member.id}`} 
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 } 
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.2 } }}
                  className="team-card-wrapper"
                >
                  <div className="team-portrait">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-portrait-img"
                      loading="lazy"
                    />
                    <div className="team-portrait-overlay" aria-hidden="true">
                      <div className="team-social-row">
                        <a href={member.linkedin} className="team-social-btn" target="_blank" rel="noopener noreferrer">
                          <LinkedInIcon />
                        </a>
                        <a href={member.twitter} className="team-social-btn" target="_blank" rel="noopener noreferrer">
                          <TwitterIcon />
                        </a>
                        <a href={member.github} className="team-social-btn" target="_blank" rel="noopener noreferrer">
                          <GithubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
  
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrow row — hide if items fit the current screen size */}
          {filteredMembers.length > visibleCols && (
            <div className="team-arrow-row">
              <button className="team-arrow team-arrow-prev" onClick={() => scroll('left')} aria-label="Scroll left">
                <ChevronLeft />
                <span className="team-arrow-text">PREV</span>
              </button>
              <button className="team-arrow team-arrow-next" onClick={() => scroll('right')} aria-label="Scroll right">
                <span className="team-arrow-text">NEXT</span>
                <ChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
