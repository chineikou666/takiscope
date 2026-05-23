import { mockWorks, type MockWork } from '@/data/mock-works';
import { CustomCursor } from '@/components/cursor/CustomCursor';
import { WorkDetailClient } from '@/components/works/WorkDetailClient';
import { getDictionary, type Locale } from '@/i18n/dictionaries';

interface WorkPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  return mockWorks.flatMap((work) => [
    { lang: 'ja', slug: work.id },
    { lang: 'en', slug: work.id },
  ]);
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { lang, slug } = await params;
  const work = mockWorks.find((w) => w.id === slug);
  const dict = getDictionary(lang as Locale);

  if (!work) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <p className="font-sans text-silver-dim">
          {lang === 'ja' ? '作品が見つかりません' : 'Work not found'}
        </p>
      </div>
    );
  }

  const relatedWorks = mockWorks
    .filter((w) => w.cluster === work.cluster && w.id !== work.id)
    .slice(0, 3);
  const otherWorks = mockWorks
    .filter((w) => w.cluster !== work.cluster)
    .slice(0, 2);

  return (
    <>
      <CustomCursor />
      <WorkDetailClient
        work={work}
        relatedWorks={[...relatedWorks, ...otherWorks].slice(0, 4)}
        lang={lang as 'ja' | 'en'}
        dict={dict}
      />
    </>
  );
}
