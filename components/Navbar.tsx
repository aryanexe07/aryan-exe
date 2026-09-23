'use client';

import { useState } from 'react';
import { GitBranch, Link2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavSection, sectionColors, config } from '@/data/config';

const navItems: NavSection[] = ['HOME', 'ABOUT', 'PROJECTS', 'CAREER', 'ARTICLES', 'CONTACT'];

interface Props {
  active: NavSection;
  onNavigate: (s: NavSection) => void;
}

export default function Navbar({ active, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav style={{
        height: '60px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: 0,
        background: 'var(--bg)',
        position: 'relative',
        zIndex: 100,
        flexShrink: 0,
        transition: 'background-color 300ms ease, border-color 300ms ease',
      }}>
        {/* Left — Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          padding: '0 1.25rem',
          flex: '0 0 auto',
        }}>
          <button
            onClick={() => { onNavigate('HOME'); setMobileOpen(false); }}
            style={{
              fontFamily: 'var(--font-hero)',
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 200ms ease',
              textTransform: 'uppercase',
            }}
          >
            ARYAN.EXE
          </button>
        </div>

        {/* Center — Desktop Nav (Tab Strip) */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'stretch', height: '60px', gap: 0, flex: '1 1 auto', minWidth: 0 }}>
          {navItems.map((item) => {
            const isActive = active === item;
            const itemColor = sectionColors[item];
            return (
              <button
                key={item}
                onClick={() => { onNavigate(item); setMobileOpen(false); }}
                style={{
                  flex: 1,
                  fontFamily: 'var(--font-label)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  background: isActive ? itemColor : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? `4px solid ${itemColor}` : '1px solid var(--border)',
                  cursor: 'pointer',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                  position: 'relative',
                  transition: 'all 250ms ease',
                  textTransform: 'uppercase',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isActive ? `inset 0 -4px 0 ${itemColor}` : 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = `${itemColor}12`;
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'transparent';
                  }
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right — Social Icons & Mobile Toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          padding: '0 1.25rem',
          height: '100%',
          flex: '0 0 auto',
        }}>
          <a href={config.githubUrl} target="_blank" rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', padding: '6px', transition: 'color 300ms ease' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <GitBranch size={18} />
          </a>
          <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', padding: '6px', transition: 'color 300ms ease' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Link2 size={18} />
          </a>

          {/* Mobile Hamburger Button */}
          <motion.button
            className="mobile-only"
            onClick={() => setMobileOpen((open) => !open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: mobileOpen ? '#FFFFFF' : 'var(--text-muted)',
              marginLeft: '0.25rem',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                top: '60px',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(4px)',
                zIndex: 150,
              }}
            />

            {/* Menu Dropdown Container */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: '60px',
                left: 0,
                right: 0,
                background: '#0e1422',
                borderBottom: '1px solid var(--border)',
                zIndex: 160,
                padding: '0.75rem 1rem 1.25rem 1rem',
                boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)',
                maxHeight: 'calc(100dvh - 60px)',
                overflowY: 'auto',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {navItems.map((item) => {
                  const isActive = active === item;
                  const itemColor = sectionColors[item];
                  return (
                    <button
                      key={item}
                      onClick={() => { onNavigate(item); setMobileOpen(false); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-label)',
                        fontSize: '16px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        background: isActive ? `${itemColor}18` : 'rgba(255, 255, 255, 0.02)',
                        border: `1px solid ${isActive ? `${itemColor}40` : 'rgba(255, 255, 255, 0.04)'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: isActive ? '#FFFFFF' : 'var(--text)',
                        borderLeft: `4px solid ${isActive ? itemColor : 'transparent'}`,
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span>{item}</span>
                      {isActive && (
                        <span style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: itemColor,
                          boxShadow: `0 0 8px ${itemColor}`,
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  );
}
