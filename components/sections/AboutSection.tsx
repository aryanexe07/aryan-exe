'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ValorantVideoBanner from '@/components/ValorantVideoBanner';
import { User, GraduationCap, Briefcase, Zap, Layers, Shield, BookOpen } from 'lucide-react';
import { skills } from '@/data/skills';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    icon: User,
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

const skillCategories = [
  { key: 'PRIMARY' as const, label: 'PRIMARY', icon: Layers, desc: 'Daily drivers. Production-proven.' },
  { key: 'SECONDARY' as const, label: 'SECONDARY', icon: Shield, desc: 'Solid working knowledge.' },
  { key: 'LEARNING' as const, label: 'LEARNING', icon: BookOpen, desc: 'Actively building depth.' },
];

const bioSentence = [
  { text: 'I', highlight: false },
  { text: 'build', highlight: false },
  { text: 'products', highlight: false },
  { text: 'at', highlight: false },
  { text: 'the', highlight: false },
  { text: 'intersection', highlight: true },
  { text: 'of', highlight: true },
  { text: 'engineering', highlight: true },
  { text: 'and', highlight: true },
  { text: 'design.', highlight: true },
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

export default function AboutSection() {
  const bioRef = useRef<HTMLParagraphElement>(null);
  const highlightBoxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!bioRef.current) return;

    const scrollContainer = bioRef.current.closest('.scroll-area') || window;
    const words = bioRef.current.querySelectorAll('.bio-word');

    const ctx = gsap.context(() => {
      // Word-by-word reveal
      gsap.fromTo(
        words,
        { color: 'rgba(255, 255, 255, 0.3)', opacity: 0.3 },
        {
          color: '#FFFFFF',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: bioRef.current,
            scroller: scrollContainer,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Highlight box scaleX animation
      if (highlightBoxRef.current) {
        gsap.fromTo(
          highlightBoxRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bioRef.current,
              scroller: scrollContainer,
              start: 'top 70%',
              end: 'top 55%',
              scrub: true,
            },
          }
        );
      }
    }, bioRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper section="ABOUT" scrollable={true}>
      <DiagonalAccent />

      <div style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 2,
        padding: '2.5rem 0',
      }} className="md:flex-row flex-col md:justify-between justify-start">
        {/* Left side content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '0 8rem 0 4rem',
          maxWidth: '1100px',
          flex: '0 1 auto',
          width: '100%',
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

            {/* Bio with Scroll-Scrubbed Text Reveal */}
            <p
              ref={bioRef}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {bioSentence.map((word, i) => (
                <span
                  key={i}
                  className="bio-word"
                  style={{
                    display: 'inline-block',
                    transition: 'color 0.1s ease',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {word.highlight && i === 5 && (
                    <span
                      ref={highlightBoxRef}
                      style={{
                        position: 'absolute',
                        inset: '-2px -6px',
                        background: 'rgba(139, 92, 246, 0.25)',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                        borderRadius: '6px',
                        transformOrigin: 'left center',
                        zIndex: -1,
                        width: 'calc(100% * 5 + 1.4rem)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                  {word.text}
                </span>
              ))}
            </p>

            {/* Overview Cards */}
            <motion.div
              variants={container}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                width: '100%',
                willChange: 'transform',
                transform: 'translateZ(0)',
                marginBottom: '3.5rem',
              }}
              className="about-cards-grid"
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

            {/* Integrated Skills Section (Restyled to Purple/About Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%', marginBottom: '2rem' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#8B5CF6', marginBottom: '0.25rem' }}>
                  TECH LOADOUT
                </p>
                <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'var(--text)', lineHeight: 1 }}>
                  Skills & <span style={{ color: '#8B5CF6' }}>Technologies</span>
                </h3>
              </div>

              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
                className="about-skills-cards-grid"
              >
                {skillCategories.map((cat, index) => {
                  const catSkills = skills.filter(s => s.category === cat.key);
                  const Icon = cat.icon;
                  const isPrimary = cat.key === 'PRIMARY';
                  return (
                    <motion.div
                      key={cat.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
                      whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 36px rgba(139,92,246,0.12)' }}
                      style={{
                        padding: isPrimary ? '2rem' : '1.25rem',
                        background: isPrimary ? 'rgba(139,92,246,0.08)' : 'var(--card)',
                        border: isPrimary ? '2px solid rgba(139,92,246,0.3)' : '1px solid rgba(139,92,246,0.15)',
                        borderRadius: '20px',
                        borderTop: isPrimary ? '4px solid #8B5CF6' : '2px solid #8B5CF6',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        gridColumn: isPrimary ? 'span 2' : 'span 1',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isPrimary ? '1rem' : '0.75rem' }}>
                        <div style={{
                          width: isPrimary ? '40px' : '32px',
                          height: isPrimary ? '40px' : '32px',
                          display: 'grid', placeItems: 'center',
                          background: 'rgba(139,92,246,0.15)',
                          borderRadius: '8px',
                          border: '1px solid rgba(139,92,246,0.3)',
                        }}>
                          <Icon size={isPrimary ? 20 : 16} color="#8B5CF6" />
                        </div>
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                          padding: isPrimary ? '0.6rem 1rem' : '0.5rem 0.85rem',
                          borderRadius: '8px',
                          background: 'rgba(139,92,246,0.12)',
                          border: '1px solid rgba(139,92,246,0.22)',
                        }}>
                          <span style={{ fontFamily: 'var(--font-label)', fontSize: isPrimary ? '13px' : '12px', letterSpacing: '0.2em', color: '#8B5CF6', textTransform: 'uppercase' }}>
                            {cat.label}
                          </span>
                        </div>
                      </div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: isPrimary ? '13px' : '12px', color: 'var(--text-muted)', marginBottom: isPrimary ? '1.5rem' : '1.25rem' }}>
                        {cat.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {catSkills.map((skill, i) => (
                          <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03 + 0.1 }}
                            whileHover={{ scale: 1.03, y: -1, backgroundColor: '#8B5CF6', color: '#fff', borderColor: '#8B5CF6' }}
                            style={{
                              fontFamily: 'var(--font-label)',
                              fontSize: isPrimary ? '15px' : '14px',
                              letterSpacing: '0.06em',
                              padding: isPrimary ? '0.65rem 1rem' : '0.55rem 0.85rem',
                              background: 'rgba(139,92,246,0.1)',
                              border: '1px solid rgba(139,92,246,0.28)',
                              borderRadius: '6px',
                              color: 'var(--text)',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              transition: 'all 200ms ease',
                            }}
                          >
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Right side video banner - sticky/fixed position */}
        <div style={{
          position: 'sticky',
          top: '2.5rem',
          right: 0,
          paddingRight: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          flexShrink: 0,
        }} className="about-banner">
          <ValorantVideoBanner />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-skills-cards-grid { grid-template-columns: 1fr !important; }
          .about-skills-cards-grid > div { grid-column: span 1 !important; }
        }
        @media (max-width: 768px) {
          .about-cards-grid { grid-template-columns: 1fr !important; }
          .about-skills-cards-grid { grid-template-columns: 1fr !important; }
          .about-skills-cards-grid > div { grid-column: span 1 !important; }
          .about-banner { display: none !important; }
          .md\\:flex-row { flex-direction: column !important; }
          .md\\:justify-between { justify-content: center !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
