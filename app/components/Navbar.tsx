"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

const navLinks = [

  { href: "/destinations", label: "Destinations" },
  { href: "/hospitals", label: "Hospitals" },
  { href: "/service", label: "Services" },
  { href: "#", label: "About us" },
  { href: "#", label: "Blog" },
];


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if a nav link is active
  const isActive = (href: string) => {
    if (href === "#") return false;
    // Exact match or starts with the path (for nested routes like /destinations/Brazil)
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="/logo.png"
            alt="Global Health Opulence"
            width={190}
            height={120}
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-[#1073B9] font-bold"
                  : "text-slate-600 hover:text-[#1073B9]"
              }`}
              prefetch={link.href.startsWith("/")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttons + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* ✅ Enlarged Contact Us button (Desktop only) */}
          <Button
            className="hidden md:inline-flex bg-linear-to-r from-[#28a745] to-[#20c997] text-white font-bold shadow-lg hover:shadow-xl transition-shadow"
            style={{
              width: "150px",
              height: "56px",
              borderRadius: "12px",
              opacity: 1,
              paddingTop: "16px",
              paddingRight: "24px",
              paddingBottom: "16px",
              paddingLeft: "24px",
              gap: "12px",
              transform: "rotate(0deg)",
              fontSize: "1rem",
            }}
          >
            Contact us
          </Button>

          {/* Mobile Menu Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile logo */}
                <div className="flex items-center justify-start p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                     <Image
                    src="/logo.png"
                    alt="Global Health Opulence"
                    width={190}
                    height={120}
                  />
                    
                  </Link>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className={`transition-colors ${
                        isActive(link.href)
                          ? "text-[#1073B9] font-bold"
                          : "hover:text-[#1073B9]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      prefetch={link.href.startsWith("/")}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* ✅ Enlarged Contact us+ button (Mobile) */}
                <div className="mt-auto p-6">
                  <Button
                    className="w-full bg-linear-to-r from-[#28a745] to-[#20c997] text-white font-bold shadow-lg hover:shadow-xl transition-shadow"
                    style={{
                      height: "56px",
                      borderRadius: "12px",
                      opacity: 1,
                      paddingTop: "16px",
                      paddingRight: "24px",
                      paddingBottom: "16px",
                      paddingLeft: "24px",
                      gap: "12px",
                      fontSize: "1rem",
                    }}
                  >
                    Contact us
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
