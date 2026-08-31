import { VerifiedProofItem } from './types';

/**
 * Contextual Evidence Matrix (Zero Fabrication Standard)
 * Source: content-strategy decision record (see docs/website/decisions.md).
 *
 * Placeholder-flagged items (proof-product, proof-evidence) were removed per
 * qa-checklist.md debt D3: founder-supplied verified copy had not arrived, and
 * placeholder content may not ship (render gate §2.2). The missing-copy gaps
 * remain tracked in docs/website/copy.md §10 pending founder sign-off.
 */
export const proofItems: VerifiedProofItem[] = [
  {
    id: 'proof-builder',
    category: 'builder',
    title: 'Architectural Rigour',
    description: 'Systematic multi-phase governance and transparent technical specifications.',
  },
];
