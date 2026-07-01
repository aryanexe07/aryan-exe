'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';


import { GitHubUser, GitHubRepo } from '@/data/github';
import { config } from '@/data/config';
import { GitBranch, Star, GitFork, Users, BookOpen, ExternalLink } from 'lucide-react';

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
}

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
      {[0, 1, 2, 3].map((i) => (
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
        filter: 'blur(50px)',
      }} />
    </div>
  );
}

export default function GithubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${config.githubUsername}`),
          fetch(`https://api.github.com/users/${config.githubUsername}/repos?sort=updated&per_page=6`),
        ]);

        if (!userRes.ok) throw new Error('GitHub API error');

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        setUser(userData);
        setRepos(reposData.slice(0, 6));

        // Tally languages
        const langCount: Record<string, number> = {};
        reposData.forEach(r => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        setLanguages(langCount);
      } catch {
        setError(true);
        // Fallback mock data
        setUser({
          login: config.githubUsername,
          name: 'Aryan',
          avatar_url: `https://ui-avatars.com/api/?name=Aryan&background=14B8A6&color=fff&size=120`,
          bio: 'Full-stack developer. Building at the intersection of engineering and design.',
          followers: 248,
          following: 91,
          public_repos: 42,
          html_url: config.githubUrl,
        });
        setRepos([
          { id: 1, name: 'react-motion-kit', description: 'Open-source animation primitives for React', html_url: '#', stargazers_count: 127, forks_count: 19, language: 'TypeScript', updated_at: new Date().toISOString(), topics: ['react', 'animation'] },
          { id: 2, name: 'nexusdb-client', description: 'High-performance database GUI', html_url: '#', stargazers_count: 89, forks_count: 12, language: 'TypeScript', updated_at: new Date().toISOString(), topics: ['database', 'gui'] },
          { id: 3, name: 'flowcanvas', description: 'Visual workflow automation', html_url: '#', stargazers_count: 64, forks_count: 8, language: 'React', updated_at: new Date().toISOString(), topics: ['automation'] },
          { id: 4, name: 'chrono-cli', description: 'Terminal-based time tracking', html_url: '#', stargazers_count: 43, forks_count: 5, language: 'Node.js', updated_at: new Date().toISOString(), topics: ['cli'] },
          { id: 5, name: 'schema-sync', description: 'API schema change detection', html_url: '#', stargazers_count: 31, forks_count: 3, language: 'TypeScript', updated_at: new Date().toISOString(), topics: ['openapi'] },
          { id: 6, name: 'portal-ui', description: 'Design system for internal tools', html_url: '#', stargazers_count: 22, forks_count: 2, language: 'TypeScript', updated_at: new Date().toISOString(), topics: ['design-system'] },
        ]);
        setLanguages({ TypeScript: 18, JavaScript: 9, Python: 6, 'Node.js': 5, Go: 2, Rust: 2 });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const topLangs = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const totalLang = topLangs.reduce((a, [, v]) => a + v, 0);

  const langColors: Record<string, string> = {
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    Python: '#3776AB',
    'Node.js': '#339933',
    Go: '#00ADD8',
    Rust: '#CE412B',
    CSS: '#1572B6',
    HTML: '#E34F26',
    React: '#61DAFB',
  };

  return (
    <SectionWrapper section="GITHUB" scrollable={true}>
      <TealBackground />

      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '1.75rem 8rem 1.75rem 4rem', position: 'relative', zIndex: 2,
      }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.3em', color: '#14B8A6' }}>
            DEVELOPER PROFILE
          </p>
          <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1 }}>
            GitHub <span style={{ color: '#14B8A6' }}>Activity</span>
          </h2>
        </motion.div>

        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-label)', letterSpacing: '0.2em' }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
              <GitBranch size={20} color="#14B8A6" />
            </motion.div>
            FETCHING DATA...
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1.5rem' }}
          >
            {/* Left — Profile Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Avatar card */}
              <div style={{ padding: '1.25rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '20px', textAlign: 'center' }}>
                <img
                  src={user?.avatar_url}
                  alt={user?.name}
                  style={{ width: '72px', height: '72px', borderRadius: '50%', border: '3px solid rgba(20,184,166,0.3)', marginBottom: '0.75rem' }}
                />
                <h3 style={{ fontFamily: 'var(--font-label)', fontSize: '20px', letterSpacing: '0.05em', color: 'var(--text)', marginBottom: '0.25rem' }}>
                  {user?.name || user?.login}
                </h3>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: '13px', letterSpacing: '0.1em', color: '#14B8A6', marginBottom: '0.5rem' }}>
                  @{user?.login}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {user?.bio}
                </p>
              </div>

              {/* Stat counters */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { icon: Users, label: 'FOLLOWERS', value: user?.followers || 0 },
                  { icon: Users, label: 'FOLLOWING', value: user?.following || 0 },
                  { icon: BookOpen, label: 'REPOS', value: user?.public_repos || 0 },
                  { icon: Star, label: 'STARS', value: repos.reduce((a, r) => a + r.stargazers_count, 0) },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} style={{ padding: '0.875rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '20px', textAlign: 'center' }}>
                      <Icon size={14} color="#14B8A6" style={{ marginBottom: '0.35rem' }} />
                      <div style={{ fontFamily: 'var(--font-hero)', fontSize: '22px', color: 'var(--text)', lineHeight: 1 }}>
                        <AnimatedCounter target={s.value} />
                      </div>
                      <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {s.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Language bar */}
              <div style={{ padding: '1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '20px' }}>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.2em', color: '#14B8A6', marginBottom: '0.75rem' }}>
                  TOP LANGUAGES
                </p>
                {/* Language bar */}
                <div style={{ height: '6px', borderRadius: '3px', overflow: 'hidden', display: 'flex', marginBottom: '0.75rem' }}>
                  {topLangs.map(([lang, count]) => (
                    <div key={lang} style={{ width: `${(count / totalLang) * 100}%`, background: langColors[lang] || '#666', height: '100%' }} />
                  ))}
                </div>
                {topLangs.map(([lang, count]) => (
                  <div key={lang} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: langColors[lang] || '#666' }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text)' }}>{lang}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                      {Math.round((count / totalLang) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Contribution Graph */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}>
              {/* Contribution Graph */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
              

              </motion.div>

              {/* Recent Repositories (moved below graph to keep vertical flow) */}
              <div>


                <p style={{ fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  RECENT REPOSITORIES
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>

                {repos.map((repo, i) => (


                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(20,184,166,0.1)' }}
                    style={{
                      maxWidth: '100%',

                      padding: '1rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(20,184,166,0.35)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <BookOpen size={13} color="#14B8A6" />
                        <span style={{ fontFamily: 'var(--font-label)', fontSize: '14px', color: '#14B8A6', letterSpacing: '0.05em' }}>
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink size={11} color="var(--text-muted)" />
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {repo.description || 'No description'}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                      {repo.language && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: langColors[repo.language] || '#666', display: 'inline-block' }} />
                          {repo.language}
                        </span>
                      )}
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                        <Star size={10} /> {repo.stargazers_count}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                        <GitFork size={10} /> {repo.forks_count}
                      </span>
                    </div>
                  </motion.a>
                ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
