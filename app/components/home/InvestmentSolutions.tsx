"use client";

import Image from "next/image";

const products = [
  {
    logo: "/ALPHA10-Logo.png",
    title: "Alpha10",
    logoClass: "w-[100px] h-[36px]",
    category: "Large Cap",
    marketCap: "Top 200 companies",
    stocks: "10–20",
    returns: "493%",
    benchmark: "vs 492% Nifty 50 TRI",
  },
  {
    logo: "/PicoPower-Logo.png",
    title: "PicoPower",
    logoClass: "w-[140px] h-[50px]",
    category: "Mid & Small Cap",
    marketCap: "Top 100–800",
    stocks: "30–40",
    returns: "1,492%",
    benchmark: "vs 594% S&P BSE 500 TRI",
  },
  {
    logo: "/DYNAMO-Logo_RGB1.png",
    title: "Dynamo",
    logoClass: "w-[100px] h-[36px]",
    category: "Micro Cap",
    marketCap: "Top 500–800",
    stocks: "30–40",
    returns: "518%",
    benchmark: "vs 267% S&P BSE 500 TRI",
  },
  {
    logo: "/AlphaGen-1.png",
    title: "AlphaGen",
    logoClass: "w-[140px] h-[50px]",
    category: "Multi Cap",
    marketCap: "Across Market Cap",
    stocks: "30–50",
    returns: "231%",
    benchmark: "vs 285% S&P BSE 500 TRI",
  },
];

const aifFunds = [
  {
    name: "Vectra Fund",
    type: "CAT III Long Only",
    focus: "Small & Micro Cap",
    description:
      "Concentrated portfolio targeting high-growth small and micro cap opportunities with rigorous bottom-up research.",
  },
  {
    name: "AlphaGen Next Fund",
    type: "CAT III Long Only",
    focus: "Multi-Cap",
    description:
      "Flexible multi-cap strategy designed to capture alpha across market capitalizations through proprietary models.",
  },
];

export default function InvestmentSolutions() {
  return (
    <>
      {/* ════════════ PMS — Dark Section ════════════ */}
      <section id="solutions" className="relative w-full bg-white py-28 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Header — left aligned to match hero */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              Portfolio Management Services
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
              Our Investment
              <br />
              Solutions
            </h2>
            <p className="text-muted max-w-md text-sm leading-relaxed md:text-right">
              Four distinct strategies engineered to deliver consistent
              outperformance across market capitalizations.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {products.map((p, i) => (
              <div
                key={i}
                className="group bg-white p-8 flex flex-col hover:bg-surface transition-colors duration-300"
              >
                {/* Logo */}
                <div className="h-12 flex items-center mb-6">
                  <Image
                    src={p.logo}
                    alt={p.title}
                    width={140}
                    height={50}
                    className={`${p.logoClass} object-contain`}
                  />
                </div>

                {/* Category tag */}
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  {p.category}
                </span>

                {/* Returns — hero number */}
                <p className="mt-4 text-4xl md:text-5xl text-black tracking-tight">
                  {p.returns}
                </p>
                <p className="mt-1 text-muted text-xs">
                  *Absolute Returns
                </p>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-border" />

                {/* Details */}
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">Market Cap</p>
                    <p className="text-black/70">{p.marketCap}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">Stocks</p>
                    <p className="text-black/70">{p.stocks}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">Benchmark</p>
                    <p className="text-black/70">{p.benchmark}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer + CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10 gap-6">
            <p className="text-xs text-muted">
              *as on 31st Jan 2026 &middot; net of all expenses/fees
            </p>
            <a
              href="/products"
              className="inline-block px-8 py-3.5 bg-accent text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-accent-dark transition-colors duration-300"
            >
              View All Products
            </a>
          </div>

        </div>
      </section>

      {/* ════════════ AIF — Light Section ════════════ */}
      <section className="relative w-full bg-surface py-28 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              CAT III Funds
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
              Alternative Investment
              <br />
              Funds
            </h2>
            <p className="text-muted max-w-md text-sm leading-relaxed md:text-right">
              Category III long-only funds designed for qualified investors
              seeking differentiated exposure.
            </p>
          </div>

          {/* AIF cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {aifFunds.map((fund, i) => (
              <div
                key={i}
                className="group bg-white p-8 flex flex-col hover:bg-surface transition-colors duration-300"
              >
                {/* Type tag */}
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  {fund.type}
                </span>

                {/* Fund name */}
                <h3 className="mt-4 text-4xl md:text-5xl text-black tracking-tight">
                  {fund.name}
                </h3>
                <p className="mt-1 text-muted text-xs">
                  Alternative Investment Fund
                </p>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-border" />

                {/* Details */}
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">Focus</p>
                    <p className="text-black/70">{fund.focus}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">Strategy</p>
                    <p className="text-black/70">{fund.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
