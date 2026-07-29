'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';

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
      {/* Glow */}
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
  return (
    <SectionWrapper section="CAREER" scrollable={true}>
      <TealBackground />

      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '1.75rem 8rem 1.75rem 4rem', position: 'relative', zIndex: 2,
      }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#14B8A6' }}>
            CAREER JOURNEY
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1 }}>
            Career <span style={{ color: '#14B8A6' }}>Timeline</span>
          </h2>
        </motion.div>

        {/* Section Body Placeholder */}
        <div style={{ flex: 1 }} />
      </div>
    </SectionWrapper>
  );
}
