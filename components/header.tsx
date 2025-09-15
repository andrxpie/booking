import React from "react";
import { Quantico } from "next/font/google";
import Link from "next/link";

const quantico = Quantico({
  variable: "--font-quantico",
  weight: ["400"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="bg-[var(--background-light)] border-b-4 border-[var(--accent)] p-4 fixed top-0 left-0 w-full z-50">
      <div className="w-[80%] m-auto flex justify-between items-center">
        <Link href="/">
          <h1
            className={`${quantico.variable} text-3xl font-bold text-[var(--accent)] select-none`}
          >
            Booking
          </h1>
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/auth" className="nav-link">
            Authorize
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
