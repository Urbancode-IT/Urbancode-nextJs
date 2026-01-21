'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import ChatbotWidget from '../ChatbotWidget';
import FloatingWidgets from '../FloatingWidgets';
import { FiPhoneCall } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
const navbarRef = useRef(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setCareerOpen(false);
  };

  const toggleCareer = () => setCareerOpen(!careerOpen);

 useEffect(() => {
  const navbar = navbarRef.current;
  if (!navbar) return;

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // apply immediately on load

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <>
      <nav className="navbar" ref={navbarRef}>

        <div className="nav-inner-container container">

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

          {/* Phone with icon */}
          <div className="navbar-phone">
            <FiPhoneCall className="phone-icon" />
            <a href="tel:+919878798797">+91 9878798797</a>
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {/* Home removed */}
            <Link href="/courses-categories" onClick={handleLinkClick}>Courses</Link>
            <Link href="/about-us" onClick={handleLinkClick}>About Us</Link>
            <Link href="/kids-courses" onClick={handleLinkClick}>Kids Space</Link>

            {/* Career Dropdown */}
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
                Career <span className="arrow"></span>
              </button>

              <div className={`dropdown-menu ${careerOpen ? 'show' : ''}`}>
                <Link href="/be-our-mentor" onClick={handleLinkClick}>Become Our Mentor</Link>
                <Link href="/jobs" onClick={handleLinkClick}>Jobs</Link>
                <Link href="/internship" onClick={handleLinkClick}>Internship</Link>
              </div>
            </div>

            <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
            <Link href="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <FloatingWidgets />
      <ChatbotWidget />
    </>
  );
}
