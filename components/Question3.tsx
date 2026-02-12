"use client";

import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question3() {
  const router = useRouter();
  const [selectedModel, setSelectedModel] = useState("");

  const handleContinue = () => {
    if (selectedModel) {
      router.push("/quote/4");
    }
  };

  const carModels = [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "7 Series",
    "8 Series",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "Z4",
    "i3",
    "i4",
    "i7",
    "iX",
    "M2",
    "M3",
    "M4",
    "M5",
    "XM",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 relative overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{
            backgroundImage: "url('/questions.png')",
            backgroundSize: "100%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-20 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Vehicle Model
            </h2>

            {/* Model Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {carModels.map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`flex items-center justify-center 
                    rounded-xl p-6 border transition shadow-sm
                    ${
                      selectedModel === model
                        ? "bg-orange-100 border-orange-400"
                        : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                    }`}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {model}
                  </span>
                </button>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!selectedModel}
              className="mt-6 bg-[#F97316] hover:bg-orange-600 
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-10 py-3 
                         rounded-lg font-semibold shadow-md"
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
