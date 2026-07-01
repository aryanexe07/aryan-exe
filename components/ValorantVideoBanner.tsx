'use client';

import { useEffect, useRef, useState } from 'react';

export default function ValorantVideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and prevent video loading
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Control video playback speed and ensure no re-renders
  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.playbackRate = 0.55;
    }
  }, [isMobile]);

  // Valorant-style asymmetrical triangular clip-path polygon
  // Creates sharp point at bottom
  const clipPathValue = 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)';

  // Hide video on mobile - completely unmounts the component
  if (isMobile) return null;

  return (
    <div style={{
      position: 'relative',
      width: 'clamp(180px, 20vw, 340px)',
      height: '85vh',
      flexShrink: 0,
      willChange: 'transform',
      transform: 'translateZ(0)',
    }}>
      {/* Video container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: clipPathValue,
          overflow: 'hidden',
          background: '#0B0F19',
          zIndex: 2,
          willChange: 'auto',
        }}
      >
        {/* Video element - not animated, static node */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        >
          <source src="/about-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay for depth */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        {/* Valorant-style nameplate overlay in lower third */}
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0.7) 100%)',
            padding: '1rem 1.25rem',
            zIndex: 10,
            pointerEvents: 'none',
            borderTop: '1px solid rgba(139, 92, 246, 0.3)',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-label)',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#FFFFFF',
            lineHeight: 1,
            marginBottom: '0.35rem',
          }}>
            ARYAN
          </div>
          <div style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: '#8B5CF6',
            lineHeight: 1,
          }}>
            SOFTWARE ENGINEER // SYSTEMS
          </div>
        </div>
      </div>

      {/* SVG Border Overlay - Crisp 1.5px purple frame using polygon clip-path */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible',
          zIndex: 3,
          pointerEvents: 'none',
          willChange: 'auto',
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="valorantClip">
            <polygon points="0,0 100,0 100,85 50,100 0,85" />
          </clipPath>
        </defs>
        {/* Crisp polygon border using exact same clip path coordinates */}
        <polyline
          points="0,0 100,0 100,85 50,100 0,85 0,0"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
