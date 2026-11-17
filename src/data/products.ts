import {
  BedDoubleIcon,
  DumbbellIcon,
  GraduationCapIcon,
  MegaphoneIcon,
  PillIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
  StoreIcon,
  TruckIcon,
  WarehouseIcon } from
'lucide-react';
import type { ProcessStep, Product, ProductCategory } from '../types/content';

export const productCategories: Array<'All' | ProductCategory> = ['All', 'POS', 'Management', 'ERP', 'Marketing', 'E-Commerce'];

export const products: Product[] = [
{
  slug: 'gym-pos-membership-system',
  name: 'Gym POS & Membership System',
  priceLkr: 120000,
  category: 'POS',
  icon: DumbbellIcon,
  summary: 'Point-of-sale and membership management in one system, built for gyms and fitness studios.',
  bestFor: 'Gyms & fitness studios'
},
{
  slug: 'pharmacy-pos-system',
  name: 'Pharmacy POS System',
  priceLkr: 85000,
  category: 'POS',
  icon: PillIcon,
  summary: 'A point-of-sale system designed around the counter of a pharmacy.',
  bestFor: 'Pharmacies'
},
{
  slug: 'tuition-institute-management-pos',
  name: 'Tuition Institute Management & POS',
  priceLkr: 95000,
  category: 'Management',
  icon: GraduationCapIcon,
  summary: 'Institute management and point-of-sale together, for tuition classes and education centres.',
  bestFor: 'Tuition institutes'
},
{
  slug: 'grocery-shop-pos',
  name: 'Grocery Shop POS',
  priceLkr: 85000,
  category: 'POS',
  icon: ShoppingBasketIcon,
  summary: 'A point-of-sale system sized for neighbourhood grocery shops.',
  bestFor: 'Grocery shops'
},
{
  slug: 'mid-level-supermarket-pos',
  name: 'Mid-Level Supermarket POS',
  priceLkr: 125000,
  category: 'POS',
  icon: ShoppingCartIcon,
  summary: 'A point-of-sale system for mid-level supermarkets with busier counters.',
  bestFor: 'Supermarkets'
},
{
  slug: 'erp-system',
  name: 'ERP System',
  priceLkr: 250000,
  category: 'ERP',
  icon: WarehouseIcon,
  summary: 'An enterprise resource planning system to run your operations from one place.',
  bestFor: 'Growing businesses'
},
{
  slug: 'hotel-management-system',
  name: 'Hotel Management System',
  priceLkr: 180000,
  category: 'Management',
  icon: BedDoubleIcon,
  summary: 'Management software for hotels and guest accommodation.',
  bestFor: 'Hotels & stays'
},
{
  slug: 'fleet-management-system',
  name: 'Fleet Management System',
  priceLkr: 120000,
  category: 'Management',
  icon: TruckIcon,
  summary: 'Management software for businesses running a fleet of vehicles.',
  bestFor: 'Fleet operators'
},
{
  slug: 'social-media-management-system',
  name: 'Social Media Management System',
  priceLkr: 125000,
  category: 'Marketing',
  icon: MegaphoneIcon,
  summary: 'Manage your social media presence from a single system.',
  bestFor: 'Brands & agencies'
},
{
  slug: 'flexcore-e-commerce-template',
  name: 'FlexCore E-Commerce Template',
  priceLkr: 75000,
  category: 'E-Commerce',
  icon: StoreIcon,
  summary: 'An e-commerce template to launch your online store faster.',
  bestFor: 'Online stores'
}];


export const preBuildSteps: ProcessStep[] = [
{ title: 'Request a demo', description: 'See the system working and ask anything about how it fits your business.' },
{ title: 'Tailor to your workflow', description: 'We configure the system around your workflow and branding.' },
{ title: 'Deploy in weeks', description: 'Go live in weeks, not months — with a one-time starting price.' }];