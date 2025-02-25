export const metadata = {
  title: "Rakesh AI",
  description: "Showcase of an my skillset and projects",
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
        </head>
      <body>{children}</body>
    </html>
  );
}
