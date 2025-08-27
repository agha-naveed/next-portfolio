import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/Cursor";
import LoadingProvider from "./components/Loading";
import Loader from "./components/Loader";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agha Naveed Portfolio | Full Stack Engineer",
  description: "Full Stack Web Developer",
  metadataBase: new URL("https://www.aghanaveed.vercel.app"),
  keywords: ["Full Stack Engineer", "MERN Stack Developer", "React Js Developer", "Software Developer", "AI Engineer"],
  robots: "index, follow",
  openGraph: {
    title: "Agha Naveed Portfolio",
    description: "Full Stack Engineer | Software Engineer",
    url: "https://www.aghanaveed.vercel.app",
    siteName: "Agha Naveed Portfolio",
    images: [
      {
        url: "https://agha-naveed.vercel.app/assets/my-picture-V7ZyympP.png",
        width: 800,
        height: 600,
        alt: "Agha Naveed Banner"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="4q3XnFFPqEBtFBFsSNzPLMgsAjkGxAWvK56Jy030V7Y" />
      </Head>
            <LoadingProvider>
              <body
                className={`${poppins.variable} overflow-hidden antialiased`}>
                <Suspense fallback={<Loader />}>
                  <CustomCursor />
                  <Navbar />
                  {children}
                  <SpeedInsights/>
                </Suspense>
              </body>
            </LoadingProvider>
        </html>
  );
}
