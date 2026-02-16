"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";

export default function Question2() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const currentVehicle =
    formData.vehicles[formData.currentVehicleIndex];

  const handleContinue = () => {
    if (!currentVehicle?.vehicleYear) return;
    router.push("/quote/3");
  };

  // Years 2025 → 2005 (Grid)
  const recentYears = Array.from({ length: 21 }, (_, i) => 2025 - i);

  // Years 2004 → 1990 (Dropdown)
  const olderYears = Array.from({ length: 15 }, (_, i) => 2004 - i);

  const setVehicleYear = (year: number | undefined) => {
    updateForm(prev => {
      const updatedVehicles = [...prev.vehicles];

      updatedVehicles[prev.currentVehicleIndex] = {
        ...updatedVehicles[prev.currentVehicleIndex],
        vehicleYear: year,
      };

      return { ...prev, vehicles: updatedVehicles };
    });
  };

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

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            <h2 className="text-3xl font-bold text-[#1E2A4A]">
              Vehicle Year
            </h2>

            {/* YEAR GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {recentYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setVehicleYear(year)}
                  className={`py-5 rounded-xl border text-xl font-semibold transition
                    ${
                      currentVehicle?.vehicleYear === year
                        ? "bg-blue-100 border-blue-400 text-[#1E2A4A]"
                        : "bg-white border-gray-200 text-[#1E2A4A] hover:border-blue-400"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Dropdown for older years */}
            <div className="w-full max-w-md">
              <select
                value={currentVehicle?.vehicleYear ?? ""}
                onChange={(e) =>
                  setVehicleYear(
                    e.target.value
                      ? Number(e.target.value)
                      : undefined
                  )
                }
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 
                text-gray-700 focus:outline-none focus:border-blue-400"
              >
                <option value="">2004 or older</option>
                {olderYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!currentVehicle?.vehicleYear}
              className={`mt-4 px-10 py-3 rounded-lg font-semibold shadow-md transition
                ${
                  currentVehicle?.vehicleYear
                    ? "bg-[#2563EB] hover:bg-blue-600 text-white"
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
