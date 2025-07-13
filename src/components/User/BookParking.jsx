import React from 'react';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const cols = Array.from({ length: 19 }, (_, i) => i + 1);

export default function BookParking() {
  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center mb-6">🚗 Parking Slot Booking</h1>
      <div className="overflow-x-auto">
        <table className="border-collapse mx-auto">
          <thead>
            <tr>
              <th></th>
              {cols.map((col) => (
                <th key={col} className="text-xs px-2 py-1 sm:px-4 sm:py-2 border border-gray-300">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row}>
                <td className="font-bold text-sm sm:text-base px-2 sm:px-4 py-2">{row}</td>
                {cols.map((col) => (
                  <td key={`${row}-${col}`} className="border border-gray-300 p-1 sm:p-2 text-center">
                    <button
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-green-500 text-green-500 rounded hover:bg-green-100 transition"
                      onClick={() => alert(`Slot ${row}${col} clicked!`)}
                    >
                      {col}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
