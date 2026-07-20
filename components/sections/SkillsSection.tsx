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
      {/* Modular blocks */}
      {[
        { right: '4%', top: '10%', w: 120, h: 80 },
        { right: '16%', top: '5%', w: 60, h: 60 },
        { right: '8%', top: '40%', w: 90, h: 120 },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{ duration: 8 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          style={{
            position: 'absolute',
            right: b.right,
            top: (b as { top?: string }).top,
            bottom: (b as { bottom?: string }).bottom,

            width: b.w,
            height: b.h,
            border: '1px solid rgba(34,197,94,0.15)',
            borderRadius: '2px',
            background: 'rgba(34,197,94,0.03)',
          }}
        />
      ))}
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
              return (
                <motion.div
                  key={cat.key}
                  variants={cardItem}
                  transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 36px rgba(34,197,94,0.12)' }}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    borderTop: `3px solid ${cat.color}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '32px', height: '32px', display: 'grid', placeItems: 'center',
                      background: 'rgba(34,197,94,0.12)', borderRadius: '8px',
                      border: `1px solid rgba(34,197,94,0.24)`,
                    }}>
                      <Icon size={16} color={cat.color} />
                    </div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.5rem 0.85rem', borderRadius: '8px',
                      background: `${cat.color}12`, border: `1px solid ${cat.color}22`,
                    }}>
                      <span style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.2em', color: cat.color, textTransform: 'uppercase' }}>
                        {cat.label}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
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
                          fontSize: '14px',
                          letterSpacing: '0.06em',
                          padding: '0.55rem 0.85rem',
                          background: `${cat.color}10`,
                          border: `1px solid ${cat.color}28`,
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
