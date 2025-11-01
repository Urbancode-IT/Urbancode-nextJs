'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import ChatbotWidget from '../ChatbotWidget';
import FloatingWidgets from '../FloatingWidgets';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  // 🟢 Closes navbar & dropdown after navigation
  const handleLinkClick = () => {
    setIsOpen(false);
    setCareerOpen(false);
  };

  // 🟢 Toggle dropdown
  const toggleCareer = () => setCareerOpen(!careerOpen);

  // 🟢 Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar container">
        {/* Logo */}
        <Link href="/" className="navbar-brand" onClick={handleLinkClick}>
          <Image
            src="/images/home/logo.png"
            alt="Urban Code Logo"
            width={182}
            height={43}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/courses-categories" onClick={handleLinkClick}>Courses</Link>
          <Link href="/about-us" onClick={handleLinkClick}>About Us</Link>
          <Link href="/kids-courses" onClick={handleLinkClick}>Kids Space</Link>

          {/* ✅ Career Dropdown (hover for desktop, accordion for mobile) */}
          <div
            className="dropdown"
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                clearTimeout(window.dropdownTimeout);
                setCareerOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) {
                window.dropdownTimeout = setTimeout(() => {
                  setCareerOpen(false);
                }, 200);
              }
            }}
          >
            <button
              className={`dropdown-toggle ${careerOpen ? 'active' : ''}`}
              onClick={toggleCareer}
            >
              Career
              <span className="arrow"></span>
            </button>

            <div className={`dropdown-menu ${careerOpen ? 'show' : ''}`}>
              <Link href="/be-our-mentor" onClick={handleLinkClick}>
                Become a Mentor
              </Link>
              <Link href="/jobs" onClick={handleLinkClick}>
                Jobs
              </Link>
              <Link href="/internship" onClick={handleLinkClick}>
                Internship
              </Link>
            </div>
          </div>

          <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
          <Link href="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <FloatingWidgets />
      <ChatbotWidget />
    </nav>
  );
}
