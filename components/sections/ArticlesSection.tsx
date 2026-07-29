'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';

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
      
      <div style={{
        position: 'absolute', right: 0, top: '20%', width: '40%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }} />
    </div>
  );
}

export default function ArticlesSection() {
  return (
    <SectionWrapper section="ARTICLES" scrollable={true}>
      <GreenBlocks />

      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '1.75rem 8rem 1.75rem 4rem', position: 'relative', zIndex: 2,
      }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#22C55E' }}>
            PUBLICATIONS
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1 }}>
            Articles & <span style={{ color: '#22C55E' }}>Writing</span>
          </h2>
        </motion.div>

        {/* Section Body Placeholder */}
        <div style={{ flex: 1 }} />
      </div>
    </SectionWrapper>
  );
}
