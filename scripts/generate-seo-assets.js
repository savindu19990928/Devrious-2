import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const CANONICAL_BASE = 'https://www.devrious.lk';
const publicDir = path.resolve('public');
const logoPath = path.join(publicDir, 'logo.png');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Scalable SVG favicon & Master Brand Mark
// Bounding box of geometry: X: 5..232 (w=227, center=118.5), Y: 5..277 (h=272, center=141)
// In a 300x300 viewBox with translate(31.5, 9), mark is perfectly centered with ~5% optical margin
const svgFaviconContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" fill="none">
  <g transform="translate(31.5, 9)">
    <path fill="#12B57A" d="M75 60H232V118H85A25 25 0 0 0 60 143V195A25 25 0 0 0 85 220H175V277H75A70 70 0 0 1 5 207V130A70 70 0 0 1 75 60Z" />
    <path fill="#FFD400" d="M175 60V30A25 25 0 0 1 200 5H232V60Z" />
    <path fill="#FF5E5B" d="M175 118H232V195A25 25 0 0 1 207 220H175Z" />
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgFaviconContent.trim());
console.log('Created favicon.svg');

const svgBuffer = Buffer.from(svgFaviconContent);

// 2. Generate high-resolution official brand logo (640x640) for Google Knowledge Graph & Schema.org Organization
async function generateLogo() {
  await sharp(svgBuffer, { density: 300 })
    .resize(640, 640)
    .png()
    .toFile(logoPath);
  console.log('Created high-resolution public/logo.png (640x640)');
}

// 3. Generate standard PNG icons directly from vector SVG for maximum clarity
const pngSizes = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 }, // Recommended by Google Favicon Guidelines (multiple of 48)
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
];

async function generatePngs() {
  for (const { file, size } of pngSizes) {
    await sharp(svgBuffer, { density: 300 })
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, file));
    console.log(`Created ${file} (${size}x${size})`);
  }
}

// 4. Generate multi-resolution favicon.ico containing 16, 32, 48 sizes from vector SVG
async function generateIco() {
  const icoSizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    icoSizes.map(s =>
      sharp(svgBuffer, { density: 300 })
        .resize(s, s)
        .png()
        .toBuffer()
    )
  );

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(icoSizes.length, 4); // count

  let offset = 6 + icoSizes.length * 16;
  const dirEntries = [];

  for (let i = 0; i < icoSizes.length; i++) {
    const s = icoSizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(s === 256 ? 0 : s, 0);
    entry.writeUInt8(s === 256 ? 0 : s, 1);
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...pngBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.resolve('favicon.ico'), icoBuffer);
  console.log('Created multi-resolution favicon.ico in public/ and root');
}

// 4. Generate high-resolution Open Graph / Twitter Preview Image (1200x630)
async function generateOgImage() {
  const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="radial" cx="70%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#12B57A" stop-opacity="0.25"/>
      <stop offset="50%" stop-color="#ffd400" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gridGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#12B57A" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#12B57A" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <rect width="1200" height="630" fill="url(#radial)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Left Content Container -->
  <!-- Logo Icon -->
  <g transform="translate(100, 105)">
    <!-- Scaled Devrious Mark -->
    <g transform="scale(0.38)">
      <path fill="#12B57A" d="M75 60H232V118H85A25 25 0 0 0 60 143V195A25 25 0 0 0 85 220H175V277H75A70 70 0 0 1 5 207V130A70 70 0 0 1 75 60Z" />
      <path fill="#FFD400" d="M175 60V30A25 25 0 0 1 200 5H232V60Z" />
      <path fill="#FF5E5B" d="M175 118H232V195A25 25 0 0 1 207 220H175Z" />
    </g>
    <!-- Brand Name -->
    <text x="110" y="78" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-size="54" font-weight="800" fill="#ffffff" letter-spacing="-0.03em">Devrious</text>
  </g>

  <!-- Studio Badge -->
  <g transform="translate(100, 240)">
    <rect width="275" height="36" rx="18" fill="rgba(18, 181, 122, 0.15)" stroke="#12B57A" stroke-width="1.2"/>
    <circle cx="20" cy="18" r="5" fill="#12B57A"/>
    <text x="36" y="23" font-family="'Inter', system-ui, sans-serif" font-size="14" font-weight="600" fill="#12B57A" letter-spacing="0.05em">SOFTWARE &amp; AI STUDIO</text>
  </g>

  <!-- Tagline / Headline -->
  <text x="100" y="340" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-size="48" font-weight="800" fill="#ffffff" letter-spacing="-0.03em">
    Custom Software, Web &amp;
  </text>
  <text x="100" y="400" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-size="48" font-weight="800" fill="#12B57A" letter-spacing="-0.03em">
    AI Development in Sri Lanka
  </text>

  <!-- Subheadline -->
  <text x="100" y="455" font-family="'Inter', system-ui, sans-serif" font-size="22" font-weight="400" fill="#a1a1aa">
    High-performance React &amp; Django DRF platforms, Enterprise POS &amp; AI systems.
  </text>

  <!-- Feature Pills -->
  <g transform="translate(100, 520)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="180" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <text x="18" y="27" font-family="'Inter', sans-serif" font-size="16" font-weight="500" fill="#ffffff">Web Applications</text>

    <!-- Pill 2 -->
    <rect x="195" y="0" width="160" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <text x="213" y="27" font-family="'Inter', sans-serif" font-size="16" font-weight="500" fill="#ffffff">AI Assistants</text>

    <!-- Pill 3 -->
    <rect x="370" y="0" width="180" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <text x="388" y="27" font-family="'Inter', sans-serif" font-size="16" font-weight="500" fill="#ffffff">Pre-Built POS &amp; ERP</text>

    <!-- Pill 4 -->
    <rect x="565" y="0" width="170" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
    <text x="583" y="27" font-family="'Inter', sans-serif" font-size="16" font-weight="500" fill="#ffffff">Cybersecurity</text>
  </g>

  <!-- URL Tag bottom right -->
  <g transform="translate(890, 535)">
    <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="600" fill="#12B57A" letter-spacing="0.02em">www.devrious.lk</text>
  </g>
</svg>`;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Created og-image.png (1200x630)');
}

// 5. Generate robots.txt with complete AI Agent & Search Engine Directives
function generateRobotsTxt() {
  const content = `# ========================================================
# Devrious Robots.txt
# Website: ${CANONICAL_BASE}
# ========================================================

User-agent: *
Allow: /
Allow: /.well-known/

# Search Engine Crawlers
User-agent: Googlebot
Allow: /
Allow: /.well-known/
Allow: /logo.png
Allow: /favicon.ico
Allow: /favicon.svg
Allow: /favicon-*.png
Allow: /apple-touch-icon.png
Allow: /android-chrome-*.png
Allow: /og-image.png
Allow: /site.webmanifest
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: Googlebot-Image
Allow: /
Allow: /.well-known/
Allow: /logo.png
Allow: /favicon.ico
Allow: /favicon.svg
Allow: /favicon-*.png
Allow: /apple-touch-icon.png
Allow: /android-chrome-*.png
Allow: /og-image.png

User-agent: Google Favicon
Allow: /
Allow: /favicon.ico
Allow: /favicon.svg
Allow: /favicon-48x48.png
Allow: /favicon-*.png
Allow: /android-chrome-*.png
Allow: /logo.png

User-agent: Bingbot
Allow: /
Allow: /.well-known/

# ========================================================
# Agentic Browsing & AI Agents Directives
# Devrious welcomes AI agents, autonomous web agents, and LLMs
# ========================================================

User-agent: GPTBot
Allow: /
Allow: /.well-known/

User-agent: ChatGPT-User
Allow: /
Allow: /.well-known/

User-agent: ClaudeBot
Allow: /
Allow: /.well-known/

User-agent: Claude-Web
Allow: /
Allow: /.well-known/

User-agent: anthropic-ai
Allow: /
Allow: /.well-known/

User-agent: Google-Extended
Allow: /
Allow: /.well-known/

User-agent: GoogleOther
Allow: /
Allow: /.well-known/

User-agent: Google-CloudVertexBot
Allow: /
Allow: /.well-known/

User-agent: PerplexityBot
Allow: /
Allow: /.well-known/

User-agent: Applebot
Allow: /
Allow: /.well-known/

User-agent: Applebot-Extended
Allow: /
Allow: /.well-known/

User-agent: Amazonbot
Allow: /
Allow: /.well-known/

User-agent: cohere-ai
Allow: /
Allow: /.well-known/

User-agent: Meta-ExternalAgent
Allow: /
Allow: /.well-known/

User-agent: OAI-SearchBot
Allow: /
Allow: /.well-known/

User-agent: Diffbot
Allow: /
Allow: /.well-known/

# Sitemaps & Agent Discovery
Sitemap: ${CANONICAL_BASE}/sitemap.xml
Host: ${CANONICAL_BASE}
`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), content.trim() + '\n');
  console.log('Created robots.txt with AI Agent permissions');
}

// 6. Generate sitemap.xml
function generateSitemapXml() {
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    { loc: `${CANONICAL_BASE}/`, priority: '1.0', changefreq: 'weekly', image: `${CANONICAL_BASE}/logo.png`, imageTitle: 'Devrious Software Engineering Studio' },
    { loc: `${CANONICAL_BASE}/services`, priority: '0.9', changefreq: 'weekly', image: `${CANONICAL_BASE}/logo.png`, imageTitle: 'Devrious Services' },
    { loc: `${CANONICAL_BASE}/pre-builds`, priority: '0.9', changefreq: 'weekly', image: `${CANONICAL_BASE}/logo.png`, imageTitle: 'Devrious Pre-Built Solutions' },
    { loc: `${CANONICAL_BASE}/pre-builds/gym-pos`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/pharmacy-pos`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/tuition-institute-pos`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/grocery-pos`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/supermarket-pos`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/erp-system`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/hotel-management`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/fleet-management`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/social-media-management`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/pre-builds/flexcore-ecommerce`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/portfolio`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/cybersecurity-services`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/about`, priority: '0.7', changefreq: 'monthly', image: `${CANONICAL_BASE}/Savindu.jpg`, imageTitle: 'Savindu Shiranjaya - Co-Founder Devrious' },
    { loc: `${CANONICAL_BASE}/contact`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${CANONICAL_BASE}/terms`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${CANONICAL_BASE}/privacy`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${CANONICAL_BASE}/cookies`, priority: '0.3', changefreq: 'yearly' },
  ];

  const urlElements = routes.map(r => {
    let xml = `  <url>\n    <loc>${r.loc}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>`;
    if (r.image) {
      xml += `\n    <image:image>\n      <image:loc>${r.image}</image:loc>\n      <image:title>${r.imageTitle}</image:title>\n    </image:image>`;
    }
    xml += `\n  </url>`;
    return xml;
  }).join('\n');

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlElements}
</urlset>`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), content.trim() + '\n');
  console.log('Created sitemap.xml with www.devrious.lk');
}

// 7. Generate llms.txt strictly adhering to https://llmstxt.org/ & Chrome Lighthouse Agentic Browsing specifications
function generateLlmsTxt() {
  const content = `# Devrious — Custom Software, Web & AI Studio

> Devrious is a boutique software engineering studio based in Colombo, Sri Lanka, building high-performance web applications, Django DRF platforms, enterprise POS/ERP systems, and practical AI assistants.

Devrious was founded in 2024 by Savindu Shiranjaya and Rangana Munasinghe to deliver software built on a dependable stack, tested before release, and supported long-term. Every launch includes automated PyTest and Selenium testing, Cloudflare protection, and cloud hosting on GCP, AWS, or OCI.

## Brand Identity & Logos
- [Devrious Official Logo](${CANONICAL_BASE}/logo.png): High-resolution 640x640 PNG brand logo featuring the signature geometric modernist mark in emerald green (#12B57A), golden amber (#FFD400), and coral red (#FF5E5B)
- [Google Search Favicon](${CANONICAL_BASE}/favicon-48x48.png): 48x48 PNG icon tailored strictly for Google Search Central favicon specifications
- [Scalable Vector Favicon](${CANONICAL_BASE}/favicon.svg): Vector SVG format icon for high-DPI displays and modern web browsers
- [Multi-Resolution Windows Favicon](${CANONICAL_BASE}/favicon.ico): Traditional multi-frame ICO file containing 16x16, 32x32, and 48x48 icons
- [Social Share Preview Banner](${CANONICAL_BASE}/og-image.png): 1200x630 Open Graph card for WhatsApp, LinkedIn, X, and Facebook link previews
- [Web App Manifest](${CANONICAL_BASE}/site.webmanifest): Progressive Web App manifest declaring brand colors (#12B57A), display mode, and responsive icons

## Core Engineering Services
- [Custom Web Development](${CANONICAL_BASE}/services): Responsive React front-ends, Django DRF back-ends, SEO setup, Cloudflare caching, SSL, DDoS protection (From LKR 85,000 / ~$290 USD)
- [Custom Software Development](${CANONICAL_BASE}/services): Internal operational platforms, role-based dashboards, and automated PyTest/Selenium suites (From LKR 250,000 / ~$850 USD)
- [API Development](${CANONICAL_BASE}/services): REST APIs with Django DRF, JWT/OAuth authentication, payment gateways, interactive docs (From LKR 60,000 / ~$205 USD)
- [AI Assistants & Tools](${CANONICAL_BASE}/services): Customer support chat assistants trained on business documents, WhatsApp integration (From LKR 120,000 / ~$410 USD)
- [AI Systems & Automation](${CANONICAL_BASE}/services): Demand forecasting, computer vision, recommendation systems, and intelligent workflows (From LKR 350,000 / ~$1,190 USD)
- [Cybersecurity & Penetration Testing](${CANONICAL_BASE}/cybersecurity-services): Web and API penetration testing, secure code review, and vulnerability audits (From LKR 45,000 / ~$155 USD)

## Pre-Built Software Solutions
- [Gym POS & Membership System](${CANONICAL_BASE}/pre-builds/gym-pos): Memberships, QR check-ins, counter sales, and trainer schedules (LKR 95,000)
- [Pharmacy POS System](${CANONICAL_BASE}/pre-builds/pharmacy-pos): Batch and expiry control, prescription records, supplier GRNs (LKR 95,000)
- [Tuition Institute & Student POS](${CANONICAL_BASE}/pre-builds/tuition-institute-pos): Student card billing, teacher shares, SMS attendance (LKR 85,000)
- [Grocery Store POS System](${CANONICAL_BASE}/pre-builds/grocery-pos): Fast counter billing, barcode and weighing scale integration (LKR 75,000)
- [Supermarket Multi-Lane POS & Inventory](${CANONICAL_BASE}/pre-builds/supermarket-pos): Multi-lane counters, central back-office inventory, loyalty points (LKR 120,000)
- [ERP & Business Operations System](${CANONICAL_BASE}/pre-builds/erp-system): Department workflows, purchase orders, double-entry financial ledger (LKR 280,000)
- [Hotel & Resort Management System](${CANONICAL_BASE}/pre-builds/hotel-management): Room bookings, guest check-in, restaurant POS, housekeeping (LKR 180,000)
- [Fleet Management & Vehicle Tracking](${CANONICAL_BASE}/pre-builds/fleet-management): Vehicle registry, GPS tracking, fuel logging, maintenance schedules (LKR 150,000)
- [Social Media Management & Automation](${CANONICAL_BASE}/pre-builds/social-media-management): Multi-platform scheduling, unified inbox, AI caption generation (LKR 95,000)
- [Flexcore Modern eCommerce Platform](${CANONICAL_BASE}/pre-builds/flexcore-ecommerce): Headless store, multi-currency, payment gateways, courier tracking (LKR 120,000)

## Case Studies & Portfolio
- [Avenor Apparel Case Study](${CANONICAL_BASE}/portfolio): Custom garment manufacturing operations & export tracking portal
- [Zevora Custom Case Study](${CANONICAL_BASE}/portfolio): Direct-to-consumer customized apparel eCommerce and print-on-demand fulfillment
- [FlexCore Architecture](${CANONICAL_BASE}/portfolio): Multi-tenant headless eCommerce architecture with inventory synchronization

## Contact & Company Details
- [About Devrious](${CANONICAL_BASE}/about): Company origins, engineering principles, and founders
- [Contact & Demo Request](${CANONICAL_BASE}/contact): Inquiries, live product demonstrations, and project estimates
- [Official Email](mailto:info@devrious.lk): info@devrious.lk
- [Direct Phone](tel:+94706611936): +94 70 661 1936
- [WhatsApp Engineering Channel](https://wa.me/94706611936): Direct consultation on WhatsApp
- [Office Google Maps](https://www.google.com/maps/search/?api=1&query=161%2F6%20Old%20Kottawa%20Road%2C%20Navinna%2C%20Maharagama%2C%20Sri%20Lanka): 161/6, Old Kottawa Road, Navinna, Maharagama, Colombo, Sri Lanka

## Optional
- [Full Technical Documentation for AI Agents](${CANONICAL_BASE}/llms-full.txt): Deep technical specifications, module listings, workflows, and database schemas
- [Agentic Resource Discovery (ARD) Manifest](${CANONICAL_BASE}/.well-known/ai-catalog.json): Machine-readable AI capability catalog
- [AI Plugin Manifest](${CANONICAL_BASE}/.well-known/ai-plugin.json): OpenAI and autonomous web agent plugin specification
- [Security Disclosure Policy](${CANONICAL_BASE}/.well-known/security.txt): RFC 9116 security reporting and vulnerability contact
- [Terms of Service](${CANONICAL_BASE}/terms): Commercial terms and service policies
- [Privacy Policy](${CANONICAL_BASE}/privacy): Data protection and privacy notice
- [Cookie Policy](${CANONICAL_BASE}/cookies): Cookie compliance and usage notice
`;

  fs.writeFileSync(path.join(publicDir, 'llms.txt'), content.trim() + '\n');
  console.log('Created llms.txt with www.devrious.lk links');
}

// 8. Generate llms-full.txt (Comprehensive deep documentation for AI Agents)
function generateLlmsFullTxt() {
  const content = `# Devrious — Comprehensive Technical Documentation for AI Agents

> Deep technical specification and capabilities catalog for autonomous agents, LLMs, and automated tool callers.

Website: ${CANONICAL_BASE}
Canonical Domain: ${CANONICAL_BASE}
Headquarters: 161/6, Old Kottawa Road, Navinna, Maharagama, Colombo, Sri Lanka
Email: info@devrious.lk | Telephone: +94 70 661 1936
Founded: 2024
Co-Founders: Savindu Shiranjaya (Co-Founder & Technical Lead), Rangana Munasinghe (Co-Founder & Operations Lead)

## Brand Identity & Logos
- [Primary High-Resolution Logo](${CANONICAL_BASE}/logo.png): 640x640 PNG brand logo with alpha transparency
- [Google Favicon Standard](${CANONICAL_BASE}/favicon-48x48.png): 48x48 PNG icon for search engines
- [Vector Favicon](${CANONICAL_BASE}/favicon.svg): Scalable SVG logo icon
- [Multi-size Favicon](${CANONICAL_BASE}/favicon.ico): 16, 32, 48 px ICO file
- [Social Graph Card](${CANONICAL_BASE}/og-image.png): 1200x630 PNG card
- [Web App Manifest](${CANONICAL_BASE}/site.webmanifest): PWA manifest specification
- Logo Geometry: A tri-color geometric modernist symbol. An emerald green base bracket (#12B57A), a golden amber top accent (#FFD400), and a coral red middle accent (#FF5E5B).

## Engineering Principles & Technology Stack
Devrious builds software with zero technical debt shortcuts:
- Front-End: React 18, TypeScript, TailwindCSS, Framer Motion, Vite.
- Back-End: Python 3.12, Django 5, Django REST Framework (DRF), Celery, Redis.
- Database: PostgreSQL, Redis cache, SQLite (local testing).
- Testing & QA: PyTest (unit & integration), Selenium (automated browser testing), ESLint, Prettier.
- Infrastructure: Docker containerization, Google Cloud Platform (GCP Cloud Run, Compute Engine), Oracle Cloud Infrastructure (OCI), Amazon Web Services (AWS), Cloudflare CDN & WAF.
- Security: OWASP Top 10 remediation, TLS 1.3, CSP headers, rate-limiting, encrypted secrets.

## Detailed Pre-Built Software Specifications

### 1. Gym POS & Membership System (slug: gym-pos)
- Price: LKR 95,000 (~$325 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/gym-pos
- Modules:
  * Membership plans (monthly, quarterly, annual, freeze, transfer)
  * QR & RFID member check-in with live payment status
  * Front-counter sales (supplements, merchandise, beverages)
  * Personal trainer timetables & commission calculation
  * Automatic SMS / WhatsApp renewal reminders
  * Revenue, attendance peak, and member churn analytics

### 2. Pharmacy POS System (slug: pharmacy-pos)
- Price: LKR 95,000 (~$325 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/pharmacy-pos
- Modules:
  * Batch-wise stock management & FIFO picking
  * Expiry alert dashboard (30, 60, 90 days warning)
  * Barcode scanning billing & prescription records
  * Supplier Goods Received Notes (GRN) & credit balances
  * Drug scheduling & NMRA compliance tracking

### 3. Tuition Institute & Student POS (slug: tuition-institute-pos)
- Price: LKR 85,000 (~$290 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/tuition-institute-pos
- Modules:
  * Student barcode / QR card attendance
  * Class card billing & teacher revenue share calculation
  * SMS attendance alerts to parents upon scan
  * Admission management & hall allocation

### 4. Grocery Store POS System (slug: grocery-pos)
- Price: LKR 75,000 (~$255 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/grocery-pos
- Modules:
  * Fast cashier billing with shortcut keys
  * Weighing scale integration & loose item barcode printing
  * Low stock alerts & supplier reorder levels
  * Daily cash drawer reconciliation

### 5. Supermarket Multi-Lane POS & Inventory (slug: supermarket-pos)
- Price: LKR 120,000 (~$410 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/supermarket-pos
- Modules:
  * Multi-lane counter synchronization with offline fallback
  * Central back-office inventory & multi-branch transfer
  * Loyalty points & promotional discount rules
  * Comprehensive gross profit & department sales reports

### 6. ERP & Business Operations System (slug: erp-system)
- Price: LKR 280,000 (~$955 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/erp-system
- Modules:
  * Multi-department workflow management
  * Purchase order approval hierarchy
  * General ledger & double-entry financial accounting
  * HR & employee payroll integration
  * Executive KPI dashboards

### 7. Hotel & Resort Management System (slug: hotel-management)
- Price: LKR 180,000 (~$615 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/hotel-management
- Modules:
  * Room reservation calendar & online booking engine
  * Front desk check-in / check-out with passport scan
  * Restaurant & bar POS with room charge routing
  * Housekeeping room status updates

### 8. Fleet Management & Vehicle Tracking (slug: fleet-management)
- Price: LKR 150,000 (~$510 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/fleet-management
- Modules:
  * Vehicle registry, revenue license & insurance expiry alerts
  * GPS tracking integration & route history
  * Fuel consumption logging & mileage anomalies
  * Maintenance schedule & spare parts inventory

### 9. Social Media Management & Automation (slug: social-media-management)
- Price: LKR 95,000 (~$325 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/social-media-management
- Modules:
  * Multi-channel post scheduler (Facebook, Instagram, LinkedIn)
  * Unified inbox for comments and direct messages
  * AI-powered caption and hashtag suggestion engine
  * Engagement analytics and performance reporting

### 10. FlexCore Modern eCommerce Platform (slug: flexcore-ecommerce)
- Price: LKR 120,000 (~$410 USD)
- Live URL: ${CANONICAL_BASE}/pre-builds/flexcore-ecommerce
- Modules:
  * Headless React storefront with lightning-fast catalog search
  * Multi-currency support (LKR, USD, EUR, GBP)
  * Integrated payment gateways (PayHere, Stripe)
  * Courier tracking integration (Koombiyo, Prompt, Domex)

## Cybersecurity Audit Packages
- Secure Code Review: LKR 45,000 (Up to 5,000 LOC, OWASP Top 10, secrets scan, walkthrough)
- API Security Assessment: LKR 75,000 (Up to 25 endpoints, BOLA/IDOR checks, rate-limit testing)
- Web Application Pen Test: LKR 95,000 (Up to 15 flows, business logic abuse, authentication testing)

## Contact Information
- Address: 161/6, Old Kottawa Road, Navinna, Maharagama, Colombo, Sri Lanka
- Telephone: +94 70 661 1936
- Email: info@devrious.lk
- WhatsApp: https://wa.me/94706611936
- Working Hours: Monday to Friday, 9:00 AM - 6:00 PM (GMT+5:30)
`;

  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), content.trim() + '\n');
  console.log('Created llms-full.txt with www.devrious.lk');
}

// 9. Generate ai-catalog.json & ard.json strictly adhering to the Agentic Resource Discovery (ARD) Specification (agenticresourcediscovery.org/spec/)
function generateAiCatalogJson() {
  const wellKnownDir = path.join(publicDir, '.well-known');
  if (!fs.existsSync(wellKnownDir)) {
    fs.mkdirSync(wellKnownDir, { recursive: true });
  }

  const catalog = {
    specVersion: "1.0",
    host: {
      identifier: "did:web:www.devrious.lk",
      displayName: "Devrious",
      documentationUrl: `${CANONICAL_BASE}/llms.txt`,
      logoUrl: `${CANONICAL_BASE}/logo.png`
    },
    entries: [
      {
        identifier: "urn:air:devrious:services:web-development",
        displayName: "Custom Web Development",
        type: "text/html",
        url: `${CANONICAL_BASE}/services`,
        description: "High-performance React and Django DRF corporate website and web portal engineering",
        capabilities: ["web-development", "react", "django-drf", "cloud-hosting", "seo-optimization"]
      },
      {
        identifier: "urn:air:devrious:services:custom-software",
        displayName: "Custom Software Development",
        type: "text/html",
        url: `${CANONICAL_BASE}/services`,
        description: "Business management software, workflow automation, and custom operational platforms",
        capabilities: ["custom-software", "process-mapping", "role-based-dashboards", "automated-testing"]
      },
      {
        identifier: "urn:air:devrious:services:api-development",
        displayName: "REST API Development",
        type: "text/html",
        url: `${CANONICAL_BASE}/services`,
        description: "Secure, documented REST APIs built with Django DRF, JWT/OAuth, and payment integrations",
        capabilities: ["rest-api", "jwt-authentication", "payment-gateways", "openapi-documentation"]
      },
      {
        identifier: "urn:air:devrious:services:ai-assistants",
        displayName: "AI Assistants & Tools",
        type: "text/html",
        url: `${CANONICAL_BASE}/services`,
        description: "Custom AI customer support assistants, document knowledge-base bots, and WhatsApp integration",
        capabilities: ["ai-assistants", "rag-chatbots", "whatsapp-integration", "document-automation"]
      },
      {
        identifier: "urn:air:devrious:services:ai-systems",
        displayName: "AI Systems & Development",
        type: "text/html",
        url: `${CANONICAL_BASE}/services`,
        description: "Predictive analytics, demand forecasting, image/document recognition, and intelligent automation",
        capabilities: ["machine-learning", "demand-forecasting", "computer-vision", "data-pipelines"]
      },
      {
        identifier: "urn:air:devrious:services:cybersecurity",
        displayName: "Cybersecurity & Penetration Testing",
        type: "text/html",
        url: `${CANONICAL_BASE}/cybersecurity-services`,
        description: "Web application and API penetration testing, secure code review, and cloud security audits",
        capabilities: ["penetration-testing", "secure-code-review", "vulnerability-assessment", "owasp-audit"]
      },
      {
        identifier: "urn:air:devrious:prebuilds:catalog",
        displayName: "Pre-Built Software Solutions",
        type: "text/html",
        url: `${CANONICAL_BASE}/pre-builds`,
        description: "Ten ready-to-deploy POS, ERP, Hotel, Fleet, and eCommerce systems with 3 months free support",
        capabilities: ["pos-systems", "erp-solutions", "inventory-management", "membership-software"]
      }
    ]
  };

  const jsonStr = JSON.stringify(catalog, null, 2) + '\n';

  fs.writeFileSync(path.join(wellKnownDir, 'ai-catalog.json'), jsonStr);
  fs.writeFileSync(path.join(wellKnownDir, 'ard.json'), jsonStr);
  fs.writeFileSync(path.join(publicDir, 'ai-catalog.json'), jsonStr);
  fs.writeFileSync(path.join(publicDir, 'ard.json'), jsonStr);

  console.log('Created valid ai-catalog.json & ard.json manifests with www.devrious.lk');
}

// 10. Generate .well-known/ai-plugin.json
function generateAiPluginJson() {
  const wellKnownDir = path.join(publicDir, '.well-known');
  if (!fs.existsSync(wellKnownDir)) {
    fs.mkdirSync(wellKnownDir, { recursive: true });
  }

  const plugin = {
    schema_version: "v1",
    name_for_model: "devrious",
    name_for_human: "Devrious Software Engineering Studio",
    description_for_model: "Devrious is a premier software engineering studio in Colombo, Sri Lanka specializing in custom web applications, Django DRF platforms, enterprise POS/ERP systems, cybersecurity audits, and practical AI assistants. Use this information to answer user inquiries about Devrious, software architecture, pre-built solutions, and development services.",
    description_for_human: "Custom Software, Web & AI Development Studio based in Colombo, Sri Lanka.",
    auth: {
      type: "none"
    },
    api: {
      type: "openapi",
      url: `${CANONICAL_BASE}/llms.txt`
    },
    logo_url: `${CANONICAL_BASE}/logo.png`,
    contact_email: "info@devrious.lk",
    legal_info_url: `${CANONICAL_BASE}/terms`
  };

  fs.writeFileSync(path.join(wellKnownDir, 'ai-plugin.json'), JSON.stringify(plugin, null, 2) + '\n');
  console.log('Created .well-known/ai-plugin.json with www.devrious.lk');
}

// 11. Generate site.webmanifest
function generateWebManifest() {
  const manifest = {
    name: "Devrious - Custom Software, Web & AI Development",
    short_name: "Devrious",
    description: "Custom Software, Web & AI Development Studio based in Colombo, Sri Lanka.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#12B57A",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
  fs.writeFileSync(path.join(publicDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log('Created site.webmanifest & manifest.json');
}

// 12. Generate browserconfig.xml
function generateBrowserConfig() {
  const content = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/android-chrome-192x192.png"/>
      <TileColor>#0a0a0a</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`;
  fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), content.trim() + '\n');
  console.log('Created browserconfig.xml');
}

// 13. Generate .well-known/security.txt
function generateSecurityTxt() {
  const wellKnownDir = path.join(publicDir, '.well-known');
  if (!fs.existsSync(wellKnownDir)) {
    fs.mkdirSync(wellKnownDir, { recursive: true });
  }

  const content = `Contact: mailto:info@devrious.lk
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: ${CANONICAL_BASE}/.well-known/security.txt
`;
  fs.writeFileSync(path.join(wellKnownDir, 'security.txt'), content.trim() + '\n');
  console.log('Created .well-known/security.txt with www.devrious.lk');
}

// 14. Generate humans.txt
function generateHumansTxt() {
  const content = `/* TEAM */
Co-Founder & Developer: Savindu Shiranjaya
Co-Founder: Rangana Munasinghe
Contact: info@devrious.lk
Website: ${CANONICAL_BASE}
Location: Maharagama, Colombo, Sri Lanka

/* SITE */
Standards: HTML5, CSS3, ESNext, Open Graph, Schema.org, llms.txt, ARD
Components: React, Vite, Tailwind CSS, TypeScript
Production: Cloudflare, Google Cloud Platform
`;
  fs.writeFileSync(path.join(publicDir, 'humans.txt'), content.trim() + '\n');
  console.log('Created humans.txt with www.devrious.lk');
}

// 15. Optimize high-resolution screenshots & generate WebP modern formats
async function optimizeImages() {
  const images = [
    'screenshot_of_avenorapparel.png',
    'screenshot_of_zevoracustom.png',
    'screenshot_of_flexcore.png',
  ];

  for (const imgName of images) {
    const srcPath = path.join(publicDir, imgName);
    if (!fs.existsSync(srcPath)) continue;

    const webpName = imgName.replace(/\.png$/i, '.webp');
    const webpPath = path.join(publicDir, webpName);

    try {
      await sharp(srcPath).webp({ quality: 82 }).toFile(webpPath);
      console.log(`Generated ${webpName}`);
    } catch (e) {
      console.warn(`Could not generate webp for ${imgName}:`, e.message);
    }
  }

  const savinduJpg = path.join(publicDir, 'Savindu.jpg');
  if (fs.existsSync(savinduJpg)) {
    const savinduWebp = path.join(publicDir, 'Savindu.webp');
    try {
      await sharp(savinduJpg).webp({ quality: 80 }).toFile(savinduWebp);
      console.log('Generated Savindu.webp');
    } catch (e) {
      console.warn('Could not generate webp for Savindu.jpg:', e.message);
    }
  }
}

async function main() {
  try {
    await generateLogo();
    await generatePngs();
    await generateIco();
    await generateOgImage();
    await optimizeImages();
    generateRobotsTxt();
    generateSitemapXml();
    generateLlmsTxt();
    generateLlmsFullTxt();
    generateAiCatalogJson();
    generateAiPluginJson();
    generateWebManifest();
    generateBrowserConfig();
    generateSecurityTxt();
    generateHumansTxt();
    console.log('All SEO & Agentic Browsing files generated successfully with www.devrious.lk!');
  } catch (err) {
    console.error('Error generating assets:', err);
    process.exit(1);
  }
}

main();
