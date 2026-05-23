'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

type CursorTheme = 'dark' | 'light';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [idle, setIdle] = useState(false);
  const [theme, setTheme] = useState<CursorTheme>('dark');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 32, mass: 0.3 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 32, mass: 0.3 });

  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Theme detection
  useEffect(() => {
    const update = () => {
      setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark');
    };
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const resetIdle = useCallback(() => {
    setIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), 800);
  }, []);

  useEffect(() => {
    document.documentElement.style.cursor = 'none';
    const style = document.createElement('style');
    style.textContent = `
      html, body, a, button, [role="button"], [data-interactive], img, video, iframe { cursor: none !important; }
      input, textarea, select, [contenteditable] { cursor: auto !important; }
    `;
    document.head.appendChild(style);

    return () => {
      document.documentElement.style.cursor = '';
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      resetIdle();
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), 4000);
    };

    const onMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-interactive]')
      ) {
        setHovering(true);
      }
    };

    const onMouseOut = () => setHovering(false);
    const onTouch = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('touchstart', onTouch);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('touchstart', onTouch);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [mouseX, mouseY, resetIdle]);

  // Theme-aware color values
  const isLight = theme === 'light';
  const ink = isLight ? '17,17,16' : '255,255,255'; // pure black : pure white
  const ringAlpha = { base: 0.4, hover: 0.55, idle: 0.7 };
  const bracketAlpha = { base: 0.55, idle: 1 };
  const diamondAlpha = 0.8;
  const dotAlpha = 0.7;
  const glowAlpha = { base: 0.01, peak: 0.04 };

  return (
    <>
      {/* Focus ring cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] flex items-center justify-center"
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: hovering ? 1.3 : idle ? 0.85 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.3, 0, 0.15, 1] }}
      >
        {/* Self-illumination halo (light mode: white glow behind dark cursor) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 44,
            height: 44,
            boxShadow: isLight
              ? `0 0 3px rgba(255,255,255,0.5), 0 0 8px rgba(255,255,255,0.25), 0 0 18px rgba(255,255,255,0.12)`
              : `0 0 0px transparent`,
          }}
          animate={{
            opacity: isLight ? (idle ? 1 : 0.7) : 0,
          }}
          transition={{ duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
        />

        {/* Outer ring */}
        <motion.div
          className="absolute rounded-full border"
          style={{
            width: 36,
            height: 36,
            borderColor: `rgba(${ink},${ringAlpha.base})`,
          }}
          animate={{
            borderColor: idle
              ? `rgba(${ink},${ringAlpha.idle})`
              : hovering
                ? `rgba(${ink},${ringAlpha.hover})`
                : `rgba(${ink},${ringAlpha.base})`,
            boxShadow: idle
              ? `0 0 12px rgba(${ink},0.12)`
              : `0 0 0px rgba(${ink},0)`,
          }}
          transition={{ duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
        />

        {/* Focus brackets — four corners */}
        {[0, 90, 180, 270].map((angle) => (
          <motion.div
            key={angle}
            className="absolute"
            style={{
              width: 10,
              height: 10,
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              scale: idle ? 0.5 : 1,
              opacity: idle ? 1 : 0.55,
            }}
            transition={{ duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
          >
            <span
              className="absolute top-0 left-0 h-[4px] w-[4px] border-t border-l"
              style={{
                borderColor: `rgba(${ink},${idle ? bracketAlpha.idle : bracketAlpha.base})`,
                transform: idle ? 'translate(3px, 3px)' : 'translate(10px, 10px)',
              }}
            />
            <span
              className="absolute top-0 right-0 h-[4px] w-[4px] border-t border-r"
              style={{
                borderColor: `rgba(${ink},${idle ? bracketAlpha.idle : bracketAlpha.base})`,
                transform: idle ? 'translate(-3px, 3px)' : 'translate(-10px, 10px)',
              }}
            />
          </motion.div>
        ))}

        {/* Focus-confirmed diamond (idle state) */}
        <AnimatePresence>
          {idle && (
            <motion.div
              className="absolute flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, ease: [0.3, 0, 0.15, 1] }}
            >
              <motion.div
                className="w-[6px] h-[6px] rotate-45"
                style={{ background: `rgba(${ink},${diamondAlpha})` }}
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center dot when hovering interactive */}
        <motion.div
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{ background: `rgba(${ink},${dotAlpha})` }}
          animate={{
            opacity: hovering ? 1 : 0,
            scale: hovering ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ambient glow when idle */}
      <motion.div
        className="pointer-events-none fixed z-[9998] h-[160px] w-[160px] rounded-full"
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: isLight
            ? `radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.01) 50%, transparent 70%)`
            : `radial-gradient(circle, rgba(${ink},${glowAlpha.peak}) 0%, rgba(${ink},${glowAlpha.base}) 40%, transparent 70%)`,
          opacity: idle ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.3, 0, 0.15, 1] }}
      />
    </>
  );
}
