"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DISCLAIMER = "TryAutoQuote.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which TryAutoQuote.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. TryAutoQuote.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states.";

function DisclaimerAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-xs font-semibold text-gray-600 text-left"
      >
        Disclaimer
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-gray-400 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="mt-2 text-xs text-gray-500 leading-relaxed">{DISCLAIMER}</p>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      {/* TOP FOOTER */}
      <div className="bg-[#042C53] text-white py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#B5D4F4]">TryAutoQuote</p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#B5D4F4]">
            <Link href="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition">
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="hidden md:block text-xs text-gray-500 leading-relaxed">{DISCLAIMER}</p>
          <DisclaimerAccordion />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-center">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} TryAutoQuote. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
