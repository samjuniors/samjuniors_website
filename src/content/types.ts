/**
 * Canonical Content Schemas & Type Contracts for SamJuniors Platform
 * Grounded in docs/company/foundation.md
 *
 * This is a content/data boundary for the SamJuniors company website. It
 * describes what the website is allowed to say about the company and its
 * products. It is deliberately NOT a transcription of internal strategy,
 * roadmap, or business documents.
 */

/** Founder presence fields. `null` means "not yet supplied by the founder". */
export interface FounderPresence {
  name: string | null;
  role: string | null;
  bio: string | null;
  portrait: ImageAsset | null;
  statement: string | null;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CompanyIdentity {
  name: string;
  legalEntity: string;
  tagline: string;
  purpose: string;
  reputationPillars: string[];
  buildingFilters: {
    id: string;
    title: string;
    description: string;
  }[];
  buildingCycle: {
    stage: number;
    title: string;
    description: string;
  }[];
  founder: FounderPresence;
  contactEmail: string;
}

/** A single, ordered step of a product's real end-user workflow. */
export interface ProductWorkflowStep {
  id: string;
  /** Display ordinal, e.g. '01'. */
  order: string;
  label: string;
  summary: string;
}

export interface ProductCapability {
  title: string;
  description: string;
  isPlaceholder?: boolean;
}

/** Capability that is explicitly NOT available today. */
export interface ProductRoadmapItem {
  title: string;
  description: string;
  horizon: 'in-development' | 'planned';
}

/**
 * Evidence of a real product surface. `image` points at a real capture of the
 * shipping product; when no verified capture is available the item must be
 * flagged `isPlaceholder` so render gates omit it rather than implying proof.
 */
export interface ProductEvidenceItem {
  id: string;
  type: 'product-surface' | 'demo' | 'case-study';
  title: string;
  description: string;
  /** Literal, checkable observations from the captured surface. */
  observed: string[];
  image?: ImageAsset;
  /** True when the underlying data shown is seeded demonstration data. */
  isDemoData?: boolean;
  isPlaceholder?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  /** Product category, e.g. 'Academic assessment platform'. */
  category: string;
  tagline: string;
  shortDescription: string;
  problem: string;
  audience: {
    primary: string;
    secondary: string[];
  };
  status: 'live' | 'beta' | 'research' | 'archived';
  /** Honest, human-readable status line. Never imply general availability. */
  statusLabel: string;
  /** Load-bearing product principle stated in the product's own terms. */
  principle: string;
  isFlagship: boolean;
  workflow: ProductWorkflowStep[];
  /** Implemented and observable today. */
  capabilities: ProductCapability[];
  /** Explicitly not available today. */
  roadmap: ProductRoadmapItem[];
  evidence: ProductEvidenceItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/**
 * A labelled group of footer links. The group label is load-bearing: it is
 * where the site states the company/product hierarchy structurally rather
 * than in prose — `Company` links describe SamJuniors, `Products` links
 * describe things SamJuniors builds. Products are enumerated from the product
 * registry, never hardcoded, so a second product needs no navigation edit.
 */
export interface NavigationGroup {
  label: string;
  links: NavigationItem[];
}

export interface NavigationStructure {
  primaryLinks: NavigationItem[];
  footerGroups: NavigationGroup[];
  primaryCta: NavigationItem;
}

export interface VerifiedProofItem {
  id: string;
  category: 'people' | 'product' | 'builder' | 'evidence';
  title: string;
  description: string;
  isPlaceholder?: boolean;
}
