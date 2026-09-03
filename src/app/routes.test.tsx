import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';
import ProductsPage from './products/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ProductDetailPage from './products/[slug]/page';

/**
 * jsdom has no IntersectionObserver / ResizeObserver. The scroll primitives are
 * written to survive their absence, but the constructors still have to exist for
 * the components that construct them unconditionally on the client.
 */
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

describe('Application route rendering', () => {
  it('renders the homepage with the company statement and the flagship beat', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /Lumora — assessment the teacher still decides/i }),
    ).toBeDefined();
    // The flagship CTA must leave the homepage, not scroll back into it.
    expect(screen.getByRole('link', { name: /How Lumora works/i }).getAttribute('href')).toBe(
      '/products/lumora',
    );
  });

  it('states the four real workflow steps on the homepage', () => {
    render(<HomePage />);
    for (const label of [
      'Submission Intake',
      'AI Evaluation',
      'Confidence Triage',
      'Teacher Review & Release',
    ]) {
      expect(screen.getByRole('heading', { name: label })).toBeDefined();
    }
  });

  it('renders no fabricated founder identity while founder fields are unsupplied', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /founder-led, and deliberately not a personal brand/i })).toBeDefined();
    expect(screen.queryByRole('blockquote')).toBeNull();
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('renders the products page with the single real product', () => {
    render(<ProductsPage />);
    expect(screen.getByRole('heading', { level: 1, name: /^Products$/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Lumora/i })).toBeDefined();
  });

  it('renders the about page with the building filters', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /What SamJuniors is, and how it builds/i }),
    ).toBeDefined();
    expect(screen.getByText(/Innovation/i)).toBeDefined();
    expect(screen.getByText(/User Value/i)).toBeDefined();
  });

  it('renders the contact page with a working mailto', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Connect with SamJuniors/i })).toBeDefined();
    const link = screen.getByRole('link', { name: /contact@samjuniors\.com/i });
    expect(link.getAttribute('href')).toBe('mailto:contact@samjuniors.com');
  });

  it('answers the required questions on the Lumora product page', async () => {
    const Component = await ProductDetailPage({ params: Promise.resolve({ slug: 'lumora' }) });
    render(Component);

    expect(screen.getByRole('heading', { level: 1, name: /Lumora/i })).toBeDefined();
    expect(screen.getByText(/Teachers and instructors/i)).toBeDefined();
    expect(screen.getByText(/The problem/i)).toBeDefined();
    expect(screen.getByRole('heading', { name: /Implemented and observable in the product/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /Named, so nobody has to guess/i })).toBeDefined();
    expect(screen.getByText(/Pre-launch · Phase 1 core workflow beta · in active development/i)).toBeDefined();

    // A real next action, not a scroll back into the same page.
    const cta = screen.getByRole('link', { name: /Email us about Lumora/i });
    expect(cta.getAttribute('href')).toMatch(/^mailto:contact@samjuniors\.com/);
  });
});
