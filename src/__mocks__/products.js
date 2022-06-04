import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'This a stable Elink token, equivalent to Nigerian naira.',
    media: '/static/images/products/naija.jpg',
    title: 'NGNE',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'This a stable Elink token, equivalent to United State USD.',
    media: '/static/images/products/usa.png',
    title: 'USDE',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'This a stable Elink token, equivalent to European Euro EUR.',
    media: '/static/images/products/eur.png',
    title: 'EURE',
    totalDownloads: '622'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'This a stable Elink token, equivalent to Ghana GHC.',
    media: '/static/images/products/gh.png',
    title: 'GHCE',
    totalDownloads: '780'
  },
  
];
