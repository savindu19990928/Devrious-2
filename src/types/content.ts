import type { LucideIcon } from 'lucide-react';

export type Currency = 'LKR' | 'USD';

export type Accent = 'brand' | 'violet' | 'jade';

export interface NavLink {
  label: string;
  to: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
  countTo?: number;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  clientRep?: string;
  industry?: string;
  category: string;
  type: string;
  brief: string;
  description?: string;
  statusNote?: string;
  confidentialUi?: boolean;
  url?: string;
  image: string;
  desktopImage: string;
  desktopVideo?: string;
  mobileImage?: string;
  tags: string[];
  challenge: string;
  approach: string;
  highlights: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
  image: string;
  overview: string;
  features: string[];
  benefits: string[];
  technologies: string[];
}

export type ProductCategory = 'POS' | 'Management' | 'ERP' | 'CMS' | 'Marketing' | 'E-Commerce';

export interface Product {
  slug: string;
  name: string;
  priceLkr: number;
  category: ProductCategory;
  icon: LucideIcon;
  image: string;
  summary: string;
  bestFor: string;
  features: string[];
}

export interface SharedPlatformFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TechItem {
  name: string;
  mark: string;
}

export interface TechGroup {
  title: string;
  items: TechItem[];
}

export interface TimelineItem {
  marker: string;
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  body: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ShowcaseService {
  number: string;
  title: string;
  description: string;
  image: string;
  to: string;
}

export interface Principle {
  title: string;
  body: string;
}

export interface Difference {
  topic: string;
  typical: string;
  devrious: string;
}

export interface Industry {
  name: string;
  clients: string;
  description: string;
  image: string;
}

export interface FeaturedTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export type DemoTabId = 'website' | 'store' | 'system';

export interface DemoTab {
  id: DemoTabId;
  title: string;
  description: string;
  url: string;
}

export interface DemoProduct {
  id: string;
  name: string;
  tag: string;
  priceLkr: number;
  image: string;
}

export interface DemoOrder {
  id: string;
  client: string;
  item: string;
  stage: number;
}
