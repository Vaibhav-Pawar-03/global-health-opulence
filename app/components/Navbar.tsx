"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "#", label: "Find Doctors" },
  { href: "#", label: "About us" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center " prefetch={false}>
          <Image
            src="/logo.png"
            alt="Global Health Opulence"
            width={190}
            height={120}
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link, index) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={`transition-colors ${
                index === 0
                  ? "text-[#007bff]"
                  : "text-slate-600 hover:text-[#007bff]"
              }`}
              prefetch={link.href.startsWith("/")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttons + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Join Us button (desktop only) */}
          <Button className="hidden md:inline-flex bg-gradient-to-r from-[#28a745] to-[#20c997] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow">
            Join us
          </Button>

          {/* Mobile Menu Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile logo */}
                <div className="flex items-center justify-start p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      src="/logo.svg"
                      alt="Global Health Opulence"
                      width={32}
                      height={32}
                    />
                    <span className="font-bold text-sm text-[#002147] leading-tight">
                      GLOBAL HEALTH <br /> OPULENCE
                    </span>
                  </Link>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="transition-colors hover:text-[#007bff]"
                      onClick={() => setIsMenuOpen(false)}
                      prefetch={link.href.startsWith("/")}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Join Us button */}
                <div className="mt-auto p-6">
                  <Button className="w-full bg-gradient-to-r from-[#28a745] to-[#20c997] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    Join us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
