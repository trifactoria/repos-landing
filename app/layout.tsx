import type { Metadata } from 'next';
import { Analytics } from './analytics';
import './globals.css';

const siteUrl = 'https://rep-os.dev';
const description =
  'RepOS is repos-cli: a cleaner command center for developers who live in the terminal.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RepOS | Multi-Panel Command Environment',
  description,
  keywords: ['repos-cli', 'CLI', 'terminal', 'command line', 'aliases', 'developer tools', 'productivity'],
  authors: [{ name: 'TriFactoria Labs' }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'RepOS | Multi-Panel Command Environment',
    description,
    url: siteUrl,
    siteName: 'RepOS',
    type: 'website',
    images: [
      {
        url: '/screenshots/repos-cli-terminal.png',
        width: 1246,
        height: 1007,
        alt: 'RepOS terminal interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RepOS | Multi-Panel Command Environment',
    description,
    images: ['/screenshots/repos-cli-terminal.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
