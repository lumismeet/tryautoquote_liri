import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
   const router = useRouter();
  return (
    
      <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex items-center justify-between 
        bg-white shadow-md
          px-6 py-4">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo-test.png"
              alt="Luminarix Logo"
              width={140}
              height={40}
              className="h-10 w-auto cursor-pointer"
              priority
            />
          </Link>



          {/* Nav Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <Link href="/">Home</Link>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>

          <button
            // href="/quote/1"
            className="bg-[#7C3AED] hover:bg-violet-600 transition px-6 py-3 rounded-lg text-sm font-semibold shadow-lg"
          >
            Get a Quote →
          </button>
        </div>
      </div>
    </nav>
  );
}



