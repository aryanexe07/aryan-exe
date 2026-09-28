'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import SkillsShowcase from '@/components/SkillsShowcase';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ValorantVideoBanner from '@/components/ValorantVideoBanner';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const scrollLines: { word: string; highlight?: boolean }[][] = [
  [{ word: 'SINCE' }, { word: '2025,' }],
  [{ word: 'MY' }, { word: 'LIFE' }, { word: 'HAS' }],
  [{ word: 'CHANGED' }],
  [{ word: 'RADICALLY.', highlight: true }],
  [{ word: 'I' }, { word: 'REALIZED' }],
  [{ word: 'WHAT' }, { word: 'THE' }],
  [{ word: 'DIGITAL' }],
  [{ word: 'WORLD' }, { word: 'IS' }],
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
  const bioLeftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bioLeftRef.current) return;

    // Find the enclosing scrollable div
    const scrollContainer = bioLeftRef.current.closest('.scroll-area') || window;

    const ctx = gsap.context(() => {
      const chars = bioLeftRef.current?.querySelectorAll('.about-char');
      if (chars && chars.length > 0) {
        gsap.to(chars, {
          opacity: 1,
          duration: 0.01,
          stagger: 0.02,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: bioLeftRef.current,
            scroller: scrollContainer,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: 0.4,
          },
        });
      }
    }, bioLeftRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper section="ABOUT" scrollable={true}>
      <div ref={scrollContainerRef} style={{ position: 'relative', width: '100%', minHeight: '100%', zIndex: 1 }}>
        <DiagonalAccent />

        {/* 1. HERO/LANDING SECTION */}
        <div
          className="about-hero-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '75vh',
            position: 'relative',
            width: '100%',
            padding: '3rem 4rem',
          }}
        >
          {/* Static Heading Badge Group */}
          <div style={{ flex: '1 1 auto', maxWidth: '680px', width: '100%' }}>
            <p style={{
              fontFamily: 'var(--font-label)',
              fontSize: '15px',
              letterSpacing: '0.3em',
              color: '#8B5CF6',
              marginBottom: '0.35rem',
            }}>
              MISSION BRIEF
            </p>
            <h2 style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'clamp(44px, 8vw, 110px)',
              color: 'var(--text)',
              lineHeight: 0.98,
              margin: 0,
            }}>
              The person behind <br />
              <span style={{ color: '#8B5CF6' }}>the code.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              color: 'var(--text-muted)',
              marginTop: '1.25rem',
              lineHeight: 1.65,
              maxWidth: '560px',
            }}>
              Developing at the intersection of robust backend systems, performant frontend user experiences, and applied machine learning.
            </p>
          </div>
        </div>

        {/* 2. SCROLL-DRIVEN TEXT SECTION */}
        <div
          ref={bioContainerRef}
          className="about-bio-container"
          style={{
            display: 'flex',
            gap: '3.5rem',
            padding: '4.5rem 4rem',
            minHeight: '70vh',
            position: 'relative',
            width: '100%',
            alignItems: 'flex-start',
            borderTop: '1px solid rgba(139, 92, 246, 0.1)',
            background: 'rgba(10, 13, 20, 0.4)',
          }}
        >
          {/* Left Column: Text Reveal */}
          <div style={{ flex: 1.2, position: 'relative', alignSelf: 'flex-start' }}>
            <div
              ref={bioLeftRef}
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(36px, 4.2vw, 64px)',
                lineHeight: 1.08,
                margin: 0,
                fontWeight: 400,
                textTransform: 'uppercase',
                color: '#ffffff',
                textAlign: 'right',
              }}
            >
              {scrollLines.map((line, lineIndex) => (
                <div key={lineIndex} style={{ display: 'block' }}>
                  {line.map((item, wordIndex) => (
                    <span
                      key={wordIndex}
                      style={{
                        display: 'inline-block',
                        marginRight: wordIndex < line.length - 1 ? '0.25em' : 0,
                        ...(item.highlight ? {
                          background: '#FFFFFF',
                          color: 'rgba(10, 13, 20, 0.4)',
                          padding: '0 10px',
                          borderRadius: '2px',
                          border: '1px solid rgba(139, 92, 246, 0.4)',
                        } : {}),
                      }}
                    >
                      {item.word.split('').map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className="about-char"
                          style={{
                            opacity: 0.2,
                            display: 'inline-block',
                            transition: 'opacity 0.05s ease',
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Static Muted Editorial Bio Text with Drop Caps */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '16px',
                color: '#8B5CF6',
                letterSpacing: '0.25em',
              }}>
                JOURNEY
              </div>
            </div>
            {/* 1px horizontal divider line */}
            <div style={{
              width: '100%',
              height: '1px',
              background: 'linear-gradient(to right, rgba(139, 92, 246, 0.4), rgba(255, 255, 255, 0.08))',
              marginBottom: '2rem',
            }} />

            {/* Paragraph 1 */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}>
              <span style={{
                float: 'left',
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                lineHeight: 0.85,
                paddingTop: '2px',
                paddingRight: '8px',
                color: '#FFFFFF',
                fontWeight: 700,
              }}>
                H
              </span>
              ave you ever wondered what it takes to build software that actually solves real problems? Behind every clean interface and every well-architected pipeline is a developer who cares about the gap between what&apos;s technically possible and what actually helps someone. My journey started as a Computer Science Engineering student at{' '}
              <span style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: '#8B5CF6',
                fontWeight: 600,
              }}>
                SRM University
              </span>
              , driven by curiosity about how complex systems work under the hood.
            </p>

            {/* Paragraph 2 */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}>
              <span style={{
                float: 'left',
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                lineHeight: 0.85,
                paddingTop: '2px',
                paddingRight: '8px',
                color: '#FFFFFF',
                fontWeight: 700,
              }}>
                W
              </span>
              hat began with fundamentals — scripts, basic algorithms, understanding how a CLI even works — moved quickly into full-stack development, competitive programming, and eventually open-source contribution. I learned early that the best way to understand a system is to build one yourself, break it, and fix it until it holds up under real use.
            </p>

            {/* Paragraph 3 */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}>
              <span style={{
                float: 'left',
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                lineHeight: 0.85,
                paddingTop: '2px',
                paddingRight: '8px',
                color: '#FFFFFF',
                fontWeight: 700,
              }}>
                D
              </span>
              uring my AI/ML internship at{' '}
              <span style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: '#8B5CF6',
                fontWeight: 600,
              }}>
                Trezix
              </span>
              , I built and maintained data extraction pipelines — including a modular PDF-to-JSON engine for processing complex customs documents, engineered with pdfplumber across layout detection, profiling, extraction, engine logic, and validation. On campus, I serve as the Docs Lead for the{' '}
              <span style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: '#8B5CF6',
                fontWeight: 600,
              }}>
                FOSS Club
              </span>
              {' '}and Mentor Lead at{' '}
              <span style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: '#8B5CF6',
                fontWeight: 600,
              }}>
                Techspace
              </span>
              , driving open-source contributor standards and mentoring junior developers.
            </p>

            {/* Paragraph 4 */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}>
              <span style={{
                float: 'left',
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                lineHeight: 0.85,
                paddingTop: '2px',
                paddingRight: '8px',
                color: '#FFFFFF',
                fontWeight: 700,
              }}>
                M
              </span>
              y focus is built on shipping real systems and competing in top hackathons: from building Splitzy (an offline-first, UPI-native expense ledger) and Verge (a multi-modal memory visualization tool), to engineering solutions for Smart India Hackathon (apix &amp; ULPF), the Semicon Hackathon (deep learning SEM image restoration), and Hackprix. I also actively contribute to open source, including merged work in{' '}
              <span style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: '#8B5CF6',
                fontWeight: 600,
              }}>
                telescope.nvim
              </span>
              , while consistently solving algorithmic challenges on LeetCode.
            </p>

            {/* Paragraph 5 */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              margin: 0,
            }}>
              <span style={{
                float: 'left',
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                lineHeight: 0.85,
                paddingTop: '2px',
                paddingRight: '8px',
                color: '#FFFFFF',
                fontWeight: 700,
              }}>
                O
              </span>
              ne of the most valuable lessons I&apos;ve learned is that clean code and thoughtful design aren&apos;t separate goals — they&apos;re the same goal. Whether I&apos;m optimizing a Prisma query or deciding how a portfolio page should feel to scroll through, the standard is the same: does this actually work well, and does it feel right to use? I&apos;m still early in this journey, but I&apos;d rather build things that are honest about what they are than things that just look impressive on the surface.
            </p>
          </div>
        </div>

        {/* 3. SKILLS SECTION */}
        <SkillsShowcase />
      </div>

      {/* Fixed/static banner aligned to the top right of the section */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 10,
        pointerEvents: 'none',
      }} className="hidden lg:block">
        <ValorantVideoBanner />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-hero-container {
            padding: 2.5rem 2.5rem !important;
          }
          .about-bio-container {
            padding: 3.5rem 2.5rem !important;
            gap: 2.5rem !important;
          }
          .about-skills-container {
            padding: 3.5rem 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .about-hero-container {
            padding: 1.5rem 1.25rem 2.5rem 1.25rem !important;
            min-height: auto !important;
          }
          .about-bio-container {
            flex-direction: column !important;
            padding: 2.5rem 1.25rem !important;
            gap: 2rem !important;
          }
          .about-skills-container {
            padding: 2.5rem 1.25rem 4rem 1.25rem !important;
          }
          .about-skill-card {
            padding: 1.25rem !important;
          }
          .about-meta-text {
            text-align: left !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
