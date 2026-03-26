'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { videoData } from '../../data/videoTestimonialsData';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with second video in center
    const videoRefs = useRef([]);

    const shouldPlay = useRef(false);

    // Handle Autoplay and Performance optimization
    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === activeIndex) {
                    if (shouldPlay.current) {
                        video.currentTime = 0; 
                        video.play().catch(err => {
                            console.log("Playback restricted:", err);
                        });
                        shouldPlay.current = false; // Reset after playing
                    }
                } else {
                    video.pause();
                }
            }
        });
    }, [activeIndex]);

    const handleNext = () => {
        shouldPlay.current = true;
        setActiveIndex((prev) => (prev + 1) % videoData.length);
    };

    const handlePrev = () => {
        shouldPlay.current = true;
        setActiveIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    };

    const handleDotClick = (index) => {
        shouldPlay.current = true;
        setActiveIndex(index);
    };

    const handleCardClick = (index, e) => {
        if (index !== activeIndex) {
            shouldPlay.current = true;
            setActiveIndex(index);
        }
    };

    return (
        <motion.section 
            className="video-testimonials-section py-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-main-title text-shine">The voice that matters</h2>
                    {/* <p className="fs1rem text-muted">Celebrating the remarkable success stories and career breakthroughs we've proudly helped achieve.</p> */}
                </div>

                <div className="video-carousel-wrapper">
                    <button className="nav-btn prev-btn" onClick={handlePrev}>❮</button>
                    
                    <div className="video-cards-container">
                        {videoData.map((video, index) => {
                            const isActive = index === activeIndex;
                            let position = "side-card";
                            if (isActive) position = "center-card";
                            else if (index === (activeIndex - 1 + videoData.length) % videoData.length) position = "left-card";
                            else if (index === (activeIndex + 1) % videoData.length) position = "right-card";
                            else position = "hidden-card";

                            return (
                                <div 
                                    key={video.id} 
                                    className={`video-card ${position}`}
                                    onClick={(e) => handleCardClick(index, e)} 
                                    style={{ cursor: 'pointer' }}
                                >
                                    {isActive && (
                                        <div 
                                            className="video-click-overlay"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const v = videoRefs.current[index];
                                                if (v.paused) v.play(); else v.pause();
                                            }}
                                        />
                                    )}
                                    <video 
                                        ref={el => videoRefs.current[index] = el}
                                        src={video.src + "#t=0.5"}
                                        controls
                                        autoPlay={false}
                                        playsInline
                                        preload="auto"
                                        onEnded={handleNext} 
                                        className="testimonial-video bg-dark"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            );
                        })}
                    </div>

                    <button className="nav-btn next-btn" onClick={handleNext}>❯</button>
                </div>

                <div className="carousel-controls mt-4">
                    <div className="carousel-dots">
                        {videoData.map((_, index) => (
                            <span 
                                key={index} 
                                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default VideoTestimonials;
