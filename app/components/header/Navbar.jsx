'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Navbar.css';
import ChatbotWidget from '../ChatbotWidget';
import FloatingWidgets from '../FloatingWidgets';
import { FiPhoneCall } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';
import FlightTransition from '../animations/FlightTransition';
import BookDemoWidget from '../BookDemoWidget';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = () => {
    setIsOpen(false);
    setCareerOpen(false);
  };

  const handleStudyAbroadClick = (e) => {
    e.preventDefault();
    console.log("✈ Pilot Initiating 3-Second Snappy Travel Flight...");
    setIsFlying(true);
    
    // Snappy delay for the 3-second journey
    setTimeout(() => {
      console.log("✈ Destination reached!");
      router.push('/study-abroad');
      
      // Safety: In case of router delay, ensure state resets or navigate via location after wait
      setTimeout(() => {
        if (window.location.pathname !== '/study-abroad') {
          console.warn("✈ Router push failed or delayed, using direct navigation.");
          window.location.href = '/study-abroad';
        }
        setIsFlying(false);
      }, 3000);

      setIsOpen(false);
    }, 3000); 
  };

  const handleKidsSpaceClick = (e) => {
    e.preventDefault();
    handleLinkClick();
    router.push('/kids-courses');
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
    
    // Reset flight state when we reach the page
    if (pathname === '/study-abroad') {
      setIsFlying(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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

          <div className="navbar-right">
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
              <Link 
                href="/study-abroad" 
                onClick={handleStudyAbroadClick} 
                className="study-abroad-link"
              >
                Study abroad
                <FaPlane className="plane-icon" />
              </Link>
              {/* <Link href="/about-us" onClick={handleLinkClick}>About </Link> */}
              <Link href="/kids-courses" onClick={handleKidsSpaceClick}>Kids space</Link>
              <Link href="/compiler" onClick={handleLinkClick} className="compiler-link">
                Online-compiler
                <svg
                  className="sparkle-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C12 7 15 12 24 12C15 12 12 17 12 24C12 17 9 12 0 12C9 12 12 7 12 0Z"
                    fill="#fab005"
                  />
                </svg>
              </Link>
              <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
              <Link href="/contact-us" onClick={handleLinkClick}>Contact us</Link>
            </div>
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
          <BookDemoWidget />
        </>
      )}
      <FlightTransition isAnimating={isFlying} />
    </>
  );
}
