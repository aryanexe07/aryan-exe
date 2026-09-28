export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  // Row 1
  { name: 'Python', icon: 'python' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'C++', icon: 'cpp' },
  { name: 'Java', icon: 'java' },

  // Row 2
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },

  // Row 3
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'Pandas', icon: 'pandas' },
  { name: 'Scikit-learn', icon: 'scikitlearn' },
  { name: 'Jupyter', icon: 'jupyter' },

  // Row 4
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Prisma', icon: 'prisma' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Git', icon: 'git' },

  // Row 5
  { name: 'Docker', icon: 'docker' },
  { name: 'Linux', icon: 'linux' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Vite', icon: 'vite' },
];
