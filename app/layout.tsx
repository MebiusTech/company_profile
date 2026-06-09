import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmokeyCursor from "@/components/SmokeyCursor";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mebius Tech | Digital Agency",
  description: "Mebius Tech merges Neo-Brutalist design aesthetics with high-performance software engineering. High-contrast, high-energy, unapologetically fast web experiences.",
  icons: {
    icon: '/logonobg.png', // Mengambil file logo-tab.png dari folder public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f9f9f9] text-[#1b1b1b] overflow-x-hidden" suppressHydrationWarning>
        <SmokeyCursor />
        <Navbar />
        <main className="flex-1 flex flex-col mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
