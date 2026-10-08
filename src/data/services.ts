import { BotIcon, BrainCircuitIcon, CodeIcon, LayersIcon, PlugIcon } from 'lucide-react';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  id: 'custom-web-development',
  icon: CodeIcon,
  name: 'Custom Web Development',
  summary: 'Corporate websites, portals and web applications that load fast and rank well.',
  description:
  'From corporate websites to customer portals and full web applications, we build on React and Django DRF so your site is fast, secure and easy to grow. Every launch includes search-engine groundwork and Cloudflare protection.',
  includes: [
  'Responsive React front-end, designed for your brand',
  'Django DRF back-end with an admin you can manage yourself',
  'SEO setup with Google Search Console and SEMrush',
  'Cloudflare caching, SSL and DDoS protection',
  'Hosting on GCP, OCI or AWS'],

  priceLKR: 85000
},
{
  id: 'custom-software-development',
  icon: LayersIcon,
  name: 'Custom Software Development',
  summary: 'Business software shaped around how your team actually works.',
  description:
  'Internal tools, operational platforms and management systems designed after we map your real process — not a generic template. We handle discovery, design, development, testing and the training your staff need to adopt it.',
  includes: [
  'Requirements workshops and process mapping',
  'Role-based dashboards and approval flows',
  'Integration with your existing tools and data',
  'Automated testing with PyTest and Selenium',
  'Staff training and post-launch support'],

  priceLKR: 250000
},
{
  id: 'api-development',
  icon: PlugIcon,
  name: 'API Development',
  summary: 'Secure, documented APIs that connect apps, devices and partners.',
  description:
  'We design and build REST APIs that connect your mobile apps, hardware devices, payment gateways and partner systems — documented, versioned and tested for load and security.',
  includes: [
  'REST API design with Django DRF',
  'JWT / OAuth authentication and permissions',
  'Interactive API documentation',
  'Payment gateway and third-party integrations',
  'Load and security testing before release'],

  priceLKR: 60000
},
{
  id: 'ai-assistants',
  icon: BotIcon,
  name: 'AI Assistants & Tools',
  summary: 'Assistants that answer customers, draft content and automate routine work.',
  description:
  'Practical AI assistants trained on your own documents and data — answering customer questions on your website or WhatsApp, drafting content, summarising records and taking repetitive work off your team.',
  includes: [
  'Customer support chat assistants',
  'Knowledge-base assistants trained on your documents',
  'Content, email and document automation',
  'Website and WhatsApp integration',
  'Usage analytics and conversation review'],

  priceLKR: 120000
},
{
  id: 'ai-systems',
  icon: BrainCircuitIcon,
  name: 'AI Systems & AI Development',
  summary: 'End-to-end AI systems — prediction, recognition and intelligent automation.',
  description:
  'Any AI-related system your business needs: demand forecasting, image and document recognition, recommendation engines and intelligent automation, built into your operations with proper data pipelines and monitoring.',
  includes: [
  'Use-case discovery and feasibility assessment',
  'Data collection and preparation pipelines',
  'Model selection, integration and fine-tuning',
  'AI-powered dashboards and workflows',
  'Monitoring, evaluation and retraining plan'],

  priceLKR: 350000
}];


export const engagementSteps = [
{ title: 'Discover', description: 'We learn your business, users and goals, then agree scope, timeline and price in writing.' },
{ title: 'Design', description: 'Screens and data models are designed and approved before a line of production code.' },
{ title: 'Build', description: 'Development in short cycles with regular demos, so you see progress every week.' },
{ title: 'Test', description: 'Automated PyTest and Selenium suites plus manual QA on real devices.' },
{ title: 'Launch & support', description: 'Deployment to GCP, OCI or AWS behind Cloudflare, followed by training and support.' }];