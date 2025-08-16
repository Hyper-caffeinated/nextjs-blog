"use client"

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/scrapbook", label: "Scrapbook" },
  { href: "/presentation", label: "Presentation" },
  { href: "/resources", label: "Resources" },
  { href: "/checklist", label: "Checklist" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-stone-50 sticky top-0 z-50 shadow-sm border-b border-stone-200">
      <div className="w-full py-4 px-4 md:px-8 flex items-center">
        <div className="flex items-center space-x-2 text-2xl font-bold text-stone-800 font-serif">
          { /* show leaf icon on desktop */ }
          <Link href="/" aria-label="Go to homepage" className="hidden md:flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-emerald-800 shrink-0" />
          </Link>

          { /* show hamburger on mobile */ }
          <button
            className="md:hidden p-2 text-stone-700 hover:text-emerald-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            { menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" /> }
          </button>

          <Link href="/" aria-label="Go to homepage">
            <span className="ml-2">TJ Bird and Wildlife Club</span>
          </Link>
        </div>

        { /* desktop nav */ }
        <nav className="ml-auto hidden md:flex space-x-8 px-8">
          {navLinks.map(link => (
            <Link
              key={ link.href }
              href={ link.href }
              className="text-stone-600 hover:text-emerald-800 transition-colors duration-300 font-bold"
            >
              { link.label }
            </Link>
          ))}
        </nav>
      </div>
      
      { /* mobile dropdown */ }
      {menuOpen && (
        <nav className="md:hidden bg-stone-100 border-t border-stone-200 shadow-inner">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-stone-700 hover:text-emerald-800 font-semibold transition-colors"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
