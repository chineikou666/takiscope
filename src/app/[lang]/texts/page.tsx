import { Suspense } from 'react';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { TextsContent } from './TextsContent';

export default async function TextsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 pb-16">
          <div className="mx-auto max-w-4xl px-[3vw]">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink">
                {dict.nav.texts}
              </h1>
            </div>
            <div className="flex gap-1 mb-10">
              {['All', 'Essays', 'Publications'].map((label) => (
                <span key={label} className="px-4 py-2 font-mono text-xs text-silver-dim/30 light:text-museum-ink-dim/30">{label}</span>
              ))}
            </div>
            <div className="divide-y divide-silver-dim/10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-12 bg-silver-dim/5 light:bg-museum-ink-dim/5 animate-pulse rounded-sm" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <TextsContent lang={lang as 'ja' | 'en'} dict={dict} />
    </Suspense>
  );
}
