export interface MockWork {
  id: string;
  titleJa: string;
  titleEn: string;
  year: number;
  month?: number;
  medium: string;
  cluster: string;
  descriptionJa: string;
  descriptionEn: string;
  color: string;
  imageUrl?: string;
  videoUrl?: string;
  images?: string[];
  duration?: string;
  dimensions?: string;
}

export const mockWorks: MockWork[] = [
  // ── 2024 ──
  {
    id: 'corresponding-cityscape',
    titleJa: '応答する都市',
    titleEn: 'Corresponding Cityscape',
    year: 2024,
    month: 10,
    medium: 'Installation',
    cluster: 'Body & Double',
    descriptionJa:
      '横浜・黄金町の街並みに11箇所の窓を選び、地域住民17名の等身大の姿を夜間投影したサイトスペシフィック・インスタレーション。京急線高架から眺める都市への応答。',
    descriptionEn:
      'A site-specific installation projecting life-size figures of 17 local residents onto 11 windows across the Koganecho neighborhood in Yokohama, visible from the Keikyu Line elevated tracks.',
    color: '#3a3040',
    imageUrl: '/works/corresponding-cityscape.jpg',
  },
  {
    id: 'whirl-pool',
    titleJa: '渦',
    titleEn: 'Whirl Pool',
    year: 2024,
    month: 9,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      '京急百貨店のショーウィンドウに投影された映像インスタレーション。渦巻く水のイメージが都市商業空間に持ち込まれ、日常の風景に裂け目を生み出す。',
    descriptionEn:
      'A video installation projected in the show window of Keikyu Department Store, bringing swirling water imagery into urban commercial space and creating a rift in the everyday landscape.',
    color: '#203040',
    imageUrl: '/works/whirl-pool.jpg',
  },
  {
    id: 'contour-lines',
    titleJa: 'Contour Lines',
    titleEn: 'Contour Lines',
    year: 2024,
    medium: 'Video',
    cluster: 'Optical Apparatus',
    descriptionJa:
      'オシロスコープを用いて人間活動の映像を等高線状のイメージに変換した4Kビデオ作品（22分）。見ることのテクノロジーが生み出す新たな視覚像。',
    descriptionEn:
      'A 4K video (22 min) converting footage of human activities into contour-line-like imagery using an oscilloscope — a new visual image produced by the technology of seeing.',
    color: '#2a3030',
    imageUrl: '/works/contour-lines.jpg',
    duration: '22 min',
  },
  {
    id: 'convex',
    titleJa: '凸 coNVex',
    titleEn: '凸 coNVex',
    year: 2024,
    medium: 'Video',
    cluster: 'Body & Double',
    descriptionJa:
      '横浜で撮影された4Kビデオポートレイト（2分55秒）。換気ダクトの振動を通して歪んだ自己像としてのストリートポートレイト。',
    descriptionEn:
      'A 4K video portrait (2min 55sec) shot in Yokohama. A street portrait refracted through a vibrating ventilation duct as a distorted self-image.',
    color: '#383028',
    imageUrl: '/works/convex.jpg',
    duration: '2 min 55 sec',
  },

  // ── 2023 ──
  {
    id: 'e-nightwatch',
    titleJa: 'E-夜警',
    titleEn: 'E-Nightwatch',
    year: 2023,
    medium: 'Exhibition',
    cluster: 'Seeing & Surveillance',
    descriptionJa:
      '黄金町国際アーティスト・ネットワーク2023にて開催。監視社会をテーマに、複数のモニターとカメラが配置され、見る/見られるの関係性を空間化した展示。',
    descriptionEn:
      'Presented at Koganecho International Artist\'s Network 2023. An exhibition themed on surveillance society, spatializing the relationship between watching and being watched through monitors and cameras.',
    color: '#1a2020',
    imageUrl: '/works/e-nightwatch.jpg',
  },
  {
    id: 'drowning-skull',
    titleJa: 'Drowning Skull',
    titleEn: 'Drowning Skull',
    year: 2023,
    month: 7,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      'ビデオプロジェクター、電子廃棄物、オーディオスピーカー、PCを用いたインスタレーション。「Behind the wall of July」展にて、日ノ出町駅〜黄金町駅間の高架下に展示。',
    descriptionEn:
      'An installation using video projector, e-wastes, audio speaker, and PC. Exhibited in "Behind the wall of July" beneath the railways between Hinodecho Station and Koganecho Station, Yokohama.',
    color: '#302820',
    imageUrl: '/works/drowning-skull.jpg',
  },
  {
    id: 'redeveloped-pool',
    titleJa: 'リデベロップメント・プール',
    titleEn: 'Redeveloped Pool',
    year: 2023,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      '夜間投影によるインスタレーション。パフォーマー飯森沙百合との協働。再開発されゆく都市空間に、身体の不在と記憶を投影する。',
    descriptionEn:
      'A night projection installation in collaboration with performer Sayuri IIMORI, projecting absence and memory of the body onto redeveloping urban space.',
    color: '#283040',
    imageUrl: '/works/redeveloped-pool.png',
  },
  {
    id: 'eternal-action',
    titleJa: 'Eternal Action',
    titleEn: 'Eternal Action',
    year: 2023,
    month: 11,
    medium: 'Installation',
    cluster: 'Body & Double',
    descriptionJa:
      'SHIZUOKA ART VISION 2023にて、泉ヶ谷エリアのみかん倉庫で展示。永遠に反復される身振りと映像の関係を探求。',
    descriptionEn:
      'Presented at SHIZUOKA ART VISION 2023 at Izumigaya orange storage. Exploring the relationship between eternally repeated gestures and moving images.',
    color: '#382820',
    imageUrl: '/works/eternal-action.png',
  },

  // ── 2022 ──
  {
    id: 'bach-without-border',
    titleJa: 'Bach without Border',
    titleEn: 'Bach without Border',
    year: 2022,
    medium: 'Video',
    cluster: 'Signal & Noise',
    descriptionJa:
      'クラシック音楽を固定されたコンサートホールから解放し、移動するバスの中で演奏する4Kビデオ（9分）。ピアニストRei Nakamuraとの協働。',
    descriptionEn:
      'A 4K video (9 min) freeing classical music from the fixed concert hall by performing in a moving bus, in collaboration with pianist Rei Nakamura.',
    color: '#2a2820',
    imageUrl: '/works/bach-without-border.jpg',
    duration: '9 min',
    videoUrl: 'https://www.youtube.com/embed/b-thObpWShY',
  },
  {
    id: 'antagonism-of-seeing',
    titleJa: 'Antagonism of Seeing',
    titleEn: 'Antagonism of Seeing',
    year: 2022,
    medium: 'Exhibition',
    cluster: 'Seeing & Surveillance',
    descriptionJa:
      '見ることとテクノロジーの拮抗関係を探求。ART OSAKA 2022 Expanded Section、MORI YU GALLERYブース、クリエイティブセンター大阪にて展示。',
    descriptionEn:
      'Exploring the antagonistic relationship between seeing and technology, exhibited at ART OSAKA 2022 Expanded Section, MORI YU GALLERY Booth, Creative Center Osaka.',
    color: '#282820',
    imageUrl: '/works/antagonism-of-seeing.png',
  },
  {
    id: 'poetics-of-surveillance',
    titleJa: 'Poetics of Surveillance',
    titleEn: 'Poetics of Surveillance',
    year: 2022,
    medium: 'Installation',
    cluster: 'Seeing & Surveillance',
    descriptionJa:
      'カメラ、モニター、スイッチ、ファンを用いたインスタレーション。ART OSAKA 2022、MORI YU GALLERYブースにて展示。制御不能なテクノロジーによる監視の詩学。',
    descriptionEn:
      'An installation using camera, monitor, switch, and fan, exhibited at ART OSAKA 2022, MORI YU GALLERY Booth. A poetics of surveillance through uncontrollable technology.',
    color: '#282020',
    imageUrl: '/works/poetics-of-surveillance.png',
  },
  {
    id: 'eye-on-triangle',
    titleJa: 'Eye on Triangle',
    titleEn: 'Eye on Triangle',
    year: 2022,
    medium: 'Installation',
    cluster: 'Optical Apparatus',
    descriptionJa:
      'ビデオプロジェクター、電子廃棄物、オーディオスピーカー、PCによるインスタレーション。ART OSAKA 2022 Expanded Section、MORI YU GALLERYブースに出展。',
    descriptionEn:
      'An installation with video projector, e-wastes, audio speaker, and PC. Exhibited at ART OSAKA 2022 Expanded Section, MORI YU GALLERY booth, Creative Center Osaka.',
    color: '#2a3830',
    imageUrl: '/works/eye-on-triangle.png',
  },
  {
    id: 'dint',
    titleJa: 'DinT 凹',
    titleEn: 'DinT 凹',
    year: 2022,
    medium: 'Video',
    cluster: 'Body & Double',
    descriptionJa:
      '4Kビデオ（2分）。換気ダクトの振動を通して撮影されたストリートポートレイト。歪んだ自己像としての都市の鏡。',
    descriptionEn:
      'A 4K video (2 min). A street portrait shot through a vibrating ventilation duct — the city as a distorting mirror of the self.',
    color: '#303028',
    imageUrl: '/works/dint.jpg',
    duration: '2 min',
  },

  // ── 2021 ──
  {
    id: 'close-touching',
    titleJa: 'Close Touching',
    titleEn: 'Close Touching (Knappe Berührung)',
    year: 2021,
    medium: 'Video',
    cluster: 'Body & Double',
    descriptionJa:
      'ピアニストが鍵盤に触れるか触れないかの境界で演奏する4Kビデオ（10分）。テレワーク時代の身体性と触覚の不在を問う。',
    descriptionEn:
      'A 4K video (10 min) of a pianist playing at the very threshold of touch, questioning physicality and the absence of tactile sensation in the age of telework.',
    color: '#302828',
    imageUrl: '/works/close-touching.jpg',
    duration: '10 min',
  },

  // ── 2020 ──
  {
    id: 'scopophilia-machines',
    titleJa: '窃視症マシン',
    titleEn: 'Scopophilia Machines',
    year: 2020,
    month: 7,
    medium: 'Exhibition',
    cluster: 'Seeing & Surveillance',
    descriptionJa:
      'MORI YU GALLERYでの個展。覗き見る欲望と機械の関係をテーマにした作品群。カメラとモニターが織りなす視線の迷宮。',
    descriptionEn:
      'A solo exhibition at MORI YU GALLERY, exploring the relationship between voyeuristic desire and machines — a labyrinth of gazes woven by cameras and monitors.',
    color: '#1a1818',
    imageUrl: '/works/scopophilia-machines.jpg',
  },
  {
    id: 'arttnz',
    titleJa: 'artTNZ',
    titleEn: 'artTNZ',
    year: 2020,
    month: 9,
    medium: 'Exhibition',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      'AFT × APCA プロデュース、天王洲アイル TERRADA ART COMPLEXII にて開催。都市空間におけるアートの可能性を探求したグループ展。',
    descriptionEn:
      'Produced by AFT with APCA, held at TERRADA ART COMPLEX II, Tennozu, Tokyo. A group exhibition exploring the possibilities of art in urban space.',
    color: '#283038',
    imageUrl: '/works/artnz.jpg',
  },
  {
    id: 'penta-monitor',
    titleJa: 'Penta-Monitor',
    titleEn: 'Penta-Monitor',
    year: 2020,
    month: 2,
    medium: 'Exhibition',
    cluster: 'Optical Apparatus',
    descriptionJa:
      '「EDITION BOX VIDEO WORKS as Material」展にて、HIGURE17-15casで発表。5面のモニターによる映像インスタレーション。',
    descriptionEn:
      'Presented in "EDITION BOX VIDEO WORKS as Material" at HIGURE17-15cas. A video installation using five monitors as material for seeing.',
    color: '#202830',
    imageUrl: '/works/penta-monitor.png',
  },

  // ── 2019 ──
  {
    id: 'quake-your-perception',
    titleJa: 'Quake Your Perception',
    titleEn: 'Quake Your Perception',
    year: 2019,
    month: 8,
    medium: 'Exhibition',
    cluster: 'Signal & Noise',
    descriptionJa:
      '妙寿寺 Sarue Gallery にて週末開催されたグループ展。知覚を揺さぶる映像とインスタレーション。',
    descriptionEn:
      'A group exhibition held on weekends at Myojyuji Sarue Gallery, Tokyo. Video and installation works that quake perception.',
    color: '#383028',
    imageUrl: '/works/quake-your-perception.png',
  },
  {
    id: 'episodes-over-the-walls',
    titleJa: 'Episodes over the Walls, -unNeighborly-',
    titleEn: 'Episodes over the Walls, -unNeighborly-',
    year: 2019,
    medium: 'Exhibition',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      '東京・尾久の元青果店にて、三浦淳子企画による展示。壁を越えて／壁によって分断される近隣性をめぐるエピソード。',
    descriptionEn:
      'At an ex-greengrocer in Ogu, Tokyo, organized by Jyunko Miura. Episodes concerning neighborliness divided by and across walls.',
    color: '#383838',
    imageUrl: '/works/episodes-over-the-walls.png',
  },
  {
    id: 'corner-piece-4',
    titleJa: 'Corner Piece #4',
    titleEn: 'Corner Piece #4',
    year: 2019,
    month: 8,
    medium: 'Installation',
    cluster: 'Optical Apparatus',
    descriptionJa:
      'ビデオインスタレーション、8分ループ。ビデオプロジェクター、オーディオスピーカー、三脚を使用。「Quake Your Perception」展にて発表。',
    descriptionEn:
      'Video installation, 8min loop, with video projector, audio speaker, and tripod. Exhibited in "Quake Your Perception" at Myojyuji Sarue Gallery, Tokyo.',
    color: '#303030',
    imageUrl: '/works/corner-piece-4.jpg',
  },
  {
    id: 'treasure-hunters',
    titleJa: 'Treasure Hunters',
    titleEn: 'Treasure Hunters',
    year: 2019,
    month: 3,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      '「A Land of Happiness – 2019 Treasure Hill Light Festival」にて夜間野外投影。台北・寶藏岩国際芸術村。ディレクター：Catherine LEE、キュレーター：LEE I-Hua。',
    descriptionEn:
      'Nighttime open-air projection at "A Land of Happiness – 2019 Treasure Hill Light Festival," Treasure Hill Artist Village, Taipei. Director: Catherine LEE, Curator: LEE I-Hua.',
    color: '#2a2830',
    imageUrl: '/works/treasure-hunters.jpg',
  },

  // ── 2018 ──
  {
    id: 'radio-active-motion-picture',
    titleJa: 'ラジオ活動／活動写真',
    titleEn: 'Radio Active / Motion Picture',
    year: 2018,
    medium: 'Exhibition',
    cluster: 'Signal & Noise',
    descriptionJa:
      '京都国際映画祭2018 アート部門、元・浄粧小学校放送室にて。プランナー：岡健太。MORI YU GALLERY 協力。ラジオと映像の交差点。',
    descriptionEn:
      'Kyoto International Film Festival 2018 Art Department, at Moto-Jyumpu Elementary School broadcasting room. Planner: Kenta OKA, courtesy MORI YU GALLERY.',
    color: '#383028',
    imageUrl: '/works/radio-active-motion-picture.jpg',
    images: ['/works/radio-active-motion-picture.jpg', '/works/radio-active-install.jpg'],
  },
  {
    id: 'beyond-asian-borders',
    titleJa: 'Beyond Asian Borders Project',
    titleEn: 'Beyond Asian Borders Project',
    year: 2018,
    month: 8,
    medium: 'Exhibition',
    cluster: 'Body & Double',
    descriptionJa:
      'Season 3 レジデンスアーティスト展。台北芸術村 Barry Room にて。アジアの境界を越えるアーティスト・レジデンスの成果展。',
    descriptionEn:
      'Season 3 Residency Artists Exhibition at Taipei Artist Village, Barry Room. An exhibition crossing Asian borders through artist residency exchange.',
    color: '#303840',
    imageUrl: '/works/beyond-asian-borders.jpg',
  },
  {
    id: 'borders-on',
    titleJa: '…的邊界',
    titleEn: 'Borders on…',
    year: 2018,
    medium: 'Installation',
    cluster: 'Body & Double',
    descriptionJa:
      '6分ループのインスタレーション。台北でのレジデンス制作。Odele TSENG Yu-Ping、Jimmy HUANG、Rae HUANG Run、HE Linlin への謝辞。',
    descriptionEn:
      '6min loop installation created during a Taipei residency. Thanks to Odele TSENG Yu-Ping, Jimmy HUANG, Rae HUANG Run, HE Linlin.',
    color: '#3a3830',
    imageUrl: '/works/borders-on.jpg',
  },

  // ── 2017 ──
  {
    id: 'unneighborly-tokyo',
    titleJa: 'unNeighborly-tokyo',
    titleEn: 'unNeighborly-tokyo',
    year: 2017,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      '東京・本郷のトーキョーワンダーサイトにて複数の等身大プロジェクションを展示。リーフレット「C/Sensor-ed Scape」テキストを併設。',
    descriptionEn:
      'Multiple life-size projections at Tokyo Wonder Site Hongo. Accompanied by the leaflet text "C/Sensor-ed Scape."',
    color: '#2a2a30',
    imageUrl: '/works/unneighborly-tokyo.jpg',
  },
  {
    id: 'unneighborly-cairo',
    titleJa: 'Unneighborly, Cairo',
    titleEn: 'Unneighborly, Cairo',
    year: 2017,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      'ビデオインスタレーション、8分ループ。第8回国際カイロビデオフェスティバル（カイロ、エジプト）にて上映。',
    descriptionEn:
      'Video installation, 8min loop. Screened at the 8th International Cairo Video Festival, Cairo, Egypt.',
    color: '#383028',
    imageUrl: '/works/unneighborly-cairo.jpg',
  },
  {
    id: 'syndro-polis-2',
    titleJa: '対症城市#2《頭痛構造》',
    titleEn: 'Syndro-polis#2 "Kopfschmerz-bau"',
    year: 2017,
    month: 9,
    medium: 'Installation',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      '「Very Sustainable – Environmental Revolution」展にて、銀川現代美術館（MOCA Yinchuan）で展示。キュレーター：Suchen Hsieh。頭痛する都市構造。',
    descriptionEn:
      'Exhibited in "Very Sustainable – Environmental Revolution" at Yinchuan Museum of Contemporary Art (MOCA). Curator: Suchen Hsieh. The headache-inducing structure of the city.',
    color: '#383838',
    imageUrl: '/works/syndro-polis-2.jpg',
    images: ['/works/syndro-polis-2.jpg', '/works/syndro-polis.jpg'],
  },

  // ── 2016 ──
  {
    id: 'rendezvous-in-syndro-polis',
    titleJa: 'Rendezvous in Syndro-polis',
    titleEn: 'Rendezvous in Syndro-polis',
    year: 2016,
    medium: 'Exhibition',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      'ベルリンでの初めてのレジデンスにおける個展。症候都市（Syndro-polis）でのランデヴー。',
    descriptionEn:
      'A solo show during the artist\'s first residency in Berlin. A rendezvous in the symptomatic city — Syndro-polis.',
    color: '#303030',
    imageUrl: '/works/rendezvous-in-syndro-polis.jpg',
  },
  {
    id: 'regeneration-movement',
    titleJa: 'Regeneration Movement: Rethinking Technology in the Digital Age',
    titleEn: 'Regeneration Movement: Rethinking Technology in the Digital Age',
    year: 2016,
    month: 3,
    medium: 'Exhibition',
    cluster: 'Signal & Noise',
    descriptionJa:
      '台湾国立美術館（台中）にて開催。「デジタル時代のテクノロジーを再考する」グループ展。',
    descriptionEn:
      'At Taiwan National Museum of Fine Art, Taichung. A group exhibition rethinking technology in the digital age.',
    color: '#2a3030',
    imageUrl: '/works/regeneration-movement.png',
  },
  {
    id: 'bildmuell-10',
    titleJa: 'Bild:Muell#10「Erosion」',
    titleEn: 'Bild:Muell#10 "Erosion"',
    year: 2016,
    month: 3,
    medium: 'Installation',
    cluster: 'Signal & Noise',
    descriptionJa:
      '「Regeneration Movement」展（台湾国立美術館）に出展。イメージの廃棄物と浸食をテーマにしたシリーズ第10作。',
    descriptionEn:
      'Exhibited in "Regeneration Movement" at Taiwan National Museum of Fine Art. The 10th work in a series on image waste and erosion.',
    color: '#383028',
    imageUrl: '/works/bildmuell-10.jpg',
  },
  {
    id: 'dark-tourism',
    titleJa: 'Dark Tourism',
    titleEn: 'Dark Tourism',
    year: 2016,
    medium: 'Video',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      'HD、7分32秒。ベルリン・イーストサイドギャラリーでのKai Wiedenhoefer「War on Wall」展を記録したドキュメンタリー。',
    descriptionEn:
      'HD, 7min 32sec. A documentary recording Kai Wiedenhoefer\'s "War on Wall" exhibition at the East Side Gallery, Berlin.',
    color: '#202020',
    imageUrl: '/works/dark-tourism.jpg',
    duration: '7 min 32 sec',
  },

  // ── 2015 ──
  {
    id: 'mobile-projection',
    titleJa: 'Mobile Projection',
    titleEn: 'Mobile Projection',
    year: 2015,
    medium: 'Performance',
    cluster: 'Body & Double',
    descriptionJa:
      'バッテリーを背負い、プロジェクターを手に持ち、ビルの壁面に自分の分身を投影しながら街を歩くパフォーマンス。神楽坂、京都、渋谷、スラバヤ、クレルモン=フェラン、台北、式根島、横浜で展開。',
    descriptionEn:
      'A performance walking through the city carrying a battery-powered projector, casting life-size doubles of the artist onto building facades. Performed in Kagurazaka, Kyoto, Shibuya, Surabaya, Clermont-Ferrand, Taipei, Shikinejima, and Yokohama.',
    color: '#282828',
    imageUrl: '/works/mobile-projection.png',
  },
  {
    id: 'bildmuell-9',
    titleJa: 'Bild:Muell#9「Treibsand」',
    titleEn: 'Bild:Muell#9 "Treibsand"',
    year: 2015,
    month: 8,
    medium: 'Installation',
    cluster: 'Signal & Noise',
    descriptionJa:
      '「VIDEOs critical dreams」展にて、MORI YU GALLERY（京都）で発表。流砂のように崩れゆくイメージの地層。',
    descriptionEn:
      'Presented in "VIDEOs critical dreams" at MORI YU GALLERY, Kyoto. Strata of images collapsing like quicksand.',
    color: '#383028',
    imageUrl: '/works/bildmuell-9.png',
  },

  // ── 2014 ──
  {
    id: 'video-symphonia',
    titleJa: 'Video Symphonia 1st move',
    titleEn: 'Video Symphonia 1st move',
    year: 2014,
    medium: 'Video',
    cluster: 'Signal & Noise',
    descriptionJa:
      'HD、5分。都市空間の喧騒とビデオノイズによって奏でられるシンフォニア。映像による交響曲第一楽章。',
    descriptionEn:
      'HD, 5min. A symphonia played by the bustle of urban space and video noise — the first movement of a visual symphony.',
    color: '#2a2a38',
    imageUrl: '/works/video-symphonia.jpg',
    duration: '5 min',
  },

  // ── 2013 ──
  {
    id: 'hymne-a-xochipilli',
    titleJa: 'Hymne A Xochipilli / du Japon',
    titleEn: 'Hymne A Xochipilli / du Japon',
    year: 2013,
    medium: 'Video',
    cluster: 'Signal & Noise',
    descriptionJa:
      'HD、2分50秒。音響詩の朗読。レトリスムのモーリス・ルメートルへのオマージュ。日本からショチピリへの讃歌。',
    descriptionEn:
      'HD, 2min 50sec. A sonic poetry reading — homage to Maurice Lemaître of Lettrisme. A hymn to Xochipilli from Japan.',
    color: '#383028',
    imageUrl: '/works/hymne-a-xochipilli.jpg',
    duration: '2 min 50 sec',
  },

  // ── 2011 ──
  {
    id: 'tangram',
    titleJa: 'Tangram',
    titleEn: 'Tangram',
    year: 2011,
    medium: 'Video',
    cluster: 'Urban Space & Ruins',
    descriptionJa:
      'HD、3分11秒。3.11以前と以後に撮影されたフッテージをパズルのピースのように組み合わせた映像作品。',
    descriptionEn:
      'HD, 3min 11sec. Footage shot before and after 3.11 combined as puzzle pieces — a video tangram of rupture and reconstruction.',
    color: '#303030',
    imageUrl: '/works/tangram.jpg',
    duration: '3 min 11 sec',
  },

  // ── 2007 ──
  {
    id: 'living-in-the-box',
    titleJa: 'Living in the Box',
    titleEn: 'Living in the Box',
    year: 2007,
    medium: 'Video',
    cluster: 'Body & Double',
    descriptionJa:
      '白い箱の中に身体のパーツが標本のように展示されるビデオ作品（13分）。伊達麻衣子との協働。現代生活の身体的・心理的閉塞感を表現。',
    descriptionEn:
      'A video (13 min) displaying body parts as specimens in white boxes, in collaboration with Maiko Date. Expressing physical and psychological blockages in modern life.',
    color: '#202020',
    imageUrl: '/works/living-in-the-box.jpg',
    duration: '13 min',
    videoUrl: 'https://www.youtube.com/embed/be-tA7-yacA',
  },

  // ───────────────────────────────────────
  // ARCHIVE (1990s–2010s)
  // ───────────────────────────────────────
  {
    id: 'aircon-selfy',
    titleJa: 'Aircon Selfy',
    titleEn: 'Aircon Selfy',
    year: 2018,
    medium: 'Video',
    cluster: 'Archive',
    descriptionJa:
      'エアコンを被写体にしたセルフィー的映像作品。日常の機械と自己像の交錯。',
    descriptionEn:
      'A selfie-like video piece featuring an air conditioner as subject — the intersection of everyday machines and self-image.',
    color: '#2a3030',
    imageUrl: '/works/aircon-selfy.jpg',
  },
  {
    id: 'dakou',
    titleJa: 'Dakou',
    titleEn: 'Dakou',
    year: 2013,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '河口（Dakou）をテーマにしたインスタレーション。流れと堆積、通過と残留のあわいに生まれるイメージ。',
    descriptionEn:
      'An installation themed on the river mouth (Dakou) — images born at the threshold between flow and sedimentation, passage and residue.',
    color: '#284030',
    imageUrl: '/works/dakou.png',
  },
  {
    id: 'deception-time',
    titleJa: 'Deception Time',
    titleEn: 'Deception Time',
    year: 2011,
    medium: 'Video',
    cluster: 'Archive',
    descriptionJa:
      '欺瞞としての時間をテーマにした映像作品。時計と身体の不一致をめぐる視覚的探求。',
    descriptionEn:
      'A video work themed on time as deception — a visual investigation of the discrepancy between clock and body.',
    color: '#302828',
    imageUrl: '/works/deception-time.jpg',
  },
  {
    id: 'weltspiel',
    titleJa: 'Weltspiel',
    titleEn: 'Weltspiel',
    year: 2011,
    medium: 'Performance',
    cluster: 'Archive',
    descriptionJa:
      '世界劇場としてのパフォーマンス作品。都市を舞台に、身振りと映像が織りなすスペクタクル。',
    descriptionEn:
      'A performance piece as world-theater — a spectacle woven from gesture and image on the urban stage.',
    color: '#383030',
    imageUrl: '/works/weltspiel.jpg',
  },
  {
    id: 'carligraphy',
    titleJa: 'Carligraphy',
    titleEn: 'Carligraphy',
    year: 2011,
    medium: 'Performance',
    cluster: 'Archive',
    descriptionJa:
      '車（Car）と書（Calligraphy）をかけあわせたパフォーマンス。移動する車両による都市への書き込み。',
    descriptionEn:
      'A performance combining the car and calligraphy — inscribing the city through moving vehicles.',
    color: '#303030',
    imageUrl: '/works/carligraphy.png',
  },
  {
    id: 'bm7',
    titleJa: 'Bild:Muell#7',
    titleEn: 'Bild:Muell#7',
    year: 2011,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '「Bild:Muell（イメージの廃棄物）」シリーズ第7作。電子廃棄物と映像の融合によるインスタレーション。',
    descriptionEn:
      'The 7th work in the "Bild:Muell (Image Waste)" series. An installation fusing electronic waste and moving images.',
    color: '#383028',
    imageUrl: '/works/bm7.png',
  },
  {
    id: 'invitation-2010',
    titleJa: 'Invitation',
    titleEn: 'Invitation',
    year: 2010,
    medium: 'Exhibition',
    cluster: 'Archive',
    descriptionJa:
      '展覧会への招待状をモチーフにした作品。アートと観客をつなぐメディアとしての「招待」を問い直す。',
    descriptionEn:
      'A work using the exhibition invitation card as motif, questioning "invitation" as a medium connecting art and audience.',
    color: '#303840',
    imageUrl: '/works/invitation-2010.jpg',
  },
  {
    id: 'bm6',
    titleJa: 'Bild:Muell#6',
    titleEn: 'Bild:Muell#6',
    year: 2009,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '「Bild:Muell」シリーズ第6作。イメージの廃棄と再生をテーマにしたインスタレーション。',
    descriptionEn:
      'The 6th work in the "Bild:Muell" series. An installation on the discarding and regeneration of images.',
    color: '#353028',
    imageUrl: '/works/bm6.png',
  },
  {
    id: 'kannnawa',
    titleJa: 'Kannnawa',
    titleEn: 'Kannnawa',
    year: 2009,
    medium: 'Video',
    cluster: 'Archive',
    descriptionJa:
      '神縄（Kannnawa）——聖なる縄をめぐるビデオ作品。結界としての映像、映像としての結界。',
    descriptionEn:
      'Kannnawa (sacred rope) — a video work on the sacred boundary. Image as sacred border, sacred border as image.',
    color: '#383028',
    imageUrl: '/works/kannnawa.jpg',
  },
  {
    id: 'bm4',
    titleJa: 'Bild:Muell#4',
    titleEn: 'Bild:Muell#4',
    year: 2008,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '「Bild:Muell」シリーズ第4作。イメージの廃棄物がつくる新たな風景。',
    descriptionEn:
      'The 4th work in the "Bild:Muell" series. New landscapes formed by image waste.',
    color: '#382828',
    imageUrl: '/works/bm4.png',
  },
  {
    id: 'bm2',
    titleJa: 'Bild:Muell#2',
    titleEn: 'Bild:Muell#2',
    year: 2006,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '「Bild:Muell」シリーズ第2作。イメージと廃棄物の境界を探る初期インスタレーション。',
    descriptionEn:
      'The 2nd work in the "Bild:Muell" series. An early installation exploring the boundary between image and waste.',
    color: '#383028',
    imageUrl: '/works/bm2.png',
  },
  {
    id: 'bm1',
    titleJa: 'Bild:Muell#1',
    titleEn: 'Bild:Muell#1',
    year: 2006,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '「Bild:Muell（イメージの廃棄物）」シリーズ第1作。イメージが廃棄物となり、廃棄物がイメージとなる転換点。',
    descriptionEn:
      'The 1st work in the "Bild:Muell (Image Waste)" series. The turning point where images become waste and waste becomes image.',
    color: '#3a3028',
    imageUrl: '/works/bm1.jpg',
  },
  {
    id: 'corner-piece-2',
    titleJa: 'Corner Piece #2',
    titleEn: 'Corner Piece #2',
    year: 2002,
    medium: 'Installation',
    cluster: 'Archive',
    descriptionJa:
      '部屋の角（コーナー）を利用したインスタレーション。空間の境界に介入する初期のサイトスペシフィック作品。',
    descriptionEn:
      'An installation utilizing the corner of a room. An early site-specific work intervening at spatial boundaries.',
    color: '#303030',
    imageUrl: '/works/corner-piece-2.jpg',
  },

  // ───────────────────────────────────────
  // COLLABORATION / COMMISSION
  // ───────────────────────────────────────
  {
    id: 'e-uroboros',
    titleJa: 'E-Uroboros',
    titleEn: 'E-Uroboros',
    year: 2017,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      '電子のウロボロス——無限に循環するメディアの蛇。コラボレーションによる映像インスタレーション。',
    descriptionEn:
      'The electronic Ouroboros — the snake of media in infinite circulation. A collaborative video installation.',
    color: '#2a3830',
    imageUrl: '/works/e-uroboros.gif',
  },
  {
    id: 'musabi-collab',
    titleJa: '武蔵野美術大学共同プロジェクト',
    titleEn: 'Musashino Art University Collaboration',
    year: 2017,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      '武蔵野美術大学との共同プロジェクト。教育とアートの交差点における実践的コラボレーション。',
    descriptionEn:
      'A collaborative project with Musashino Art University. Practical collaboration at the intersection of education and art.',
    color: '#384030',
    imageUrl: '/works/musabi-collab.jpg',
  },
  {
    id: 'asagaya',
    titleJa: '阿佐ヶ谷プロジェクト',
    titleEn: 'Asagaya Project',
    year: 2015,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      '東京・阿佐ヶ谷を舞台にしたコミッションワーク。地域とアートの協働によるサイトスペシフィックプロジェクト。',
    descriptionEn:
      'A commission work staged in Asagaya, Tokyo. A site-specific project through collaboration between community and art.',
    color: '#3a3830',
    imageUrl: '/works/asagaya.jpg',
  },
  {
    id: 'ochanomizu',
    titleJa: '御茶ノ水コミッション',
    titleEn: 'Ochanomizu Commission',
    year: 2015,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      '御茶ノ水でのコミッションワーク。都市の記憶とイメージをテーマにした映像プロジェクト。',
    descriptionEn:
      'A commission in Ochanomizu, Tokyo. A video project themed on urban memory and image.',
    color: '#303840',
    imageUrl: '/works/ochanomizu.png',
  },
  {
    id: 'poping-town',
    titleJa: 'Poping Town',
    titleEn: 'Poping Town',
    year: 2010,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      'コミッションワーク。ポップする都市——弾けるイメージと空間の協働プロジェクト。',
    descriptionEn:
      'A commission work. Poping Town — a collaborative project of popping images and urban space.',
    color: '#403830',
    imageUrl: '/works/poping-town.png',
  },
  {
    id: '9001',
    titleJa: '9001',
    titleEn: '9001',
    year: 2010,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      'コミッションワーク。数字をめぐる映像と空間のコラボレーション。',
    descriptionEn:
      'A commission work. A collaboration of video and space around numbers.',
    color: '#383838',
    imageUrl: '/works/9001.png',
  },
  {
    id: 'samukawa',
    titleJa: '寒川コミッション',
    titleEn: 'Samukawa Commission',
    year: 2009,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      '神奈川県寒川でのコミッションワーク。地域の記憶と風景に介入する映像インスタレーション。',
    descriptionEn:
      'A commission in Samukawa, Kanagawa. A video installation intervening in local memory and landscape.',
    color: '#303838',
    imageUrl: '/works/samukawa.png',
  },
  {
    id: 'ko-op',
    titleJa: 'ko-OP',
    titleEn: 'ko-OP',
    year: 2009,
    medium: 'Collaboration',
    cluster: 'Collaboration',
    descriptionJa:
      '共同運営型のアートプロジェクト。協働（co-op）の形態そのものをテーマにした実験的試み。',
    descriptionEn:
      'A cooperative art project. An experimental attempt themed on the very form of co-operation.',
    color: '#383028',
    imageUrl: '/works/ko-op.jpg',
  },
];
