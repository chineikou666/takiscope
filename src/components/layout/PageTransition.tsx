'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.9,
          ease: [0.3, 0, 0.15, 1],
          filter: { duration: 0.7 },
        },
      }}
      exit={{
        opacity: 0,
        filter: 'blur(3px) brightness(0.6)',
        transition: {
          duration: 0.5,
          ease: [0.3, 0, 0.15, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
