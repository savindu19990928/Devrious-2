export function setFavicon(href: string): void {
  if (typeof document === 'undefined') return;
  let dynamicLink = document.querySelector<HTMLLinkElement>("link[data-dynamic-favicon='true']");
  if (!dynamicLink) {
    dynamicLink = document.createElement('link');
    dynamicLink.rel = 'icon';
    dynamicLink.setAttribute('data-dynamic-favicon', 'true');
    document.head.appendChild(dynamicLink);
  }
  dynamicLink.href = href;
}