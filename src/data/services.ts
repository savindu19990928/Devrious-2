export type ServiceVariant = 'products' | 'web' | 'ai' | 'systems' | 'engineering';

export type Service = {
  num: string;
  title: string;
  blurb: string;
  items: string[];
  variant: ServiceVariant;
};

export const SERVICES: Service[] = [
{
  num: '01',
  title: 'Digital Products',
  blurb:
  'Custom software and platforms designed around real business workflows.',
  items: [
  'Business Management Systems',
  'SaaS Platforms',
  'Enterprise Applications',
  'Internal Tools',
  'Custom Web Applications'],

  variant: 'products'
},
{
  num: '02',
  title: 'Websites & Digital Experiences',
  blurb:
  'Websites that combine strong brand identity with useful digital experiences.',
  items: [
  'Corporate Websites',
  'E-commerce',
  'Web Platforms',
  'Landing Pages',
  'UX/UI Design'],

  variant: 'web'
},
{
  num: '03',
  title: 'AI Systems',
  blurb: 'Practical AI built around business problems.',
  items: [
  'AI Automation',
  'AI Assistants',
  'AI-Powered Platforms',
  'Document Intelligence',
  'AI Content Systems',
  'Intelligent Business Workflows'],

  variant: 'ai'
},
{
  num: '04',
  title: 'Business Systems',
  blurb:
  'Connect the parts of the business that currently work separately.',
  items: [
  'Employee Management',
  'Finance Systems',
  'Inventory',
  'CRM',
  'POS',
  'Operations Platforms',
  'Custom Integrations'],

  variant: 'systems'
},
{
  num: '05',
  title: 'Product Engineering',
  blurb: 'From early concept to production-ready product.',
  items: [
  'Product Strategy',
  'UX/UI',
  'MVP Development',
  'Full-stack Development',
  'Cloud Infrastructure',
  'Maintenance & Evolution'],

  variant: 'engineering'
}];