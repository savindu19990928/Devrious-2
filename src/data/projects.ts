import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'avenor-apparel',
    name: 'Avenor Apparel',
    client: 'Avenor Apparel (Pvt) Ltd',
    type: 'Corporate website',
    status: 'live',
    url: 'https://avenorapparel.lk/',
    screenshot: "/screenshot_of_avenorapparel.png",
    summary:
      'Corporate website for Avenor Apparel (Pvt) Ltd — the parent company behind Zevora Custom, Gemora Clothing and Masha.Ts — presenting promotional apparel, custom T-shirts and retail collections under one standard of quality.',
    challenges: [
      'The client required the site to feel unmistakably professional — closer to a corporate group than a fashion store.',
      'Three distinct brands had to sit under one parent identity without competing with each other.',
      'Enquiries needed to reach the sales team fast, with WhatsApp as a primary channel for Sri Lankan buyers.'],

    solutions: [
      'A restrained navy-and-gold editorial design with serif headlines, generous spacing and minimal motion.',
      'A “three brands, one standard” structure that gives each brand its own entry point while the group stays in charge.',
      'Persistent WhatsApp and contact actions, plus SEO groundwork with Google Search Console and SEMrush.'],

    stack: ['React JS', 'Django DRF', 'MySQL', 'Cloudflare', 'Search Console', 'SEMrush'],
    testimonialId: 'hirun-mansara'
  },
  {
    id: 'zevora-custom',
    name: 'Zevora Custom',
    client: 'Avenor Apparel (Pvt) Ltd',
    type: 'Brand website & quote system',
    status: 'live',
    url: 'https://zevoracustom.lk/',
    screenshot: "/screenshot_of_zevoracustom.png",
    summary:
      'Website for Zevora Custom, Avenor Apparel’s custom promotional T-shirt brand serving businesses, events and teams — from a single team kit to ten-thousand-piece campaigns, every order quoted personally.',
    challenges: [
      'The client wanted a rich, animation-heavy experience — animated hero slides, reveals and motion across the site.',
      'All of that motion had to stay smooth on the mid-range Android phones most of their buyers use.',
      'Orders are quoted personally, so the site had to drive quote requests rather than an online checkout.'],

    solutions: [
      'Choreographed animations built on GPU-friendly transforms, automatically reduced for visitors who prefer less motion.',
      'Lazy-loaded media, optimised imagery and Cloudflare caching to keep load times low.',
      'A catalogue that flows into a structured “Request for Quote” form and an always-visible WhatsApp button.'],

    stack: ['React JS', 'Django DRF', 'MySQL', 'Cloudflare', 'Search Console', 'SEMrush'],
    testimonialId: 'hirun-mansara'
  },
  {
    id: 'clothing-production-system',
    name: 'Clothing Production Management System',
    client: 'Avenor Apparel (Pvt) Ltd',
    type: 'Internal production platform',
    status: 'internal',
    summary:
      'An internal system that tracks every garment order across Avenor Apparel’s brands — from intake and material planning through cutting, printing, sewing, quality control and dispatch.',
    challenges: [
      'Orders moved through cutting, printing, sewing, QC and dispatch with no single source of truth.',
      'Three brands share one production floor, with order sizes ranging from one team kit to ten thousand tees.',
      'Floor staff needed something fast and simple enough to use in the middle of a shift.'],

    solutions: [
      'Stage-by-stage order tracking with live status and bottleneck views for management.',
      'Brand-aware order intake, material planning and a capacity view across the floor.',
      'Large, role-based screens for floor staff, verified end-to-end with PyTest and Selenium.'],

    stack: ['React JS', 'Django DRF', 'MySQL', 'PyTest', 'Selenium'],
    testimonialId: 'hirun-mansara'
  },
  {
    id: 'sunrise-accommodation',
    name: 'Accommodation Management System',
    client: 'Sunrise Apartments',
    type: 'Property management system',
    status: 'internal',
    summary:
      'A management system for Sunrise Apartments covering reservations, availability, guest records, billing and housekeeping — accessible to the owner from anywhere.',
    challenges: [
      'Bookings, guest details and payments were scattered across notebooks and spreadsheets.',
      'Short stays and long-term rentals needed different pricing and billing rules.',
      'Staff with little technical experience had to adopt the system immediately.'],

    solutions: [
      'A visual availability calendar with check-in, check-out and guest history in one place.',
      'Flexible rate plans and automatic invoicing for nightly, weekly and monthly stays.',
      'A simple role-based interface plus on-site training for every staff member.'],

    stack: ['React JS', 'Django DRF', 'MySQL'],
    testimonialId: 'thiranda-kariyawasam'
  },
  {
    id: 'smart-metro-ticketing',
    name: 'Bus Ticketing Machine Software',
    client: 'Smart Metro Tech',
    type: 'Embedded & back-office software',
    status: 'internal',
    summary:
      'Software for handheld bus ticketing machines — fare calculation, ticket printing and conductor shifts — with a back office that reconciles every transaction.',
    challenges: [
      'Ticketing machines must keep working without network coverage along the route.',
      'Integration with thermal printers and handheld hardware with limited resources.',
      'Fare stages and every transaction had to reconcile exactly with the back office.'],

    solutions: [
      'Offline-first local storage that syncs automatically once a connection is available.',
      'Lightweight, hardware-specific print handling tested on the actual devices.',
      'A central Django DRF API with shift-level reconciliation reports.'],

    stack: ['Django DRF', 'MySQL', 'REST API', 'PyTest'],
    testimonialId: 'thushara-weerapperuma'
  },
  {
    id: 'smart-park-n-fly',
    name: 'Smart Park n Fly',
    client: 'Smart Park n Fly (UK)',
    type: 'Airport parking booking platform',
    status: 'retired',
    summary:
      'A booking platform that let the client rent out parking slots at the airport parking terminals he owned. Travellers could check availability and reserve a space online. The site has since been taken offline at the client’s request.',
    challenges: [
      'Slot availability had to stay accurate under simultaneous bookings — a double-booked space was unacceptable.',
      'Pricing and availability depended on drop-off and return dates, times and UK time zones.',
      'Serving UK customers from Sri Lanka, with UK-standard expectations for payments and privacy.'],

    solutions: [
      'Transaction-safe slot reservations in Django and MySQL with temporary holds that expire.',
      'Date-and-time-aware pricing and availability logic tested against edge cases.',
      'A secure checkout flow with Cloudflare protection in front of the application.'],

    stack: ['React JS', 'Django DRF', 'MySQL', 'Cloudflare']
  },
  {
    id: 'flexcore',
    name: 'FlexCore',
    client: 'Devrious (in-house product)',
    type: 'E-commerce template',
    status: 'product',
    url: 'https://flexcore.devrious.lk/',
    screenshot: "/screenshot_of_flexcore.png",
    screenshotFallback: "/f05d0525-6f47-4436-92a0-707edd555787.png",
    summary:
      'Our ready-to-launch e-commerce template with catalogue, deals, pre-orders, order tracking and warranty — available to purchase and brand as your own store.',
    challenges: [],
    solutions: [],
    stack: ['React JS', 'Django DRF', 'MySQL'],
    internalLink: '/pre-builds/flexcore-ecommerce'
  }];