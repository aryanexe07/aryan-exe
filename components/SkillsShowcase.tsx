'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import TechIcon from '@/components/TechIcon';

export default function SkillsShowcase() {
  return (
    <section className="skills-showcase-section">
      <div className="skills-showcase-inner">
        {/* Tracked Centered Header Matching the Screenshot */}
        <p className="skills-header-label">
          TECH STACK &amp; TOOLS I USE
        </p>

        {/* Minimalist Grid of Logos + Text Matching the Screenshot */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="skill-item"
            >
              <div className="skill-icon-wrapper">
                <TechIcon
                  name={skill.icon || skill.name}
                  size={24}
                  className="skill-tech-icon"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-showcase-section {
          width: 100%;
          position: relative;
          padding: 5rem 2rem 6rem 2rem;
          border-top: 1px solid rgba(139, 92, 246, 0.1);
          background: transparent;
        }

        .skills-showcase-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Top Tracked Header (Like in screenshot: WORKS WITH ANY AI PROVIDER) */
        .skills-header-label {
          font-family: var(--font-label, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8E95A5;
          text-align: center;
          margin: 0 0 3.5rem 0;
        }

        /* Centered Flexible Grid with balanced row & column gaps */
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2.75rem 3.5rem;
          width: 100%;
          max-width: 1000px;
        }

        /* Skill Item: Default is Muted Grey */
        .skill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Default Icon: Grayscale & Muted */
        .skill-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%) opacity(0.65) brightness(1.1);
          transition: filter 0.25s ease, transform 0.25s ease;
        }

        /* Default Text: Muted Gray Matching Screenshot */
        .skill-name {
          font-family: var(--font-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #8E95A5;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        /* Hover Effect: Vibrant Color & Bright White Text */
        .skill-item:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .skill-item:hover .skill-icon-wrapper {
          filter: grayscale(0%) opacity(1) brightness(1) drop-shadow(0 0 10px rgba(139, 92, 246, 0.35));
        }

        .skill-item:hover .skill-name {
          color: #FFFFFF;
        }

        @media (max-width: 1024px) {
          .skills-showcase-section {
            padding: 4rem 2rem 5rem 2rem;
          }
          .skills-grid {
            gap: 2.25rem 2.75rem;
          }
        }

        @media (max-width: 768px) {
          .skills-showcase-section {
            padding: 3rem 1.25rem 4rem 1.25rem;
          }
          .skills-header-label {
            font-size: 12px;
            letter-spacing: 0.22em;
            margin-bottom: 2.5rem;
          }
          .skills-grid {
            gap: 1.75rem 2rem;
          }
          .skill-name {
            font-size: 14.5px;
          }
        }
      `}</style>
    </section>
  );
}
