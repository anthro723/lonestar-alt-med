"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/telemedicine", label: "Telemedicine" },
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/10">
      {/* Top bar */}
      <div className="bg-navy-dark/80 text-cream/70 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="tracking-wider uppercase">
            Dallas-Fort Worth&apos;s Premier Hormone &amp; Wellness Clinic
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+12145550199"
              className="hover:text-gold transition-colors"
            >
              (214) 555-0199
            </a>
            <span className="text-gold/30">|</span>
            <span>Mon – Fri: 9:00 AM – 4:00 PM CST</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/10 transition-colors">
            <span className="text-gold text-lg">★</span>
          </div>
          <div className="leading-tight">
            <span className="text-white font-heading text-lg font-bold tracking-wide block">
              LONESTAR
            </span>
            <span className="text-gold/80 text-[10px] tracking-[0.2em] uppercase">
              Alternative Medicine
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-gold text-sm tracking-wide transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact#get-started" className="btn-gold text-xs">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-navy-dark/98 backdrop-blur-lg border-t border-gold/10">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-cream/80 hover:text-gold text-sm tracking-wide transition-colors uppercase py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#get-started"
              onClick={() => setOpen(false)}
              className="btn-gold block text-center text-xs mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
