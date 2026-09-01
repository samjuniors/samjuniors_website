import type { NextConfig } from "next";

/**
 * Baseline security headers.
 *
 * Scoped deliberately: this is a static, cookie-free marketing site with no
 * auth, no form posts, and no third-party embeds, so the headers that matter
 * are the transport and framing ones. A full Content-Security-Policy is not
 * included — Next.js injects inline bootstrap scripts, so a CSP here would need
 * either 'unsafe-inline' (which buys almost nothing) or per-request nonces via
 * middleware, which is more moving parts than this site's risk profile
 * justifies. Revisit if the site ever accepts user input or loads third-party
 * script.
 *
 * Note: headers() applies when the Next.js server serves the response. Behind a
 * CDN or static host, the same headers must also be set at that layer.
 */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
