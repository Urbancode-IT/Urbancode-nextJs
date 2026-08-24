'use client';

import { useState, useRef, useEffect } from 'react';
import { videoData } from '../../data/videoTestimonialsData';
import { getOptimizedVideoUrl } from '@/lib/cloudinary';
import { useHomeVideoCarousel } from './useHomeVideoCarousel';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
    const sliderRef = useRef(null);
    const videoRefs = useRef([]);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [playingId, setPlayingId] = useState(null);
    const { cardsVisible, shouldCenter } = useHomeVideoCarousel(videoData.length, sliderRef);

    const checkScrollPosition = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setIsAtStart(scrollLeft <= 1);
        setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1);
    };

    const getScrollStep = () => {
        if (!sliderRef.current) return 300;
        const firstCard = sliderRef.current.querySelector('.home-video-card');
        if (!firstCard) return 300;
        const gap = parseInt(getComputedStyle(sliderRef.current).gap, 10) || 16;
        return firstCard.offsetWidth + gap;
    };

    const slideNext = () => {
        if (!sliderRef.current) return;
        if (isAtEnd) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            sliderRef.current.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        }
    };

    const slidePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, [cardsVisible, shouldCenter]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) slideNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [isAtEnd, isPaused]);

    const handlePlay = (videoId, idx) => {
        setPlayingId(videoId);
        setIsPaused(true);

        const videoEl = videoRefs.current[idx];
        if (!videoEl) return;

        videoEl.controls = true;
        videoEl.muted = false;
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Fallback: muted autoplay then user can unmute via controls
                videoEl.muted = true;
                videoEl.play().catch(() => {});
            });
        }
    };

    return (
        <section className="video-testimonials-section">
            <div className="cinematic-bg-elements">
                <div className="glow-circle glow-1" />
                <div className="glow-circle glow-2" />
                <div className="light-streak" style={{ top: '20%' }} />
                <div className="light-streak" style={{ top: '80%' }} />
            </div>

            <div className="container position-relative">
                <div className="text-center home-section-title-wrap">
                    <h2 className="section-main-title text-shine">Voice that Matters</h2>
                </div>

                <div
                    className="home-video-slider-wrapper vt-slider-wrapper"
                    style={{ '--video-cards-visible': cardsVisible }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button
                        className={`nav-btn prev-btn prev ${isAtStart ? 'is-disabled' : ''}`}
                        onClick={slidePrev}
                        aria-label="Previous videos"
                    >
                        ❮
                    </button>

                    <div
                        className={`home-video-scroll-track${shouldCenter ? ' home-video-scroll-track--center' : ''}`}
                        ref={sliderRef}
                        onScroll={checkScrollPosition}
                    >
                        {videoData.map((video, idx) => {
                            const isPlaying = playingId === video.id;
                            return (
                                <div key={video.id} className="home-video-card">
                                    <div className="home-video-media is-media-ready home-testimonial-video-media">
                                        <video
                                            ref={(el) => {
                                                videoRefs.current[idx] = el;
                                            }}
                                            className="home-testimonial-video"
                                            src={getOptimizedVideoUrl(video.src, { format: 'f_mp4' })}
                                            poster={video.poster}
                                            playsInline
                                            preload="metadata"
                                            controls={isPlaying}
                                            onPlay={() => setPlayingId(video.id)}
                                            onPause={() => {
                                                if (playingId === video.id) setPlayingId(null);
                                            }}
                                            onEnded={() => setPlayingId(null)}
                                        />
                                        {!isPlaying && (
                                            <button
                                                type="button"
                                                className="play-overlay home-testimonial-play"
                                                aria-label={`Play ${video.title}`}
                                                onClick={() => handlePlay(video.id, idx)}
                                            >
                                                <span className="video-play-btn-icon" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        className={`nav-btn next-btn next ${isAtEnd ? 'is-disabled' : ''}`}
                        onClick={slideNext}
                        aria-label="Next videos"
                    >
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
