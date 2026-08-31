/**
 * Canonical Content Schemas & Type Contracts for SamJuniors Platform
 * Grounded in docs/company/company-foundation.md
 */

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
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  status: 'live' | 'beta' | 'research' | 'archived';
  isFlagship: boolean;
  capabilities: {
    title: string;
    description: string;
    isPlaceholder?: boolean;
  }[];
  verifiableEvidence?: {
    type: 'benchmark' | 'demo' | 'case-study';
    title: string;
    description: string;
    isPlaceholder?: boolean;
  }[];
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationStructure {
  primaryLinks: NavigationItem[];
  footerLinks: NavigationItem[];
  primaryCta: NavigationItem;
}

export interface VerifiedProofItem {
  id: string;
  category: 'people' | 'product' | 'builder' | 'evidence';
  title: string;
  description: string;
  isPlaceholder?: boolean;
}
