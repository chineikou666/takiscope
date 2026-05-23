'use client';

import { motion, type MotionValue } from 'framer-motion';

interface ProgressBarProps {
  progress: MotionValue<number>;
  onPause: () => void;
  onResume: () => void;
}

export function ProgressBar({ progress, onPause, onResume }: ProgressBarProps) {
  return (
    <div className="absolute bottom-6 left-[3vw] right-[3vw] z-20">
      <button
        className="relative h-[2px] w-full cursor-default"
        onMouseEnter={onPause}
        onMouseLeave={onResume}
        onFocus={onPause}
        onBlur={onResume}
        aria-label="Pause slideshow"
      >
        <motion.div
          className="absolute left-0 top-0 h-full w-full bg-white/20"
          style={{
            scaleX: progress,
            transformOrigin: 'left center',
          }}
        />
      </button>
    </div>
  );
}
