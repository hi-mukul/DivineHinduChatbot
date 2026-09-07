import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Divine Hindu - Premium Spiritual Products & Pooja Essentials",
  description: "Discover authentic Hindu idols, pooja essentials, rudraksha, incense, and spiritual items. Handcrafted with devotion for your sacred rituals.",
  keywords: "Hindu idols, pooja essentials, rudraksha, incense, spiritual products, religious items",
  openGraph: {
    title: "Divine Hindu - Premium Spiritual Products",
    description: "Authentic Hindu spiritual products and pooja essentials",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
