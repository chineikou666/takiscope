interface Item {
  titleJa: string;
  titleEn: string;
  descriptionJa: string;
  descriptionEn: string;
  price: string;
  href?: string;
  imageUrl?: string;
}

const items: Item[] = [
  {
    titleJa: 'Corresponding Cityscape Tシャツ【赤M】',
    titleEn: 'Corresponding Cityscape T-Shirt [Red M]',
    descriptionJa:
      '「Corresponding Cityscape（応答する都市）」の2点のスケッチを元にデザインされたオリジナルTシャツ。MサイズとSサイズで若干デザインが異なる。黄金町バザール2024記念。',
    descriptionEn:
      'Original T-shirt based on two sketches from the "Corresponding Cityscape" project. Design slightly differs between M and S sizes. Koganecho Bazaar 2024 commemorative item.',
    price: '¥2,900（税込）',
  },
  {
    titleJa: 'ポストカードセット「Antagonistic Dialogue of Beam and Object」',
    titleEn: 'Postcard Set "Antagonistic Dialogue of Beam and Object"',
    descriptionJa:
      '2000年代のインスタレーション・パフォーマンス作品に加え、黄金町バザール2024プロジェクトのスケッチを収めた12枚セット。',
    descriptionEn:
      'A set of 12 postcards featuring installations and performances from the 2000s plus sketches from the Koganecho Bazaar 2024 project.',
    price: '¥800（税込）',
  },
  {
    titleJa: 'E-夜警 LINEスタンプ',
    titleEn: 'E-Nightwatch LINE Stamp',
    descriptionJa:
      '2023年の展示「E-夜警」に登場する監視社会をテーマにしたキャラクターたちのLINEクリエイターズスタンプ。',
    descriptionEn:
      'LINE Creators Stamps featuring characters themed around surveillance society from the 2023 exhibition "E-Nightwatch."',
    price: 'LINE Store',
    href: 'https://line.me/S/sticker/',
  },
];

export default async function ItemsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-[3vw]">
        <h1 className="font-sans text-3xl tracking-[0.2em] text-silver-white light:text-museum-ink">
          {lang === 'ja' ? 'アイテム' : 'Items'}
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.titleEn}
              className="group relative border border-silver-dim/25 light:border-museum-ink-dim/20 p-6 transition-colors duration-500 hover:border-silver-dim/35 light:hover:border-museum-ink-dim/25"
            >
              {/* Image placeholder with grain */}
              <div className="relative mb-4 aspect-square overflow-hidden bg-develop-gray light:bg-museum-shadow/50">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={lang === 'ja' ? item.titleJa : item.titleEn}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs text-silver-dim">
                      {lang === 'ja' ? '画像準備中' : 'Image coming soon'}
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
                  }}
                />
              </div>

              {/* Corner brackets on hover */}
              <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-silver-white/25 light:border-museum-ink/20" />
                <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-silver-white/25 light:border-museum-ink/20" />
                <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-silver-white/25 light:border-museum-ink/20" />
                <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-silver-white/25 light:border-museum-ink/20" />
              </div>

              <p className="font-sans text-sm leading-relaxed text-silver-white light:text-museum-ink">
                {lang === 'ja' ? item.titleJa : item.titleEn}
              </p>
              <p className="mt-1.5 font-sans text-xs leading-relaxed text-silver-dim light:text-museum-ink-dim">
                {lang === 'ja' ? item.descriptionJa : item.descriptionEn}
              </p>
              <p className="mt-3 font-mono text-xs text-silver-dim">
                {item.price}
              </p>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] text-silver-dim/50 hover:text-silver-dim transition-colors duration-300"
                >
                  {lang === 'ja' ? '購入ページへ' : 'Purchase'}
                  <span className="text-[10px]">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
