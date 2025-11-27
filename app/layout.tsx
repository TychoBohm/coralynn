// app/layout.tsx
// @ts-ignore: Allow importing global CSS in this file (no type declaration file present)
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coralynne",
  description: "Swimwear by Coralynne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Body classes hier vaste waarde geven -> geen hydration mismatch */}
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
