'use client';
import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import "./testimonials.css";

const testimonials = [
    {
        name: "Sriram",
        university: "Greenwich University, UK",
        feedback: "Urbancode helped me through every step of my UK student visa process. Their scholarship guidance was a lifesaver!",
        rating: 5,
    },
    {
        name: "Ashmathi",
        university: "Dublin Business School, Ireland",
        feedback: "The counseling sessions were very informative. They helped me choose the perfect course that aligned with my career goals.",
        rating: 5,
    },
    {
        name: "Vishnu",
        university: "Coventry University, UK",
        feedback: "Got my UK visa in the first attempt thanks to their rigorous interview prep. Highly recommend their services!",
        rating: 5,
    },
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const leftCardRef = useRef(null);
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);

    const maxIndex = Math.max(0, testimonials.length - cardsToShow);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth < 768) setCardsToShow(1);
            else if (window.innerWidth < 1200) setCardsToShow(2);
            else setCardsToShow(3);
        };

        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    // Auto-advance: loop back to 0 when we reach the end
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }, 3500);
        return () => clearInterval(timer);
    }, [maxIndex]);

    const handleNext = () => setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    const handlePrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

    // Touch swipe
    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0; };
    const handleTouchMove  = (e) => { touchDeltaX.current = e.touches[0].clientX - touchStartX.current; };
    const handleTouchEnd   = () => {
        if (touchDeltaX.current > 40)  handlePrev();
        else if (touchDeltaX.current < -40) handleNext();
        touchDeltaX.current = 0;
    };

    // Dots: one per possible index stop
    const dots = Array.from({ length: maxIndex + 1 }, (_, i) => i);

    return (
        <div className="testimonial_main_container pt-2 pb-5">
            <div className="container">
                <div className="row g-4 align-items-stretch mt-2">
                    <div className="col-lg-2 col-md-3 col-12">
                        <div
                            ref={leftCardRef}
                            className="rounded-3 p-3 d-flex flex-column justify-content-center align-items-center text-center sidebar-equal-height"
                            style={{
                                background: 'linear-gradient(145deg, #f0fff8 0%, #e6f9f0 50%, #d4f5e6 100%)',
                                border: '1px solid rgba(0, 181, 111, 0.2)',
                                boxShadow: '0 4px 16px rgba(0, 181, 111, 0.1)',
                            }}
                        >
                            <h5 className="fw-bold" style={{ fontSize: '1.3rem', color: '#003d22' }}>Success Stories</h5>
                            <p style={{ color: '#2d7a50', fontSize: '0.8rem', marginTop: '6px', lineHeight: 1.5, marginBottom: 0 }}>
                                Real students. Real visas. Real dreams fulfilled.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-10 col-md-9 col-12">
                        {/* Carousel */}
                        <div
                            className="carousel-container"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="carousel-track"
                                style={{
                                    transform: `translateX(-${index * (100 / cardsToShow)}%)`,
                                }}
                            >
                                {testimonials.map((card, idx) => (
                                    <div
                                        key={idx}
                                        className={`testimonial-card ${idx >= index && idx < index + cardsToShow ? "active" : "inactive"}`}
                                        style={{ flex: `0 0 calc(${100 / cardsToShow}% - 1rem)` }}
                                    >
                                        <h5 className="fw-bold mb-1">{card.name}</h5>
                                        {card.university && (
                                            <p className="mb-2" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>{card.university}</p>
                                        )}
                                        <div className="testimonial-text-wrapper mb-3">
                                            <p className="text-muted fs08rem mb-1">{card.feedback}</p>
                                            <button
                                                className="read-more-btn btn p-0 fw-semibold fs07rem"
                                                onClick={() => setSelectedTestimonial(card)}
                                            >
                                                Read More
                                            </button>
                                        </div>

                                        <div className="d-flex flex-column align-items-center mt-auto">
                                            <div className="testimonial-stars d-flex justify-content-center gap-1 mb-2">
                                                {Array.from({ length: card.rating }).map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination bar — only shown when more than one stop exists */}
                        {dots.length > 1 && (
                            <div className="testimonial-pagination">
                                <button
                                    type="button"
                                    className="testimonial-nav-btn prev"
                                    onClick={handlePrev}
                                    aria-label="Previous testimonial"
                                >
                                    ❮
                                </button>

                                <div className="testimonial-dots">
                                    {dots.map((i) => (
                                        <span
                                            key={i}
                                            className={`testimonial-dot ${i === index ? 'active' : ''}`}
                                            onClick={() => setIndex(i)}
                                            aria-label={`Go to testimonial group ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className="testimonial-nav-btn next"
                                    onClick={handleNext}
                                    aria-label="Next testimonial"
                                >
                                    ❯
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Full Review Modal */}
            {selectedTestimonial && (
                <div className="testimonial-modal-overlay" onClick={() => setSelectedTestimonial(null)}>
                    <div className="testimonial-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedTestimonial(null)}>×</button>
                        <div className="d-flex flex-column align-items-center">
                            <div className="testimonial-stars mb-3">
                                {Array.from({ length: selectedTestimonial.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <h4 className="fw-bold mb-1">{selectedTestimonial.name}</h4>
                            {selectedTestimonial.university && (
                                <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>{selectedTestimonial.university}</p>
                            )}
                            <div className="testimonial-modal-body">
                                <p className="text-muted">{selectedTestimonial.feedback}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialCarousel;
