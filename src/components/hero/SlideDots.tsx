'use client';

import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useAnimationFrame, type MotionValue } from 'framer-motion';

interface SlideDotsProps {
  slideCount: number;
  currentSlide: number;
  progress: MotionValue<number>;
  onSelectSlide: (index: number) => void;
  onPause: () => void;
  onResume: () => void;
  goNext: () => void;
  goPrev: () => void;
}

const SCROLL_COOLDOWN_MS = 300;

export function SlideDots({
  slideCount,
  currentSlide,
  progress,
  onSelectSlide,
  onPause,
  onResume,
  goNext,
  goPrev,
}: SlideDotsProps) {
  const lastScrollTime = useRef(0);
  const currentSlideRef = useRef(currentSlide);
  currentSlideRef.current = currentSlide;

  const overallProgress = useMotionValue(0);

  useAnimationFrame(() => {
    overallProgress.set(
      (currentSlideRef.current + progress.get()) / slideCount,
    );
  });

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
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

  return (
    <div className="absolute right-[3vw] top-1/2 z-20 -translate-y-1/2">
      <div
        className="relative flex flex-col items-center gap-4 overflow-hidden rounded-full border border-silver-dim/20 bg-darkroom-black/40 px-2.5 py-5 shadow-[0_0_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_32px_rgba(0,0,0,0.55)]"
        onWheel={handleWheel}
        onMouseEnter={onPause}
        onMouseLeave={onResume}
      >
        {/* Thermometer fill — grows from top, fills entire width */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            scaleY: overallProgress,
            transformOrigin: 'top center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-silver-white/[0.06] via-silver-white/[0.10] to-silver-white/[0.16]" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-silver-white/35 shadow-[0_0_4px_rgba(228,226,222,0.12)]" />
        </motion.div>

        {Array.from({ length: slideCount }).map((_, i) => {
          const isActive = i === currentSlide;
          const isPast = i < currentSlide;
          return (
            <button
              key={i}
              onClick={() => onSelectSlide(i)}
              onFocus={onPause}
              onBlur={onResume}
              aria-label={`Slide ${i + 1}`}
              className="relative z-10 block rounded-full transition-all duration-500 ease-[cubic-bezier(0.3,0,0.15,1)]"
              style={{
                width: isActive ? '8px' : '6px',
                height: isActive ? '8px' : '6px',
                background: isActive
                  ? '#e4e2de'
                  : isPast
                    ? 'rgba(160, 157, 152, 0.65)'
                    : 'rgba(112, 110, 106, 0.4)',
                boxShadow: isActive
                  ? '0 0 8px rgba(228, 226, 222, 0.5)'
                  : isPast
                    ? '0 0 3px rgba(160, 157, 152, 0.18)'
                    : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
