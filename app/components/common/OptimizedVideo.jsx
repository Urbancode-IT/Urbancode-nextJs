'use client';

import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useInView } from 'react-intersection-observer';
import { getOptimizedVideoUrl, getVideoPosterUrl } from '@/lib/cloudinary';
import PropTypes from 'prop-types';

/**
 * Reusable, high-performance Optimized Video Component.
 * Supports React.forwardRef to allow programmatic play/pause control from parents.
 */
const OptimizedVideo = React.forwardRef(({
    src,
    poster,
    autoPlay = false,
    loop = true,
    muted = true,
    controls = true,
    className = '',
    style = {},
    playOnVisible = true,
    preload = 'none',
    rootMargin = '200px 0px', // Trigger load 200px before coming into view
    onClick,
    ...props
}, ref) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const localVideoRef = useRef(null);

    // Viewport intersection observer
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: false, 
        rootMargin: rootMargin,
        threshold: 0.1, 
    });

    // Expose localVideoRef directly to any parent ref
    useImperativeHandle(ref, () => localVideoRef.current);

    // Check if Cloudinary is configured
    const isCloudinaryActive = 
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && 
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== 'your_cloudinary_cloud_name';

    // Generate optimized media assets
    const videoWebmUrl = isCloudinaryActive ? getOptimizedVideoUrl(src, { format: 'webm' }) : null;
    const videoMp4Url = getOptimizedVideoUrl(src, { format: 'mp4' });
    const finalPoster = isCloudinaryActive 
        ? getVideoPosterUrl(src, { fallbackPoster: poster, width: 800 })
        : poster;

    // Handle lazy mounting
    useEffect(() => {
        if (inView && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [inView, hasLoaded]);

    // Handle play/pause on viewport entry/exit if not programmatically paused
    useEffect(() => {
        if (!localVideoRef.current || !hasLoaded) return;

        if (playOnVisible && inView) {
            const playPromise = localVideoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((err) => {
                        console.warn('Auto-playback prevented by browser policy:', err);
                        setIsPlaying(false);
                    });
            }
        } else {
            localVideoRef.current.pause();
            setIsPlaying(false);
        }
    }, [inView, hasLoaded, playOnVisible]);

    const handlePlayClick = (e) => {
        if (onClick) {
            onClick(e);
            return;
        }

        if (!localVideoRef.current) return;

        if (isPlaying) {
            localVideoRef.current.pause();
            setIsPlaying(false);
        } else {
            localVideoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => console.error("Playback failed:", err));
        }
    };

    // Combine standard ref with inView observer ref
    const setRefs = (el) => {
        localVideoRef.current = el;
        // If the parent passed a functional ref, call it
        if (typeof ref === 'function') {
            ref(el);
        } else if (ref && typeof ref === 'object') {
            ref.current = el;
        }
    };

    return (
        <div 
            ref={inViewRef} 
            className={`optimized-video-wrapper position-relative overflow-hidden w-100 h-100 ${className}`}
            style={{ 
                minHeight: '200px', 
                backgroundColor: '#0a0d14',
                borderRadius: style.borderRadius || 'inherit',
                ...style 
            }}
            {...props}
        >
            {/* Poster Thumbnail / Placeholder Loader */}
            {(!hasLoaded || !isPlaying) && (
                <div 
                    className="video-poster-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                        backgroundImage: finalPoster ? `url(${finalPoster})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 2,
                        transition: 'opacity 0.4s ease',
                        opacity: isPlaying ? 0 : 1,
                        pointerEvents: isPlaying ? 'none' : 'auto',
                    }}
                >
                    {/* Dark gradient blur over poster */}
                    <div 
                        className="position-absolute top-0 start-0 w-100 h-100" 
                        style={{ background: 'rgba(10, 13, 20, 0.4)' }}
                    />
                    
                    {/* Glassmorphic Play button */}
                    <button
                        type="button"
                        onClick={handlePlayClick}
                        className="btn d-flex align-items-center justify-content-center rounded-circle border-0 shadow-lg play-btn-glow"
                        style={{
                            width: '60px',
                            height: '60px',
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                            fontSize: '24px',
                            paddingLeft: '5px', // Center the triangle perfectly
                            zIndex: 3,
                            transition: 'all 0.3s ease',
                        }}
                        aria-label="Play video"
                    >
                        ▶
                    </button>
                </div>
            )}

            {/* Video element is dynamically rendered only when component has entered viewport */}
            {hasLoaded && (
                <video
                    ref={setRefs}
                    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                    poster={finalPoster}
                    controls={controls}
                    loop={loop}
                    muted={muted}
                    playsInline
                    preload={preload}
                    style={{ zIndex: 1 }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    {/* Serve ultra-lightweight WebM streaming first */}
                    {videoWebmUrl && <source src={videoWebmUrl} type="video/webm" />}
                    {/* Fallback to standard MP4 */}
                    <source src={videoMp4Url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <style jsx global>{`
                .play-btn-glow:hover {
                    transform: scale(1.15);
                    background: rgba(25, 135, 84, 0.9) !important; /* Premium brand green */
                    box-shadow: 0 0 20px rgba(25, 135, 84, 0.6) !important;
                }
                .optimized-video-wrapper video {
                    outline: none;
                }
            `}</style>
        </div>
    );
});

OptimizedVideo.displayName = 'OptimizedVideo';

OptimizedVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    controls: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    playOnVisible: PropTypes.bool,
    preload: PropTypes.oneOf(['none', 'metadata', 'auto']),
    rootMargin: PropTypes.string,
    onClick: PropTypes.func,
};

export default OptimizedVideo;
