'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Clock, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import { DevToArticle } from '@/app/api/articles/route';

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
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const res = await fetch('/api/articles');
        if (res.ok) {
          const data = await res.json();
          setArticles(data.articles || []);
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  return (
    <SectionWrapper section="ARTICLES" scrollable={true}>
      <GreenBlocks />

      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '1.75rem 8rem 1.75rem 4rem', position: 'relative', zIndex: 2,
      }} className="px-4 md:pl-16 md:pr-32">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#22C55E' }}>
            PUBLICATIONS
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1 }}>
            Articles & <span style={{ color: '#22C55E' }}>Writing</span>
          </h2>
        </motion.div>

        {/* Content Area */}
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-label)', letterSpacing: '0.2em', padding: '2rem 0' }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
              <BookOpen size={20} color="#22C55E" />
            </motion.div>
            LOADING ARTICLES...
          </div>
        ) : articles.length === 0 ? (
          <div style={{
            padding: '3rem 2rem',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '2rem 0',
          }}>
            <BookOpen size={32} color="#22C55E" style={{ marginBottom: '1rem', opacity: 0.8 }} />
            <h3 style={{ fontFamily: 'var(--font-hero)', fontSize: '20px', color: 'var(--text)', marginBottom: '0.5rem' }}>
              No articles yet
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)' }}>
              Check back soon for technical posts, write-ups, and guides!
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            paddingBottom: '3rem',
          }}>
            {articles.map((article, idx) => {
              const image = article.cover_image || article.social_image;
              const formattedDate = new Date(article.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <motion.a
                  key={article.id}
                  href={article.canonical_url || article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(34,197,94,0.4)';
                    el.style.boxShadow = '0 12px 30px rgba(34,197,94,0.12)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {image && (
                    <div style={{ width: '100%', height: '160px', overflow: 'hidden', background: '#0a0d14' }}>
                      <img
                        src={image}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'var(--font-body)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={13} color="#22C55E" />
                        {formattedDate}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={13} color="#22C55E" />
                        {article.reading_time_minutes} min read
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-hero)',
                      fontSize: '18px',
                      color: 'var(--text)',
                      lineHeight: 1.3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}>
                      <span>{article.title}</span>
                      <ExternalLink size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      marginTop: 'auto',
                    }}>
                      {article.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
