'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ValorantVideoBanner from '@/components/ValorantVideoBanner';
import { User, GraduationCap, Briefcase, Zap } from 'lucide-react';

const cards = [
  {icon: User,
    title: 'WHO I AM',
    content: 'A developer who treats code as a design material, at the intersection of software and machine learning. I care about the gap between how things work and how they feel — and spend most of my time closing it.',
  },
  {
    icon: GraduationCap,
    title: 'EDUCATION',
    content: 'B.Tech in Computer Science. Self-directed learner who builds side projects faster than finishing assigned readings. Coursework in DSA, OS, Distributed Systems, and applied ML.',
  },
  {
    icon: Briefcase,
    title: 'EXPERIENCE',
    content: 'Building full-stack web apps and AI-powered tools — from prototype to polished. Comfortable across the stack: frontend, backend, and the ML layer in between.',
  },
  {
    icon: Zap,
    title: 'INTERESTS',
    content: 'Competitive programming, AI/ML experimentation, developer tooling, open-source. When not coding: window shopping, movie/anime nights, and endlessly optimizing my workflow.',
  },
];

function DiagonalAccent() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Purple diagonal blob */}
      <motion.div
        animate={{ rotate: [0, 3, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '-10%',
          top: '-20%',
          width: '55%',
          height: '140%',
          background: 'rgba(139,92,246,0.05)',
          transform: 'rotate(-12deg)',
        }}
      />
      <div style={{
        position: 'absolute',
        right: '5%',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.15), transparent)',
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: '30%',
        width: '30%',
        height: '1px',
        background: 'linear-gradient(to left, transparent, rgba(139,92,246,0.15))',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: '20%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }} />
    </div>
  );
}

const container = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const item = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
};

const cardItem = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const itemTransition = { duration: 0.45, ease: 'easeOut' as const };

export default function AboutSection() {
  return (
    <SectionWrapper section="ABOUT" scrollable={false}>
      <DiagonalAccent />

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }} className="md:flex-row flex-col md:justify-between justify-center">
        {/* Left side content - original layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 8rem 0 4rem',
          maxWidth: '1100px',
          flex: '0 1 auto',
        }} className="w-full md:w-auto md:max-w-none max-w-full px-4 md:px-0 md:pl-16 md:pr-32">
          <motion.div variants={container} initial="initial" animate="animate" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
            {/* Section label */}
            <motion.p variants={item} style={{
              fontFamily: 'var(--font-label)',
              fontSize: '13px',
              letterSpacing: '0.3em',
              color: '#8B5CF6',
              marginBottom: '0.5rem',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}>
              MISSION BRIEF
            </motion.p>

            {/* Title */}
            <motion.h2 variants={item} style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--text)',
              marginBottom: '0.5rem',
              lineHeight: 1,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}>
              The person behind<br />
              <span style={{ color: '#8B5CF6' }}>the code.</span>
            </motion.h2>

            <motion.p variants={item} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}>
              I build products at the intersection of engineering and design.
            </motion.p>

            {/* Cards */}
            <motion.div
              variants={container}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                width: '100%',
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
            >
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={cardItem}
                    transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
                    whileHover={{ y: -6, scale: 1.03, boxShadow: '0 18px 36px rgba(139,92,246,0.12)' }}
                    style={{
                      padding: '1.5rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      cursor: 'default',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      height: 'auto',
                      willChange: 'transform, opacity',
                      transform: 'translateZ(0)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = 'rgba(139,92,246,0.35)';
                      el.style.boxShadow = '0 8px 32px rgba(139,92,246,0.08)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = 'var(--border)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'rgba(139,92,246,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1rem',
                      flexShrink: 0,
                    }}>
                      <Icon size={18} color="#8B5CF6" />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '14px',
                      letterSpacing: '0.18em',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1.65,
                      color: 'var(--text-muted)',
                      margin: 0,
                    }}>
                      {card.content}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Right side video banner - flush with navbar */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          paddingRight: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          paddingTop: 0,
        }}>
          <ValorantVideoBanner />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
