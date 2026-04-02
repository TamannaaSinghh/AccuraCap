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
    <section className="w-full bg-surface py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            What Sets Us Apart
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          Why Us?
        </h2>
        

        <div className="mt-10 flex flex-col gap-px bg-border border border-border">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white"
            >
              {/* Title */}
              <div className="md:w-[240px] shrink-0 px-8 py-6 flex items-center border-b md:border-b-0 md:border-r border-border">
                <h3 className="text-base font-semibold text-black leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex-1 px-8 py-6 flex items-center">
                {"points" in item ? (
                  <ul className="space-y-1.5">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-0.5 shrink-0">&rarr;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
