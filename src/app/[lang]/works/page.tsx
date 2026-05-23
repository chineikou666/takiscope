'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/i18n/client';
import { mockWorks } from '@/data/mock-works';
import { ArchiveCard } from '@/components/works/ArchiveCard';

const clusters = [
  'Seeing & Surveillance',
  'Optical Apparatus',
  'Body & Double',
  'Urban Space & Ruins',
  'Signal & Noise',
  'Archive',
  'Collaboration',
] as const;

const mediums = [
  'Installation',
  'Video',
  'Performance',
  'Exhibition',
  'Collage',
  'Interview',
  'Collaboration',
] as const;

function WorksContent() {
  const { lang } = useI18n();
  const searchParams = useSearchParams();

  const clusterParam = searchParams.get('cluster');
  const mediumParam = searchParams.get('medium');
  const yearParam = searchParams.get('year');

  const selectedCluster =
    clusterParam && (clusters as readonly string[]).includes(clusterParam)
      ? clusterParam
      : null;
  const selectedMedium =
    mediumParam && (mediums as readonly string[]).includes(mediumParam)
      ? mediumParam
      : null;
  const selectedYear = yearParam ? Number(yearParam) : null;

  const filteredWorks = useMemo(() => {
    let result = [...mockWorks];
    if (selectedCluster) result = result.filter((w) => w.cluster === selectedCluster);
    if (selectedMedium) result = result.filter((w) => w.medium === selectedMedium);
    if (selectedYear) result = result.filter((w) => w.year === selectedYear);
    result.sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return (b.month ?? 0) - (a.month ?? 0);
    });
    return result;
  }, [selectedCluster, selectedMedium, selectedYear]);

  return (
    <div className="px-4 pt-24 pb-16">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink">
          Works
        </h1>
        <span className="font-mono text-xs text-silver-dim">
          {filteredWorks.length} {lang === 'ja' ? '件' : 'works'}
        </span>
      </div>

      {/* Cards grid */}
      {filteredWorks.length === 0 ? (
        <p className="py-20 text-center font-sans text-sm text-silver-dim">
          No works found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {filteredWorks.map((work) => (
            <ArchiveCard
              key={work.id}
              work={work}
              lang={lang as 'ja' | 'en'}
              href={`/${lang}/works/${work.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorksPage() {
  return (
    <Suspense
      fallback={
        <div className="px-4 pt-24 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-sans text-2xl tracking-[0.2em] text-silver-white light:text-museum-ink">
              Works
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {mockWorks.map((w) => (
              <div key={w.id} className="aspect-[3/2]" style={{ background: w.color }} />
            ))}
          </div>
        </div>
      }
    >
      <WorksContent />
    </Suspense>
  );
}
