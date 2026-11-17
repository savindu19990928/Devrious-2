import type { DemoOrder, DemoProduct, DemoTab } from '../types/content';
import { homeImages } from './home';

export const demoTabs: DemoTab[] = [
{ id: 'website', title: 'Brand website', description: 'Switch the art direction live.', url: 'zevora.lk' },
{ id: 'store', title: 'Online store', description: 'Add items and watch the cart update.', url: 'shop.avenor.lk' },
{ id: 'system', title: 'Production system', description: 'Move orders through the factory floor.', url: 'ops.avenor.lk' }];


export const demoProducts: DemoProduct[] = [
{ id: 'p1', name: 'Tailored wool overshirt', tag: 'Atelier', priceLkr: 18500, image: homeImages.fashion },
{ id: 'p2', name: 'Weekend stay, two nights', tag: 'Stays', priceLkr: 42000, image: homeImages.hospitality },
{ id: 'p3', name: 'Personal training pack', tag: 'Fitness', priceLkr: 24000, image: homeImages.fitness }];


export const demoStages: string[] = ['Cutting', 'Sewing', 'Quality check', 'Dispatch'];

export const demoOrders: DemoOrder[] = [
{ id: 'AV-2041', client: 'Avenor Apparel', item: '240 × Polo shirts', stage: 1 },
{ id: 'ZV-0388', client: 'Zevora Custom', item: '60 × Team jerseys', stage: 0 },
{ id: 'AV-2037', client: 'Avenor Apparel', item: '120 × Linen trousers', stage: 2 },
{ id: 'ZV-0381', client: 'Zevora Custom', item: '35 × Hoodies', stage: 3 }];