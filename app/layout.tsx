export const metadata = {
  title: "My AI Portfolio",
  description: "Showcase of an AI Engineer's skillset and projects",
};

import "./globals.css"; // Your Tailwind CSS entry

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
