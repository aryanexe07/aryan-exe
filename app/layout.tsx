import type { Metadata } from 'next';
import { Anton, Teko, Inter } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hero',
});

const teko = Teko({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-label',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'ARYAN.EXE — Developer Portfolio',
  description: 'Aryan — Full-stack developer building fast, accessible, and delightful web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${teko.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

