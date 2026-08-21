import { useEffect, useState } from 'react';

const read = (query: string): boolean =>
typeof window !== 'undefined' && typeof window.matchMedia === 'function' ?
window.matchMedia(query).matches :
false;

/**
 * Resolves the match synchronously on the very first render. Initialising to
 * `false` made every desktop load mount the mobile branch first and then swap,
 * which replayed entrance animations and shifted the layout.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => read(query));

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return matches;
}