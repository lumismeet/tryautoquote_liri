"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question14() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleContinue = () => {
    if (firstName && lastName) {
      router.push("/quote/15");
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
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What is your name?
            </h2>

            {/* First Name */}
            <div className="w-full max-w-2xl text-left space-y-4">
              <label className="block text-lg font-semibold text-black">
                First Name
              </label>

              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-4 py-4 text-lg text-gray-700
                           focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Last Name */}
            <div className="w-full max-w-2xl text-left space-y-4">
              <label className="block text-lg font-semibold text-black">
                Last Name
              </label>

              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-4 py-4 text-lg text-gray-700
                           focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!firstName || !lastName}
              className="mt-6 bg-[#F97316] hover:bg-orange-600 
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-14 py-4 rounded-lg 
                         text-lg font-semibold shadow-md"
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
