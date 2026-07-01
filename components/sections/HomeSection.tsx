'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { NavSection, config } from '@/data/config';
import { ArrowRight, Mail } from 'lucide-react';

interface Props {
  onNavigate: (s: NavSection) => void;
}

function FloatingGeometry() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Large blue rectangle — primary shape */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '-4%',
          top: '8%',
          width: '42%',
          height: '78%',
          background: '#4F7DF3',
          opacity: 0.06,
          borderRadius: '2px',
        }}
      />
      {/* Outlined rect 1 */}
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '8%',
          top: '12%',
          width: '36%',
          height: '66%',
          border: '1px solid rgba(79,125,243,0.2)',
          borderRadius: '2px',
        }}
      />
      {/* Outlined rect 2 — inner */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          right: '12%',
          top: '20%',
          width: '28%',
          height: '52%',
          border: '1px solid rgba(79,125,243,0.15)',
          borderRadius: '2px',
        }}
      />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(79,125,243,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,125,243,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />
      {/* Floating circle 1 */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          right: '18%',
          top: '15%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '1px solid rgba(79,125,243,0.25)',
        }}
      />
      {/* Floating circle 2 */}
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{
          position: 'absolute',
          right: '28%',
          bottom: '20%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(79,125,243,0.08)',
        }}
      />
      {/* Blue glow */}
      <div style={{
        position: 'absolute',
        right: '5%',
        top: '20%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse, rgba(79,125,243,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      {/* Corner bracket top-right */}
      <div style={{ position: 'absolute', right: '6%', top: '10%', width: '32px', height: '32px',
        borderTop: '2px solid rgba(79,125,243,0.4)', borderRight: '2px solid rgba(79,125,243,0.4)' }} />
      {/* Corner bracket bottom-left of rect */}
      <div style={{ position: 'absolute', right: '42%', bottom: '14%', width: '24px', height: '24px',
        borderBottom: '2px solid rgba(79,125,243,0.3)', borderLeft: '2px solid rgba(79,125,243,0.3)' }} />
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
