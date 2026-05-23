import { Suspense } from 'react';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { NewsContent } from './NewsContent';

export default async function NewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 pb-16">
          <div className="mx-auto max-w-4xl px-[3vw]">
            <div className="flex items-center justify-between mb-12">
              <h1 className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink">
                {dict.nav.news}
              </h1>
            </div>
            <div className="space-y-10">
              {[2025, 2024].map((year) => (
                <div key={year}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-sans text-3xl font-light text-silver-white/80 light:text-museum-ink/80">{year}</span>
                    <span className="flex-1 h-px bg-silver-dim/12" />
                  </div>
                  <div className="space-y-1 pl-10">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-10 bg-silver-dim/5 light:bg-museum-ink-dim/5 animate-pulse rounded-sm" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <NewsContent lang={lang as 'ja' | 'en'} dict={dict} />
    </Suspense>
  );
}
