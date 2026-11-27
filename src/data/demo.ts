import type { DemoOrder, DemoSitePreview, DemoTab } from '../types/content';

export const demoTabs: DemoTab[] = [
  { id: 'website', title: 'Brand website', description: 'Real brand sites we designed and shipped.', url: 'zevoracustom.lk' },
  { id: 'store', title: 'Online store', description: 'Real e-commerce shops built to convert.', url: 'universaltooldepot.lk' },
  { id: 'system', title: 'Production system', description: 'Move orders through the factory floor.', url: 'ops.avenor.lk' }
];

export const demoBrandSites: DemoSitePreview[] = [
  {
    slug: 'zevora-custom',
    name: 'Zevora Custom',
    category: 'Brand Website & Quote System',
    url: 'https://zevoracustom.lk/',
    host: 'zevoracustom.lk',
    desktopImage: '/projects/zevora-desktop.png',
    mobileImage: '/projects/zevora-mobile.png'
  },
  {
    slug: 'avenor-apparel',
    name: 'Avenor Apparel',
    category: 'Corporate Website',
    url: 'https://avenorapparel.lk/',
    host: 'avenorapparel.lk',
    desktopImage: '/projects/avenor-desktop.png',
    mobileImage: '/projects/avenor-mobile.png'
  },
  {
    slug: 'thilaka-ayurveda',
    name: 'Thilaka Ayurveda',
    category: 'Heritage Brand Website',
    url: 'https://www.thilakaayurveda.lk/',
    host: 'thilakaayurveda.lk',
    desktopImage: '/projects/thilaka-ayurveda-desktop.jpg',
    mobileImage: '/projects/thilaka-ayurveda-mobile.jpg'
  }
];

export const demoStoreSites: DemoSitePreview[] = [
  {
    slug: 'universal-tool-depot',
    name: 'Universal Tool Depot',
    category: 'E-Commerce & Equipment Rental',
    url: 'https://www.universaltooldepot.lk/',
    host: 'universaltooldepot.lk',
    desktopImage: '/projects/universal-tool-depot-desktop.png',
    mobileImage: '/projects/universal-tool-depot-mobile.png'
  },
  {
    slug: 'arrow-ventures',
    name: 'Arrow Ventures',
    category: 'Electric Mobility E-Commerce',
    url: 'https://www.arrowventures.lk/',
    host: 'arrowventures.lk',
    desktopImage: '/projects/arrow-ventures-desktop.jpg',
    mobileImage: '/projects/arrow-ventures-mobile.png'
  }
];

export const demoStages: string[] = ['Cutting', 'Sewing', 'Quality check', 'Dispatch'];

export const demoOrders: DemoOrder[] = [
  { id: 'AV-2041', client: 'Avenor Apparel', item: '240 × Polo shirts', stage: 1 },
  { id: 'ZV-0388', client: 'Zevora Custom', item: '60 × Team jerseys', stage: 0 },
  { id: 'AV-2037', client: 'Avenor Apparel', item: '120 × Linen trousers', stage: 2 },
  { id: 'ZV-0381', client: 'Zevora Custom', item: '35 × Hoodies', stage: 3 }
];
