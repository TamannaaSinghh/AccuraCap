"use client";

import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Get In Touch
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          Contact Us
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        <p className="mt-6 text-muted">
          For direct onboarding or any query, please contact us at{" "}
          <span className="text-accent font-medium">info@accuracap.com</span> or{" "}
          <span className="text-accent font-medium">+91 77389 76675</span>
        </p>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-16">

          {/* Form */}
          <form className="space-y-5">
            {[
              { label: "Name", type: "text", placeholder: "Name" },
              { label: "Email", type: "email", placeholder: "Email" },
              { label: "Phone", type: "text", placeholder: "Enter your contact details" },
              { label: "Subject", type: "text", placeholder: "Subject" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-black text-sm font-medium">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full mt-1.5 px-4 py-3 bg-surface border border-gray text-sm text-black placeholder:text-muted/50 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="text-black text-sm font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full mt-1.5 px-4 py-3 bg-surface border border-gray text-sm text-black placeholder:text-muted/50 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-3.5 text-sm tracking-[0.1em] uppercase font-medium hover:bg-accent-dark transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Right side */}
          <div className="space-y-10">

            <div>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-2">Corporate Office</p>
              <p className="text-muted text-sm leading-relaxed">
                Accuracap Consultancy Services Pvt. Ltd.
                <br />
                61, 2nd Floor, Panchkuian Road,
                <br />
                New Delhi, India - 110001
                <br />
                Contact No: +91 77389 76675
              </p>
            </div>

            <div>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-2">Registered Office</p>
              <p className="text-muted text-sm leading-relaxed">
                Accuracap Consultancy Services Pvt. Ltd.
                <br />
                61, 2nd Floor, Panchkuian Road,
                <br />
                New Delhi, India - 110001
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-lg text-black">
              <FaFacebookF className="cursor-pointer hover:text-accent transition-colors" />
              <FaTwitter className="cursor-pointer hover:text-accent transition-colors" />
              <FaYoutube className="cursor-pointer hover:text-accent transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-accent transition-colors" />
            </div>
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
