"use client";

import { useState } from "react";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Support
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          Frequently Asked Questions
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        {/* FAQ Items */}
        <div className="mt-16 max-w-3xl border-t border-border">
          {faqData.map((item, i) => (
            <div key={i} className="border-b border-border">

              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-0 py-5 text-left text-black font-medium hover:text-accent transition-colors"
              >
                <span className="text-sm">{item.q}</span>
                <span className="text-xl shrink-0 text-muted">
                  {open === i ? "\u2212" : "+"}
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <div className="pb-6 text-muted text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

/* ═══ DATA ═══ */

const faqData = [
  {
    q: "Is direct investing (without involving distributor) option available?",
    a: (
      <p>
        Yes, the option to invest directly is available. To avail it, kindly send an email to{" "}
        <span className="text-accent">clientservicing@accuracap.com</span> or call on +91 95408 34888.
      </p>
    ),
  },
  {
    q: "Is there any specified value of funds or securities below which a portfolio manager can\u2019t accept from the client while opening the account?",
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
      <div className="overflow-x-auto mt-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 text-left text-black font-medium">Features</th>
              <th className="py-3 pr-4 text-left text-black font-medium">PMS</th>
              <th className="py-3 text-left text-black font-medium">Mutual Fund</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-black">Management</td>
              <td className="py-3 pr-4">Provide ongoing, personalized access to professional money management services</td>
              <td className="py-3">Provide access to professional money management services</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-black">Customization</td>
              <td className="py-3 pr-4">Portfolio can be tailored to address each investor&apos;s specific needs</td>
              <td className="py-3">Portfolio structured to meet the fund&apos;s stated investment objectives</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-black">Ownership</td>
              <td className="py-3 pr-4">Investors directly own the individual securities in their portfolio</td>
              <td className="py-3">Trustee owns shares of the fund and cannot influence decisions</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-black">Minimums</td>
              <td className="py-3 pr-4">Minimum investment \u2013 Rs. 50L</td>
              <td className="py-3">Minimum Investment \u2013 Rs. 5,000</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium text-black">Flexibility</td>
              <td className="py-3 pr-4">PMS products can be customized</td>
              <td className="py-3">No customization possible</td>
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
        <p className="text-xs text-muted/60">*Except USA and Canada residents.</p>
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
      <div className="overflow-x-auto mt-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 text-left text-black font-medium">Category</th>
              <th className="py-3 pr-4 text-left text-black font-medium">Fixed Fees</th>
              <th className="py-3 text-left text-black font-medium">Variable Fees</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-black" colSpan={3}>Discretionary</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Less than 5 Crores</td>
              <td className="py-3 pr-4">2.5%</td>
              <td className="py-3">1.5% + 20% Incentive fees over fixed hurdle</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Rs 5 Cr \u2013 less than 10 Cr</td>
              <td className="py-3 pr-4">2%</td>
              <td className="py-3">1.25% + 20% Incentive fees</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Rs 10 Cr \u2013 less than 25 Cr</td>
              <td className="py-3 pr-4">1.5%</td>
              <td className="py-3">1% + 20% Incentive fees</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Rs 25 Cr or more</td>
              <td className="py-3 pr-4">1.25%</td>
              <td className="py-3">0.75% + 20% Incentive fees</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-black" colSpan={3}>Advisory / Direct</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Less than 5 Crores</td>
              <td className="py-3 pr-4">2.0%</td>
              <td className="py-3">1.0% + 20% Incentive fees</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Rs 5 Cr \u2013 less than 10 Cr</td>
              <td className="py-3 pr-4">1.5%</td>
              <td className="py-3">0.75% + 20% Incentive fees</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Rs 10 Cr \u2013 less than 25 Cr</td>
              <td className="py-3 pr-4">1.0%</td>
              <td className="py-3">0.5% + 20% Incentive fees</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Rs 25 Cr or more</td>
              <td className="py-3 pr-4">0.75%</td>
              <td className="py-3">0.25% + 20% Incentive fees</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];
