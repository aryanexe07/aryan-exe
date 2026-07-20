import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARYAN.EXE — Developer Portfolio',
  description: 'Aryan — Full-stack developer building fast, accessible, and delightful web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
