'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, Skill } from '@/data/skills';
import TechIcon from '@/components/TechIcon';
import { Sparkles, Layers, Code2, Globe, Cpu } from 'lucide-react';

const CATEGORIES = [
  { id: 'ALL', label: 'ALL TECHNOLOGIES', icon: Layers },
  { id: 'AI / ML & LLMs', label: 'AI & LLM PROVIDERS', icon: Sparkles },
  { id: 'LANGUAGES', label: 'LANGUAGES', icon: Code2 },
  { id: 'WEB DEV', label: 'WEB & BACKEND', icon: Globe },
  { id: 'CLOUD & TOOLS', label: 'CLOUD & DEVOPS', icon: Cpu },
] as const;

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter((s) => s.group === activeCategory);

  return (
    <section className="skills-showcase-section">
      <div className="skills-showcase-inner">
        {/* Top Centered Header Matching Screenshot */}
        <div className="skills-header-container">
          <p className="skills-super-label">
            WORKS WITH ANY AI PROVIDER &amp; MODERN STACK
          </p>
          <h3 className="skills-main-title">
            Technologies &amp; Architecture
          </h3>
          <p className="skills-subtitle">
            Engineered across deep learning frameworks, high-throughput backend runtimes, and reactive web interfaces.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs-container">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skills-tab-button ${isActive ? 'active' : ''}`}
                type="button"
              >
                <Icon size={14} className="tab-icon" />
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="active-pill"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Logo + Name Grid Matching Screenshot */}
        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="skill-item"
              >
                <div className="skill-icon-wrap">
                  <TechIcon
                    name={skill.icon || skill.name}
                    size={22}
                    className="tech-icon-svg"
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-showcase-section {
          width: 100%;
          position: relative;
          padding: 5rem 4rem 6rem 4rem;
          border-top: 1px solid rgba(139, 92, 246, 0.12);
          background: linear-gradient(
            180deg,
            rgba(11, 15, 25, 0.4) 0%,
            rgba(15, 20, 32, 0.8) 50%,
            rgba(11, 15, 25, 0.95) 100%
          );
        }

        .skills-showcase-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .skills-header-container {
          text-align: center;
          margin-bottom: 2.5rem;
          max-width: 720px;
        }

        .skills-super-label {
          font-family: var(--font-label, sans-serif);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }

        .skills-main-title {
          font-family: var(--font-hero, sans-serif);
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .skills-subtitle {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: var(--text-muted, #9CA3AF);
          line-height: 1.6;
          margin: 0 auto;
          max-width: 580px;
        }

        /* Filter Tabs */
        .skills-tabs-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 3.5rem;
          padding: 0.35rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 9999px;
          backdrop-filter: blur(8px);
        }

        .skills-tab-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.1rem;
          background: transparent;
          border: none;
          outline: none;
          color: #94A3B8;
          font-family: var(--font-label, sans-serif);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          border-radius: 9999px;
          transition: color 0.2s ease;
          z-index: 1;
        }

        .skills-tab-button:hover {
          color: #FFFFFF;
        }

        .skills-tab-button.active {
          color: #FFFFFF;
        }

        :global(.active-pill) {
          position: absolute;
          inset: 0;
          background: rgba(139, 92, 246, 0.22);
          border: 1px solid rgba(139, 92, 246, 0.45);
          border-radius: 9999px;
          z-index: -1;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
        }

        /* Screenshot Matching Grid of Logos + Names */
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2.25rem 3.5rem;
          width: 100%;
          max-width: 1100px;
        }

        .skill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.4rem 0.6rem;
          border-radius: 8px;
          cursor: default;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          color: #94A3B8;
        }

        .skill-item:hover {
          color: #FFFFFF;
          transform: translateY(-2px) scale(1.04);
        }

        .skill-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          transition: color 0.22s ease, transform 0.22s ease, filter 0.22s ease;
        }

        .skill-item:hover .skill-icon-wrap {
          color: #FFFFFF;
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
        }

        .skill-name {
          font-family: var(--font-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
          font-size: 15.5px;
          font-weight: 500;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: color 0.22s ease;
        }

        .skill-item:hover .skill-name {
          color: #FFFFFF;
        }

        @media (max-width: 1024px) {
          .skills-showcase-section {
            padding: 4rem 2.5rem 5rem 2.5rem;
          }
          .skills-grid {
            gap: 1.75rem 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .skills-showcase-section {
            padding: 3rem 1.25rem 4rem 1.25rem;
          }
          .skills-super-label {
            font-size: 11.5px;
            letter-spacing: 0.2em;
          }
          .skills-tabs-container {
            border-radius: 16px;
            gap: 0.35rem;
            margin-bottom: 2.5rem;
          }
          .skills-tab-button {
            padding: 0.4rem 0.8rem;
            font-size: 11px;
          }
          .skills-grid {
            gap: 1.5rem 1.75rem;
          }
          .skill-name {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
