import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Quantico } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  variable: "--font-quantico",
  weight: ["400"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Booking",
  description: "A web-site for booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quantico.variable} antialiased scroll-[var(--accent)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
