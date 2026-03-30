"use client";

import { useState } from "react";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <main className="w-full px-6 py-16 bg-white">
      <div className="max-w-[1100px] mx-auto pt-20">

        {faqData.map((item, i) => (
          <div key={i} className="border border-red-400 mb-3 rounded-lg overflow-hidden">

            {/* Question */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left text-red-600 font-medium hover:bg-red-50 transition"
            >
              <span className="text-2xl font-bold">
                {open === i ? "−" : "+"}
              </span>
              {item.q}
            </button>

            {/* Answer */}
            {open === i && (
              <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed bg-white">
                {item.a}
              </div>
            )}
          </div>
        ))}

      </div>
    </main>
  );
}

/* ================= DATA ================= */

const faqData = [
  {
    q: "Is direct investing (without involving distributor) option available?",
    a: (
      <p>
        Yes, the option to invest directly is available. To avail it, kindly send an email to{" "}
        <span className="text-red-600">clientservicing@accuracap.com</span> or call on +91 95408 34888.
      </p>
    ),
  },

  {
    q: "Is there any specified value of funds or securities below which a portfolio manager can’t accept from the client while opening the account?",
    a: (
      <p>
        As per SEBI guidelines, the portfolio manager is required to accept minimum Rs. 50 lakhs for rendering
        portfolio management service to the client. The minimum investment requirement for our portfolios is
        Rs. 50 lakhs/each.
      </p>
    ),
  },

  {
    q: "How is PMS different from Mutual fund?",
    a: (
      <div className="overflow-x-auto mt-4">
        <table className="w-full border text-sm rounded-xl overflow-hidden">
          <thead className="text-red-600 bg-gray-50">
            <tr>
              <th className="border p-3 text-left">Features</th>
              <th className="border p-3 text-left">PMS</th>
              <th className="border p-3 text-left">Mutual Fund</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">Management</td>
              <td className="border p-3">Provide ongoing, personalized access to professional money management services</td>
              <td className="border p-3">Provide access to professional money management services</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border p-3">Customization</td>
              <td className="border p-3">Portfolio can be tailored to address each investor’s specific needs</td>
              <td className="border p-3">Portfolio structured to meet the fund’s stated investment objectives</td>
            </tr>

            <tr>
              <td className="border p-3">Ownership</td>
              <td className="border p-3">Investors directly own the individual securities in their portfolio</td>
              <td className="border p-3">Trustee owns shares of the fund and cannot influence decisions</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border p-3">Minimums</td>
              <td className="border p-3">Minimum investment – Rs. 50L</td>
              <td className="border p-3">Minimum Investment – Rs. 5,000</td>
            </tr>

            <tr>
              <td className="border p-3">Flexibility</td>
              <td className="border p-3">PMS products can be customized</td>
              <td className="border p-3">No customization possible</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    q: "Who can sign up for PMS?",
    a: (
      <div className="space-y-3">
        <p>The following investors are eligible to invest through PMS:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hindu Undivided Families (HUF)</li>
          <li>Body corporate (Private/Public)</li>
          <li>Trust</li>
          <li>Non Resident Indian (NRI)*</li>
          <li>Partnership Firms or any other eligible investor</li>
        </ul>
        <p className="text-xs text-gray-500">
          *Except USA and Canada residents.
        </p>
      </div>
    ),
  },

  {
    q: "What is the Tax treatment?",
    a: (
      <p>
        The tax liability of a PMS investor would remain the same as if the investor is accessing the capital
        market directly. However, the investor should consult his tax advisor for the same. The Portfolio Manager
        provides audited statements to assist.
      </p>
    ),
  },

  {
    q: "Does one necessarily invest in cash to open a PMS account?",
    a: (
      <p>
        Apart from cash, the client can also hand over an existing portfolio of stocks, bonds or mutual funds.
        The Portfolio Manager may sell/rebalance these to align with the strategy.
      </p>
    ),
  },

  {
    q: "Is premature withdrawal of Funds/securities by an investor allowed?",
    a: (
      <p>
        The funds or securities can be withdrawn or taken back before maturity. However, the terms of premature
        withdrawal depend on the agreement between the client and the portfolio manager.
      </p>
    ),
  },

  {
    q: "What is the fee structure?",
    a: (
      <div className="overflow-x-auto mt-4">
        <table className="w-full border text-sm rounded-xl overflow-hidden">
          <thead className="text-red-600 bg-gray-50">
            <tr>
              <th className="border p-3 text-left">Category</th>
              <th className="border p-3 text-left">Fixed Fees structure</th>
              <th className="border p-3 text-left">Variable Fees Structure</th>
            </tr>
          </thead>

          <tbody>
            {/* Discretionary */}
            <tr>
              <td className="border p-3 font-semibold">Discretionary</td>
              <td className="border p-3"></td>
              <td className="border p-3"></td>
            </tr>

            <tr>
              <td className="border p-3">Less than 5 Crores Investment</td>
              <td className="border p-3">2.5%</td>
              <td className="border p-3">1.5% + 20% Incentive fees over fixed hurdle</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border p-3">Rs 5 Cr – less than 10 Cr</td>
              <td className="border p-3">2%</td>
              <td className="border p-3">1.25% + 20% Incentive fees</td>
            </tr>

            <tr>
              <td className="border p-3">Rs 10 Cr – less than 25 Cr</td>
              <td className="border p-3">1.5%</td>
              <td className="border p-3">1% + 20% Incentive fees</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border p-3">Rs 25 Cr or more</td>
              <td className="border p-3">1.25%</td>
              <td className="border p-3">0.75% + 20% Incentive fees</td>
            </tr>

            {/* Advisory */}
            <tr>
              <td className="border p-3 font-semibold">Advisory/Direct</td>
              <td className="border p-3"></td>
              <td className="border p-3"></td>
            </tr>

            <tr>
              <td className="border p-3">Less than 5 Crores Investment</td>
              <td className="border p-3">2.0%</td>
              <td className="border p-3">1.0% + 20% Incentive fees</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border p-3">Rs 5 Cr – less than 10 Cr</td>
              <td className="border p-3">1.5%</td>
              <td className="border p-3">0.75% + 20% Incentive fees</td>
            </tr>

            <tr>
              <td className="border p-3">Rs 10 Cr – less than 25 Cr</td>
              <td className="border p-3">1.0%</td>
              <td className="border p-3">0.5% + 20% Incentive fees</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border p-3">Rs 25 Cr or more</td>
              <td className="border p-3">0.75%</td>
              <td className="border p-3">0.25% + 20% Incentive fees</td>
            </tr>

          </tbody>
        </table>
      </div>
    ),
  },
];