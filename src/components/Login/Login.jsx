import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin check
    if (email.trim() === 'admin@example.com' && password.trim() === 'admin123')
 {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('email', email);
      navigate('/admin/dashboard');
    } else {
      // Default to user
      localStorage.setItem('role', 'user');
      localStorage.setItem('email', email);
      navigate('/user/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">Log In</h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <Link to="/signup" className="text-orange-700 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
