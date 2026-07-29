'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Layers, Shield, BookOpen } from 'lucide-react';
import { skills } from '@/data/skills';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const bioText = 'A developer who treats code as a design material, building products at the intersection of software engineering and applied machine learning. I care deeply about the gap between how complex systems work under the hood and how they feel to the end user — spending most of my time closing that gap through clean architecture and intentional design. My journey spans full-stack web applications, custom desktop tools, and production data pipelines. Whether architecting neo-brutalist document editors like Novella, engineering offline-first UPI ledgers like Splitzy, or optimizing ML data extraction engines at Trezix, I focus on performance, modularity, and smooth user interactions. Beyond building client software, I actively contribute to open-source tools like Neovim\'s telescope plugin, experiment with WebGL Three.js simulations, and automate developer tooling via CI/CD workflows. I treat every project as an opportunity to iterate on code quality and push visual craftsmanship.';

const leftText = 'Since 2023, my work has changed radically. I realized what building real software actually takes. Moving fast, breaking paradigms, and treating code as a design material.';

const skillCategories = [
  { key: 'PRIMARY' as const, label: 'PRIMARY', icon: Layers, desc: 'Daily drivers. Production-proven.' },
  { key: 'SECONDARY' as const, label: 'SECONDARY', icon: Shield, desc: 'Solid working knowledge.' },
  { key: 'LEARNING' as const, label: 'LEARNING', icon: BookOpen, desc: 'Actively building depth.' },
];

function DiagonalAccent() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
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
          background: 'rgba(139,92,246,0.03)',
          transform: 'rotate(-12deg)',
        }}
      />
      <div style={{
        position: 'absolute',
        right: '5%',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.1), transparent)',
      }} />
    </div>
  );
}

export default function AboutSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const bioContainerRef = useRef<HTMLDivElement>(null);
  const bioLeftRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!bioLeftRef.current || !bioContainerRef.current) return;

    // Find the enclosing scrollable div
    const scrollContainer = bioLeftRef.current.closest('.scroll-area') || window;
    const words = bioLeftRef.current.querySelectorAll('.bio-word');

    const ctx = gsap.context(() => {
      // Continuous word-by-word reveal across the left column text
      gsap.fromTo(
        words,
        { color: 'rgba(255, 255, 255, 0.25)' },
        {
          color: '#FFFFFF',
          stagger: 0.05,
          scrollTrigger: {
            trigger: bioContainerRef.current,
            scroller: scrollContainer,
            start: 'top 55%',
            end: 'bottom 45%',
            scrub: true,
          },
        }
      );
    }, bioContainerRef);

    return () => ctx.revert();
  }, []);

  const leftWords = leftText.split(' ');

  return (
    <SectionWrapper section="ABOUT" scrollable={true}>
      <div ref={scrollContainerRef} style={{ position: 'relative', width: '100%', minHeight: '100%', zIndex: 1 }}>
        <DiagonalAccent />

        {/* 1. HERO/LANDING SECTION */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4rem 8rem 4rem 4rem',
          minHeight: '80vh',
          position: 'relative',
          width: '100%',
        }} className="flex-col md:flex-row px-4 md:px-16 gap-12">
          
          {/* Static Heading Badge Group */}
          <div style={{ flex: '1 1 auto', maxWidth: '650px' }}>
            <p style={{
              fontFamily: 'var(--font-label)',
              fontSize: '13px',
              letterSpacing: '0.3em',
              color: '#8B5CF6',
              marginBottom: '0.75rem',
              fontWeight: 700,
            }}>
              MISSION BRIEF
            </p>
            <h2 style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--text)',
              lineHeight: 1.1,
              margin: 0,
            }}>
              The person behind <br />
              <span style={{ color: '#8B5CF6' }}>the code.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-muted)',
              marginTop: '1.5rem',
              lineHeight: 1.6,
            }}>
              Developing at the intersection of robust backend systems, performant frontend user experiences, and applied machine learning.
            </p>
          </div>

          {/* Right Static Badge/Photo Card */}
          <div style={{
            width: '280px',
            height: '380px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(10, 13, 20, 0.8) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(10, 13, 20, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.1)',
          }} className="flex-shrink-0">
            {/* Cyberpunk grid overlay lines inside card */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                fontFamily: 'var(--font-hero)',
                fontSize: '28px',
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: '0.5rem',
              }}>
                ARYAN
              </div>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                color: '#8B5CF6',
                letterSpacing: '0.15em',
                fontWeight: 700,
              }}>
                SOFTWARE ENGINEER // SYSTEMS
              </div>
            </div>
          </div>
        </div>

        {/* 2. SCROLL-DRIVEN TEXT SECTION */}
        <div
          ref={bioContainerRef}
          style={{
            display: 'flex',
            gap: '4rem',
            padding: '6rem 8rem 6rem 4rem',
            minHeight: '70vh',
            position: 'relative',
            width: '100%',
            alignItems: 'flex-start',
            borderTop: '1px solid rgba(139, 92, 246, 0.1)',
            background: 'rgba(10, 13, 20, 0.4)',
          }}
          className="flex-col md:flex-row px-4 md:px-16"
        >
          {/* Left Column: Animating Scroll-Scrubbed Text Reveal */}
          <div style={{ flex: 1.2 }}>
            <p
              ref={bioLeftRef}
              style={{
                fontFamily: 'var(--font-hero)',
                fontSize: 'clamp(24px, 3.5vw, 42px)',
                lineHeight: 1.4,
                margin: 0,
                color: 'rgba(255, 255, 255, 0.25)',
                fontWeight: 'bold',
              }}
            >
              {leftWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="bio-word"
                  style={{
                    display: 'inline-block',
                    marginRight: '0.5rem',
                    transition: 'color 0.1s ease',
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Right Column: Static Muted Version of the Complete Bio Text */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-label)',
              fontSize: '12px',
              color: '#8B5CF6',
              letterSpacing: '0.2em',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              JOURNEY & BACKGROUND
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
            }}>
              {bioText}
            </p>
          </div>
        </div>

        {/* 3. SKILLS SECTION */}
        <div style={{
          padding: '6rem 8rem 6rem 4rem',
          position: 'relative',
          width: '100%',
          borderTop: '1px solid rgba(139, 92, 246, 0.1)',
        }} className="px-4 md:px-16">
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#8B5CF6', marginBottom: '0.5rem' }}>
              TECH LOADOUT
            </p>
            <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'var(--text)', lineHeight: 1 }}>
              Skills & <span style={{ color: '#8B5CF6' }}>Technologies</span>
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            width: '100%',
          }}>
            {skillCategories.map((cat) => {
              const catSkills = skills.filter(s => s.category === cat.key);
              const Icon = cat.icon;
              return (
                <div
                  key={cat.key}
                  style={{
                    padding: '1.75rem',
                    background: 'var(--card)',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                    borderRadius: '20px',
                    borderTop: '4px solid #8B5CF6',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(139, 92, 246, 0.35)';
                    el.style.boxShadow = '0 12px 30px rgba(139, 92, 246, 0.08)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(139, 92, 246, 0.15)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      display: 'grid',
                      placeItems: 'center',
                      background: 'rgba(139, 92, 246, 0.15)',
                      borderRadius: '8px',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                    }}>
                      <Icon size={18} color="#8B5CF6" />
                    </div>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.15em', color: '#8B5CF6', fontWeight: 700 }}>
                      {cat.label}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                    {cat.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        style={{
                          fontFamily: 'var(--font-label)',
                          fontSize: '13px',
                          letterSpacing: '0.05em',
                          padding: '0.45rem 0.75rem',
                          background: 'rgba(139, 92, 246, 0.08)',
                          border: '1px solid rgba(139, 92, 246, 0.2)',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transition: 'all 200ms ease',
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
