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
{ label: 'Cyber Security Services', to: '/cyber-security' },
{ label: 'Pre Builts', to: '/pre-builts' },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'About', to: '/about' },
{ label: 'Contact', to: '/contact' }];


export const stats: Stat[] = [
{ value: '2024', label: 'Founded in Colombo', detail: 'Software company · Colombo, Sri Lanka', countTo: 2024 },
{ value: String(products.length), label: 'Ready-to-deploy systems', detail: 'POS, ERP, CMS, management & e-commerce', countTo: products.length },
{ value: 'LK & UK', label: 'Clients served', detail: 'From Maharagama to the United Kingdom' }];


export const clients: string[] = [
'Arrow Ventures',
'Universal Tool Depot',
'Thilaka Ayurveda',
'Avenor Apparel',
'Zevora Custom',
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
  company: 'Sunrise Residencies',
  quote:
  'Devrious built our Accommodation Management System from the ground up, replacing scattered spreadsheets with one structured platform for rooms, tenants, rental agreements, payments and live occupancy. It cut down manual administrative work immediately and gave us clear control over every unit.'
},
{
  name: 'Mr. Thushara Weerapperuma',
  role: 'Managing Director',
  company: 'Smart Metro Tech',
  quote:
  'We needed a dependable REST API platform so every field bus ticketing machine could authenticate cleanly and sync updated route schedules automatically. Devrious delivered the software and cloud architecture cleanly, documented it thoroughly, and built a foundation ready for future card payments.'
},
{
  name: 'Mr. Tharindu Jayathilaka',
  role: 'Owner',
  company: 'Thilaka Ayurveda',
  quote:
  'Devrious captured decades of our Ruwanwella Ayurvedic heritage in a warm, fast digital catalogue that reflects who we have been since 1982. Customers can now browse our herbal products clearly on any phone and reach our shop effortlessly before visiting in person.'
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
{ label: 'Cyber Security Services', to: '/cyber-security' },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'Contact', to: '/contact' }];


export const legalLinks: NavLink[] = [
{ label: 'Refund Policy', to: '/legal/refund-policy' },
{ label: 'Privacy Policy', to: '/legal/privacy-policy' },
{ label: 'Terms & Conditions', to: '/legal/terms-and-conditions' },
{ label: 'Cookie Policy', to: '/legal/cookie-policy' }];