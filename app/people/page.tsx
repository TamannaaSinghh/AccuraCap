"use client";

import Image from "next/image";

const teamMembers = ["Ishu Singhania", "Divya Singhal", "Shivam Gupta", "Vijay Jha"];

export default function PeoplePage() {
  return (
    <main className="relative w-full px-6 py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0B1F3A]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto space-y-24">

        {/* Heading */}
        <div className="text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A74D]">
            The People
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0B1F3A]">
            Meet Our Team
          </h1>
          <p className="text-gray-500 mt-2">The minds behind disciplined investing</p>
        </div>

        {/* Founder */}
        <section className="rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden max-w-[860px] mx-auto">

          {/* Card Header — image + name side by side */}
          <div className="flex items-center gap-6 px-8 py-6 border-b border-gray-100 bg-white/80">
            <div className="relative w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 shadow-md">
              <Image
                src="/Naresh-Gupta-1.png"
                alt="Dr. Naresh Gupta"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#0B1F3A]">Dr. Naresh Gupta</h2>
              <p className="text-xs text-[#C9A74D] font-medium mt-0.5">Founder & Portfolio Manager</p>
            </div>
            <div className="ml-auto px-3 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider">
              Founder
            </div>
          </div>

          {/* Card Body */}
          <div className="px-8 py-6 space-y-3">
            <p className="text-sm text-gray-600 leading-relaxed">
              Eminent Computer Scientist, Researcher, and Corporate Executive. A Gold medalist from
              the reputed Indian Institute of Technology (IIT) and a Ph.D in Computer Science from
              University of Maryland.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Naresh is a prolific researcher, inventor and a senior executive running global
              businesses. Before pursuing Accuracap fulltime, he was a core member of global
              leadership of Adobe Systems, an $8B software giant.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              His special interest includes application of data analytics to solve complex problems
              in space as varied as stock markets and ecommerce.
            </p>
          </div>
        </section>

        {/* Director */}
        <section className="rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden max-w-[860px] mx-auto">
          <div className="px-8 py-5 border-b border-gray-100 bg-white/80 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0B1F3A]">Shreya Gupta</h2>
              <p className="text-xs text-[#C9A74D] font-medium mt-0.5">Director Operations</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider">
              Director
            </div>
          </div>
          <div className="px-8 py-6 space-y-3">
            <p className="text-sm text-gray-600 leading-relaxed">
              Shreya Gupta brings a robust blend of engineering and financial expertise to her role
              as Director, leading operations at Accuracap. She holds a B.Tech in Chemical
              Engineering and an MBA from NMIMS Mumbai.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Before joining Accuracap, Shreya worked at Edelweiss Global Wealth Management for
              over two years, acquiring extensive experience in financial analysis and wealth
              management.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              At Accuracap, she is instrumental in streamlining operations, ensuring regulatory
              compliance, and supporting the firm's investment strategies.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="text-center space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A74D]">Our People</p>
            <h2 className="text-2xl font-serif text-[#0B1F3A]">Team Members</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {teamMembers.map((name) => (
              <div
                key={name}
                className="px-6 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-gray-100 shadow-sm text-sm text-gray-700 hover:shadow-md hover:-translate-y-0.5 transition duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
