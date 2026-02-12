"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question15() {
  const router = useRouter();

  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (street && email && phone) {
      router.push("/quote/16");
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
              You are eligible for big savings
            </h2>

            <p className="text-lg text-gray-600">
              Finish the form to reveal your saving opportunities!
            </p>

            {/* Form */}
            <div className="w-full max-w-2xl space-y-8 text-left">

              {/* Street Address */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-black">
                  Street Address
                </label>

                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-xl 
                             px-4 py-4 text-lg text-gray-700
                             focus:outline-none focus:border-orange-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-black">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-xl 
                             px-4 py-4 text-lg text-gray-700
                             focus:outline-none focus:border-orange-400"
                />
              </div>

              {/* Phone */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-black">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(___) ___ ____"
                  className="w-full bg-white border border-gray-300 rounded-xl 
                             px-4 py-4 text-lg text-gray-700
                             focus:outline-none focus:border-orange-400"
                />
              </div>

            </div>

            {/* Consent */}
            <p className="text-sm text-gray-600 max-w-2xl text-center">
              By clicking "View Rates" you confirm the above & agree to the consents below
            </p>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={!street || !email || !phone}
              className="mt-6 bg-[#F97316] hover:bg-orange-600 
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-14 py-4 rounded-lg 
                         text-lg font-semibold shadow-md"
            >
              View Rates →
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
