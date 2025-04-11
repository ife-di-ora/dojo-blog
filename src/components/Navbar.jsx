import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-blue-900 text-white p-4 flex items-center">
      <img
        src="/src/assets/images/accn logo.png"
        alt="Nigerian Air Force Logo"
        className="h-12 mr-4"
      />
      <h2 className="text-2xl font-bold">Accommodation Management System</h2>
    </div>
  );
}
