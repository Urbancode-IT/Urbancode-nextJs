'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';
import './ThankYou.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-card">
        {/* SVG Gradient definition for the icon */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="envelope-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#198754" />
              <stop offset="100%" stopColor="#17944d" />
            </linearGradient>
          </defs>
        </svg>

        <div className="icon-wrapper">
          <Mail className="envelope-icon" strokeWidth={1} />
        </div>

        <h1 className="thank-you-title">Thanks for submitting!</h1>
        <p className="thank-you-message">your message has been sent!</p>

        <Link href="/" className="go-home-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
