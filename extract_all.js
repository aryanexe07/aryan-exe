const fs = require('fs');
const content = fs.readFileSync('./node_modules/tech-stack-icons/dist/index.js', 'utf8');

// Match either "key":{svg: or key:{svg: or "key":{keywords:
const regex = /(?:["']?([a-zA-Z0-9_#+.-]+)["']?):\s*\{svg:/g;
let match;
const keys = [];
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
}

console.log('Found keys:', keys.length);
fs.writeFileSync('all_icons.json', JSON.stringify(keys, null, 2));

const targetSkills = [
  'Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TensorFlow', 
  'PyTorch', 'Pandas', 'Jupyter', 'Tailwind CSS', 'Java', 'C++', 'FastAPI', 
  'PostgreSQL', 'Prisma', 'MongoDB', 'Git', 'GitHub', 'Docker', 'Linux', 
  'LangChain', 'Scikit-learn', 'Keras', 'AWS', 'Kubernetes', 'Redis', 'Figma',
  'Claude', 'OpenAI', 'Gemini', 'Mistral AI', 'Grok', 'DeepSeek', 'Cohere', 
  'Groq', 'Perplexity', 'Together AI', 'Stability AI', 'Runway', 'Midjourney', 'Qwen', 'Kimi'
];

const results = {};
for (const s of targetSkills) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matchDirect = keys.find(k => k.toLowerCase() === clean || k.toLowerCase() === s.toLowerCase());
  const partials = keys.filter(k => k.toLowerCase().includes(clean) || (clean.length > 3 && clean.includes(k.toLowerCase())));
  results[s] = { direct: matchDirect, partials };
}

fs.writeFileSync('matched.json', JSON.stringify(results, null, 2));
console.log('Results written to matched.json');
