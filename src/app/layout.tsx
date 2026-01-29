import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/src/components/shared/Navbar";
import Footer from "@/src/components/shared/Footer";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Infyn Labs | Enterprise Cybersecurity",
  description: "Cybersecurity-first technology company building secure digital systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* FIX EXPLAINED:
         1. overflow-x-hidden: Prevents horizontal scrolling/shifting.
         2. relative: Context for fixed elements like Navbar.
         3. bg-black: Ensures background matches your theme.
      */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white overflow-x-hidden w-full relative selection:bg-brand-accent selection:text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}