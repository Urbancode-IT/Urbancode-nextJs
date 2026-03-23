'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { videoData } from '../../data/videoTestimonialsData';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with second video in center
    const videoRefs = useRef([]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % videoData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    // Handle Autoplay and Performance optimization
    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === activeIndex) {
                    // Start video from the beginning for every fresh play
                    video.currentTime = 0; 
                    video.play().catch(err => {
                        console.log("Unmuted autoplay restricted by browser:", err);
                    });
                } else {
                    // Pause background videos to save bandwidth/CPU
                    video.pause();
                }
            }
        });
    }, [activeIndex]);

    const handleCardClick = (index, e) => {
        if (index !== activeIndex) {
            // ONLY switch if clicking a side video
            setActiveIndex(index);
        }
        // Center card click is handled by the video tag's native 'controls'
        // This avoids the "double-toggle" bug where it pauses and starts again in 1sec
    };

    return (
        <section className="video-testimonials-section py-5">
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
                                        autoPlay={isActive}
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
                    <Link href="/testimonials" className="text-decoration-none">
                        <button className="view-all-btn mt-4">
                            <span>View All</span>
                            <i className="fas fa-arrow-right ms-2 mt-1"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
