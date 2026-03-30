const documents = [
  { title: "Fund Fact Sheet - Q1 2025", type: "PDF" },
  { title: "Annual Report 2024", type: "PDF" },
  { title: "Investment Policy Statement", type: "PDF" },
  { title: "Risk Disclosure Document", type: "PDF" },
];

export default function InvestorInfo() {
  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Resources
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          Investor Information
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        <p className="mt-6 text-muted text-sm">
          Access fund documents, performance reports, and important disclosures below.
        </p>

        {/* Documents */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              Documents
            </span>
          </div>

          <div className="border-t border-border">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-sm text-black">{doc.title}</span>
                <span className="px-3 py-1 bg-surface border border-border text-xs font-medium text-muted uppercase tracking-wider">
                  {doc.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum Investment */}
        <div className="mt-16 border border-border p-8">
          <h2 className="text-lg font-semibold text-black mb-3">Minimum Investment</h2>
          <p className="text-sm text-muted leading-relaxed">
            The minimum investment for all AccuraCap funds is <strong className="text-black">&#8377;25,00,000</strong>.
            Please contact us to begin the onboarding process.
          </p>
        </div>

      </div>
    </main>
  );
}
