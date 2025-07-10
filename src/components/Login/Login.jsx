import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* ⬇ Larger container: wider and more padded */}
      <div className="w-full max-w-xl p-12 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">Log In</h2>
        
        <form className="space-y-6">
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
          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-3 text-lg rounded hover:bg-orange-800 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-base">
          Don’t have an account?{' '}
          <a href="/signup" className="text-orange-700 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
