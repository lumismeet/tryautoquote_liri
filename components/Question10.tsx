"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question10() {
  const router = useRouter();

  const [activeLicense, setActiveLicense] = useState("");
  const [tickets, setTickets] = useState("");
  const [sr22, setSr22] = useState("");

  const options = ["Yes", "No"];

  const handleContinue = () => {
    if (activeLicense && tickets && sr22) {
      router.push("/quote/11");
    }
  };

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
          <div className="flex flex-col items-center text-center space-y-12">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Driving History
            </h2>

            {/* QUESTION 1 */}
            <div className="w-full max-w-2xl space-y-6">
              <h3 className="text-xl font-semibold text-gray-500">
                Active License?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveLicense(option)}
                    className={`w-full py-6 rounded-xl border transition shadow-sm text-lg font-semibold
                      ${
                        activeLicense === option
                          ? "bg-orange-100 border-orange-400 text-black"
                          : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-black"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* QUESTION 2 */}
            <div className="w-full max-w-2xl space-y-6">
              <h3 className="text-xl font-semibold text-gray-500">
                Tickets or Claims in the Last 3 Years?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setTickets(option)}
                    className={`w-full py-6 rounded-xl border transition shadow-sm text-lg font-semibold
                      ${
                        tickets === option
                          ? "bg-orange-100 border-orange-400 text-black"
                          : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-black"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* QUESTION 3 */}
            <div className="w-full max-w-2xl space-y-6">
              <h3 className="text-xl font-semibold text-gray-500">
                Filed SR-22?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSr22(option)}
                    className={`w-full py-6 rounded-xl border transition shadow-sm text-lg font-semibold
                      ${
                        sr22 === option
                          ? "bg-orange-100 border-orange-400 text-black"
                          : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-black"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!activeLicense || !tickets || !sr22}
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
