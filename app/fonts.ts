import { Playfair_Display, Montserrat } from "next/font/google";

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-heading",
});

export const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-body",
});
