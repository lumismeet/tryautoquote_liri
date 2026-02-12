"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question9() {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState("");
  const [currentInsurance, setCurrentInsurance] = useState("");
  const [continuousCoverage, setContinuousCoverage] = useState("");

  const handleContinue = () => {
    if (selectedOption === "Yes") {
      if (currentInsurance && continuousCoverage) {
        router.push("/quote/10");
      }
    } else if (selectedOption === "No") {
      router.push("/quote/10");
    }
  };

  const options = ["Yes", "No"];

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

        <div className="relative z-10 max-w-4xl mx-auto px-20 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Insurance Details
            </h2>

            <h3 className="text-xl font-semibold text-gray-500">
              Are you currently insured?
            </h3>

            {/* Yes / No */}
            <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full py-6 rounded-xl border transition shadow-sm text-lg font-semibold
                    ${
                      selectedOption === option
                        ? "bg-orange-100 border-orange-400 text-black"
                        : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-black"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* CONDITIONAL DROPDOWNS */}
            {selectedOption === "Yes" && (
              <div className="w-full max-w-2xl space-y-6 mt-6 text-left">

                {/* Current Auto Insurance */}
                <div>
                  <label className="block text-lg font-semibold mb-2 text-black">
                    Current Auto Insurance
                  </label>
                  <select
                    value={currentInsurance}
                    onChange={(e) => setCurrentInsurance(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 
                               text-gray-700 focus:outline-none focus:border-orange-400"
                  >
                    <option value="">Select Insurance</option>
                    <option value="Geico">Geico</option>
                    <option value="Progressive">Progressive</option>
                    <option value="State Farm">State Farm</option>
                    <option value="Allstate">Allstate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Continuous Coverage */}
                <div>
                  <label className="block text-lg font-semibold mb-2 text-black">
                    Continuous Coverage
                  </label>
                  <select
                    value={continuousCoverage}
                    onChange={(e) => setContinuousCoverage(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 
                               text-gray-700 focus:outline-none focus:border-orange-400"
                  >
                    <option value="">Select Duration</option>
                    <option value="Less than 6 months">Less than 6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3+ years">3+ years</option>
                  </select>
                </div>
              </div>
            )}

            {/* Continue */}
            <button
              onClick={handleContinue}
              disabled={
                selectedOption === "Yes"
                  ? !currentInsurance || !continuousCoverage
                  : !selectedOption
              }
              className="mt-8 bg-[#F97316] hover:bg-orange-600 
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-10 py-3 rounded-lg 
                         font-semibold shadow-md"
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
