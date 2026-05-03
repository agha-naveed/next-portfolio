import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Optimize Fonts for the new design (No CLS, better SEO performance)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

// 2. Your custom SEO & Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://aghanaveed.vercel.app"), // Note: using .app based on your schema.org link
  title: {
    default: "Syed Naveed Abbas — Full-Stack Engineer & AI Architect",
    template: "%s | Agha Naveed",
  },
  description:
    "Expert Full-Stack Software Engineer specialized in MERN Stack, Next.js, and offline AI systems. Building high-performance architectures like Vextor AI.",
  keywords: [
    "Agha Naveed",
    "Syed Naveed Abbas",
    "Software Engineer Pakistan",
    "AI Architect",
    "MERN Stack Developer",
    "Next.js Expert",
    "Vextor AI",
    "Computer Vision Engineer",
    "Offline AI Systems",
  ],
  authors: [{ name: "Syed Naveed Abbas" }],
  creator: "Syed Naveed Abbas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aghanaveed.vercel.app",
    title: "Syed Naveed Abbas — Engineer & AI Architect",
    description: "Full-Stack Software Engineer specializing in scalable systems and AI.",
    siteName: "Syed Naveed Abbas Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syed Naveed Abbas — AI Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Naveed Abbas — Engineer & AI Architect",
    description: "Full-Stack Software Engineer specializing in scalable systems and AI.",
    images: ["/og-image.jpg"],
    creator: "@naveed_kazmi31",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 3. Updated Viewport to match the new dark theme
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Syed Naveed Abbas",
              url: "https://aghanaveed.vercel.app",
              jobTitle: "Full-Stack Software Engineer & AI Architect",
              knowsAbout: [
                "Full-Stack Development",
                "MERN Stack",
                "Artificial Intelligence",
                "Computer Vision",
                "Next.js",
              ],
              sameAs: [
                "https://github.com/agha-naveed",
                "https://linkedin.com/in/agha-naveed",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}