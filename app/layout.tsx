import type { Metadata } from "next";
import { Delius_Swash_Caps } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const deliusSwashCaps = Delius_Swash_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delius-swash-caps",
});

export const metadata: Metadata = {
  // ── Core ────────────────────────────────────────────────
  title: {
    default: "Lemonade Cafe — Best Lemon Tea in Kathmandu",
    template: "%s | Lemonade Cafe",
  },
  description:
    "Lemonade Cafe is a cozy local cafe in Swoyambhu, Kathmandu serving the best Lemon Tea, Hot Lemon, fresh lemonade, momos, thukpa, chowmein and more.",
  keywords: [
    "lemon tea kathmandu",
    "lemon tea swoyambhu",
    "best lemon tea nepal",
    "lemonade cafe kathmandu",
    "cafe swoyambhu",
    "hot lemon drink kathmandu",
    "fresh lemonade kathmandu",
    "momo swoyambhu",
    "thukpa kathmandu",
    "local cafe kathmandu",
    "nepali cafe",
    "chowmein kathmandu",
  ],
  authors: [{ name: "Lemonade Cafe" }],
  creator: "Lemonade Cafe",
  publisher: "Lemonade Cafe",

  // ── Canonical & Robots ──────────────────────────────────
  metadataBase: new URL("https://lemonadecafe.vercel.app"), // 🔁 replace with your actual domain
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ── Google Site Verification ─────────────────────────────
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE", // 🔁 get this from Google Search Console
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lemonadecafe.vercel.app", // 🔁 replace with your actual domain
    siteName: "Lemonade Cafe",
    title: "Lemonade Cafe — Best Lemon Tea in Kathmandu",
    description:
      "A cozy cafe in Swoyambhu, Kathmandu. Famous for fresh Lemon Tea, Hot Lemon, cold lemonade, momos, thukpa and more. Come visit us!",
    images: [
      {
        url: "/og-image.jpg", // 🔁 add a 1200x630 image to your /public folder
        width: 1024,
        height: 530,
        alt: "Lemonade Cafe — Swoyambhu, Kathmandu",
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Lemonade Cafe — Best Lemon Tea in Kathmandu",
    description:
      "Fresh Lemon Tea, Hot Lemon, cold lemonade, momos & more at Lemonade Cafe, Swoyambhu Kathmandu.",
    images: ["/og-image.jpg"], // 🔁 same image as OG
    // creator: "@yourTwitterHandle", // 🔁 add if you have a Twitter account
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${deliusSwashCaps.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
