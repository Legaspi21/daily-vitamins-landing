import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-loaded',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk-loaded',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daily Vitamins App – Habit Tracker for Kids | Parents & Coaches',
  description:
    'Daily Vitamins is a habit-building app for kids. Parents and coaches assign daily activities, kids build streaks and earn points. Join the waitlist.',
  keywords: [
    'daily vitamins app',
    'habit tracker for kids',
    'kids habit app',
    'children habit tracker',
    'daily habits for kids',
    'kids streak app',
    'habit building app',
    'kids routine app',
    'parent coach app',
    'kids accountability app',
  ],
  metadataBase: new URL('https://dailyvitamins.app'),
  alternates: { canonical: 'https://dailyvitamins.app' },
  openGraph: {
    title: 'Daily Vitamins App – Habit Tracker for Kids',
    description:
      'Daily Vitamins helps parents and coaches turn habits into streaks for kids. Assign activities, build routines, celebrate progress.',
    url: 'https://dailyvitamins.app',
    siteName: 'Daily Vitamins',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Daily Vitamins App' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Vitamins App – Habit Tracker for Kids',
    description:
      'Daily Vitamins helps parents and coaches turn habits into streaks for kids.',
    images: ['/og.png'],
  },
  icons: { icon: '/icon.png' },
  robots: { index: true, follow: true },
  verification: { google: '9txCapIjdjgKqubzYm08hkdzfkN-ijDEZLPv1gtcCbI' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://dailyvitamins.app/#website',
      url: 'https://dailyvitamins.app',
      name: 'Daily Vitamins',
      description: 'Habit-building app for kids, parents, and coaches.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://dailyvitamins.app/#app',
      name: 'Daily Vitamins',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'iOS, Android',
      description:
        'Daily Vitamins is a habit-building app that lets parents and coaches assign daily activities to kids. Kids complete vitamins, build streaks, earn points, and grow healthy routines.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: undefined,
      url: 'https://dailyvitamins.app',
      audience: {
        '@type': 'PeopleAudience',
        suggestedMinAge: 5,
        suggestedMaxAge: 18,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body bg-background text-app-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
