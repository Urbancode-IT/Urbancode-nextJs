'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { institutionVideosData } from '../../data/institutionVideosData';
import { useHomeVideoCarousel } from './useHomeVideoCarousel';
import { VideoCardSkeleton } from './InstitutionVideosSkeleton';
import './InstitutionVideos.css';

const InstitutionVideos = () => {
    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [activePlay, setActivePlay] = useState({});
    const [loadedThumbs, setLoadedThumbs] = useState({});
    const { cardsVisible, shouldCenter } = useHomeVideoCarousel(
        institutionVideosData.length,
        sliderRef,
        { maxVisible: 4 }
    );

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

    const markThumbLoaded = (id) => {
        setLoadedThumbs((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
    };

    return (
        <section className="institution-videos-section">
            <div className="cinematic-bg-elements">
                <div className="glow-circle glow-1" />
                <div className="glow-circle glow-2" />
                <div className="light-streak" style={{ top: '15%' }} />
                <div className="light-streak" style={{ top: '75%' }} />
            </div>

            <div className="container position-relative">
                <div className="text-center home-section-title-wrap">
                    <h2 className="section-main-title text-shine">
                        Trending Course Insights
                    </h2>
                </div>

                <div
                    className="home-video-slider-wrapper iv-slider-wrapper"
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
                        {institutionVideosData.map((video, index) => (
                            <div key={video.id} className="home-video-card">
                                <div
                                    className={`home-video-media video-iframe-wrapper${loadedThumbs[video.id] ? ' is-media-ready' : ' home-video-media--loading'}`}
                                    onClick={() => {
                                        if (!activePlay[video.id]) {
                                            setActivePlay((prev) => ({ ...prev, [video.id]: true }));
                                            setIsPaused(true);
                                        }
                                    }}
                                    style={{ cursor: activePlay[video.id] ? 'default' : 'pointer' }}
                                >
                                    {!loadedThumbs[video.id] && <VideoCardSkeleton />}

                                    {!activePlay[video.id] ? (
                                        <>
                                            <div className={`home-video-thumb${loadedThumbs[video.id] ? ' is-visible' : ''}`}>
                                                <Image
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    fill
                                                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, (max-width: 1200px) 30vw, 20vw"
                                                    style={{ objectFit: 'cover' }}
                                                    priority={index < cardsVisible}
                                                    loading={index < cardsVisible ? 'eager' : 'lazy'}
                                                    onLoad={() => markThumbLoaded(video.id)}
                                                    onError={() => markThumbLoaded(video.id)}
                                                />
                                            </div>
                                            {loadedThumbs[video.id] && (
                                                <div className="play-overlay" aria-hidden="true">
                                                    <span className="video-play-btn-icon" />
                                                </div>
                                            )}
                                        </>
                                    ) : video.mp4Src ? (
                                        <video
                                            src={video.mp4Src}
                                            autoPlay
                                            controls
                                            className="institution-video-iframe"
                                            style={{ zIndex: 3, width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&autohide=1&showinfo=0`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="institution-video-iframe"
                                            style={{ zIndex: 3 }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
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

export default InstitutionVideos;
