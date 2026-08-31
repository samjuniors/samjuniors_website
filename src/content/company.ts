import { CompanyIdentity } from './types';

/**
 * Canonical Parent Company Foundation Data
 * Source: docs/company/company-foundation.md (COMPANY-001, COMPANY-002, COMPANY-003)
 */
export const companyContent: CompanyIdentity = {
  name: 'SamJuniors',
  legalEntity: 'SamJuniors Technology Ecosystem',
  tagline: 'Turning ambitious ideas into real, useful technology.',
  purpose: 'SamJuniors aims to build an AI-first technology ecosystem, turning ambitious ideas into real products that solve meaningful problems and create impact.',
  reputationPillars: [
    'Exceptional AI Innovation',
    'Strong Engineering & Execution',
    'Enduring Product Ecosystem',
  ],
  buildingFilters: [
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Does this advance technological capability or solve problems in a fundamentally better way?',
    },
    {
      id: 'user-value',
      title: 'User Value',
      description: 'Does this deliver tangible, measurable utility to real people?',
    },
    {
      id: 'impact',
      title: 'Impact',
      description: 'Does this create meaningful, positive change in its target domain?',
    },
    {
      id: 'long-term-vision',
      title: 'Long-Term Vision',
      description: 'Does this align with and reinforce the enduring technology ecosystem?',
    },
  ],
  buildingCycle: [
    {
      stage: 1,
      title: 'See What Could Be Next',
      description: 'Anticipate future technological shifts and human requirements.',
    },
    {
      stage: 2,
      title: 'Identify Meaningful Opportunity',
      description: 'Filter through our core criteria to find fundamental, structural problems.',
    },
    {
      stage: 3,
      title: 'Build It Seriously',
      description: 'Engineer robust, production-grade systems with zero superficial wrappers.',
    },
    {
      stage: 4,
      title: 'Make It Genuinely Useful',
      description: 'Eliminate deep workflow friction to deliver measurable daily utility.',
    },
    {
      stage: 5,
      title: 'Learn From Real People',
      description: 'Validate through authentic usage, understanding human needs in practice.',
    },
    {
      stage: 6,
      title: 'Evolve Continuously',
      description: 'Refine and compound platform value over decades of sustained craft.',
    },
  ],
};
