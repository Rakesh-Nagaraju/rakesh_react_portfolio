export const metadata = {
  title: "My AI Portfolio",
  description: "Showcase of an AI Engineer's skillset and projects",
};

import "./globals.css"; // Your Tailwind CSS entry
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
