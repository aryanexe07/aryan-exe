'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { config } from '@/data/config';
import { Mail, GitBranch, Link2, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';

function PinkPanel() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Background image */}
      <img
        src="/contact.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '-5%',
          top: '5%',
          width: '45%',
          height: '90%',
          background: 'rgba(236,72,153,0.04)',
          borderRadius: '2px',
        }}
      />
      <div style={{
        position: 'absolute', right: '3%', top: '8%',
        width: '42%', height: '84%',
        border: '1px solid rgba(236,72,153,0.1)',
        borderRadius: '2px',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: '15%',
        width: '40%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />
    </div>
  );
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputStyle = {
  width: '100%',
  padding: '0.625rem 0.875rem',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '3px',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const container = {
  animate: { transition: { staggerChildren: 0.07 } },
};
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const itemTransition = { duration: 0.4, ease: 'easeOut' as const };

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const links = [
    { icon: Mail, label: 'EMAIL', value: config.email, href: `mailto:${config.email}` },
    { icon: GitBranch, label: 'GITHUB', value: `@${config.githubUsername}`, href: config.githubUrl },
    { icon: Link2, label: 'LINKEDIN', value: '/in/aryan', href: config.linkedinUrl },
    { icon: FileText, label: 'RESUME', value: 'Download PDF', href: config.resumeUrl },
  ];

  return (
    <SectionWrapper section="CONTACT" scrollable={false}>
      <PinkPanel />

      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 8rem 0 4rem', position: 'relative', zIndex: 2,
      }}>
        <motion.div variants={container} initial="initial" animate="animate"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '900px' }}
        >
          {/* Left */}
          <div>
            <motion.p variants={item} style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#EC4899', marginBottom: '0.25rem' }}>
              COMMS TERMINAL
            </motion.p>
            <motion.h2 variants={item} style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(32px, 4.5vw, 56px)', color: 'var(--text)', lineHeight: 1, marginBottom: '1rem' }}>
              Let's <span style={{ color: '#EC4899' }}>build</span><br />something.
            </motion.h2>
            <motion.p variants={item} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Open to full-time roles, freelance projects, and interesting collaborations. If you have something worth building, let's talk.
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.15s',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(236,72,153,0.3)'; el.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateX(0)'; }}
                >
                  <Icon size={16} color="#EC4899" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>{label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text)' }}>{value}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div>
              <label style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.2em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                NAME
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#EC4899')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.2em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                EMAIL
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#EC4899')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.2em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                MESSAGE
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about what you&apos;re building..."

                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.target.style.borderColor = '#EC4899')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {status === 'success' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22C55E', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', fontSize: '14px' }}>
                <CheckCircle size={16} /> MESSAGE SENT — I&apos;ll be in touch.
              </div>
            ) : status === 'error' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F97316', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', fontSize: '14px' }}>
                <AlertCircle size={16} /> Something went wrong. Try emailing me directly.
              </div>
            ) : (

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '14px',
                  letterSpacing: '0.2em',
                  padding: '0.75rem 1.5rem',
                  background: '#EC4899',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'opacity 0.2s, transform 0.15s',
                  width: '100%',
                }}
                onMouseEnter={e => { if (status !== 'sending') (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                <Send size={14} />
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            )}
          </motion.form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
