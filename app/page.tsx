import Image from "next/image"
import Link from "next/link"
import { ClipboardList, Car, DollarSign } from "lucide-react"
import { Star } from "lucide-react"
import FAQ from "@/components/FAQ"
import Footer from "@/components/footer"



export default function Home() {
  return (
    <div className="relative h-[90vh] w-full text-black bg-[#FFE8D6]">
      {/* Background Image */}
      {/* <Image
        src="/hero.jpg"
        alt="Car driving through mountains"
        fill
        priority
        className="object-cover"
      /> */}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HowItWorks/>
        <Partners/>
        <Testimonials />
        <ParaWorks />
        <CtaSection />
        <FAQ />
        <CtaSection2 />
        <Footer />

      </div>
    </div>
  )
}


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex items-center justify-between 
      bg-white/10 backdrop-blur-md 
      border border-white/20 
       px-6 py-4 text-white">

         <div className="flex items-center">
  <Image
    src="/LOGO.svg"
    alt="Luminarix Logo"
    width={140}
    height={40}
    className="h-10 w-auto"
    priority
  />
</div>


          <div className="hidden md:flex items-center gap-8 text-sm text-black">
            <Link href="#" className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="#" className="hover:text-orange-400 transition">
              Product
            </Link>
            <Link href="#" className="hover:text-orange-400 transition">
              Pricing
            </Link>
            <Link href="#" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </div>

          <Link
            href="/quote/1"
            className="bg-[#F97316] hover:bg-orange-600 transition px-6 py-3 rounded-lg text-sm font-semibold shadow-lg"
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </nav>

  )
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-40 pb-32">
      <div className="grid md:grid-cols-2 gap-16 items-center text-center">
        <div className="">
          <h1 className="text-xl md:text-6xl font-extrabold max-w-3xl">
            Your one-stop shop for auto-insurance
          </h1>
          {/* Zip Code Form */}
          <div className="mt-10 flex w-full max-w-xl">
            <input
              type="text"
              placeholder="Enter zipcode"
              className="flex-1 px-6 py-4 rounded-l-lg text-black focus:outline-none bg-white"
            />
            <Link href="/quote/1" className="bg-[#F97316] text-white hover:bg-orange-600 transition px-8 py-4 rounded-r-lg font-semibold cursor-pointer">
              Get a Quote →
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-center">
          <div className="relative w-[320px] h-[320px]">
  <Image
    src="/ill-home.svg" // <-- your file name
    alt="Illustration"
    fill
    className="object-contain rounded-2xl"
  />
</div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-20 text-center">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <ClipboardList className="w-12 h-12 text-orange-500 mb-6" />

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
            <Car className="w-12 h-12 text-orange-500 mb-6" />

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
            <DollarSign className="w-12 h-12 text-orange-500 mb-6" />

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

    < section className = "bg-white py-20" >
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

function Testimonials(){
  return(
    <section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-20 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      What our customers say…
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Thousands of drivers trust Luminarix to find them the best auto insurance rates available.
    </p>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Card */}
      <div className="relative bg-orange-500 text-white rounded-2xl p-10 overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400 rounded-full opacity-40" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-400 rounded-full opacity-40" />

        <div className="relative z-10">

          <p className="text-lg leading-relaxed mb-6">
            “This platform helped me compare policies in minutes.
            I saved over $600 a year without any hassle.”
          </p>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="yellow" color="yellow" />
            ))}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <Image
              src="/person.png"
              alt="Customer"
              width={60}
              height={60}
              className="rounded-full border-4 border-white object-cover"
            />
            <div>
              <h4 className="font-semibold">Reginald Miles</h4>
              <p className="text-sm opacity-80">Verified Customer</p>
            </div>
          </div>

        </div>
      </div>

      {/* Duplicate Card */}
      <div className="relative bg-orange-500 text-white rounded-2xl p-10 overflow-hidden">

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400 rounded-full opacity-40" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-400 rounded-full opacity-40" />

        <div className="relative z-10">

          <p className="text-lg leading-relaxed mb-6">
            “Super easy process. I entered my details and instantly got matched
            with affordable insurance providers.”
          </p>

          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="yellow" color="yellow" />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/person.png"
              alt="Customer"
              width={60}
              height={60}
              className="rounded-full border-4 border-white object-cover"
            />
            <div>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <p className="text-sm opacity-80">Verified Customer</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    
  )

}

function ParaWorks() {
  return (
    <section className="bg-[#A34708] py-24 text-white">
      <div className="max-w-7xl mx-auto px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="border-b-4 border-orange-400 pb-1">
              How does
            </span>
            <br />
            <span className="border-b-4 border-orange-400 pb-1">
              Luminauto work?
            </span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-orange-100">

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
        <div className="flex justify-end">

          {/* Placeholder Image */}
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/LOGO.svg" // <-- your file name
              alt="Illustration"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

function CtaSection(){
  return(
    <section className="bg-[#A34708]  text-white">
  <div className="max-w-7xl mx-auto px-20 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE — Illustration Placeholder */}
    <div className="flex justify-center md:justify-start">
      <div className="relative w-[440px] h-[440px]">
            <Image
              src="/webinar/pana.svg" // <-- your file name
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

      <button className="bg-[#F97316] hover:bg-orange-600 transition px-20 py-4 rounded-lg font-semibold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
        Get a Quote →
      </button>

    </div>

  </div>
</section>

  )
}

function CtaSection2(){
  return(
   <section className="bg-gray-100 py-24">
  <div className="max-w-7xl mx-auto px-20 grid md:grid-cols-2 gap-16 items-center text-center">

    {/* LEFT SIDE — Buy Online */}
    <div className="flex flex-col items-center">

      {/* Illustration Placeholder */}
      <div className="relative w-[320px] h-[220px]">
            <Image
              src="/ill-online.svg" // <-- your file name
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
      <div className="flex w-full max-w-md">

        <input
          type="text"
          placeholder="Enter zipcode"
          className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none"
        />

        <button className="bg-[#F97316] hover:bg-orange-600 transition px-6 py-3 rounded-r-lg text-white font-semibold">
          Get a Quote →
        </button>

      </div>

    </div>

    {/* RIGHT SIDE — Call an Agent */}
    <div className="flex flex-col items-center">
      {/* Illustration Placeholder */}
      <div className="relative w-[320px] h-[220px]">
            <Image
              src="/ill-call.svg" // <-- your file name
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
