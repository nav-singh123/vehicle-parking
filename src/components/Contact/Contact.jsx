import React from 'react';

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-4xl p-10 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-lg">
            <p className="font-semibold">📍 Acme Inc, Street, State, Postal Code</p>
            <p className="font-semibold">📞 +44 1234567890</p>
            <p className="font-semibold">✉️ info@acme.org</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              required
            />
            <input
              type="tel"
              placeholder="Telephone Number"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-3 text-lg rounded hover:bg-orange-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
