"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question4() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleContinue = () => {
    if (selectedOption) {
      router.push("/quote/5");
    }
  };

  const options = ["Commute", "Pleasure", "Business"];

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 relative overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{
            backgroundImage: "url('/questions.png')",
            backgroundSize: "100%",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-20 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Primary Use of Your Vehicle
            </h2>

            {/* 3 Option Layout */}
            <div className="w-full max-w-2xl space-y-6">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full py-6 rounded-xl border transition shadow-sm text-lg text-black font-semibold
                    ${
                      selectedOption === option
                        ? "bg-orange-100 border-orange-400"
                        : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!selectedOption}
              className="mt-6 bg-[#F97316] hover:bg-orange-600 disabled:opacity-40 transition text-white px-10 py-3 rounded-lg font-semibold shadow-md cursor-pointer"
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
