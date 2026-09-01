'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  if (typeof window.matchMedia !== 'function') return () => undefined;
  const media = window.matchMedia(QUERY);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

function getSnapshot(): boolean {
  if (typeof window.matchMedia !== 'function') return false;
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Tracks the user's `prefers-reduced-motion` setting (design-system §6.8.8).
 *
 * SSR-safe: the server snapshot is `false` (matching the server HTML, no
 * hydration mismatch); the client snapshot reads `matchMedia` and the store
 * re-renders on live changes. Motion systems gate themselves on this value;
 * the global CSS override in tokens.css is the second, non-JS defense line.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
