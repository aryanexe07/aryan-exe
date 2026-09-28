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
              className="skill-item group"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <span
                className="skill-icon-wrapper"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginRight: '0.65rem',
                }}
              >
                <TechIcon
                  name={skill.icon || skill.name}
                  size={22}
                  className="skill-tech-icon"
                />
              </span>
              <span
                className="skill-name"
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
