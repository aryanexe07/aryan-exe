const fs = require('fs');
const content = fs.readFileSync('./node_modules/tech-stack-icons/dist/index.js', 'utf8');

// The icons data object in dist/index.js
// Look for keys like "name":{"keywords":
const regex = /"([a-zA-Z0-9_#+-]+)":\s*\{\s*"keywords"/g;
let match;
const iconKeys = [];
while ((match = regex.exec(content)) !== null) {
  iconKeys.push(match[1]);
}

console.log('Total icons found:', iconKeys.length);
fs.writeFileSync('./available_icons.json', JSON.stringify(iconKeys, null, 2));

const targetSkills = [
  'Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TensorFlow', 
  'PyTorch', 'Pandas', 'Jupyter', 'Tailwind CSS', 'Java', 'C++', 'FastAPI', 
  'PostgreSQL', 'Prisma', 'MongoDB', 'Git', 'GitHub', 'Docker', 'Linux', 
  'LangChain', 'Scikit-learn', 'Keras', 'AWS', 'Kubernetes', 'Redis', 'Figma',
  'Claude', 'OpenAI', 'Gemini', 'Mistral AI', 'Grok', 'DeepSeek', 'Cohere', 
  'Groq', 'Perplexity', 'Together AI', 'Stability AI', 'Runway', 'Midjourney', 'Qwen', 'Kimi'
];

const mapped = {};
for (const skill of targetSkills) {
  const clean = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matches = iconKeys.filter(k => {
    const kClean = k.toLowerCase().replace(/[^a-z0-9]/g, '');
    return kClean === clean || kClean.includes(clean) || clean.includes(kClean);
  });
  mapped[skill] = matches;
}

fs.writeFileSync('./mapped_skills.json', JSON.stringify(mapped, null, 2));
console.log('Mapped skills written to mapped_skills.json');
