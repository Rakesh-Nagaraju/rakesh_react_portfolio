export const metadata = {
  title: "Rakesh AI- portfolio",
  description: "Showcase of an my skillset and projects",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#01070e",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/ai-711.png",
    apple: "/images/ai-711.png",
  },
};

import "./globals.css"; // Your Tailwind CSS entry
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ai-711.png" />
        <link rel="preload" href="/images/bg_removed_1_copy.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
