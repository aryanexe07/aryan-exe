'use client';

import { useState } from 'react';
import { GitBranch, Link2, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavSection, sectionColors, config } from '@/data/config';
import { useTheme } from '@/components/ThemeProvider';

const navItems: NavSection[] = ['HOME', 'ABOUT', 'PROJECTS', 'GITHUB', 'SKILLS', 'CONTACT'];

interface Props {
  active: NavSection;
  onNavigate: (s: NavSection) => void;
}

export default function Navbar({ active, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav style={{
        height: '60px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        gap: '1.5rem',
        background: 'var(--bg)',
        position: 'relative',
        zIndex: 100,
        flexShrink: 0,
        transition: 'background-color 300ms ease, border-color 300ms ease',
      }}>
        {/* Left — Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '0 0 auto' }}>
          <button
            onClick={() => { onNavigate('HOME'); setMobileOpen(false); }}
            style={{
              fontFamily: 'var(--font-hero)',
              fontSize: '18px',
              letterSpacing: '0.05em',
              color: 'var(--text)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 300ms ease',
            }}
          >
            ARYAN.EXE
          </button>

          <motion.button
            className="mobile-only"
            onClick={() => setMobileOpen((open) => !open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
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
                  fontSize: '12px',
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

        {/* Right — Social Icons + Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '0 0 auto', minWidth: 'fit-content' }}>
          <a href={config.githubUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', display: 'flex', transition: 'color 300ms ease' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <GitBranch size={18} />
          </a>
          <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', display: 'flex', transition: 'color 300ms ease' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Link2 size={18} />
          </a>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: theme === 'dark' ? 180 : 0 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              transition: 'color 300ms ease',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '60px',
              left: 0,
              right: 0,
              background: 'var(--bg)',
              borderBottom: '1px solid var(--border)',
              zIndex: 99,
              padding: '1rem',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { onNavigate(item); setMobileOpen(false); }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  fontFamily: 'var(--font-label)',
                  fontSize: '18px',
                  letterSpacing: '0.1em',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: active === item ? sectionColors[item] : 'var(--text)',
                  borderLeft: active === item ? `3px solid ${sectionColors[item]}` : '3px solid transparent',
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
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
