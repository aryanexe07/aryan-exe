'use client';

import { motion, Variants } from 'framer-motion';
import { NavSection } from '@/data/config';

interface Props {
  children: React.ReactNode;
  scrollable?: boolean;
  section?: NavSection;
}

const sectionVariants: Record<NavSection, Variants> = {
  HOME: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  ABOUT: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },
  SKILLS: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },
  PROJECTS: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  },
  GITHUB: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  CONTACT: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

export default function SectionWrapper({ children, scrollable = true, section = 'HOME' }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sectionVariants[section]}
      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'absolute',
        inset: 0,
        overflowY: scrollable ? 'auto' : 'hidden',
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
      }}
      className={scrollable ? 'scroll-area' : ''}
    >
      {children}
    </motion.div>
  );
}