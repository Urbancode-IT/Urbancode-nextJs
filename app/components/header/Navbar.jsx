'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import ChatbotWidget from '../ChatbotWidget';
import FloatingWidgets from '../FloatingWidgets';
import { FiPhoneCall } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
    setCareerOpen(false);
  };

  const toggleCareer = () => setCareerOpen(!careerOpen);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;
      if (window.scrollY > 10) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFeedbackPage = pathname.startsWith('/feedback');

  if (isFeedbackPage) return null;

  return (
    <>
      <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
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

          {/* Phone with icon - only show if not feedback page */}
          {!isFeedbackPage && (
            <div className="navbar-phone">
              <FiPhoneCall className="phone-icon" />
              <a href="tel:+919878798797">+91 9878798797</a>
            </div>
          )}

          {/* Navigation Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {/* Home removed */}
            <Link href="/courses-categories" onClick={handleLinkClick}>Courses</Link>
            <Link href="/study-abroad" onClick={handleLinkClick} className="study-abroad-link">
              Study Abroad
              <FaPlane className="plane-icon" />
            </Link>
            <Link href="/about-us" onClick={handleLinkClick}>About Us</Link>
            <Link href="/kids-courses" onClick={handleLinkClick}>Kids Space</Link>

            <Link href="/compiler" onClick={handleLinkClick}>CodeMatrix</Link>

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
      {!isFeedbackPage && (
        <>
          <FloatingWidgets />
          <ChatbotWidget />
        </>
      )}
    </>
  );
}
