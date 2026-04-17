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
    <section className="w-full bg-white pt-20 md:pt-24 pb-20 md:pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h2 className="text-[28px] sm:text-[32.5px] md:text-[39px] lg:text-[43px] text-black leading-[1.18] tracking-tight">
          Key Differentiators
        </h2>

        {/* Cards */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, i) => (
            <article
              key={i}
              className="group relative bg-white border border-border rounded-xl p-6 md:p-7 hover:shadow-md hover:border-black/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-[13px] font-bold tracking-[0.18em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-7 bg-accent" />
              </div>

              {/* Title */}
              <h3 className="text-[18.5px] md:text-[20.5px] font-semibold text-black leading-snug">
                {item.title}
              </h3>

              {/* Body */}
              {"points" in item ? (
                <ul className="mt-3.5 space-y-2.5">
                  {item.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-[14.5px] md:text-[15px] text-black/65 leading-[1.65] flex items-start gap-2.5"
                    >
                      <span className="text-accent mt-[7px] shrink-0 h-1 w-1 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3.5 text-[14.5px] md:text-[15px] text-black/65 leading-[1.65]">
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
