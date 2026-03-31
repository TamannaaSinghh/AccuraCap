"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

type MenuItem = {
  name: string;
  href?: string;
  children?: MenuItem[];
};

const menu: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    children: [{ name: "Our Philosophy", href: "/philosophy" }],
  },
  {
    name: "Products",
    children: [
      { name: "PMS", href: "/products/#pms" },
      { name: "AIF", href: "/products/#aif" },
    ],
  },
  {
    name: "People",
    href: "/people",
  },
  {
    name: "Investor Information",
    children: [
      { name: "PMS", href: "/pms" },
      { name: "AIF", href: "/aif" },
      { name: "KYC Status Check", href: "/kyc_status_check" },
      { name: "Grievance", href: "/grievance" },
      { name: "FAQ's", href: "/faq" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(index);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 100);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/Accuracap-logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-7 relative">
          {menu.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.children && openMenu(index)}
              onMouseLeave={scheduleClose}
            >
              {/* Main Item */}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-muted hover:text-black transition-colors duration-200 text-lg font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  className="flex items-center gap-1 text-muted hover:text-black transition-colors duration-200 text-lg font-medium"
                >
                  {item.name}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${active === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}

              {/* Dropdown */}
              {item.children && active === index && (
                <div
                  className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg border border-border p-1.5"
                  onMouseEnter={() => openMenu(index)}
                  onMouseLeave={scheduleClose}
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href || "#"}
                      className="block px-4 py-2.5 text-sm text-muted hover:text-black hover:bg-surface transition-colors duration-150"
                      onClick={() => setActive(null)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

      </div>
    </header>
  );
}
