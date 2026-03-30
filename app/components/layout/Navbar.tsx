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
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
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
        <nav className="hidden md:flex items-center gap-6 relative">
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
                  className="text-gray-700 hover:text-black transition font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-black transition font-medium"
                >
                  {item.name}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${active === index ? "rotate-180" : ""}`}
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
                  className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg rounded-xl border border-gray-100 p-2"
                  onMouseEnter={() => openMenu(index)}
                  onMouseLeave={scheduleClose}
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href || "#"}
                      className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition"
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

        {/* Buttons */}
        {/* <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-black">
            Client Login
          </button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Invest Now
          </button>
        </div> */}
      </div>
    </header>
  );
}