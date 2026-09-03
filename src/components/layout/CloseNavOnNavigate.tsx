'use client';

import { useEffect } from 'react';

/** id of the compact `<details>` disclosure in the header. */
const COMPACT_NAV_ID = 'compact-nav';

/**
 * Collapses the compact navigation once a link inside it is activated.
 *
 * The header stays a server component and the disclosure stays a native
 * `<details>`: with no client script the menu still opens and closes by tap,
 * which is why it survives the no-JS pass. What `<details>` cannot do on its own
 * is notice an App Router client navigation — the header is never remounted, so
 * an open panel stays expanded over the page the visitor just asked for. This
 * closes it on link activation (including a link to the current route, which a
 * pathname-based effect would miss) and does nothing else.
 */
export function CloseNavOnNavigate() {
  useEffect(() => {
    const details = document.getElementById(COMPACT_NAV_ID);
    if (!(details instanceof HTMLDetailsElement)) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a')) {
        details.open = false;
      }
    };

    details.addEventListener('click', handleClick);
    return () => details.removeEventListener('click', handleClick);
  }, []);

  return null;
}
