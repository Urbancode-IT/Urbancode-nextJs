'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { videoData } from '../../data/videoTestimonialsData';
import OptimizedVideo from '../common/OptimizedVideo';
import './VideoTestimonials.css';


const VideoTestimonials = () => {
    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const videoRefs = useRef([]);
    const shouldPlay = useRef(false);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth < 576) setCardsToShow(1);
            else if (window.innerWidth < 768) setCardsToShow(2);
            else if (window.innerWidth < 1024) setCardsToShow(3);
            else setCardsToShow(4);
        };

        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    // Handle Autoplay logic: pause all that are out of view, optionally play clicked one
    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === index && shouldPlay.current) {
                    video.currentTime = 0; 
                    video.play().catch(err => {
                        console.log("Playback restricted:", err);
                    });
                    shouldPlay.current = false;
                } else if (idx < index || idx >= index + cardsToShow) {
                    video.pause();
                }
            }
        });
    }, [index, cardsToShow]);

    const handleNext = () => {
        if (index < videoData.length - cardsToShow) {
            setIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    const handleDotClick = (dotIndex) => {
        setIndex(dotIndex);
    };

    return (
        <motion.section 
            className="video-testimonials-section py-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="container position-relative">
                <div className="text-center mb-5">
                    <h2 className="section-main-title text-shine">Voice that matters</h2>
                </div>

                <div className="video-carousel-wrapper">
                    <button 
                        className="nav-btn prev-btn" 
                        onClick={handlePrev}
                        disabled={index === 0}
                        style={{ opacity: index === 0 ? 0.5 : 1, cursor: index === 0 ? 'not-allowed' : 'pointer' }}
                    >❮</button>
                    
                    <div className="video-cards-container">
                        <div 
                            className="video-carousel-track"
                            style={{ transform: `translateX(-${index * (100 / cardsToShow)}%)` }}
                        >
                            {videoData.map((video, idx) => (
                                <div 
                                    key={video.id} 
                                    className="video-card-slide"
                                    style={{ flex: `0 0 calc(${100 / cardsToShow}% - 20px)`, margin: '0 10px' }}
                                >
                                    <OptimizedVideo 
                                        ref={el => videoRefs.current[idx] = el}
                                        src={video.src}
                                        poster="" // Rely entirely on video's original first frame as thumbnail
                                        controls={true}
                                        autoPlay={false}
                                        loop={false}
                                        muted={false} // Let the user hear their voice!
                                        playOnVisible={false} // Manage programmatically via the carousel
                                        preload="metadata" // Load metadata to capture and display original first frame
                                        className="testimonial-video bg-dark"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        className="nav-btn next-btn" 
                        onClick={handleNext}
                        disabled={index >= videoData.length - cardsToShow}
                        style={{ opacity: index >= videoData.length - cardsToShow ? 0.5 : 1, cursor: index >= videoData.length - cardsToShow ? 'not-allowed' : 'pointer' }}
                    >❯</button>
                </div>

                <div className="carousel-controls mt-4">
                    <div className="carousel-dots">
                        {videoData.slice(0, Math.max(1, videoData.length - cardsToShow + 1)).map((_, i) => (
                            <span 
                                key={i} 
                                className={`carousel-dot ${i === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default VideoTestimonials;
