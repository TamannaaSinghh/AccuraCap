"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full py-28 px-6 overflow-hidden">
      
      {/* 🌊 Base Gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-white via-gray-100 to-[#0f172a]" />

      {/* ✨ Soft Radial Glow */}
      <div className="absolute right-[-100px] top-[-50px] w-[600px] h-[600px] bg-white/20 blur-[120px] rounded-full -z-20" />

      {/* 🌫️ Secondary Blur Layer */}
      <div className="absolute right-[10%] top-[30%] w-[400px] h-[400px] bg-gray-200/30 blur-[100px] rounded-full -z-20" />

      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-gray-900 leading-tight font-serif">
          Delivering Consistent Outperformance
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Founded in 2011, AccuraCap is a boutique fund manager delivering exceptional returns driven by
          our proprietary research and disciplined investment.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-3xl font-semibold">1492%</h2>
            <p className="mt-2 text-sm opacity-80">Absolute Returns</p>
            <p className="text-xs opacity-60 mt-1">
              Lowest Cap is 60 Crore
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">21.3%</h2>
            <p className="mt-2 text-sm text-gray-600">CAGR since 2011</p>
            <p className="text-xs text-gray-400 mt-1">
              (vs 14% benchmark)
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900">#1</h2>
            <p className="mt-2 text-sm text-gray-600">Risk Adjusted PMS</p>
            <p className="text-xs text-gray-400 mt-1">
              by PMS AIF World for 2021 and 2022
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="relative px-8 py-3 rounded-lg text-sm font-medium text-white overflow-hidden group">
            
            <span className="absolute inset-0 bg-gradient-to-r from-[#b89b6c] via-[#d4af37] to-[#b89b6c]"></span>

            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 skew-x-12 animate-[shine_1.2s]"></span>
            </span>

            <span className="relative z-10">Find Out More</span>
          </button>
        </div>
      </div>

      {/* ✨ Shine Animation */}
      <style jsx>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}