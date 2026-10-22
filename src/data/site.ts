import type { Founder, NavLinkItem } from '../types/content';

export const company = {
  name: 'Devrious',
  founded: 2024,
  logo: "/logo.png",
  email: 'info@devrious.lk',
  phoneDisplay: '+94 70 661 1936',
  phoneHref: 'tel:+94706611936',
  whatsappHref: 'https://wa.me/94706611936',
  addressLines: ['161/6, Old Kottawa Road', 'Navinna, Maharagama', 'Colombo, Sri Lanka'],
  mapEmbed:
    'https://www.google.com/maps?q=161%2F6%20Old%20Kottawa%20Road%2C%20Navinna%2C%20Maharagama%2C%20Sri%20Lanka&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=161%2F6%20Old%20Kottawa%20Road%2C%20Navinna%2C%20Maharagama%2C%20Sri%20Lanka'
};

export const socials = [
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/people/Devrious/61595451965097/' },
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/devrious_tech' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/devrious-solutions/' }] as
  const;

export const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/pre-builds', label: 'Pre Builds' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/cybersecurity-services', label: 'Cybersecurity services' },
  { to: '/about', label: 'About' }];


export const founders: Founder[] = [
  {
    name: 'Savindu Shiranjaya',
    role: 'Co-Founder',
    photo: "/Savindu.jpg",
    bio: 'Co-founded Devrious in 2024 to give growing businesses software that is engineered properly — built on a dependable stack, tested before it ships and supported after launch.'
  },
  {
    name: 'Rangana Munasinghe',
    role: 'Co-Founder',
    photo: "/Rangana.jpg",
    bio: 'Co-founded Devrious in 2024 with a focus on turning real operational problems into practical, maintainable systems that teams actually enjoy using.'
  }];


export const clientNames = [
  'Avenor Apparel',
  'Zevora Custom',
  'Sunrise Apartments',
  'Smart Metro Tech',
  'Smart Park n Fly'];