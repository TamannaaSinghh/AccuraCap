"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E8E2D8] border-t border-black/10">
      <div className="w-full px-4 py-18">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start justify-evenly gap-40">

          {/* Logo + tagline */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/Accuracap-logo.png"
                alt="AccuraCap"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="mt-3 text-black/50 text-sm max-w-[260px] leading-relaxed">
              Intelligent Investing. Effortless Results.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Company</p>
            <nav className="flex flex-col gap-2.5 text-sm text-black/70">
              <Link href="/philosophy" className="hover:text-black transition-colors">Our Philosophy</Link>
              <Link href="/people" className="hover:text-black transition-colors">People</Link>
              <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
            </nav>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Products</p>
            <nav className="flex flex-col gap-2.5 text-sm text-black/70">
              <Link href="/products/#pms" className="hover:text-black transition-colors">PMS</Link>
              <Link href="/products/#aif" className="hover:text-black transition-colors">AIF</Link>
              <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Office info */}
          <div className="text-sm text-black/60 leading-relaxed max-w-[320px]">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Corporate Office</p>
            <p>
              Accuracap Consultancy Services Pvt. Ltd.
              <br />
              61, 2nd Floor, Panchkuian Road,
              <br />
              New Delhi, India - 110001
            </p>
            <p className="mt-3 text-black font-medium">+91 77389 76675</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-black/40">
            &copy; {new Date().getFullYear()} AccuraCap. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-black/40">
            <Link href="/grievance" className="hover:text-black/70 transition-colors">Grievance</Link>
            <Link href="/kyc_status_check" className="hover:text-black/70 transition-colors">KYC Status</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
