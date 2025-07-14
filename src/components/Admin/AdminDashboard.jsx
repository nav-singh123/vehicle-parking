import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AdminDashboard() {
  const role = localStorage.getItem("role");

  // ✅ Safely redirect if not admin
  if (role !== "admin") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🚗 Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Manage Users */}
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">👥 Manage Users</h2>
          <p className="text-gray-600">View, edit, or remove registered users.</p>
        </div>

        {/* Manage Parking Slots */}
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🅿️ Manage Parking Slots</h2>
          <p className="text-gray-600">Add, edit, or delete available parking slots.</p>
        </div>

        {/* Booking Reports */}
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📊 Booking Reports</h2>
          <p className="text-gray-600">View all parking booking records.</p>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">⚙️ System Settings</h2>
          <p className="text-gray-600">Change time slots, pricing, and policies.</p>
        </div>
      </div>
    </div>
  );
}
