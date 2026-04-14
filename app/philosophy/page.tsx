"use client";

import Image from "next/image";

const principles = [
  {
    title: "Data Over Intuition",
    desc: "Our systematic model removes emotional bias and human error, relying on data and proven mathematical frameworks back-tested since 1999.",
  },
  {
    title: "Patience as a Strategy",
    desc: "We believe in the power of compounding and long-term holding. Our model identifies winners early and rides them for years, not weeks.",
  },
  {
    title: "Rigorous Risk Mitigation",
    desc: "Every portfolio is built with strict equi-weighting and sectoral caps to ensure no single point of failure.",
  },
];

const steps = [
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
];

export default function PhilosophyPage() {
  return (
    <main className="w-full bg-white">

      {/* ═══ Hero / Philosophy ═══ */}
      <section className="pt-32 md:pt-40 pb-8 md:pb-15 px-3 md:px-4">
        <div className="max-w-[1500px] mx-auto px-0 md:px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 lg:gap-16 items-center">

            {/* Text — 3 of 5 columns (wider than image) */}
            <div className="text-left order-2 md:order-1 md:col-span-3">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-black leading-[1.1] tracking-tight">
                The Art of
                <br />
                <span className="italic">Disciplined Investing.</span>
              </h1>

              <div className="mt-7 h-px w-16 bg-accent" />

              <p className="mt-8 max-w-2xl text-base md:text-lg text-black/70 leading-relaxed">
                At AccuraCap, we believe the markets move like a pendulum
                &mdash; swinging between overvaluation and undervaluation. Our
                philosophy is rooted in capturing these swings through a
                systematic, fundamental approach.
              </p>
            </div>

            {/* Image — 2 of 5 columns (narrower than text) */}
            <div className="order-1 md:order-2 md:col-span-2">
              <div className="group relative w-full aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-xl cursor-pointer">
                <Image
                  src="/p1.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/25 transition duration-500 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Guiding Principles ═══ */}
      <section className="bg-surface py-8 md:py-8 px-6 border-b border-border">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-black leading-tight">
              Guiding Principles
            </h2>
            <div className="mt-6 mx-auto h-px w-16 bg-accent" />
          </div>

          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {principles.map((item, i) => (
              <article
                key={i}
                className="bg-white px-8 py-10 md:py-12 text-center flex flex-col items-center"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl md:text-2xl text-black font-semibold leading-snug max-w-[280px]">
                  {item.title}
                </h3>

                <div className="mt-5 h-px w-8 bg-black/20" />

                <p className="mt-5 text-sm md:text-base text-black/65 leading-relaxed max-w-[320px]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Core Strategy ═══ */}
      <section className="py-10 md:py-18 px-3 md:px-4">
        <div className="max-w-[1500px] mx-auto px-0 md:px-2 lg:px-4">

          {/* Heading + image — content-heavy split */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 lg:gap-16 items-center">

            {/* Text — 3 of 5 columns (wider than image) */}
            <div className="text-left md:col-span-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight whitespace-nowrap">
                Our Core Strategy
              </h2>

              <div className="mt-7 h-px w-16 bg-accent" />

              <div className="mt-8 max-w-2xl space-y-5 text-base md:text-lg text-black/70 leading-relaxed">
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
                  we buy high-quality businesses at reasonable valuations
                  &mdash; forming equi-weight portfolios designed to hold
                  winners and weed out losers with minimal manual intervention.
                </p>
              </div>
            </div>

            {/* Image — 2 of 5 columns (narrower than text), same hover treatment */}
            <div className="md:col-span-2">
              <div className="group relative w-full aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-xl cursor-pointer">
                <Image
                  src="/p2.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/25 transition duration-500 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {steps.map((item, i) => (
              <div
                key={i}
                className="bg-white px-8 py-10 md:py-12 text-center flex flex-col items-center"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                  Step {item.step}
                </span>

                <h3 className="mt-5 text-xl md:text-2xl text-black font-semibold leading-snug max-w-[280px]">
                  {item.title}
                </h3>

                <div className="mt-5 h-px w-8 bg-black/20" />

                <p className="mt-5 text-sm md:text-base text-black/65 leading-relaxed max-w-[320px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
