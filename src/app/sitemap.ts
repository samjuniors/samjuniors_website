import type { MetadataRoute } from 'next';
import { products } from '@/content/products';
import { siteUrl } from '@/lib/site';

/**
 * Sitemap. Product routes are derived from the content layer so a new product
 * cannot be added without appearing here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/products`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
