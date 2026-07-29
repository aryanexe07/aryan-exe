import { NextResponse } from 'next/server';
import { config } from '@/data/config';

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  canonical_url: string;
  url: string;
  tag_list?: string[];
}

export async function GET() {
  const username = config.devtoUsername || process.env.DEVTO_USERNAME || 'aryan_exe';
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${username}&per_page=100&state=all`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ articles: [] });
    }

    const data: DevToArticle[] = await res.json();
    return NextResponse.json({ articles: Array.isArray(data) ? data : [] });
  } catch (err) {
    console.error('Failed to fetch articles from dev.to:', err);
    return NextResponse.json({ articles: [] });
  }
}
