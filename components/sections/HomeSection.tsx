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
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
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

      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8rem 0 4rem',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Gradient scrim overlay for text contrast */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '60%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          style={{ maxWidth: '640px' }}
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '13px',
              letterSpacing: '0.25em',
              color: '#4F7DF3',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#4F7DF3',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Hero headline */}
          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-hero)',
            fontSize: 'clamp(52px, 7vw, 96px)',
            lineHeight: 1,
            color: 'var(--text)',
            marginBottom: '1.25rem',
          }}>
            Hello,<br />
            I&apos;m <span style={{ color: '#4F7DF3' }}>Aryan</span>

          </motion.h1>

          {/* Tagline */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-label)',
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            letterSpacing: '0.02em',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}>
            {config.tagline}
          </motion.p>

          {/* Bio */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            maxWidth: '480px',
            marginBottom: '2.5rem',
          }}>
            {config.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('PROJECTS')}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '15px',
                letterSpacing: '0.15em',
                padding: '0.75rem 1.75rem',
                background: '#4F7DF3',
                color: '#fff',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#3a6ae0'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#4F7DF3'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              VIEW PROJECTS <ArrowRight size={14} />
            </button>
            <button
              onClick={() => onNavigate('CONTACT')}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '15px',
                letterSpacing: '0.15em',
                padding: '0.75rem 1.75rem',
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#4F7DF3'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              CONTACT ME <Mail size={14} />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { value: config.stats.projects, label: 'PROJECTS' },
              { value: config.stats.experience, label: 'EXPERIENCE' },
              { value: config.stats.topStack, label: 'TOP STACK' },
            ].map((stat) => (
              <div key={stat.label} style={{ borderLeft: '2px solid #4F7DF3', paddingLeft: '1rem' }}>
                <div style={{
                  fontFamily: 'var(--font-hero)',
                  fontSize: '28px',
                  color: 'var(--text)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
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
        @media (max-width: 768px) {
          .home-content { padding: 0 1.5rem !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
