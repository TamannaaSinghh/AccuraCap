"use client";


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
      <section id="solutions" className="relative w-full bg-white py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <h2 className="text-[28px] sm:text-[32.5px] md:text-[39px] lg:text-[43px] text-black leading-[1.18] tracking-tight">
              Portfolio Management
              <br />
              Services
            </h2>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
            {products.map((p, i) => (
              <div
                key={i}
                className="group bg-white p-6 md:p-7 flex flex-col hover:bg-surface transition-colors duration-300"
              >
                {/* Name */}
                <h3 className="text-[24px] md:text-[28px] text-accent tracking-tight">
                  {p.title}
                </h3>

                {/* Category tag */}
                <span className="text-muted text-[11.5px] tracking-[0.2em] uppercase font-medium pt-1">
                  {p.category}
                </span>

                {/* Returns — hero number */}
                <p className="mt-5 text-[28px] md:text-[32.5px] text-black tracking-tight">
                  {p.returns}
                </p>
                <p className="mt-1 text-muted text-[12px]">
                  *Absolute Returns
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-border" />

                {/* Details */}
                <div className="flex flex-col gap-3.5 text-[14px]">
                  <div>
                    <p className="text-muted/60 text-[11.5px] uppercase tracking-[0.14em] mb-1">Market Cap</p>
                    <p className="text-black/75">{p.marketCap}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 text-[11.5px] uppercase tracking-[0.14em] mb-1">Stocks</p>
                    <p className="text-black/75">{p.stocks}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 text-[11.5px] uppercase tracking-[0.14em] mb-1">Benchmark</p>
                    <p className="text-black/75">{p.benchmark}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer + CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10 md:mt-12 gap-5">
            <p className="text-[12.5px] text-muted">
              *as on 31st Jan 2026 &middot; net of all expenses/fees
            </p>
            <a
              href="/products"
              className="inline-block px-6 md:px-7 py-3 bg-black text-white text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-black/85 transition-colors duration-300"
            >
              View All Products
            </a>
          </div>

        </div>
      </section>

      {/* ════════════ AIF — Light Section ════════════ */}
      <section className="relative w-full bg-surface py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <h2 className="text-[28px] sm:text-[32.5px] md:text-[39px] lg:text-[43px] text-black leading-[1.18] tracking-tight">
              Alternative Investment
              <br />
              Funds
            </h2>
          </div>

          {/* AIF cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {aifFunds.map((fund, i) => (
              <div
                key={i}
                className="group bg-white p-6 md:p-7 flex flex-col hover:bg-surface transition-colors duration-300"
              >
                {/* Fund name */}
                <h3 className="text-[24px] md:text-[28px] text-accent tracking-tight">
                  {fund.name}
                </h3>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-border" />

                {/* Details */}
                <div className="flex flex-col gap-3.5 text-[14px]">
                  <div>
                    <p className="text-muted/60 text-[11.5px] uppercase tracking-[0.14em] mb-1">Focus</p>
                    <p className="text-black/75">{fund.focus}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 text-[11.5px] uppercase tracking-[0.14em] mb-1">Strategy</p>
                    <p className="text-black/75 leading-relaxed">{fund.description}</p>
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
