"use client";

export default function KYCPage() {
  return (
    <main className="relative w-full px-6 py-20">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="max-w-[1100px] mx-auto space-y-12 pt-10">

        {/* ================= TITLE ================= */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
          KYC Status Check
        </h1>

        {/* ================= ALERT ================= */}
        <h2 className="text-center text-red-700 font-semibold text-xl">
          HAS YOUR KYC STATUS CHANGED?
        </h2>

        {/* ================= SECTION 1 ================= */}
        <section className="space-y-4 text-gray-700 leading-relaxed">

          <h3 className="font-semibold text-gray-800 uppercase">
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
            <li>Client’s Mobile Number and Email ID</li>
          </ul>

          <p>
            The records of those clients in respect of which all the above attributes are verified by KRAs
            with an official database (such as the Income Tax database on PAN, Aadhaar XML/DigiLocker/M-Aadhaar)
            shall be considered as validated records.
          </p>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="space-y-4 text-gray-700 leading-relaxed">

          <h3 className="font-semibold text-gray-800 uppercase">
            What are the attributes affecting your KYC status?
          </h3>

          <p>
            The KRAs have changed the KYC status of all existing KYC complied investors after validating
            above 4 attributes such as PAN, Name and Address with the official database (such as Income Tax database on PAN,
            Aadhaar XML/DigiLocker/M-Aadhaar) and Email ID/Mobile number (where provided) as follows:
          </p>

          <div className="flex gap-8 text-blue-700 text-sm font-medium">
            <span>KYC VALIDATED</span>
            <span>KYC REGISTERED</span>
            <span>KYC ON HOLD</span>
          </div>
        </section>

        {/* ================= TABLE ================= */}
        <section className="space-y-4">

          <h3 className="font-semibold text-gray-800 uppercase">
            What are the implications?
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="border p-3 text-left">KYC STATUS</th>
                  <th className="border p-3 text-left">EXISTING AMC</th>
                  <th className="border p-3 text-left">NEW AMC</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3 font-medium">KYC Validated</td>
                  <td className="border p-3">No implications.</td>
                  <td className="border p-3">No implications.</td>
                </tr>

                <tr>
                  <td className="border p-3 font-medium">KYC Registered</td>
                  <td className="border p-3">
                    All financial transactions only in the AMC where investor already has investment are allowed.
                  </td>
                  <td className="border p-3">
                    Investors need to submit the set of KYC documents every time they invest with a new AMC.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3 font-medium">KYC On hold</td>
                  <td className="border p-3">
                    Investor will be able to transact after remediating the reason for KYC status On Hold.
                  </td>
                  <td className="border p-3">
                    Investor will be able to transact after remediating the reason for KYC status On Hold.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 3 ================= */}
        <section className="space-y-4 text-gray-700 leading-relaxed">

          <h3 className="font-semibold text-gray-800 uppercase">
            How can investors check their KYC status?
          </h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>Visit your KRA website (Links to KRA websites given below)</li>
            <li>Click on KYC enquiry</li>
            <li>Enter your PAN details and submit</li>
            <li>The details displayed will indicate the proof used for your KYC</li>
          </ul>

          <p>
            For further assistance, contact the Mutual Fund or RTA helpline.
          </p>
        </section>

        {/* ================= LINKS ================= */}
        <section className="space-y-4 text-gray-700">

          <h3 className="font-semibold text-gray-800 uppercase">
            KYC Contact Details Validation Links
          </h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              CAMS KRA:{" "}
              <a href="https://camskra.com/PanDetailsUpdate.aspx" target="_blank" className="text-blue-600 underline">
                https://camskra.com/PanDetailsUpdate.aspx
              </a>
            </li>
            <li>
              CVL KRA:{" "}
              <a href="https://validate.cvlindia.com/CVLKRAVerification_V1" target="_blank" className="text-blue-600 underline">
                https://validate.cvlindia.com/CVLKRAVerification_V1
              </a>
            </li>
            <li>
              NDML KRA:{" "}
              <a href="https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC" target="_blank" className="text-blue-600 underline">
                https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC
              </a>
            </li>
            <li>
              KARVY KRA:{" "}
              <a href="https://www.karvykra.com/KYC_Validation/Default.aspx" target="_blank" className="text-blue-600 underline">
                https://www.karvykra.com/KYC_Validation/Default.aspx
              </a>
            </li>
          </ul>
        </section>

        {/* ================= PAN AADHAAR ================= */}
        <section className="space-y-4 text-gray-700">

          <h3 className="font-semibold text-gray-800 uppercase">
            KYC PAN Aadhaar Validation Links
          </h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              CAMS KRA:{" "}
              <a href="https://camskra.com/pan_aadhaarlink.aspx" target="_blank" className="text-blue-600 underline">
                https://camskra.com/pan_aadhaarlink.aspx
              </a>
            </li>
            <li>
              CVL KRA:{" "}
              <a href="https://validate.cvlindia.com/CVLKRAVerification_V1" target="_blank" className="text-blue-600 underline">
                https://validate.cvlindia.com/CVLKRAVerification_V1
              </a>
            </li>
            <li>
              NDML KRA:{" "}
              <a href="https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC" target="_blank" className="text-blue-600 underline">
                https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}