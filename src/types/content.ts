import type { LucideIcon } from 'lucide-react';

export type Currency = 'LKR' | 'USD';

export interface NavLinkItem {
  to: string;
  label: string;
  end?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  photo: string | null;
  bio: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  name: string;
  summary: string;
  description: string;
  includes: string[];
  priceLKR: number;
}

export type PreBuildFamily = 'pos' | 'business' | 'commerce';

export interface PreBuildStep {
  title: string;
  description: string;
}

export interface PreBuild {
  slug: string;
  icon: LucideIcon;
  family: PreBuildFamily;
  category: string;
  name: string;
  tagline: string;
  summary: string;
  overview: string[];
  idealFor: string[];
  modules: PreBuildStep[];
  workflow: PreBuildStep[];
  included: string[];
  deployment: string[];
  priceLKR: number;
  endsInNine?: boolean;
  liveUrl?: string;
  screenshot?: string;
  screenshotFallback?: string;
  stack?: string[];
}

export type ProjectStatus = 'live' | 'retired' | 'internal' | 'product';

export interface Project {
  id: string;
  name: string;
  client: string;
  type: string;
  status: ProjectStatus;
  url?: string;
  screenshot?: string;
  screenshotFallback?: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  stack: string[];
  testimonialId?: string;
  internalLink?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  projects: string[];
}

export interface CyberPackage {
  id: string;
  name: string;
  description: string;
  priceLKR: number;
  includes: string[];
  featured?: boolean;
}

export interface TechGroup {
  category: string;
  tools: string[];
}

export interface LegalListItem {
  label?: string;
  text: string;
}

export interface LegalSubSection {
  heading: string;
  paragraphs?: string[];
  list?: LegalListItem[];
  after?: string[];
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: LegalListItem[];
  after?: string[];
  subsections?: LegalSubSection[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}