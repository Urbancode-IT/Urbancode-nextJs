'use client';

import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useInView } from 'react-intersection-observer';
import { getOptimizedVideoUrl, getVideoPosterUrl } from '@/lib/cloudinary';
import PropTypes from 'prop-types';

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
    rootMargin = '200px 0px',
    onClick,
    ...props
}, ref) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const localVideoRef = useRef(null);

    const { ref: inViewRef, inView } = useInView({
        triggerOnce: false,
        rootMargin: rootMargin,
        threshold: 0.1,
    });

    // ✅ Expose custom API to parent: pause(), resetPoster(), play()
    useImperativeHandle(ref, () => ({
        pause: () => {
            if (localVideoRef.current) {
                localVideoRef.current.pause();
                localVideoRef.current.currentTime = 0;
            }
            setIsPlaying(false);   // ← resets poster overlay via React state
        },
        play: () => {
            setHasLoaded(true);
            setTimeout(() => {
                if (localVideoRef.current) {
                    localVideoRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(err => console.error('Playback failed:', err));
                }
            }, 50);
        },
        resetPoster: () => {
            if (localVideoRef.current) {
                localVideoRef.current.pause();
                localVideoRef.current.currentTime = 0;
            }
            setIsPlaying(false);  // ← shows poster overlay again
        },
    }));

    const isCloudinaryActive =
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== 'your_cloudinary_cloud_name' &&
        src &&
        !src.startsWith('/') &&
        !src.startsWith('http://localhost');

    const videoMp4Url = isCloudinaryActive
        ? getOptimizedVideoUrl(src, { format: 'mp4' })
        : src;

    const videoWebmUrl = isCloudinaryActive
        ? getOptimizedVideoUrl(src, { format: 'webm' })
        : null;

    const finalPoster = isCloudinaryActive
        ? getVideoPosterUrl(src, { fallbackPoster: poster, width: 800 })
        : poster;

    useEffect(() => {
        if (inView && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [inView, hasLoaded]);

    useEffect(() => {
        if (!localVideoRef.current || !hasLoaded) return;
        if (playOnVisible && inView) {
            localVideoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
        } else if (!inView) {
            localVideoRef.current.pause();
            setIsPlaying(false);
        }
    }, [inView, hasLoaded, playOnVisible]);

    const handlePlayClick = (e) => {
        if (onClick) { onClick(e); return; }
        if (isPlaying) {
            if (localVideoRef.current) localVideoRef.current.pause();
            setIsPlaying(false);
        } else {
            setHasLoaded(true);
            setTimeout(() => {
                if (localVideoRef.current) {
                    localVideoRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(err => console.error('Playback failed:', err));
                }
            }, 50);
        }
    };

    const setRefs = (el) => {
        localVideoRef.current = el;
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
            {/* Poster overlay — always rendered, hidden only when playing */}
            {!isPlaying && (
                <div
                    className="video-poster-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                        backgroundImage: finalPoster ? `url(${finalPoster})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: finalPoster ? 'transparent' : '#0a0d14',
                        zIndex: 2,
                    }}
                >
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ background: 'rgba(10, 13, 20, 0.35)' }}
                    />
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
                            paddingLeft: '5px',
                            zIndex: 3,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        aria-label="Play video"
                    >
                        ▶
                    </button>
                </div>
            )}

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
                    onEnded={() => setIsPlaying(false)}
                >
                    {videoWebmUrl && <source src={videoWebmUrl} type="video/webm" />}
                    <source src={videoMp4Url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <style jsx global>{`
                .play-btn-glow:hover {
                    transform: scale(1.15);
                    background: rgba(25, 135, 84, 0.9) !important;
                    box-shadow: 0 0 20px rgba(25, 135, 84, 0.6) !important;
                }
                .optimized-video-wrapper video { outline: none; }
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