'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { skills } from '@/data/skills';
import { Layers, Shield, BookOpen } from 'lucide-react';

  const categories = [

  { key: 'PRIMARY' as const, label: 'PRIMARY', icon: Layers, desc: 'Daily drivers. Production-proven.', color: '#22C55E' },
  { key: 'SECONDARY' as const, label: 'SECONDARY', icon: Shield, desc: 'Solid working knowledge.', color: '#16A34A' },
  { key: 'LEARNING' as const, label: 'LEARNING', icon: BookOpen, desc: 'Actively building depth.', color: '#15803D' },
];

function GreenBlocks() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Subtle dot-grid pattern background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.4,
      }} />
      
      {/* Stat badges in top-right */}
      <div style={{
        position: 'absolute',
        right: '4%',
        top: '8%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems: 'flex-end',
      }}>
        <div style={{
          fontFamily: 'var(--font-label)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: 'rgba(34,197,94,0.7)',
          textAlign: 'right',
        }}>
          12+ TECHNOLOGIES
        </div>
        <div style={{
          fontFamily: 'var(--font-label)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: 'rgba(34,197,94,0.7)',
          textAlign: 'right',
        }}>
          SINCE 2025
        </div>
      </div>
      
      <div style={{
        position: 'absolute', right: 0, top: '20%', width: '40%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }} />
    </div>
  );
}

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
};
const item = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
};

const cardItem = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const itemTransition = { duration: 0.45, ease: 'easeOut' as const };

export default function SkillsSection() {
  return (
    <SectionWrapper section="SKILLS" scrollable={false}>
      <GreenBlocks />

      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 8rem 0 4rem', position: 'relative', zIndex: 2,
      }}>
        <motion.div variants={container} initial="initial" animate="animate">
          {/* Header */}
          <motion.div variants={item} style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#22C55E', marginBottom: '0.25rem' }}>
              TECH LOADOUT
            </p>
            <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(32px, 4.5vw, 56px)', color: 'var(--text)', lineHeight: 1 }}>
              What I <span style={{ color: '#22C55E' }}>work with.</span>
            </h2>
          </motion.div>

          {/* Category panels */}
          <motion.div
            variants={container}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
          >
            {categories.map((cat, index) => {
              const catSkills = skills.filter(s => s.category === cat.key);
              const Icon = cat.icon;
              const isPrimary = cat.key === 'PRIMARY';
              return (
                <motion.div
                  key={cat.key}
                  variants={cardItem}
                  transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 36px rgba(34,197,94,0.12)' }}
                  style={{
                    padding: isPrimary ? '2rem' : '1.25rem',
                    background: isPrimary ? 'rgba(34,197,94,0.08)' : 'var(--card)',
                    border: isPrimary ? '2px solid rgba(34,197,94,0.3)' : '1px solid rgba(34,197,94,0.15)',
                    borderRadius: '20px',
                    borderTop: isPrimary ? `4px solid ${cat.color}` : `2px solid ${cat.color}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    gridColumn: isPrimary ? 'span 2' : 'span 1',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isPrimary ? '1rem' : '0.75rem' }}>
                    <div style={{
                      width: isPrimary ? '40px' : '32px',
                      height: isPrimary ? '40px' : '32px',
                      display: 'grid', placeItems: 'center',
                      background: isPrimary ? 'rgba(34,197,94,0.2)' : 'rgba(34,197,94,0.12)',
                      borderRadius: '8px',
                      border: isPrimary ? `2px solid rgba(34,197,94,0.4)` : `1px solid rgba(34,197,94,0.24)`,
                    }}>
                      <Icon size={isPrimary ? 20 : 16} color={cat.color} />
                    </div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: isPrimary ? '0.6rem 1rem' : '0.5rem 0.85rem',
                      borderRadius: '8px',
                      background: isPrimary ? `${cat.color}20` : `${cat.color}12`,
                      border: isPrimary ? `1px solid ${cat.color}30` : `1px solid ${cat.color}22`,
                    }}>
                      <span style={{ fontFamily: 'var(--font-label)', fontSize: isPrimary ? '13px' : '12px', letterSpacing: '0.2em', color: cat.color, textTransform: 'uppercase' }}>
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
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 + 0.2 }}
                        whileHover={{ scale: 1.03, y: -1, backgroundColor: cat.color, color: '#fff', borderColor: cat.color }}
                        style={{
                          fontFamily: 'var(--font-label)',
                          fontSize: isPrimary ? '15px' : '14px',
                          letterSpacing: '0.06em',
                          padding: isPrimary ? '0.65rem 1rem' : '0.55rem 0.85rem',
                          background: isPrimary ? `${cat.color}15` : `${cat.color}10`,
                          border: isPrimary ? `1px solid ${cat.color}35` : `1px solid ${cat.color}28`,
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
          </motion.div>

          {/* Note */}
          <motion.p variants={item} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            marginTop: '1.5rem',
            letterSpacing: '0.02em',
          }}>
            No progress bars. No fake ratings. Skills are tools — I know which ones I can ship with and which ones I'm still learning.
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
