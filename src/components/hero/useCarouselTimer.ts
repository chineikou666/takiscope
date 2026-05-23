'use client';

import { useState, useRef, useCallback } from 'react';
import {
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

interface UseCarouselTimerOptions {
  slideCount: number;
  slideDurationMs: number;
  isPaused: boolean;
}

export function useCarouselTimer({
  slideCount,
  slideDurationMs,
  isPaused,
}: UseCarouselTimerOptions) {
  const prefersReduced = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const elapsedMs = useMotionValue(0);
  const directionRef = useRef(1);
  const isPausedRef = useRef(isPaused);
  const currentSlideRef = useRef(currentSlide);

  isPausedRef.current = isPaused;
  currentSlideRef.current = currentSlide;

  const progress = useTransform(elapsedMs, [0, slideDurationMs], [0, 1]);

  useAnimationFrame((_, delta) => {
    if (prefersReduced || isPausedRef.current) return;
    const current = elapsedMs.get();
    const next = current + delta;
    if (next >= slideDurationMs) {
      elapsedMs.set(0);
      directionRef.current = 1;
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    } else {
      elapsedMs.set(next);
    }
  });

  const goToSlide = useCallback(
    (index: number) => {
      directionRef.current = index > currentSlideRef.current ? 1 : -1;
      setCurrentSlide(index);
      elapsedMs.set(0);
    },
    [elapsedMs],
  );

  const goNext = useCallback(() => {
    goToSlide((currentSlideRef.current + 1) % slideCount);
  }, [slideCount, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentSlideRef.current - 1 + slideCount) % slideCount);
  }, [slideCount, goToSlide]);

  return {
    currentSlide,
    progress,
    goToSlide,
    goNext,
    goPrev,
    direction: directionRef,
  };
}
