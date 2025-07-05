"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<"exams" | "topic" | null>(null);
  const router = useRouter();

  const examsRef = useRef<HTMLDivElement>(null);
  const topicRef = useRef<HTMLDivElement>(null);

  const dropdownItems = [
    ["UPSC", "SSC", "RAILWAY"],
    ["CAT", "PLACEMENT", "CFA"],
    ["UGC", "RBI", "JUDICIARY"],
    ["NEET", "DEFENSE", "NURSING"]
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        (openDropdown === "exams" && examsRef.current && !examsRef.current.contains(target)) ||
        (openDropdown === "topic" && topicRef.current && !topicRef.current.contains(target))
      ) {
        setOpenDropdown(null);
      }
    }

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-visible">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)"
        }}
      />
      {/* Main Navbar Content */}
      <div className="flex items-center gap-4 px-4 py-2 w-full justify-center z-10">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/icons/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-black text-3xl font-extrabold">AptiNation</span>
        </Link>

        {/* Black pill navbar */}
        <div className="flex items-center bg-black rounded-full px-8 py-2 gap-6">
          <div className="flex items-center gap-8">
            {/* Exams Dropdown */}
            <div ref={examsRef} className="relative">
              <button
                className="text-white font-bold text-lg px-2 py-1 cursor-pointer hover:bg-gray-800 rounded-4xl focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === "exams" ? null : "exams")}
              >
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
            <div ref={topicRef} className="relative">
              <button
                className="text-white font-bold text-lg px-2 py-1 hover:bg-gray-800 rounded-4xl focus:outline-none cursor-pointer"
                onClick={() => setOpenDropdown(openDropdown === "topic" ? null : "topic")}
              >
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
            <Link
              href="#"
              className="text-white hover:underline font-bold text-lg px-2 py-1 rounded"
              onClick={() => router.push("/resource")}
            >
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
            <button type="submit" className="ml-2 cursor-pointer">
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
            className="text-white font-bold text-lg bg-transparent rounded-4xl hover:bg-gray-800 px-6 py-2 transition cursor-pointer"
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
    </div>
  );
}
