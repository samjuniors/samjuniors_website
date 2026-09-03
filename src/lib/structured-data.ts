import { companyContent } from '@/content/company';
import type { Product } from '@/content/types';
import { siteUrl } from './site';

/**
 * schema.org graph builders (§13 production readiness).
 *
 * Deliberately small: an Organization for the company, a SoftwareApplication
 * for a product, and a BreadcrumbList that mirrors the breadcrumbs a visitor
 * can actually see. Nothing here asserts a rating, a price, a review, a
 * customer or a release date, because none of those exist yet — structured
 * data is machine-readable marketing copy and is held to the same content
 * governance as the visible page.
 */

const organizationId = `${siteUrl}/#organization`;

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: companyContent.name,
    legalName: companyContent.legalEntity,
    url: `${siteUrl}/`,
    description: companyContent.purpose,
    email: companyContent.contactEmail,
    slogan: companyContent.tagline,
  };
}

export function organizationGraph() {
  return {
    '@context': 'https://schema.org',
    ...organizationNode(),
  };
}

/**
 * Product graph. `applicationCategory` is the schema enumeration value;
 * the product's own category line carries the accurate prose. No `offers`
 * node: the product is pre-launch, so there is nothing to offer and inventing
 * one to win a rich result would be a fabricated availability claim.
 */
export function productGraph(product: Product) {
  const productUrl = `${siteUrl}/products/${product.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${productUrl}#software`,
        name: product.name,
        applicationCategory: 'EducationalApplication',
        description: product.shortDescription,
        url: productUrl,
        publisher: { '@id': organizationId },
        audience: {
          '@type': 'Audience',
          audienceType: product.audience.primary,
        },
      },
      organizationNode(),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: companyContent.name,
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${siteUrl}/products`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: productUrl,
          },
        ],
      },
    ],
  };
}
