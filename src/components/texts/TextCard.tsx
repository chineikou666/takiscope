'use client';

import Image from 'next/image';
import type { MockText } from '@/data/mock-texts';

interface TextCardProps {
  text: MockText;
  lang: 'ja' | 'en';
  readLabel: string;
}

function getThumbnail(text: MockText): string | null {
  if (text.image) return text.image;
  if (!text.href) return null;
  const yt = text.href.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
  const ytw = text.href.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (ytw) return `https://img.youtube.com/vi/${ytw[1]}/hqdefault.jpg`;
  const vimeo = text.href.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://vumbnail.com/${vimeo[1]}.jpg`;
  return null;
}

export function TextCard({ text, lang }: TextCardProps) {
  const title = lang === 'ja' ? text.titleJa : text.titleEn;
  const excerpt = lang === 'ja' ? text.excerptJa : text.excerptEn;
  const isEssay = text.category === 'essay';
  const thumbnail = getThumbnail(text);

  const inner = (
    <div className="group flex items-start gap-3 md:gap-5 py-4 -ml-1 pl-5 rounded-sm transition-colors duration-300 hover:bg-silver-dim/[0.02] light:hover:bg-museum-ink-dim/[0.02]">
      {/* Lead image — smaller on mobile */}
      <div className={`relative w-[100px] h-[60px] md:w-40 md:h-24 shrink-0 overflow-hidden ${thumbnail ? 'border border-silver-dim/12 light:border-museum-ink-dim/8' : ''}`}>
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100px, 160px"
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Mobile date — shown above title */}
        <span className="md:hidden font-mono text-[10px] tracking-[0.1em] text-silver-dim/50 light:text-museum-ink-dim/50">
          {text.date
            ? isEssay
              ? (lang === 'ja'
                  ? (() => { const d = new Date(text.date!); return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`; })()
                  : new Date(text.date!).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))
              : `${new Date(text.date).getFullYear()}`
            : (lang === 'ja' ? '出版物' : 'Publication')}
        </span>

        <h3 className="font-sans text-sm tracking-[0.03em] leading-snug text-silver-white light:text-museum-ink group-hover:text-silver-mid light:group-hover:text-museum-ink-mid transition-colors duration-300">
          {title}
        </h3>

        {isEssay && excerpt && (
          <p className="mt-1 font-sans text-xs leading-relaxed text-silver-dim/70 light:text-museum-ink-dim/70 line-clamp-2">
            {excerpt}
          </p>
        )}

        {!isEssay && text.detail && (
          <p className="mt-0.5 font-mono text-[11px] tracking-[0.08em] text-silver-dim/50 light:text-museum-ink-dim/50">
            {text.detail}
          </p>
        )}
      </div>

      {/* Desktop date — hidden on mobile */}
      <span className="hidden md:inline shrink-0 font-mono text-xs tracking-[0.1em] text-silver-dim/60 light:text-museum-ink-dim/60 mt-[1px] w-20 text-right">
        {text.date
          ? isEssay
            ? (lang === 'ja'
                ? (() => { const d = new Date(text.date!); return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`; })()
                : new Date(text.date!).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))
            : `${new Date(text.date).getFullYear()}`
          : (lang === 'ja' ? '出版物' : 'Publication')}
      </span>

      {/* External link arrow */}
      {text.href && (
        <span className="shrink-0 font-mono text-[10px] text-silver-dim/30 light:text-museum-ink-dim/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 mt-[2px]">
          →
        </span>
      )}
    </div>
  );

  if (text.href) {
    return (
      <a href={text.href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return <div className="block">{inner}</div>;
}
