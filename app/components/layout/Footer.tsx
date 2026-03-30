"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full mt-20">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f172a] via-gray-300 to-[#E2E5EA]" />

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-gray-200 pt-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/AccuraCap-Logo.png" // replace with your actual logo path
              alt="AccuraCap"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Office Info */}
          <div className="text-sm text-gray-600 leading-relaxed max-w-[800px]">
            <p>
              <span className="font-semibold text-gray-900">Corporate Office:</span>{" "}
              Accuracap Consultancy Services Pvt. Ltd. 61, 2nd Floor, Panchkuian Road,
              New Delhi, India -110001 | Contact No: +91 77389 76675
            </p>

            <p className="mt-2">
              <span className="font-semibold text-gray-900">Registered Office:</span>{" "}
              Accuracap Consultancy Services Pvt. Ltd. 61, 2nd Floor, Panchkuian Road,
              New Delhi, India -110001
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} AccuraCap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}