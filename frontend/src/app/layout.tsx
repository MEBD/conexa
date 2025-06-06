import Navigation from '@/shared/ui/navigation/navigation';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Fraunces, Nunito_Sans } from 'next/font/google';
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
});
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '../shared/styles/index.css';

export const metadata: Metadata = {
  title: 'Star wars',
  description: 'Technical test',
};

const navigationData = {
  homePath: '/',
  links: [
    { label: 'Dashboard', path: '/' },
    { label: 'Films', path: '/films' },
    { label: 'Characters', path: '/characters' },
    { label: 'Planets', path: '/planets' },
    { label: 'Starships', path: '/starships' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.className} ${nunitoSans.className}`}>
      <body>
        <Navigation {...navigationData} />
        {children}
      </body>
    </html>
  );
}
