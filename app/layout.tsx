import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/Cursor";
import LoadingProvider from "./components/Loading";

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
    description: "Agha Naveed Technology",
    url: "https://www.aghanaveed.vercel.app",
    siteName: "Agha Naveed Portfolio",
    images: [
      {
        url: "https://www.stylefactoryproductions.com/wp-content/uploads/2022/04/how-to-make-an-online-store-copy-1024x576.png",
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
      <LoadingProvider>
        <body
          className={`${poppins.variable} overflow-hidden antialiased`}>
          <CustomCursor />
          <Navbar />
          {children}
        </body>
      </LoadingProvider>
    </html>
  );
}
