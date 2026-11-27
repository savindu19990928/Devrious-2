import type { Difference, FeaturedTestimonial, Industry, Principle, ShowcaseService } from '../types/content';

export const homeImages = {
  hero: "/26aaea80-a4e2-4a84-97f6-73f7a6ac4706.jpg",
  about: "/home-about-red.jpg",
  demo: "/99aa5152-cd01-4e6b-9d56-3aa927e5c512.jpg",
  work: "/7684d2df-3013-4b28-8e86-3033bcf76a4f.jpg",
  abstract: "/9397414e-1bd5-4ccc-9b3e-e1f38dd6593b.jpg",
  aiMedia: "/6ea8e966-7a29-49e1-862c-e99361faf03f.jpg",
  fashion: "/8b9ee339-45ac-4bcf-bba0-513250b6f5da.jpg",
  hospitality: "/home-hospitality-red.jpg",
  fitness: "/ce031581-7827-446a-8384-35b957ad3432.jpg",
  mobility: "/home-mobility-red.jpg"
};

export const aboutStatement =
'Devrious is a Colombo software studio. We design and build websites, business systems and AI tools — and we stay on after launch, because the work only matters if it keeps working for you.';

export const principles: Principle[] = [
{ title: 'Design-led', body: 'Every build starts with how your customers think, buy and come back.' },
{ title: 'Engineered to last', body: 'Documented, tested and deployed on cloud infrastructure you own.' },
{ title: 'Partners after launch', body: 'Changes turned around quickly, by the people who built it.' }];


export const showcaseServices: ShowcaseService[] = [
{
  number: '01',
  title: 'Website Design & Development',
  description: 'Editorial, search-ready websites that load fast on any phone and turn visits into complete enquiries.',
  image: homeImages.work,
  to: '/services/custom-web-development'
},
{
  number: '02',
  title: 'App Development',
  description: 'Mobile and web apps with considered interaction design, built on a stack you can grow with.',
  image: homeImages.demo,
  to: '/services'
},
{
  number: '03',
  title: 'Systems Development',
  description: 'Production, POS and ERP systems shaped around your workflow — from the factory floor to the front desk.',
  image: homeImages.fashion,
  to: '/services/custom-software-development'
},
{
  number: '04',
  title: 'IT Consulting',
  description: 'Cloud, infrastructure and security guidance from people who build and run systems every day.',
  image: homeImages.about,
  to: '/services'
},
{
  number: '05',
  title: 'AI Media',
  description: 'AI-assisted imagery, video and content pipelines that keep your brand consistent at scale.',
  image: homeImages.aiMedia,
  to: '/services'
},
{
  number: '06',
  title: 'Brand Identity',
  description: 'Logos, type systems and visual languages that hold together across every screen and surface.',
  image: homeImages.abstract,
  to: '/services'
}];


export const featuredTestimonials: FeaturedTestimonial[] = [
{
  quote:
  'They understood that Avenor had to feel corporate and trustworthy while Zevora needed movement and personality — and they delivered both without sacrificing speed.',
  name: 'Mr. Hirun Mansara',
  role: 'CEO',
  company: 'Avenor Apparel'
},
{
  quote:
  'Devrious gave Rising Sun Residences a website that guests actually use to reach us. Enquiries arrive clean and complete, and pages load fast on any phone.',
  name: 'Mr. Thiranda Athukorala',
  role: 'Owner',
  company: 'Rising Sun Residences'
},
{
  quote:
  'Devrious delivered a stable system on the cloud, documented it properly and kept us informed at every step.',
  name: 'Mr. Thushara Weerapperuma',
  role: 'Managing Director',
  company: 'Smart Metro Tech'
}];


export const differences: Difference[] = [
{
  topic: 'Design',
  typical: 'A theme with your logo swapped in',
  devrious: 'Designed around how your customers actually buy'
},
{
  topic: 'Scope',
  typical: 'Separate vendors for site, software and hosting',
  devrious: 'Software and infrastructure under one roof'
},
{
  topic: 'Performance',
  typical: 'Heavy pages that stall on mobile data',
  devrious: 'Fast on any phone, measured in Search Console'
},
{
  topic: 'Handover',
  typical: 'A zip file and a goodbye',
  devrious: 'Documented systems your team can run'
},
{
  topic: 'After launch',
  typical: 'Tickets that wait in a queue',
  devrious: 'Changes turned around by the people who built it'
}];


export const industries: Industry[] = [
{
  name: 'Fashion',
  clients: 'Avenor Apparel · Zevora Custom',
  description: 'Brand websites and the production system an apparel factory floor runs on.',
  image: homeImages.fashion
},
{
  name: 'Hospitality',
  clients: 'Rising Sun Residences',
  description: 'Booking-ready sites that turn guest visits into clean, complete enquiries.',
  image: homeImages.hospitality
},
{
  name: 'Fitness',
  clients: 'Gym POS & membership',
  description: 'Memberships, check-ins and payments handled in one ready-to-deploy system.',
  image: homeImages.fitness
},
{
  name: 'Mobility',
  clients: 'Smart Park n Fly · Smart Metro Tech',
  description: 'Stable cloud systems for operations that cannot afford downtime.',
  image: homeImages.mobility
}];