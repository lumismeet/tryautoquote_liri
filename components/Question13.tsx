"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question13() {
  const router = useRouter();
  const [dob, setDob] = useState("");

  const handleNext = () => {
    if (dob) {
      router.push("/quote/14");
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
          <div className="flex flex-col items-center text-center space-y-16">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What's your date of birth?
            </h2>

            {/* Date Input */}
            <div className="w-full max-w-2xl">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-6 py-5 text-lg text-gray-700
                           focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!dob}
              className="mt-4 bg-[#F97316] hover:bg-orange-600 
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-14 py-4 rounded-lg 
                         text-lg font-semibold shadow-md"
            >
              Next →
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
