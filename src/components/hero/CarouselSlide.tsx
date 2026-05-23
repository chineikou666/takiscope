'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Category } from '@/data/categories';
import type { Locale } from '@/i18n/dictionaries';

interface CarouselSlideProps {
  category: Category;
  lang: Locale;
}

const textItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function CarouselSlide({ category, lang }: CarouselSlideProps) {
  const name = lang === 'ja' ? category.nameJa : category.nameEn;
  const description =
    lang === 'ja' ? category.descriptionJa : category.descriptionEn;

  return (
    <Link
      href={`/${lang}/works?medium=${category.medium}`}
      data-interactive
      className="group absolute inset-0 block h-screen w-full overflow-hidden"
    >
      <img
        src={category.imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-1000 ease-out group-hover:brightness-110 animate-kenburns"
        style={{ '--kb-duration': '7s' } as React.CSSProperties}
      />
      <div className="absolute inset-0 bg-darkroom-black/35 transition-opacity duration-1000 group-hover:opacity-70" />

      {/* Text — right-aligned */}
      <motion.div
        className="absolute bottom-[8vh] right-[3vw] z-20 max-w-xl text-right"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
      >
        <motion.p
          variants={textItem}
          transition={{ duration: 0.8, ease: [0.3, 0, 0.15, 1] }}
          className="font-sans text-4xl tracking-[0.08em] text-silver-white transition-[letter-spacing] duration-700 ease-out sm:text-6xl group-hover:tracking-[0.14em]"
        >
          {name}
        </motion.p>
        <motion.p
          variants={textItem}
          transition={{ duration: 0.8, ease: [0.3, 0, 0.15, 1] }}
          className="mt-4 font-mono text-xs tracking-[0.2em] text-silver-dim"
        >
          {description}
        </motion.p>
      </motion.div>
    </Link>
  );
}
