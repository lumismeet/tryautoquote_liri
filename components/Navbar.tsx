"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type NavbarProps = {
  onQuoteClick?: () => void;
};

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const router = useRouter();

  const handleQuote = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      router.push("/quote/1");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo-test1.png"
            alt="TryAutoQuote Logo"
            width={140}
            height={40}
            className="h-10 w-auto cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#0C2340] transition">Home</Link>
          <Link href="/contact" className="hover:text-[#0C2340] transition">Contact</Link>
        </div>

        <button
          onClick={handleQuote}
          className="bg-[#2B5BA8] text-white hover:bg-[#E8732A] transition px-6 py-3 rounded-lg text-sm font-semibold shadow-lg cursor-pointer"
        >
          Get a Quote →
        </button>

      </div>
    </nav>
  );
}