import { LOGO_PATHS } from '../components/Logo';

/**
 * The browser tab mark. Built from the same vector geometry as the on-page
 * logo and injected at runtime, so the favicon can never drift from the brand.
 * The mark sits on an ink tile with generous padding — at 16px a bare glyph
 * disappears against light browser chrome.
 */
const TILE = '#0a0a0a';
const SIZE = 512;
const PAD = 96;
const MARK_W = 222;
const MARK_H = 274;
const SCALE = (SIZE - PAD * 2) / MARK_H;
const OFFSET_X = (SIZE - MARK_W * SCALE) / 2;
const OFFSET_Y = PAD;

function buildSvg(): string {
  const paths = LOGO_PATHS.map(
    (p) => `<path d="${p.d}" fill="${p.fill}"/>`
  ).join('');

  return [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}">`,
  `<rect width="${SIZE}" height="${SIZE}" rx="112" fill="${TILE}"/>`,
  `<g transform="translate(${OFFSET_X} ${OFFSET_Y}) scale(${SCALE})">${paths}</g>`,
  `</svg>`].
  join('');
}

function setLink(rel: string, href: string, type?: string) {
  const selector = `link[rel="${rel}"]`;
  document.head.querySelectorAll(selector).forEach((el) => el.remove());

  const link = document.createElement('link');
  link.rel = rel;
  if (type) link.type = type;
  link.href = href;
  document.head.appendChild(link);
}

/** Installs the Devrious mark as the tab and home-screen icon. */
export function installFavicon() {
  if (typeof document === 'undefined') return;

  const svg = buildSvg();
  const href = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  setLink('icon', href, 'image/svg+xml');
  setLink('shortcut icon', href, 'image/svg+xml');

  // Rasterised fallback for platforms that ignore SVG icons (Safari, iOS).
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, 180, 180);
    setLink('apple-touch-icon', canvas.toDataURL('image/png'));
  };
  img.src = href;
}