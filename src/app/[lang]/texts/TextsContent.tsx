'use client';

import { useSearchParams } from 'next/navigation';
import { TextsClient } from '@/components/texts/TextsClient';
import type { Dictionary } from '@/i18n/dictionaries';

export function TextsContent({ lang, dict }: { lang: 'ja' | 'en'; dict: Dictionary }) {
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get('category');
  const yearParam = searchParams.get('year');

  const selectedCategory =
    categoryParam === 'essay' || categoryParam === 'publication' ? categoryParam : null;
  const selectedYear = yearParam ? Number(yearParam) : null;

  return (
    <TextsClient
      lang={lang}
      dict={dict}
      selectedCategory={selectedCategory}
      selectedYear={selectedYear}
    />
  );
}
