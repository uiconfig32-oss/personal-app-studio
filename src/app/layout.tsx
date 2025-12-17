import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burak Savkli | App Creator",
  description:
    "Building high-quality apps for everyday life. Engineer by trade, creator by choice.",
  keywords: ["App Developer", "Creator", "Mobile Apps", "Readnest"],
  authors: [{ name: "Burak Savkli" }],
  openGraph: {
    title: "Burak Savkli | App Creator",
    description:
      "Building high-quality apps for everyday life. Engineer by trade, creator by choice.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
