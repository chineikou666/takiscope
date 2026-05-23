'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { MockWork } from '@/data/mock-works';

interface TimelineScrollerProps {
  works: MockWork[];
  onYearSelect: (year: number | null) => void;
  selectedYear: number | null;
}

export function TimelineScroller({
  works,
  onYearSelect,
  selectedYear,
}: TimelineScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Generate year range from works
  const years = Array.from(new Set(works.map((w) => w.year))).sort(
    (a, b) => b - a
  );
  const minYear = years[years.length - 1];
  const maxYear = years[0];

  // Count works per year
  const worksPerYear = new Map<number, number>();
  works.forEach((w) => {
    worksPerYear.set(w.year, (worksPerYear.get(w.year) || 0) + 1);
  });
  const maxWorksInYear = Math.max(...Array.from(worksPerYear.values()), 1);

  // Count per month for selected year
  const monthsWithWorks =
    selectedYear !== null
      ? Array.from({ length: 12 }, (_, i) => {
          const month = i + 1;
          const count = works.filter(
            (w) => w.year === selectedYear && w.month === month
          ).length;
          return { month, count };
        })
      : [];

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setScrollProgress(scrollTop / (scrollHeight - clientHeight || 1));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex h-full gap-0">
      {/* Scrollable year list */}
      <div
        ref={containerRef}
        className="custom-scrollbar relative flex-1 overflow-y-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="relative py-[40vh]">
          {/* Center indicator line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 h-px bg-silver-dim/15" />

          {years.map((year) => {
            const count = worksPerYear.get(year) || 0;
            const densityRatio = count / maxWorksInYear;
            const isSelected = year === selectedYear;
            const yearIndex = years.indexOf(year);
            const totalYears = years.length;

            return (
              <button
                key={year}
                onClick={() =>
                  onYearSelect(isSelected ? null : year)
                }
                className="group relative block w-full py-3 text-left transition-opacity duration-300"
                style={{
                  paddingTop: `${12 + densityRatio * 24}px`,
                  paddingBottom: `${12 + densityRatio * 24}px`,
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Year number */}
                  <span
                    className={`font-mono text-lg tracking-[0.2em] transition-colors duration-300 ${
                      isSelected
                        ? 'text-silver-white light:text-museum-ink'
                        : 'text-silver-dim light:text-museum-ink-dim'
                    }`}
                  >
                    {year}
                  </span>

                  {/* Density bar */}
                  <div className="h-px flex-1 bg-silver-dim/20 light:bg-museum-shadow">
                    <motion.div
                      animate={{ width: `${densityRatio * 100}%` }}
                      className={`h-full transition-colors duration-300 ${
                        isSelected
                          ? 'bg-silver-white light:bg-museum-ink'
                          : 'bg-silver-dim/40'
                      }`}
                    />
                  </div>

                  {/* Count */}
                  <span className="font-mono text-xs tracking-[0.2em] text-silver-dim">
                    {count}
                  </span>
                </div>

                {/* Month grid — expands for selected year */}
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.3, 0, 0.15, 1] }}
                    className="ml-[4.5rem] mt-2 flex gap-1 overflow-hidden"
                  >
                    {monthsWithWorks.map(({ month, count }) => (
                      <div
                        key={month}
                        className="flex-1"
                        title={`${year}/${month}: ${count}`}
                      >
                        <div
                          className="h-8 w-full"
                          style={{
                            opacity: count > 0 ? Math.min(0.3 + count * 0.25, 1) : 0.05,
                            background: 'var(--color-silver-white)',
                          }}
                        />
                        <span className="mt-1 block text-center font-mono text-xs text-silver-dim">
                          {month}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
