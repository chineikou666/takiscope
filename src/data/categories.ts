export interface Category {
  id: string;
  nameJa: string;
  nameEn: string;
  descriptionJa: string;
  descriptionEn: string;
  imageUrl: string;
  medium: string;
}

export const categories: Category[] = [
  {
    id: 'exhibition',
    nameJa: '展示',
    nameEn: 'Exhibition',
    descriptionJa: 'コラージュ作品とアートオブジェクト',
    descriptionEn: 'Recent collage pieces and art object pieces.',
    imageUrl:
      'https://static.wixstatic.com/media/e11151_00778007cf31484183d6cfa6ad9a846f~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/e11151_00778007cf31484183d6cfa6ad9a846f~mv2.jpg',
    medium: 'Exhibition',
  },
  {
    id: 'installation',
    nameJa: '装置',
    nameEn: 'Installation',
    descriptionJa: 'サイトスペシフィック・インスタレーション',
    descriptionEn: 'Site Specific installation pieces.',
    imageUrl:
      'https://static.wixstatic.com/media/e11151_036b984fb325496dae308ef0f9dd3c81~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/e11151_036b984fb325496dae308ef0f9dd3c81~mv2.jpg',
    medium: 'Installation',
  },
  {
    id: 'video',
    nameJa: '映像',
    nameEn: 'Video',
    descriptionJa: 'シングルチャンネル・ビデオ作品',
    descriptionEn: 'Single channel video pieces.',
    imageUrl:
      'https://static.wixstatic.com/media/e11151_cfccb829f79049c59073b16182192e19~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/e11151_cfccb829f79049c59073b16182192e19~mv2.jpg',
    medium: 'Video',
  },
  {
    id: 'performance',
    nameJa: '表演',
    nameEn: 'Performance',
    descriptionJa: 'ライブパフォーマンスと野外投影作品',
    descriptionEn: 'Live performances and open air projection pieces.',
    imageUrl:
      'https://static.wixstatic.com/media/e11151_61c155c862f14d439aea553a7a367c6c~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/e11151_61c155c862f14d439aea553a7a367c6c~mv2.jpg',
    medium: 'Performance',
  },
];
