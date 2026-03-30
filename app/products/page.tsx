"use client";

import Image from "next/image";

const pmsProducts = [
  {
    logo: "/ALPHA10-Logo.png",
    logoClass: "w-[110px] h-[40px]",
    name: "Alpha10",
    fields: [
      {
        label: "Product Profile",
        value:
          "The Investments under the strategy predominantly comprise of stocks having Larger Market Caps. The objective is to outperform the Large Cap segment of the market through constructing a relatively stable portfolio with high level of liquidity and lower impact cost.",
      },
      {
        label: "Universe of Investments",
        value: "Stocks comprising the top 200 by market capitalization.",
      },
      { label: "No. of companies in the portfolio", value: "Generally, 10 to 20" },
      { label: "Liquidity", value: "High" },
      { label: "Return benchmarked against", value: "NIFTY 50 TRI" },
      { label: "CAGR since inception (2011)", value: "13.2% (vs Benchmark 13.2%)" },
    ],
  },
  {
    logo: "/PicoPower-Logo.png",
    logoClass: "w-[150px] h-[48px]",
    name: "PicoPower",
    fields: [
      {
        label: "Product Profile",
        value:
          "The strategy seeks to provide Long term capital appreciation by investing primarily in stocks having Mid & Small Market Caps with high growth potential. The objective of the strategy is to outperform the Mid & Small Cap segment of the market.",
      },
      {
        label: "Universe of Investment",
        value: "Stocks within top 100–800 by market capitalization.",
      },
      { label: "No. of companies in the portfolio", value: "Generally, 30 to 40" },
      { label: "Return benchmarked against", value: "S&P BSE 500 TRI" },
      { label: "CAGR since Inception (2011)", value: "21.3% (vs Benchmark 14.5%)" },
    ],
  },
  {
    logo: "/DYNAMO-Logo_RGB1.png",
    logoClass: "w-[130px] h-[44px]",
    name: "Dynamo",
    fields: [
      {
        label: "Product Profile",
        value:
          "The strategy seeks to provide long-term capital appreciation by investing primarily in stocks with smaller market cap and high growth potential. Dynamo is designed for investors seeking to capture the higher return potential of India's small cap segment, accepting higher short-term volatility in exchange for superior long-term compounding.",
      },
      { label: "Universe of Investments", value: "Stocks ranked 501–800 by market cap." },
      { label: "No. of companies in the portfolio", value: "Generally 25 to 35" },
      { label: "Returns benchmarked against", value: "S&P BSE 500 TRI" },
      { label: "CAGR since Inception (2016)", value: "22.2% (vs Benchmark 15.4%)" },
    ],
  },
  {
    logo: "/AlphaGen-1.png",
    logoClass: "w-[150px] h-[48px]",
    name: "AlphaGen",
    fields: [
      {
        label: "Product Profile",
        value:
          "A Multicap strategy, which takes the benefit of returns across the market cap spectrum. Investing in basket of companies which will be a mix of large/mid/small cap companies. Relative allocation between large/mid/small cap companies will vary basis different market factors.",
      },
      {
        label: "Universe of Investments",
        value: "Stocks within top 700 by market capitalization.",
      },
      { label: "No. of companies in the portfolio", value: "Generally 30 to 50" },
      { label: "Returns benchmarked against", value: "S&P BSE 500 TRI" },
      { label: "CAGR since Inception (2015)", value: "12.6% (vs Benchmark 14.3%)" },
    ],
  },
];

const aifProducts = [
  {
    name: "Vectra Fund",
    fields: [
      { label: "Category", value: "CAT III Long only" },
      { label: "Focus", value: "Small & Micro Cap" },
    ],
  },
  {
    name: "AlphaGen Next Fund",
    fields: [
      { label: "Category", value: "CAT III Long only" },
      { label: "Focus", value: "Multi-Cap" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="relative w-full px-6 py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0B1F3A]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto space-y-32">

        {/* ── PMS ── */}
        <section id="pms" className="space-y-12">

          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A74D]">
              Portfolio Management Services
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#0B1F3A]">
              Our PMS Strategies
            </h1>
          </div>

          <div className="space-y-6">
            {pmsProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center gap-5 px-8 py-5 border-b border-gray-100 bg-white/80">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    width={150}
                    height={48}
                    className={`${product.logoClass} object-contain`}
                  />
                </div>

                {/* Card Body */}
                <div className="px-8 py-6 grid sm:grid-cols-2 gap-x-12 gap-y-4">
                  {product.fields.map((f) => (
                    <div key={f.label} className={f.label === "Product Profile" ? "sm:col-span-2" : ""}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A74D] mb-0.5">
                        {f.label}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── AIF ── */}
        <section id="aif" className="space-y-12">

          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A74D]">
              Alternative Investment Funds
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#0B1F3A]">
              Our AIF Strategies
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {aifProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="px-7 py-5 border-b border-gray-100 bg-white/80">
                  <h3 className="text-xl font-semibold text-[#0B1F3A]">{product.name}</h3>
                </div>

                {/* Card Body */}
                <div className="px-7 py-5 space-y-3">
                  {product.fields.map((f) => (
                    <div key={f.label}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A74D] mb-0.5">
                        {f.label}
                      </p>
                      <p className="text-sm text-gray-600">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
