/**
 * Shared motion tokens so every transition on the site feels like one system.
 * Durations stay at or under 300ms per element; sequences get their length
 * from stagger, never from slow individual elements.
 */
export const EASE = [0.23, 1, 0.32, 1] as const;

export const DUR = {
  press: 0.12,
  fast: 0.18,
  base: 0.24,
  slow: 0.3
} as const;

export const STAGGER = 0.05;

export const VIEWPORT = { once: true, amount: 0.25 } as const;
export const VIEWPORT_TIGHT = { once: true, amount: 0.4 } as const;