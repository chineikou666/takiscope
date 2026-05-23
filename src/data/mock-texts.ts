export interface MockText {
  id: string;
  titleJa: string;
  titleEn: string;
  category: 'essay' | 'publication';
  date?: string;
  detail?: string;
  excerptJa: string;
  excerptEn: string;
  href?: string;
  image?: string;
}

export const mockTexts: MockText[] = [
  // ── ESSAYS ──
  {
    id: 'video-art-study-group',
    titleJa: 'ヴィデオアート研究会 開催',
    titleEn: 'Video Art Study Group',
    category: 'essay',
    date: '2025-11-14',
    excerptJa:
      'ゲスト足立アン、進行瀧健太郎による研究会「Community of Images — アメリカ、フィラデルフィアから日本の戦後映像芸術を振り返る」。',
    excerptEn:
      'A study session with guest Anne Adachi and facilitator Kentaro Taki: "Community of Images — Looking Back at Postwar Japanese Moving Image Art from Philadelphia, USA."',
    href: 'https://takiscope-quests.blogspot.com/2025/11/blog-post.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuYCe9IB1szRAlkIZYShLSVnlwVeyWOFE0kEdqZ7-yzDq_qLs_MPmEWk0zlefwpUwSDUhxhQuza8vJqbdstgugBKm8WvWS9k4QM-Q6FT8l627GckDS9LG25smgITukXwIy6Npr1Bbt6tMNS2usTG2IeEyd_A2w7r3Wn6LvahvpFE7QBDOEIs3JZkyA58cC/s320/banner.jpg',
  },
  {
    id: 'furniture-optics-note',
    titleJa: 'Furniture Optics 制作ノート',
    titleEn: 'Furniture Optics Production Note',
    category: 'essay',
    date: '2025-09-10',
    excerptJa:
      '「目視と電視の狭間」—— カメラ・オブスキュラを現代的映像装置として再解釈し、光学的な見ることの考古学を探求した日英バイリンガル制作ノート。Camera Obscura = Stool, Table, Mobile, Argus I/II/III, Step Shelf, Accessory Case シリーズ。',
    excerptEn:
      '"Between Vision and Television" — a bilingual production note on the Furniture Optics series (Camera Obscura = Stool, Table, Mobile, Argus I/II/III, Step Shelf, Accessory Case), exhibited at Koganecho Bazaar + Kamiooka Bazaar 2025.',
    href: 'https://takiscope-quests.blogspot.com/2025/09/furniture-optics-note.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8Fq5BsZ2vJTvssBsNLnyG74ZNsIX2N29zwha5JxrPwrrIAyNrzJlDTGmAE3wrX7L-8HvFX5BvRzPTlpWbRNlDLI7vD28H9K3n5uHWOk90GChFV76A_867C0eKgZuSi7S3IYYNoJ9MJfSXjWJ243Rsv62FMys4u5lymB7IbvKiBmqFGSx2vUgUZboG7oxe/s320/testcompo.jpg',
  },
  {
    id: 'between-frames-iimura',
    titleJa: '格縫之隙：飯村隆彥與離散時間的美學',
    titleEn: 'Between Frames: Takahiko Iimura and the Aesthetics of Discrete Time',
    category: 'essay',
    date: '2025-06-11',
    excerptJa:
      '香港M+ミュージアムの上映プログラム「Timekeepers」のための日中英バイリンガルテキスト。実験映像作家・飯村隆彥の作品におけるコマとコマのあいだ——離散的な時間の美学をめぐる批評的考察。',
    excerptEn:
      'A bilingual Chinese/English text written for the screening program "Timekeepers" at M+, Hong Kong. A critical examination of the space between frames in the work of experimental filmmaker Takahiko Iimura, exploring the aesthetics of discrete time.',
    href: 'https://takiscope-quests.blogspot.com/2025/08/blog-post.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3aLGQ4amOv4HzxYVlRcixr-4OPSdUNa37CAmmZE0BzYlTeegY890P-wsPXQrXRmZPOEaebq1QedHdHNKBEXFabF1v1o3M-CbW5IxPuMix9dQnLGFaGFjW-ECmEm3yo1kElMQDxaQ9gl767XkuOH3TjFjI8QoWfxSV9wvtBDI64YWcNQWbiHl_-vqLH-Vm/s320/%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89.webp',
  },
  {
    id: 'mobile-projection-examination',
    titleJa: 'モバイル・プロジェクション考 — または瀧健太郎の分身がビルを駆け上った件',
    titleEn: 'Examination of Mobile Projection — Or about the Body Double of Kentaro Taki Ran Up Buildings',
    category: 'essay',
    date: '2024-11-17',
    excerptJa:
      '10年にわたるモバイル・プロジェクション（2015–2024）の実践を振り返る制作ノート。神楽坂、京都、渋谷、スラバヤ、クレルモン=フェラン、台北、式根島、横浜で展開された、プロジェクターとバッテリーを背負って都市を歩くパフォーマンスの記録と考察。',
    excerptEn:
      'Production note reflecting on a decade of Mobile Projection practice (2015–2024) — carrying a projector and battery to project the artist\'s "body double" onto urban surfaces in Kagurazaka, Kyoto, Shibuya, Surabaya, Clermont-Ferrand, Taipei, Shikinejima, and Yokohama.',
    href: 'https://takiscope-quests.blogspot.com/2024/11/note-examination-of-mobile-projection.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdSrEuFJWGQ6hKilaWvpNOkx1aqsLRPo6wkY-CdkRwM9XNLIeG53RFmgvMq8Kz7yhfcB2hKkErKbYitugLjhUmtAjUMbYdgxOw1jhEu1C-mNEzgL55LfYAIr6lE-K1tgQNNb8R1o1dlNk3b4vJ_qxe01iCoOUAfOBJ2lmjtwRQxj_TRPKk-SQUuwAM8Sq1/w706-h352/2024mobileprojectionKoganecho-Hirano-Yin.png',
  },
  {
    id: 'mobile-projection-ja',
    titleJa: '制作ノート《モバイル・プロジェクション考》',
    titleEn: 'Production Note: Examination of Mobile Projection (Japanese)',
    category: 'essay',
    date: '2024-11-10',
    excerptJa:
      '「モバイル・プロジェクション考」日本語版。2015年から2024年まで各地で展開された、プロジェクターとバッテリーを背負い都市空間に自分の分身を投影するパフォーマンスの詳細な制作ノート。',
    excerptEn:
      'Japanese version of the Mobile Projection production note. Detailed documentation of the performance practice (2015–2024) of carrying a projector and battery to cast the artist\'s double onto urban architecture across multiple cities.',
    href: 'https://takiscope-quests.blogspot.com/2024/11/blog-post.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdSrEuFJWGQ6hKilaWvpNOkx1aqsLRPo6wkY-CdkRwM9XNLIeG53RFmgvMq8Kz7yhfcB2hKkErKbYitugLjhUmtAjUMbYdgxOw1jhEu1C-mNEzgL55LfYAIr6lE-K1tgQNNb8R1o1dlNk3b4vJ_qxe01iCoOUAfOBJ2lmjtwRQxj_TRPKk-SQUuwAM8Sq1/w706-h352/2024mobileprojectionKoganecho-Hirano-Yin.png',
  },
  {
    id: 'corresponding-cityscape-note',
    titleJa: '応答する都市 制作ノート',
    titleEn: 'Corresponding Cityscape — Production Note',
    category: 'essay',
    date: '2024-08-29',
    excerptJa:
      '黄金町バザール2024のためのサイトスペシフィック・インスタレーション「応答する都市」制作ノート。コロナ禍のイタリアのバルコニー交流に触発され、Tim Ingoldの"Correspondences"、Jochen Gerzの"Rufen bis zur Erschöpfung"を参照しつつ、京急線高架から眺める11箇所の窓への等身大投影を構想した過程。',
    excerptEn:
      'Production note on "Corresponding Cityscape" (Koganecho Bazaar 2024) — a site-specific installation projecting waving figures onto 11 windows of shops, homes, schools, and warehouses, viewable from the Keikyu Line elevated tracks. References COVID-era balcony interactions in Italy, Tim Ingold\'s "Correspondences," and Jochen Gerz\'s "Rufen bis zur Erschöpfung."',
    href: 'https://takiscope-quests.blogspot.com/2024/08/corresponding-cityscapeproduction.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmJ6Lite_0BwSXQv_jG2BWPFLXSJ1n9y3MW9a-W2RP4PY5_MoHp7yYhF5FAiT0Z27X8AHxBJdQvsnNRaZujktSBVpCqE2Baf2X-H4U9vaNwFEHwwfXejaqlgVOi-BDrQ2DzfpUK9-BMo_yoxR-pUZXaYOnnPc9F9AMZeAfcXRvDsT3YlrvnTzDkbTSbFKC/w640-h221/kasagiphoto.png',
  },
  {
    id: 'corresponding-cityscape-note-ja',
    titleJa: '応答する都市 制作ノート（日本語版）',
    titleEn: 'Corresponding Cityscape — Production Note (Japanese)',
    category: 'essay',
    date: '2024-08-29',
    excerptJa:
      '「応答する都市」日本語版制作ノート。COVID-19時代のイタリアのバルコニー交流に触発され、Tim Ingoldの「Correspondences」、Jochen Gerzの「Rufen bis zur Erschöpfung」を参照したサイトスペシフィック・インスタレーションの構想過程。',
    excerptEn:
      'Japanese version of the Corresponding Cityscape production note. The conceptual process behind the site-specific installation, inspired by COVID-era balcony interactions in Italy and referencing Tim Ingold and Jochen Gerz.',
    href: 'https://takiscope-quests.blogspot.com/2024/08/blog-post.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmJ6Lite_0BwSXQv_jG2BWPFLXSJ1n9y3MW9a-W2RP4PY5_MoHp7yYhF5FAiT0Z27X8AHxBJdQvsnNRaZujktSBVpCqE2Baf2X-H4U9vaNwFEHwwfXejaqlgVOi-BDrQ2DzfpUK9-BMo_yoxR-pUZXaYOnnPc9F9AMZeAfcXRvDsT3YlrvnTzDkbTSbFKC/w640-h221/kasagiphoto.png',
  },

  // ── PUBLICATIONS / DVD / BLU-RAY ──
  {
    id: 'semiotopos-15',
    titleJa: '叢書セミオトポス15 食（メシ）の記号論 — 食は幻想か？',
    titleEn: 'Semiotopos 15: The Semiotics of Food — Is Food an Illusion?',
    category: 'publication',
    date: '2020-06-01',
    href: 'https://www.amazon.co.jp/dp/4788516829',
    detail: '日本記号学会 / ISBN 9784788516823 / A5・216頁',
    excerptJa:
      'クシシュトフ・ヴォディチコの2000年代の作品に関する研究論文を寄稿。ポーランド出身・NY在住のアーティスト、ヴォディチコの公共空間介入実践を記号論的に分析。',
    excerptEn:
      'Contributed a research paper on Krzysztof Wodiczko\'s 2000s-era works. A semiotic analysis of the Polish-born, NYC-based artist\'s public space intervention practice.',
  },
  {
    id: 'ainauchi-dvd',
    titleJa: '相内啓司『い（ま）え in between — 存在とイマージュの境域 —』',
    titleEn: 'Keiji Ainauchi "i(ma)e in between — Between Being and Image"',
    category: 'publication',
    date: '2014-01-01',
    detail: 'DVD 2枚組 + ブックレット（A5変形カラー80頁 / 総収録時間213分）',
    excerptJa:
      '映像・造形作家 相内啓司の活動を記録した全集。瀧健太郎テキスト寄稿。',
    excerptEn:
      'A complete-works collection documenting the practice of video and visual artist Keiji Ainauchi. TAKI contributed text to this 2-disc DVD + booklet set.',
  },
  {
    id: 'tokiwadai-journal',
    titleJa: '常盤台人間文化論叢 2019.3 vol.5',
    titleEn: 'Tokiwadai Journal of Humanities and Culture, 2019.3, Vol.5',
    category: 'publication',
    date: '2019-03-01',
    detail: '横浜国立大学大学院都市イノベーション研究院',
    excerptJa:
      '研究論文「ヒロシマとフクシマ：現れの場としての〈顔〉─日本におけるクシシュトフ・ヴォディチコの受容」を収録。原爆と原発事故という二つの災禍を、ヴォディチコの「顔」の実践を通して考察。',
    excerptEn:
      'Includes research paper "Hiroshima and Fukushima: The Face as a Site of Appearance — Reception of Krzysztof Wodiczko in Japan." Examines two disasters — atomic bomb and nuclear accident — through Wodiczko\'s "face" practice.',
  },
  {
    id: 'harun-farocki-dvd',
    titleJa: 'ハルン・ファロッキ DVD『世界のイメージと戦争の刻印』+『隔てられた戦争 識別＋追跡』',
    titleEn: 'Harun Farocki DVD: "Images of the World and the Inscription of War" + "War at a Distance: Recognition + Tracking"',
    category: 'publication',
    date: '2018-01-01',
    href: 'https://www.gendaikikakushitsu.com/',
    detail: '2018年 / VCT企画制作 / REF lab. 発行 / 現代企画室 発売 / 4,320円（税込） / 日本語・中国語・韓国語字幕',
    excerptJa:
      'ドイツの映像作家・理論家ハルン・ファロッキの二作品を収録したDVD。',
    excerptEn:
      'A DVD collecting two works by German filmmaker and theorist Harun Farocki. Japanese, Chinese, and Korean subtitles.',
  },
  {
    id: 'film-independent-1964',
    titleJa: 'フィルム・アンデパンダン1964 — ぼく自身のためのCM',
    titleEn: 'Film Independent 1964: A Commercial for Myself',
    category: 'publication',
    date: '2012-01-01',
    detail: '飯村隆彦＋グループフィルムアンデパンダン / DVD',
    excerptJa:
      '飯村隆彦＋グループフィルムアンデパンダンによる1964年の実験映画。瀧は企画・制作進行、オーサリングを担当。',
    excerptEn:
      'A 1964 experimental film by Takahiko Iimura + Group Film Independent. TAKI handled planning, production coordination, and DVD authoring.',
  },
  {
    id: 'kikai-de-mirukoto',
    titleJa: 'Kikai de Mirukoto = Eye Machine / To See by Chance — the Pioneers of Japanese Videoarts',
    titleEn: 'Kikai de Mirukoto = Eye Machine / To See by Chance — the Pioneers of Japanese Videoarts',
    category: 'publication',
    date: '2013-01-01',
    href: 'https://www.gendaikikakushitsu.com/',
    detail: '2013年 / 監督：瀧健太郎 / VIDEOART Center Tokyo 企画 / Blu-ray 82分 / 3,990円（税込） / REF 発行 / 現代企画室 発売',
    excerptJa:
      '瀧健太郎監督によるブルーレイ。阿部修也、安藤紘平、マイケル・ゴールドバーグ、萩原朔美、出光真子、飯村隆彦、川中伸啓、小林博道、久保田成子、松本俊夫、中嶋興、中谷芙二子、山口勝弘、山本圭吾、和田守弘ら、日本ビデオアートの先駆者15名を収録。',
    excerptEn:
      'Blu-ray directed by Kentaro TAKI, presented by VIDEOART Center Tokyo. Features 15 pioneers of Japanese video art: Shuya ABE, Kohei ANDO, Michael GOLDBERG, Sakumi HAGIWARA, Mako IDEMITSU, Takahiko IIMURA, Nobuhiro KAWANAKA, Hakudo KOBAYASHI, Shigeko KUBOTA, Toshio MATSUMOTO, Ko NAKAJIMA, Fujiko NAKAYA, Katsuhiro YAMAGUCHI, Keigo YAMAMOTO, Morihiro WADA.',
  },
  {
    id: 'japanese-video-art-2011',
    titleJa: 'Japanese Video Art 2011 — Hors Pistes Tokyo 2011',
    titleEn: 'Japanese Video Art 2011 — Hors Pistes Tokyo 2011',
    category: 'publication',
    date: '2011-01-01',
    href: 'https://www.centrepompidou.fr/en/program/festivals/moving-hors-pistes',
    detail: '2011年 / DVD / ポンピドゥーセンター公式フェスティバルプログラム',
    excerptJa:
      'Centre Pompidou の公式フェスティバル「Hors Pistes Tokyo 2011」日本作品セレクション。瀧の「Living in the Box -an abridged」（2009, 13分）を収録。',
    excerptEn:
      'Japan works selection from "Hors Pistes Tokyo 2011," an official Centre Pompidou festival program. Includes TAKI\'s "Living in the Box -an abridged" (2009, 13 min).',
  },
  {
    id: 'surabaya-influx',
    titleJa: 'SURABAYA INFLUX',
    titleEn: 'SURABAYA INFLUX',
    category: 'publication',
    date: '2017-01-01',
    href: 'https://takiscope-quests.blogspot.com/2017/12/surabaya-influx.html',
    detail: '2017年 / MISA Influx Study Activity 発行 / 英語 / Rp. 150,000',
    excerptJa:
      'インドネシア・スラバヤでのレジデンスから生まれた書籍。瀧健太郎のフォトコラージュとテキスト「8 Predicted Scenes of Influx」（pp. 68–78）を収録。',
    excerptEn:
      'A book born from a residency in Surabaya, Indonesia. Features Kentaro TAKI\'s photo collage and text "8 Predicted Scenes of Influx" (pp. 68–78).',
  },
  {
    id: 'city2city',
    titleJa: '〈City2City〉— Lowave',
    titleEn: 'City2City — Lowave',
    category: 'publication',
    date: '2003-01-01',
    href: 'https://www.lowave.com/',
    detail: 'Lowave（パリ、フランス） / コンピレーションDVD',
    excerptJa:
      '国際的なアーティストが都市イメージの問題を視覚化するコンピレーションDVD。瀧の「交換可能都市」（Interchangeable City, 2002）を収録。',
    excerptEn:
      'A compilation DVD where international artists visualize urban imagery issues. Includes TAKI\'s "Interchangeable City" (2002). Published by Lowave, Paris.',
  },
  {
    id: 'vidiot-in-contemplation',
    titleJa: 'Vidiot in Contemplation — ヴィディオット・イン・コンテンプレーション',
    titleEn: 'Vidiot in Contemplation',
    category: 'publication',
    date: '2010-01-01',
    href: 'https://takiscope.blogspot.com/2010/02/vidiot-in-contemplation.html',
    detail: 'コンピレーションDVD / 7名のビデオアーティスト',
    excerptJa:
      '「ヴィデオ馬鹿（vidiot）からテレビ中毒（vidiot）へ薦めるヴィデオアート集」。瀧の「Living in the Box -single channel ver.」「Bild:Muell#1」およびドキュメンタリー映像を収録。',
    excerptEn:
      'A video art compilation "recommended from vidiot to vidiot" featuring 7 artists. Includes TAKI\'s "Living in the Box -single channel ver.," "Bild:Muell#1," and documentary footage.',
  },
  {
    id: 'empire-des-signifiants',
    titleJa: '〈L\'Empire des Signifiants〉— シニフィアンの帝国',
    titleEn: 'L\'Empire des Signifiants — The Empire of Signifiers',
    category: 'publication',
    date: '2001-01-01',
    detail: '2001年 / コンピレーションDVD / 東京のビデオアート作品集',
    excerptJa:
      'パリ・セーヌ川バトファー・フェスティバル（2001）で発表された東京のビデオアート作品集。ドイツ、フランス、アメリカ、ブラジル、中国、韓国、インドネシア、南アフリカなど世界中で上映。瀧の「StolenAir」（1998）と「MediaCage」（2000）を収録。',
    excerptEn:
      'A compilation of video art from Tokyo, exhibited at the Batofar festival (Paris, Seine River, 2001) and screened worldwide in Germany, France, USA, Brazil, China, South Korea, Indonesia, South Africa, etc. Includes TAKI\'s "StolenAir" (1998) and "MediaCage" (2000).',
  },
  {
    id: 'visual-philosophy-note',
    titleJa: 'visual philosophy note vol.1 — ぼくらはヴィジュアルで思考する',
    titleEn: 'Visual Philosophy Note vol.1 — We Think Visually',
    category: 'publication',
    date: '2013-06-01',
    href: 'https://www.amazon.co.jp/dp/4773813105',
    detail: 'REF lab. 編 / 現代企画室 / ISBN 978-4-7738-1310-4 C0074',
    excerptJa:
      '「シームレス・メディア時代と video art（見ることの技術／芸術）」をテーマに、諏訪敦彦、ホンマタカシ、飯村隆彦、宇野邦一、松本俊夫、瀧健太郎、西山修平、ジョナサン・ホール、河合政之らが寄稿したヴィジュアル・エッセイ集。',
    excerptEn:
      'A visual essay collection themed on "the Seamless Media Era and Video Art (the Technique/Art of Seeing)," with contributions from Nobuhiro Suwa, Takashi Honma, Takahiko Iimura, Kunichi Uno, Toshio Matsumoto, Kentaro Taki, Shuhei Nishiyama, Jonathan Hall, and Masayuki Kawai.',
  },
  {
    id: 'next-creator-book',
    titleJa: 'NEXT CREATOR BOOK — いま、ここからの映像術 近未来ヴィジュアルの予感',
    titleEn: 'NEXT CREATOR BOOK — Video Techniques from Here and Now: A Premonition of Near-Future Visuals',
    category: 'publication',
    date: '2009-01-01',
    href: 'https://www.filmart.co.jp/',
    detail: 'フィルムアート社 / 2009年 / A5',
    excerptJa:
      '映像制作とメディアアート入門。藤原敏史、野本大、井土紀州、森直人、松島政一、伊藤克則、金原由佳、月永理絵、藤井光、瀧健太郎ら次世代の映像クリエイターによる共著。',
    excerptEn:
      'An introductory volume on video production and media art. Co-authored by the next generation of video creators: Toshifumi Fujiwara, Dai Nomoto, Kishu Ido, Naoto Mori, Masakazu Matsushima, Katsunori Ito, Yuka Kanehara, Rie Tsukinaga, Hikaru Fujii, Kentaro Taki, and others.',
  },
];
