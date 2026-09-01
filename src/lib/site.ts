/**
 * Canonical site origin.
 *
 * Used for `metadataBase`, the sitemap, and robots. Absolute URLs in social
 * metadata cannot be derived at runtime by Next.js, so the origin has to be
 * stated once here rather than guessed per route. Deploy previews can override
 * it with NEXT_PUBLIC_SITE_URL without touching any route file.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samjuniors.com').replace(/\/$/, '');
