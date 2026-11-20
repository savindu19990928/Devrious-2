import {
  BarChart3Icon,
  BedDoubleIcon,
  BellRingIcon,
  Building2Icon,
  CloudIcon,
  DumbbellIcon,
  GraduationCapIcon,
  LayoutTemplateIcon,
  MegaphoneIcon,
  PillIcon,
  ReceiptTextIcon,
  Repeat2Icon,
  ShieldCheckIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
  StoreIcon,
  TruckIcon,
  WarehouseIcon
} from 'lucide-react';
import type { ProcessStep, Product, ProductCategory, SharedPlatformFeature } from '../types/content';

export const productCategories: Array<'All' | ProductCategory> = ['All', 'POS', 'Management', 'ERP', 'CMS', 'Marketing', 'E-Commerce'];

export const sharedPreBuildFeatures: SharedPlatformFeature[] = [
  {
    title: 'Role-Based User Management',
    description: 'Granular permissions per role (owner, branch manager, cashier, staff) with individual logins and protected actions.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Multi-Branch Management',
    description: 'Run multiple outlets, counters, or depots from one central dashboard with branch-level stock and consolidated totals.',
    icon: Building2Icon
  },
  {
    title: 'Real-Time Analytics & Reports',
    description: 'Live revenue, margin, shift reconciliation, and exportable PDF & Excel reports filtered by date, staff, or branch.',
    icon: BarChart3Icon
  },
  {
    title: 'Invoicing, Tax & Split Payments',
    description: 'Thermal receipts, A4 tax invoices, multi-method payments (cash, card, transfer), discounts, and WhatsApp/email receipts.',
    icon: ReceiptTextIcon
  },
  {
    title: 'Cloud Backups & Audit Trails',
    description: 'Automated daily backups, encrypted storage, and full user activity logs tracking every edit, refund, or void.',
    icon: CloudIcon
  },
  {
    title: 'Smart Alerts & Notifications',
    description: 'Proactive warnings for low stock, expiring items, upcoming renewals, or overdue returns before bottlenecks occur.',
    icon: BellRingIcon
  }
];

export const products: Product[] = [
  {
    slug: 'sale-and-rental-pos-system',
    name: 'Sale & Rental POS System',
    priceLkr: 135000,
    category: 'POS',
    icon: Repeat2Icon,
    image: '/prebuilds/sale-rental-pos.jpg',
    summary:
      'Dual-mode point-of-sale for businesses that both sell and rent items — managing bookings, security deposits, return dates, late fees and retail checkout in one place.',
    bestFor: 'Equipment, costume & rental shops',
    features: [
      'Unified retail sales and rental checkout in a single counter interface',
      'Live rental availability calendar, advance bookings and reservation holds',
      'Security deposit collection, refund tracking and automatic late-fee calculation',
      'Serialized barcode / QR tracking with return inspection and damage checklists',
      'Maintenance scheduling and full rental utilisation history per asset',
      'Customer profiles showing active rentals, due dates, deposits and credit limits'
    ]
  },
  {
    slug: 'gym-pos-membership-system',
    name: 'Gym POS & Membership System',
    priceLkr: 120000,
    category: 'POS',
    icon: DumbbellIcon,
    image: '/prebuilds/gym-pos.jpg',
    summary: 'Point-of-sale and membership management in one system, built for gyms and fitness studios.',
    bestFor: 'Gyms & fitness studios',
    features: [
      'Flexible membership tiers, freeze requests and automated renewal reminders',
      'RFID / QR member check-ins with live attendance and peak-hour logs',
      'Front-desk POS for supplements, day passes and personal training packages',
      'Trainer assignment, class scheduling and commission calculations',
      'Overdue payment alerts and automated membership expiry lockouts',
      'Cross-branch member access and consolidated studio revenue tracking'
    ]
  },
  {
    slug: 'pharmacy-pos-system',
    name: 'Pharmacy POS System',
    priceLkr: 85000,
    category: 'POS',
    icon: PillIcon,
    image: '/prebuilds/pharmacy-pos.jpg',
    summary: 'A point-of-sale system designed around the counter of a pharmacy.',
    bestFor: 'Pharmacies',
    features: [
      'High-speed barcode counter billing with generic and brand-name search',
      'Batch-wise inventory and near-expiry alerts to eliminate stock write-offs',
      'Prescription logging, patient refill history and dosage label printing',
      'Supplier purchase orders, GRN intake and automated reorder points',
      'Controlled-item user permissions and pharmacist sign-off trails',
      'Inter-branch stock transfers across multi-outlet pharmacy chains'
    ]
  },
  {
    slug: 'tuition-institute-management-pos',
    name: 'Tuition Institute Management & POS',
    priceLkr: 95000,
    category: 'Management',
    icon: GraduationCapIcon,
    image: '/prebuilds/tuition-pos.jpg',
    summary: 'Institute management and point-of-sale together, for tuition classes and education centres.',
    bestFor: 'Tuition institutes',
    features: [
      'Student enrolments, batch management and monthly class-fee POS billing',
      'QR / barcode student ID cards for instant gate and classroom attendance',
      'Automated parent SMS / WhatsApp notifications for attendance and due fees',
      'Lecturer payout splits, hall allocations and class timetable management',
      'Exam marks entry and downloadable student progress reports',
      'Multi-centre control for institutes operating across multiple towns'
    ]
  },
  {
    slug: 'grocery-shop-pos',
    name: 'Grocery Shop POS',
    priceLkr: 85000,
    category: 'POS',
    icon: ShoppingBasketIcon,
    image: '/prebuilds/grocery-pos.jpg',
    summary: 'A point-of-sale system sized for neighbourhood grocery shops.',
    bestFor: 'Grocery shops',
    features: [
      'Fast barcode and quick-key counter billing for packaged and loose items',
      'Weight-based pricing, unit conversions and custom barcode label printing',
      'Cashier shift closing, cash-drawer reconciliation and supplier ledgers',
      'Regular customer credit tabs with balance tracking and payment history',
      'Real-time stock deduction and low-stock reorder lists',
      'Multi-counter and multi-branch sync as your shop expands'
    ]
  },
  {
    slug: 'mid-level-supermarket-pos',
    name: 'Mid-Level Supermarket POS',
    priceLkr: 125000,
    category: 'POS',
    icon: ShoppingCartIcon,
    image: '/prebuilds/supermarket-pos.jpg',
    summary: 'A point-of-sale system for mid-level supermarkets with busier counters.',
    bestFor: 'Supermarkets',
    features: [
      'Multi-lane checkout supporting barcode scanners, weighing scales and card terminals',
      'Hold/resume baskets, bundle promotions and seasonal discount campaigns',
      'Central SKU master, supplier purchase orders and warehouse-to-shelf GRNs',
      'Supervisor PIN overrides for voids, returns and price adjustments',
      'Customer loyalty points, gift vouchers and basket-size analytics',
      'Live multi-branch inventory visibility and automated stock transfer requests'
    ]
  },
  {
    slug: 'erp-system',
    name: 'ERP System',
    priceLkr: 250000,
    category: 'ERP',
    icon: WarehouseIcon,
    image: '/prebuilds/erp-system.jpg',
    summary: 'An enterprise resource planning system to run your operations from one place.',
    bestFor: 'Growing businesses',
    features: [
      'Unified procurement, inventory, sales, invoicing and financial ledgers',
      'Multi-warehouse stock tracking, batch transfers and automated reorder rules',
      'Quotation-to-invoice pipeline with supplier payables and customer receivables',
      'Employee records, attendance tracking, payroll summaries and expense claims',
      'Configurable multi-level approval workflows for purchases and discounts',
      'Multi-branch and multi-company consolidation with executive KPI views'
    ]
  },
  {
    slug: 'hotel-management-system',
    name: 'Hotel Management System',
    priceLkr: 180000,
    category: 'Management',
    icon: BedDoubleIcon,
    image: '/prebuilds/hotel-management.jpg',
    summary: 'Management software for hotels and guest accommodation.',
    bestFor: 'Hotels & stays',
    features: [
      'Visual room-availability calendar for direct, walk-in and partner bookings',
      'Seasonal pricing tiers, meal-plan packages and corporate rate cards',
      'Fast guest check-in/check-out, room folios and split tax invoicing',
      'Housekeeping task boards, room readiness updates and maintenance logs',
      'Restaurant, minibar and add-on service charges posted straight to guest bills',
      'Multi-property management for boutique hotels, villas and apartments'
    ]
  },
  {
    slug: 'fleet-management-system',
    name: 'Fleet Management System',
    priceLkr: 120000,
    category: 'Management',
    icon: TruckIcon,
    image: '/prebuilds/fleet-management.jpg',
    summary: 'Management software for businesses running a fleet of vehicles.',
    bestFor: 'Fleet operators',
    features: [
      'Central vehicle registry with insurance, licence and compliance reminders',
      'Trip dispatch, route assignments and driver shift handovers',
      'Fuel consumption logging, odometer tracking and cost-per-kilometre reports',
      'Preventive maintenance schedules, workshop invoices and spare-parts history',
      'Client trip billing, proof-of-delivery tracking and fleet utilisation dashboards',
      'Multi-depot coordination with branch-level dispatcher permissions'
    ]
  },
  {
    slug: 'social-media-management-system',
    name: 'Social Media Management System',
    priceLkr: 125000,
    category: 'Marketing',
    icon: MegaphoneIcon,
    image: '/prebuilds/social-media-management.jpg',
    summary: 'Manage your social media presence from a single system.',
    bestFor: 'Brands & agencies',
    features: [
      'Shared visual content calendar across platforms and active campaigns',
      'Multi-account scheduling and automated post publishing queues',
      'Draft review, inline feedback and client or manager approval workflows',
      'Isolated brand and client workspaces with granular team permissions',
      'Tagged asset library for approved imagery, videos and caption templates',
      'Exportable reach, engagement and campaign growth reports per client'
    ]
  },
  {
    slug: 'content-management-system-cms',
    name: 'Content Management System (CMS)',
    priceLkr: 90000,
    category: 'CMS',
    icon: LayoutTemplateIcon,
    image: '/prebuilds/cms-system.jpg',
    summary:
      'A fast, flexible content management system for publishing pages, blogs, media galleries and SEO metadata without touching code.',
    bestFor: 'Brands, publishers & teams',
    features: [
      'Visual page builder, structured collections and rich-text editorial workflows',
      'Draft review, scheduled publishing and one-click version rollback history',
      'Built-in on-page SEO controls, custom slugs, meta tags and XML sitemaps',
      'Centralized media library with WebP optimization and folder tagging',
      'Custom content models, lead forms and headless REST API endpoints',
      'Multi-site and multi-branch content governance with role-based approvals'
    ]
  },
  {
    slug: 'flexcore-e-commerce-template',
    name: 'FlexCore E-Commerce Template',
    priceLkr: 75000,
    category: 'E-Commerce',
    icon: StoreIcon,
    image: '/prebuilds/flexcore-ecommerce.jpg',
    summary: 'An e-commerce template to launch your online store faster.',
    bestFor: 'Online stores',
    features: [
      'High-speed responsive storefront with categories, filters and variants',
      'Flash deals, pre-orders, new arrivals and coupon code campaigns',
      'Guest and account checkout ready for local and international payment gateways',
      'Customer self-service order tracking, returns and online warranty claims',
      'Admin control centre for catalogue, orders, banners and customer enquiries',
      'Multi-branch stock allocation and dispatch fulfilment tracking'
    ]
  }
];

export const preBuildSteps: ProcessStep[] = [
  { title: 'Request a demo', description: 'See the system working and ask anything about how it fits your business.' },
  { title: 'Tailor to your workflow', description: 'We configure the system around your workflow, branches and branding.' },
  { title: 'Deploy in weeks', description: 'Go live in weeks, not months — with a one-time starting price.' }
];
