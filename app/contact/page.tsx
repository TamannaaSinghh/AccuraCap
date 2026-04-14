import { client } from "@/sanity/lib/client";
import { REGISTERED_OFFICE_QUERY } from "@/sanity/lib/queries";
import ContactForm from "./ContactForm";

type RegisteredOffice = {
  _id: string;
  heading: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
};

export default async function ContactPage() {
  const registeredOffice = await client.fetch<RegisteredOffice | null>(
    REGISTERED_OFFICE_QUERY
  );

  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
          Contact Us
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        <p className="mt-6 text-sm md:text-base text-black/80">
          For direct onboarding or any query, please contact us at{" "}
          <span className="text-black font-medium">info@accuracap.com</span> or{" "}
          <span className="text-black font-medium">+91 98216 53556</span>
        </p>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-16">

          {/* Form */}
          <ContactForm />

          {/* Right side */}
          <div className="space-y-10">

            <div>
              <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Corporate Office</p>
              <p className="text-black/80 text-sm md:text-base leading-relaxed">
                Office Number 919, 9th Floor,
                <br />
                Wave Silver Tower, Sector 18,
                <br />
                Noida, Uttar Pradesh 201301
                <br />
                Contact No: +91 98216 53556
              </p>
            </div>

            {registeredOffice && (
              <div>
                <p className="text-black/50 text-xs uppercase tracking-wider mb-2">
                  {registeredOffice.heading}
                </p>
                <p className="text-black/80 text-sm md:text-base leading-relaxed">
                  {registeredOffice.addressLine1}
                  {registeredOffice.addressLine2 && (
                    <>
                      <br />
                      {registeredOffice.addressLine2}
                    </>
                  )}
                  {registeredOffice.addressLine3 && (
                    <>
                      <br />
                      {registeredOffice.addressLine3}
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 border border-border overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Wave%20Silver%20Tower%20Noida&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </main>
  );
}
