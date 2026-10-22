import {
  Building2Icon,
  DumbbellIcon,
  GraduationCapIcon,
  HotelIcon,
  PillIcon,
  Share2Icon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
  StoreIcon,
  TruckIcon
} from
  'lucide-react';
import type { PreBuild } from '../types/content';

export const preBuilds: PreBuild[] = [
  {
    slug: 'gym-pos',
    icon: DumbbellIcon,
    family: 'pos',
    category: 'Point of Sale',
    name: 'Gym POS & Membership System',
    tagline: 'Memberships, check-ins, payments and trainers — run from one front desk.',
    summary: 'Membership plans, QR check-ins, supplement sales and trainer schedules in one system.',
    overview: [
      'Built for fitness centres that are tired of chasing expired memberships and reconciling cash at the end of the day. Every member, plan, payment and visit is recorded in one place, so the front desk moves quickly and the owner sees exactly where revenue comes from.',
      'Sell supplements, drinks and merchandise from the same counter, schedule trainers and classes, and send renewal reminders automatically before a membership lapses.'],

    idealFor: ['Gyms and fitness centres', 'Functional training and CrossFit boxes', 'Yoga, dance and martial arts studios', 'Multi-branch fitness chains'],
    modules: [
      { title: 'Membership plans & renewals', description: 'Monthly, quarterly, annual and custom plans with freeze and transfer options.' },
      { title: 'QR / card check-in', description: 'Instant member check-in with live status — active, expiring or overdue.' },
      { title: 'Counter sales', description: 'Sell supplements, drinks and merchandise with stock tracking.' },
      { title: 'Trainer & class scheduling', description: 'Personal training sessions, class timetables and trainer commissions.' },
      { title: 'Payment reminders', description: 'Automatic SMS and email reminders before renewals are due.' },
      { title: 'Reports & dashboard', description: 'Daily revenue, active members, attendance peaks and churn.' }],

    workflow: [
      { title: 'Register', description: 'A new member is registered with photo, plan and payment in under two minutes.' },
      { title: 'Check in', description: 'Members scan a QR code or card at the desk; expired plans are flagged instantly.' },
      { title: 'Sell & renew', description: 'Renewals and counter sales are billed from the same screen.' },
      { title: 'Review', description: 'The owner reviews revenue, attendance and dues from the dashboard.' }],

    included: ['Installation and data migration', 'Staff training', 'Receipt printer and barcode scanner setup', '3 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)', 'On-premise server', 'Multi-branch with central dashboard'],
    priceLKR: 120000
  },
  {
    slug: 'pharmacy-pos',
    icon: PillIcon,
    family: 'pos',
    category: 'Point of Sale',
    name: 'Pharmacy POS System',
    tagline: 'Batch and expiry control, prescription records and fast barcode billing.',
    summary: 'Batch-wise stock, expiry alerts, supplier GRNs and prescription sales for pharmacies.',
    overview: [
      'Pharmacies carry thousands of items, many with short expiry windows and multiple batches. This system tracks stock at batch level, warns you before medicines expire and picks the right batch at the counter automatically.',
      'Purchase orders, goods received notes and supplier balances are handled in the same system, so stock, cost and profit always match.'],

    idealFor: ['Retail pharmacies', 'Pharmacy chains', 'Hospital and channelling-centre pharmacies', 'Medical and surgical stores'],
    modules: [
      { title: 'Batch & expiry tracking', description: 'FEFO stock selection with alerts for items nearing expiry.' },
      { title: 'Barcode billing', description: 'Fast billing with generic and brand-name search.' },
      { title: 'Prescription sales log', description: 'Record prescriptions, doctors and patients against each sale.' },
      { title: 'Purchasing & GRN', description: 'Purchase orders, goods received notes and supplier payments.' },
      { title: 'Low-stock alerts', description: 'Reorder levels per item with suggested purchase lists.' },
      { title: 'Sales & profit reports', description: 'Profit by item, supplier, category and cashier.' }],

    workflow: [
      { title: 'Receive stock', description: 'Goods are received against a purchase order with batch and expiry captured.' },
      { title: 'Bill', description: 'The cashier scans or searches; the oldest valid batch is used automatically.' },
      { title: 'Monitor', description: 'Expiry and low-stock alerts appear on the dashboard every morning.' },
      { title: 'Reorder', description: 'Suggested purchase orders are generated from sales velocity.' }],

    included: ['Installation and item master import', 'Staff training', 'Receipt printer and barcode scanner setup', '3 months of free support'],
    deployment: ['On-premise with offline billing', 'Cloud hosted (GCP, OCI or AWS)', 'Multi-branch with central stock'],
    priceLKR: 85000
  },
  {
    slug: 'tuition-institute-pos',
    icon: GraduationCapIcon,
    family: 'pos',
    category: 'Point of Sale',
    name: 'Tuition Institute Management & POS',
    tagline: 'Student registration, class fees, attendance and teacher payments in one place.',
    summary: 'Class fees, QR attendance, student ID cards and teacher payment calculations.',
    overview: [
      'Tuition institutes handle hundreds of students across many classes, each with monthly fees and different teachers. This system registers students, issues ID cards, collects fees at the counter and marks attendance with a quick QR scan.',
      'Teacher payments and institute shares are calculated automatically from collected fees, and parents can receive SMS updates for payments and attendance.'],

    idealFor: ['Tuition and education institutes', 'Language and IT training centres', 'Music and arts academies', 'Exam preparation classes'],
    modules: [
      { title: 'Student registration & ID cards', description: 'Student profiles with printable QR ID cards.' },
      { title: 'Class & batch management', description: 'Subjects, grades, halls and timetables per teacher.' },
      { title: 'Fee collection', description: 'Monthly and per-class fees with printed receipts and arrears tracking.' },
      { title: 'QR attendance', description: 'Scan-in attendance with daily class reports.' },
      { title: 'Teacher payments', description: 'Automatic teacher share and institute commission calculations.' },
      { title: 'Parent notifications', description: 'SMS alerts for payments, absences and announcements.' }],

    workflow: [
      { title: 'Enrol', description: 'Students are registered and assigned to classes with an ID card.' },
      { title: 'Collect fees', description: 'Fees are paid at the counter and receipts printed instantly.' },
      { title: 'Mark attendance', description: 'Students scan in at the hall door; unpaid students are flagged.' },
      { title: 'Settle', description: 'Teacher payments are calculated and settled at month end.' }],

    included: ['Installation and student data import', 'Staff training', 'ID card template design', '3 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)', 'On-premise server', 'Multi-branch with central reporting'],
    priceLKR: 95000
  },
  {
    slug: 'grocery-pos',
    icon: ShoppingBasketIcon,
    family: 'pos',
    category: 'Point of Sale',
    name: 'Grocery Shop POS',
    tagline: 'Fast, simple billing and stock control for neighbourhood grocery shops.',
    summary: 'Quick barcode and loose-item billing, customer credit book and daily cash-up.',
    overview: [
      'A straightforward POS designed for busy grocery counters. Bill packaged items by barcode and loose items by weight, keep track of customers who buy on credit and close the day with an accurate cash-up.',
      'Stock is updated with every sale, so you know what to reorder before the shelf is empty.'],

    idealFor: ['Grocery and convenience stores', 'Mini marts', 'Wholesale and retail shops', 'Vegetable and dry-goods stores'],
    modules: [
      { title: 'Barcode & loose-item billing', description: 'Scan packaged items or enter weights for loose goods.' },
      { title: 'Inventory & reorder', description: 'Live stock levels with reorder alerts.' },
      { title: 'Customer credit book', description: 'Track credit sales and payments per customer.' },
      { title: 'Supplier management', description: 'Purchases, returns and supplier balances.' },
      { title: 'Daily cash-up', description: 'Cash, card and credit totals reconciled each day.' },
      { title: 'Sales reports', description: 'Best sellers, slow movers and daily profit.' }],

    workflow: [
      { title: 'Stock in', description: 'Supplier deliveries update stock and cost prices.' },
      { title: 'Bill', description: 'Items are scanned or weighed and the receipt is printed.' },
      { title: 'Track credit', description: 'Credit sales are logged against the customer’s account.' },
      { title: 'Close the day', description: 'The cash-up report shows exactly what should be in the drawer.' }],

    included: ['Installation and item import', 'Staff training', 'Printer, scanner and scale setup', '3 months of free support'],
    deployment: ['On-premise with offline billing', 'Cloud backup (GCP, OCI or AWS)'],
    priceLKR: 85000
  },
  {
    slug: 'supermarket-pos',
    icon: StoreIcon,
    family: 'pos',
    category: 'Point of Sale',
    name: 'Mid-Level Supermarket POS',
    tagline: 'Multi-counter billing, central stock, promotions and loyalty for growing supermarkets.',
    summary: 'Multiple counters, cashier shifts, promotions, loyalty points and branch reports.',
    overview: [
      'For supermarkets that have outgrown a single-counter POS. Run multiple checkout counters against one central inventory, manage cashier shifts and floats, and launch promotions and loyalty programmes without manual calculation.',
      'Purchasing, GRNs and supplier settlements are built in, and branch-level reporting gives management a clear view of performance.'],

    idealFor: ['Mid-sized supermarkets', 'Supermarket chains with 2–10 branches', 'Large convenience stores', 'Wholesale cash-and-carry'],
    modules: [
      { title: 'Multi-counter billing', description: 'Several checkouts sharing one live inventory, with offline fallback.' },
      { title: 'Cashier shift management', description: 'Opening floats, shift handovers and cashier-level reconciliation.' },
      { title: 'Promotions & discounts', description: 'Buy-X-get-Y, bundle, time-based and card-specific offers.' },
      { title: 'Loyalty programme', description: 'Points, tiers and redemption linked to customer phone numbers.' },
      { title: 'Purchasing & GRN', description: 'Purchase orders, goods received and supplier settlements.' },
      { title: 'Branch reporting', description: 'Sales, margins and stock movement by branch, category and supplier.' }],

    workflow: [
      { title: 'Open shift', description: 'Cashiers sign in with a float; every counter is tracked separately.' },
      { title: 'Checkout', description: 'Promotions and loyalty points are applied automatically at billing.' },
      { title: 'Replenish', description: 'Central stock triggers reorders and inter-branch transfers.' },
      { title: 'Report', description: 'Management reviews branch and category performance daily.' }],

    included: ['Installation across counters', 'Data migration from your old POS', 'Cashier and manager training', '3 months of free support'],
    deployment: ['On-premise server with offline counters', 'Cloud hosted (GCP, OCI or AWS)', 'Hybrid multi-branch'],
    priceLKR: 125000,
    endsInNine: true
  },
  {
    slug: 'erp-system',
    icon: Building2Icon,
    family: 'business',
    category: 'Enterprise',
    name: 'ERP System',
    tagline: 'Finance, inventory, procurement, sales and HR — one connected system for your business.',
    summary: 'Finance, inventory, procurement, sales, HR and production on one connected platform.',
    overview: [
      'Our ERP replaces disconnected spreadsheets and standalone tools with one system where every department works from the same data. A sale updates stock, stock drives procurement and every transaction flows into the accounts.',
      'Start with the modules you need today and switch on more as you grow. Role-based access and approval flows keep control where it belongs.'],

    idealFor: ['Manufacturers and distributors', 'Trading and import companies', 'Multi-department SMEs', 'Businesses replacing spreadsheets'],
    modules: [
      { title: 'Finance & accounting', description: 'General ledger, payables, receivables, bank reconciliation and tax.' },
      { title: 'Inventory & warehouse', description: 'Multi-location stock, transfers, batches and valuations.' },
      { title: 'Procurement', description: 'Requisitions, purchase orders, approvals and supplier performance.' },
      { title: 'Sales & CRM', description: 'Quotations, sales orders, invoicing and customer history.' },
      { title: 'HR & payroll', description: 'Employee records, leave, attendance, EPF/ETF and payroll.' },
      { title: 'Production planning', description: 'Bills of materials, work orders and production costing.' }],

    workflow: [
      { title: 'Quote & sell', description: 'Sales creates a quotation that converts into an order and invoice.' },
      { title: 'Fulfil', description: 'Inventory reserves stock or triggers production and procurement.' },
      { title: 'Approve & pay', description: 'Purchases follow approval rules and post to accounts payable.' },
      { title: 'Report', description: 'Management sees live P&L, cash flow and stock valuation.' }],

    included: ['Process mapping workshop', 'Data migration', 'Department-level training', '6 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)', 'Private on-premise server'],
    priceLKR: 250000,
    endsInNine: true
  },
  {
    slug: 'hotel-management',
    icon: HotelIcon,
    family: 'business',
    category: 'Hospitality',
    name: 'Hotel Management System',
    tagline: 'Reservations, front desk, housekeeping and guest billing for hotels and villas.',
    summary: 'Reservations, room status, housekeeping, restaurant billing and guest folios.',
    overview: [
      'From boutique villas to city hotels, this system runs the front desk: reservations, check-ins, room assignments and guest folios that collect every charge during the stay.',
      'Housekeeping sees live room status, the restaurant posts bills directly to rooms and a direct-booking engine lets guests reserve from your website without commission.'],

    idealFor: ['Hotels and resorts', 'Boutique villas and guest houses', 'Serviced apartments', 'Eco-lodges and holiday bungalows'],
    modules: [
      { title: 'Reservations & front desk', description: 'Booking calendar, check-in/out, deposits and room assignment.' },
      { title: 'Room & rate management', description: 'Room types, seasonal rates, meal plans and packages.' },
      { title: 'Housekeeping', description: 'Live room status, cleaning tasks and maintenance requests.' },
      { title: 'Restaurant & bar billing', description: 'F&B orders posted to guest rooms or settled directly.' },
      { title: 'Guest folios & invoicing', description: 'All charges in one folio with split bills and multiple currencies.' },
      { title: 'Direct booking engine', description: 'Commission-free bookings from your own website.' }],

    workflow: [
      { title: 'Book', description: 'Reservations arrive from your website, phone or walk-ins.' },
      { title: 'Check in', description: 'Guests are assigned a clean room and a folio is opened.' },
      { title: 'Stay', description: 'Restaurant, laundry and extras post to the folio automatically.' },
      { title: 'Check out', description: 'A clear invoice is issued and the room returns to housekeeping.' }],

    included: ['Installation and room setup', 'Front desk and housekeeping training', 'Booking engine on your website', '3 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)', 'On-premise server'],
    priceLKR: 180000,
    endsInNine: true
  },
  {
    slug: 'fleet-management',
    icon: TruckIcon,
    family: 'business',
    category: 'Logistics',
    name: 'Fleet Management System',
    tagline: 'Vehicles, drivers, trips, fuel and maintenance — under control in one dashboard.',
    summary: 'Vehicle registry, trip dispatch, fuel logs, maintenance schedules and cost reports.',
    overview: [
      'Know where every vehicle is, who is driving it and what it costs to run. The system keeps a complete record of each vehicle — licences, insurance, service history — and alerts you before anything expires.',
      'Dispatch trips, log fuel and expenses, and compare running costs per vehicle, route or driver to find savings.'],

    idealFor: ['Transport and logistics companies', 'Distribution and delivery fleets', 'Bus and tour operators', 'Companies with staff vehicles'],
    modules: [
      { title: 'Vehicle registry', description: 'Licences, insurance, emission tests and documents with expiry alerts.' },
      { title: 'Trip dispatch', description: 'Assign vehicles and drivers to trips and track progress.' },
      { title: 'Driver management', description: 'Driver profiles, licences, assignments and performance.' },
      { title: 'Fuel & expense logs', description: 'Fuel, tolls and expenses recorded per trip or vehicle.' },
      { title: 'Maintenance scheduling', description: 'Service reminders by mileage or date, with repair history.' },
      { title: 'GPS integration & reports', description: 'Connect existing GPS trackers; cost-per-km and utilisation reports.' }],

    workflow: [
      { title: 'Plan', description: 'A trip is created and the best available vehicle and driver assigned.' },
      { title: 'Run', description: 'The driver logs fuel and expenses while the trip is tracked.' },
      { title: 'Maintain', description: 'Mileage updates trigger service reminders automatically.' },
      { title: 'Analyse', description: 'Cost-per-vehicle and utilisation reports reveal savings.' }],

    included: ['Installation and vehicle data import', 'Admin and driver training', 'GPS tracker integration support', '3 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)', 'Mobile-friendly driver access'],
    priceLKR: 120000,
    endsInNine: true
  },
  {
    slug: 'social-media-management',
    icon: Share2Icon,
    family: 'business',
    category: 'Marketing',
    name: 'Social Media Management System',
    tagline: 'Plan, approve, schedule and measure social content across every account.',
    summary: 'Content calendar, approvals, multi-account scheduling and performance analytics.',
    overview: [
      'Built for agencies and in-house marketing teams managing several brands and channels. Plan posts on a shared calendar, route them through client or manager approval and schedule them to publish automatically.',
      'Separate workspaces keep each client’s accounts, assets and reports apart, and analytics show which content actually performs.'],

    idealFor: ['Digital marketing agencies', 'In-house marketing teams', 'Multi-brand companies', 'Freelance social media managers'],
    modules: [
      { title: 'Content calendar', description: 'Drag-and-drop planning across platforms and campaigns.' },
      { title: 'Multi-account scheduling', description: 'Schedule posts to multiple pages and profiles at once.' },
      { title: 'Approval workflows', description: 'Draft, review and approve with comments before publishing.' },
      { title: 'Client workspaces', description: 'Separate brands, assets, users and permissions per client.' },
      { title: 'Media library', description: 'Shared, tagged storage for images, videos and captions.' },
      { title: 'Analytics & reports', description: 'Reach, engagement and growth with exportable client reports.' }],

    workflow: [
      { title: 'Plan', description: 'The team drafts posts on the shared calendar.' },
      { title: 'Approve', description: 'Managers or clients review and approve with comments.' },
      { title: 'Publish', description: 'Approved posts go out automatically at the scheduled time.' },
      { title: 'Measure', description: 'Performance reports are generated per client and campaign.' }],

    included: ['Workspace and account setup', 'Team training', 'Branded client reports', '3 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)'],
    priceLKR: 125000
  },
  {
    slug: 'flexcore-ecommerce',
    icon: ShoppingCartIcon,
    family: 'commerce',
    category: 'E-Commerce',
    name: 'FlexCore E-Commerce Template',
    tagline: 'A complete, ready-to-brand online store — catalogue, deals, pre-orders and warranty built in.',
    summary: 'Ready-to-launch online store with deals, pre-orders, order tracking and warranty.',
    overview: [
      'FlexCore is our own e-commerce template, built on Django DRF, React JS and MySQL. It gives you a polished, fast storefront with everything a modern retailer needs — a categorised catalogue, deals, new arrivals, pre-orders, order tracking and warranty handling.',
      'Buy it, and we brand it as your own store, connect your payment gateway and deploy it to the cloud. Need something extra? FlexCore can be extended with custom features.'],

    idealFor: ['Electronics and gadget stores', 'Home, travel and lifestyle retailers', 'Beauty and personal-care brands', 'Retailers moving from social media to a real store'],
    modules: [
      { title: 'Catalogue & categories', description: 'Unlimited products, variants, brands and category navigation.' },
      { title: 'Search & filters', description: 'Fast search across products, brands and categories.' },
      { title: 'Cart & checkout', description: 'Guest and account checkout with payment-gateway integration.' },
      { title: 'Deals & pre-orders', description: 'Promotions, new arrivals and pre-orders with arrival dates.' },
      { title: 'Order tracking & warranty', description: 'Customers track orders and claim warranty online.' },
      { title: 'Admin dashboard', description: 'Manage products, orders, customers and content in one place.' }],

    workflow: [
      { title: 'Purchase', description: 'You choose FlexCore and share your brand, logo and colours.' },
      { title: 'Brand & configure', description: 'We apply your branding, set up payments and import products.' },
      { title: 'Launch', description: 'Your store goes live on GCP, OCI or AWS behind Cloudflare.' },
      { title: 'Grow', description: 'SEO setup with Search Console and SEMrush helps customers find you.' }],

    included: ['Branding with your logo and colours', 'Payment gateway integration', 'Product import (up to 200 items)', 'Deployment and SSL', '3 months of free support'],
    deployment: ['Cloud hosted (GCP, OCI or AWS)', 'Behind Cloudflare CDN'],
    priceLKR: 75000,
    endsInNine: true,
    liveUrl: 'https://flexcore.devrious.lk/',
    screenshot: "/screenshot_of_flexcore.png",
    screenshotFallback: "/f05d0525-6f47-4436-92a0-707edd555787.png",
    stack: ['Django DRF', 'React JS', 'MySQL']
  }];


export const preBuildGroups = [
  {
    family: 'pos',
    title: 'Point of Sale systems',
    description: 'Industry-specific POS systems, each designed around how that business actually sells.'
  },
  {
    family: 'business',
    title: 'Business management systems',
    description: 'Complete operational platforms for enterprises, hospitality, logistics and marketing teams.'
  }] as
  const;