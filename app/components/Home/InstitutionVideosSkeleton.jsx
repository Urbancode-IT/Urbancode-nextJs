import './InstitutionVideos.css';

function VideoCardSkeleton() {
    return (
        <div className="home-video-skeleton" aria-hidden="true">
            <div className="home-video-skeleton-shimmer" />
            <div className="home-video-skeleton-play">
                <span className="home-video-skeleton-play-ring" />
                <span className="video-play-btn-icon home-video-skeleton-play-icon" />
            </div>
            <div className="home-video-skeleton-bars">
                <span /><span /><span />
            </div>
        </div>
    );
}

export default function InstitutionVideosSkeleton({ cardCount = 4 }) {
    return (
        <section className="institution-videos-section iv-section-loading" aria-busy="true" aria-label="Loading Trending Course Insights">
            <div className="cinematic-bg-elements">
                <div className="glow-circle glow-1" />
                <div className="glow-circle glow-2" />
                <div className="light-streak" style={{ top: '15%' }} />
                <div className="light-streak" style={{ top: '75%' }} />
            </div>

            <div className="container position-relative">
                <div className="text-center home-section-title-wrap">
                    <h2 className="section-main-title text-shine">Trending Course Insights</h2>
                </div>

                <div
                    className="home-video-slider-wrapper iv-slider-wrapper"
                    style={{ '--video-cards-visible': cardCount }}
                >
                    <div className="home-video-scroll-track home-video-scroll-track--center">
                        {Array.from({ length: cardCount }, (_, i) => (
                            <div key={i} className="home-video-card">
                                <div className="home-video-media home-video-media--loading">
                                    <VideoCardSkeleton />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export { VideoCardSkeleton };
