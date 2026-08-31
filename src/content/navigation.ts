import { NavigationStructure } from './types';

export const siteNavigation: NavigationStructure = {
  primaryLinks: [
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footerLinks: [
    { label: 'Products Portfolio', href: '/products' },
    { label: 'Company Foundation', href: '/about' },
    { label: 'Inquiries', href: '/contact' },
  ],
  primaryCta: {
    label: 'Explore Ecosystem',
    href: '/products',
  },
};
