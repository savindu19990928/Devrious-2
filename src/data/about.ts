import type { Pillar, TimelineItem } from '../types/content';
import { products } from './products';

export const pillars: Pillar[] = [
{
  title: 'Who we are',
  body: 'Devrious is a software company founded in Colombo, Sri Lanka in 2024. We are engineers and designers who care about how software feels to use and how well it is built underneath.'
},
{
  title: 'What we do',
  body: 'Custom websites, business software, APIs, AI assistants and AI systems, cybersecurity services — and a library of ready-made POS, ERP and management systems you can deploy in weeks, not months.'
},
{
  title: 'Our approach',
  body: 'One team for the whole job — design, engineering, testing, hosting and search visibility. We start with how your business actually works, then design and build around it.'
},
{
  title: 'Technology philosophy',
  body: 'Proven tools over passing trends. Django REST Framework, React and MySQL at the core, deployed on Google Cloud, Oracle Cloud, AWS and Cloudflare — chosen for stability and long life.'
},
{
  title: 'Commitment to quality',
  body: 'Software built properly: tested with PyTest and Selenium, documented, and delivered with honest communication at every step.'
},
{
  title: 'Our vision',
  body: 'To be the long-term technology partner businesses rely on — making well-engineered software and practical AI accessible to companies of every size.'
}];


export const timeline: TimelineItem[] = [
{
  marker: '2024',
  title: 'Founded in Colombo',
  description: 'Devrious starts as a software company in Colombo, Sri Lanka.'
},
{
  marker: 'Partner builds',
  title: 'Two brands, one client',
  description:
  'Websites for Avenor Apparel and Zevora Custom, and the clothing production management system Avenor’s factory floor runs on.'
},
{
  marker: 'Reach',
  title: 'Clients across LK & UK',
  description: 'Sunrise Apartments, Smart Metro Tech and Smart Park n Fly join our client list.'
},
{
  marker: 'Pre Builts',
  title: `${products.length} ready-to-deploy systems`,
  description: 'A library of POS, ERP, CMS, management and e-commerce systems businesses can deploy in weeks.'
},
{
  marker: 'Next',
  title: 'Practical AI for every business',
  description: 'AI assistants and AI systems that turn everyday business data into decisions.'
}];