import type { Metadata } from 'next';
import { Fugaz_One, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const fugaz = Fugaz_One({
  subsets: ['latin'],
  variable: '--font-fugaz',
  weight: '400',
});

const ibm = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ibm',
});

export const metadata: Metadata = {
  title: 'Teabag Titans',
  viewport: 'width=device-width, initial-scale=1',
  icons: [{ url: '/favicon.png', rel: 'icon' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fugaz.variable} ${ibm.variable} bg-black text-white`}>
      <body>{children}</body>
    </html>
  );
}
