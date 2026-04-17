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
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">

            {/* Text — 3 of 5 columns (wider than image) */}
            <div className="text-left order-2 lg:order-1 lg:col-span-3">
              <h1 className="text-[32.5px] sm:text-[39px] md:text-[45.5px] lg:text-[52px] text-black leading-[1.15] tracking-tight">
                The Art of
                <br />
                <span className="italic">Disciplined Investing.</span>
              </h1>

              <div className="mt-6 h-[2px] w-12 bg-accent" />

              <p className="mt-7 max-w-[580px] text-[15.5px] md:text-[16.5px] text-black/70 leading-[1.75]">
                At AccuraCap, we believe the markets move like a pendulum
                &mdash; swinging between overvaluation and undervaluation. Our
                philosophy is rooted in capturing these swings through a
                systematic, fundamental approach.
              </p>
            </div>

            {/* Image — 2 of 5 columns (narrower than text) */}
            <div className="order-1 lg:order-2 lg:col-span-2">
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
      <section className="bg-surface py-20 md:py-24 px-6 md:px-10 lg:px-16 border-b border-border">
        <div className="max-w-[1180px] mx-auto">

          <div className="text-center">
            <h2 className="text-[28px] sm:text-[32.5px] md:text-[36.5px] text-black leading-[1.18] tracking-tight">
              Guiding Principles
            </h2>
            <div className="mt-5 mx-auto h-[2px] w-10 bg-accent" />
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            {principles.map((item, i) => (
              <article
                key={i}
                className="bg-white px-7 py-10 md:py-11 text-center flex flex-col items-center"
              >
                <span className="text-[12px] tracking-[0.28em] uppercase text-accent font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-[18.5px] md:text-[20.5px] text-black font-semibold leading-snug max-w-[260px]">
                  {item.title}
                </h3>

                <div className="mt-5 h-px w-8 bg-black/20" />

                <p className="mt-5 text-[14.5px] md:text-[15px] text-black/65 leading-[1.7] max-w-[300px]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Core Strategy ═══ */}
      <section className="py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading + image — content-heavy split */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">

            {/* Text — 3 of 5 columns (wider than image) */}
            <div className="text-left lg:col-span-3">
              <h2 className="text-[30px] sm:text-[34.5px] md:text-[43px] lg:text-[47.5px] text-black leading-[1.18] tracking-tight">
                Our Core Strategy
              </h2>

              <div className="mt-6 h-[2px] w-12 bg-accent" />

              <div className="mt-7 max-w-[580px] space-y-4 text-[15.5px] md:text-[16.5px] text-black/70 leading-[1.75]">
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
            <div className="lg:col-span-2">
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
          <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            {steps.map((item, i) => (
              <div
                key={i}
                className="bg-white px-7 py-10 md:py-11 text-center flex flex-col items-center"
              >
                <span className="text-[12px] tracking-[0.28em] uppercase text-accent font-medium">
                  Step {item.step}
                </span>

                <h3 className="mt-4 text-[18.5px] md:text-[20.5px] text-black font-semibold leading-snug max-w-[260px]">
                  {item.title}
                </h3>

                <div className="mt-5 h-px w-8 bg-black/20" />

                <p className="mt-5 text-[14.5px] md:text-[15px] text-black/65 leading-[1.7] max-w-[300px]">
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
