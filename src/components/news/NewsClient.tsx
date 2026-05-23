'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/i18n/dictionaries';
import { mockNews } from '@/data/mock-news';
import { NewsCard } from './NewsCard';

interface NewsClientProps {
  lang: 'ja' | 'en';
  dict: Dictionary;
  selectedYear: number | null;
}

export function NewsClient({ lang, dict, selectedYear }: NewsClientProps) {
  const filteredNews = useMemo(() => {
    let result = [...mockNews];
    if (selectedYear) {
      result = result.filter((n) => new Date(n.date).getFullYear() === selectedYear);
    }
    return result;
  }, [selectedYear]);

  const groupedByYear = useMemo(() => {
    const groups: Record<number, typeof mockNews> = {};
    for (const n of filteredNews) {
      const y = new Date(n.date).getFullYear();
      (groups[y] ??= []).push(n);
    }
    for (const items of Object.values(groups)) {
      items.sort((a, b) => b.date.localeCompare(a.date));
    }
    return Object.entries(groups)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, items]) => ({ year: Number(year), items }));
  }, [filteredNews]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-[3vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}
          className="flex items-center justify-between mb-12"
        >
          <h1 className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink">
            {dict.nav.news}
          </h1>
          <span className="font-mono text-xs text-silver-dim light:text-museum-ink-dim">
            {filteredNews.length} {lang === 'ja' ? '件' : 'items'}
          </span>
        </motion.div>

        {/* Chronicle */}
        {groupedByYear.length > 0 ? (
          <div className="space-y-10">
            {groupedByYear.map(({ year, items }, gi) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + gi * 0.1,
                  ease: [0.3, 0, 0.15, 1],
                }}
              >
                {/* Year header */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-sans text-3xl font-light tracking-[0.08em] text-silver-white/80 light:text-museum-ink/80">
                    {year}
                  </span>
                  <span className="flex-1 h-px bg-silver-dim/12 light:bg-museum-ink-dim/10 mt-1" />
                </div>

                {/* Entries */}
                <div className="relative pl-10">
                  {/* Timeline spine */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-silver-dim/12 light:bg-museum-ink-dim/8" />

                  <div className="space-y-0">
                    {items.map((news, i) => (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.2 + gi * 0.1 + i * 0.04,
                            duration: 0.4,
                            ease: [0.3, 0, 0.15, 1],
                          },
                        }}
                        className="relative"
                      >
                        {/* Dot on timeline spine */}
                        <span className="absolute left-[-27px] top-[10px] w-[7px] h-[7px] rounded-full border border-silver-dim/25 light:border-museum-ink-dim/20 bg-darkroom-black light:bg-museum-white" />

                        <NewsCard
                          news={news}
                          lang={lang}
                          readLabel={dict.common.readMore}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-silver-dim light:text-museum-ink-dim text-center py-20">
            {lang === 'ja' ? '該当するニュースがありません。' : 'No news found for this filter.'}
          </p>
        )}
      </div>
    </div>
  );
}
