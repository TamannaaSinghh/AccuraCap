"use client";

import Image from "next/image";

export default function PMSPage() {
  return (
    <main className="relative w-full px-6 py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="max-w-[1100px] mx-auto space-y-16">

        {/* ================= HEADER ================= */}
        <section className="text-center space-y-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
            PMS
          </h1>

          <p className="text-gray-600">
            <span className="font-medium text-gray-900">
              SEBI registration number:
            </span>{" "}
            INP000008844
          </p>

          <p className="text-gray-600">
            Validated UPI ID for payment for additional investment:
          </p>

          <p className="text-gray-800 font-medium">
            accuracap.pms@validibl
          </p>

          {/* QR */}
          <div className="flex justify-center">
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-md">
              <Image
                src="/pms-qr.png" // 👈 your QR image in public folder
                alt="QR Code"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Authorised Person (Motilal Oswal Financial Services Pvt Ltd)
          </p>

          <p className="text-sm text-gray-500">
            NSE: AP0297117363, BSE: AP01044601104990
          </p>
        </section>

        {/* ================= DOCUMENTS ================= */}

        <section className="grid md:grid-cols-3 gap-8">

          {/* Disclosure */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AccuraCap Disclosure
            </h3>

            <div className="rounded-xl overflow-hidden shadow-md border">
              <iframe
                src="/disclosure.pdf"
                className="w-full h-[300px]"
              />
            </div>
          </div>

          {/* Investor Charter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              Investor Charter PMS
            </h3>

            <div className="rounded-xl overflow-hidden shadow-md border">
              <iframe
                src="/Investor_Charter-pms.pdf"
                className="w-full h-[300px]"
              />
            </div>
          </div>

          {/* Complaint */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              PMS Complaint Status Feb 26
            </h3>

            <div className="rounded-xl overflow-hidden shadow-md border">
              <iframe
                src="/complaint-status.pdf"
                className="w-full h-[300px]"
              />
            </div>
          </div>
        </section>

        {/* ================= BOTTOM ================= */}

        <section className="grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              Form_MGT_7A_Accuracap
            </h3>

            <div className="rounded-xl overflow-hidden shadow-md border">
              <iframe
                src="/mgt-form.pdf"
                className="w-full h-[350px]"
              />
            </div>
          </div>

          {/* Fee Illustration */}
          <div className="space-y-4 text-center flex flex-col items-center justify-center">

            <h3 className="text-lg font-semibold text-red-700">
              Fee Illustration
            </h3>

            <a
              href="/Fee-Illustration_multi-year_hybrid-fee.xlsx"
              download
              className="text-red-600 underline hover:text-red-800 transition"
            >
              Please click here to download the illustration
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}