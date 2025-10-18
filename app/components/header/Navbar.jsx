'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import ChatbotWidget from '../ChatbotWidget';
import FloatingWidgets from '../FloatingWidgets';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false); // 👈 dropdown toggle

  return (
    <nav className="navbar">
      <div className="navbar container pb-3">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
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
          <Link href="/">Home</Link>
          <Link href="/courses-categories">Courses</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/kids-courses">Kids Space</Link>

          {/* ✅ Career Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setCareerOpen(true)}
            onMouseLeave={() => setCareerOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setCareerOpen(!careerOpen)}
            >
              Career 
            </button>

            <div className={`dropdown-menu ${careerOpen ? 'show' : ''}`}>
              <Link href="/be-our-mentor" onClick={() => setIsOpen(false)}>
                Become a Mentor
              </Link>
              <Link href="/jobs" onClick={() => setIsOpen(false)}>
                Jobs
              </Link>
              <Link href="/internship" onClick={() => setIsOpen(false)}>
                Internship
              </Link>
            </div>
          </div>

          <Link href="/projects">Projects</Link>
          <Link href="/contact-us">Contact Us</Link>
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
