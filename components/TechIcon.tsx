'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

// Pixel-perfect custom SVG icons for all skills & AI providers
export const CustomIcons: Record<string, React.FC<{ size?: number; className?: string; color?: string }>> = {
  // === AI & LLM PROVIDERS ===
  claude: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5L13.1 8.9L19.5 7.8L14.7 12L19.5 16.2L13.1 15.1L12 21.5L10.9 15.1L4.5 16.2L9.3 12L4.5 7.8L10.9 8.9L12 2.5Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="2" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.75" />
    </svg>
  ),

  openai: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19.7 13a4.8 4.8 0 0 0 .3-1.6 4.9 4.9 0 0 0-4.9-4.9c-.3 0-.7 0-1 .1A4.9 4.9 0 0 0 5.2 7.7a4.9 4.9 0 0 0-2.9 4.4c0 .6.1 1.1.3 1.6A4.9 4.9 0 0 0 4.3 19a4.9 4.9 0 0 0 8.9 1.4 4.9 4.9 0 0 0 6.5-7.4z" />
      <path d="M12 8.5v7" />
      <path d="m8.5 10.5 7 4" />
      <path d="m8.5 14.5 7-4" />
    </svg>
  ),

  gemini: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
        fill={color}
      />
    </svg>
  ),

  mistral: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="3" y="4" width="3.6" height="3.6" rx="0.5" />
      <rect x="17.4" y="4" width="3.6" height="3.6" rx="0.5" />
      <rect x="3" y="8.8" width="3.6" height="3.6" rx="0.5" />
      <rect x="7.8" y="8.8" width="3.6" height="3.6" rx="0.5" />
      <rect x="12.6" y="8.8" width="3.6" height="3.6" rx="0.5" />
      <rect x="17.4" y="8.8" width="3.6" height="3.6" rx="0.5" />
      <rect x="3" y="13.6" width="3.6" height="3.6" rx="0.5" />
      <rect x="10.2" y="13.6" width="3.6" height="3.6" rx="0.5" />
      <rect x="17.4" y="13.6" width="3.6" height="3.6" rx="0.5" />
      <rect x="3" y="18.4" width="3.6" height="3.6" rx="0.5" />
      <rect x="17.4" y="18.4" width="3.6" height="3.6" rx="0.5" />
    </svg>
  ),

  mistralai: ({ size = 22, className, color = 'currentColor' }) => (
    <CustomIcons.mistral size={size} className={className} color={color} />
  ),

  grok: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  ),

  xai: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M4 4l6.5 8L4 20h2.5l5.2-6.4L16.5 20H20l-6.8-8.3L19.5 4H17l-5 6.1L7.5 4H4zm14.5 0h1.8v16h-1.8V4z" />
    </svg>
  ),

  deepseek: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19.5 12.5C18.5 7.5 14 5 9 6.5C4.5 7.8 3 12 4.5 15.5C6 19 11 20 15 18.5C18 17.3 19.5 14.5 19.5 12.5Z" />
      <path d="M14 10.5C14 11.3 13.3 12 12.5 12C11.7 12 11 11.3 11 10.5C11 9.7 11.7 9 12.5 9C13.3 9 14 9.7 14 10.5Z" fill={color} />
      <path d="M19 8C20.5 6.5 22 7 22 7" />
      <path d="M4.5 15.5C3 17 2 18.5 2 18.5" />
    </svg>
  ),

  cohere: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" opacity="0.85" />
      <path d="M10 16a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" opacity="0.65" />
      <path d="M14 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
    </svg>
  ),

  groq: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill={color} />
      <path
        d="M14.5 8.5C14.5 7.7 13.8 7 13 7H11C9.9 7 9 7.9 9 9V11C9 12.1 9.9 13 11 13H14.5V17H11.5"
        stroke="var(--bg, #0B0F19)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="10" r="1.2" fill="var(--bg, #0B0F19)" />
    </svg>
  ),

  perplexity: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v20M5 7l14 10M19 7 5 17" />
      <circle cx="12" cy="12" r="3.5" stroke={color} strokeWidth="1.5" />
      <circle cx="5" cy="7" r="1.5" fill={color} />
      <circle cx="19" cy="7" r="1.5" fill={color} />
      <circle cx="5" cy="17" r="1.5" fill={color} />
      <circle cx="19" cy="17" r="1.5" fill={color} />
    </svg>
  ),

  togetherai: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="8" cy="12" r="5" stroke={color} strokeWidth="2" />
      <circle cx="16" cy="12" r="5" stroke={color} strokeWidth="2" />
      <path d="M12 9v6" stroke={color} strokeWidth="2" />
    </svg>
  ),

  stabilityai: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M14.5 4.5C13.2 3.5 11.5 3 9.8 3 5.5 3 3 5.8 3 9.2c0 5 6.2 5.8 6.2 7.8 0 .9-.8 1.5-2 1.5-1.5 0-3-.6-4.2-1.7l-1.5 2.2C3.2 20.3 5.4 21 7.8 21c4.6 0 7.2-2.7 7.2-6.2 0-5.2-6.2-6-6.2-7.9 0-.8.7-1.3 1.8-1.3 1.2 0 2.4.5 3.3 1.3l1.6-2.4z" />
      <circle cx="19" cy="18.5" r="2.5" />
    </svg>
  ),

  runway: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill={color} />
      <path
        d="M8.5 7.5H12.5C14.2 7.5 15.5 8.6 15.5 10.2C15.5 11.8 14.2 12.8 12.5 12.8H10.5V16.5H8.5V7.5ZM10.5 11.2H12.3C13.1 11.2 13.7 10.8 13.7 10.2C13.7 9.5 13.1 9.1 12.3 9.1H10.5V11.2ZM13 12.8L15.8 16.5H13.5L11.2 13.2"
        fill="var(--bg, #0B0F19)"
      />
    </svg>
  ),

  midjourney: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 18.5c4-1 12-1 16 0-1.5 2-4 2.5-8 2.5s-6.5-.5-8-2.5z" />
      <path d="M12 3v15M12 4.5l6.5 11.5M12 8L6.5 16" />
    </svg>
  ),

  qwen: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7 12 2" />
      <circle cx="12" cy="12" r="3.5" />
      <line x1="12" y1="2" x2="12" y2="8.5" />
      <line x1="12" y1="15.5" x2="12" y2="22" />
    </svg>
  ),

  kimi: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill={color} />
      <path
        d="M8.5 7.5V16.5M15.5 7.5L10 12.5L15.5 16.5"
        stroke="var(--bg, #0B0F19)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  humeai: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="17.6" cy="6.4" r="1.5" opacity="0.85" />
      <circle cx="20" cy="12" r="1.5" opacity="0.7" />
      <circle cx="17.6" cy="17.6" r="1.5" opacity="0.55" />
      <circle cx="12" cy="20" r="1.5" opacity="0.4" />
      <circle cx="6.4" cy="17.6" r="1.5" opacity="0.3" />
      <circle cx="4" cy="12" r="1.5" opacity="0.45" />
      <circle cx="6.4" cy="6.4" r="1.5" opacity="0.7" />
    </svg>
  ),

  inflectionai: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M9 5h6v2.5h-1.75v9.5H15V19.5H9V17h1.75V7.5H9V5z" />
    </svg>
  ),

  suno: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill={color} />
      <circle cx="8.5" cy="12" r="2" fill="var(--bg, #0B0F19)" />
      <circle cx="15.5" cy="12" r="2" fill="var(--bg, #0B0F19)" />
      <rect x="10" y="11" width="4" height="2" fill="var(--bg, #0B0F19)" />
    </svg>
  ),

  // === LANGUAGES & CORE TECH ===
  python: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.8S2 6.1 2 10.6s3.3 4.3 3.3 4.3h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1-3.1-3.7-7.6-3.7zm-2.4 1.3a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
      <path d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.2s3.8.4 3.8-4.1-3.3-4.3-3.3-4.3h-2v2.8s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.1 3.1 3.7 7.6 3.7zm2.4-1.3a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" opacity="0.85" />
    </svg>
  ),

  typescript: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill={color} />
      <path
        d="M7 10.5h4.5M9.25 10.5v7M13.5 16.2c.7.5 1.6.8 2.5.8 1.5 0 2.2-.7 2.2-1.6 0-2.2-4.2-1.4-4.2-3.8 0-1.2.9-2.1 2.4-2.1 1 0 1.8.3 2.4.7l-.6 1.4c-.6-.4-1.2-.6-1.8-.6-.8 0-1.2.4-1.2 1 0 2 4.2 1.3 4.2 3.8 0 1.3-1 2.2-2.6 2.2-1.1 0-2.2-.4-2.9-1l.6-1.4z"
        stroke="var(--bg, #0B0F19)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),

  javascript: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill={color} />
      <path
        d="M8.5 12.5v3.5c0 1.5-.7 2-2 2-.5 0-1-.1-1.5-.3v-1.5c.3.1.6.2 1 .2.5 0 .8-.2.8-.8v-3.1h1.7zm5 3.7c.7.5 1.6.8 2.5.8 1.5 0 2.2-.7 2.2-1.6 0-2.2-4.2-1.4-4.2-3.8 0-1.2.9-2.1 2.4-2.1 1 0 1.8.3 2.4.7l-.6 1.4c-.6-.4-1.2-.6-1.8-.6-.8 0-1.2.4-1.2 1 0 2 4.2 1.3 4.2 3.8 0 1.3-1 2.2-2.6 2.2-1.1 0-2.2-.4-2.9-1l.6-1.4z"
        fill="var(--bg, #0B0F19)"
      />
    </svg>
  ),

  react: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className}>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill={color} />
    </svg>
  ),

  nextjs: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.8" />
      <path
        d="M8.5 7.5v9M15.5 7.5v4.5M8.5 7.5l7 9"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  nodejs: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2.5 20.2 7.2 20.2 16.8 12 21.5 3.8 16.8 3.8 7.2 12 2.5" />
      <path d="M12 2.5v19M3.8 7.2l16.4 9.6M20.2 7.2L3.8 16.8" opacity="0.4" />
    </svg>
  ),

  tensorflow: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2.5L3.5 7.4v9.8l3.7-2.1V9.5l4.8-2.8v13.6l3.7-2.1V4.6L12 2.5z" />
      <path d="M12 6.7l4.8 2.8v5.6l3.7 2.1V7.4L12 2.5v4.2z" opacity="0.75" />
    </svg>
  ),

  pytorch: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.5 3.5a7.5 7.5 0 1 0 7.5 7.5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill={color} />
      <path d="M12.5 8l-3 3 3 3" />
    </svg>
  ),

  pandas: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="5" y="4" width="3" height="16" rx="1" />
      <rect x="10.5" y="8" width="3" height="12" rx="1" opacity="0.7" />
      <rect x="16" y="5" width="3" height="15" rx="1" opacity="0.85" />
      <circle cx="12" cy="5" r="1.5" />
    </svg>
  ),

  jupyter: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3C8.7 3 6 4.3 4.5 6.3c.7.5 1.5.8 2.3 1 1.2-1.3 2.9-2.1 5.2-2.1 4 0 7.2 2.7 7.6 6.3.7-.1 1.4-.1 2.1.1C21.3 6.8 17.1 3 12 3z"
        fill={color}
      />
      <path
        d="M12 21c3.3 0 6-1.3 7.5-3.3-.7-.5-1.5-.8-2.3-1-1.2 1.3-2.9 2.1-5.2 2.1-4 0-7.2-2.7-7.6-6.3-.7.1-1.4.1-2.1-.1C2.7 17.2 6.9 21 12 21z"
        fill={color}
        opacity="0.75"
      />
      <circle cx="18.5" cy="5.5" r="1.5" fill={color} />
      <circle cx="5.5" cy="18.5" r="1.5" fill={color} />
      <circle cx="4" cy="11.5" r="1" fill={color} />
    </svg>
  ),

  tailwindcss: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1 .3 1.8 1.1 2.6 1.9 1.3 1.4 2.8 2.9 6.1 2.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1-.3-1.8-1.1-2.6-1.9C16.8 7.5 15.3 6 12 6zM6 12.5c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1 .3 1.8 1.1 2.6 1.9 1.3 1.4 2.8 2.9 6.1 2.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1-.3-1.8-1.1-2.6-1.9C10.8 14 9.3 12.5 6 12.5z" />
    </svg>
  ),

  fastapi: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.8" />
      <path
        d="M12.8 5.5L7.5 13H11.5L11 18.5L16.5 11H12.2L12.8 5.5Z"
        fill={color}
      />
    </svg>
  ),

  postgresql: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3C7 3 4 6 4 11c0 4 2 7 5 8v2c3 0 5-1 6-3 3 0 5-2 5-6 0-6-3-9-8-9z" />
      <path d="M9 11c1-1 3-1 4 0M10 14h2" />
    </svg>
  ),

  prisma: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 18.5L12 3l8 15.5H4z" />
      <path d="M12 3v15.5" />
    </svg>
  ),

  mongodb: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5C12 2.5 6 7 6 12.5c0 4 3 6.5 6 8.5 3-2 6-4.5 6-8.5 0-5.5-6-10-6-10z" />
      <path d="M12 2.5v18.5" />
    </svg>
  ),

  git: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="10" r="2.5" />
      <path d="M6 8.5v7M8.5 6.5l7 3.5" />
    </svg>
  ),

  github: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),

  docker: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14c1.5 2 4 3 8 3s6.5-1 8-3c-.5 4-4 7-8 7s-7.5-3-8-7z" />
      <rect x="7" y="10" width="2.5" height="2.5" fill={color} stroke="none" />
      <rect x="10.5" y="10" width="2.5" height="2.5" fill={color} stroke="none" />
      <rect x="14" y="10" width="2.5" height="2.5" fill={color} stroke="none" />
      <rect x="10.5" y="6.5" width="2.5" height="2.5" fill={color} stroke="none" />
      <rect x="14" y="6.5" width="2.5" height="2.5" fill={color} stroke="none" />
      <path d="M20 14c1-1 2-1 2-1" />
    </svg>
  ),

  linux: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3c-2.5 0-4 2-4 5 0 2 .5 3.5 0 5-1 3-2 4-2 6 0 1.5 3 2 8 2s8-.5 8-2c0-2-1-3-2-6-.5-1.5 0-3 0-5 0-3-1.5-5-4-5z" />
      <circle cx="10.5" cy="8" r="0.8" fill={color} />
      <circle cx="13.5" cy="8" r="0.8" fill={color} />
      <path d="M11 10.5h2" />
    </svg>
  ),

  langchain: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
  ),

  scikitlearn: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <circle cx="12" cy="17" r="3" />
      <line x1="9.5" y1="9.5" x2="14.5" y2="9.5" />
      <line x1="8.5" y1="10.5" x2="10.5" y2="14.5" />
      <line x1="15.5" y1="10.5" x2="13.5" y2="14.5" />
    </svg>
  ),

  keras: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill={color} />
      <path
        d="M6 5.5H8.5V11.2L13.8 5.5H17.2L11.2 11.8L17.5 18.5H14.1L9.2 13.2V18.5H6.7V5.5Z"
        fill="var(--bg, #0B0F19)"
      />
    </svg>
  ),

  aws: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 10l2-4 2 4M7 8.5h2M11 6l1.5 4 1.5-4 1.5 4 1.5-4M18.5 7.5c-.5-.8-1.5-1.5-2.5-1.5s-2 .8-2 1.8c0 2.2 4.5 1.2 4.5 3.2 0 1.2-1 2-2.5 2s-2.5-.8-3-2" />
      <path d="M4 17.5c4.5 3 11.5 3 16 0" />
      <path d="M18 16.5l2 1-1 2" />
    </svg>
  ),

  kubernetes: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2.5 20.2 6.8 20.2 17.2 12 21.5 3.8 17.2 3.8 6.8 12 2.5" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="5" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="19" />
      <line x1="6" y1="9" x2="9.5" y2="10.5" />
      <line x1="18" y1="9" x2="14.5" y2="10.5" />
      <line x1="6" y1="15" x2="9.5" y2="13.5" />
      <line x1="18" y1="15" x2="14.5" y2="13.5" />
    </svg>
  ),

  redis: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 3 21 7.5 12 12 3 7.5 12 3" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5l9 4.5 9-4.5" />
    </svg>
  ),

  figma: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="3" width="7" height="6" rx="3" fill={color} />
      <rect x="12" y="3" width="7" height="6" rx="3" fill={color} opacity="0.8" />
      <rect x="5" y="9" width="7" height="6" rx="3" fill={color} opacity="0.6" />
      <circle cx="15.5" cy="12" r="3.5" fill={color} opacity="0.8" />
      <rect x="5" y="15" width="7" height="6" rx="3" fill={color} opacity="0.4" />
    </svg>
  ),

  java: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2c1.5 2-1.5 3 0 5M9 4c1.5 2-1.5 3 0 5M15 4c1.5 2-1.5 3 0 5" />
      <path d="M4 14c0 3.5 3.5 5 8 5s8-1.5 8-5H4z" />
      <path d="M18 14.5c1.5 0 2.5 1 2.5 2s-1 2-2.5 2" />
      <path d="M5 21h14" />
    </svg>
  ),

  cpp: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2.5 20.2 6.8 20.2 17.2 12 21.5 3.8 17.2 3.8 6.8 12 2.5" />
      <path d="M10.5 10a3 3 0 1 0 0 4M14 12h3M15.5 10.5v3M18.5 12h3M20 10.5v3" />
    </svg>
  ),

  c: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2.5 20.2 6.8 20.2 17.2 12 21.5 3.8 17.2 3.8 6.8 12 2.5" />
      <path d="M14.5 9.5a4 4 0 1 0 0 5" />
    </svg>
  ),

  vite: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20.5 4.5L12.5 22.5L3.5 4.5L11.5 2.5L20.5 4.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3.5L8.5 12H12.5L10.5 18.5L16.5 9.5H12.5L13.5 3.5Z"
        fill={color}
      />
    </svg>
  ),

  supabase: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.2 2.5L4 13.8H11.5V21.5L20 10.2H13.2V2.5Z"
        fill={color}
      />
    </svg>
  ),

  vercel: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3L22 20H2L12 3Z" fill={color} />
    </svg>
  ),

  neovim: ({ size = 22, className, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 3.5v17L18.5 3.5v17" />
      <path d="M5 3.5l13.5 17" />
    </svg>
  ),
};

export default function TechIcon({ name, className = '', size = 22, color = 'currentColor' }: TechIconProps) {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  const IconComponent = CustomIcons[iconKey];
  if (IconComponent) {
    return (
      <span
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          lineHeight: 0,
        }}
      >
        <IconComponent size={size} color={color} />
      </span>
    );
  }

  // Fallback icon for anything else
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '5px',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: Math.max(9, Math.floor(size * 0.42)),
        color: color === 'currentColor' ? '#94A3B8' : color,
        fontWeight: 700,
        flexShrink: 0,
        letterSpacing: '-0.02em',
      }}
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
