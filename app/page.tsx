'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GithubSection from '@/components/sections/GithubSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import { AnimatePresence, motion } from 'framer-motion';
import { NavSection } from '@/data/config';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<NavSection>('HOME');

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
          <Navbar active={active} onNavigate={setActive} />
          <main style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {/* HOME */}
              {active === 'HOME' && (
                <motion.div
                  key="HOME"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'auto',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  <HomeSection onNavigate={setActive} />
                </motion.div>
              )}

              {/* ABOUT */}
              {active === 'ABOUT' && (
                <motion.div
                  key="ABOUT"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'auto',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  <AboutSection />
                </motion.div>
              )}

              {/* PROJECTS */}
              {active === 'PROJECTS' && (
                <motion.div
                  key="PROJECTS"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'auto',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  <ProjectsSection />
                </motion.div>
              )}

              {/* GITHUB */}
              {active === 'GITHUB' && (
                <motion.div
                  key="GITHUB"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'auto',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  <GithubSection />
                </motion.div>
              )}

              {/* SKILLS */}
              {active === 'SKILLS' && (
                <motion.div
                  key="SKILLS"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'auto',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  <SkillsSection />
                </motion.div>
              )}

              {/* CONTACT */}
              {active === 'CONTACT' && (
                <motion.div
                  key="CONTACT"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'auto',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                  }}
                >
                  <ContactSection />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      )}
    </>
  );
}
