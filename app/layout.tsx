import type { Metadata } from "next";
import { Delius_Swash_Caps } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${deliusSwashCaps.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
