export default function About() {
  return (
    <main className="w-full bg-white pt-28 md:pt-32 pb-20 md:pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-7 bg-accent" />
          <span className="text-muted text-[12px] tracking-[0.28em] uppercase font-medium">
            Who We Are
          </span>
        </div>

        <h1 className="text-[30px] sm:text-[34.5px] md:text-[41px] lg:text-[45.5px] text-black leading-[1.18] tracking-tight">
          About AccuraCap
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Content */}
        <div className="mt-10 md:mt-12 max-w-[680px] space-y-5 text-muted text-[15.5px] md:text-[16px] leading-[1.75]">
          <p>
            AccuraCap is a boutique fund manager with over 15 years of experience in
            delivering superior risk-adjusted returns. Our investment philosophy is
            grounded in proprietary quantitative models, rigorous fundamental analysis,
            and a disciplined approach to portfolio construction.
          </p>
          <p>
            We manage capital for high-net-worth individuals and institutional investors,
            with a commitment to transparency, integrity, and long-term value creation.
          </p>
        </div>

      </div>
    </main>
  );
}
