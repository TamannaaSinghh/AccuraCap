"use client";

import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="w-full px-6 py-20 bg-white">

      <div className="max-w-[1200px] mx-auto pt-20">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-red-600">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-700">
            For direct onboarding or any query, please contact us on{" "}
            <span className="text-red-600">info@accuracap.com</span> or{" "}
            <span className="text-red-600">+91 77389 76675</span>
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* ================= FORM ================= */}
          <form className="space-y-5">

            <div>
              <label className="text-red-600 text-sm">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-red-600 text-sm">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-red-600 text-sm">Phone</label>
              <input
                type="text"
                placeholder="Enter your contact details"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-red-600 text-sm">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-red-600 text-sm">Message</label>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition"
            >
              Send
            </button>
          </form>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-8">

            {/* Corporate Office */}
            <div>
              <h3 className="text-red-600 font-semibold text-lg">
                Corporate Office
              </h3>
              <p className="mt-2 text-gray-700">
                Accuracap Consultancy Services Pvt. Ltd. 61, 2nd Floor,
                Panchkuian Road, New Delhi, India -110001 <br />
                Contact No: +91 77389 76675
              </p>
            </div>

            {/* Registered Office */}
            <div>
              <h3 className="text-red-600 font-semibold text-lg">
                Registered Office
              </h3>
              <p className="mt-2 text-gray-700">
                Accuracap Consultancy Services Pvt. Ltd. 61, 2nd Floor,
                Panchkuian Road, New Delhi, India -110001
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-xl text-black mt-6">
              <FaFacebookF className="cursor-pointer hover:text-red-600" />
              <FaTwitter className="cursor-pointer hover:text-red-600" />
              <FaYoutube className="cursor-pointer hover:text-red-600" />
              <FaLinkedinIn className="cursor-pointer hover:text-red-600" />
            </div>
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps?q=Wave%20Silver%20Tower%20Noida&output=embed"
            className="w-full h-[400px] rounded-lg border"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </main>
  );
}