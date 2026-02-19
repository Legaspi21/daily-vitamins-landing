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
  title: 'Daily Vitamins – Building Better Kids, One Habit at a Time',
  description:
    'Daily Vitamins helps parents and coaches turn habits into streaks for kids. Join the waitlist.',
  metadataBase: new URL('https://dailyvitamins.app'),
  openGraph: {
    title: 'Daily Vitamins – Coming Soon',
    description:
      'Daily Vitamins helps parents and coaches turn habits into streaks for kids.',
    url: 'https://dailyvitamins.app',
    siteName: 'Daily Vitamins',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Daily Vitamins' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Vitamins – Coming Soon',
    description: 'Daily Vitamins helps parents and coaches turn habits into streaks for kids.',
    images: ['/og.png'],
  },
  icons: { icon: '/icon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body bg-background text-app-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
