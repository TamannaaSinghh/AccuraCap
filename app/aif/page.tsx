"use client";

export default function AIFPage() {
  return (
    <main className="relative w-full px-6 py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="max-w-[1100px] mx-auto space-y-16 pt-10">

        {/* ================= HEADER ================= */}
        <section className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
            AIF
          </h1>

          <p className="text-gray-600">
            <span className="font-medium text-gray-900">AIF Category:</span>{" "}
            Category III Investment Fund
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-900">Registration Number:</span>{" "}
            IN/AIF3/17-18/0521
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-900">Minimum Investment:</span>{" "}
            1 Crore
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-900">Fund Manager:</span>{" "}
            Accuracap Technologies LLP
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-900">Sponsor:</span>{" "}
            Accuracap Consultancy Services Pvt Ltd
          </p>
        </section>

        {/* ================= FIRST ROW ================= */}
        <section className="grid md:grid-cols-2 gap-10">

          {/* Stewardship Policy */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              Accuracap Stewardship Policy
            </h3>

            <iframe
              src="/Accuracap_Stewardship-Policy-1.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>

          {/* Voting Policy */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AIF Voting Policy
            </h3>

            <iframe
              src="/Voting-policy_AIF.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>
        </section>

        {/* ================= SECOND ROW ================= */}
        <section className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AIF Disclosure of voting Q1 FY25-26
            </h3>

            <iframe
              src="/Voting-Disclosure-Q1-FY-25-26.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              Accuracap Stewardship Compliance Status-FY 24-25
            </h3>

            <iframe
              src="/Compliance-Status-FY-24-25.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>
        </section>

        {/* ================= THIRD ROW ================= */}
        <section className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AIF Disclosure of voting Q2 FY25-26
            </h3>

            <iframe
              src="/Voting-Disclosure-Q2-FY-25-26.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AIF Disclosure of voting Q3 FY25-26
            </h3>

            <iframe
              src="/Disclosure-of-voting-Q3-2025-26-final.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>
        </section>

        {/* ================= FOURTH ROW ================= */}
        <section className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AIF Disclosure of voting Q3 FY24-25
            </h3>

            <iframe
              src="/Voting-Disclosure-Q3-1.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-700 text-center">
              AIF Disclosure of voting Q4 FY24-25
            </h3>

            <iframe
              src="/Voting-Disclosure-Q4-2025.pdf"
              className="w-full h-[350px] rounded-xl border shadow"
            />
          </div>
        </section>

      </div>
    </main>
  );
}