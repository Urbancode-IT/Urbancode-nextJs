'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Home, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './ThankYou.css';

const THANK_YOU_PATH = '/thankyou';

const ThankYouPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const pageLocation = window.location.href;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_location: pageLocation,
      page_path: THANK_YOU_PATH,
      page_title: 'Thank You - Form Submission',
    });

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_location: pageLocation,
        page_path: THANK_YOU_PATH,
        page_title: 'Thank You - Form Submission',
      });
    }
  }, []);

  return (
    <div className="thank-you-page">
      <motion.div 
        className="thank-you-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="thank-you-card">
          <div className="thank-you-header">
            <Image 
              src="/images/home/logo.png" 
              alt="Urban Code Logo" 
              width={180} 
              height={42}
              priority
              className="thank-you-logo"
            />
          </div>

          <div className="success-icon-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CheckCircle size={100} className="success-icon" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="thank-you-title">Submission Successful!</h1>
            <p className="thank-you-message">
              Thank you for reaching out to Urban Code. <br />
              Our experts have received your enquiry and will contact you within <strong>24 hours</strong>.
            </p>
          </motion.div>

          <div className="action-buttons">
            <Link href="/" className="btn-primary-thankyou">
              <Home size={18} />
              Back to Home
            </Link>
            <Link href="/courses-categories" className="btn-secondary-thankyou">
              <BookOpen size={18} />
              Explore Courses
              <ArrowRight size={18} className="arrow-icon" />
            </Link>
          </div>

          <div className="thank-you-footer">
            <p>Need urgent help? Call us at <a href="tel:+919878798797" className="gtm-phone-call" data-gtm-label="thankyou_phone_click">+91 9878798797</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
