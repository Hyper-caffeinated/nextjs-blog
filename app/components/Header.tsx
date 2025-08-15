import Link from "next/link";
import { Leaf } from "lucide-react";

export const Header = () => {
  const navLinks = [
    { href: "/events", label: "Events" },
    { href: "/scrapbook", label: "Scrapbook" },
    { href: "/presentation", label: "Presentation" },
    { href: "/resources", label: "Resources" },
    { href: "/checklist", label: "Checklist" },
  ];

  return (
    <header className="bg-stone-50 sticky top-0 z-50 shadow-sm border-b border-stone-200">
      <div className="w-full py-4 flex items-center">
        <Link href="/" aria-label="Go to homepage" className="flex items-center space-x-2 text-2xl font-bold text-stone-800 font-serif pl-8">
          <Leaf className="w-8 h-8 text-emerald-800 shrink-0" />
          <span>TJ Bird and Wildlife Club</span>
        </Link>
        <nav className="ml-auto hidden md:flex space-x-8 px-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-stone-600 hover:text-emerald-800 transition-colors duration-300 font-bold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
