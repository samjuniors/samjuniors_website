import { VerifiedProofItem } from './types';

/**
 * Contextual Evidence Matrix (Zero Fabrication Standard)
 * Source: docs/website/02-content-strategy/content-strategy.md (CONTENT-006)
 */
export const proofItems: VerifiedProofItem[] = [
  {
    id: 'proof-builder',
    category: 'builder',
    title: 'Architectural Rigour',
    description: 'Systematic multi-phase governance and transparent technical specifications.',
  },
  {
    id: 'proof-product',
    category: 'product',
    title: 'Functional Proof Demonstration',
    description: 'Live interactive sandbox and verifiable execution pipelines.',
    isPlaceholder: true,
  },
  {
    id: 'proof-evidence',
    category: 'evidence',
    title: 'Empirical Verification',
    description: 'Documented performance benchmarks verified upon product intake.',
    isPlaceholder: true,
  },
];
