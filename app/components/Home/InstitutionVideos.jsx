'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { institutionVideosData } from '../../data/institutionVideosData';
import './InstitutionVideos.css';

const InstitutionVideos = () => {
    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth < 576) setCardsToShow(1);
            else if (window.innerWidth < 992) setCardsToShow(2);
            else if (window.innerWidth < 1200) setCardsToShow(3);
            else setCardsToShow(4);
        };

        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    const handleNext = () => {
        if (index < institutionVideosData.length - cardsToShow) {
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
        <section className="institution-videos-section">
            {/* Cinematic Background Elements */}
            <div className="cinematic-bg-elements">
                <div className="glow-circle glow-1" />
                <div className="glow-circle glow-2" />
                <div className="light-streak" style={{ top: '15%' }} />
                <div className="light-streak" style={{ top: '75%' }} />
            </div>

            <div className="container position-relative">
                <motion.div 
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-main-title text-shine">
                        Trending Course Insights
                    </h2>
                </motion.div>

                <div className="video-carousel-wrapper">
                    <button 
                        className="nav-btn prev-btn" 
                        onClick={handlePrev}
                        disabled={index === 0}
                        aria-label="Previous videos"
                    >❮</button>
                    
                    <div className="video-cards-container">
                        <motion.div 
                            className="video-carousel-track"
                            animate={{ x: `-${index * (100 / cardsToShow)}%` }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        >
                            {institutionVideosData.map((video, idx) => (
                                <motion.div 
                                    key={video.id} 
                                    className="video-card-slide"
                                    style={{ 
                                        flex: `0 0 ${100 / cardsToShow}%`, 
                                        padding: '0 12px' /* Consistent gutter */
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="video-iframe-wrapper">
                                        <div className="play-overlay">
                                            <div className="play-icon" />
                                        </div>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="institution-video-iframe"
                                        ></iframe>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <button 
                        className="nav-btn next-btn" 
                        onClick={handleNext}
                        disabled={index >= institutionVideosData.length - cardsToShow}
                        aria-label="Next videos"
                    >❯</button>
                </div>

                <div className="carousel-controls mt-4">
                    <div className="carousel-dots">
                        {institutionVideosData.slice(0, Math.max(1, institutionVideosData.length - cardsToShow + 1)).map((_, i) => (
                            <span 
                                key={i} 
                                className={`carousel-dot ${i === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionVideos;
