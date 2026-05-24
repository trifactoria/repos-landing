import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RepOS | Multi-Panel Command Environment',
  description: 'Landing page for repos-cli, a multi-panel, database-backed command environment for developers who work in the terminal.',
  keywords: ['repos-cli', 'CLI', 'terminal', 'command line', 'aliases', 'developer tools', 'productivity'],
  authors: [{ name: 'TriFactoria Labs' }],
  openGraph: {
    title: 'RepOS | Multi-Panel Command Environment',
    description: 'Landing page for repos-cli, a multi-panel, database-backed command environment for developers who work in the terminal.',
    type: 'website',
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
