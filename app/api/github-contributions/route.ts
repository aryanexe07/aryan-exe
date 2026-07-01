import { NextResponse } from 'next/server';
import { config } from '@/data/config';

type Level = 0 | 1 | 2 | 3 | 4;

type ContributionDay = {
  date: string;
  count: number;
  level: Level;
};

function mapGithubLevelToTealLevel(level: number): Level {
  // GitHub contribution level is already 0-4 in the `contributionCalendar`
  // We'll keep it as-is so the UI can map to your palette.
  const clamped = Math.max(0, Math.min(4, Math.floor(level)));
  return clamped as Level;
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: 'Missing GITHUB_TOKEN environment variable.' },
      { status: 500 }
    );
  }

  const login = config.githubUsername;

  // Fetch last ~1 year of contribution calendar
  // (GitHub contribution graph is based on a rolling window)
  const to = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        login,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: 'GitHub GraphQL request failed', detail: text },
      { status: res.status }
    );
  }

  const json = (await res.json()) as unknown;

  // Best-effort runtime shape validation (prevents `any` usage)
  const weeks =
    typeof json === 'object' && json !== null
      ? (json as { data?: { user?: { contributionsCollection?: { contributionCalendar?: { weeks?: unknown } } } } }).data?.user?.contributionsCollection?.contributionCalendar?.weeks

      : undefined;

  if (!Array.isArray(weeks)) {

    return NextResponse.json(
      { error: 'Unexpected GitHub response shape' },
      { status: 500 }
    );
  }

  const days: ContributionDay[] = [];
  for (const week of weeks) {
    for (const d of week.contributionDays ?? []) {
      const date = String(d.date);
      const count = Number(d.contributionCount ?? 0);
      const level = mapGithubLevelToTealLevel(Number(d.contributionLevel ?? 0));
      days.push({ date, count, level });
    }
  }

  // Sort by date ascending
  days.sort((a, b) => a.date.localeCompare(b.date));

  return NextResponse.json({ days });
}

