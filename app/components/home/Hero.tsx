import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { HERO_STATS_QUERY } from "@/sanity/lib/queries";

type HeroStat = {
  _id: string;
  value: string;
  heading: string;
  subheading?: string;
  order: number;
};

export default async function Hero() {
  const stats = await client.fetch<HeroStat[]>(HERO_STATS_QUERY);

  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] lg:min-h-screen flex items-center overflow-hidden pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 lg:pb-20">
      {/* Background Image */}
      <Image src="/background.png" alt="" fill priority className="object-cover" />

      {/* Left-to-right overlay: fully solid light grey on the left, slow fade to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d8d8d8] from-30% to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto text-left px-6 md:px-12 lg:px-16">
        {/* Accent tag */}
        <div className="flex items-center gap-3 mb-7">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[#1a1a1a]/70 text-[12px] tracking-[0.28em] uppercase font-medium">
            Established 2011
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[34.5px] sm:text-[41px] md:text-[49.5px] lg:text-[60.5px] text-[#1a1a1a] leading-[1.15] tracking-tight max-w-[920px]">
          Boutique Fund Management
          <br />
          for Long-Term Investors
        </h1>

        {/* Red accent line below heading */}
        <div className="mt-6 h-[2px] w-12 bg-accent" />

        {/* Subtext */}
        <p className="mt-6 text-[#1a1a1a]/80 max-w-[620px] text-[15.5px] md:text-[16.5px] leading-[1.7]">
          AccuraCap is a SEBI-registered Portfolio Management Service and
          Category III Alternative Investment Fund manager. We manage long-only
          equity portfolios through proprietary, AI-driven algorithms that have
          consistently outperformed benchmark returns. We serve high-net-worth
          individuals, family offices, and institutions seeking disciplined,
          systematic investment management.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="/products"
            className="inline-block px-6 md:px-7 py-3 bg-[#1a1a1a] text-white text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-[#1a1a1a]/85 transition-colors duration-300"
          >
            Explore Strategies
          </a>
          <a
            href="/contact"
            className="inline-block px-6 md:px-7 py-3 border border-[#1a1a1a]/40 text-[#1a1a1a] text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Stats strip — driven entirely by Sanity CMS */}
        {stats.length > 0 && (
          <div className="mt-10 md:mt-16 lg:mt-20 border-t border-[#1a1a1a]/15 pt-6 md:pt-11">
            <div className="grid grid-cols-3 w-full">
              {stats.map((stat, index) => (
                <div
                  key={stat._id}
                  className={`px-2 md:px-3 py-2 md:py-3 text-center ${
                    index < stats.length - 1
                      ? "border-r border-[#1a1a1a]/15"
                      : ""
                  }`}
                >
                  <p className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] text-accent tracking-tight font-bold leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 md:mt-2 text-[#1a1a1a]/85 text-[10px] sm:text-[11px] md:text-[12.5px] tracking-[0.14em] md:tracking-[0.16em] uppercase font-medium leading-tight">
                    {stat.heading}
                  </p>
                  {stat.subheading && (
                    <p className="mt-1 text-[#1a1a1a]/55 text-[10px] sm:text-[10.5px] md:text-[12px] leading-tight">{stat.subheading}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
