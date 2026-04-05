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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-40 pb-10">

      {/* Background Image */}
      <Image
        src="/herobg.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-left px-6 md:px-16 lg:px-24">

        {/* Accent tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-accent" />
          <span className="text-white text-xs tracking-[0.3em] uppercase font-medium">
            Established 2011
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
          Intelligent Investing
          <br />
          Effortless Results
        </h1>

        {/* Red accent line below heading */}
        <div className="mt-6 h-[3px] w-16 bg-accent" />

        {/* Subtext */}
        <p className="mt-6 text-white max-w-lg text-base md:text-lg leading-relaxed font-medium">
          A boutique fund manager delivering exceptional returns through
          proprietary research and disciplined investment strategies.
        </p>

        {/* CTA */}
        <div className="mt-4 md:mt-12 flex items-center gap-5">
          <a
            href="/products"
            className="inline-block px-8 py-3.5 bg-accent text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-accent-dark transition-colors duration-300"
          >
            Explore Strategies
          </a>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 border border-white/30 text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Stats strip — driven entirely by Sanity CMS */}
        {stats.length > 0 && (
          <div className="mt-20 md:mt-28 border-t border-accent-light pt-3">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
              {stats.map((stat, index) => (
                <div
                  key={stat._id}
                  className={`py-6 md:py-0 text-center ${
                    index < stats.length - 1
                      ? "border-b md:border-b-0 md:border-r border-accent-light"
                      : ""
                  }`}
                >
                  <p className="text-3xl md:text-4xl text-accent tracking-tight font-bold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-white text-sm tracking-wide uppercase">
                    {stat.heading}
                  </p>
                  {stat.subheading && (
                    <p className="mt-1 text-white text-xs">
                      {stat.subheading}
                    </p>
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
