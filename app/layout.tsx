import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Papa Punjabi | Authentic Home-Style Punjabi Food",
  description: "Experience the true warmth of home-style Punjabi cooking. Freshly prepared, traditional dishes including Fauji Mutton, Dal Makhni, and more, delivered with love.",
  keywords: ["Punjabi food", "Home-style cooking", "Fauji Mutton", "Dal Makhni", "Authentic Punjabi dishes", "Freshly prepared meals", "North Indian food delivery"],
  authors: [{ name: "Papa Punjabi" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Papa Punjabi | Authentic Home-Style Punjabi Food",
    description: "Experience the true warmth of home-style Punjabi cooking. Freshly prepared, traditional dishes delivered with love.",
    url: "https://papapunjabi.com", // Assuming the site name based on branding
    siteName: "Papa Punjabi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papa Punjabi | Authentic Home-Style Punjabi Food",
    description: "Experience the true warmth of home-style Punjabi cooking. Freshly prepared, traditional dishes delivered with love.",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
