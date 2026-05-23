'use client';

import { useI18n } from '@/i18n/client';

export function Footer() {
  const { lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="px-[3vw] py-10">
      <div className="flex flex-col items-center gap-4 border-t border-silver-dim/30 pt-10 light:border-museum-shadow">
        <div className="flex gap-6 text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim">
          <a
            href="https://www.facebook.com/takiscope/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-silver-mid light:hover:text-museum-ink-mid"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/takiscope"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-silver-mid light:hover:text-museum-ink-mid"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/takiscope/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-silver-mid light:hover:text-museum-ink-mid"
          >
            Instagram
          </a>
        </div>
        <p className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim">
          &copy; {year} takiscope.jp
        </p>
      </div>
    </footer>
  );
}
