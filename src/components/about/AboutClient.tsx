'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Dictionary } from '@/i18n/dictionaries';

const bioJa = `瀧健太郎（Kentaro Taki）は1973年大阪生まれ。映像とオブジェを用い、メディア社会や都市空間から採取した記号やコードをコラージュ／カットアップの手法で「誤読／転写」する作品を制作している。機械による視覚／眼球装置を通じて、相互監視や分断された社会におけるアンビバレンスの問題を観客に投げかける。民主化されたメディアツールにおける機械的な〈見ること〉を梃子に、相互監視や分断された社会のアンビバレンスへと注意を向けさせ、観客があらためてその曖昧さについて思考する契機となることを意図している。`;

const bioEn = `Kentaro Taki (b. 1973, Osaka, Japan) works with video and objects, employing collage and cut-up methods to "misinterpret/transcribe" signs and codes sampled from media society and urban space. Through mechanical seeing/eye machines, his work offers audiences trigger points to consider the ambivalence problem of mutual surveillance and divided society. By leveraging mechanical seeing within democratized media tools, he draws attention to the ambivalence of mutual surveillance and divided society, providing viewers an opportunity to reflect on these ambiguities.`;

const pullQuoteJa =
  '機械による視覚／眼球装置を通じて、相互監視や分断された社会におけるアンビバレンスの問題を観客に投げかける。';

const pullQuoteEn =
  'Through mechanical seeing / eye machines, his work offers audiences trigger points to consider the ambivalence problem of mutual surveillance and divided society.';

const awardsJa = [
  '国際交流基金「BIXグラーツコンペ」最優秀賞＋ピーター・クック賞（2005）',
  'ボーフムビデオフェスティバル企画者賞（2005）',
];

const awardsEn = [
  'Grand Prix + Peter Cook Award, BIX Graz Competition, Japan Foundation (2005)',
  "Curator's Award, Bochum Video Festival (2005)",
];

const educationJa = [
  '横浜国立大学大学院都市イノベーション学府博士後期課程修了',
  '武蔵野美術大学大学院映像コース修了',
  '2002-2004: 文化庁派遣芸術家研修員／ポーラ美術振興財団研修員（HFG Karlsruhe ZKM, ドイツ）',
];

const educationEn = [
  'Ph.D., Institute of Urban Innovation, Yokohama National University',
  'M.F.A., Department of Imaging Arts and Sciences, Musashino Art University',
  '2002–2004: Overseas Study Program for Artists, Agency for Cultural Affairs, Japan / POLA Art Foundation — HFG Karlsruhe ZKM, Germany',
];

interface Exhibition {
  year: number;
  titleJa: string;
  titleEn: string;
  venueJa: string;
  venueEn: string;
  href?: string;
  image?: string;
}

const exhibitions: Exhibition[] = [
  {
    year: 2024,
    titleJa: '上大岡で黄金町バザール〜アートの種が風に飛んで花を開く〜',
    titleEn: 'Koganecho Bazaar in Kamiōoka',
    venueJa: '京急百貨店、横浜・上大岡',
    venueEn: 'Keikyu Dept. Store, Kamiooka, Yokohama',
    href: 'https://youtu.be/i6b_JdArz1E?si=KjyipmLxXvvo45-s',
  },
  {
    year: 2024,
    titleJa: '黄金町バザール2024 –世界のすべてがアートでできているわけではない–',
    titleEn: 'Koganecho Bazaar 2024 –The World, Not According to Art–',
    venueJa: '横浜・黄金町',
    venueEn: 'Koganecho, Yokohama',
    href: 'https://youtu.be/31HM3xnz9H8?si=_PFYv9ofTCz_SokS',
    image: '/images/about/2024whirlpool.jpg',
  },
  {
    year: 2023,
    titleJa: '影像人間',
    titleEn: 'Homo-Tentrium',
    venueJa: '横浜・初音町',
    venueEn: 'Koganecho, Yokohama',
    href: 'https://vimeo.com/900723972?share=copy',
  },
  {
    year: 2023,
    titleJa: '静岡アートビジョン',
    titleEn: 'Shizuoka Art Vision',
    venueJa: '静岡・泉ヶ谷',
    venueEn: 'Izumigaya, Shizuoka',
    href: 'https://youtu.be/1T4NPad34Gk?si=gg4g-zLgSh4iUdtk',
  },
  {
    year: 2023,
    titleJa: '七月の壁の影',
    titleEn: 'Behind the wall of July',
    venueJa: '京急線高架下、横浜・初音町',
    venueEn: 'Koganecho, Yokohama',
    href: 'https://youtu.be/bkv5wSmtNbo?si=vXhA83yuNBG8MAU6',
  },
  {
    year: 2022,
    titleJa: '不可思议的行动！incredible/ action',
    titleEn: 'incredible/ action',
    venueJa: 'A4美術館、中国・成都',
    venueEn: 'A4 Art Museum, Chengdu, China',
    href: 'https://mp.weixin.qq.com/s/1aTzLUOv7jPqKZail3csZQ',
    image: '/images/about/2022incredible.jpg',
  },
  {
    year: 2022,
    titleJa: 'ショーケースギャラリー 瀧健太郎展',
    titleEn: 'Show Case Gallery, Kentaro Taki solo show',
    venueJa: '横浜市民ギャラリーあざみ野',
    venueEn: 'Yokohama Civic Art Gallery Azamino',
    href: 'https://youtu.be/fTQAahRUi60?si=nu6Q2GjXAzF_zLlO',
  },
  {
    year: 2022,
    titleJa: '見ることの闘議',
    titleEn: 'Antagonism of Seeing',
    venueJa: 'クリエイティブセンター大阪、MORI YU GALLERYブース（ART OSAKA 2022）',
    venueEn: 'Creative Center Osaka, MORI YU GALLERY Booth (ART OSAKA 2022)',
    href: 'https://takiscope.blogspot.com/2022/11/two-installation-pieces-by-ktaki.html',
    image: '/images/about/2022circuito.jpg',
  },
  {
    year: 2020,
    titleJa: '窃視症マシン',
    titleEn: 'Scopophilia Machines',
    venueJa: 'MORI YU GALLERY、京都（個展）',
    venueEn: 'MORI YU GALLERY, Kyoto (solo show)',
    href: 'https://vimeo.com/455652621',
    image: '/images/about/2020moriyu2.jpg',
  },
  {
    year: 2019,
    titleJa: 'A Land of Happiness 野景',
    titleEn: 'A Land of Happiness',
    venueJa: '台北国際芸術家村トレジャーヒル、台湾',
    venueEn: 'Treasure Hill, Taiwan Artist Village, Taipei, Taiwan',
    href: 'https://vimeo.com/334217623',
  },
];

function getVideoThumbnail(href: string): string | null {
  const yt = href.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
  const vimeo = href.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://vumbnail.com/${vimeo[1]}.jpg`;
  return null;
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.3, 0, 0.15, 1] as const } },
};

export function AboutClient({ lang, dict }: { lang: 'ja' | 'en'; dict: Dictionary }) {
  const isJa = lang === 'ja';
  const bio = isJa ? bioJa : bioEn;
  const pullQuote = isJa ? pullQuoteJa : pullQuoteEn;
  const awards = isJa ? awardsJa : awardsEn;
  const education = isJa ? educationJa : educationEn;

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-4xl px-[3vw]">
        {/* ── Name — typographic title ── */}
        <motion.div {...fadeUp}>
          <div className="flex flex-col gap-1.5">
            <h1 className="font-sans text-4xl md:text-5xl tracking-[0.12em] text-silver-white light:text-museum-ink">
              {isJa ? '瀧 健太郎' : 'Kentaro Taki'}
            </h1>
            <p className="font-sans text-xl md:text-2xl tracking-[0.22em] text-silver-dim light:text-museum-ink-dim">
              {isJa ? 'Kentaro Taki' : '瀧 健太郎'}
            </p>
          </div>
        </motion.div>

        {/* ── Pull Quote ── */}
        <motion.blockquote
          {...fadeUp}
          className="mt-12 md:mt-16 border-l-2 border-silver-dim/30 light:border-museum-ink-dim/25 pl-5 md:pl-7"
        >
          <p className="font-sans text-base md:text-lg leading-relaxed tracking-[0.03em] text-silver-mid light:text-museum-ink-mid italic">
            {pullQuote}
          </p>
        </motion.blockquote>

        {/* ── Photo + Bio — magazine embedded portrait ── */}
        <motion.div {...fadeUp} className="mt-12 md:mt-16">
          {/* Photo — floated left on desktop, centered on mobile */}
          <div className="md:float-left md:mr-10 md:mb-8 md:w-[240px] mb-8 mx-auto w-48">
            <div className="relative aspect-[3/4] overflow-hidden border border-silver-dim/20 light:border-museum-ink-dim/15">
              <Image
                src="/images/about/ktaki2022.jpg"
                alt="Kentaro Taki"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 240px, 192px"
                priority
              />
            </div>
          </div>

          {/* Bio — wraps around photo on desktop */}
          <p className="font-sans text-sm leading-[2.4] tracking-[0.12em] text-silver-mid light:text-museum-ink-mid">
            {bio}
          </p>

          {/* Clearfix for the float */}
          <div className="clear-both" />
        </motion.div>

        {/* ── Awards + Education + Career — compact row ── */}
        <motion.div {...fadeUp} className="mt-16 pt-10 border-t border-silver-dim/20 light:border-museum-ink-dim/15">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Awards */}
            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mb-3">
                {dict.about.awards}
              </h2>
              <ul className="space-y-1.5">
                {awards.map((a, i) => (
                  <li key={i} className="font-sans text-xs leading-relaxed text-silver-dim light:text-museum-ink-dim">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mb-3">
                {dict.about.education}
              </h2>
              <ul className="space-y-1.5">
                {education.map((e, i) => (
                  <li key={i} className="font-sans text-xs leading-relaxed text-silver-dim light:text-museum-ink-dim">
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            {/* Career / CV */}
            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-silver-dim light:text-museum-ink-dim mb-3">
                {dict.about.cv}
              </h2>
              <div className="flex flex-col gap-2">
                <a
                  href="/files/KentaroTAKI-CV-ja.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cv flex items-center justify-between px-3 py-2 border border-silver-dim/25 light:border-museum-ink-dim/20 bg-silver-dim/[0.02] light:bg-museum-ink-dim/[0.02] hover:border-silver-dim/40 light:hover:border-museum-ink-dim/35 hover:bg-silver-dim/[0.05] light:hover:bg-museum-ink-dim/[0.04] transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs tracking-[0.1em] text-silver-dim light:text-museum-ink-dim group-hover/cv:text-silver-white light:group-hover/cv:text-museum-ink transition-colors">
                      {isJa ? '日本語' : 'Japanese'}
                    </span>
                    <span className="font-mono text-xs tracking-[0.15em] text-silver-dim/50 light:text-museum-ink-dim/50 px-1 py-px border border-silver-dim/25 light:border-museum-ink-dim/20 rounded-sm">
                      {dict.about.pdfLabel}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] text-silver-dim/50 light:text-museum-ink-dim/50 group-hover/cv:text-silver-dim light:group-hover/cv:text-museum-ink-dim group-hover/cv:translate-y-px transition-all">↓</span>
                </a>
                <a
                  href="/files/KentaroTAKI-CV-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cv flex items-center justify-between px-3 py-2 border border-silver-dim/25 light:border-museum-ink-dim/20 bg-silver-dim/[0.02] light:bg-museum-ink-dim/[0.02] hover:border-silver-dim/40 light:hover:border-museum-ink-dim/35 hover:bg-silver-dim/[0.05] light:hover:bg-museum-ink-dim/[0.04] transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs tracking-[0.1em] text-silver-dim light:text-museum-ink-dim group-hover/cv:text-silver-white light:group-hover/cv:text-museum-ink transition-colors">
                      {isJa ? '英語' : 'English'}
                    </span>
                    <span className="font-mono text-xs tracking-[0.15em] text-silver-dim/50 light:text-museum-ink-dim/50 px-1 py-px border border-silver-dim/25 light:border-museum-ink-dim/20 rounded-sm">
                      {dict.about.pdfLabel}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] text-silver-dim/50 light:text-museum-ink-dim/50 group-hover/cv:text-silver-dim light:group-hover/cv:text-museum-ink-dim group-hover/cv:translate-y-px transition-all">↓</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Exhibition History — vertical timeline ── */}
        <motion.div {...fadeUp} className="mt-20 pb-24">
          <h2 className="font-sans text-xl tracking-[0.2em] text-silver-white light:text-museum-ink mb-10">
            {dict.about.selectedExhibitions}
          </h2>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-silver-dim/15 light:bg-museum-ink-dim/12" />

            <div className="space-y-1">
              {exhibitions.map((ex, i) => {
                const title = isJa ? ex.titleJa : ex.titleEn;
                const venue = isJa ? ex.venueJa : ex.venueEn;
                const thumbnail = ex.image || (ex.href ? getVideoThumbnail(ex.href) : null);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.3, 0, 0.15, 1] },
                    }}
                    className="group relative pl-8 py-3"
                  >
                    {/* Dot on timeline */}
                    <span className="absolute left-[3.5px] top-[18px] w-[8px] h-[8px] rounded-full border border-silver-dim/30 light:border-museum-ink-dim/25 bg-darkroom-black light:bg-museum-white group-hover:bg-silver-dim/30 light:group-hover:bg-museum-ink-dim/20 transition-colors" />

                    <div className="flex gap-4">
                      {/* Year */}
                      <span className="w-10 shrink-0 font-mono text-xs tracking-[0.1em] text-silver-dim light:text-museum-ink-dim pt-[2px]">
                        {ex.year}
                      </span>

                      {/* Title + Venue */}
                      <div className="min-w-0 flex-1">
                        {ex.href ? (
                          <a
                            href={ex.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-start gap-1 group/title"
                          >
                            <span className="font-sans text-sm tracking-[0.04em] leading-snug text-silver-white light:text-museum-ink group-hover/title:text-silver-mid light:group-hover/title:text-museum-ink-mid transition-colors">
                              {title}
                            </span>
                            <span className="shrink-0 font-mono text-[10px] text-silver-dim/40 light:text-museum-ink-dim/40 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                              ↗
                            </span>
                          </a>
                        ) : (
                          <p className="font-sans text-sm tracking-[0.04em] leading-snug text-silver-white light:text-museum-ink">
                            {title}
                          </p>
                        )}
                        <p className="mt-0.5 font-sans text-xs leading-relaxed text-silver-dim light:text-museum-ink-dim">
                          {venue}
                        </p>
                      </div>

                      {/* Thumbnail on right */}
                      {thumbnail && (
                        <div className="relative w-32 h-20 shrink-0 overflow-hidden border border-silver-dim/20 light:border-museum-ink-dim/15 self-center">
                          <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* and more */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.1 + exhibitions.length * 0.06, duration: 0.5, ease: [0.3, 0, 0.15, 1] },
                }}
                className="relative pl-8 py-3"
              >
                <span className="absolute left-[3.5px] top-[18px] w-[8px] h-[8px] rounded-full border border-dashed border-silver-dim/20 light:border-museum-ink-dim/15 bg-transparent" />
                <span className="w-10 shrink-0 inline-block" />
                <a
                  href={isJa ? '/files/KentaroTAKI-CV-ja.pdf' : '/files/KentaroTAKI-CV-en.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.15em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-colors"
                >
                  {dict.about.andMore} →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
