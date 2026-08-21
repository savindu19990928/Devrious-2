import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Route changes land at the top of the new page instantly — `behavior: 'auto'`
 * inherited the global `scroll-behavior: smooth`, which made every navigation
 * scroll the outgoing page before the new one appeared. Hash targets are
 * honoured after the incoming page has painted.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const jump = (top: number) =>
    window.scrollTo({ top, left: 0, behavior: 'instant' as ScrollBehavior });

    if (!hash) {
      jump(0);
      return;
    }

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      jump(target ? target.getBoundingClientRect().top + window.scrollY - 96 : 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}