import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { companyContent } from '@/content/company';
import { siteUrl } from '@/lib/site';
import '@/styles/tokens.css';
import './globals.css';

/* Self-hosted fonts via next/font (debt D10) — replaces the render-blocking
   Google Fonts @import in globals.css. The CSS variables are consumed by the
   --font-sans / --font-mono tokens in src/styles/tokens.css. */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const defaultTitle = `${companyContent.name} — ${companyContent.tagline}`;

export const metadata: Metadata = {
  /* metadataBase resolves the relative Open Graph / Twitter image URLs that
     app/opengraph-image.tsx generates. Without it Next.js warns at build time
     and emits relative image paths, which no social crawler can fetch. */
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${companyContent.name}`,
  },
  description: companyContent.purpose,
  applicationName: companyContent.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: companyContent.name,
    title: defaultTitle,
    description: companyContent.purpose,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: companyContent.purpose,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  /* Matches --color-bg-base in src/styles/tokens.css; the previous #0c0d10 was
     a near-miss of the actual page background. */
  themeColor: '#0b0c0f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* First focusable element in the document (WCAG 2.4.1). */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
