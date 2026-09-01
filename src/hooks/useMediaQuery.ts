'use client';

import { useSyncExternalStore } from 'react';

function subscribeTo(query: string) {
  return (onChange: () => void) => {
    if (typeof window.matchMedia !== 'function') return () => undefined;
    const media = window.matchMedia(query);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  };
}

function snapshotFor(query: string) {
  return () => {
    if (typeof window.matchMedia !== 'function') return false;
    return window.matchMedia(query).matches;
  };
}

const serverSnapshot = () => false;

/**
 * SSR-safe media-query hook used by the Lumora scene to choose its
 * mobile-native vertical stepper composition (design-system §6.8.7) over the
 * desktop sticky workbench.
 *
 * The server snapshot is `false` (server HTML renders the desktop
 * composition — no hydration mismatch); the client snapshot reflects the
 * live viewport and re-renders on breakpoint crossings.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribeTo(query),
    snapshotFor(query),
    serverSnapshot,
  );
}
