'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SceneProgress.module.css';

/**
 * SceneProgress — persistent homepage wayfinding (design-system §6.8.6,
 * component-inventory §4.11, ADR-001).
 *
 * One mono-indexed 01–05 system for the five scenes, replacing the ambiguity
 * of tenets 01–03 vs. section indices 02–06. Each entry is a plain in-page
 * anchor (`#overture` … `#horizon`); an IntersectionObserver derives the
 * active scene from fresh section rects (the last section whose top has
 * crossed the 40%-viewport line) and sets `aria-current` — observation only,
 * zero scroll capture (§6.8.8).
 *
 * Compositions: fixed left rail ≥ 1200px; compact top indicator strip below
 * the page header on smaller viewports (same markup, media-query layout).
 *
 * Safety contracts (binding, component-inventory §4.11 / qa-checklist §2.10):
 * - No-JS: the full anchor list is server-rendered and every link works
 *   natively; the active state is simply absent (active-agnostic default).
 * - Reduced motion: the indicator is visible and state-accurate; the only
 *   transitions are 150ms color/transform micro-feedback, neutralized by the
 *   global reduced-motion rule (§6.8.8) — no animated wayfinding.
 * - Never overlaps interactive content: `pointer-events` are limited to the
 *   entries; the rail sits in the outer gutter at desktop widths and below
 *   the fixed page header (z-index 90, under the header's 100) elsewhere.
 */

export interface SceneProgressScene {
  /** Target section id (the scene's in-page anchor). */
  id: string;
  /** Display number for the scene (the unified 01–05 system). */
  index: string;
}

export interface SceneProgressProps {
  scenes: SceneProgressScene[];
}

/** Viewport line (fraction of innerHeight) a scene top must cross to activate. */
const SCENE_TRIGGER_LINE = 0.4;

export function SceneProgress({ scenes }: SceneProgressProps) {
  // -1 = active-agnostic (server HTML / no-JS / observer unavailable).
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeIndexRef = useRef(-1);

  useEffect(() => {
    // jsdom/old-environment robustness: without IO the rail stays a plain
    // working anchor list (active-agnostic).
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = scenes
      .map((scene) => document.getElementById(scene.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length !== scenes.length) return;

    // Active scene = the last section whose top has crossed the trigger
    // line; between scenes the previous scene holds (a boundary in a gap
    // never skips ahead). Re-derived from fresh rects per browser-batched
    // IO callback — no scroll listeners.
    const applyFromGeometry = () => {
      const line = window.innerHeight * SCENE_TRIGGER_LINE;
      let active = -1;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= line) active = i;
      }
      if (active !== activeIndexRef.current) {
        activeIndexRef.current = active;
        setActiveIndex(active);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          applyFromGeometry();
        }
      },
      { rootMargin: '0px 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((el) => observer.observe(el));

    // Establish the correct scene for the current scroll position once.
    applyFromGeometry();

    return () => observer.disconnect();
  }, [scenes]);

  return (
    <nav className={styles.rail} aria-label="Scene Progress">
      {scenes.map((scene, i) => (
        <a
          key={scene.id}
          href={`#${scene.id}`}
          className={styles.entry}
          aria-current={activeIndex === i ? 'true' : undefined}
          aria-label={`Scene ${scene.index}`}
        >
          <span className={styles.number} aria-hidden="true">{scene.index}</span>
          <span className={styles.tick} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
