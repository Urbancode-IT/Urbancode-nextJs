'use client';
import { useEffect, useRef } from 'react';
import { videoData } from '../data/videoTestimonialsData';
import TestimonialCarousel from '../components/Home/TestimonialCarousel';

const TestimonialsPage = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        // Optimized observer to pause videos when out of section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Find all videos in this section and pause them
                    const videos = entry.target.querySelectorAll('video');
                    videos.forEach(v => v.pause());
                }
            });
        }, { threshold: 0.1 }); // Trigger even if 10% is visible

        const sections = document.querySelectorAll('.testimonials-grid-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="testimonials-grid-page">
            {/* Page Header */}
            <div className="pt-5 pb-5 text-center">
                <h1 className="section-main-title text-shine">Student Success Stories</h1>
            </div>

            {/* Grid Section (MATCHING USER'S REQUESTED LAYOUT: 4 videos per row) */}
            <section className="testimonials-grid-section py-5 px-3">
                <div className="container-fluid max-width-1400">
                    <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {videoData.map((video) => (
                            <div key={video.id} className="col">
                                <div className="testimonial-card-v3">
                                    
                                    {/* VIDEO PART (TOP) */}
                                    <div className="video-frame-v3 rounded-4 overflow-hidden shadow-sm bg-dark">
                                        <video 
                                            src={video.src + "#t=0.5"}
                                            controls
                                            playsInline
                                            className="w-100 h-100 object-fit-cover testimonial-video-obj"
                                            preload="auto"
                                        />
                                    </div>

                                    {/* TEXTBOX PART (BOTTOM) */}
                                    <div className="blue-plate-v3 p-3 mt-3 shadow-md">
                                        <p className="small-feedback mb-3">
                                            "{video.feedback.substring(0, 120)}..."
                                        </p>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="logo-v3 bg-black text-white px-2 py-1 rounded small fw-bold">W</div>
                                            <div className="alumnus-info-v3">
                                                <h6 className="mb-0 fw-bold small">{video.company}</h6>
                                                <span className="text-muted smallest-text">{video.alumnusName}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* "The voice that matters" section (MATCHING DOTTED BACKGROUND) */}
            <section className="testimonials-grid-section py-5">
                 <div className="container text-center py-5">
                    <TestimonialCarousel />
                 </div>
            </section>

            <style jsx>{`
                .testimonials-grid-page {
                    background: #fcfcfc; /* Site neutral background */
                    min-height: 100vh;
                    padding-top: 120px; /* Increased space to ensure title clears fixed navbar in all views */
                }
                .max-width-1400 { max-width: 1400px; margin: 0 auto; }
                .letter-spacing-2 { letter-spacing: 2px; }

                /* SUBTLE DOTTED PATTERN BACKGROUND */
                .testimonials-grid-section {
                    background-color: #fcfcfc;
                }

                .video-frame-v3 {
                    background: #eee;
                    height: 580px; /* Cinematic full-height portrait style */
                    border: 4px solid #fff; /* White inner frame per user design logic */
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }

                .blue-plate-v3 {
                    background: linear-gradient(135deg, var(--bg-neutral), #c3f5eb); /* Requested brand gradient */
                    border-radius: 16px;
                    border: 1px solid rgba(255,255,255,0.4);
                    transition: 0.3s;
                    min-height: 180px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .testimonial-card-v3:hover .blue-plate-v3 {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                }

                .small-feedback {
                    font-size: 0.82rem;
                    line-height: 1.5;
                    color: #555;
                    font-style: italic;
                }
                .smallest-text { font-size: 0.75rem; }
                
                @media (max-width: 1200px) {
                    .video-frame-v3 { height: 580px; } /* Keep full height on tab/mobile */
                }
            `}</style>
        </div>
    );
};

export default TestimonialsPage;
