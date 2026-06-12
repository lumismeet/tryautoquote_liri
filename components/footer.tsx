"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";

const display = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const DISCLAIMER = "TryAutoQuote.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which TryAutoQuote.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. TryAutoQuote.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states.";

export default function Footer() {
  return (
    <footer className={display.variable}>
      <div className="bg-[#20242A]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="[font-family:var(--font-display)] text-lg font-bold">
            <span className="text-[#45D9C6]">try</span>
            <span className="text-white">autoquote</span>
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-white/60">
            <Link href="/contact" className="hover:text-[#45D9C6] transition">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-[#45D9C6] transition">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-[#45D9C6] transition">Terms of Use</Link>
          </nav>
          <p className="text-[11px] text-white/45">
            &copy; {new Date().getFullYear()} TryAutoQuote. All Rights Reserved.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-6">
          <p className="text-[11px] leading-relaxed text-white/40">{DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
}