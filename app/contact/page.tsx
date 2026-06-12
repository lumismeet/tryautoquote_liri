"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Send } from "lucide-react"
import { Quicksand, Poppins } from "next/font/google"
import { useRouter } from "next/navigation";

const display = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
})

const FOOTER_DISCLAIMER =
  "TryAutoQuote.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which TryAutoQuote.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. TryAutoQuote.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states."

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()  

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <div
      className={`${display.variable} ${body.variable} [font-family:var(--font-body)] min-h-screen w-full bg-[#262B31] text-white overflow-x-hidden`}
    >
      {/* Navbar — matches homepage */}
      <header className="relative z-20 bg-[#262B31]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="[font-family:var(--font-display)] text-2xl font-bold tracking-tight"
          >
            <span className="text-[#45D9C6]">try</span>
            <span className="text-white">autoquote</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-xs">
          <Link href="/" className="text-white/70 hover:text-[#45D9C6] transition">
            home
          </Link>
          <Link href="/contact" className="flex items-center gap-1.5 text-white font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#45D9C6]" aria-hidden />
            Contact us
          </Link>
        </nav>

        <button
          onClick={() => router.push("/?quote=1")}
          className="bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
        >
          Get a Quote →
        </button>

        </div>
      </header>

      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="[font-family:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#45D9C6]">Touch</span>
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            Have a question or need help finding the right policy? Send us a
            message and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Info Card */}
            <div className="relative bg-[#222D44] text-white rounded-2xl p-10 overflow-hidden flex flex-col justify-between min-h-[420px] border border-white/5">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2C4FA3] rounded-full opacity-40" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#45D9C6] rounded-full opacity-20" />

              <div className="relative z-10">
                <h2 className="[font-family:var(--font-display)] text-2xl font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-white/70 mb-12 leading-relaxed">
                  We typically respond within one business day. For any
                  questions about your quotes or how the platform works, we are
                  happy to help.
                </p>

                <div className="flex items-center gap-4">
                  <div className="bg-[#45D9C6]/15 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#45D9C6]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Email us at</p>
                    <a
                      href="mailto:info@tryautoquote.com"
                      className="font-semibold text-white hover:text-[#45D9C6] transition"
                    >
                      info@tryautoquote.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-16">
                <p className="text-xs text-white/50">
                  TryAutoQuote is a free service. You are never obligated to
                  purchase any policy.
                </p>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="bg-[#1E232A] rounded-2xl p-10 border border-white/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="bg-[#45D9C6]/15 p-5 rounded-full mb-6">
                    <Send className="w-8 h-8 text-[#45D9C6]" />
                  </div>
                  <h3 className="[font-family:var(--font-display)] text-2xl font-bold text-white mb-3">
                    Message Sent
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Thanks for reaching out. We will get back to you at your
                    email address within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2 tracking-wide uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#262B31] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#45D9C6] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2 tracking-wide uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#262B31] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#45D9C6] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-2 tracking-wide uppercase">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#262B31] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#45D9C6] transition resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] font-semibold py-3 rounded-lg shadow-lg cursor-pointer"
                  >
                    Send Message →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer — matches homepage */}
      <footer className="relative pt-10 md:pt-16 bg-[#1A1E24]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="[font-family:var(--font-display)] text-3xl font-bold mb-6">
                <span className="text-[#45D9C6]">try</span>autoquote
              </p>
              <ul className="flex flex-col gap-3 text-xs text-white/70">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#45D9C6] shrink-0" />
                  <a
                    href="mailto:info@tryautoquote.com"
                    className="hover:text-[#45D9C6] transition"
                  >
                    info@tryautoquote.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/70">
              <Link
                href="/privacy-policy"
                className="hover:text-[#45D9C6] transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="hover:text-[#45D9C6] transition"
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 bg-[#20242A]">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
            <p className="text-[11px] leading-relaxed text-white/55">
              {FOOTER_DISCLAIMER}
            </p>
          </div>
          <div className="border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 text-[11px] text-white/45 text-center">
              <p>
                All Rights Reserved &copy; TryAutoQuote,{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>

        <div aria-hidden className="h-2 bg-[#2C4FA3]" />
      </footer>
    </div>
  )
}
