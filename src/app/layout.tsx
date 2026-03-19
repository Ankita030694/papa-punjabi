import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "../../public/asseys/SpaceGrotesk_Complete/Fonts/WEB/fonts/SpaceGrotesk-Variable.woff2",
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Punjabi Papa",
  description: "The story of two friends & one kitchen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <div className="w-full bg-[#F9F1DF] py-4 flex justify-center items-center">
          <Image 
            src="/pp-logo.svg" 
            alt="Punjabi Papa" 
            width={200} 
            height={80} 
            className="h-26 w-auto object-contain" 
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
