"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";


export default function Question1() {
  const router = useRouter();

  const [selectedBrand, setSelectedBrand] = useState("");
  const handleContinue = () => {
    router.push("/quote/2");
  };

  // const carMakes = [
  //   "Buick",
  //   "Cadillac",
  //   "Chevrolet",
  //   "Chrysler",
  //   "Dodge",
  //   "Ford",
  //   "GMC",
  //   "Honda",
  //   "Hyundai",
  //   "Jeep",
  //   "Kia",
  //   "Mazda",
  //   "Nissan",
  //   "Pontiac",
  //   "Toyota",
  //   "Volkswagen",
  // ];
  const carMakes = [
  { name: "Buick", logo: "/car-logos/buick@2x.png" },
  { name: "Cadillac", logo: "/car-logos/cadillac@2x.png" },
  { name: "Chevrolet", logo: "/car-logos/chevrolet@2x.png" },
  { name: "Chrysler", logo: "/car-logos/chrysler@2x.png" },
  { name: "Dodge", logo: "/car-logos/dodge@2x.png" },
  { name: "Ford", logo: "/car-logos/ford@2x.png" },
  { name: "GMC", logo: "/car-logos/gmc@2x.png" },
  { name: "Honda", logo: "/car-logos/honda@2x.png" },
  { name: "Hyundai", logo: "/car-logos/hyundai@2x.png" },
  { name: "Jeep", logo: "/car-logos/jeep@2x.png" },
  { name: "Kia", logo: "/car-logos/kia@2x.png" },
  { name: "Mazda", logo: "/car-logos/mazda@2x.png" },
  { name: "Nissan", logo: "/car-logos/nissan@2x.png" },
  { name: "Pontiac", logo: "/car-logos/pontiac@2x.png" },
  { name: "Toyota", logo: "/car-logos/toyota@2x.png" },
  { name: "Volkswagen", logo: "/car-logos/volkswagen@2x.png" },
];


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

        <div className="relative z-10 max-w-7xl mx-auto px-20 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Vehicle Make
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {carMakes.map((make) => (
                <button
                  key={make.name}
                  className="flex flex-col items-center justify-center 
                             bg-white border border-gray-200 
                             rounded-xl p-6 
                             hover:border-orange-500 hover:bg-orange-50 
                             transition shadow-sm"
                >
                  {/* Logo Placeholder */}
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src={make.logo}
                      alt={make.name}
                      fill
                      className="object-contain"
                    />
                  </div>


                  <span className="font-semibold text-gray-800">
                    {make.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Dropdown */}
        <div className="w-full max-w-md">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 
               text-gray-700 focus:outline-none  focus:border-orange-400"
          >
            <option value="">Select a brand</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Subaru">Subaru</option>
            <option value="Tesla">Tesla</option>
            <option value="Volvo">Volvo</option>
            <option value="Acura">Acura</option>
            <option value="Lexus">Lexus</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Infiniti">Infiniti</option>
          </select>
        </div>

            <button
              onClick={handleContinue}
              // disabled={!selectedBrand}
              className="mt-6 bg-[#F97316] hover:bg-orange-600 transition text-white px-10 py-3 rounded-lg font-semibold shadow-md cursor-pointer"
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