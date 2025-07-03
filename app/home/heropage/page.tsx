"use client";
import { useRouter } from "next/navigation";
const exams = [
  "UPSC", "SSC", "RAILWAY", "CAT",
  "CA", "CFA", "UGC", "RBI",
  "JUDICIARY",  "NEET", "DEFENSE",
  "NURSING"
];

export default function HeroSection() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] px-8 py-12 bg-white">
      {/* Left Side: Text and Button */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-left">
          Crack Aptitude with Confidence.
        </h1>
        <p className="text-2xl mb-6 text-left">Test yourself now for free.</p>
        <button
          className="bg-black text-white font-bold py-3 px-8 rounded-full text-lg transition hover:bg-gray-900 shadow-lg cursor-pointer"
        >
          Take a <span className="ext-green"> Free</span> Test
        </button>
      </div>
      {/* Right Side: Exam Grid */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
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
  );
}
