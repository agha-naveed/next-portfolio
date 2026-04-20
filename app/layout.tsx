import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Naveed Abbas — Engineer & AI Architect",
  description: "Full-Stack Software Engineer. MERN Stack & offline AI systems. Based in Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </head> */}
      <body>{children}</body>
    </html>
  );
}
