'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { NavSection, config } from '@/data/config';
import { ArrowRight, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Props {
  onNavigate: (s: NavSection) => void;
}

function FloatingGeometry() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted is set as DOM property for autoplay
    video.muted = true;

    const handleVisibilityChange = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (document.hidden) {
        video.pause();
      } else if (!prefersReducedMotion && video.paused) {
        video.play().catch(err => {
          console.error('Video autoplay failed:', err);
        });
      }
    };

    // Listen for changes to prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        video.pause();
        video.currentTime = 0;
      } else if (!document.hidden) {
        video.play().catch(err => {
          console.error('Video autoplay failed:', err);
        });
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <div style={{ 
      position: 'absolute', 
      inset: 0, 
      overflow: 'hidden', 
      pointerEvents: 'none',
      clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
    }}>
      {/* Full-page background video */}
      <video
        ref={videoRef}
        src="/homescreen.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.38,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomeSection({ onNavigate }: Props) {
  return (
    <SectionWrapper section="HOME" scrollable={false}>
      <FloatingGeometry />

      <div
        className="home-main-container"
        style={{
          minHeight: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          padding: '2.5rem 4rem',
        }}
      >
        {/* Gradient scrim overlay for text contrast */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at left center, rgba(11,15,25,0.92) 0%, rgba(11,15,25,0.7) 45%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />

        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          style={{ maxWidth: '680px', width: '100%' }}
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.25rem' }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '15px',
              letterSpacing: '0.25em',
              color: '#4F7DF3',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#4F7DF3',
                display: 'inline-block',
                boxShadow: '0 0 8px #4F7DF3',
                animation: 'pulse 3s infinite',
              }} />
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Hero headline */}
          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-hero)',
            fontSize: 'clamp(44px, 9vw, 110px)',
            lineHeight: 0.96,
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            Hello,<br />
            I&apos;m <span style={{ color: '#4F7DF3' }}>Aryan</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            letterSpacing: '0.01em',
            color: 'var(--text-muted)',
            marginBottom: '0.85rem',
            lineHeight: 1.35,
          }}>
            {config.tagline}
          </motion.p>

          {/* Bio */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            maxWidth: '520px',
            marginBottom: '2rem',
          }}>
            {config.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="home-cta-group" style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('PROJECTS')}
              className="home-cta-btn"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '15px',
                letterSpacing: '0.15em',
                padding: '0.85rem 1.75rem',
                background: '#4F7DF3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 4px 16px rgba(79,125,243,0.3)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#3a6ae0'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#4F7DF3'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              VIEW PROJECTS <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigate('CONTACT')}
              className="home-cta-btn"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '15px',
                letterSpacing: '0.15em',
                padding: '0.85rem 1.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#4F7DF3'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              CONTACT ME <Mail size={15} />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="home-stats-group" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { value: config.stats.projects, label: 'PROJECTS' },
              { value: config.stats.experience, label: 'EXPERIENCE' },
              { value: config.stats.topStack, label: 'TOP STACK' },
            ].map((stat) => (
              <div key={stat.label} style={{ borderLeft: '3px solid #4F7DF3', paddingLeft: '0.85rem' }}>
                <div style={{
                  fontFamily: 'var(--font-hero)',
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  color: 'var(--text)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '14px',
                  letterSpacing: '0.18em',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 1024px) {
          .home-main-container {
            padding: 2rem 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .home-main-container {
            padding: 1.5rem 1.25rem 4rem 1.25rem !important;
            align-items: flex-start !important;
            padding-top: 2rem !important;
          }
          .home-cta-group {
            gap: 0.75rem !important;
            margin-bottom: 2rem !important;
          }
          .home-cta-btn {
            flex: 1 1 calc(50% - 0.5rem) !important;
            min-width: 140px !important;
            padding: 0.75rem 1rem !important;
            font-size: 14px !important;
          }
          .home-stats-group {
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 420px) {
          .home-cta-btn {
            flex: 1 1 100% !important;
            width: 100% !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
