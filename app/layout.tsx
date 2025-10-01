import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booking",
  description: "A web-site for booking",
};

const playfairDisplay = Playfair_Display({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
