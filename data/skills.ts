export interface Skill {
  name: string;
  category: 'PRIMARY' | 'SECONDARY' | 'LEARNING';
  icon: string;
  group: 'AI / ML & LLMs' | 'LANGUAGES' | 'WEB DEV' | 'CLOUD & TOOLS';
}

export const skills: Skill[] = [
  // === AI / ML & LLMs ===
  { name: 'PyTorch', category: 'PRIMARY', icon: 'pytorch', group: 'AI / ML & LLMs' },
  { name: 'TensorFlow', category: 'PRIMARY', icon: 'tensorflow', group: 'AI / ML & LLMs' },
  { name: 'OpenAI', category: 'PRIMARY', icon: 'openai', group: 'AI / ML & LLMs' },
  { name: 'Claude', category: 'PRIMARY', icon: 'claude', group: 'AI / ML & LLMs' },
  { name: 'Gemini', category: 'PRIMARY', icon: 'gemini', group: 'AI / ML & LLMs' },
  { name: 'LangChain', category: 'PRIMARY', icon: 'langchain', group: 'AI / ML & LLMs' },
  { name: 'DeepSeek', category: 'SECONDARY', icon: 'deepseek', group: 'AI / ML & LLMs' },
  { name: 'Mistral AI', category: 'SECONDARY', icon: 'mistralai', group: 'AI / ML & LLMs' },
  { name: 'Groq', category: 'SECONDARY', icon: 'groq', group: 'AI / ML & LLMs' },
  { name: 'Grok', category: 'SECONDARY', icon: 'grok', group: 'AI / ML & LLMs' },
  { name: 'Perplexity', category: 'SECONDARY', icon: 'perplexity', group: 'AI / ML & LLMs' },
  { name: 'Scikit-learn', category: 'PRIMARY', icon: 'scikitlearn', group: 'AI / ML & LLMs' },
  { name: 'Pandas', category: 'PRIMARY', icon: 'pandas', group: 'AI / ML & LLMs' },
  { name: 'Jupyter', category: 'PRIMARY', icon: 'jupyter', group: 'AI / ML & LLMs' },
  { name: 'Keras', category: 'SECONDARY', icon: 'keras', group: 'AI / ML & LLMs' },
  { name: 'Midjourney', category: 'SECONDARY', icon: 'midjourney', group: 'AI / ML & LLMs' },
  { name: 'Stability AI', category: 'SECONDARY', icon: 'stabilityai', group: 'AI / ML & LLMs' },
  { name: 'Runway', category: 'SECONDARY', icon: 'runway', group: 'AI / ML & LLMs' },

  // === LANGUAGES ===
  { name: 'Python', category: 'PRIMARY', icon: 'python', group: 'LANGUAGES' },
  { name: 'TypeScript', category: 'PRIMARY', icon: 'typescript', group: 'LANGUAGES' },
  { name: 'JavaScript', category: 'PRIMARY', icon: 'javascript', group: 'LANGUAGES' },
  { name: 'C++', category: 'PRIMARY', icon: 'cpp', group: 'LANGUAGES' },
  { name: 'Java', category: 'SECONDARY', icon: 'java', group: 'LANGUAGES' },
  { name: 'C', category: 'SECONDARY', icon: 'c', group: 'LANGUAGES' },

  // === WEB DEV ===
  { name: 'React', category: 'PRIMARY', icon: 'react', group: 'WEB DEV' },
  { name: 'Next.js', category: 'PRIMARY', icon: 'nextjs', group: 'WEB DEV' },
  { name: 'Node.js', category: 'PRIMARY', icon: 'nodejs', group: 'WEB DEV' },
  { name: 'FastAPI', category: 'PRIMARY', icon: 'fastapi', group: 'WEB DEV' },
  { name: 'Tailwind CSS', category: 'PRIMARY', icon: 'tailwindcss', group: 'WEB DEV' },
  { name: 'PostgreSQL', category: 'PRIMARY', icon: 'postgresql', group: 'WEB DEV' },
  { name: 'Prisma', category: 'PRIMARY', icon: 'prisma', group: 'WEB DEV' },
  { name: 'MongoDB', category: 'SECONDARY', icon: 'mongodb', group: 'WEB DEV' },
  { name: 'Redis', category: 'SECONDARY', icon: 'redis', group: 'WEB DEV' },
  { name: 'Vite', category: 'PRIMARY', icon: 'vite', group: 'WEB DEV' },

  // === CLOUD & TOOLS ===
  { name: 'Git', category: 'PRIMARY', icon: 'git', group: 'CLOUD & TOOLS' },
  { name: 'GitHub', category: 'PRIMARY', icon: 'github', group: 'CLOUD & TOOLS' },
  { name: 'Docker', category: 'PRIMARY', icon: 'docker', group: 'CLOUD & TOOLS' },
  { name: 'Linux', category: 'PRIMARY', icon: 'linux', group: 'CLOUD & TOOLS' },
  { name: 'AWS', category: 'SECONDARY', icon: 'aws', group: 'CLOUD & TOOLS' },
  { name: 'Kubernetes', category: 'SECONDARY', icon: 'kubernetes', group: 'CLOUD & TOOLS' },
  { name: 'Figma', category: 'SECONDARY', icon: 'figma', group: 'CLOUD & TOOLS' },
  { name: 'Vercel', category: 'PRIMARY', icon: 'vercel', group: 'CLOUD & TOOLS' },
  { name: 'Supabase', category: 'SECONDARY', icon: 'supabase', group: 'CLOUD & TOOLS' },
  { name: 'Neovim', category: 'PRIMARY', icon: 'neovim', group: 'CLOUD & TOOLS' },
];
