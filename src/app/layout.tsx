import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/src/components/shared/Navbar";
import Footer from "@/src/components/shared/Footer"; // <--- Import this
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
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Navbar /> {/* <--- Add this line here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}