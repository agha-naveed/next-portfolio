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
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Agha Naveed",
  "url": "https://www.aghanaveed.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/agha-naveed",
    "https://github.com/aghanaveed"
  ],
  "jobTitle": "Full Stack Engineer",
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
      <Head>
      <title>Agha Naveed Portfolio | Full Stack Engineer</title>
      <meta name="description" content="Full Stack Web Developer" />
      <meta name="keywords" content="Full Stack Engineer, MERN Stack Developer, React Js Developer, Software Developer, AI Engineer" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.aghanaveed.vercel.app" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Agha Naveed Portfolio" />
      <meta property="og:description" content="Full Stack Engineer | Software Engineer" />
      <meta property="og:url" content="https://www.aghanaveed.vercel.app" />
      <meta property="og:site_name" content="Agha Naveed Portfolio" />
      <meta property="og:image" content="https://agha-naveed.vercel.app/assets/my-picture-V7ZyympP.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="Agha Naveed Banner" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Agha Naveed Portfolio" />
      <meta name="twitter:description" content="Full Stack Engineer | Software Engineer" />
      <meta name="twitter:image" content="https://agha-naveed.vercel.app/assets/my-picture-V7ZyympP.png" />
          {
            <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        }
      </Head>
            <LoadingProvider>
              <body
                className={`${poppins.variable} overflow-hidden antialiased`}>
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
