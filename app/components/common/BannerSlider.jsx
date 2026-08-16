'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import EnquiryFormModal from './EnquiryFormModal';
import { useRouter } from 'next/navigation';
import './BannerSlider.css';

const BannerSlider = ({ banners = [], forceEnquiry = false }) => {
    const [current, setCurrent] = useState(0);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const timerRef = useRef(null);
    const router = useRouter();

    const startTimer = useCallback(() => {
        if (banners.length <= 1) return;
        stopTimer();
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 5000); // Auto-slide every 5 seconds
    }, [banners.length]);

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, [startTimer]);

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
            router.push(banner.link);
            return;
        }
        setSelectedBanner(banner);
        setShowEnquiry(true);
    };

    return (
        <section className="banner-slider-section">
            <div className="banner-slider-container">
                <div
                    className="banner-track"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className="banner-slide"
                            onClick={() => handleBannerClick(banner)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Image
                                src={banner.src}
                                alt={banner.alt || "Promotional Banner"}
                                width={1920}
                                height={600}
                                sizes="100vw"
                                className="banner-img"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
                {banners.length > 1 && (
                    <div className="nav-container-sides">
                        <div className="side-nav-bar prev" onClick={handlePrev} aria-label="Previous slide">
                            <span className="nav-chevron">❮</span>
                        </div>
                        <div className="side-nav-bar next" onClick={handleNext} aria-label="Next slide">
                            <span className="nav-chevron">❯</span>
                        </div>
                    </div>
                )}
            </div>

            {selectedBanner && (
                <EnquiryFormModal
                    isOpen={showEnquiry}
                    onClose={() => setShowEnquiry(false)}
                    courseName={selectedBanner.courseName || "Banner Promotion"}
                    downloadUrls={selectedBanner.downloadUrls}
                    dynamicDownloads={selectedBanner.dynamicDownloads}
                    extraOptions={selectedBanner.extraOptions}
                    isSelectMode={selectedBanner.isSelectMode}
                    customTitle={selectedBanner.customTitle}
                    useExternalCourses={selectedBanner.useExternalCourses !== false}
                />
            )}
        </section>
    );
};

export default BannerSlider;