# ARYAN.EXE — Setup Guide

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Configuration

Edit **`data/config.ts`** first:

```ts
export const config = {
  name: 'Aryan',
  githubUsername: 'YOUR_GITHUB_USERNAME',  // ← GitHub API uses this
  email: 'your@email.com',
  githubUrl: 'https://github.com/YOUR_USERNAME',
  linkedinUrl: 'https://linkedin.com/in/YOUR_HANDLE',
  resumeUrl: '/resume.pdf',              // ← put resume.pdf in /public/
  formspreeId: 'YOUR_FORMSPREE_ID',     // ← get from formspree.io
};
```

## Customizing Projects

Edit **`data/projects.ts`** — each project has:
- `name`, `description`, `techStack[]`
- `architecture`, `scale`, `performance` (your V1 metrics)
- `githubUrl`, `demoUrl` (optional)
- `category`: `INTERACTIVE | SYSTEMS | OPEN SOURCE | TOOLS | EXPERIMENTS`

## Customizing Skills

Edit **`data/skills.ts`** — add/remove skills per category:
- `PRIMARY` — daily drivers
- `SECONDARY` — solid working knowledge  
- `LEARNING` — actively building depth

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo to vercel.com for automatic deployments.

## Fonts

Loaded from Google Fonts (Anton, Teko, Inter) — no local files needed.

## Formspree Setup

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID (e.g. `xpwzjkgq`)
4. Paste into `config.formspreeId`

## GitHub API

The GitHub section fetches live data from `api.github.com/users/{username}`.
No API key needed for public profiles (60 req/hr limit).
Falls back to mock data if the request fails.
