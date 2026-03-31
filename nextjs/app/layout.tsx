import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://realad.io'),
  title: {
    template: '%s | RealAd',
    default: 'RealAd — Infrastructure Partner for Startups | Rescue, Compliance, DevOps',
  },
  description:
    'We rescue broken infrastructure, implement compliance (NIS2, SOC2, ISO 27001), and provide ongoing cloud architecture support for startups and scale-ups.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://realad.io',
    siteName: 'RealAd',
    images: [{ url: '/og-home.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RealAd',
  url: 'https://realad.io',
  logo: 'https://realad.io/logo.svg',
  description: 'B2B infrastructure partner for startups — rescue, compliance, and ongoing cloud architecture.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calpe',
    addressRegion: 'Alicante',
    addressCountry: 'ES',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@realad.io',
    contactType: 'sales',
  },
  sameAs: ['https://www.linkedin.com/in/kochuraa', 'https://github.com/realad'],
  areaServed: ['US', 'GB', 'DE', 'NL', 'IE', 'SE', 'NO', 'DK', 'FI', 'AT', 'CH'],
  knowsAbout: [
    'Cloud Infrastructure',
    'AWS',
    'Kubernetes',
    'Terraform',
    'NIS2',
    'DORA',
    'SOC2',
    'ISO 27001',
    'HIPAA',
    'Infrastructure Audit',
    'DevOps',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-300 antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
      </body>
    </html>
  );
}
