"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question11() {
  const router = useRouter();

  const [homeowner, setHomeowner] = useState("");
  const [married, setMarried] = useState("");
  const [gender, setGender] = useState("");
  const [military, setMilitary] = useState("");

  const yesNoOptions = ["Yes", "No"];
  const genderOptions = ["Male", "Female"];

  const handleContinue = () => {
    if (homeowner && married && gender && military) {
      router.push("/quote/12");
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
              Tell us about the driver
            </h2>

            {/* Homeowner */}
            <QuestionBlock
              title="Homeowner"
              options={yesNoOptions}
              value={homeowner}
              setValue={setHomeowner}
            />

            {/* Married */}
            <QuestionBlock
              title="Married"
              options={yesNoOptions}
              value={married}
              setValue={setMarried}
            />

            {/* Gender */}
            <QuestionBlock
              title="Gender"
              options={genderOptions}
              value={gender}
              setValue={setGender}
            />

            {/* Military */}
            <QuestionBlock
              title="Military Affiliation"
              options={yesNoOptions}
              value={military}
              setValue={setMilitary}
            />

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!homeowner || !married || !gender || !military}
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

/* Reusable Question Block */
function QuestionBlock({
  title,
  options,
  value,
  setValue,
}: {
  title: string;
  options: string[];
  value: string;
  setValue: (val: string) => void;
}) {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <h3 className="text-xl font-semibold text-gray-500">{title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setValue(option)}
            className={`w-full py-6 rounded-xl border transition shadow-sm text-lg font-semibold
              ${
                value === option
                  ? "bg-orange-100 border-orange-400 text-black"
                  : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-black"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
