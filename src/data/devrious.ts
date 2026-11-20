import type { NavLink, Stat, TechGroup, Testimonial } from '../types/content';
import { products } from './products';

export const contact = {
  phone: '+94 70 661 1936',
  phoneHref: 'tel:+94706611936',
  email: 'info@devrious.lk',
  emailHref: 'mailto:info@devrious.lk',
  whatsappHref: 'https://wa.me/94706611936',
  address: '161/6, Old Kottawa Road, Navinna, Maharagama, Colombo, Sri Lanka',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=161%2F6+Old+Kottawa+Road+Navinna+Maharagama'
};

export const navLinks: NavLink[] = [
{ label: 'Home', to: '/' },
{ label: 'Services', to: '/services' },
{ label: 'Pre Builts', to: '/pre-builts' },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'About', to: '/about' },
{ label: 'Contact', to: '/contact' }];


export const stats: Stat[] = [
{ value: '2024', label: 'Founded in Colombo', detail: 'Software company · Colombo, Sri Lanka', countTo: 2024 },
{ value: String(products.length), label: 'Ready-to-deploy systems', detail: 'POS, ERP, CMS, management & e-commerce', countTo: products.length },
{ value: 'LK & UK', label: 'Clients served', detail: 'From Maharagama to the United Kingdom' }];


export const clients: string[] = [
'Avenor Apparel',
'Zevora Custom',
'Universal Tool Depot',
'Arrow Ventures',
'Sunrise Residencies',
'Smart Metro Tech',
'Smart Part and Fly'];


export const testimonials: Testimonial[] = [
{
  name: 'Mr. Hirun Mansara',
  role: 'CEO',
  company: 'Avenor Apparel (Pvt) Ltd',
  quote:
  'Devrious built both of our websites — Avenor Apparel and Zevora Custom — and the clothing production management system our factory floor now runs on. They understood that Avenor had to feel corporate and trustworthy while Zevora needed movement and personality, and they delivered both without sacrificing speed. The production system finally gave us clear visibility of every order from cutting to dispatch. Responsive, honest and technically sharp — they are our long-term technology partner.'
},
{
  name: 'Mr. Thiranda Kariyawasam',
  role: 'Owner',
  company: 'Sunrise Apartments',
  quote:
  'Devrious gave Sunrise Apartments a website that guests actually use to reach us. Enquiries arrive clean and complete, pages load fast on any phone, and whenever we need a change they turn it around quickly.'
},
{
  name: 'Mr. Thushara Weerapperuma',
  role: 'Managing Director',
  company: 'Smart Metro Tech',
  quote:
  'We needed a partner who could handle both the software and the infrastructure behind it. Devrious delivered a stable system on the cloud, documented it properly and kept us informed at every step.'
}];


export const techGroups: TechGroup[] = [
{
  title: 'Build',
  items: [
  { name: 'Django REST Framework', mark: 'DRF' },
  { name: 'React JS', mark: 'Re' },
  { name: 'MySQL', mark: 'SQL' }]

},
{
  title: 'Cloud & edge',
  items: [
  { name: 'Google Cloud (GCP)', mark: 'GCP' },
  { name: 'Oracle Cloud (OCI)', mark: 'OCI' },
  { name: 'Amazon Web Services (AWS)', mark: 'AWS' },
  { name: 'Cloudflare', mark: 'CF' }]

},
{
  title: 'Search visibility',
  items: [
  { name: 'Google Search Console', mark: 'GSC' },
  { name: 'SEMrush', mark: 'SR' }]

},
{
  title: 'Testing',
  items: [
  { name: 'PyTest', mark: 'Py' },
  { name: 'Selenium', mark: 'Se' }]

}];


export const companyLinks: NavLink[] = [
{ label: 'About', to: '/about' },
{ label: 'Services', to: '/services' },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'Cybersecurity services', to: '/services' },
{ label: 'Contact', to: '/contact' }];


export const legalLinks: NavLink[] = [
{ label: 'Refund Policy', to: '/legal/refund-policy' },
{ label: 'Privacy Policy', to: '/legal/privacy-policy' },
{ label: 'Terms & Conditions', to: '/legal/terms-and-conditions' },
{ label: 'Cookie Policy', to: '/legal/cookie-policy' }];