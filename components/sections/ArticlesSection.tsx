'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Clock, Calendar, ExternalLink, BookOpen, Tag } from 'lucide-react';
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

function ArticleSkeleton() {
  return (
    <div style={{
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '380px',
    }}>
      <div style={{ width: '100%', height: '160px', background: 'rgba(255, 255, 255, 0.05)', animation: 'pulse 1.5s infinite ease-in-out' }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '80px', height: '12px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)' }} />
          <div style={{ width: '60px', height: '12px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)' }} />
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <div style={{ width: '50px', height: '16px', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.15)' }} />
          <div style={{ width: '60px', height: '16px', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.15)' }} />
        </div>
        <div style={{ width: '100%', height: '20px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.1)' }} />
        <div style={{ width: '70%', height: '20px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.1)' }} />
        <div style={{ width: '100%', height: '14px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', marginTop: 'auto' }} />
      </div>
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            paddingBottom: '3rem',
          }}>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
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
              No articles yet — check back soon
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
              const tags = (article.tag_list || []).slice(0, 2);

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
                  {/* Fixed 16:9 Aspect Ratio Container */}
                  <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', background: '#0a0d14', position: 'relative' }}>
                    {image ? (
                      <img
                        src={image}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(34, 197, 94, 0.05)' }}>
                        <BookOpen size={36} color="rgba(34, 197, 94, 0.4)" />
                      </div>
                    )}
                  </div>

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

                    {/* Tag Pills (up to 2) */}
                    {tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {tags.map(t => (
                          <span
                            key={t}
                            style={{
                              fontFamily: 'var(--font-label)',
                              fontSize: '11px',
                              letterSpacing: '0.05em',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '6px',
                              background: 'rgba(34, 197, 94, 0.1)',
                              border: '1px solid rgba(34, 197, 94, 0.25)',
                              color: '#22C55E',
                              textTransform: 'lowercase',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.2rem',
                            }}
                          >
                            <Tag size={10} color="#22C55E" />
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

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

                    {/* Clamped Excerpt (2 lines max) */}
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
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

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.2; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </SectionWrapper>
  );
}
