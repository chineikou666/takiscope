'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [show, setShow] = useState(false);

  const onScroll = useCallback(() => {
    setShow(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.3, 0, 0.15, 1] }}
          className="group fixed bottom-8 right-6 z-[9995] flex h-10 w-10 items-center justify-center border border-silver-dim/25 light:border-museum-ink-dim/20 bg-darkroom-black/80 light:bg-museum-white/80 backdrop-blur-sm hover:border-silver-dim/45 light:hover:border-museum-ink-dim/35 transition-all duration-300"
          data-interactive
        >
          {/* Focus-ring style arrow */}
          <span className="relative flex items-center justify-center">
            {/* Ring */}
            <span className="absolute h-5 w-5 rounded-full border border-silver-dim/40 light:border-museum-ink-dim/30 group-hover:border-silver-dim/60 light:group-hover:border-museum-ink-dim/50 transition-colors duration-300" />
            {/* Arrow */}
            <span className="relative font-mono text-xs text-silver-dim group-hover:text-silver-white light:text-museum-ink-dim light:group-hover:text-museum-ink transition-colors duration-300">
              ↑
            </span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
