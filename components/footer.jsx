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
      <div className="grid grid-cols-3 items-center">
        <h1
          className={`col-start-2 w-[fit-content] m-auto ${quantico.variable} text-xl font-bold text-center text-[#494949] cursor-pointer select-none`}
          onClick={handleScrollToTop}
        >
          Back to top
        </h1>
        <label className="text-[#494949] text-[14px] text-right">on NEXT.JS</label>
      </div>
    </footer>
  );
};

export default Footer;
