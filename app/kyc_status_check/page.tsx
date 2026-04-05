"use client";

export default function KYCPage() {
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
          KYC Status Check
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        {/* Alert */}
        <div className="mt-12 border border-accent/30 bg-accent/5 px-6 py-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Has your KYC status changed?
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 space-y-12 text-muted text-sm leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="font-semibold text-black uppercase text-xs tracking-wider">
              What is the change from 1st April 2024?
            </h3>

            <p>
              SEBI vide circular SEBI/HO/MIRSD/FATF/P/CIR/2023/0144 dated 11th August 2023,
              as a risk management framework advised that KYC Registration Agencies (KRAs)
              shall verify the following attributes of KYC:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>PAN (including PAN Aadhaar linkage, as referred to in rule 114 AAA of the Income Tax Rules, 1962)</li>
              <li>Name</li>
              <li>Address</li>
              <li>Client&apos;s Mobile Number and Email ID</li>
            </ul>

            <p>
              The records of those clients in respect of which all the above attributes are verified by KRAs
              with an official database (such as the Income Tax database on PAN, Aadhaar XML/DigiLocker/M-Aadhaar)
              shall be considered as validated records.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="font-semibold text-black uppercase text-xs tracking-wider">
              What are the attributes affecting your KYC status?
            </h3>

            <p>
              The KRAs have changed the KYC status of all existing KYC complied investors after validating
              above 4 attributes such as PAN, Name and Address with the official database and Email ID/Mobile
              number (where provided) as follows:
            </p>

            <div className="flex gap-4">
              {["KYC Validated", "KYC Registered", "KYC On Hold"].map((status) => (
                <span key={status} className="px-4 py-2 bg-surface border border-border text-xs font-medium text-black uppercase tracking-wider">
                  {status}
                </span>
              ))}
            </div>
          </section>

          {/* Table */}
          <section className="space-y-4">
            <h3 className="font-semibold text-black uppercase text-xs tracking-wider">
              What are the implications?
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left text-black font-medium">KYC Status</th>
                    <th className="py-3 pr-4 text-left text-black font-medium">Existing AMC</th>
                    <th className="py-3 text-left text-black font-medium">New AMC</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-black">KYC Validated</td>
                    <td className="py-3 pr-4">No implications.</td>
                    <td className="py-3">No implications.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-black">KYC Registered</td>
                    <td className="py-3 pr-4">
                      All financial transactions only in the AMC where investor already has investment are allowed.
                    </td>
                    <td className="py-3">
                      Investors need to submit the set of KYC documents every time they invest with a new AMC.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-black">KYC On Hold</td>
                    <td className="py-3 pr-4">
                      Investor will be able to transact after remediating the reason for KYC status On Hold.
                    </td>
                    <td className="py-3">
                      Investor will be able to transact after remediating the reason for KYC status On Hold.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="font-semibold text-black uppercase text-xs tracking-wider">
              How can investors check their KYC status?
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>Visit your KRA website (links below)</li>
              <li>Click on KYC enquiry</li>
              <li>Enter your PAN details and submit</li>
              <li>The details displayed will indicate the proof used for your KYC</li>
            </ul>

            <p>For further assistance, contact the Mutual Fund or RTA helpline.</p>
          </section>

          {/* Links */}
          <section className="space-y-4">
            <h3 className="font-semibold text-black uppercase text-xs tracking-wider">
              KYC Contact Details Validation Links
            </h3>

            <ul className="space-y-2">
              {[
                { name: "CAMS KRA", url: "https://camskra.com/PanDetailsUpdate.aspx" },
                { name: "CVL KRA", url: "https://validate.cvlindia.com/CVLKRAVerification_V1" },
                { name: "NDML KRA", url: "https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC" },
                { name: "KARVY KRA", url: "https://www.karvykra.com/KYC_Validation/Default.aspx" },
              ].map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <span className="h-px w-3 bg-accent" />
                  <span className="font-medium text-black">{link.name}:</span>
                  <a href={link.url} target="_blank" className="text-accent hover:text-accent-dark transition-colors break-all">
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* PAN Aadhaar Links */}
          <section className="space-y-4">
            <h3 className="font-semibold text-black uppercase text-xs tracking-wider">
              KYC PAN Aadhaar Validation Links
            </h3>

            <ul className="space-y-2">
              {[
                { name: "CAMS KRA", url: "https://camskra.com/pan_aadhaarlink.aspx" },
                { name: "CVL KRA", url: "https://validate.cvlindia.com/CVLKRAVerification_V1" },
                { name: "NDML KRA", url: "https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC" },
              ].map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <span className="h-px w-3 bg-accent" />
                  <span className="font-medium text-black">{link.name}:</span>
                  <a href={link.url} target="_blank" className="text-accent hover:text-accent-dark transition-colors break-all">
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
