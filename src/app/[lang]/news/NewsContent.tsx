'use client';

import { useSearchParams } from 'next/navigation';
import { NewsClient } from '@/components/news/NewsClient';
import type { Dictionary } from '@/i18n/dictionaries';

export function NewsContent({ lang, dict }: { lang: 'ja' | 'en'; dict: Dictionary }) {
  const searchParams = useSearchParams();
  const yearParam = searchParams.get('year');
  const selectedYear = yearParam ? Number(yearParam) : null;

  return (
    <NewsClient
      lang={lang}
      dict={dict}
      selectedYear={selectedYear}
    />
  );
}
