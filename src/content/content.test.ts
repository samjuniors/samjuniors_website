import { describe, it, expect } from 'vitest';
import { companyContent } from './company';
import { products, getProductBySlug, getFlagshipProduct } from './products';
import { siteNavigation } from './navigation';

describe('Canonical Content Layer', () => {
  it('defines valid parent company identity and purpose (COMPANY-001)', () => {
    expect(companyContent.name).toBe('SamJuniors');
    expect(companyContent.purpose).toContain('AI-first technology ecosystem');
    expect(companyContent.buildingFilters.length).toBe(4);
    expect(companyContent.buildingCycle.length).toBe(6);
  });

  it('supports multi-product architecture with Lumora as flagship (COMPANY-003)', () => {
    expect(products.length).toBeGreaterThanOrEqual(1);
    const flagship = getFlagshipProduct();
    expect(flagship.slug).toBe('lumora');
    expect(flagship.isFlagship).toBe(true);
  });

  it('retrieves products by slug and handles unknown products gracefully', () => {
    const lumora = getProductBySlug('lumora');
    expect(lumora).toBeDefined();
    expect(lumora?.name).toBe('Lumora');

    const unknown = getProductBySlug('nonexistent-product');
    expect(unknown).toBeUndefined();
  });

  it('provides complete navigation structure', () => {
    expect(siteNavigation.primaryLinks.length).toBeGreaterThan(0);
    expect(siteNavigation.footerGroups.length).toBeGreaterThan(0);
    expect(siteNavigation.primaryCta.href).toBeDefined();
    for (const group of siteNavigation.footerGroups) {
      expect(group.label).toBeTruthy();
      expect(group.links.length).toBeGreaterThan(0);
    }
  });

  it('enumerates products under the Products footer group, never as company peers (COMPANY-003)', () => {
    const productGroup = siteNavigation.footerGroups.find((group) => group.label === 'Products');
    expect(productGroup).toBeDefined();

    // Every registered product must be reachable from the group, and no product
    // may appear in any other group: the footer is where the hierarchy is
    // stated structurally, so a product sitting beside Company links would
    // assert that it is a peer of the company.
    for (const product of products) {
      const href = `/products/${product.slug}`;
      expect(productGroup?.links.some((link) => link.href === href)).toBe(true);
      for (const group of siteNavigation.footerGroups) {
        if (group.label === 'Products') continue;
        expect(group.links.some((link) => link.href === href)).toBe(false);
      }
    }
  });
});
