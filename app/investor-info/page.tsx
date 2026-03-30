const documents = [
  { title: "Fund Fact Sheet - Q1 2025", type: "PDF" },
  { title: "Annual Report 2024", type: "PDF" },
  { title: "Investment Policy Statement", type: "PDF" },
  { title: "Risk Disclosure Document", type: "PDF" },
];

export default function InvestorInfo() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-primary mb-6">Investor Information</h1>
      <p className="text-gray-600 mb-10">
        Access fund documents, performance reports, and important disclosures below.
      </p>

      <h2 className="text-xl font-semibold text-primary mb-4">Documents</h2>
      <ul className="space-y-3">
        {documents.map((doc, i) => (
          <li key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <span className="text-gray-800">{doc.title}</span>
            <span className="text-xs bg-accent text-primary font-semibold px-2 py-1 rounded">
              {doc.type}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-lg font-semibold text-primary mb-2">Minimum Investment</h2>
        <p className="text-gray-600">
          The minimum investment for all AccuraCap funds is <strong>&#8377;25,00,000</strong>.
          Please contact us to begin the onboarding process.
        </p>
      </div>
    </div>
  );
}
