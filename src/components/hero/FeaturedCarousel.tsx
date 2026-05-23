'use client';

import { AnimatePresence, motion, useReducedMotion, type Transition } from 'framer-motion';
import { CarouselSlide } from './CarouselSlide';
import type { Category } from '@/data/categories';
import type { Locale } from '@/i18n/dictionaries';

interface FeaturedCarouselProps {
  categories: Category[];
  lang: Locale;
  currentSlide: number;
  direction: { current: number };
}

const crossfadeVariants = {
  enter: {
    opacity: 0,
    scale: 1.03,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
  },
};

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function FeaturedCarousel({
  categories,
  lang,
  currentSlide,
  direction: _direction,
}: FeaturedCarouselProps) {
  const prefersReduced = useReducedMotion();

  const variants = prefersReduced ? reducedVariants : crossfadeVariants;
  const t: Transition = prefersReduced
    ? { duration: 0.4, ease: 'easeOut' }
    : { duration: 1.0, ease: [0.3, 0, 0.15, 1] };

  return (
    <div className="absolute inset-0 h-screen w-full overflow-hidden bg-darkroom-black">
      <div className="relative h-full w-full">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={t}
            className="absolute inset-0"
          >
            <CarouselSlide
              category={categories[currentSlide]}
              lang={lang}
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
