"use client";

type Reason =
  | {
      title: string;
      points: string[];
    }
  | {
      title: string;
      description: string;
    };

const reasons: Reason[] = [
  {
    title: "Top Performing Fund",
    points: [
      "Consistently in Top 10 Performing PMS in 10Y, 5Y and 3Y returns (PMSBazaar, Altport Experts, PMS AIF world).",
      "#1 Risk Adjusted PMS for 10 years (2021 and 2022, by PMS AIF world)",
    ],
  },
  {
    title: "Proven, Time-Tested Technology",
    description:
      "Investment models are rigorously back-tested over 10+ years on proprietary funds.",
  },
  {
    title: "Rules-Based",
    description:
      "Decisions made independent of individual biases, generally based on systemic rules.",
  },
  {
    title: "Always Invested",
    description:
      "Focused on long-term wealth creation through disciplined investing.",
  },
  {
    title: "Skin in the Game",
    description:
      "Started as a family office, with proprietary wealth invested alongside clients.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-surface pt-6 md:pt-8 lg:pt-10 pb-16 md:pb-20 lg:pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
          Key Differentiators
        </h2>

        {/* Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, i) => (
            <article
              key={i}
              className="group relative bg-white border border-border rounded-2xl p-7 md:p-8 hover:shadow-lg hover:border-black/15 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-accent text-sm font-bold tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-accent" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-black leading-snug">
                {item.title}
              </h3>

              {/* Body */}
              {"points" in item ? (
                <ul className="mt-4 space-y-3">
                  {item.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-base md:text-[17px] text-black/70 leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-accent mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-base md:text-[17px] text-black/70 leading-relaxed">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
