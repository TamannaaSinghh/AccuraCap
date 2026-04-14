"use client";

const fields = [
  { label: "Name", type: "text", placeholder: "Name" },
  { label: "Email", type: "email", placeholder: "Email" },
  { label: "Phone", type: "text", placeholder: "Enter your contact details" },
  { label: "Subject", type: "text", placeholder: "Subject" },
];

export default function ContactForm() {
  return (
    <form className="space-y-5">
      {fields.map((field) => (
        <div key={field.label}>
          <label className="text-black text-sm font-medium">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full mt-1.5 px-4 py-3 bg-surface border border-black/10 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors"
          />
        </div>
      ))}

      <div>
        <label className="text-black text-sm font-medium">Message</label>
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full mt-1.5 px-4 py-3 bg-surface border border-black/10 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3.5 text-sm tracking-[0.1em] uppercase font-medium hover:bg-black/85 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
