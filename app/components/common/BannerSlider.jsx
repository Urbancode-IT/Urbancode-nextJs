'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import EnquiryFormModal from './EnquiryFormModal';
import FlightTransition from '../animations/FlightTransition';
import { useRouter } from 'next/navigation';
import { isStudyAbroadLink, useStudyAbroadFlight } from '@/app/hooks/useStudyAbroadFlight';
import './BannerSlider.css';

const BannerSlider = ({ banners = [], forceEnquiry = false }) => {
    const [current, setCurrent] = useState(0);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [mounted, setMounted] = useState(false);
    const { isFlying, navigateToStudyAbroad } = useStudyAbroadFlight();
    const timerRef = useRef(null);
    const router = useRouter();

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const startTimer = useCallback(() => {
        stopTimer();
        if (banners.length <= 1) return;
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 5000);
    }, [banners.length, stopTimer]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || banners.length <= 1) return;
        startTimer();
        return () => stopTimer();
    }, [mounted, banners.length, startTimer, stopTimer]);

    useEffect(() => {
        if (current >= banners.length) {
            setCurrent(0);
        }
    }, [banners.length, current]);

    if (!banners || banners.length === 0) return null;

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        startTimer();
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
        startTimer();
    };

    const handleBannerClick = (banner) => {
        if (!forceEnquiry && banner.type === 'link' && banner.link) {
            if (isStudyAbroadLink(banner.link)) {
                navigateToStudyAbroad(banner.link);
                return;
            }
            router.push(banner.link);
            return;
        }
        setSelectedBanner(banner);
        setShowEnquiry(true);
    };

    return (
        <>
            <FlightTransition isAnimating={isFlying} />
            <section className="banner-slider-section">
                <div className="banner-slider-container">
                    <div
                        className="banner-track"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {banners.map((banner, index) => (
                            <div
                                key={banner.src || index}
                                className="banner-slide"
                                onClick={() => handleBannerClick(banner)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleBannerClick(banner);
                                    }
                                }}
                            >
                                <Image
                                    src={banner.src}
                                    alt={banner.alt || 'Promotional Banner'}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                    className="banner-img"
                                    priority={index === 0}
                                    loading={index === 0 ? undefined : 'lazy'}
                                    fetchPriority={index === 0 ? 'high' : 'auto'}
                                />
                            </div>
                        ))}
                    </div>
                    {banners.length > 1 && (
                        <div className="nav-container-sides">
                            <button
                                type="button"
                                className="side-nav-bar prev"
                                onClick={handlePrev}
                                aria-label="Previous slide"
                            >
                                <span className="nav-chevron">❮</span>
                            </button>
                            <button
                                type="button"
                                className="side-nav-bar next"
                                onClick={handleNext}
                                aria-label="Next slide"
                            >
                                <span className="nav-chevron">❯</span>
                            </button>
                        </div>
                    )}
                </div>

                {selectedBanner && (
                    <EnquiryFormModal
                        isOpen={showEnquiry}
                        onClose={() => setShowEnquiry(false)}
                        courseName={selectedBanner.courseName || 'Banner Promotion'}
                        downloadUrls={selectedBanner.downloadUrls}
                        dynamicDownloads={selectedBanner.dynamicDownloads}
                        extraOptions={selectedBanner.extraOptions}
                        isSelectMode={selectedBanner.isSelectMode}
                        customTitle={selectedBanner.customTitle}
                        useExternalCourses={selectedBanner.useExternalCourses !== false}
                    />
                )}
            </section>
        </>
    );
};

export default BannerSlider;
