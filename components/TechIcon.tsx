'use client';

import React from 'react';
import StackIcon from 'tech-stack-icons';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

// Custom SVG fallbacks for technologies that may not be in tech-stack-icons
const CustomFallbacks: Record<string, React.FC<{ size?: number; className?: string }>> = {
  jupyter: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C9.4 2 7.1 3.2 5.6 5.1C6.2 5.5 6.9 5.8 7.6 6C8.8 4.7 10.3 3.9 12 3.9C15.6 3.9 18.5 6.7 18.8 10.2C19.4 10.1 20.1 10.1 20.7 10.3C20.4 5.7 16.6 2 12 2Z"
        fill="#F37626"
      />
      <path
        d="M12 22C14.6 22 16.9 20.8 18.4 18.9C17.8 18.5 17.1 18.2 16.4 18C15.2 19.3 13.7 20.1 12 20.1C8.4 20.1 5.5 17.3 5.2 13.8C4.6 13.9 3.9 13.9 3.3 13.7C3.6 18.3 7.4 22 12 22Z"
        fill="#676767"
      />
      <circle cx="18.5" cy="4.5" r="1.5" fill="#676767" />
      <circle cx="5.5" cy="19.5" r="1.5" fill="#F37626" />
      <circle cx="4" cy="11.5" r="1" fill="#676767" />
    </svg>
  ),
  scikitlearn: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="7" cy="8" r="3" fill="#F89939" />
      <circle cx="17" cy="8" r="3" fill="#3499CD" />
      <circle cx="12" cy="17" r="3" fill="#F89939" />
      <line x1="9.5" y1="9.5" x2="14.5" y2="9.5" stroke="#3499CD" strokeWidth="1.5" />
      <line x1="8.5" y1="10.5" x2="10.5" y2="14.5" stroke="#F89939" strokeWidth="1.5" />
      <line x1="15.5" y1="10.5" x2="13.5" y2="14.5" stroke="#3499CD" strokeWidth="1.5" />
    </svg>
  ),
  fastapi: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10.5" fill="#059669" />
      <path
        d="M12.8 4.5L7 13H11.5L11 19.5L17 11H12.2L12.8 4.5Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  pandas: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="4" width="3" height="16" rx="1" fill="#150458" />
      <rect x="10.5" y="8" width="3" height="12" rx="1" fill="#FFD43B" />
      <rect x="16" y="5" width="3" height="15" rx="1" fill="#E70488" />
      <circle cx="12" cy="5" r="1.5" fill="#150458" />
    </svg>
  ),
  langchain: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
};

const aliasMap: Record<string, string> = {
  python: 'python',
  typescript: 'typescript',
  ts: 'typescript',
  javascript: 'js',
  js: 'js',
  react: 'react',
  reactjs: 'react',
  nextjs: 'nextjs',
  next: 'nextjs',
  nodejs: 'nodejs',
  node: 'nodejs',
  cpp: 'c++',
  'c++': 'c++',
  c: 'c',
  tailwindcss: 'tailwindcss',
  tailwind: 'tailwindcss',
  git: 'git',
  github: 'github',
  aws: 'aws',
  docker: 'docker',
  kubernetes: 'kubernetes',
  tensorflow: 'tensorflow',
  pytorch: 'pytorch',
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  redis: 'redis',
  prisma: 'prisma',
  linux: 'linux',
  figma: 'figma',
  vite: 'vitejs',
  vitejs: 'vitejs',
  java: 'java',
};

export default function TechIcon({ name, className = '', size = 22 }: TechIconProps) {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9+]/g, '');

  if (CustomFallbacks[iconKey]) {
    const FallbackComponent = CustomFallbacks[iconKey];
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <FallbackComponent size={size} />
      </span>
    );
  }

  const resolvedName = aliasMap[iconKey] || aliasMap[name.toLowerCase()] || iconKey;

  try {
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <StackIcon
          name={resolvedName as any}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </span>
    );
  } catch {
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          borderRadius: '4px',
          background: 'rgba(255,255,255,0.1)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          color: '#8B5CF6',
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
}
