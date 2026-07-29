'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Calendar, Plus, Briefcase, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MajorEntryData {
  company: string;
  logo?: string;
  role: string;
  dateRange: string;
  highlights: string[];
}

interface MinorEntryData {
  type: string;
  title: string;
  detail: string;
}

const trezixEntry: MajorEntryData = {
  company: 'Trezix',
  logo: 'https://ui-avatars.com/api/?name=Trezix&background=14B8A6&color=fff&size=80',
  role: 'AI/ML Intern',
  dateRange: 'Present',
  highlights: [
    'Built and maintained data extraction pipelines for document processing workflows',
    'Developed a modular PDF-to-JSON extraction engine using pdfplumber across layout, profile, extraction, and validation stages',
    'Worked across the ML/data layer to improve extraction accuracy and pipeline reliability',
    'Collaborated with the engineering team on production data workflows',
  ],
};

const novellaEntry: MajorEntryData = {
  company: 'Novella',
  logo: 'https://ui-avatars.com/api/?name=Novella&background=14B8A6&color=fff&size=80',
  role: 'Lead Developer & Architect',
  dateRange: 'Present',
  highlights: [
    'Built a neo-brutalist manuscript/notes workspace from scratch using Next.js 14, Prisma, Clerk, and TipTap',
    'Resolved TipTap autosave debouncing issues and Prisma N+1 query problems for performance',
    'Architected client/server component boundaries for a responsive editing experience',
  ],
};

const minorEntries: MinorEntryData[] = [
  { type: 'Open-Source PR', title: 'telescope.nvim', detail: 'Merged documentation fix in layout_strategies.lua' },
  { type: 'Hackathon', title: 'SRM Builds', detail: 'Participant & finalist in high-intensity prototype hackathon' },
  { type: 'Project', title: 'Splitzy', detail: 'Offline-first, UPI-native expense-splitting app for Indian groups' },
  { type: 'Project', title: 'Verge', detail: 'Your external brain — personal memory organization tool' },
  { type: 'Project', title: 'Samay Finance', detail: 'Dark editorial finance website with scroll-jacked GSAP design' },
  { type: 'Project', title: 'AutoClicker', detail: 'PyQt6 Windows desktop automation app (v1.0.0 released on GitHub)' },
  { type: 'Project', title: '3D Solar System', detail: '60fps interactive space simulation built with Three.js' },
  { type: 'Repository', title: 'Python Knowledge Base', detail: 'Structured knowledge base with Pylint CI via GitHub Actions' },
  { type: 'Competitive Programming', title: 'LeetCode', detail: 'Weekly Contest 500 — 4/4 problems solved' },
];

function TealBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '5%',
          top: '30%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(20,184,166,0.04)',
        }}
      />
      <div style={{
        position: 'absolute', right: '5%', top: '20%',
        width: '30%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(20,184,166,0.05) 0%, transparent 70%)',
        filter: 'blur(30px)',
      }} />
    </div>
  );
}

export default function CareerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<HTMLDivElement>(null);
  const indicatorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackLineRef.current || !indicatorDotRef.current) return;

    const scrollContainer = sectionRef.current.closest('.scroll-area') || window;

    const ctx = gsap.context(() => {
      // Progressively fill timeline track line height & move indicator dot based on scroll
      gsap.fromTo(
        trackLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            scroller: scrollContainer,
            start: 'top 30%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        indicatorDotRef.current,
        { top: '0%' },
        {
          top: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            scroller: scrollContainer,
            start: 'top 30%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      );

      // Fade-in cards progressively as timeline progresses
      const items = gsap.utils.toArray<HTMLElement>('.career-item-node');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              scroller: scrollContainer,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper section="CAREER" scrollable={true}>
      <TealBackground />

      <div
        ref={sectionRef}
        style={{
          minHeight: '100%', display: 'flex', flexDirection: 'column',
          padding: '2rem 4rem 6rem 4rem', position: 'relative', zIndex: 2,
          maxWidth: '1200px', margin: '0 auto',
        }}
        className="px-4 md:px-16"
      >
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '16px', letterSpacing: '0.3em', color: '#14B8A6' }}>
            CAREER JOURNEY
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(48px, 5.5vw, 64px)', color: 'var(--text)', lineHeight: 1 }}>
            Timeline & <span style={{ color: '#14B8A6' }}>Milestones</span>
          </h2>
        </motion.div>

        {/* Scroll-Driven Timeline alternating layout */}
        <div style={{ position: 'relative', width: '100%', padding: '1rem 0' }}>
          {/* Vertical Track Line Container */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'rgba(20, 184, 166, 0.15)',
            borderRadius: '2px',
          }} className="timeline-line-center">
            {/* Animated filling line */}
            <div
              ref={trackLineRef}
              style={{
                width: '100%',
                height: '100%',
                background: '#14B8A6',
                borderRadius: '2px',
                transformOrigin: 'top center',
                boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
              }}
            />
            {/* Moving Indicator Dot */}
            <div
              ref={indicatorDotRef}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#14B8A6',
                border: '3px solid var(--bg)',
                boxShadow: '0 0 12px #14B8A6',
                zIndex: 4,
              }}
            />
          </div>

          {/* Timeline Nodes (Alternating Present -> Past) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* 1. MAJOR ENTRY: TREZIX (Left Content, Right Image) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MajorTextCard data={trezixEntry} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right">
                <MajorImageCard src={trezixEntry.logo!} alt={trezixEntry.company} />
              </div>
            </div>

            {/* MINOR ENTRY: telescope.nvim (Right Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left" />
              <div style={{ width: '45%' }} className="timeline-side-right">
                <MinorTextCard item={minorEntries[0]} />
              </div>
            </div>

            {/* MINOR ENTRY: SRM Builds Hackathon (Left Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MinorTextCard item={minorEntries[1]} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right" />
            </div>

            {/* 2. MAJOR ENTRY: NOVELLA (Right Content, Left Image) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MajorImageCard src={novellaEntry.logo!} alt={novellaEntry.company} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right">
                <MajorTextCard data={novellaEntry} />
              </div>
            </div>

            {/* MINOR ENTRY: Splitzy (Left Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MinorTextCard item={minorEntries[2]} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right" />
            </div>

            {/* MINOR ENTRY: Verge (Right Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left" />
              <div style={{ width: '45%' }} className="timeline-side-right">
                <MinorTextCard item={minorEntries[3]} />
              </div>
            </div>

            {/* MINOR ENTRY: Samay Finance (Left Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MinorTextCard item={minorEntries[4]} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right" />
            </div>

            {/* MINOR ENTRY: AutoClicker (Right Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left" />
              <div style={{ width: '45%' }} className="timeline-side-right">
                <MinorTextCard item={minorEntries[5]} />
              </div>
            </div>

            {/* MINOR ENTRY: 3D Solar System (Left Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MinorTextCard item={minorEntries[6]} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right" />
            </div>

            {/* MINOR ENTRY: Python Knowledge Base (Right Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left" />
              <div style={{ width: '45%' }} className="timeline-side-right">
                <MinorTextCard item={minorEntries[7]} />
              </div>
            </div>

            {/* MINOR ENTRY: LeetCode Contest (Left Content) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
            }} className="career-item-node timeline-node-item">
              <div style={{ width: '45%' }} className="timeline-side-left">
                <MinorTextCard item={minorEntries[8]} />
              </div>
              <div style={{ width: '45%' }} className="timeline-side-right" />
            </div>

            {/* 3. ANCHOR ENTRY: SRM UNIVERSITY (Centered/Aligned Node) */}
            <div className="career-item-node" style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              position: 'relative',
              paddingTop: '1rem',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(20, 184, 166, 0.08)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                color: 'var(--text)',
                fontFamily: 'var(--font-label)',
                fontSize: '14px',
                zIndex: 2,
              }}>
                <GraduationCap size={16} color="#14B8A6" />
                <span><strong style={{ color: '#14B8A6' }}>SRM University</strong> — B.Tech Computer Science Engineering, started 2023</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line-center {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-node-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            padding-left: 45px !important;
          }
          .timeline-side-left, .timeline-side-right {
            width: 100% !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

function MajorTextCard({ data }: { data: MajorEntryData }) {
  return (
    <div
      style={{
        padding: '1.5rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        borderLeft: '4px solid #14B8A6',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(20,184,166,0.4)';
        el.style.boxShadow = '0 8px 24px rgba(20,184,166,0.08)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--border)';
        el.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: '20px', color: 'var(--text)', margin: 0 }}>
          {data.role}
        </h3>
        <span style={{
          fontFamily: 'var(--font-label)', fontSize: '14px', letterSpacing: '0.1em',
          padding: '0.2rem 0.5rem', borderRadius: '10px',
          background: 'rgba(20,184,166,0.1)', color: '#14B8A6',
        }}>
          {data.dateRange}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-label)', fontSize: '14px', color: '#14B8A6', marginBottom: '0.75rem', marginTop: 0 }}>
        {data.company}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {data.highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            <Plus size={12} color="#14B8A6" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MajorImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '16 / 10',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: 'var(--card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <img src={src} alt={alt} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', opacity: 0.8 }} />
    </div>
  );
}

function MinorTextCard({ item }: { item: MinorEntryData }) {
  return (
    <div
      style={{
        padding: '1rem 1.25rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        borderLeft: '2px solid rgba(20,184,166,0.4)',
        transition: 'border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(20,184,166,0.35)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--border)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '14px', fontFamily: 'var(--font-label)', color: '#14B8A6', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
        <span>{item.type}</span>
        <span>•</span>
        <span style={{ color: 'var(--text)' }}>{item.title}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
        {item.detail}
      </p>
    </div>
  );
}
