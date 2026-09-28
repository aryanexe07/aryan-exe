'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

// Pixel-perfect, square standalone SVG icons with authentic brand colors
export const TechIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  python: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11.9 2C7.5 2 7.8 3.9 7.8 3.9l.01 2h4.2v.6H5.8S2 6.1 2 10.6s3.3 4.3 3.3 4.3h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1-3.1-3.7-7.6-3.7zm-2.4 1.3a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.2s3.8.4 3.8-4.1-3.3-4.3-3.3-4.3h-2v2.8s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.1 3.1 3.7 7.6 3.7zm2.4-1.3a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"
        fill="#FFD43B"
      />
    </svg>
  ),

  typescript: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4.5" fill="#3178C6" />
      <path
        d="M6.5 10.5h4.5M8.75 10.5v7.5M13.2 16.2c.7.5 1.6.8 2.5.8 1.5 0 2.2-.7 2.2-1.6 0-2.2-4.2-1.4-4.2-3.8 0-1.2.9-2.1 2.4-2.1 1 0 1.8.3 2.4.7l-.6 1.4c-.6-.4-1.2-.6-1.8-.6-.8 0-1.2.4-1.2 1 0 2 4.2 1.3 4.2 3.8 0 1.3-1 2.2-2.6 2.2-1.1 0-2.2-.4-2.9-1l.6-1.4z"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),

  javascript: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4.5" fill="#F7DF1E" />
      <path
        d="M8.5 12.5v3.5c0 1.5-.7 2-2 2-.5 0-1-.1-1.5-.3v-1.5c.3.1.6.2 1 .2.5 0 .8-.2.8-.8v-3.1h1.7zm5 3.7c.7.5 1.6.8 2.5.8 1.5 0 2.2-.7 2.2-1.6 0-2.2-4.2-1.4-4.2-3.8 0-1.2.9-2.1 2.4-2.1 1 0 1.8.3 2.4.7l-.6 1.4c-.6-.4-1.2-.6-1.8-.6-.8 0-1.2.4-1.2 1 0 2 4.2 1.3 4.2 3.8 0 1.3-1 2.2-2.6 2.2-1.1 0-2.2-.4-2.9-1l.6-1.4z"
        fill="#000000"
      />
    </svg>
  ),

  cpp: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" fill="#00599C" />
      <path
        d="M10 9a3 3 0 1 0 0 6M13.5 12h2.5M14.75 10.75v2.5M17.5 12h2.5M18.75 10.75v2.5"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),

  java: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 19.5c3.5 1 7.5 1 10 0M5 16.5c4.5 1.5 10.5 1.5 14 0M6 13.5c4 1 9 1 12 0"
        stroke="#E76F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 2c1.5 2.5-1.5 4.5 0 7M10.5 3.5c1.5 2-1 3.5 0 5.5"
        stroke="#5382A1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  react: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.6" className={className}>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),

  nextjs: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10.5" fill="#000000" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
      <path
        d="M8.5 7.5v9M15.5 7.5v4.5M8.5 7.5l7 9"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  nodejs: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12 2 20.6 7 20.6 17 12 22 3.4 17 3.4 7" fill="#5FA04E" />
      <path
        d="M12 2v20M3.4 7l17.2 10M20.6 7L3.4 17"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
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

  tailwindcss: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#38BDF8" className={className}>
      <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1 .3 1.8 1.1 2.6 1.9 1.3 1.4 2.8 2.9 6.1 2.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1-.3-1.8-1.1-2.6-1.9C16.8 7.5 15.3 6 12 6zM6 12.5c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1 .3 1.8 1.1 2.6 1.9 1.3 1.4 2.8 2.9 6.1 2.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1-.3-1.8-1.1-2.6-1.9C10.8 14 9.3 12.5 6 12.5z" />
    </svg>
  ),

  pytorch: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EE4C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.5 3.5a7.5 7.5 0 1 0 7.5 7.5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="#EE4C2C" />
      <path d="M12.5 8l-3 3 3 3" />
    </svg>
  ),

  tensorflow: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2.5L3.5 7.4v9.8l3.7-2.1V9.5l4.8-2.8v13.6l3.7-2.1V4.6L12 2.5z" fill="#FF6F00" />
      <path d="M12 6.7l4.8 2.8v5.6l3.7 2.1V7.4L12 2.5v4.2z" fill="#FFA800" />
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

  scikitlearn: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="7" cy="8" r="3" fill="#F89939" />
      <circle cx="17" cy="8" r="3" fill="#3499CD" />
      <circle cx="12" cy="17" r="3" fill="#F89939" />
      <line x1="9.5" y1="9.5" x2="14.5" y2="9.5" stroke="#3499CD" strokeWidth="1.6" />
      <line x1="8.5" y1="10.5" x2="10.5" y2="14.5" stroke="#F89939" strokeWidth="1.6" />
      <line x1="15.5" y1="10.5" x2="13.5" y2="14.5" stroke="#3499CD" strokeWidth="1.6" />
    </svg>
  ),

  jupyter: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3C8.7 3 6 4.3 4.5 6.3c.7.5 1.5.8 2.3 1 1.2-1.3 2.9-2.1 5.2-2.1 4 0 7.2 2.7 7.6 6.3.7-.1 1.4-.1 2.1.1C21.3 6.8 17.1 3 12 3z"
        fill="#F37626"
      />
      <path
        d="M12 21c3.3 0 6-1.3 7.5-3.3-.7-.5-1.5-.8-2.3-1-1.2 1.3-2.9 2.1-5.2 2.1-4 0-7.2-2.7-7.6-6.3-.7.1-1.4.1-2.1-.1C2.7 17.2 6.9 21 12 21z"
        fill="#676767"
      />
      <circle cx="18.5" cy="5.5" r="1.5" fill="#676767" />
      <circle cx="5.5" cy="18.5" r="1.5" fill="#F37626" />
      <circle cx="4" cy="11.5" r="1" fill="#676767" />
    </svg>
  ),

  postgresql: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3C7 3 4 6 4 11c0 4 2 7 5 8v2c3 0 5-1 6-3 3 0 5-2 5-6 0-6-3-9-8-9z" />
      <path d="M9 11c1-1 3-1 4 0M10 14h2" />
    </svg>
  ),

  mongodb: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5C12 2.5 6 7 6 12.5c0 4 3 6.5 6 8.5 3-2 6-4.5 6-8.5 0-5.5-6-10-6-10z"
        fill="#47A248"
      />
      <path d="M12 2.5v18.5" stroke="#FFFFFF" strokeWidth="0.8" />
    </svg>
  ),

  prisma: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 18.5L12 3l8 15.5H4z"
        fill="rgba(34, 211, 238, 0.15)"
        stroke="#22D3EE"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 3v15.5" stroke="#22D3EE" strokeWidth="1.8" />
    </svg>
  ),

  redis: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12 3 21 7.5 12 12 3 7.5 12 3" fill="#DC382D" />
      <path d="M3 12l9 4.5 9-4.5" stroke="#DC382D" strokeWidth="1.8" />
      <path d="M3 16.5l9 4.5 9-4.5" stroke="#DC382D" strokeWidth="1.8" />
    </svg>
  ),

  git: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="2.5" fill="#F05032" stroke="none" />
      <circle cx="6" cy="18" r="2.5" fill="#F05032" stroke="none" />
      <circle cx="18" cy="10" r="2.5" fill="#F05032" stroke="none" />
      <path d="M6 8.5v7M8.5 6.5l7 3.5" />
    </svg>
  ),

  docker: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14c1.5 2 4 3 8 3s6.5-1 8-3c-.5 4-4 7-8 7s-7.5-3-8-7z" fill="rgba(36, 150, 237, 0.15)" />
      <rect x="7" y="10.5" width="2.2" height="2.2" fill="#2496ED" stroke="none" />
      <rect x="10.2" y="10.5" width="2.2" height="2.2" fill="#2496ED" stroke="none" />
      <rect x="13.4" y="10.5" width="2.2" height="2.2" fill="#2496ED" stroke="none" />
      <rect x="10.2" y="7.5" width="2.2" height="2.2" fill="#2496ED" stroke="none" />
      <rect x="13.4" y="7.5" width="2.2" height="2.2" fill="#2496ED" stroke="none" />
      <path d="M20 14c1-1 2-1 2-1" />
    </svg>
  ),

  linux: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3c-2.5 0-4 2-4 5 0 2 .5 3.5 0 5-1 3-2 4-2 6 0 1.5 3 2 8 2s8-.5 8-2c0-2-1-3-2-6-.5-1.5 0-3 0-5 0-3-1.5-5-4-5z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />
      <circle cx="10.5" cy="8" r="1" fill="#000000" />
      <circle cx="13.5" cy="8" r="1" fill="#000000" />
      <ellipse cx="12" cy="10.5" rx="1.8" ry="1" fill="#FCC624" />
      <path d="M8 19c-1 1-1.5 2 0 2s3-1 4-1 3 1 4 1 1-1 0-2" fill="#FCC624" />
    </svg>
  ),

  aws: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4.5" fill="#232F3E" />
      <path
        d="M5 14.5c4.5 2.5 9.5 2.5 14 0"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 13.5l2 1-1 1.8"
        fill="#FF9900"
      />
      <path
        d="M6.5 8l1.5-2 1.5 2M10.5 6l1 4 1-4 1 4 1-4M17 7c-.5-.8-1.5-1-2-1s-1.5.5-1.5 1.2c0 1.5 3.5 1 3.5 2.5 0 1-.8 1.5-1.8 1.5s-1.8-.5-2-1.2"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  ),

  figma: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="3" width="7" height="6" rx="3" fill="#F24E1E" />
      <rect x="12" y="3" width="7" height="6" rx="3" fill="#FF7262" />
      <rect x="5" y="9" width="7" height="6" rx="3" fill="#A259FF" />
      <circle cx="15.5" cy="12" r="3.5" fill="#1ABCFE" />
      <rect x="5" y="15" width="7" height="6" rx="3" fill="#0ACF83" />
    </svg>
  ),

  vitejs: ({ size = 22, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20.5 4.5L12.5 22.5L3.5 4.5L11.5 2.5L20.5 4.5Z"
        fill="url(#vite-grad)"
        stroke="#BD34FE"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3.5L8.5 12H12.5L10.5 18.5L16.5 9.5H12.5L13.5 3.5Z"
        fill="#FFD62E"
      />
      <defs>
        <linearGradient id="vite-grad" x1="3.5" y1="2.5" x2="20.5" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

export default function TechIcon({ name, className = '', size = 22 }: TechIconProps) {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const IconComponent = TechIcons[iconKey];

  if (IconComponent) {
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          minWidth: size,
          maxWidth: size,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          lineHeight: 0,
        }}
      >
        <IconComponent size={size} />
      </span>
    );
  }

  // Fallback
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: '4px',
        background: 'rgba(255,255,255,0.1)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        color: '#FFFFFF',
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
