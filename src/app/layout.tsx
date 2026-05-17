import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shaik Babasaheb | Full Stack Developer',
  description:
    'Full Stack Developer based in Bangalore, India. Specialized in React.js, TypeScript, Next.js, Node.js, and Golang.',
  keywords: ['Full Stack Developer', 'React', 'TypeScript', 'Next.js', 'Golang', 'Node.js', 'AWS'],
  authors: [{ name: 'Shaik Babasaheb' }],
  icons: {
    icon: '/favicon.svg',
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
      </head>
      <body>{children}</body>
    </html>
  );
}
