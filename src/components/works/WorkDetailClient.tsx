'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { MockWork } from '@/data/mock-works';
import type { Dictionary } from '@/i18n/dictionaries';
import { ArchiveCard } from '@/components/works/ArchiveCard';

interface WorkDetailClientProps {
  work: MockWork;
  relatedWorks: MockWork[];
  lang: 'ja' | 'en';
  dict: Dictionary;
}

export function WorkDetailClient({
  work,
  relatedWorks,
  lang,
  dict,
}: WorkDetailClientProps) {
  const isJa = lang === 'ja';
  const title = isJa ? work.titleJa : work.titleEn;
  const subtitle = isJa
    ? (work.titleEn !== work.titleJa ? work.titleEn : undefined)
    : (work.titleJa !== work.titleEn ? work.titleJa : undefined);
  const description = isJa ? work.descriptionJa : work.descriptionEn;
  const isVideo = work.medium === 'Video';
  const hasVideo = Boolean(work.videoUrl);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = work.images?.length
    ? work.images
    : work.imageUrl
      ? [work.imageUrl]
      : [];

  const heroImage = work.imageUrl;

  return (
    <article className="min-h-screen pt-24">
      {/* Hero media area */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px) brightness(0.4)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px) brightness(1)',
          transition: { duration: 1.5, ease: [0.3, 0, 0.15, 1] },
        }}
        className="relative mx-auto max-w-5xl px-[3vw]"
      >
        <div className="relative aspect-[16/9] overflow-hidden border border-silver-dim/20 light:border-museum-ink-dim/15">
          {/* Video embed or image */}
          {isVideo && hasVideo ? (
            <iframe
              src={work.videoUrl!.replace('youtube.com/embed/', 'youtube-nocookie.com/embed/')}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : isVideo && !hasVideo ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-develop-gray/60 light:bg-museum-shadow/40">
              <p className="font-mono text-xs tracking-[0.15em] text-silver-dim/60 light:text-museum-ink-dim/60">
                {isJa ? '映像作品（オンライン視聴不可）' : 'Video work (not available online)'}
              </p>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent('Kentaro Taki ' + (isJa ? work.titleJa : work.titleEn))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300 border border-silver-dim/25 light:border-museum-ink-dim/20 px-3 py-1.5 hover:border-silver-dim/40 light:hover:border-museum-ink-dim/35"
              >
                <span>{isJa ? 'YouTubeで検索' : 'Search on YouTube'}</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          ) : heroImage ? (
            <button
              type="button"
              onClick={() => {
                if (allImages.length > 1) {
                  setLightboxIndex(0);
                  setLightboxOpen(true);
                }
              }}
              className={`absolute inset-0 w-full h-full ${allImages.length > 1 ? 'cursor-zoom-in' : 'cursor-default'}`}
            >
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
              />
            </button>
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: work.color }}
            />
          )}

          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
            }}
          />

          {/* Corner brackets */}
          <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-silver-white/20" />
          <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-silver-white/20" />
          <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-silver-white/20" />
          <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-silver-white/20" />

          {/* Multi-image indicator */}
          {allImages.length > 1 && (
            <span className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.1em] px-2 py-1 bg-darkroom-black/60 text-silver-dim/70 backdrop-blur-sm">
              {allImages.length} {isJa ? '枚' : 'images'}
            </span>
          )}
        </div>

        {/* Thumbnail strip for multi-image */}
        {allImages.length > 1 && (
          <div className="flex gap-2 mt-3">
            {allImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
                className="relative w-16 h-10 shrink-0 overflow-hidden border border-silver-dim/15 light:border-museum-ink-dim/10 hover:border-silver-dim/30 light:hover:border-museum-ink-dim/20 transition-colors"
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Back button */}
      <div className="mx-auto mt-10 max-w-5xl px-[3vw]">
        <Link
          href={`/${lang}/works`}
          className="group inline-flex items-center gap-2 px-4 py-2.5 border border-silver-dim/25 light:border-museum-ink-dim/20 font-mono text-sm tracking-[0.15em] text-silver-dim light:text-museum-ink-dim hover:text-silver-white light:hover:text-museum-ink hover:border-silver-dim/40 light:hover:border-museum-ink-dim/35 hover:bg-silver-dim/[0.04] light:hover:bg-museum-ink-dim/[0.04] transition-all duration-300"
        >
          <span className="text-silver-dim/40 group-hover:text-silver-dim light:text-museum-ink-dim/40 light:group-hover:text-museum-ink-dim transition-colors duration-300">←</span>
          {dict.common.back}
        </Link>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.6, ease: [0.3, 0, 0.15, 1] },
        }}
        className="mx-auto mt-10 max-w-5xl px-[3vw]"
      >
        <h1 className="font-sans text-3xl tracking-[0.15em] text-silver-white light:text-museum-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 font-sans text-sm tracking-[0.15em] text-silver-mid light:text-museum-ink-mid">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Content: specs + description */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 px-[3vw] md:grid-cols-[1fr_2fr] md:gap-16">
        {/* Left: Specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.9, ease: [0.3, 0, 0.15, 1] },
          }}
        >
          <dl className="space-y-5">
            <SpecRow label={dict.work.year} value={String(work.year)} />
            <SpecRow label={dict.work.medium} value={work.medium} />
            <SpecRow
              label={isJa ? 'コンセプト' : 'Concept'}
              value={work.cluster}
            />
            {work.duration && (
              <SpecRow label={dict.work.duration} value={work.duration} />
            )}
            {work.dimensions && (
              <SpecRow label={dict.work.dimensions} value={work.dimensions} />
            )}
          </dl>

          {/* External video link */}
          {isVideo && work.videoUrl && (
            <a
              href={work.videoUrl
                .replace('/embed/', '/watch?v=')
                .replace('youtube-nocookie.com/', 'youtube.com/')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-mono text-xs tracking-[0.1em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors duration-300"
            >
              <span>{isJa ? 'YouTubeで観る' : 'Watch on YouTube'}</span>
              <span className="text-[10px]">↗</span>
            </a>
          )}
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.1, ease: [0.3, 0, 0.15, 1] },
          }}
        >
          <div className="font-sans text-base leading-[2.2] tracking-[0.06em] text-silver-mid light:text-museum-ink-mid">
            <p>{description}</p>
          </div>
        </motion.div>
      </div>

      {/* Related works */}
      <section className="mx-auto mt-20 max-w-5xl px-[3vw] pb-24">
        <hr className="mb-16 border-silver-dim/20 light:border-museum-ink-dim/15" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.3, 0, 0.15, 1] },
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-lg tracking-[0.2em] text-silver-white light:text-museum-ink">
            {dict.work.relatedWorks}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {relatedWorks.map((rw) => (
              <ArchiveCard
                key={rw.id}
                work={rw}
                lang={lang}
                href={`/${lang}/works/${rw.id}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[9997] flex items-center justify-center bg-darkroom-black/95 light:bg-museum-white/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.3, 0, 0.15, 1] }}
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-10 font-mono text-sm text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors"
            >
              {isJa ? '閉じる' : 'Close'}
            </button>

            {/* Counter */}
            <span className="absolute top-6 left-6 z-10 font-mono text-xs text-silver-dim light:text-museum-ink-dim">
              {lightboxIndex + 1} / {allImages.length}
            </span>

            {/* Previous */}
            {lightboxIndex > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => i - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 font-mono text-2xl text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors"
              >
                ←
              </button>
            )}

            {/* Next */}
            {lightboxIndex < allImages.length - 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => i + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 font-mono text-2xl text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors"
              >
                →
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative w-[90vw] h-[85vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.3, 0, 0.15, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[lightboxIndex]}
                alt={`${title} - ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <dt className="w-20 shrink-0 font-mono text-xs tracking-[0.2em] uppercase text-silver-dim light:text-museum-ink-dim">
        {label}
      </dt>
      <dd className="font-sans text-sm text-silver-white light:text-museum-ink">
        {value}
      </dd>
    </div>
  );
}
