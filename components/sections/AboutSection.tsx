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

const bioText = 'A developer who treats code as a design material, building products at the intersection of software engineering and applied machine learning. I care deeply about the gap between how complex systems work under the hood and how they feel to the end user — spending most of my time closing that gap through clean architecture and intentional design. My journey spans full-stack web applications, custom desktop tools, and production data pipelines. Whether architecting neo-brutalist document editors like Novella, engineering offline-first UPI ledgers like Splitzy, or optimizing ML data extraction engines at Trezix, I focus on performance, modularity, and smooth user interactions. Beyond building client software, I actively contribute to open-source tools like Neovim\'s telescope plugin, experiment with WebGL Three.js simulations, and automate developer tooling via CI/CD workflows. I treat every project as an opportunity to iterate on code quality and push visual craftsmanship.';

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
  const bioLeftRef = useRef<HTMLParagraphElement>(null);
  const highlightBoxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!bioLeftRef.current) return;

    const scrollContainer = bioLeftRef.current.closest('.scroll-area') || window;
    const words = bioLeftRef.current.querySelectorAll('.bio-word');

    const ctx = gsap.context(() => {
      // Continuous word-by-word reveal across the whole left bio content
      gsap.fromTo(
        words,
        { color: 'rgba(255, 255, 255, 0.25)' },
        {
          color: '#FFFFFF',
          stagger: 0.05,
          scrollTrigger: {
            trigger: bioLeftRef.current,
            scroller: scrollContainer,
            start: 'top 65%',
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
              start: 'top 65%',
              end: 'top 55%',
              scrub: true,
            },
          }
        );
      }
    }, bioLeftRef);

    return () => ctx.revert();
  }, []);

  const words = bioText.split(' ');

  return (
    <SectionWrapper section="ABOUT" scrollable={true}>
      <DiagonalAccent />

      {/* Main scrolling wrapper for About */}
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
        {/* Left side content - contains sticky header + two column split */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '0 4rem 0 4rem',
          maxWidth: '1100px',
          flex: '1 1 auto',
          width: '100%',
        }} className="w-full px-4 md:px-16">
          
          {/* STICKY MISSION BRIEF HEADER BLOCK - pinned using sticky container */}
          <div style={{
            position: 'sticky',
            top: '0px',
            zIndex: 10,
            background: 'rgba(10, 13, 20, 0.9)',
            backdropFilter: 'blur(12px)',
            padding: '1.5rem 0 1rem 0',
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

          {/* TWO COLUMN SPLIT */}
          <div style={{
            display: 'flex',
            gap: '2.5rem',
            width: '100%',
            alignItems: 'flex-start',
          }} className="flex-col md:flex-row">
            
            {/* Left Column: Animating Word-by-Word Reveal */}
            <div style={{ flex: 1 }}>
              <p
                ref={bioLeftRef}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: 1.8,
                  margin: 0,
                  position: 'relative',
                  fontWeight: 600,
                }}
              >
                {words.map((word, wIdx) => {
                  const isHighlightWord = wIdx >= 8 && wIdx <= 15;
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
                      {isHighlightWord && wIdx === 8 && (
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
            </div>

            {/* Right Column: Static Muted Version */}
            <div style={{ flex: 1 }} className="hidden md:block">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: 1.8,
                  margin: 0,
                  color: 'rgba(255, 255, 255, 0.25)',
                  fontWeight: 400,
                }}
              >
                {bioText}
              </p>
            </div>

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
