"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F4F4] border-t border-black/10">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-14 py-7 md:py-7 lg:py-12">

        {/* Top */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-between gap-y-7 gap-x-6 md:gap-6 lg:gap-12">

          {/* Logo */}
          <div className="col-span-2 md:col-span-1 shrink-0">
            <Link href="/">
              <Image
                src="/Accuracap-logo.png"
                alt="AccuraCap"
                width={140}
                height={52}
                className="object-contain w-[120px] md:w-[100px] lg:w-[140px] h-auto"
              />
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] md:text-[10px] lg:text-sm tracking-[0.2em] uppercase text-black/40 mb-2.5 md:mb-2.5 font-medium">Company</p>
            <nav className="flex flex-col gap-1.5 md:gap-1.5 text-xs md:text-[12px] lg:text-base xl:text-lg text-black/70">
              <Link href="/philosophy" className="hover:text-black transition-colors">Our Philosophy</Link>
              <Link href="/people" className="hover:text-black transition-colors">People</Link>
              <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <p className="text-[11px] md:text-[10px] lg:text-sm tracking-[0.2em] uppercase text-black/40 mb-2.5 md:mb-2.5 font-medium">Products</p>
            <nav className="flex flex-col gap-1.5 md:gap-1.5 text-xs md:text-[12px] lg:text-base xl:text-lg text-black/70">
              <Link href="/products/#pms" className="hover:text-black transition-colors">PMS</Link>
              <Link href="/products/#aif" className="hover:text-black transition-colors">AIF</Link>
              <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Office info */}
          <div className="col-span-2 md:col-span-1 text-xs md:text-[12px] lg:text-base xl:text-lg text-black/60 leading-relaxed md:max-w-[260px] lg:max-w-[360px] xl:max-w-[420px]">
            <p className="text-[11px] md:text-[10px] lg:text-sm tracking-[0.2em] uppercase text-black/40 mb-2.5 md:mb-2.5 font-medium">Corporate Office</p>
            <p>
              Office Number 919, 9th Floor,
              <br />
              Wave Silver Tower, Sector 18,
              <br />
              Noida, Uttar Pradesh 201301
            </p>
            <p className="mt-2.5 md:mt-2.5 text-black font-medium">+91 77389 76675</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 md:mt-6 lg:mt-10 pt-4 md:pt-4 border-t border-black/10 flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-3 md:gap-2.5 text-center md:text-left">
          <p className="text-[11px] md:text-[10px] lg:text-sm text-black/40">
            &copy; {new Date().getFullYear()} AccuraCap. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-4 text-[11px] md:text-[10px] lg:text-sm text-black/40">
            <Link href="/grievance" className="hover:text-black/70 transition-colors">Grievance</Link>
            <Link href="/kyc_status_check" className="hover:text-black/70 transition-colors">KYC Status</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
