'use client';

import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useInView } from 'react-intersection-observer';
import '../Home/homePlayButton.css';
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
    hidePosterPlay = false,
    forceLoad = false,
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
        if (forceLoad || autoPlay) {
            setHasLoaded(true);
        }
    }, [forceLoad, autoPlay]);

    useEffect(() => {
        if (inView && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [inView, hasLoaded]);

    useEffect(() => {
        if (!localVideoRef.current || !hasLoaded) return;
        if (autoPlay) {
            localVideoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            return;
        }
        if (playOnVisible && inView) {
            localVideoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
        } else if (!inView && playOnVisible) {
            localVideoRef.current.pause();
            setIsPlaying(false);
        }
    }, [inView, hasLoaded, playOnVisible, autoPlay]);

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
            {/* Poster overlay — skip when parent supplies its own play UI */}
            {!isPlaying && !hidePosterPlay && (
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
                    {!hidePosterPlay && (
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{ background: 'rgba(10, 13, 20, 0.35)' }}
                        />
                    )}
                    {!hidePosterPlay && (
                        <button
                            type="button"
                            onClick={handlePlayClick}
                            className="video-play-btn border-0 play-btn-glow"
                            style={{ zIndex: 3 }}
                            aria-label="Play video"
                        >
                            <span className="video-play-btn-icon" aria-hidden="true" />
                        </button>
                    )}
                </div>
            )}

            {hasLoaded && (
                <video
                    ref={setRefs}
                    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                    poster={finalPoster}
                    controls={controls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={autoPlay ? true : muted}
                    playsInline
                    preload={preload}
                    style={{ zIndex: isPlaying || hidePosterPlay ? 3 : 1 }}
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
    hidePosterPlay: PropTypes.bool,
    forceLoad: PropTypes.bool,
    onClick: PropTypes.func,
};

export default OptimizedVideo;