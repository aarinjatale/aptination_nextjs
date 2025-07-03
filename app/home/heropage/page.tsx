"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const exams = [
  "UPSC", "SSC", "RAILWAY", "CAT",
  "CA", "CFA", "UGC", "RBI",
  "JUDICIARY", "NEET", "DEFENSE",
  "NURSING"];

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-[60vh] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial Faded Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full px-8 py-12">
        {/* Left Side: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-left">
            Crack Aptitude with Confidence.
          </h1>
          <p className="text-2xl mb-6 text-left">Test yourself now for free.</p>
          <button
            className="bg-black text-white font-bold py-3 px-8 rounded-full text-lg transition hover:bg-gray-900 shadow-lg cursor-pointer"
          >
            Take a <span className="text-green-400">Free</span> Test
          </button>
        </div>
        {/* Right Side: Exam Grid */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <div className="bg-white/80 rounded-3xl shadow-lg p-8 w-full max-w-md">
            <div className="grid grid-cols-3 gap-4">
              {exams.map((exam) => (
                <button
                  key={exam}
                  className="w-full py-4 bg-white rounded-full shadow font-bold text-lg transition hover:bg-gray-100 active:scale-95"
                  onClick={() => router.push("/clicked")} // Replace with actual navigation or logic
                >
                  {exam}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
