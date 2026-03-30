"use client";

const documents = [
  { title: "Accuracap Stewardship Policy", src: "/Accuracap_Stewardship-Policy-1.pdf" },
  { title: "AIF Voting Policy", src: "/Voting-policy_AIF.pdf" },
  { title: "AIF Disclosure of Voting Q1 FY25-26", src: "/Voting-Disclosure-Q1-FY-25-26.pdf" },
  { title: "Accuracap Stewardship Compliance Status FY 24-25", src: "/Compliance-Status-FY-24-25.pdf" },
  { title: "AIF Disclosure of Voting Q2 FY25-26", src: "/Voting-Disclosure-Q2-FY-25-26.pdf" },
  { title: "AIF Disclosure of Voting Q3 FY25-26", src: "/Disclosure-of-voting-Q3-2025-26-final.pdf" },
  { title: "AIF Disclosure of Voting Q3 FY24-25", src: "/Voting-Disclosure-Q3-1.pdf" },
  { title: "AIF Disclosure of Voting Q4 FY24-25", src: "/Voting-Disclosure-Q4-2025.pdf" },
];

export default function AIFPage() {
  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Investor Information
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          AIF
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        {/* Details */}
        <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl">
          {[
            { label: "AIF Category", value: "Category III Investment Fund" },
            { label: "Registration Number", value: "IN/AIF3/17-18/0521" },
            { label: "Minimum Investment", value: "1 Crore" },
            { label: "Fund Manager", value: "Accuracap Technologies LLP" },
            { label: "Sponsor", value: "Accuracap Consultancy Services Pvt Ltd" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm text-black">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              Documents &amp; Disclosures
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl text-black mb-10">
            Policies &amp; Voting Records
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div key={doc.title} className="border border-border overflow-hidden">
                <div className="px-6 py-4 bg-surface border-b border-border">
                  <h3 className="text-sm font-semibold text-black">{doc.title}</h3>
                </div>
                <iframe
                  src={doc.src}
                  className="w-full h-[350px]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
