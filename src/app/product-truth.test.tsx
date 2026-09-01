import { describe, it, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import HomePage from './page';
import ProductsPage from './products/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ProductDetailPage from './products/[slug]/page';

/**
 * Product-truth guard.
 *
 * Lumora is an AI-native academic assessment & progression platform whose
 * evaluation runs on a hosted model, whose confidence bands are calibrated from
 * the platform's own record, and whose grades require an explicit human release.
 * It is NOT a student operating system, a degree planner, a scheduling optimiser,
 * or a local-only privacy product. This file exists so that representation
 * cannot quietly return: it fails on both rendered output and source text.
 *
 * Do not add an exception to this list. If a term here is genuinely needed, the
 * product truth has changed and the Lumora repository is the thing to re-verify
 * first.
 */
const FORBIDDEN_CLAIMS = [
  'academic operating system',
  'operating system for',
  'local sovereignty',
  'sovereign',
  'air-gapped',
  'air gapped',
  'privacy vault',
  'zero telemetry',
  'telemetry retention',
  'zero-telemetry',
  'zero private data',
  'client hardware',
  'client-side execution',
  'local-first',
  'zero cloud',
  'zero-cloud',
  'degree planning',
  'degree-planning',
  'syllabus',
  'workload collision',
  'deep-work sprint',
  'deep work sprint',
  'context ingest',
  'decision support',
] as const;

beforeAll(() => {
  class NoopObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  const g = globalThis as unknown as Record<string, unknown>;
  g.IntersectionObserver ??= NoopObserver;
  g.ResizeObserver ??= NoopObserver;
});

function assertClean(label: string, text: string) {
  const haystack = text.toLowerCase();
  const hits = FORBIDDEN_CLAIMS.filter((claim) => haystack.includes(claim));
  expect(hits, `${label} contains removed product claims: ${hits.join(', ')}`).toEqual([]);
}

describe('rendered output carries no false Lumora claims', () => {
  it('homepage', () => {
    const { container } = render(<HomePage />);
    assertClean('homepage', container.textContent ?? '');
  });

  it('products index', () => {
    const { container } = render(<ProductsPage />);
    assertClean('/products', container.textContent ?? '');
  });

  it('about', () => {
    const { container } = render(<AboutPage />);
    assertClean('/about', container.textContent ?? '');
  });

  it('contact', () => {
    const { container } = render(<ContactPage />);
    assertClean('/contact', container.textContent ?? '');
  });

  it('lumora product page', async () => {
    const Component = await ProductDetailPage({ params: Promise.resolve({ slug: 'lumora' }) });
    const { container } = render(Component);
    assertClean('/products/lumora', container.textContent ?? '');
  });
});

const SRC_ROOT = path.resolve(__dirname, '..');

function sourceFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      sourceFiles(full, acc);
    } else if (/\.(ts|tsx|css)$/.test(entry) && !/\.test\.tsx?$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

describe('source text carries no false Lumora claims', () => {
  it('every source file under src/', () => {
    for (const file of sourceFiles(SRC_ROOT)) {
      assertClean(path.relative(SRC_ROOT, file), readFileSync(file, 'utf8'));
    }
  });
});
