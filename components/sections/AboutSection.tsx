'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ValorantVideoBanner from '@/components/ValorantVideoBanner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const bioParagraphs = [
  {
    dropCap: 'A',
    text: ' developer who treats code as a design material, building products at the intersection of software engineering and applied machine learning. I care deeply about the gap between how complex systems work under the hood and how they feel to the end user — spending most of my time closing that gap through clean architecture and intentional design.',
    highlight: false,
  },
  {
    dropCap: 'M',
    text: ' y journey spans full-stack web applications, custom desktop tools, and production data pipelines. Whether architecting neo-brutalist document editors like Novella, engineering offline-first UPI ledgers like Splitzy, or optimizing ML data extraction engines at Trezix, I focus on performance, modularity, and smooth user interactions.',
    highlight: false,
  },
  {
    dropCap: 'B',
    text: ' eyond building client software, I actively contribute to open-source tools like Neovim\'s telescope plugin, experiment with WebGL Three.js simulations, and automate developer tooling via CI/CD workflows. I treat every project as an opportunity to iterate on code quality and push visual craftsmanship.',
    highlight: true,
    highlightPhrase: 'intersection of software engineering and applied machine learning.',
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

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bioContainerRef = useRef<HTMLDivElement>(null);
  const highlightBoxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!bioContainerRef.current) return;

    const scrollContainer = bioContainerRef.current.closest('.scroll-area') || window;
    const words = bioContainerRef.current.querySelectorAll('.bio-word');

    const ctx = gsap.context(() => {
      // Continuous word-by-word reveal across the whole bio content
      gsap.fromTo(
        words,
        { color: 'rgba(255, 255, 255, 0.25)', opacity: 0.25 },
        {
          color: '#FFFFFF',
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: bioContainerRef.current,
            scroller: scrollContainer,
            start: 'top 75%',
            end: 'bottom 60%',
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
              trigger: highlightBoxRef.current,
              scroller: scrollContainer,
              start: 'top 75%',
              end: 'top 60%',
              scrub: true,
            },
          }
        );
      }
    }, bioContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper section="ABOUT" scrollable={true}>
      <DiagonalAccent />

      <div
        ref={containerRef}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
          zIndex: 2,
          padding: '2rem 0 4rem 0',
        }}
        className="md:flex-row flex-col md:justify-between justify-start"
      >
        {/* Left side content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '0 8rem 0 4rem',
          maxWidth: '1000px',
          flex: '0 1 auto',
          width: '100%',
        }} className="w-full md:w-auto md:max-w-none max-w-full px-4 md:px-0 md:pl-16 md:pr-32">
          
          {/* STICKY MISSION BRIEF HEADER BLOCK */}
          <div style={{
            position: 'sticky',
            top: '0px',
            zIndex: 10,
            background: 'rgba(10, 13, 20, 0.85)',
            backdropFilter: 'blur(12px)',
            padding: '1.25rem 0 1rem 0',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
          }}>
            <p style={{
              fontFamily: 'var(--font-label)',
              fontSize: '13px',
              letterSpacing: '0.3em',
              color: '#8B5CF6',
              marginBottom: '0.25rem',
            }}>
              MISSION BRIEF
            </p>
            <h2 style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              color: 'var(--text)',
              lineHeight: 1,
              margin: 0,
            }}>
              The person behind <span style={{ color: '#8B5CF6' }}>the code.</span>
            </h2>
          </div>

          {/* CONTINUOUS FLOWING BIO WITH DROP CAPS & WORD REVEAL */}
          <div ref={bioContainerRef} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '3rem' }}>
            {bioParagraphs.map((para, idx) => {
              const words = para.text.trim().split(' ');
              return (
                <p
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    lineHeight: 1.8,
                    margin: 0,
                    position: 'relative',
                  }}
                >
                  {/* Drop Cap */}
                  <span
                    className="bio-word"
                    style={{
                      float: 'left',
                      fontFamily: 'var(--font-hero)',
                      fontSize: '52px',
                      lineHeight: '0.8',
                      paddingRight: '12px',
                      paddingTop: '4px',
                      color: '#8B5CF6',
                      fontWeight: 'bold',
                    }}
                  >
                    {para.dropCap}
                  </span>

                  {/* Flowing Word Spans */}
                  {words.map((word, wIdx) => {
                    const isTargetHighlight = para.highlight && wIdx >= 4 && wIdx <= 11;
                    return (
                      <span
                        key={wIdx}
                        className="bio-word"
                        style={{
                          display: 'inline-block',
                          marginRight: '0.35rem',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      >
                        {isTargetHighlight && wIdx === 4 && (
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
                              width: 'calc(100% * 8 + 2.5rem)',
                              pointerEvents: 'none',
                            }}
                          />
                        )}
                        {word}
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </div>

        </div>

        {/* Right side video banner - sticky position */}
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
        @media (max-width: 768px) {
          .about-banner { display: none !important; }
          .md\\:flex-row { flex-direction: column !important; }
          .md\\:justify-between { justify-content: center !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
