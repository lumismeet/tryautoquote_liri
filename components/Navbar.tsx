// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// type NavbarProps = {
//   onQuoteClick?: () => void;
// };

// export default function Navbar({ onQuoteClick }: NavbarProps) {
//   const router = useRouter();

//   const handleQuote = () => {
//     if (onQuoteClick) {
//       onQuoteClick();
//     } else {
//       router.push("/quote/1");
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">

//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo-test1.png"
//             alt="TryAutoQuote Logo"
//             width={140}
//             height={40}
//             className="h-10 w-auto cursor-pointer"
//             priority
//           />
//         </Link>

//         <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
//           <Link href="/" className="hover:text-[#0C2340] transition">Home</Link>
//           <Link href="/contact" className="hover:text-[#0C2340] transition">Contact</Link>
//         </div>

//         <button
//           onClick={handleQuote}
//           className="bg-[#2B5BA8] text-white hover:bg-[#E8732A] transition px-6 py-3 rounded-lg text-sm font-semibold shadow-lg cursor-pointer"
//         >
//           Get a Quote →
//         </button>

//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Quicksand } from "next/font/google";

const display = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

type NavbarProps = {
  onQuoteClick?: () => void;
};

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isQuotePage = pathname.startsWith("/quote");

  const handleQuote = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else if (isQuotePage) {
      window.dispatchEvent(new CustomEvent("highlight-quote-input"));
    } else {
      router.push("/?quote=1");
    }
  };

  return (
    <header className={`${display.variable} fixed top-0 left-0 w-full z-50 bg-[#262B31]`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-6">

        <Link
          href="/"
          className="[font-family:var(--font-display)] text-2xl font-bold tracking-tight"
        >
          <span className="text-[#45D9C6]">try</span>
          <span className="text-white">autoquote</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-xs">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#45D9C6]" aria-hidden />
            home
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-[#45D9C6] transition"
          >
            Contact us
          </Link>
        </nav>

        <button
        onClick={handleQuote}
        className="bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
      >
        Get a Quote →
      </button>

      </div>
    </header>
  );
}