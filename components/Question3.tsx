"use client";

import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";

export default function Question3() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const currentVehicle =
    formData.vehicles?.[formData.currentVehicleIndex ?? 0];

  const handleContinue = () => {
    if (!currentVehicle?.vehicleModel) return;
    router.push("/quote/4");
  };

  const setVehicleModel = (model: string) => {
    updateForm((prev) => {
      const updatedVehicles = [...prev.vehicles];

      updatedVehicles[prev.currentVehicleIndex] = {
        ...updatedVehicles[prev.currentVehicleIndex],
        vehicleModel: model,
      };

      return { ...prev, vehicles: updatedVehicles };
    });
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

      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{
            backgroundImage: "url('/questions.png')",
            backgroundSize: "100%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-20 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Vehicle Model
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {carModels.map((model) => (
                <button
                  key={model}
                  onClick={() => setVehicleModel(model)}
                  className={`flex items-center justify-center 
                    rounded-xl p-6 border transition shadow-sm
                    ${
                      currentVehicle?.vehicleModel === model
                        ? "bg-violet-100 border-violet-400"
                        : "bg-white border-gray-200 hover:border-violet-400 hover:bg-violet-50"
                    }`}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {model}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={handleContinue}
              disabled={!currentVehicle?.vehicleModel}
              className={`mt-6 px-10 py-3 rounded-lg font-semibold shadow-md transition
                ${
                  currentVehicle?.vehicleModel
                    ? "bg-[#7C3AED] hover:bg-violet-600 text-white"
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
