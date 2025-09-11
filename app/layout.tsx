import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/Cursor";
import LoadingProvider from "./components/Loading";
import Loader from "./components/Loader";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import TransitionProvider from "./components/TransitionProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agha Naveed Portfolio | Full Stack Engineer | MERN Stack Developer in Pakistan",
  description: "MERN Stack Developer from Skardu, Pakistan, delivering scalable web applications using Next.js, React, Node.js, and MongoDB. Helping startups and businesses in Gilgit Baltistan and beyond build digital products.",
  keywords: [
    "Web Developer in Skardu",
    "MERN Stack Developer in Pakistan",
    "Full Stack Developer in Gilgit Baltistan",
    "React JS Developer in Pakistan",
    "Remote Full Stack Engineer from Pakistan",
    "Software Developer in Skardu",
    "AI Engineer in Pakistan",
    "Freelance Web Developer in Gilgit Baltistan",
    "Frontend Developer in Pakistan",
    "Backend Developer in Skardu",
    "MERN Developer in Gilgit",
    "JavaScript Developer in Pakistan",
    "Node.js Developer in Pakistan",
    "MongoDB Developer in Pakistan",
    "Express.js Developer from Skardu",
    "Next.js Developer in Pakistan",
    "Web App Developer in Northern Pakistan",
    "Tech Talent from Gilgit Baltistan",
    "Pakistani Software Engineer Portfolio",
    "Remote React Developer in Pakistan",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://aghanaveed.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Agha Naveed",
    description: "Full Stack Developer | Software Engineer",
    url: "https://aghanaveed.vercel.app",
    siteName: "Agha Naveed Portfolio",
    images: [
      {
        url: "https://agha-naveed.vercel.app/assets/my-picture-V7ZyympP.png",
        width: 800,
        height: 600,
        alt: "Agha Naveed Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agha Naveed",
    description: "Full Stack Developer | Software Engineer",
    images: [
      "https://agha-naveed.vercel.app/assets/my-picture-V7ZyympP.png",
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Agha Naveed",
  "url": "https://aghanaveed.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/agha-naveed",
    "https://github.com/agha-naveed",
    "https://x.com/naveed_kazmi31"
  ],
  "jobTitle": "Full Stack Engineer, Software Engineer",
  "image": "https://agha-naveed.vercel.app/assets/my-picture-V7ZyympP.png",
  "description": "Full Stack Web Developer specializing in MERN stack, React.js, and AI Engineering."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <LoadingProvider>
              <body
                className={`${poppins.variable} overflow-hidden antialiased`}>
                  <script async
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                  />
                  <TransitionProvider>
                  <Suspense fallback={<Loader />}>
                    <CustomCursor />
                    <Navbar />
                    {children}
                    <SpeedInsights/>
                  </Suspense>
                </TransitionProvider>
              </body>
            </LoadingProvider>
        </html>
  );
}
