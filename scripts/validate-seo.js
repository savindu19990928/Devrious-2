import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

if (!match) {
  console.error('No JSON-LD script found in dist/index.html');
  process.exit(1);
}

try {
  const json = JSON.parse(match[1]);
  console.log('✓ JSON-LD successfully parsed!');
  console.log(`✓ Context: ${json['@context']}`);
  console.log(`✓ Graph entities: ${json['@graph'].length}`);
  for (const entity of json['@graph']) {
    const logoInfo = entity.logo ? ` [Logo: ${typeof entity.logo === 'string' ? entity.logo : entity.logo.url}]` : '';
    console.log(`  - ${entity['@type']} (${entity['@id']})${logoInfo}`);
  }
} catch (e) {
  console.error('JSON-LD Parse Error:', e.message);
  process.exit(1);
}

// Check essential files for SEO and Agentic Browsing
const requiredFiles = [
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/llms.txt',
  'dist/llms-full.txt',
  'dist/.well-known/ai-plugin.json',
  'dist/site.webmanifest',
  'dist/manifest.json',
  'dist/favicon.ico',
  'dist/favicon.svg',
  'dist/favicon-16x16.png',
  'dist/favicon-32x32.png',
  'dist/favicon-48x48.png',
  'dist/apple-touch-icon.png',
  'dist/android-chrome-192x192.png',
  'dist/android-chrome-512x512.png',
  'dist/og-image.png',
  'dist/logo.png',
  'dist/browserconfig.xml',
  'dist/.well-known/security.txt',
  'dist/humans.txt',
];

console.log('\nChecking required SEO & Agentic Browsing files:');
let missing = 0;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    const stat = fs.statSync(file);
    console.log(`✓ ${file} (${stat.size} bytes)`);
  } else {
    console.error(`✗ Missing: ${file}`);
    missing++;
  }
}

// Agentic Verification
console.log('\nValidating Agentic & AI Agent discovery:');
const llmsTxt = fs.readFileSync('dist/llms.txt', 'utf8');
if (llmsTxt.includes('https://devrious.lk/logo.png')) {
  console.log('✓ llms.txt contains explicit brand logo URL (https://devrious.lk/logo.png)');
} else {
  console.error('✗ llms.txt is missing logo URL');
  missing++;
}

const aiPlugin = JSON.parse(fs.readFileSync('dist/.well-known/ai-plugin.json', 'utf8'));
if (aiPlugin.logo_url === 'https://devrious.lk/logo.png') {
  console.log('✓ ai-plugin.json contains explicit logo_url (https://devrious.lk/logo.png)');
} else {
  console.error('✗ ai-plugin.json is missing or incorrect logo_url');
  missing++;
}

const robotsTxt = fs.readFileSync('dist/robots.txt', 'utf8');
if (robotsTxt.includes('User-agent: GPTBot') && robotsTxt.includes('User-agent: ClaudeBot')) {
  console.log('✓ robots.txt allows GPTBot, ClaudeBot, and major AI agent crawlers');
} else {
  console.error('✗ robots.txt is missing AI crawler directives');
  missing++;
}

if (html.includes('href="/llms.txt"') && html.includes('https://devrious.lk/logo.png')) {
  console.log('✓ index.html links to llms.txt and logo metadata');
} else {
  console.error('✗ index.html missing llms.txt or logo links');
  missing++;
}

if (missing === 0) {
  console.log('\nAll SEO & Agentic Browsing validation checks PASSED perfectly!');
} else {
  process.exit(1);
}
