"use client";

import Image from "next/image";

const teamMembers = ["Ishu Singhania", "Divya Singhal", "Shivam Gupta", "Vijay Jha"];

export default function PeoplePage() {
  return (
    <main className="w-full bg-white">

      {/* ═══ Header ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              The People
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
            Meet Our Team
          </h1>
          <div className="mt-4 h-[2px] w-12 bg-accent" />
          <p className="mt-4 text-muted">The minds behind disciplined investing</p>

          {/* ═══ Founder ═══ */}
          <div className="mt-16 border border-border">
            {/* Card header */}
            <div className="flex items-center gap-6 px-8 py-6 border-b border-border bg-surface">
              <div className="relative w-[72px] h-[72px] overflow-hidden shrink-0">
                <Image
                  src="/Naresh-Gupta-1.png"
                  alt="Dr. Naresh Gupta"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-black">Dr. Naresh Gupta</h2>
                <p className="text-xs text-accent font-medium mt-0.5">Founder &amp; Portfolio Manager</p>
              </div>
              <span className="ml-auto px-3 py-1 bg-surface border border-border text-black text-xs font-medium uppercase tracking-wider">
                Founder
              </span>
            </div>

            {/* Card body */}
            <div className="px-8 py-6 space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Eminent Computer Scientist, Researcher, and Corporate Executive. A Gold medalist from
                the reputed Indian Institute of Technology (IIT) and a Ph.D in Computer Science from
                University of Maryland.
              </p>
              <p>
                Naresh is a prolific researcher, inventor and a senior executive running global
                businesses. Before pursuing Accuracap fulltime, he was a core member of global
                leadership of Adobe Systems, an $8B software giant.
              </p>
              <p>
                His special interest includes application of data analytics to solve complex problems
                in space as varied as stock markets and ecommerce.
              </p>
            </div>
          </div>

          {/* ═══ Director ═══ */}
          <div className="mt-6 border border-border">
            <div className="px-8 py-5 border-b border-border bg-surface flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-black">Shreya Gupta</h2>
                <p className="text-xs text-accent font-medium mt-0.5">Director Operations</p>
              </div>
              <span className="px-3 py-1 bg-surface border border-border text-black text-xs font-medium uppercase tracking-wider">
                Director
              </span>
            </div>
            <div className="px-8 py-6 space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Shreya Gupta brings a robust blend of engineering and financial expertise to her role
                as Director, leading operations at Accuracap. She holds a B.Tech in Chemical
                Engineering and an MBA from NMIMS Mumbai.
              </p>
              <p>
                Before joining Accuracap, Shreya worked at Edelweiss Global Wealth Management for
                over two years, acquiring extensive experience in financial analysis and wealth
                management.
              </p>
              <p>
                At Accuracap, she is instrumental in streamlining operations, ensuring regulatory
                compliance, and supporting the firm&apos;s investment strategies.
              </p>
            </div>
          </div>

          {/* ═══ Team Members ═══ */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                Our People
              </span>
            </div>
            <h2 className="text-2xl text-black mb-8">Team Members</h2>

            <div className="flex flex-wrap gap-3">
              {teamMembers.map((name) => (
                <div
                  key={name}
                  className="px-6 py-3 bg-surface border border-border text-sm text-black font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
