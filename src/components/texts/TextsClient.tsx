'use client';

import { useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/i18n/dictionaries';
import { mockTexts } from '@/data/mock-texts';
import { TextCard } from './TextCard';

interface TextsClientProps {
  lang: 'ja' | 'en';
  dict: Dictionary;
  selectedCategory: string | null;
  selectedYear: number | null;
}

type TabKey = 'all' | 'essay' | 'publication';

export function TextsClient({ lang, dict, selectedCategory, selectedYear }: TextsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filteredTexts = useMemo(() => {
    let result = [...mockTexts];
    if (selectedCategory) result = result.filter((t) => t.category === selectedCategory);
    if (selectedYear) result = result.filter((t) => t.date?.startsWith(`${selectedYear}-`));
    result.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    });
    return result;
  }, [selectedCategory, selectedYear]);

  const activeTab: TabKey = selectedCategory === 'essay' ? 'essay' : selectedCategory === 'publication' ? 'publication' : 'all';

  const handleTab = (key: TabKey) => {
    const params = new URLSearchParams(searchParams.toString());
    if (key === 'all') {
      params.delete('category');
    } else {
      params.set('category', key);
    }
    params.delete('year');
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'all', label: lang === 'ja' ? 'すべて' : 'All' },
    { key: 'essay', label: lang === 'ja' ? 'エッセイ' : 'Essays' },
    { key: 'publication', label: lang === 'ja' ? '出版物' : 'Publications' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-[3vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink">
            {dict.nav.texts}
          </h1>
          <span className="font-mono text-xs text-silver-dim light:text-museum-ink-dim">
            {filteredTexts.length} {dict.texts.count}
          </span>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.3, 0, 0.15, 1] }}
          className="flex gap-1 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTab(tab.key)}
              className={`px-4 py-2 font-mono text-xs tracking-[0.15em] transition-all duration-300 ${
                activeTab === tab.key
                  ? 'text-silver-white light:text-museum-ink border-b border-silver-dim/30 light:border-museum-ink-dim/25'
                  : 'text-silver-dim/50 light:text-museum-ink-dim/50 hover:text-silver-dim light:hover:text-museum-ink-dim border-b border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* List */}
        {filteredTexts.length > 0 ? (
          <div className="divide-y divide-silver-dim/10 light:divide-museum-ink-dim/8">
            {filteredTexts.map((text, i) => (
              <motion.div
                key={text.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.15 + i * 0.05,
                    duration: 0.4,
                    ease: [0.3, 0, 0.15, 1],
                  },
                }}
              >
                <TextCard text={text} lang={lang} readLabel={dict.common.readMore} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-silver-dim light:text-museum-ink-dim text-center py-20">
            {lang === 'ja' ? '該当するテキストがありません。' : 'No texts found.'}
          </p>
        )}
      </div>
    </div>
  );
}
