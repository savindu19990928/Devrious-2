import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Custom Software, Web & AI Development in Sri Lanka';
const DEFAULT_DESC =
  'Devrious is a premier software engineering studio in Sri Lanka. We build high-performance web applications, custom business software, Django DRF platforms, AI assistants, and enterprise POS & ERP systems.';
const DEFAULT_IMAGE = 'https://devrious.lk/og-image.png';
const BASE_URL = 'https://devrious.lk';

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function useSEO({
  title,
  description = DEFAULT_DESC,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  noindex = false,
}: SEOProps): void {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Document Title
    const formattedTitle = title.includes('Devrious')
      ? title
      : `Devrious | ${title || DEFAULT_TITLE}`;
    document.title = formattedTitle;

    // 2. Primary Meta Tags
    setMetaTag('name', 'title', formattedTitle);
    setMetaTag('name', 'description', description);
    setMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical URL
    const pathname = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    setCanonical(canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', type);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 6. Dynamic Route JSON-LD Structured Data
    const scriptId = 'dynamic-route-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Cleanup custom route script if needed
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, canonicalPath, image, type, schema, noindex]);
}
