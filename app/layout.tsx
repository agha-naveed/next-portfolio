import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: {
    default: 'Syed Naveed Abbas | Software Engineer & AI Architect',
    template: '%s | Syed Naveed Abbas',
  },
  description: 'Portfolio of Syed Naveed Abbas, a Full-Stack Software Engineer and AI Architect based in Pakistan, specializing in high-performance MERN architectures and localized AI systems.',

  applicationName: 'Syed Naveed Portfolio',
  authors: [{ name: 'Syed Naveed Abbas', url: 'https://aghanaveed.vercel.com' }],
  creator: 'Syed Naveed Abbas',
  keywords: [
    'Syed Naveed Abbas',
    'Software Engineer Pakistan',
    'AI Architect',
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Cross-platform desktop app developer',
    'Full Stack Web Development'
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aghanaveed.vercel.app',
    title: 'Syed Naveed Abbas | Software Engineer & AI Architect',
    description: 'Explore the digital ecosystem of Syed Naveed Abbas. Bridging scalable web infrastructure with offline machine learning environments.',
    siteName: 'Syed Naveed Abbas',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg', // TODO: Add an actual 1200x630 image to your /public folder
        width: 1200,
        height: 630,
        alt: 'Syed Naveed Abbas - Software Engineer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Syed Naveed Abbas | Software Engineer & AI Architect',
    description: 'Explore the digital ecosystem of Syed Naveed Abbas. Bridging scalable web infrastructure with offline machine learning environments.',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://aghanaveed.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`bg-[#0f1115] text-gray-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}