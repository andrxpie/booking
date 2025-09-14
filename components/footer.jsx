"use client";

import { Quantico } from "next/font/google";

const quantico = Quantico({
  variable: "--font-quantico",
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background-light)] border-t-4 border-[var(--accent)] p-4 z-50">
      <div className="w-[80%] m-auto items-center">
        <h1
          className={`${quantico.variable} text-xl font-bold text-center text-[#3d3d3d] cursor-pointer select-none`}
          onClick={handleScrollToTop}
        >
          Booking App
          <label className="text-[10px]">on NEXT.JS</label>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
