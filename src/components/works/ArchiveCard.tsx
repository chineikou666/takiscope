'use client';

import Link from 'next/link';
import type { MockWork } from '@/data/mock-works';

interface ArchiveCardProps {
  work: MockWork;
  lang: 'ja' | 'en';
  href: string;
}

export function ArchiveCard({ work, lang, href }: ArchiveCardProps) {
  const title = lang === 'ja' ? work.titleJa : work.titleEn;
  const description = lang === 'ja' ? work.descriptionJa : work.descriptionEn;

  return (
    <Link href={href} data-interactive className="group block">
      <div className="perspective-1200">
        <div
          className="
            relative preserve-3d aspect-[3/2]
            transition-transform duration-700
            group-hover:rotate-y-180
            motion-reduce:group-hover:rotate-y-0
          "
        >
          {/* ── Front ── */}
          <div
            className="absolute inset-0 backface-hidden overflow-hidden"
            style={{ background: work.color }}
          >
            {/* Actual image */}
            {work.imageUrl && (
              <img
                src={work.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
            {/* Grain */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
              }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.40) 100%)',
              }}
            />

            {/* Video badge — top-right corner */}
            {work.medium === 'Video' && (
              <span className="absolute top-3 right-3 z-10 font-mono text-[10px] tracking-[0.15em] px-2 py-0.5 border border-silver-dim/25 light:border-museum-ink-dim/20 bg-darkroom-black/60 light:bg-museum-white/60 text-silver-dim light:text-museum-ink-dim backdrop-blur-sm">
                ▶ VIDEO
              </span>
            )}

            {/* Corner brackets — appear on group hover */}
            <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:group-hover:opacity-0">
              <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-silver-white/25" />
              <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-silver-white/25" />
              <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-silver-white/25" />
              <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-silver-white/25" />
            </div>

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs tracking-[0.2em] text-silver-white/60">
                  {work.year}
                </span>
                <span className="h-px w-3 bg-silver-white/20" />
                <span className="font-mono text-xs tracking-[0.15em] text-silver-white/50">
                  {work.medium}
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl tracking-[0.08em] text-silver-white">
                {title}
              </h3>
              {lang === 'ja' && work.titleEn !== work.titleJa && (
                <p className="mt-0.5 font-sans text-xs tracking-[0.12em] text-silver-white/50">
                  {work.titleEn}
                </p>
              )}
            </div>
          </div>

          {/* ── Back ── */}
          <div
            className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden motion-reduce:rotate-y-0 motion-reduce:opacity-0 motion-reduce:group-hover:opacity-100 motion-reduce:transition-opacity motion-reduce:duration-500"
            style={{ background: work.color }}
          >
            {/* Darken overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center items-center px-8 text-center">
              <p className="font-sans text-sm leading-relaxed text-silver-white/85 max-w-lg">
                {description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-5 font-mono text-xs tracking-[0.2em] text-silver-white/50">
                {lang === 'ja' ? '詳細' : 'Detail'}
                <span className="text-[10px]">→</span>
              </span>
            </div>

            {/* Corner brackets on back too */}
            <div className="absolute inset-0 z-10">
              <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-silver-white/15" />
              <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-silver-white/15" />
              <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-silver-white/15" />
              <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-silver-white/15" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
