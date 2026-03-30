"use client";

export default function PhilosophyPage() {
  return (
    <main className="w-full bg-white">

      {/* ═══ Hero / Philosophy ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                  Our Philosophy
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                The Art of
                <br />
                <span className="italic">Disciplined Investing.</span>
              </h1>
              <div className="mt-4 h-[2px] w-12 bg-accent" />

              <p className="mt-8 text-muted leading-relaxed">
                At AccuraCap, we believe that the markets are a pendulum, swinging
                between overvaluation and undervaluation. Our philosophy is rooted
                in capturing these swings through a systematic fundamental approach.
              </p>
            </div>

            {/* Right — Principles */}
            <div className="space-y-0 border-t border-border">
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
                  className="py-6 border-b border-border"
                >
                  <h3 className="text-black font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Core Strategy ═══ */}
      <section className="bg-surface py-28 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              How We Invest
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl text-black leading-tight">
            Our Core Strategy
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-accent" />

          <div className="mt-12 max-w-3xl space-y-5 text-muted leading-relaxed">
            <p>
              AccuraCap has developed a unique{" "}
              <span className="font-semibold text-black">ranking algorithm</span>{" "}
              that conducts extensive{" "}
              <span className="font-semibold text-black">&ldquo;Spatio-temporal&rdquo;</span>{" "}
              analysis of every business in the investment universe,
              comparing it against others across space and time.
            </p>

            <p>
              Using the{" "}
              <span className="font-semibold text-black">&ldquo;Pendulum Hypothesis&rdquo;</span>,
              we buy high-quality businesses at reasonable valuations,
              forming equi-weight portfolios designed to hold winners and weed
              out losers with minimal manual intervention.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Step-by-Step ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                Our Process
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>

            <h2 className="text-3xl md:text-4xl text-black">
              Step-by-Step Selection
            </h2>
            <div className="mt-4 mx-auto h-[2px] w-12 bg-accent" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                step: "I",
                title: "Universe Selection",
                desc: "We track the top 500\u2013800 companies by market cap, filtering out weak or poorly governed entities.",
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
              <div key={i} className="bg-white p-8">
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  Step {item.step}
                </span>
                <h3 className="mt-3 text-xl text-black font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
