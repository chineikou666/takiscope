'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SESSION_KEY = 'splash-shown';

type Phase = 'logo' | 'travel' | 'expand' | 'done';

const spotlightAnim = {
  logo: { x: '18%', y: '11%', r: 120 },
  travel: { x: '50%', y: '50%', r: 110 },
  expand: { x: '50%', y: '50%', r: 3000 },
};

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)
      ? 'done'
      : 'logo',
  );

  useEffect(() => {
    if (phase === 'done') return;
    const t1 = setTimeout(() => setPhase('travel'), 900);
    const t2 = setTimeout(() => setPhase('expand'), 2400);
    const t3 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem(SESSION_KEY, '1');
      sessionStorage.setItem('hero-entrance-shown', '1');
    }, 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [phase]);

  const cur = spotlightAnim[phase === 'done' ? 'expand' : phase];

  return (
    <>
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            className="fixed inset-0 z-[9998] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.3, 0, 0.15, 1] }}
          >
            {/* Illuminated white layer beneath the black mask */}
            <div className="absolute inset-0 bg-[#f5f3ef]" />

            {/* Logo text — visible when spotlight is at top-left */}
            <div className="absolute top-[11%] left-[18%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.span
                className="font-sans text-lg font-medium tracking-[0.3em] text-museum-ink whitespace-nowrap select-none"
                initial={{ opacity: 0 }}
                animate={
                  phase === 'logo'
                    ? { opacity: 1 }
                    : { opacity: 0 }
                }
                transition={
                  phase === 'logo'
                    ? { duration: 0.5, ease: [0.3, 0, 0.15, 1] }
                    : { duration: 0.4, ease: [0.3, 0, 0.15, 1] }
                }
              >
                Kentaro Taki
              </motion.span>
            </div>

            {/* Center label — appears on expand */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                phase === 'expand'
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
            >
              <span className="font-sans text-base font-light tracking-[0.35em] text-museum-ink whitespace-nowrap select-none">
                takiscope
              </span>
            </motion.div>

            {/* Spotlight "hole" — a transparent circle with enormous black box-shadow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: cur.r * 2,
                height: cur.r * 2,
                background: 'transparent',
                boxShadow: '0 0 0 9999px #080809',
                transform: 'translate(-50%, -50%)',
              }}
              initial={false}
              animate={{
                left: cur.x,
                top: cur.y,
                width: cur.r * 2,
                height: cur.r * 2,
              }}
              transition={{
                duration: phase === 'travel' ? 1.5 : phase === 'expand' ? 0.8 : 0,
                ease: [0.3, 0, 0.15, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
