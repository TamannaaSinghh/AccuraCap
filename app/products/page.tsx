"use client";


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
        value: "Stocks within top 100\u2013800 by market capitalization.",
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
          "The strategy seeks to provide long-term capital appreciation by investing primarily in stocks with smaller market cap and high growth potential. Dynamo is designed for investors seeking to capture the higher return potential of India\u2019s small cap segment, accepting higher short-term volatility in exchange for superior long-term compounding.",
      },
      { label: "Universe of Investments", value: "Stocks ranked 501\u2013800 by market cap." },
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
    <main className="w-full bg-white">

      {/* ═══ PMS Section ═══ */}
      <section id="pms" className="pt-28 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              Portfolio Management Services
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
            Our PMS Strategies
          </h1>
          <div className="mt-2 h-[2px] w-12 bg-accent" />

          <div className="mt-10 space-y-6">
            {pmsProducts.map((product) => (
              <div
                key={product.name}
                className="border border-border overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center gap-5 px-8 py-5 border-b border-accent/20 bg-accent/5">
                  <h3 className="text-2xl font-bold text-accent">{product.name}</h3>
                </div>

                {/* Card Body */}
                <div className="px-8 py-6 grid sm:grid-cols-2 gap-x-12 gap-y-5">
                  {product.fields.map((f) => (
                    <div key={f.label} className={f.label === "Product Profile" ? "sm:col-span-2" : ""}>
                      <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">
                        {f.label}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AIF Section ═══ */}
      <section id="aif" className="bg-surface pb-12 pt-22 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              Alternative Investment Funds
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
            Our AIF Strategies
          </h1>
          <div className="mt-2 h-[2px] w-12 bg-accent" />

          <div className="mt-10 grid md:grid-cols-2 gap-px bg-border max-w-[800px]">
            {aifProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white p-8"
              >
                <h3 className="text-2xl font-bold text-accent">{product.name}</h3>
                <div className="mt-4 h-px w-full bg-accent/20" />
                <div className="mt-4 space-y-4">
                  {product.fields.map((f) => (
                    <div key={f.label}>
                      <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">
                        {f.label}
                      </p>
                      <p className="text-sm text-muted">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
