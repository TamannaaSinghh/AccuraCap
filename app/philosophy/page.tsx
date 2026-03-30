"use client";

export default function PhilosophyPage() {
  return (
    <main className="relative w-full px-6 py-28 overflow-hidden">

      {/* 🌊 Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gray-200/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto space-y-28">

        {/* ================= HERO / PHILOSOPHY ================= */}
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-sm text-gray-400 tracking-widest">— Our Philosophy —</p>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              The Art of <span className="italic">Disciplined Investing.</span>
            </h1>

            <p className="text-gray-600 leading-relaxed">
              At AccuraCap, we believe that the markets are a pendulum, swinging
              between overvaluation and undervaluation. Our philosophy is rooted
              in capturing these swings through a systematic fundamental approach.
            </p>
          </div>

          {/* Right Points */}
          <div className="space-y-6">
            {[
              {
                title: "Data Over Intuition",
                desc: "Our systematic model removes emotional bias and human error, relying on data and proven mathematical frameworks back tested since 1999.",
              },
              {
                title: "Patience as a Strategy",
                desc: "We believe in the power of compounding and long-term holding. Our model identifies winners early and rides them for years, not weeks.",
              },
              {
                title: "Rigorous Risk Mitigation",
                desc: "Every portfolio is built with strict equi-weighting and sectoral caps to ensure no single point of failure.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  • {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CORE STRATEGY ================= */}
        <section className="space-y-8">

          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Our Core Strategy
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-8">

            <p>
              AccuraCap has developed a unique{" "}
              <span className="font-semibold text-gray-900">
                ranking algorithm
              </span>{" "}
              that conducts extensive{" "}
              <span className="font-semibold text-gray-900">
                “Spatio-temporal”
              </span>{" "}
              analysis of every business in the investment universe,
              comparing it against others across space and time.
            </p>

            <p>
              Using the{" "}
              <span className="font-semibold text-gray-900">
                “Pendulum Hypothesis”
              </span>, we buy high-quality businesses at reasonable valuations,
              forming equi-weight portfolios designed to hold winners and weed
              out losers with minimal manual intervention.
            </p>
          </div>
        </section>

        {/* ================= STEP BY STEP ================= */}
        <section className="space-y-12 text-center">

          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Step-by-Step Selection
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center">

            {[
              {
                step: "I",
                title: "Universe Selection",
                desc: "We track the top 500–800 companies by market cap, filtering out weak or poorly governed entities.",
              },
              {
                step: "II",
                title: "Fundamental Assessment",
                desc: "18 parameters including Growth, Value, Strength & Risk evaluate margins, ROCE, and competitive moat.",
              },
              {
                step: "III",
                title: "Portfolio Construction",
                desc: "Stocks are placed in equi-weight portfolios and reviewed quarterly to maintain top performance.",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">

                {/* Card */}
                <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:-translate-y-2 transition duration-300 text-left">
                  
                  <div className="text-sm text-gray-400 mb-2">
                    {item.step}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>

                {/* Arrow */}
                {i !== 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-300 text-3xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}