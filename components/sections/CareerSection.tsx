'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Calendar, Plus, Briefcase, Code, Award, Rocket, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Milestone {
  id: string;
  isMajor: boolean;
  dateRange: string;
  role: string;
  company: string;
  highlights?: string[];
  subItems?: { title: string; subtitle?: string }[];
}

const timelineData: Milestone[] = [
  {
    id: 'trezix',
    isMajor: true,
    dateRange: '2024 — PRESENT',
    role: 'Software Engineering Intern',
    company: 'Trezix Solutions',
    highlights: [
      'Developed core web modules and API services for enterprise logistics software',
      'Engineered responsive UI components and state management pipelines',
      'Optimized database queries and backend workflows for improved throughput',
      'Collaborated closely with cross-functional teams to deliver production releases',
    ],
    subItems: [
      { title: 'Open-Source PR', subtitle: 'Merged upstream layout fixes in telescope.nvim' },
      { title: 'Hackathon finalist', subtitle: 'Built rapid AI search prototype within 36 hrs' },
    ],
  },
  {
    id: 'novella',
    isMajor: true,
    dateRange: '2023 — 2024',
    role: 'Lead Architect & Full-Stack Developer',
    company: 'Novella Platform',
    highlights: [
      'Built a full-stack block-based writing application with TipTap and Next.js',
      'Designed neo-brutalist custom UI system with sub-100ms response metrics',
      'Integrated Clerk authentication and Prisma ORM backend data store',
    ],
    subItems: [
      { title: 'Samay Editorial', subtitle: 'Crafted GSAP horizontal scroll editorial experience' },
      { title: 'AutoClicker Tooling', subtitle: 'Packaged PyQt desktop application with hotkey engine' },
    ],
  },
  {
    id: 'verge-splitzy',
    isMajor: true,
    dateRange: '2023 — 2023',
    role: 'Full-Stack & Systems Developer',
    company: 'Splitzy & Verge Projects',
    highlights: [
      'Engineered Splitzy UPI-native offline-first expense ledger with Serwist PWA',
      'Developed Verge memory organization system with Supabase & Firebase Auth',
      'Implemented real-time synchronization and localized offline client caching',
    ],
    subItems: [
      { title: '3D Solar System', subtitle: '60fps WebGL simulation using Three.js' },
      { title: 'Python Knowledge Base', subtitle: 'Automated CI/CD linting suite via GitHub Actions' },
    ],
  },
];

function TealBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Large teal circle */}
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
      {/* Radar rings */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          style={{
            position: 'absolute',
            right: `-8%`,
            top: '50%',
            transform: 'translateY(-50%)',
            width: `${480 + i * 120}px`,
            height: `${480 + i * 120}px`,
            borderRadius: '50%',
            border: `1px solid rgba(20,184,166,${0.1 - i * 0.02})`,
            marginRight: `-${i * 60}px`,
            marginTop: `-${i * 60}px`,
          }}
        />
      ))}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    const scrollContainer = containerRef.current.closest('.scroll-area') || window;
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial dash offset
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const ctx = gsap.context(() => {
      // Progressive line drawing
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollContainer,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });

      // Entry animations
      const entries = gsap.utils.toArray<HTMLElement>('.timeline-entry');
      entries.forEach((entry) => {
        const dot = entry.querySelector('.timeline-dot');
        const content = entry.querySelector('.timeline-content');

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.5, backgroundColor: 'var(--bg)', borderColor: 'rgba(20,184,166,0.3)' },
            {
              scale: 1.2,
              backgroundColor: '#14B8A6',
              borderColor: '#14B8A6',
              duration: 0.4,
              scrollTrigger: {
                trigger: entry,
                scroller: scrollContainer,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: entry,
                scroller: scrollContainer,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper section="CAREER" scrollable={true}>
      <TealBackground />

      <div
        ref={containerRef}
        style={{
          minHeight: '100%', display: 'flex', flexDirection: 'column',
          padding: '1.75rem 4rem 4rem 4rem', position: 'relative', zIndex: 2,
          maxWidth: '1200px', margin: '0 auto',
        }}
        className="px-4 md:px-16"
      >
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#14B8A6' }}>
            CAREER JOURNEY
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1 }}>
            Timeline & <span style={{ color: '#14B8A6' }}>Milestones</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', width: '100%', padding: '1rem 0' }}>
          {/* SVG Dashed Progressive Line */}
          <svg
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: 'calc(100% - 40px)',
              overflow: 'visible',
              pointerEvents: 'none',
            }}
            className="timeline-svg-line"
          >
            {/* Background static dashed line */}
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="rgba(20,184,166,0.2)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            {/* Active animated stroke line */}
            <path
              ref={pathRef}
              d="M 2 0 L 2 2000"
              stroke="#14B8A6"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Timeline Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="timeline-entry"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  {/* Central Dot Marker */}
                  <div
                    className="timeline-dot"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '24px',
                      transform: 'translate(-50%, -50%)',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      border: '2px solid rgba(20,184,166,0.4)',
                      background: 'var(--bg)',
                      zIndex: 3,
                      boxShadow: '0 0 12px rgba(20,184,166,0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  />

                  {/* Left Column (Content or Date) */}
                  <div
                    style={{
                      width: '45%',
                      textAlign: isEven ? 'right' : 'left',
                      paddingRight: isEven ? '2rem' : '0',
                      paddingLeft: isEven ? '0' : '2rem',
                      order: isEven ? 1 : 3,
                    }}
                    className="timeline-col-left"
                  >
                    {isEven ? (
                      <div className="timeline-content">
                        <MajorCard item={item} align="right" />
                      </div>
                    ) : (
                      <div className="timeline-content" style={{ paddingTop: '10px' }}>
                        <DateBadge date={item.dateRange} align="left" />
                      </div>
                    )}
                  </div>

                  {/* Right Column (Date or Content) */}
                  <div
                    style={{
                      width: '45%',
                      textAlign: isEven ? 'left' : 'right',
                      paddingLeft: isEven ? '2rem' : '0',
                      paddingRight: isEven ? '0' : '2rem',
                      order: isEven ? 3 : 1,
                    }}
                    className="timeline-col-right"
                  >
                    {isEven ? (
                      <div className="timeline-content" style={{ paddingTop: '10px' }}>
                        <DateBadge date={item.dateRange} align="right" />
                      </div>
                    ) : (
                      <div className="timeline-content">
                        <MajorCard item={item} align="left" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-svg-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-entry {
            flex-direction: column !important;
            padding-left: 45px !important;
          }
          .timeline-dot {
            left: 20px !important;
            transform: translateY(-50%) !important;
          }
          .timeline-col-left, .timeline-col-right {
            width: 100% !important;
            text-align: left !important;
            padding: 0 !important;
            order: 1 !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

function DateBadge({ date, align }: { date: string; align: 'left' | 'right' }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.4rem 0.85rem',
      borderRadius: '20px',
      background: 'rgba(20,184,166,0.1)',
      border: '1px solid rgba(20,184,166,0.25)',
      color: '#14B8A6',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: '0.15em',
      justifyContent: align === 'right' ? 'flex-start' : 'flex-end',
    }}>
      <Calendar size={13} color="#14B8A6" />
      <span>{date}</span>
    </div>
  );
}

function MajorCard({ item, align }: { item: Milestone; align: 'left' | 'right' }) {
  return (
    <div
      style={{
        padding: '1.75rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        textAlign: 'left',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(20,184,166,0.4)';
        el.style.boxShadow = '0 12px 32px rgba(20,184,166,0.1)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--border)';
        el.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
        <Briefcase size={16} color="#14B8A6" />
        <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: '20px', color: 'var(--text)', lineHeight: 1.2 }}>
          {item.role}
        </h3>
      </div>

      <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.1em', color: '#14B8A6', marginBottom: '1rem' }}>
        {item.company}
      </p>

      {item.highlights && item.highlights.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {item.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              <Plus size={13} color="#14B8A6" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Compact Sub-entries */}
      {item.subItems && item.subItems.length > 0 && (
        <div style={{
          marginTop: '1rem',
          paddingTop: '0.85rem',
          borderTop: '1px dashed rgba(20,184,166,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
        }}>
          {item.subItems.map((sub, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '11px', fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#14B8A6', display: 'inline-block' }} />
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{sub.title}:</strong>
              <span>{sub.subtitle}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
