'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/client';
import { categories } from '@/data/categories';
import { useCarouselTimer } from './useCarouselTimer';
import { FeaturedCarousel } from './FeaturedCarousel';
import { SlideDots } from './SlideDots';

const CATEGORY_COUNT = 4;
const SLIDE_DURATION_MS = 6000;
const SCROLL_COOLDOWN_MS = 300;
const SWIPE_THRESHOLD_PX = 50;

function useEntrance() {
  const [phase, setPhase] = useState<'intro' | 'reveal' | 'playing'>(() =>
    typeof window !== 'undefined' &&
    sessionStorage.getItem('hero-entrance-shown')
      ? 'playing'
      : 'intro',
  );

  useEffect(() => {
    if (phase === 'playing') return;
    const t1 = setTimeout(() => setPhase('reveal'), 600);
    const t2 = setTimeout(() => {
      setPhase('playing');
      sessionStorage.setItem('hero-entrance-shown', '1');
    }, 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase]);

  return phase;
}

export function Hero() {
  const { lang } = useI18n();
  const [isPaused, setIsPaused] = useState(false);
  const entrancePhase = useEntrance();
  const showCarousel = entrancePhase === 'playing';

  const { currentSlide, progress, goToSlide, goNext, goPrev, direction } =
    useCarouselTimer({
      slideCount: CATEGORY_COUNT,
      slideDurationMs: SLIDE_DURATION_MS,
      isPaused: isPaused || !showCarousel,
    });

  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const now = performance.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN_MS) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        goNext();
      } else {
        goPrev();
      }
    },
    [goNext, goPrev],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < SWIPE_THRESHOLD_PX) return;
      const now = performance.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN_MS) return;
      lastScrollTime.current = now;
      if (deltaY > 0) {
        goNext();
      } else {
        goPrev();
      }
    },
    [goNext, goPrev],
  );

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: true });
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  return (
    <section
      ref={sectionRef}
      data-hero
      className="relative h-screen w-full overflow-hidden bg-darkroom-black"
    >
      <FeaturedCarousel
        categories={categories}
        lang={lang}
        currentSlide={currentSlide}
        direction={direction}
      />

      {/* Copyright — bottom-left */}
      <p className="pointer-events-none absolute bottom-[3vw] left-[3vw] z-20 font-mono text-xs tracking-[0.2em] text-silver-dim">
        &copy; {new Date().getFullYear()} takiscope.jp
      </p>

      {/* Right side: slide dots + vertical progress bar */}
      <SlideDots
        slideCount={CATEGORY_COUNT}
        currentSlide={currentSlide}
        progress={progress}
        onSelectSlide={goToSlide}
        onPause={() => setIsPaused(true)}
        onResume={() => setIsPaused(false)}
        goNext={goNext}
        goPrev={goPrev}
      />

      {/* Entrance animation */}
      <AnimatePresence>
        {entrancePhase !== 'playing' && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-darkroom-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.3, 0, 0.15, 1] }}
          >
            <motion.span
              className="font-sans text-lg font-medium tracking-[0.3em] text-silver-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                entrancePhase === 'reveal'
                  ? { opacity: 0, scale: 1.05 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.8, ease: [0.3, 0, 0.15, 1] }}
            >
              takiscope
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
