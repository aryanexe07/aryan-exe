'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { projects, ProjectCategory } from '@/data/projects';
import { GitBranch, ExternalLink, Cpu, Database, Zap } from 'lucide-react';

const CATEGORIES: ProjectCategory[] = ['ALL', 'INTERACTIVE', 'SYSTEMS', 'OPEN SOURCE', 'TOOLS', 'EXPERIMENTS'];

function OrangeGrid() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute',
        right: '-2%',
        top: '-10%',
        width: '45%',
        height: '120%',
        backgroundImage: `
          linear-gradient(rgba(249,115,22,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(249,115,22,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />
      {/* Orange frame */}
      <div style={{
        position: 'absolute', right: '3%', top: '8%',
        width: '40%', height: '84%',
        border: '1px solid rgba(249,115,22,0.12)',
        borderRadius: '2px',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: '20%',
        width: '30%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }} />
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>('ALL');

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <SectionWrapper section="PROJECTS" scrollable>
      <OrangeGrid />

      <div style={{ padding: '2rem 8rem 2rem 4rem', position: 'relative', zIndex: 2, minHeight: '100%' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#F97316', marginBottom: '0.25rem' }}>
            PROJECT ARCHIVE
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(32px, 4.5vw, 56px)', color: 'var(--text)', lineHeight: 1 }}>
            Things I&apos;ve <span style={{ color: '#F97316' }}>built.</span>

          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '13px',
                letterSpacing: '0.15em',
                padding: '0.4rem 1rem',
                background: filter === cat ? '#F97316' : 'transparent',
                color: filter === cat ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${filter === cat ? '#F97316' : 'var(--border)'}`,
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
              paddingBottom: '2rem',
            }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(249,115,22,0.1)' }}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'border-color 0.2s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(249,115,22,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; }}
              >
                {/* ID / category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-hero)', fontSize: '12px', color: 'rgba(249,115,22,0.4)' }}>
                    {project.id}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#F97316',
                    background: 'rgba(249,115,22,0.08)',
                    padding: '2px 8px',
                    borderRadius: '2px',
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-label)', fontSize: '20px', letterSpacing: '0.05em', color: 'var(--text)', marginBottom: '0.5rem' }}>
                  {project.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      padding: '2px 8px',
                      background: 'rgba(17,17,17,0.05)',
                      borderRadius: '2px',
                      color: 'var(--text-muted)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  {[
                    { icon: Cpu, label: 'ARCH', value: project.architecture },
                    { icon: Database, label: 'SCALE', value: project.scale },
                    { icon: Zap, label: 'PERF', value: project.performance },
                  ].map(m => (
                    <div key={m.label} style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '2px' }}>
                        {m.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-label)', fontSize: '14px', color: 'var(--text)' }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <GitBranch size={13} /> CODE
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.1em', color: '#F97316', textDecoration: 'none', transition: 'opacity 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      <ExternalLink size={13} /> LIVE
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
