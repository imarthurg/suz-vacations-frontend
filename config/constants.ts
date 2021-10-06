import ChillImage from '../public/chill.png';

interface SuzModule {
  name: string;
  path: string;
  sticker: StaticImageData;
  stickerImgAlt: string;
  menuItems: Array<{
    name: string;
    path: string;
  }>;
}

const menuItems: SuzModule[] = [
  {
    name: 'Férias',
    path: '/vacations',
    sticker: ChillImage,
    stickerImgAlt: 'Cost chilling',
    menuItems: [
      {
        name: 'Módulo SUZ Férias',
        path: '',
      },
    ],
  },
];

export { menuItems };
