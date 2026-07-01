'use client';

import { useEffect } from 'react';
import { config } from '@/data/config';

declare global {
  // github-calendar adds a global function
  // eslint-disable-next-line no-var
  var GitHubCalendar: (
    selector: string,
    username: string,
    options?: Record<string, any>
  ) => void;
}

