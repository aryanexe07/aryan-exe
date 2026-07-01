export const config = {
  name: 'Aryan',
  handle: 'ARYAN.EXE',
  tagline: 'Crafting digital experiences that make an impact.',
  bio: 'I build fast, accessible, and delightful digital experiences with clean code and purposeful design.',
  email: 'aryantailor.me@gmail.com',
  githubUsername: 'aryanexe07',
  githubUrl: 'https://github.com/aryanexe07',
  linkedinUrl: 'https://linkedin.com/in/aryan-tailor',
  resumeUrl: 'https://drive.google.com/file/d/1zpLKtOpqPo8VzJ7l3AVG4KFd736EJ5XZ/view?usp=sharing',
  formspreeId: 'xbdvloea',
  stats: {
    projects: '10+',
    experience: '1+ YRS',
    topStack: 'PYTHON',
  },
};

export type NavSection = 'HOME' | 'ABOUT' | 'PROJECTS' | 'GITHUB' | 'SKILLS' | 'CONTACT';

export const sectionColors: Record<NavSection, string> = {
  HOME: '#4F7DF3',
  ABOUT: '#8B5CF6',
  PROJECTS: '#F97316',
  GITHUB: '#14B8A6',
  SKILLS: '#22C55E',
  CONTACT: '#EC4899',
};
