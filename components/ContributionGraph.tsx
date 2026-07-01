'use client';

import { useMemo } from 'react';




import { useGithubContributions } from './useGithubContributions';

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};





export default function ContributionGraph() {
  const { days } = useGithubContributions();

  const contributions = useMemo(() => {
    if (!days || days.length === 0) return [];
    return days;
  }, [days]);


  // Teal color palette (levels 0-4)
  const tealPalette: Record<0 | 1 | 2 | 3 | 4, string> = {
    0: '#1a1a1e',     // Muted dark grey/charcoal
    1: '#0d4d4d',     // Muted dark teal
    2: '#14a89f',     // Medium vibrant teal
    3: '#1eccc1',     // Bright, punchy teal
    4: '#00ffff',     // Ultra-bright neon teal
  };


  const glowStyles: Record<0 | 1 | 2 | 3 | 4, React.CSSProperties> = {
    0: {},
    1: {},
    2: {},
    3: { boxShadow: '0 0 8px rgba(30, 204, 193, 0.4)' },
    4: { boxShadow: '0 0 12px rgba(0, 255, 255, 0.6)' },
  };


  // Organize contributions into a 7-column grid (7 days per week)
  const weeks = useMemo((): ContributionDay[][] => {
    const result: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
      result.push(contributions.slice(i, i + 7));
    }
    return result;
  }, [contributions]);

  // Get month labels for top row
  const monthLabels = useMemo(() => {
    const labels: { month: string; weekIndex: number }[] = [];
    let currentMonth = '';

    weeks.forEach((week, weekIndex) => {
      if (!week[0]) return;
      const firstDateInWeek = new Date(week[0].date);
      const monthName = firstDateInWeek.toLocaleString('default', { month: 'short' });

      if (monthName !== currentMonth) {
        currentMonth = monthName;
        labels.push({ month: monthName, weekIndex });
      }
    });

    return labels;
  }, [weeks]);


  // Get day names (Sun-Sat)
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div style={{
      padding: '1.5rem',
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: '20px',
      overflow: 'hidden',
    }}>

      {/* Header label */}
      <div style={{

        fontFamily: 'var(--font-label)',
        fontSize: '12px',
        letterSpacing: '0.15em',
        color: '#14B8A6',
        marginBottom: '1rem',
      }}>
        ACTIVITY_LOG // COMMIT_HISTORY
      </div>

      {/* Contribution grid container - no horizontal overflow */}
      <div style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          width: '100%',
        }}>

          {/* Month labels row */}
          <div style={{
            display: 'flex',
            gap: '0.2rem',
            marginBottom: '0.5rem',
            height: '20px',
            alignItems: 'flex-end',
            paddingLeft: '2.25rem',
            width: '100%',
            overflow: 'hidden',
          }}>

            {monthLabels.map((label, idx) => (
              <div
                key={`${label.month}-${idx}`}
                style={{
      position: 'relative',
                  left: 0,

                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  width: '40px',
                }}
              >
                {label.month}
              </div>
            ))}
          </div>

          {/* Day name + grid */}
          <div style={{ display: 'flex', gap: '0.2rem' }}>
            {/* Left day names */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
              marginRight: '0.5rem',
              justifyContent: 'space-around',
            }}>
              {dayNames.map((day) => (

                <div
                  key={day}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    width: '30px',
                    textAlign: 'right',
                    height: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div style={{
              display: 'flex',
              gap: '0.2rem',
            }}>
              {weeks.map((week, weekIndex) => (


                <div
                  key={`week-${weekIndex}`}

                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                  }}
                >
                  {week.map((day, dayIndex) => (
                    <div
                      key={day.date}
                      title={`${day.date}: ${day.count} contributions`}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '3px',
                  backgroundColor: tealPalette[day.level as 0 | 1 | 2 | 3 | 4],
                        ...glowStyles[day.level as 0 | 1 | 2 | 3 | 4],



                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = 'scale(1.4)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = 'scale(1)';
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
          }}>
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '2px',
                  backgroundColor: tealPalette[level as 0 | 1 | 2 | 3 | 4],
                  ...glowStyles[level as 0 | 1 | 2 | 3 | 4],


                }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
