import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Urbancode Study Abroad',
  description: 'Thank you for contacting Urbancode Study Abroad.',
};

export default function StudyAbroadThankYou() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0b1a13 0%, #1e3a2b 100%)',
        fontFamily: "'Outfit', 'Inter', sans-serif",
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center'
    }}>
        <div style={{
            maxWidth: '500px',
            padding: '50px 40px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(21, 204, 131, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: '#15CC83'
            }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            
            <h1 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '16px',
                background: 'linear-gradient(120deg, #ffffff 0%, #15cc83 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                Consultation Request Received!
            </h1>
            
            <p style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '32px',
                lineHeight: '1.6'
            }}>
                Thank you for reaching out to Urbancode Study Abroad. Our academic counselors have received your details and will contact you shortly to guide you on your international journey.
            </p>
            
            <Link href="/" style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#15CC83',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(21, 204, 131, 0.3)'
            }}>
                Return to Home
            </Link>
        </div>
    </div>
  );
}
