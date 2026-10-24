import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellar Technical Services | Smarter Water. Better Environments.",
  description:
    "Thoughtful water treatment, nanobubble pool technology and scent diffuser systems for better everyday environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
