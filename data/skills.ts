export interface Skill {
  name: string;
  category: 'PRIMARY' | 'SECONDARY' | 'LEARNING';
}

export const skills: Skill[] = [
  // PRIMARY
  { name: 'TypeScript', category: 'PRIMARY' },
  { name: 'React', category: 'PRIMARY' },
  { name: 'Next.js', category: 'PRIMARY' },
  { name: 'Tailwind CSS', category: 'PRIMARY' },
  { name: 'Framer Motion', category: 'PRIMARY' },
  { name: 'Node.js', category: 'PRIMARY' },

  // SECONDARY
  { name: 'Python', category: 'SECONDARY' },
  { name: 'PostgreSQL', category: 'SECONDARY' },
  { name: 'Redis', category: 'SECONDARY' },
  { name: 'tRPC', category: 'SECONDARY' },
  { name: 'REST APIs', category: 'SECONDARY' },
  { name: 'Git / GitHub', category: 'SECONDARY' },

  // LEARNING
  { name: 'AWS', category: 'LEARNING' },
  { name: 'Docker', category: 'LEARNING' },
  { name: 'Kubernetes', category: 'LEARNING' },
  { name: 'Rust', category: 'LEARNING' },
  { name: 'Go', category: 'LEARNING' },
];
