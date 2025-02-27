/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export function Button({ children, onClick, variant = "default" }) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold shadow-md transition focus:outline-none";
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
