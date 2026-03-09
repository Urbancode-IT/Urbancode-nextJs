'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import ChatbotWidget from '../ChatbotWidget';
import FloatingWidgets from '../FloatingWidgets';
import { FiPhoneCall } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  // Hide Navbar for Admin pages
  if (pathname.startsWith('/feedback/admin')) {
    return null;
  }

  const handleLinkClick = () => {
    setIsOpen(false);
    setCareerOpen(false);
  };

  const toggleCareer = () => setCareerOpen(!careerOpen);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFeedbackPage = pathname.startsWith('/feedback');

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
            <Link href="/about-us" onClick={handleLinkClick}>About Us</Link>
            <Link href="/kids-courses" onClick={handleLinkClick}>Kids Space</Link>

            <Link href="/compiler" onClick={handleLinkClick}>Practice</Link>

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
