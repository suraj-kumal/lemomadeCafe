import type { Metadata } from "next";
import { Delius_Swash_Caps } from "next/font/google";
import "./globals.css";

const deliusSwashCaps = Delius_Swash_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delius-swash-caps",
});

export const metadata: Metadata = {
  title: "Lemonade Cafe",
  description: "Best Lemon cafe in kathmandu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${deliusSwashCaps.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
