"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question2() {
  const router = useRouter();
  // const [selectedYear, setSelectedYear] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);


  const handleContinue = () => {
    router.push("/quote/3");
  };

  // Years 2025 → 2005 (Grid)
  const recentYears = Array.from({ length: 21 }, (_, i) => 2025 - i);

  // Years 2004 → 1990 (Dropdown)
  const olderYears = Array.from({ length: 15 }, (_, i) => 2004 - i);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      <div className="flex-1 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{
            backgroundImage: "url('/questions.png')",
            backgroundSize: "100%",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            <h2 className="text-3xl font-bold text-[#1E2A4A]">
              Vehicle Year
            </h2>

            {/* YEAR GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {recentYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`py-5 rounded-xl border text-xl font-semibold transition
                    ${
                      selectedYear === year
                        ? "bg-orange-100 border-orange-400 text-[#1E2A4A]"
                        : "bg-white border-gray-200 text-[#1E2A4A] hover:border-orange-400"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Dropdown for older years */}
            <div className="w-full max-w-md">
              <select
                value={selectedYear ?? ""}
                onChange={(e) =>
                  setSelectedYear(e.target.value ? Number(e.target.value) : null)
                }
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 
               text-gray-700 focus:outline-none  focus:border-orange-400"
              >
                <option value="">2004 or older</option>
                {olderYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-md">
          
        </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!selectedYear}
              className={`mt-4 px-10 py-3 rounded-lg font-semibold shadow-md transition
                ${
                  selectedYear
                    ? "bg-[#F97316] hover:bg-orange-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Continue →
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
