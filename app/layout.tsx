import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Syed Naveed Abbas | Portfolio',
  description: 'Next.js, MERN & AI Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Stable, dark background. No scroll shifting. */}
      <body className={`${poppins.className} bg-[#0f1115] text-gray-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}