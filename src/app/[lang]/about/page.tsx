import { AboutClient } from '@/components/about/AboutClient';
import { getDictionary, type Locale } from '@/i18n/dictionaries';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return <AboutClient lang={lang as 'ja' | 'en'} dict={dict} />;
}
