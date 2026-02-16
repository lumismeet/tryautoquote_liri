"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "@/context/FormContext";

export default function Results() {
  const router = useRouter();
  const { formData } = useForm();

  useEffect(() => {
    console.log("FINAL FORM DATA:", formData);
  }, [formData]);

  const offers = [
    {
      company: "SecureAuto Insurance",
      price: "$89/month",
      savings: "Save up to $420/year",
    },
    {
      company: "DriveSafe Coverage",
      price: "$102/month",
      savings: "Save up to $350/year",
    },
    {
      company: "ShieldGuard Insurance",
      price: "$95/month",
      savings: "Save up to $390/year",
    },
  ];

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

        <div className="relative z-10 max-w-5xl mx-auto px-20 py-24 pt-32">
          <div className="flex flex-col items-center text-center space-y-12">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Thank you for submitting!
            </h2>

            <p className="text-lg text-gray-600">
              Here are the offers available for you:
            </p>

            {/* Offers List */}
            <div className="w-full max-w-3xl space-y-6">

              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-xl 
                             p-6 shadow-sm flex justify-between items-center"
                >
                  <div className="text-left space-y-2">
                    <h3 className="text-xl font-semibold text-black">
                      {offer.company}
                    </h3>
                    <p className="text-gray-700">{offer.price}</p>
                    <p className="text-green-600 font-medium">
                      {offer.savings}
                    </p>
                  </div>

                  <button
                    className="bg-[#F97316] hover:bg-orange-600
                               transition text-white px-6 py-3 
                               rounded-lg font-semibold shadow-md"
                  >
                    Select →
                  </button>
                </div>
              ))}

            </div>

            {/* Restart Button */}
            <button
              onClick={() => router.push("/")}
              className="mt-6 bg-gray-200 hover:bg-gray-300
                         transition text-black px-10 py-3 
                         rounded-lg font-semibold"
            >
              Start Over
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
