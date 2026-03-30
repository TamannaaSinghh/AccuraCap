"use client";

import Image from "next/image";

const ROW_H = "h-[52px]";

const labels = ["Category", "Market Cap", "Stocks", "*Absolute Returns"];

const cards = [
  {
    logo: "/ALPHA10-Logo.png",
    title: "Alpha10",
    logoClass: "w-[100px] h-[36px]",
    data: [
      "Large Cap",
      "Top 200 companies",
      "10-20",
      "493% (vs 492% Nifty 50 TRI)",
    ],
  },
  {
    logo: "/PicoPower-Logo.png",
    title: "PicoPower",
    logoClass: "w-[140px] h-[50px]",
    data: [
      "Mid & Small Cap",
      "Top 100-800",
      "30-40",
      "1492% (vs 594% S&P BSE 500 TRI)",
    ],
  },
  {
    logo: "/DYNAMO-Logo_RGB1.png",
    title: "Dynamo",
    logoClass: "w-[100px] h-[36px]",
    data: [
      "Micro Cap",
      "Top 500-800",
      "30-40",
      "518% (vs 267% S&P BSE 500 TRI)",
    ],
  },
  {
    logo: "/AlphaGen-1.png",
    title: "AlphaGen",
    logoClass: "w-[140px] h-[50px]",
    data: [
      "Multi Cap",
      "Across Market cap",
      "30-50",
      "231% (vs 285% S&P BSE 500 TRI)",
    ],
  },
];

export default function InvestmentSolutions() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="max-w-[1200px] mx-auto">

        {/* ================= PMS SECTION ================= */}

        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900">
          Our Investment Solutions
        </h2>

        <p className="text-center mt-3 text-gray-500 font-medium">
          Portfolio Management Services
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 items-start">

          {/* Labels */}
          <div className="hidden md:flex flex-col text-gray-500 text-sm font-medium">
            <div className="h-[64px]" />
            {labels.map((label) => (
              <div key={label} className={`${ROW_H} flex items-center border-t border-gray-100`}>
                {label}
              </div>
            ))}
          </div>

          {/* Cards */}
          {cards.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:-translate-y-2 transition duration-300 overflow-hidden"
            >
              {/* Logo */}
              <div className="h-[64px] flex items-center justify-center px-5 bg-white/80">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={140}
                  height={50}
                  className={`${item.logoClass} object-contain`}
                />
              </div>

              {/* Data */}
              {item.data.map((d, idx) => (
                <div
                  key={idx}
                  className={`${ROW_H} flex items-center px-5 text-sm text-gray-600 border-t border-gray-100`}
                >
                  {d}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
          <p className="text-xs text-gray-400 text-center md:text-left">
            *as on 31st Jan 2026 <br />
            *net of all expenses/fees
          </p>

          <button className="relative px-6 py-3 rounded-lg text-sm font-medium text-white overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#b89b6c] via-[#d4af37] to-[#b89b6c]"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 skew-x-12 animate-[shine_1.2s]"></span>
            </span>
            <span className="relative z-10">Find Out More</span>
          </button>
        </div>

        {/* ================= AIF SECTION ================= */}

        <div className="mt-24">

          <h3 className="text-3xl md:text-4xl font-serif text-center text-gray-900">
            Alternative Investment Funds
          </h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">

            {/* Vectra Fund */}
            <div className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:-translate-y-2 transition duration-300">
              <h4 className="text-lg font-semibold text-[#1e293b] mb-4">
                Vectra Fund
              </h4>

              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <p>CAT III Long only</p>
                <p>Small & Micro Cap</p>
              </div>
            </div>

            {/* AlphaGen Next Fund */}
            <div className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:-translate-y-2 transition duration-300">
              <h4 className="text-lg font-semibold text-[#1e293b] mb-4">
                AlphaGen Next Fund
              </h4>

              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <p>CAT III Long only</p>
                <p>Multi-Cap</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}