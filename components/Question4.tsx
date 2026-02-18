"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "@/context/FormContext";
// const { formData, updateForm } = useForm();
// () => updateForm({ vehicleModel: model })

export default function Question4() {
  const router = useRouter();
  // const [formData.primaryUse, setformData.primaryUse] = useState("");
  const { formData, updateForm } = useForm();

  const handleContinue = () => {
  const currentVehicle = formData.vehicles[formData.currentVehicleIndex];
  if (currentVehicle?.primaryUse) {
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
                  onClick={() =>
  updateForm(prev => {
    const updatedVehicles = [...prev.vehicles];
    updatedVehicles[prev.currentVehicleIndex] = {
      ...updatedVehicles[prev.currentVehicleIndex],
      primaryUse: option,
    };

    return {
      ...prev,
      vehicles: updatedVehicles,
    };
  })
}

                  className={`w-full py-6 rounded-xl border transition shadow-sm text-lg text-black font-semibold
                    ${
                      formData.vehicles[formData.currentVehicleIndex]?.primaryUse === option
                        ? "bg-violet-100 border-violet-400"
                        : "bg-white border-gray-200 hover:border-violet-400 hover:bg-violet-50"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={
  !formData.vehicles[formData.currentVehicleIndex]?.primaryUse
}
              className="mt-6 bg-[#7C3AED] hover:bg-violet-600 disabled:opacity-40 transition text-white px-10 py-3 rounded-lg font-semibold shadow-md cursor-pointer"
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
