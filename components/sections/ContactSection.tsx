'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { config } from '@/data/config';
import { Mail, GitBranch, Link2, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';

import Image from 'next/image';

function PinkPanel() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Background image */}
      <Image
        src="/contact.jpg"
        alt="Contact background"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          opacity: 0.35,
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
        filter: 'blur(20px)',
      }} />
    </div>
  );
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  fontFamily: 'var(--font-body)',
  fontSize: '16px', // 16px prevents iOS Safari from automatically zooming on focus
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const container = {
  animate: { transition: { staggerChildren: 0.07 } },
};
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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
    { icon: Link2, label: 'LINKEDIN', value: '/in/aryan-tailor', href: config.linkedinUrl },
    { icon: FileText, label: 'RESUME', value: 'Download PDF', href: config.resumeUrl },
  ];

  return (
    <SectionWrapper section="CONTACT" scrollable={true}>
      <PinkPanel />

      <div
        className="contact-main-container"
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2.5rem 4rem 4rem 4rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div variants={container} initial="initial" animate="animate"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', maxWidth: '960px', width: '100%' }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <motion.p variants={item} style={{ fontFamily: 'var(--font-label)', fontSize: '15px', letterSpacing: '0.25em', color: '#EC4899', marginBottom: '0.35rem' }}>
              COMMS TERMINAL
            </motion.p>
            <motion.h2 variants={item} style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--text)', lineHeight: 1, marginBottom: '1rem' }}>
              Let&apos;s <span style={{ color: '#EC4899' }}>build</span><br />something.
            </motion.h2>
            <motion.p variants={item} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
              Open to full-time roles, freelance projects, and interesting collaborations. If you have something worth building, let&apos;s talk.
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.15s, background-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(236,72,153,0.4)';
                    el.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  <Icon size={18} color="#EC4899" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>{label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text)', wordBreak: 'break-all' }}>{value}</div>
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
              <label style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
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
              <label style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
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
              <label style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about what you're building..."
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.target.style.borderColor = '#EC4899')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {status === 'success' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22C55E', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', fontSize: '14px', padding: '0.75rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '6px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                <CheckCircle size={16} /> MESSAGE SENT — I&apos;ll be in touch.
              </div>
            ) : status === 'error' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F97316', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', fontSize: '14px', padding: '0.75rem', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '6px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                <AlertCircle size={16} /> Something went wrong. Try emailing me directly.
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '15px',
                  letterSpacing: '0.15em',
                  padding: '0.85rem 1.5rem',
                  background: '#EC4899',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'opacity 0.2s, transform 0.15s, box-shadow 0.2s',
                  boxShadow: '0 4px 16px rgba(236,72,153,0.3)',
                  width: '100%',
                }}
                onMouseEnter={e => { if (status !== 'sending') (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                <Send size={15} />
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            )}
          </motion.form>
        </motion.div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .contact-main-container {
            padding: 2rem 2.5rem !important;
          }
          .contact-grid {
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .contact-main-container {
            padding: 1.5rem 1.25rem 4rem 1.25rem !important;
            justify-content: flex-start !important;
            padding-top: 2rem !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
