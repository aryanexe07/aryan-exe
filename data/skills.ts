export interface Skill {
  name: string;
  category: 'PRIMARY' | 'SECONDARY' | 'LEARNING';
}

export const skills: Skill[] = [
  // PRIMARY
  { name: 'Python', category: 'PRIMARY' },
  { name: 'Java', category: 'PRIMARY' },
  { name: 'Jupyter Notebook', category: 'PRIMARY' },
  { name: 'Pandas', category: 'PRIMARY' },
  { name: 'TensorFlow', category: 'PRIMARY' },
  { name: 'Keras', category: 'PRIMARY' },

  // SECONDARY
  { name: 'TypeScript', category: 'SECONDARY' },
  { name: 'Node.js', category: 'SECONDARY' },
  { name: 'React', category: 'SECONDARY' },
  { name: 'C++', category: 'SECONDARY' },
  { name: 'Tailwind CSS', category: 'SECONDARY' },
  { name: 'Git / GitHub', category: 'SECONDARY' },

  // LEARNING
  { name: 'AWS', category: 'LEARNING' },
  { name: 'Docker', category: 'LEARNING' },
  { name: 'Kubernetes', category: 'LEARNING' },
  { name: 'Scikit-learn', category: 'LEARNING' },
  { name: 'LangChain', category: 'LEARNING' },
];
