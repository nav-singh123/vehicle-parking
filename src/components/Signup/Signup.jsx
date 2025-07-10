import React from 'react';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* ⬇ Larger container box */}
      <div className="w-full max-w-xl p-12 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">Sign Up</h2>
        
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
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-lg text-lg"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 border border-gray-300 rounded-lg text-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-3 text-lg rounded hover:bg-orange-800 transition"
          >
            Get Started
          </button>
        </form>

        <p className="mt-6 text-center text-base">
          Already have an account?{' '}
          <a href="/login" className="text-orange-700 hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
