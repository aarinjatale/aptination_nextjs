// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();

  const dropdownItems = [
    ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    ["Option 6", "Option 7", "Option 8", "Option 9", "Option 10"],
    ["Option 11", "Option 12", "Option 13", "Option 14", "Option 15"],
    ["Option 16", "Option 17", "Option 18", "Option 19", "Option 20"],
    ["Option 21", "Option 22", "Option 23", "Option 24", "Option 25"],
  ];

  return (
    <div className="flex items-center gap-4 px-4 py-2 w-full justify-center to your outer" onClick={() => router.push("/")}>
      {/* Logo and Brand (outside pill) */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/icons/logo.png" alt="Logo" className="h-10 w-10" />
        <span className="text-black text-3xl font-extrabold">AptiNation</span >
        
      </Link>

      {/* Black pill navbar */}
      <div className="flex items-center bg-black rounded-full px-8 py-2 gap-6">
        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {/* Exams Dropdown */}
          <div
            className="relative cursor-pointer"
            //onMouseEnter={() => setOpenDropdown("exams")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-white font-bold text-lg px-2 py-1 cursor-pointer rounded focus:outline-none">
              Exams
            </button>
            {openDropdown === "exams" && (
              <div className="absolute left-0 mt-2 bg-white rounded shadow-lg p-4 flex gap-6 z-20">
                {dropdownItems.map((col, idx) => (
                  <ul key={idx} className="flex flex-col gap-2 min-w-[120px]">
                    {col.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-black hover:text-blue-600 font-medium"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>
          {/* Topic Dropdown */}
          <div
            className="relative cursor-pointer"
            //onMouseEnter={() => setOpenDropdown("topic")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-white font-bold text-lg px-2 py-1 rounded focus:outline-none cursor-pointer">
              Topic
            </button>
            {openDropdown === "topic" && (
              <div className="absolute left-0 mt-2 bg-white rounded shadow-lg p-4 flex gap-6 z-20">
                {dropdownItems.map((col, idx) => (
                  <ul key={idx} className="flex flex-col gap-2 min-w-[120px]">
                    {col.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-black hover:text-blue-600 font-medium"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>
          {/* Resources Link */}
          <Link href="#" className="text-white font-bold text-lg px-2 py-1 rounded">
            Resources
          </Link>
        </div>

        {/* Search Bar */}
        <form className="flex items-center bg-gray-800 rounded-full px-4 py-1 w-64">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white placeholder-gray-400 flex-1 text-lg"
          />
          <button type="submit" className="ml-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        {/* Login/SignUp Button */}
        <button
          className="text-white font-bold text-lg bg-transparent hover:bg-gray-800 px-6 py-2 rounded transition cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login/SignUp
        </button>
      </div>

      {/* Try Premium Pill */}
      <button
        className="ml-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-lg px-8 py-2 rounded-full shadow hover:from-yellow-500 hover:to-yellow-700 transition cursor-pointer"
        onClick={() => router.push("/premium")}
      >
        Try Premium
      </button>
    </div>
  );
}
