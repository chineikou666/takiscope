'use client';

import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/client';
import { useTheme } from '@/components/ui/ThemeProvider';
import { mockWorks } from '@/data/mock-works';
import { mockTexts } from '@/data/mock-texts';
import { mockNews } from '@/data/mock-news';
import type { Locale } from '@/i18n/dictionaries';

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'works', href: '/works' },
  { key: 'texts', href: '/texts' },
  { key: 'news', href: '/news' },
  { key: 'items', href: '/items' },
  { key: 'contact', href: '/contact' },
] as const;

const clusters = [
  'Seeing & Surveillance',
  'Optical Apparatus',
  'Body & Double',
  'Urban Space & Ruins',
  'Signal & Noise',
  'Archive',
  'Collaboration',
] as const;

const mediums = [
  'Installation',
  'Video',
  'Performance',
  'Exhibition',
  'Collage',
  'Interview',
  'Collaboration',
] as const;

function ThemeToggle({ size }: { size: 'desktop' | 'mobile' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  const isMobile = size === 'mobile';
  const iconPx = isMobile ? 20 : 18;
  const pad = isMobile ? 'p-2.5' : 'p-2';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative shrink-0 rounded-lg transition-colors duration-200
        text-silver-dim hover:text-silver-white hover:bg-silver-white/5
        light:text-museum-ink-dim light:hover:text-museum-ink light:hover:bg-museum-ink/5 ${pad}`}
      style={{ width: iconPx + 16, height: iconPx + 16 }}
    >
      {/* Sun — visible in dark mode */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isDark ? 'opacity-100' : 'opacity-0'}`}
      >
        <svg width={iconPx} height={iconPx} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </span>

      {/* Moon — visible in light mode */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-100'}`}
      >
        <svg width={iconPx} height={iconPx} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </span>
    </button>
  );
}

export function Header() {
  const { dict, lang } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<'works' | 'texts' | 'news' | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<'works' | 'texts' | 'news' | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null; }
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleMenuEnter = useCallback((menu: 'works' | 'texts' | 'news') => {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
    if (!openTimerRef.current) {
      openTimerRef.current = setTimeout(() => setHoverMenu(menu), 300);
    }
  }, []);

  const handleMenuLeave = useCallback(() => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null; }
    closeTimerRef.current = setTimeout(() => setHoverMenu(null), 200);
  }, []);

  const otherLang: Locale = lang === 'ja' ? 'en' : 'ja';
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const isWorksPage = pathname.startsWith(`/${lang}/works`);
  const isTextsPage = pathname.startsWith(`/${lang}/texts`);
  const isNewsPage = pathname.startsWith(`/${lang}/news`);

  // ── Works filter data ──
  const allYears = useMemo(() => {
    const set = new Set(mockWorks.map((w) => w.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  // ── Texts filter data ──
  const textsYears = useMemo(() => {
    const set = new Set<string>();
    for (const t of mockTexts) {
      if (t.date) {
        const y = t.date.split('-')[0];
        if (y) set.add(y);
      }
    }
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, []);

  // ── Works filter handlers ──
  const handleWorksFilterClick = useCallback(
    (type: 'cluster' | 'medium' | 'year', value: string) => {
      const params = new URLSearchParams();
      if (isWorksPage) {
        const existing = new URLSearchParams(searchParams.toString());
        for (const key of ['cluster', 'medium', 'year']) {
          const v = existing.get(key);
          if (v) params.set(key, v);
        }
      }
      const current = params.get(type);
      if (current === value) {
        params.delete(type);
      } else {
        params.set(type, value);
      }
      const qs = params.toString();
      router.push(`/${lang}/works${qs ? `?${qs}` : ''}`);
    },
    [lang, router, searchParams, isWorksPage],
  );

  const activeCluster = isWorksPage ? searchParams.get('cluster') : null;
  const activeMedium = isWorksPage ? searchParams.get('medium') : null;
  const activeYear = isWorksPage ? searchParams.get('year') : null;
  const hasActiveWorksFilters = Boolean(activeCluster || activeMedium || activeYear);

  // ── Texts filter handlers ──
  const handleTextsFilterClick = useCallback(
    (type: 'category' | 'year', value: string) => {
      const params = new URLSearchParams();
      if (isTextsPage) {
        const existing = new URLSearchParams(searchParams.toString());
        for (const key of ['category', 'year']) {
          const v = existing.get(key);
          if (v) params.set(key, v);
        }
      }
      const current = params.get(type);
      if (current === value) {
        params.delete(type);
      } else {
        params.set(type, value);
      }
      const qs = params.toString();
      router.push(`/${lang}/texts${qs ? `?${qs}` : ''}`);
    },
    [lang, router, searchParams, isTextsPage],
  );

  const activeTextsCategory = isTextsPage ? searchParams.get('category') : null;
  const activeTextsYear = isTextsPage ? searchParams.get('year') : null;
  const hasActiveTextsFilters = Boolean(activeTextsCategory || activeTextsYear);

  // ── News filter data ──
  const newsYears = useMemo(() => {
    const set = new Set<number>();
    for (const n of mockNews) {
      set.add(new Date(n.date).getFullYear());
    }
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  // ── News filter handlers ──
  const handleNewsFilterClick = useCallback(
    (type: 'year', value: string) => {
      const params = new URLSearchParams();
      if (isNewsPage) {
        const existing = new URLSearchParams(searchParams.toString());
        const v = existing.get('year');
        if (v) params.set('year', v);
      }
      const current = params.get(type);
      if (current === value) {
        params.delete(type);
      } else {
        params.set(type, value);
      }
      const qs = params.toString();
      router.push(`/${lang}/news${qs ? `?${qs}` : ''}`);
    },
    [lang, router, searchParams, isNewsPage],
  );

  const activeNewsYear = isNewsPage ? searchParams.get('year') : null;
  const hasActiveNewsFilters = Boolean(activeNewsYear);

  const optBase =
    'block w-full text-left font-mono text-xs tracking-[0.12em] transition-colors duration-200 px-3 py-1.5 rounded-sm';
  const optOff =
    'text-silver-dim hover:text-silver-white hover:bg-silver-white/5 ' +
    'light:text-museum-ink-dim light:hover:text-museum-ink light:hover:bg-museum-ink/5';
  const optOn =
    'text-silver-white bg-silver-white/8 ' +
    'light:text-museum-ink light:bg-museum-ink/8';

  const sectionLabel =
    'font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-silver-dim/80 ' +
    'light:text-museum-ink-dim/80 px-3 mb-2 pb-2 border-b border-silver-dim/10 light:border-museum-ink-dim/8';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-darkroom-black/80 backdrop-blur-sm border-b border-silver-dim/12 light:bg-museum-white/90 light:border-museum-ink-dim/12"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="flex items-center justify-between px-[3vw] py-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="group shrink-0">
          <span className="font-sans text-lg font-medium tracking-[0.3em] text-silver-white light:text-museum-ink">
            Kentaro TAKI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const href = `/${lang}${item.href}`;
            const isActive = pathname.startsWith(href);
            const isWorks = item.key === 'works';
            const isTexts = item.key === 'texts';

            if (isWorks) {
              return (
                <div
                  key={item.key}
                  onMouseEnter={() => handleMenuEnter('works')}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link
                    href={`/${lang}/works`}
                    className={
                      isActive
                        ? 'relative inline-flex items-center px-3 py-1 text-sm tracking-[0.15em] text-silver-white light:text-museum-ink after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-silver-dim/40 light:after:bg-museum-ink-dim/30'
                        : 'inline-flex items-center px-3 py-1 text-sm tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300'
                    }
                  >
                    {dict.nav.works}
                    <motion.span
                      animate={{ rotate: hoverMenu === 'works' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-0.5 inline-flex items-center opacity-70"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="m3 5 4 4 4-4"/>
                      </svg>
                    </motion.span>
                    {hasActiveWorksFilters && (
                      <span className="ml-1 inline-block w-1 h-1 rounded-full bg-silver-white/60 light:bg-museum-ink/60" />
                    )}
                  </Link>
                </div>
              );
            }

            if (isTexts) {
              return (
                <div
                  key={item.key}
                  onMouseEnter={() => handleMenuEnter('texts')}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link
                    href={`/${lang}/texts`}
                    className={
                      isActive
                        ? 'relative inline-flex items-center px-3 py-1 text-sm tracking-[0.15em] text-silver-white light:text-museum-ink after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-silver-dim/40 light:after:bg-museum-ink-dim/30'
                        : 'inline-flex items-center px-3 py-1 text-sm tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300'
                    }
                  >
                    {dict.nav.texts}
                    <motion.span
                      animate={{ rotate: hoverMenu === 'texts' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-0.5 inline-flex items-center opacity-70"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="m3 5 4 4 4-4"/>
                      </svg>
                    </motion.span>
                    {hasActiveTextsFilters && (
                      <span className="ml-1 inline-block w-1 h-1 rounded-full bg-silver-white/60 light:bg-museum-ink/60" />
                    )}
                  </Link>
                </div>
              );
            }

            if (item.key === 'news') {
              return (
                <div
                  key={item.key}
                  onMouseEnter={() => handleMenuEnter('news')}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link
                    href={`/${lang}/news`}
                    className={
                      isActive
                        ? 'relative inline-flex items-center px-3 py-1 text-sm tracking-[0.15em] text-silver-white light:text-museum-ink after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-silver-dim/40 light:after:bg-museum-ink-dim/30'
                        : 'inline-flex items-center px-3 py-1 text-sm tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300'
                    }
                  >
                    {dict.nav.news}
                    <motion.span
                      animate={{ rotate: hoverMenu === 'news' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-0.5 inline-flex items-center opacity-70"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="m3 5 4 4 4-4"/>
                      </svg>
                    </motion.span>
                    {hasActiveNewsFilters && (
                      <span className="ml-1 inline-block w-1 h-1 rounded-full bg-silver-white/60 light:bg-museum-ink/60" />
                    )}
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.key}
                href={href}
                className={
                  isActive
                    ? 'relative px-3 py-1 text-sm tracking-[0.15em] text-silver-white light:text-museum-ink after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-silver-dim/40 light:after:bg-museum-ink-dim/30'
                    : 'px-3 py-1 text-sm tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300'
                }
              >
                {dict.nav[item.key as keyof typeof dict.nav]}
              </Link>
            );
          })}

          <span className="mx-1 h-5 w-px bg-silver-dim/20 light:bg-museum-ink/15" />

          {/* Theme toggle */}
          <ThemeToggle size="desktop" />

          {/* Language switch */}
          <Link
            href={otherPath}
            className="px-2 py-1 text-sm tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300"
          >
            {otherLang.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={dict.common.menu}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-silver-white light:bg-museum-ink"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-silver-white light:bg-museum-ink"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-silver-white light:bg-museum-ink"
          />
        </button>
      </div>

      {/* ── Works mega menu ── */}
      <AnimatePresence>
        {hoverMenu === 'works' && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.3, 0, 0.15, 1] }}
            onMouseEnter={() => handleMenuEnter('works')}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 top-full border-b border-silver-dim/8 bg-darkroom-black/98 shadow-2xl shadow-black/30 backdrop-blur-xl light:bg-museum-white/98 light:border-museum-ink-dim/8"
          >
            <div className="grid grid-cols-3 gap-x-16 max-w-6xl mx-auto px-[3vw] py-10">
              {/* Concept column */}
              <div>
                <p className={sectionLabel}>
                  {lang === 'ja' ? '概念' : 'Concept'}
                </p>
                <div className="mt-3 flex flex-col gap-0.5">
                  {clusters.map((c) => (
                    <button
                      key={c}
                      onClick={() => handleWorksFilterClick('cluster', c)}
                      className={`${optBase} ${activeCluster === c ? optOn : optOff}`}
                    >
                      {dict.works.clusters[c]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Medium column */}
              <div>
                <p className={sectionLabel}>
                  {lang === 'ja' ? '媒介' : 'Medium'}
                </p>
                <div className="mt-3 flex flex-col gap-0.5">
                  {mediums.map((m) => (
                    <button
                      key={m}
                      onClick={() => handleWorksFilterClick('medium', m)}
                      className={`${optBase} ${activeMedium === m ? optOn : optOff}`}
                    >
                      {dict.works.mediums[m]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year column */}
              <div>
                <p className={sectionLabel}>
                  {lang === 'ja' ? '年代' : 'Year'}
                </p>
                <div className="mt-3 flex flex-col gap-0.5">
                  <button
                    onClick={() => handleWorksFilterClick('year', '')}
                    className={`${optBase} ${!activeYear ? optOn : optOff}`}
                  >
                    {lang === 'ja' ? 'すべて' : 'All'}
                  </button>
                  {allYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleWorksFilterClick('year', String(year))}
                      className={`${optBase} ${activeYear === String(year) ? optOn : optOff}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Texts mega menu ── */}
      <AnimatePresence>
        {hoverMenu === 'texts' && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.3, 0, 0.15, 1] }}
            onMouseEnter={() => handleMenuEnter('texts')}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 top-full border-b border-silver-dim/8 bg-darkroom-black/98 shadow-2xl shadow-black/30 backdrop-blur-xl light:bg-museum-white/98 light:border-museum-ink-dim/8"
          >
            <div className="grid grid-cols-2 gap-x-16 max-w-2xl mx-auto px-[3vw] py-10">
              {/* Category column */}
              <div>
                <p className={sectionLabel}>
                  {dict.texts.filterByCategory}
                </p>
                <div className="mt-3 flex flex-col gap-0.5">
                  <button
                    onClick={() => handleTextsFilterClick('category', '')}
                    className={`${optBase} ${!activeTextsCategory ? optOn : optOff}`}
                  >
                    {lang === 'ja' ? 'すべて' : 'All'}
                  </button>
                  {(['essay', 'publication'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => handleTextsFilterClick('category', c)}
                      className={`${optBase} ${activeTextsCategory === c ? optOn : optOff}`}
                    >
                      {dict.texts.categories[c]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year column */}
              <div>
                <p className={sectionLabel}>
                  {dict.texts.filterByYear}
                </p>
                <div className="mt-3 flex flex-col gap-0.5">
                  <button
                    onClick={() => handleTextsFilterClick('year', '')}
                    className={`${optBase} ${!activeTextsYear ? optOn : optOff}`}
                  >
                    {lang === 'ja' ? 'すべて' : 'All'}
                  </button>
                  {textsYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleTextsFilterClick('year', year)}
                      className={`${optBase} ${activeTextsYear === year ? optOn : optOff}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── News mega menu ── */}
      <AnimatePresence>
        {hoverMenu === 'news' && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.3, 0, 0.15, 1] }}
            onMouseEnter={() => handleMenuEnter('news')}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 top-full border-b border-silver-dim/8 bg-darkroom-black/98 shadow-2xl shadow-black/30 backdrop-blur-xl light:bg-museum-white/98 light:border-museum-ink-dim/8"
          >
            <div className="max-w-xs mx-auto px-[3vw] py-10">
              <div>
                <p className={sectionLabel}>
                  {lang === 'ja' ? '年代' : 'Year'}
                </p>
                <div className="mt-3 flex flex-col gap-0.5">
                  <button
                    onClick={() => handleNewsFilterClick('year', '')}
                    className={`${optBase} ${!activeNewsYear ? optOn : optOff}`}
                  >
                    {lang === 'ja' ? 'すべて' : 'All'}
                  </button>
                  {newsYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleNewsFilterClick('year', String(year))}
                      className={`${optBase} ${activeNewsYear === String(year) ? optOn : optOff}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.3, 0, 0.15, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 overflow-y-auto bg-darkroom-black/98 light:bg-museum-white/98 pb-16"
            onClick={(e) => { if (e.target === e.currentTarget) { setMenuOpen(false); setMobileExpanded(null); } }}
          >
            <button
              onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
              className="absolute right-[3vw] font-mono text-xs tracking-[0.2em] text-silver-dim transition-colors duration-200 hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink"
              style={{ top: 'calc(24px + env(safe-area-inset-top, 0px))' }}
              aria-label={dict.common.close}
            >
              ✕
            </button>

            {navItems.map((item, i) => {
              const href = `/${lang}${item.href}`;
              const isExpandable = item.key === 'works' || item.key === 'texts' || item.key === 'news';

              if (isExpandable) {
                const expanded = mobileExpanded === item.key;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        href={href}
                        onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                        className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink"
                      >
                        {dict.nav[item.key as keyof typeof dict.nav]}
                      </Link>
                      <button
                        onClick={() => setMobileExpanded(expanded ? null : item.key as 'works' | 'texts' | 'news')}
                        className="flex items-center justify-center w-7 h-7 rounded-full border border-silver-dim/20 light:border-museum-ink-dim/20 text-silver-dim light:text-museum-ink-dim hover:text-silver-white light:hover:text-museum-ink hover:border-silver-dim/40 light:hover:border-museum-ink-dim/40 transition-colors duration-200"
                        aria-label={expanded ? 'Close filters' : 'Open filters'}
                      >
                        <span className="font-mono text-sm leading-none">
                          {expanded ? '−' : '+'}
                        </span>
                      </button>
                    </div>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.3, 0, 0.15, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-dashed border-silver-dim/25 light:border-museum-ink-dim/20 flex flex-col items-center gap-1">

                            {/* ── Works filters ── */}
                            {item.key === 'works' && (
                              <>
                                <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mt-1 mb-0.5">
                                  {lang === 'ja' ? '概念' : 'Concept'}
                                </p>
                                {clusters.map((c) => (
                                  <button
                                    key={c}
                                    onClick={() => { handleWorksFilterClick('cluster', c); setMenuOpen(false); setMobileExpanded(null); }}
                                    className={`${optBase} ${activeCluster === c ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                  >
                                    {dict.works.clusters[c]}
                                  </button>
                                ))}
                                <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mt-4 mb-0.5">
                                  {lang === 'ja' ? '媒介' : 'Medium'}
                                </p>
                                {mediums.map((m) => (
                                  <button
                                    key={m}
                                    onClick={() => { handleWorksFilterClick('medium', m); setMenuOpen(false); setMobileExpanded(null); }}
                                    className={`${optBase} ${activeMedium === m ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                  >
                                    {dict.works.mediums[m]}
                                  </button>
                                ))}
                                <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mt-4 mb-0.5">
                                  {lang === 'ja' ? '年代' : 'Year'}
                                </p>
                                <button
                                  onClick={() => { handleWorksFilterClick('year', ''); setMenuOpen(false); setMobileExpanded(null); }}
                                  className={`${optBase} ${!activeYear ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                >
                                  {lang === 'ja' ? 'すべて' : 'All'}
                                </button>
                                {allYears.map((year) => (
                                  <button
                                    key={year}
                                    onClick={() => { handleWorksFilterClick('year', String(year)); setMenuOpen(false); setMobileExpanded(null); }}
                                    className={`${optBase} ${activeYear === String(year) ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                  >
                                    {year}
                                  </button>
                                ))}
                              </>
                            )}

                            {/* ── Texts filters ── */}
                            {item.key === 'texts' && (
                              <>
                                <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mt-1 mb-0.5">
                                  {dict.texts.filterByCategory}
                                </p>
                                <button
                                  onClick={() => { handleTextsFilterClick('category', ''); setMenuOpen(false); setMobileExpanded(null); }}
                                  className={`${optBase} ${!activeTextsCategory ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                >
                                  {lang === 'ja' ? 'すべて' : 'All'}
                                </button>
                                {(['essay', 'publication'] as const).map((c) => (
                                  <button
                                    key={c}
                                    onClick={() => { handleTextsFilterClick('category', c); setMenuOpen(false); setMobileExpanded(null); }}
                                    className={`${optBase} ${activeTextsCategory === c ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                  >
                                    {dict.texts.categories[c]}
                                  </button>
                                ))}
                                <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mt-4 mb-0.5">
                                  {dict.texts.filterByYear}
                                </p>
                                <button
                                  onClick={() => { handleTextsFilterClick('year', ''); setMenuOpen(false); setMobileExpanded(null); }}
                                  className={`${optBase} ${!activeTextsYear ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                >
                                  {lang === 'ja' ? 'すべて' : 'All'}
                                </button>
                                {textsYears.map((year) => (
                                  <button
                                    key={year}
                                    onClick={() => { handleTextsFilterClick('year', year); setMenuOpen(false); setMobileExpanded(null); }}
                                    className={`${optBase} ${activeTextsYear === year ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                  >
                                    {year}
                                  </button>
                                ))}
                              </>
                            )}

                            {/* ── News filters ── */}
                            {item.key === 'news' && (
                              <>
                                <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mt-1 mb-0.5">
                                  {lang === 'ja' ? '年代' : 'Year'}
                                </p>
                                <button
                                  onClick={() => { handleNewsFilterClick('year', ''); setMenuOpen(false); setMobileExpanded(null); }}
                                  className={`${optBase} ${!activeNewsYear ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                >
                                  {lang === 'ja' ? 'すべて' : 'All'}
                                </button>
                                {newsYears.map((year) => (
                                  <button
                                    key={year}
                                    onClick={() => { handleNewsFilterClick('year', String(year)); setMenuOpen(false); setMobileExpanded(null); }}
                                    className={`${optBase} ${activeNewsYear === String(year) ? optOn : optOff} py-2 text-xs min-w-[180px] text-center`}
                                  >
                                    {year}
                                  </button>
                                ))}
                              </>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }

              // Plain link for about, items, contact
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
                >
                  <Link
                    href={href}
                    onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                    className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink"
                  >
                    {dict.nav[item.key as keyof typeof dict.nav]}
                  </Link>
                </motion.div>
              );
            })}

            <div className="mt-10 flex flex-col items-center gap-4">
              <ThemeToggle size="mobile" />
              <Link
                href={otherPath}
                onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                className="font-mono text-xs tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300"
              >
                {otherLang.toUpperCase()}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

