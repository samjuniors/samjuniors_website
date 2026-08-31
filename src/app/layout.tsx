import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { companyContent } from '@/content/company';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${companyContent.name} — Technology Ecosystem`,
    template: `%s | ${companyContent.name}`,
  },
  description: companyContent.purpose,
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0d10',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
