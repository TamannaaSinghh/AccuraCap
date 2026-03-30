export default function About() {
  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Who We Are
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          About AccuraCap
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        {/* Content */}
        <div className="mt-12 max-w-3xl space-y-6 text-muted text-base leading-relaxed">
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
