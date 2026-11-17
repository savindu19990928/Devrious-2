import { BlocksIcon, BotIcon, BrainCircuitIcon, Code2Icon, NetworkIcon } from 'lucide-react';
import type { ProcessStep, Service } from '../types/content';

export const services: Service[] = [
{
  slug: 'custom-web-development',
  title: 'Custom Web Development',
  description: 'Fast, search-ready websites and web apps designed around how your customers actually buy.',
  icon: Code2Icon,
  accent: 'brand',
  overview:
  'Corporate websites, brand sites and web applications engineered for speed, search visibility and conversion. We map how your customers actually buy, design around that journey, and build it to load fast on any phone.',
  features: [
  'Responsive builds that load fast on any phone',
  'Search-ready structure and on-page SEO',
  'Content management your team can use',
  'Enquiry and quote flows that capture complete leads',
  'Cloud and edge hosting with Cloudflare'],

  benefits: [
  'More enquiries from the traffic you already have',
  'A site your team can update without waiting on a developer',
  'Visibility in search, measured in Google Search Console'],

  technologies: ['React JS', 'Django REST Framework', 'Cloudflare', 'Google Search Console', 'SEMrush']
},
{
  slug: 'custom-software-development',
  title: 'Custom Software Development',
  description: 'Business software built for your workflow — from the factory floor to the front desk.',
  icon: BlocksIcon,
  accent: 'violet',
  overview:
  'Software shaped around the way your business already works. We sit with your team, map the workflow end to end, and build systems that give everyone clear visibility — like the production management system an apparel factory floor now runs on.',
  features: [
  'Workflow mapping with the people who use it',
  'Role-based access for every team',
  'Live visibility of orders, stock and progress',
  'Reports and dashboards for decision-makers',
  'Cloud deployment with proper documentation'],

  benefits: [
  'Clear visibility of every order from start to finish',
  'Fewer spreadsheets and manual hand-offs',
  'Software that fits your process instead of fighting it'],

  technologies: ['Django REST Framework', 'React JS', 'MySQL', 'Amazon Web Services (AWS)', 'Google Cloud (GCP)', 'PyTest']
},
{
  slug: 'api-development',
  title: 'API Development',
  description: 'Secure, documented APIs that connect your systems, payment providers and partners.',
  icon: NetworkIcon,
  accent: 'jade',
  overview:
  'The connective tissue between your systems. We design and document APIs that let your software, payment providers and partners exchange data securely and reliably — and test them so they stay that way.',
  features: [
  'REST API design and clear documentation',
  'Payment provider integrations',
  'Authentication and access control',
  'Partner and third-party system integrations',
  'Automated testing on every release'],

  benefits: [
  'Systems that share data without manual re-entry',
  'Faster onboarding for partners and new tools',
  'Secure connections you can audit'],

  technologies: ['Django REST Framework', 'MySQL', 'Cloudflare', 'Oracle Cloud (OCI)', 'PyTest']
},
{
  slug: 'ai-assistants-and-tools',
  title: 'AI Assistants & Tools',
  description: 'Assistants and internal tools that answer customers and take repetitive work off your team.',
  icon: BotIcon,
  accent: 'brand',
  overview:
  'Practical AI that does real work. Customer-facing assistants that answer questions on your website, and internal tools that take repetitive tasks off your team — grounded in your own information and handing over to a person when it matters.',
  features: [
  'Customer-facing assistants for your website',
  'Internal tools that automate repetitive tasks',
  'Answers grounded in your own documents and FAQs',
  'Human hand-over for complex conversations',
  'Usage reporting so you see the impact'],

  benefits: [
  'Faster answers for customers, at any hour',
  'Hours returned to your team every week',
  'Consistent, on-brand responses'],

  technologies: ['Django REST Framework', 'React JS', 'Google Cloud (GCP)', 'Amazon Web Services (AWS)']
},
{
  slug: 'ai-systems-and-ai-development',
  title: 'AI Systems & AI Development',
  description: 'Custom AI pipelines that turn your own data into forecasts, automation and decisions.',
  icon: BrainCircuitIcon,
  accent: 'violet',
  overview:
  'Custom AI built on the data your business already produces. We design pipelines that clean and connect that data, then turn it into forecasts, automated decisions and insight your team can act on.',
  features: [
  'Data pipelines from your existing systems',
  'Forecasting models trained on your own data',
  'Automated, rule-aware decisioning',
  'Dashboards that explain the output',
  'Cloud deployment and monitoring'],

  benefits: [
  'Decisions grounded in your own numbers',
  'Earlier warning on demand and stock changes',
  'Automation that scales as you grow'],

  technologies: ['Django REST Framework', 'MySQL', 'Google Cloud (GCP)', 'Amazon Web Services (AWS)', 'PyTest']
}];


export const processSteps: ProcessStep[] = [
{ title: 'Discover', description: 'We learn how your business works and what success looks like.' },
{ title: 'Design', description: 'Flows and interfaces shaped around your users, reviewed with you.' },
{ title: 'Build & test', description: 'Engineered properly, tested with PyTest and Selenium before release.' },
{ title: 'Launch & support', description: 'Deployed to the cloud, documented, and supported after go-live.' }];