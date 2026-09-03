import { describe, it, expect, beforeAll } from 'vitest';
import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import { Footer } from '@/components/layout/Footer';
import HomePage from './page';
import ProductsPage from './products/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ProductDetailPage from './products/[slug]/page';

/**
 * Company/product hierarchy guard.
 *
 * SamJuniors is the company; Lumora is one product it builds. That relationship
 * is easy to state once and then lose incrementally — a product-scoped primary
 * CTA here, a page that opens on the product name there — until the company
 * reads as a wrapper around its first product.
 *
 * The decisive question these tests encode: if Lumora were temporarily removed,
 * would this still clearly be a SamJuniors company website? Each assertion
 * below is a place where the answer was, or could silently become, no.
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

const COMPANY = companyContent.name;
const PRODUCT = getFlagshipProduct().name;

/**
 * Text a visitor (or a screen reader) actually encounters. JSON-LD is excluded
 * deliberately: the product page emits its SoftwareApplication node before its
 * Organization node, which is correct for the graph — `publisher` carries the
 * hierarchy there — but says nothing about reading order on the page.
 */
function visibleText(container: HTMLElement): string {
  const clone = container.cloneNode(true) as HTMLElement;
  for (const node of [...clone.querySelectorAll('script, style')]) {
    node.remove();
  }
  return clone.textContent ?? '';
}

describe('the company is named before any product it builds', () => {
  function assertCompanyFirst(label: string, text: string) {
    const company = text.indexOf(COMPANY);
    const product = text.indexOf(PRODUCT);
    expect(company, `${label} never names ${COMPANY}`).toBeGreaterThanOrEqual(0);
    if (product < 0) return;
    expect(
      company,
      `${label} names ${PRODUCT} before ${COMPANY}, which reads as a product site`,
    ).toBeLessThan(product);
  }

  it('homepage', () => {
    const { container } = render(<HomePage />);
    assertCompanyFirst('homepage', visibleText(container));
  });

  it('products index', () => {
    const { container } = render(<ProductsPage />);
    assertCompanyFirst('/products', visibleText(container));
  });

  it('company page', () => {
    const { container } = render(<AboutPage />);
    assertCompanyFirst('/about', visibleText(container));
  });

  it('contact', () => {
    const { container } = render(<ContactPage />);
    assertCompanyFirst('/contact', visibleText(container));
  });

  it('product detail page — via the breadcrumb trail', async () => {
    const Component = await ProductDetailPage({ params: Promise.resolve({ slug: 'lumora' }) });
    const { container } = render(Component);
    assertCompanyFirst('/products/lumora', visibleText(container));
  });
});

describe('CTA hierarchy', () => {
  it('the first primary action on the homepage is company-scoped', () => {
    const { container } = render(<HomePage />);
    const primary = container.querySelector('.btn-primary');

    // The single strongest action on the site's most-read surface decides what
    // the site is asking for. Pointing it at a product makes the first ask
    // "go look at this product" rather than "here is what this company builds".
    expect(primary?.getAttribute('href')).toBe('/products');
  });

  it('the company page leads to the portfolio, not straight into the product', () => {
    const { container } = render(<AboutPage />);
    const hrefs = [...container.querySelectorAll('a')].map((a) => a.getAttribute('href'));

    expect(hrefs).toContain('/products');
    expect(hrefs).not.toContain(`/products/${getFlagshipProduct().slug}`);
  });

  it('the portfolio closes with a company path', () => {
    const { container } = render(<ProductsPage />);
    const hrefs = [...container.querySelectorAll('a')].map((a) => a.getAttribute('href'));

    expect(hrefs).toContain('/about');
  });
});

describe('the portfolio page stands without its one product', () => {
  it('states the company standard independently of product data', () => {
    const { container } = render(<ProductsPage />);
    const text = visibleText(container);

    // Rendered from companyContent.reputationPillars: nothing here is derived
    // from the product registry, so an empty registry would leave a page that
    // is still about the company.
    expect(text).toContain(`What ${COMPANY} sets out to be known for`);
    for (const pillar of companyContent.reputationPillars) {
      expect(text).toContain(pillar);
    }
  });
});

describe('the footer states the hierarchy structurally', () => {
  it('separates the company from the things it builds', () => {
    const { container, getByRole } = render(<Footer />);

    const companyNav = getByRole('navigation', { name: 'Company' });
    const productsNav = getByRole('navigation', { name: 'Products' });
    const productHref = `/products/${getFlagshipProduct().slug}`;

    const inProducts = [...productsNav.querySelectorAll('a')].map((a) => a.getAttribute('href'));
    const inCompany = [...companyNav.querySelectorAll('a')].map((a) => a.getAttribute('href'));

    expect(inProducts).toContain(productHref);
    expect(inCompany).not.toContain(productHref);
    expect(container.textContent).toContain(COMPANY);
  });
});

/**
 * Internal governance vocabulary. `docs/` calls SamJuniors the "parent company"
 * and tracks decision IDs and phase names; none of that is language a visitor
 * should ever meet. The product's own status label legitimately contains a
 * phase name ("Phase 1 core workflow beta"), so the terms here are the
 * governance phrasings specifically, not the word "phase".
 */
const INTERNAL_VOCABULARY = [
  'parent company',
  'parent-company',
  'parent technology ecosystem',
  'company foundation',
  'decision id',
  'company-001',
] as const;

describe('no internal governance vocabulary reaches a visitor', () => {
  const pages: Array<[string, () => ReactElement]> = [
    ['homepage', () => <HomePage />],
    ['/products', () => <ProductsPage />],
    ['/about', () => <AboutPage />],
    ['/contact', () => <ContactPage />],
  ];

  for (const [label, page] of pages) {
    it(label, () => {
      const { container } = render(page());
      const haystack = visibleText(container).toLowerCase();
      const hits = INTERNAL_VOCABULARY.filter((term) => haystack.includes(term));
      expect(hits, `${label} exposes internal vocabulary: ${hits.join(', ')}`).toEqual([]);
    });
  }

  it('footer', () => {
    const { container } = render(<Footer />);
    const haystack = visibleText(container).toLowerCase();
    const hits = INTERNAL_VOCABULARY.filter((term) => haystack.includes(term));
    expect(hits, `footer exposes internal vocabulary: ${hits.join(', ')}`).toEqual([]);
  });
});
