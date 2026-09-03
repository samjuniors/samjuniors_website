import { NavigationStructure } from './types';
import { products } from './products';

/**
 * Site navigation.
 *
 * Hierarchy rule: SamJuniors is the company, products are things it builds.
 * The primary nav therefore names the company itself (`Company`) alongside the
 * portfolio (`Products`), and the footer separates the two into labelled
 * groups so the relationship is legible on every page without prose.
 *
 * The product entries are derived from the product registry rather than
 * written here: adding a product must never require a navigation edit
 * (product-spec §5.4, decoupled topologies).
 */
export const siteNavigation: NavigationStructure = {
  primaryLinks: [
    { label: 'Products', href: '/products' },
    { label: 'Company', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footerGroups: [
    {
      label: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'Products',
      links: [
        { label: 'All products', href: '/products' },
        ...products.map((product) => ({
          label: product.name,
          href: `/products/${product.slug}`,
        })),
      ],
    },
  ],
  primaryCta: {
    label: 'Get in touch',
    href: '/contact',
  },
};
