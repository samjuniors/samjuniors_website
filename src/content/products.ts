import { Product } from './types';

/**
 * Product Ecosystem Registry
 * Source: docs/company/company-foundation.md (COMPANY-001, COMPANY-003)
 * Note: Lumora is certified flagship; unvetted specs are explicitly marked isPlaceholder: true.
 */
export const products: Product[] = [
  {
    slug: 'lumora',
    name: 'Lumora',
    tagline: 'Spatial intelligence and creative authoring platform.',
    shortDescription: 'The first major flagship platform expression of the SamJuniors technology ecosystem.',
    status: 'beta',
    isFlagship: true,
    capabilities: [
      {
        title: 'Core Functional Platform',
        description: 'Primary user workflow engine designed for high-performance authoring.',
        isPlaceholder: true,
      },
      {
        title: 'Contextual Intelligence',
        description: 'AI-assisted generation and execution tailored to user intent.',
        isPlaceholder: true,
      },
      {
        title: 'Open Ecosystem Interoperability',
        description: 'Seamless integration with external development and production toolchains.',
        isPlaceholder: true,
      },
    ],
    verifiableEvidence: [
      {
        type: 'demo',
        title: 'Interactive Preview Environment',
        description: 'Direct interactive demonstration canvas pending product truth intake.',
        isPlaceholder: true,
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getFlagshipProduct(): Product {
  const flagship = products.find((p) => p.isFlagship);
  if (!flagship) {
    return products[0];
  }
  return flagship;
}
