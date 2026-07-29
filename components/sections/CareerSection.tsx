'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Calendar, Plus, Briefcase, Award, Code, GraduationCap } from 'lucide-react';
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
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '-8%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'rgba(20,184,166,0.06)',
        }}
      />
      <div style={{
        position: 'absolute', right: 0, top: '20%',
        width: '40%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(20,184,166,0.08) 0%, transparent 70%)',
        filter: 'blur(20px)',
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
            start: 'top 40%',
            end: 'bottom 80%',
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
            start: 'top 40%',
            end: 'bottom 80%',
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
          maxWidth: '1100px', margin: '0 auto',
        }}
        className="px-4 md:px-16"
      >
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#14B8A6' }}>
            CAREER JOURNEY
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1 }}>
            Timeline & <span style={{ color: '#14B8A6' }}>Milestones</span>
          </h2>
        </motion.div>

        {/* Scroll-Driven Timeline Grid Container */}
        <div style={{ position: 'relative', width: '100%', paddingLeft: '2.5rem' }}>
          {/* Vertical Track Line Container */}
          <div style={{
            position: 'absolute',
            left: '8px',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'rgba(20, 184, 166, 0.15)',
            borderRadius: '2px',
          }}>
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

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* 1. MAJOR ENTRY: TREZIX */}
            <div className="career-item-node" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '-2.5rem', top: '1.5rem', transform: 'translateX(-50%)',
                width: '18px', height: '18px', borderRadius: '50%', background: '#14B8A6', border: '4px solid var(--bg)', zIndex: 3,
              }} />
              <MajorHeroCard data={trezixEntry} />
            </div>

            {/* MINOR ENTRIES CLUSTER 1 */}
            <div className="career-item-node" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {minorEntries.slice(0, 3).map((item, idx) => (
                <MinorCard key={idx} item={item} />
              ))}
            </div>

            {/* 2. MAJOR ENTRY: NOVELLA */}
            <div className="career-item-node" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '-2.5rem', top: '1.5rem', transform: 'translateX(-50%)',
                width: '18px', height: '18px', borderRadius: '50%', background: '#14B8A6', border: '4px solid var(--bg)', zIndex: 3,
              }} />
              <MajorHeroCard data={novellaEntry} />
            </div>

            {/* MINOR ENTRIES CLUSTER 2 */}
            <div className="career-item-node" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {minorEntries.slice(3).map((item, idx) => (
                <MinorCard key={idx} item={item} />
              ))}
            </div>

            {/* 3. ANCHOR ENTRY: SRM UNIVERSITY */}
            <div className="career-item-node" style={{ position: 'relative', paddingTop: '1rem' }}>
              <div style={{
                position: 'absolute', left: '-2.5rem', top: '1.75rem', transform: 'translateX(-50%)',
                width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(20, 184, 166, 0.5)', border: '2px solid var(--bg)', zIndex: 3,
              }} />
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(20, 184, 166, 0.08)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
              }}>
                <GraduationCap size={16} color="#14B8A6" />
                <span><strong style={{ color: '#14B8A6' }}>SRM University</strong> — B.Tech Computer Science Engineering</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function MajorHeroCard({ data }: { data: MajorEntryData }) {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        borderLeft: '4px solid #14B8A6',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(20,184,166,0.5)';
        el.style.boxShadow = '0 16px 40px rgba(20,184,166,0.12)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--border)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {data.logo ? (
            <img
              src={data.logo}
              alt={data.company}
              style={{ width: '44px', height: '44px', borderRadius: '12px', border: '1px solid rgba(20,184,166,0.3)' }}
            />
          ) : (
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Briefcase size={22} color="#14B8A6" />
            </div>
          )}
          <div>
            <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: '22px', color: 'var(--text)', lineHeight: 1.2 }}>
              {data.role}
            </h3>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.15em', color: '#14B8A6' }}>
              {data.company}
            </span>
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.4rem 0.85rem', borderRadius: '20px',
          background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)',
          color: '#14B8A6', fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.1em',
        }}>
          <Calendar size={12} color="#14B8A6" />
          <span>{data.dateRange}</span>
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {data.highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
            <Plus size={14} color="#14B8A6" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MinorCard({ item }: { item: MinorEntryData }) {
  return (
    <div
      style={{
        padding: '0.85rem 1.1rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
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
      <div style={{
        width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', flexShrink: 0,
      }} />
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '11px', fontFamily: 'var(--font-label)', color: '#14B8A6', letterSpacing: '0.05em' }}>
          <span>{item.type}</span>
          <span>•</span>
          <span style={{ color: 'var(--text)' }}>{item.title}</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.detail}
        </p>
      </div>
    </div>
  );
}
