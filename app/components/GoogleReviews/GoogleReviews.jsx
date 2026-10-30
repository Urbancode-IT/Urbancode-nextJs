'use client';

import React, { useEffect, useState, useRef } from 'react';
import { googleReviewsFallback } from '../../data/googleReviewsFallback';
import './GoogleReviews.css';

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeBranch, setActiveBranch] = useState('All');

    const [isWriteReviewModalOpen, setIsWriteReviewModalOpen] = useState(false);

    // Branch Google Maps review links for modal
    const writeReviewLinks = {
        'Velachery': 'https://g.page/r/CfH0LR1ZQro0EAE/review',
        'Pallikaranai': 'https://g.page/r/CQI15nsz8W2IEAE/review',
        'Tirunelveli': 'https://www.google.com/search?sca_esv=47fdd52eba661d26&rlz=1C1ONGR_enIN1082IN1083&sxsrf=APpeQnsPW-Nth2KLEW3ZAskdQ61FRMzs6g:1782982138857&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3FUiqlbF9e4rNiuCQoVGzSERo25DzRGEjXpofXaARMjWSzIXmPyifkoOmv4p1JOGpytj8x-NDrWsrhqby6vkymFi2dqcYmKH7cwKJC-GoRmYKX80euUyzpMStaelkhu-_5idtw%3D&q=Urbancode+Training+and+Solutions+Reviews&sa=X&ved=2ahUKEwjO1ZuIzrOVAxV_wTgGHbaSLGUQ0bkNegQIKxAH&biw=1280&bih=631&dpr=1.5#lrd=0x3b0413c4ce75c0fd:0x4e3fe58c93ab7a34,3,,,,',
    };
    const branches = ['All', 'Velachery', 'Pallikaranai', 'Tirunelveli'];

    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const fallbackReviews = googleReviewsFallback;

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/google-reviews');
                const contentType = response.headers.get('content-type') || '';
                if (!response.ok || !contentType.includes('application/json')) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();

                let fetchedReviews = [];
                if (data.success && data.data && data.data.length > 0) {
                    fetchedReviews = data.data;
                } else {
                    fetchedReviews = fallbackReviews;
                }
                setReviews(fetchedReviews);
            } catch (err) {
                console.error('Error fetching Google Reviews:', err);
                setError(err.message);
                setReviews(fallbackReviews);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const checkScrollPosition = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const atStart = scrollLeft <= 1;
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1;
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
    };

    const slideNext = () => {
        if (sliderRef.current) {
            if (isAtEnd) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: 310, behavior: 'smooth' });
            }
        }
    };

    const slidePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -310, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && !loading) {
                slideNext();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isAtEnd, isPaused, loading]);

    // Filtered reviews by branch
    const filteredReviews = activeBranch === 'All'
        ? reviews
        : reviews.filter(r => (r.branchName || 'Velachery') === activeBranch);

    // Determine if cards should be centered (fewer than 4)
    const shouldCenter = filteredReviews.length <= 3;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="gr-star filled">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="gr-star empty">&#9733;</span>);
            }
        }
        return stars;
    };

    if (loading) {
        return (
            <div className="google-reviews-section">
                <div className="gr-loading-container">
                    <div className="gr-spinner"></div>
                    <p>Loading Reviews...</p>
                </div>
            </div>
        );
    }

    return (
        <section className="google-reviews-section">
            <div className="home-section-header">
            <h2 className="section-main-title text-shine gr-custom-title">
                <span className="gr-logo-word">
                    <span className="g">G</span>
                    <span className="o1">o</span>
                    <span className="o2">o</span>
                    <span className="g2">g</span>
                    <span className="l">l</span>
                    <span className="e">e</span>
                </span> Reviews
            </h2>

            {/* Branch Filter + Write Review */}
      <div className="gr-branch-filter-bar">
    <div className="gr-branch-tabs">

        {branches.map(branch => (
            <button
                key={branch}
                className={`gr-branch-tab ${
                    activeBranch === branch ? "active" : ""
                }`}
                onClick={() => setActiveBranch(branch)}
            >
                {branch}
            </button>
        ))}

        <button
            type="button"
            className="gr-write-review-btn"
            onClick={() => setIsWriteReviewModalOpen(true)}
        >
             Write a Review
        </button>

    </div>
</div>
            </div>

            <div className="gr-main-content">
                <div
                    className="gr-slider-wrapper"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button className={`gr-nav-side-btn prev ${isAtStart ? 'is-disabled' : ''}`} onClick={slidePrev} aria-label="Previous">❮</button>

                    <div className="gr-glass-track-wrapper">
                        <div
                            className={`gr-scroll-track ${shouldCenter ? 'gr-center-cards' : ''}`}
                            ref={sliderRef}
                            onScroll={checkScrollPosition}
                        >
                            {filteredReviews.map((review, idx) => (
                                <div
                                    key={`${review._id || review.googleReviewId}-${idx}`}
                                    className="gr-card"
                                    style={{ animationDelay: `${idx * 0.08}s` }}
                                >
                                    <div className="gr-profile">
                                        <img
                                            src={review.profilePhotoUrl || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                                            alt={review.authorName}
                                            className="gr-avatar"
                                        />
                                    </div>
                                    <h3 className="gr-author-name">{review.authorName}</h3>
                                    <div className="gr-branch-name">{review.branchName || 'Velachery'}</div>
                                    <div className="gr-google-logo-container">
                                        <span className="gr-google-text">Google</span>
                                    </div>
                                    <div className="gr-stars-container">
                                        {renderStars(review.rating)}
                                    </div>
                                    <div className="gr-review-text-wrapper">
                                        <p className="gr-review-text">
                                            &ldquo;{review.text}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className={`gr-nav-side-btn next ${isAtEnd ? 'is-disabled' : ''}`} onClick={slideNext} aria-label="Next">❯</button>
                </div>
            </div>

            {/* Write Review Branch Selection Modal */}
            {isWriteReviewModalOpen && (
                <div className="gr-modal-overlay" onClick={() => setIsWriteReviewModalOpen(false)}>
                    <div className="gr-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="gr-modal-close" onClick={() => setIsWriteReviewModalOpen(false)}>&times;</button>
                        <h3>Select a Branch</h3>
                        <p>Where would you like to leave a review?</p>
                        <div className="gr-modal-options">
                            {Object.entries(writeReviewLinks).map(([branch, link]) => (
                                <a 
                                    key={branch} 
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="gr-modal-branch-btn"
                                    onClick={() => setIsWriteReviewModalOpen(false)}
                                >
                                    {branch}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GoogleReviews;
