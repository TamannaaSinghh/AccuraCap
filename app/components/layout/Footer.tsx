"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#272830] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-16">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

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
            <p className="mt-3 text-white/40 text-sm max-w-[260px] leading-relaxed">
              Intelligent Investing. Effortless Results.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/35 mb-4 font-medium">Company</p>
              <nav className="flex flex-col gap-2.5 text-sm text-white/60">
                <Link href="/philosophy" className="hover:text-white transition-colors">Our Philosophy</Link>
                <Link href="/people" className="hover:text-white transition-colors">People</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </nav>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/35 mb-4 font-medium">Products</p>
              <nav className="flex flex-col gap-2.5 text-sm text-white/60">
                <Link href="/products/#pms" className="hover:text-white transition-colors">PMS</Link>
                <Link href="/products/#aif" className="hover:text-white transition-colors">AIF</Link>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </nav>
            </div>
          </div>

          {/* Office info */}
          <div className="text-sm text-white/50 leading-relaxed max-w-[320px]">
            <p className="text-xs tracking-[0.2em] uppercase text-white/35 mb-4 font-medium">Corporate Office</p>
            <p>
              Accuracap Consultancy Services Pvt. Ltd.
              <br />
              61, 2nd Floor, Panchkuian Road,
              <br />
              New Delhi, India - 110001
            </p>
            <p className="mt-3 text-white font-medium">+91 77389 76675</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} AccuraCap. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="/grievance" className="hover:text-white/60 transition-colors">Grievance</Link>
            <Link href="/kyc_status_check" className="hover:text-white/60 transition-colors">KYC Status</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
