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

      <div
        className="projects-main-container"
        style={{
          padding: '2.5rem 4rem 4rem 4rem',
          position: 'relative',
          zIndex: 2,
          minHeight: '100%',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '15px', letterSpacing: '0.25em', color: '#F97316', marginBottom: '0.35rem' }}>
            PROJECT ARCHIVE
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(36px, 5vw, 54px)', color: 'var(--text)', lineHeight: 1 }}>
            Things I&apos;ve <span style={{ color: '#F97316' }}>built.</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="projects-filter-bar no-scrollbar"
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
          }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '13px',
                letterSpacing: '0.12em',
                padding: '0.45rem 1rem',
                background: filter === cat ? '#F97316' : 'rgba(255, 255, 255, 0.04)',
                color: filter === cat ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${filter === cat ? '#F97316' : 'var(--border)'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
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
                  borderRadius: '16px',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(249,115,22,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; }}
              >
                <div>
                  {/* ID / category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.85rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', color: 'rgba(249,115,22,0.6)', fontWeight: 'bold' }}>
                      {project.id}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '12px',
                      letterSpacing: '0.12em',
                      color: '#F97316',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}>
                      {project.category}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: '20px', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '0.5rem' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                    {project.techStack.map(tech => (
                      <span key={tech} style={{
                        fontFamily: 'var(--font-label)',
                        fontSize: '12px',
                        letterSpacing: '0.05em',
                        padding: '3px 8px',
                        background: 'rgba(249,115,22,0.08)',
                        border: '1px solid rgba(249,115,22,0.15)',
                        borderRadius: '4px',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Metrics */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    {[
                      { icon: Cpu, label: 'ARCH', value: project.architecture },
                      { icon: Database, label: 'SCALE', value: project.scale },
                      { icon: Zap, label: 'PERF', value: project.performance },
                    ].map(m => (
                      <div key={m.label} style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.15em', color: '#F97316', marginBottom: '2px' }}>
                          {m.label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-label)', fontSize: '14px', letterSpacing: '0.05em', color: 'var(--text)' }}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'var(--font-label)',
                        fontSize: '13px',
                        letterSpacing: '0.1em',
                        color: 'var(--text)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border)',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#F97316';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#F97316';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)';
                      }}
                    >
                      <GitBranch size={13} /> CODE
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontFamily: 'var(--font-label)',
                          fontSize: '13px',
                          letterSpacing: '0.1em',
                          color: '#F97316',
                          background: 'rgba(249, 115, 22, 0.1)',
                          border: '1px solid rgba(249, 115, 22, 0.3)',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(249, 115, 22, 0.2)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(249, 115, 22, 0.1)';
                        }}
                      >
                        <ExternalLink size={13} /> LIVE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-main-container {
            padding: 2rem 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .projects-main-container {
            padding: 1.5rem 1.25rem 4rem 1.25rem !important;
          }
          .projects-filter-bar {
            flex-wrap: nowrap !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
