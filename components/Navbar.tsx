"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoGlitching, setIsLogoGlitching] = useState(false);

  const handleLogoClick = () => {
    setIsLogoGlitching(true);
    setTimeout(() => setIsLogoGlitching(false), 500); // Glitch for 0.5 seconds
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="neo-nav">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 text-decoration-none" onClick={handleLogoClick}>
        <span 
          className={`font-display font-black text-xl md:text-2xl text-black hover:text-outlined ${isLogoGlitching ? 'glitch-on-click' : ''}`}
          style={{ letterSpacing: "-0.02em" }}
        >
          MEBIUS TECH
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`neo-nav-link ${isActive ? "neo-nav-link-active" : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 neo-border bg-white cursor-pointer hover:bg-primary-container active:translate-y-0.5"
        style={{ width: "42px", height: "42px", justifyContent: "center", alignItems: "center" }}
        aria-label="Toggle Navigation Menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div 
          className="absolute left-0 right-0 top-[64px] bg-white neo-border border-t-0 p-6 flex flex-col gap-4 md:hidden z-[999] neo-shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`neo-nav-link text-center w-full ${isActive ? "neo-nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
