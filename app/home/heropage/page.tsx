"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const exams = [
  "UPSC", "SSC", "RAILWAY", "CAT",
  "CA", "CFA", "UGC", "RBI",
  "JUDICIARY", "NEET", "DEFENSE",
  "NURSING"
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-white min-h-[80vh] flex flex-col items-center justify-start overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full max-w-7xl px-8 pt-24 pb-12">
        {/* Left Side: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-left text-black">
            Crack Aptitude with <br className="hidden md:block" /> Confidence.
          </h1>
          <p className="text-2xl mb-8 text-left text-black">Test yourself now for free.</p>
          <button
            className="bg-black text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition hover:bg-gray-900 cursor-pointer"
          >
            Take a <span className="text-green-500">Free</span> Test
          </button>
        </div>
        {/* Right Side: Exam Grid */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full">
              {exams.map((exam) => (
                <button
                  key={exam}
                  className="w-full py-3 bg-white rounded-full border font-bold text-lg cursor-pointer shadow-sm transition hover:bg-gray-100 active:scale-95"
                  onClick={() => router.push("/clicked")}
                >
                  {exam}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Stats Bar */}
      <div className="relative z-20 w-full flex justify-center rounded-4xl">
        <div className="bg-white rounded-2xl shadow-xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl mx-auto -mb-16 md:-mb-20">
          {/* Stat 1 */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl md:text-4xl font-bold text-black">25+</span>
            <span className="text-lg text-gray-500 mt-1">Topics Covered</span>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-gray-200"></div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl md:text-4xl font-bold text-black">50+</span>
            <span className="text-lg text-gray-500 mt-1">Exams Covered</span>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-gray-200"></div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl md:text-4xl font-bold text-black">500+</span>
            <span className="text-lg text-gray-500 mt-1">Students Aiming Various Exams</span>
          </div>
        </div>
      </div>
    </div>
  );
}
