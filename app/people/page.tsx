"use client";

import Image from "next/image";

const teamMembers = ["Ishu Singhania", "Divya Singhal", "Shivam Gupta", "Vijay Jha"];

export default function PeoplePage() {
  return (
    <main className="w-full bg-white">

      {/* ═══ Header ═══ */}
      <section className="pt-28 pb-16 px-6">
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

          {/* ═══ Leadership Cards ═══ */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">

            {/* Founder */}
            <div className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-5 px-6 py-5 bg-accent/5 border-b border-accent/20">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-accent/20">
                  <Image
                    src="/Naresh-Gupta-1.png"
                    alt="Dr. Naresh Gupta"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black">Dr. Naresh Gupta</h2>
                  <p className="text-xs text-accent font-medium mt-0.5">Founder & Portfolio Manager</p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-2.5 text-sm text-muted leading-relaxed">
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

            {/* Director */}
            <div className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-5 px-6 py-5 bg-accent/5 border-b border-accent/20">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 ring-2 ring-accent/20">
                  <span className="text-accent text-xl font-bold">SG</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black">Shreya Gupta</h2>
                  <p className="text-xs text-accent font-medium mt-0.5">Director Operations</p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-2.5 text-sm text-muted leading-relaxed">
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
          </div>

          {/* ═══ Team Members ═══ */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                Our People
              </span>
            </div>
            <h2 className="text-2xl text-black mb-6">Team Members</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((name) => (
                <div
                  key={name}
                  className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-white hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <span className="text-accent text-sm font-bold group-hover:text-white transition-colors duration-300">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className="text-sm text-black font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
