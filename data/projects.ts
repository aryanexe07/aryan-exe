export type ProjectCategory = 'ALL' | 'INTERACTIVE' | 'SYSTEMS' | 'OPEN SOURCE' | 'TOOLS' | 'EXPERIMENTS';

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  architecture: string;
  scale: string;
  performance: string;
  githubUrl: string;
  demoUrl?: string;
  category: Exclude<ProjectCategory, 'ALL'>;
}

export const projects: Project[] = [
  {
    id: '01',
    name: 'Novella',
    description: 'A full-stack writing management app with a rich block-based editor, built with a bold neo-brutalist design system.',
    techStack: ['Next.js 14', 'Prisma', 'Clerk', 'TipTap', 'TypeScript'],
    architecture: 'Full-Stack',
    scale: '3,400 LOC', // fill in your actual LOC
    performance: '93 Lighthouse', // run Lighthouse and paste score
    githubUrl: 'https://github.com/aryanexe07/Novella', // your repo link
    demoUrl: 'https://novella-roan.vercel.app/', // if deployed
    category: 'INTERACTIVE',
  },
  {
    id: '02',
    name: 'Samay Finance',
    description: 'A dark editorial finance site with scroll-jacked horizontal sections, custom typography, and a deep navy/blue gradient palette.',
    techStack: ['HTML/CSS/JS', 'GSAP', 'Custom Typography'],
    architecture: 'Static Single-File',
    scale: '1,200 LOC',
    performance: '92 Lighthouse',
    githubUrl: 'https://github.com/aryanexe07/SamayWebsite',
    demoUrl: 'N/A',
    category: 'INTERACTIVE',
  },
  {
    id: '03',
    name: 'AutoClicker',
    description: 'A packaged desktop automation tool with a GUI, configurable click intervals, and hotkey controls.',
    techStack: ['Python', 'PyQt6', 'pyautogui', 'pynput'],
    architecture: 'Desktop App',
    scale: '800 LOC',
    performance: 'N/A',
    githubUrl: 'https://github.com/aryanexe07/AutoClicker', // your GitHub release link
    category: 'TOOLS',
  },
  {
    id: '04',
    name: 'aryan.exe (v1)',
    description: 'An earlier developer portfolio with a light/dark theme toggle and scroll-driven animations.',
    techStack: ['Next.js 15', 'GSAP', 'Lenis', 'Spline', 'Tailwind v4'],
    architecture: 'Full-Stack',
    scale: '2,800 LOC',
    performance: '87 Lighthouse',
    githubUrl: 'https://github.com/aryanexe07/portfolio',
    demoUrl: 'N/A',
    category: 'EXPERIMENTS',
  },
  {
    id: '05',
    name: '3D Solar System',
    description: 'An interactive 3D solar system simulation with orbital mechanics, camera controls, and scaled planetary bodies.',
    techStack: ['Three.js', 'JavaScript'],
    architecture: 'WebGL',
    scale: '1,500 LOC',
    performance: '60fps',
    githubUrl: 'https://github.com/aryanexe07/3D-Solar-System',
    demoUrl: 'https://3d-solar-system-delta.vercel.app/',
    category: 'EXPERIMENTS',
  },
  {
    id: '06',
    name: 'Python Snake',
    description: 'A minimalist take on the classic Snake game with a muted color palette, built using the turtle graphics module.',
    techStack: ['Python', 'Turtle'],
    architecture: 'Standalone',
    scale: '300 LOC',
    performance: 'N/A',
    githubUrl: 'https://github.com/aryanexe07/SnakeGame',
    category: 'EXPERIMENTS',
  },
  {
    id: '07',
    name: 'Python Knowledge Base',
    description: 'A structured repository of Python concepts and solutions with automated linting via Pylint in CI.',
    techStack: ['Python', 'Pylint', 'GitHub Actions'],
    architecture: 'CI/CD',
    scale: '500 LOC',
    performance: 'N/A',
    githubUrl: 'https://github.com/aryanexe07/Python-Knowledge-Base',
    category: 'OPEN SOURCE',
  },
  {
    id: '08',
    name: 'telescope.nvim contribution',
    description: 'Fixed misleading documentation and behavior around layout configuration options in a popular Neovim plugin.',
    techStack: ['Lua', 'Neovim'],
    architecture: 'Open-Source Contribution',
    scale: '200 LOC',
    performance: 'N/A',
    githubUrl: 'https://github.com/nvim-telescope/telescope.nvim',
    category: 'OPEN SOURCE',
  },
  {
    id: '09',
    name: 'aryan-exe (v2)',
    description: 'An developer portfolio with a valorant inspired theme and page-driven layout with animations.',
    techStack: ['Next.js 15', 'GSAP', 'Lenis', 'Tailwind v4'],
    architecture: 'Full-Stack',
    scale: '4,200 LOC',
    performance: '94 Lighthouse',
    githubUrl: 'https://github.com/aryanexe07/aryan-exe',
    demoUrl: 'https://aryan-exe.vercel.app/',
    category: 'INTERACTIVE',
  },
  {
    id: '10',
    name: 'Splitzy',
    description: 'Offline-first, UPI-native expense splitting for Indian friend groups — with the financial correctness of a ledger and the retention hooks of a game.',
    techStack: ['Next.js 15', 'Zustand', 'Supabase', 'Serwist PWA', 'Tailwind v4'],
    architecture: 'Full-Stack',
    scale: '5,800 LOC',
    performance: '91 Lighthouse',
    githubUrl: 'https://github.com/harshwardhan1507/Splitzy',
    demoUrl: 'N/A',
    category: 'SYSTEMS',
  },
  {
    id: '11',
    name: 'Calculator',
    description: 'A comprehensive browser-based calculator suite featuring multiple tools, responsive design, animated UI, and full functionality using vanilla JavaScript.',
    techStack: ['CSS', 'JavaScript', 'HTML'],
    architecture: 'Full-Stack',
    scale: '1,800 LOC',
    performance: '96 Lighthouse',
    githubUrl: 'https://github.com/aryanexe07/Calculator',
    demoUrl: 'https://calculator-by-aryan.vercel.app/',
    category: 'TOOLS',
  },
  {
    id: '12',
    name: ' Verge',
    description: 'Your external brain. Store, search & visualize memories across 7 types — powered by React, Supabase, and Firebase Auth.',
    techStack: ['Next.js 15', 'GSAP','Restful-API', 'Lenis', 'Tailwind v4'],
    architecture: 'Full-Stack',
    scale: '3,600 LOC',
    performance: '92 Lighthouse',
    githubUrl: 'https://github.com/harshwardhan1507/verge',
    demoUrl: 'https://verge-eosin.vercel.app/',
    category: 'INTERACTIVE',
  },
];