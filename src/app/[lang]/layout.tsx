import { Suspense } from 'react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Noto_Sans_JP } from 'next/font/google';
import { Inter } from 'next/font/google';
import { getDictionary, type Locale, locales } from '@/i18n/dictionaries';
import { I18nProvider } from '@/i18n/client';
import { Header } from '@/components/layout/Header';
import { ConditionalFooter } from '@/components/layout/ConditionalFooter';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { CustomCursor } from '@/components/cursor/CustomCursor';
import { BackToTop } from '@/components/ui/BackToTop';
import { PageTransition } from '@/components/layout/PageTransition';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans-jp',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans-latin',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: 'takiscope — Kentaro Taki',
    description:
      lang === 'ja'
        ? '瀧健太郎の作品アーカイブ — 映像、インスタレーション、パフォーマンス'
        : 'Kentaro Taki — Video, Installation, Performance',
    metadataBase: new URL('https://takiscope.jp'),
    alternates: {
      languages: {
        ja: '/ja',
        en: '/en',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <html
      lang={lang}
      className={`${notoSansJP.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' } as React.CSSProperties}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('takiscope-theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');if(t==='light')document.documentElement.classList.add('light')})()`,
          }}
        />
        <ThemeProvider>
          <I18nProvider dict={dict} lang={lang as Locale}>
            <CustomCursor />
            <BackToTop />
            <div className="relative flex min-h-screen flex-col">
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <main className="flex-1">
                <PageTransition>{children}</PageTransition>
              </main>
              <ConditionalFooter />
            </div>
          </I18nProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
