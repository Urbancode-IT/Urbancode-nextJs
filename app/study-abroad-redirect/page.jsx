'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

function StudyAbroadRedirectContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type'); // 'whatsapp' or 'call'
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate progress bar for visual feedback
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 60);

        // Redirect after a split second (800ms) to ensure Google Ads Conversion captures the click event
        const timer = setTimeout(() => {
            if (type === 'whatsapp') {
                window.location.href = "https://wa.me/918598095980";
            } else {
                window.location.href = "tel:+918598095980";
            }
        }, 800);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [type]);

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
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    maxWidth: '450px',
                    padding: '40px 30px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
                }}
            >
                {/* Visual Premium Loader */}
                <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 24px' }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '4px solid rgba(21, 204, 131, 0.1)',
                        borderTop: '4px solid #15CC83',
                        animation: 'spin 1s linear infinite'
                    }} />
                    <style dangerouslySetInnerHTML={{__html: `
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}} />
                </div>

                <h3 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    background: 'linear-gradient(120deg, #ffffff 0%, #15cc83 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {type === 'whatsapp' ? 'Connecting to WhatsApp...' : 'Connecting to Support...'}
                </h3>
                
                <p style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '30px',
                    lineHeight: '1.6'
                }}>
                    Please wait while we route you securely to our study abroad desk.
                </p>

                {/* Progress Bar Container */}
                <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: '#15CC83',
                        borderRadius: '3px',
                        transition: 'width 0.1s linear'
                    }} />
                </div>
            </motion.div>
        </div>
    );
}

export default function StudyAbroadRedirect() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0b1a13' }} />}>
            <StudyAbroadRedirectContent />
        </Suspense>
    );
}
