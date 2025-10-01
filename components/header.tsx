"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Authorize", href: "/auth" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-secondary border-b-4 border-accent p-4 top-0 left-0 w-full fixed font-playfair z-50">
      <div className="w-[80%] m-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-accent select-none outline-0">
            Booking
          </h1>
        </Link>
        <nav className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "nav-link",
                pathname === item.href ? "text-accent font-bold" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
