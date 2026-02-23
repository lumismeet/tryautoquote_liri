"use client";

import Image from "next/image"
import Link from "next/link"
import { ClipboardList, Car, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import { Star } from "lucide-react"
import FAQ from "@/components/FAQ"
import Footer from "@/components/footer"
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import LOGO from "../public/LOGO3.png"

const testimonials = [
  {
    text: "This platform helped me compare policies in minutes. I saved over $600 a year without any hassle.",
    name: "Reginald Miles",
  },
  {
    text: "Super easy process. I entered my details and instantly got matched with affordable insurance providers.",
    name: "Sarah Johnson",
  },
  {
    text: "Best experience I've had comparing insurance. Everything was transparent and simple.",
    name: "Michael Brown",
  },
]


type NavbarProps = {
  onQuoteClick: () => void;
};

type HeroSectionProps = {
  zipRef: React.RefObject<HTMLInputElement | null>;
};

export default function Home() {
  const zipRef = useRef<HTMLInputElement>(null);

  const focusZip = () => {
    zipRef.current?.focus();
  };

  return (
    <div className="relative h-[100vh] w-full text-black bg-[#F3E8FF]">
      <div className="relative z-10">
        <Navbar onQuoteClick={focusZip} />
        <HeroSection zipRef={zipRef} />
        <HowItWorks />
        <Partners />
        <Testimonials />
        <ParaWorks />
        <CtaSection />
        <FAQ />
        <CtaSection2 />
        <Footer />
      </div>
    </div>
  );
}

function Navbar({ onQuoteClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          {/* Mobile logo */}
          <div className="block md:hidden">
            <Image
              src={LOGO}
              alt="findautoquote Logo Mobile"
              width={100}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop logo */}
          <div className="hidden md:block">
            <Image
              src="/logo-test1.png"
              alt="findautoquote Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
        </div>

        {/* Links (desktop only) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-black">
          <Link href="#" className="hover:text-violet-700 transition">
            Home
          </Link>
          <Link href="#" className="hover:text-violet-700 transition">
            Product
          </Link>
          <Link href="#" className="hover:text-violet-700 transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-violet-700 transition">
            Contact
          </Link>
        </div>

        {/* Quote Button */}
        <button
          onClick={onQuoteClick}
          className="bg-[#7C3AED] text-white hover:bg-violet-700 transition px-6 py-3 rounded-lg text-sm font-semibold shadow-lg"
        >
          Get a Quote →
        </button>
      </div>
    </nav>
  );
}

function HeroSection({ zipRef }: HeroSectionProps) {
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");
  const { updateForm } = useForm();
  const router = useRouter();

  const handleSubmit = () => {
    setError("");
    const trimmedZip = zipcode.trim();

    if (!trimmedZip) {
      setError("No zipcode found");
      return;
    }
    const regex = /^[0-9]{5}$/;
    if (!regex.test(trimmedZip)) {
      setError("Invalid zip");
      return;
    }

    updateForm({
      zipcode: zipcode,
    });
    router.push("/quote/1");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto md:mx-0">
            Your one-stop shop for auto-insurance
          </h1>

          {/* Input + Button */}
          <div className="mt-8 flex flex-col sm:flex-row w-full max-w-xl mx-auto md:mx-0">
            <input
              type="text"
              value={zipcode}
              ref={zipRef}
              onChange={(e) => setZipcode(e.target.value)}
              placeholder="Enter zipcode"
              className="flex-1 px-6 py-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-black bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-3 sm:mt-0 sm:ml-0 bg-[#7C3AED] text-white hover:bg-violet-700 transition px-8 py-4 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none font-semibold"
            >
              {loading ? "Loading..." : "Get a Quote →"}
            </button>
          </div>

          {/* Error Message */}
          <p className="text-red-700 mt-2 min-h-[24px]">{errors}</p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px]">
            <Image
              src="/ill-violet1.svg"
              alt="Illustration"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


function HowItWorks() {
  return (
    <section className="bg-white py-25">
      <div className="max-w-7xl mx-auto px-20 text-center">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <ClipboardList className="w-12 h-12 text-violet-500 mb-6" />

            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              A little Information
            </h3>

            <p className="text-gray-600 max-w-xs">
              Provide some basic information about yourself and your vehicle
              (This will allow us to generate customized personalized results).
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <Car className="w-12 h-12 text-violet-500 mb-6" />

            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              A bit of Magic
            </h3>

            <p className="text-gray-600 max-w-xs">
              Our Smart matching engine will sift through thousands of possible
              insurance policies and only present you with relevant and valid options.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <DollarSign className="w-12 h-12 text-violet-500 mb-6" />

            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              A Lot of Savings
            </h3>

            <p className="text-gray-600 max-w-xs">
              You have the freedom to choose the specific policy you feel suits
              you the most from a list of matching policies we provide.
            </p>
          </div>

        </div>
      </div>
    </section>

  )
}

function Partners(){
  return(

    < section className = "bg-white py-24" >
      <div className="max-w-7xl mx-auto px-20 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          We partner with the top providers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          {/* Logo 1 */}
          <div className="bg-gray-300 h-16 rounded-md"></div>

          {/* Logo 2 */}
          <div className="bg-gray-300 h-16 rounded-md"></div>

          {/* Logo 3 */}
          <div className="bg-gray-300 h-16 rounded-md"></div>

          {/* Logo 4 */}
          <div className="bg-gray-300 h-16 rounded-md"></div>

        </div>

      </div>
</section >
  )

}

// function Testimonials(){
//   return(
//     <section className="py-24 bg-[#F3E8FF]">
//   <div className="max-w-7xl mx-auto px-20 text-center">

//     {/* Heading */}
//     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//       What our customers say…
//     </h2>

//     <p className="text-gray-600 max-w-2xl mx-auto mb-16">
//       Thousands of drivers trust findautoquote to find them the best auto insurance rates available.
//     </p>

//     {/* Testimonials Grid */}
//     <div className="grid md:grid-cols-2 gap-10">

//       {/* Card */}
//       <div className="relative bg-violet-500 text-white rounded-2xl p-10 overflow-hidden">

//         {/* Decorative circles */}
//         <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-400 rounded-full opacity-40" />
//         <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-violet-400 rounded-full opacity-40" />

//         <div className="relative z-10">
//           <p className="text-lg leading-relaxed mb-6">
//             “This platform helped me compare policies in minutes.
//             I saved over $600 a year without any hassle.”
//           </p>

//           {/* Stars */}
//           <div className="flex gap-1 mb-6">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} size={18} fill="yellow" color="yellow" />
//             ))}
//           </div>

//           {/* Profile */}
//           <div className="flex items-center gap-4">
//             <Image
//               src="/person.png"
//               alt="Customer"
//               width={60}
//               height={60}
//               className="rounded-full border-4 border-white object-cover"
//             />
//             <div>
//               <h4 className="font-semibold">Reginald Miles</h4>
//               <p className="text-sm opacity-80">Verified Customer</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Duplicate Card */}
//       <div className="relative bg-violet-500 text-white rounded-2xl p-10 overflow-hidden">

//         <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-400 rounded-full opacity-40" />
//         <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-violet-400 rounded-full opacity-40" />

//         <div className="relative z-10">

//           <p className="text-lg leading-relaxed mb-6">
//             “Super easy process. I entered my details and instantly got matched
//             with affordable insurance providers.”
//           </p>

//           <div className="flex gap-1 mb-6">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} size={18} fill="yellow" color="yellow" />
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <Image
//               src="/person.png"
//               alt="Customer"
//               width={60}
//               height={60}
//               className="rounded-full border-4 border-white object-cover"
//             />
//             <div>
//               <h4 className="font-semibold">Sarah Johnson</h4>
//               <p className="text-sm opacity-80">Verified Customer</p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   </div>
// </section>
    
//   )

// }


 function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="py-24 bg-[#F3E8FF]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What our customers say…
        </h2>

        <p className="text-gray-600 mb-16">
          Thousands of drivers trust findautoquote to find them the best auto insurance rates available.
        </p>

        {/* Wrapper for Arrows + Card */}
        <div className="relative flex items-center justify-center mx-8">

          {/* LEFT ARROW */}
          <button
  onClick={prevSlide}
  className="
    absolute 
    -left-6 md:-left-16 lg:-left-20
    bg-white text-violet-600
    p-2 md:p-4
    rounded-full shadow-lg
    hover:text-white hover:bg-violet-700
    transition
    cursor-pointer
    z-100
  "
>
  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
</button>

          {/* CARD */}
          <div className="relative bg-violet-500 text-white rounded-2xl p-12 max-w-3xl w-full overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-400 rounded-full opacity-40" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-violet-400 rounded-full opacity-40" />

            <div className="relative z-10 transition-all duration-500 ease-in-out">

              <p className="text-lg leading-relaxed mb-6">
                “{testimonials[current].text}”
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="yellow" color="yellow" />
                ))}
              </div>

              {/* Profile */}
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/person.png"
                  alt="Customer"
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-white object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm opacity-80">
                    Verified Customer
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
  onClick={nextSlide}
  className="
    absolute 
    -right-6 md:-right-16 lg:-right-20
    bg-white text-violet-600
    p-2 md:p-4
    rounded-full shadow-lg
    hover:text-white hover:bg-violet-700
    transition
    cursor-pointer
  "
>
  <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
</button>

        </div>
      </div>
    </section>
  )
}



// function ParaWorks() {
//   return (
//     <section className="bg-[#4C1D95] py-24 text-white">
//       <div className="max-w-7xl mx-auto px-20 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div>

//           <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
//             <span className="border-b-4 border-violet-400 pb-1">
//               How does
//             </span>
//             <br />
//             <span className="border-b-4 border-violet-400 pb-1">
//               Luminauto work?
//             </span>
//           </h2>

//           <div className="space-y-6 text-200 leading-relaxed text-violet-100">

//             <p>
//               We take all the information you provide regarding yourself and your
//               vehicle and compare it in real time to our live database connected
//               to dozens of top insurance carriers. This results in a list of
//               policies that are specific to your personal circumstances and are
//               from carriers that are willing to insure you.
//             </p>

//             <p>
//               Why is it so important to have personalized results? Because many
//               of us spend countless hours filling endless documentation just to
//               find out there is no relevant policy or getting declined for
//               insurance. Our platform makes sure you are presented with the top
//               options in one place.
//             </p>

//             <p className="font-semibold text-white">
//               The service is free and you are never obligated to buy
//               the presented policy.
//             </p>

//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex justify-end">

//           {/* Placeholder Image */}
//           <div className="relative w-[300px] h-[300px]">
//             <Image
//               src="/LOGO1.svg" // <-- your file name
//               alt="Illustration"
//               fill
//               className="object-contain rounded-2xl"
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

function ParaWorks() {
  return (
    <section className="bg-[#4C1D95] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="border-b-4 border-violet-400 pb-1">
              How does
            </span>
            <br />
            <span className="border-b-4 border-violet-400 pb-1">
              Luminauto work?
            </span>
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-violet-100">
            <p>
              We take all the information you provide regarding yourself and your
              vehicle and compare it in real time to our live database connected
              to dozens of top insurance carriers. This results in a list of
              policies that are specific to your personal circumstances and are
              from carriers that are willing to insure you.
            </p>

            <p>
              Why is it so important to have personalized results? Because many
              of us spend countless hours filling endless documentation just to
              find out there is no relevant policy or getting declined for
              insurance. Our platform makes sure you are presented with the top
              options in one place.
            </p>

            <p className="font-semibold text-white">
              The service is free and you are never obligated to buy
              the presented policy.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px]">
            <Image
              src="/LOGO1.svg"
              alt="Illustration"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}


// function CtaSection(){
//   return(
//   <section className="bg-[#4C1D95]  text-white">
//   <div className="max-w-7xl mx-auto px-20 grid md:grid-cols-2 gap-16 items-center">

//     {/* LEFT SIDE — Illustration Placeholder */}
//     <div className="flex justify-center md:justify-start">
//       <div className="relative w-[440px] h-[440px]">
//             <Image
//               src="/webinar/pana.svg" // <-- your file name
//               alt="Illustration"
//               fill
//               className="object-contain rounded-2xl"
//             />
//           </div>
//     </div>

//     {/* RIGHT SIDE — Content */}
//     <div className="text-center md:text-left">

//       <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
//         Compare Between Top Carriers And Start Saving:
//       </h2>

//       <button className="bg-[#7C3AED] hover:bg-violet-700 transition px-20 py-4 rounded-lg font-semibold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
//         Get a Quote →
//       </button>

//     </div>

//   </div>
// </section>

//   )
// }


function CtaSection() {
  return (
    <section className="bg-[#4C1D95] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — Illustration */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[440px] md:h-[440px]">
            <Image
              src="/webinar/pana.svg"
              alt="Illustration"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE — Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
            Compare Between Top Carriers And Start Saving:
          </h2>

          <button className="bg-[#7C3AED] hover:bg-violet-700 transition px-12 sm:px-16 md:px-20 py-4 rounded-lg font-semibold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
            Get a Quote →
          </button>
        </div>

      </div>
    </section>
  );
}



function CtaSection2(){
  return(
   <section className="bg-gray-100 py-24">
  <div className="max-w-7xl mx-auto px-20 grid md:grid-cols-2 gap-16 items-center text-center">

    {/* LEFT SIDE — Buy Online */}
    <div className="flex flex-col items-center">

      {/* Illustration Placeholder */}
      <div className="relative w-[248px] h-[148px] md:w-[320px] md:h-[220px]">
            <Image
              src="/ill-violet-online.svg" // <-- your file name
              alt="Illustration"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        Buy Online
      </h3>

      <p className="text-gray-600 max-w-md mb-8">
        Our easy-to-use tools let you compare quotes from top car and home
        providers, all at once and online.
      </p>

      {/* Zip + Button */}
          <div className="flex flex-col sm:flex-row w-full max-w-full sm:max-w-md mx-auto">

            <input
              type="text"
              placeholder="Enter zipcode"
              className="flex-1 px-4 py-3 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg border border-gray-300 focus:outline-none w-full mb-2 sm:mb-0"
            />

            <button className="bg-[#7C3AED] hover:bg-violet-700 transition px-6 py-3 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg text-white font-semibold w-full sm:w-auto">
              Get a Quote →
            </button>

          </div>


    </div>

    {/* RIGHT SIDE — Call an Agent */}
    <div className="flex flex-col items-center">
      {/* Illustration Placeholder */}
      <div className="relative w-[248px] h-[148px] md:w-[320px] md:h-[220px]">
            <Image
              src="/ill-violet-call.svg" // <-- your file name
              alt="Illustration"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        Call an Agent
      </h3>

      <p className="text-gray-600 max-w-md mb-6">
        Whether you just prefer a friendly voice or need more information,
        our licensed agents are ready to help you save.
      </p>

      <p className="text-xl font-semibold text-gray-900">
        (+1) 900-489-7265
      </p>

    </div>

  </div>
</section>

  ) 
}