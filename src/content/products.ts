import { Product } from './types';

/**
 * Product Ecosystem Registry
 * Source: Lumora Product Truth (AI-native Academic Operating System)
 * Baseline Model: Academic Data → Understanding → Decision Support → Action
 */
export const products: Product[] = [
  {
    slug: 'lumora',
    name: 'Lumora',
    tagline: 'AI-native Academic Operating System.',
    shortDescription: 'Transforms fragmented coursework, research, deadlines, and degree milestones into coherent academic understanding and actionable guidance.',
    status: 'beta',
    isFlagship: true,
    capabilities: [
      {
        title: 'Academic Context Synthesis',
        description: 'Unifies syllabi, course records, research tracks, and milestones into an active student context.',
        isPlaceholder: false,
      },
      {
        title: 'Intelligent Decision Guidance',
        description: 'Provides grounded academic advice, scheduling optimization, and degree trajectory planning.',
        isPlaceholder: false,
      },
      {
        title: 'Focused Action Workspace',
        description: 'Turns synthesized guidance directly into structured study sprints and research execution.',
        isPlaceholder: false,
      },
    ],
    verifiableEvidence: [
      {
        type: 'demo',
        title: 'Academic Intelligence Demonstration',
        description: 'Interactive conceptual demonstration of academic context synthesis and decision guidance.',
        isPlaceholder: false,
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

