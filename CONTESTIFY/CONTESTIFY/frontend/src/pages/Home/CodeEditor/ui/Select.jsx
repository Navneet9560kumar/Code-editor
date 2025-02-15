/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export function Select({ value, onChange, options }) {
  return (
    <select
      className="border border-gray-300 rounded-lg px-3 py-2 bg-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
