"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Quicksand, Poppins } from "next/font/google";
import {
  ClipboardList,
  Car,
  DollarSign,
  ShieldCheck,
  PhoneOff,
  Zap,
  BadgeCheck,
  Layers,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useForm } from "@/context/FormContext";
import FAQAccordion from "@/components/FAQAccordion";

/* ------------------------------------------------------------------ */
/* Fonts                                                                */
/* ------------------------------------------------------------------ */

const display = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

/* ------------------------------------------------------------------ */
/* Palette                                                              */
/*   bg          #262B31   main background                              */
/*   bg-deep     #20242A   bottom copyright bar                         */
/*   band        #3B4148   partners strip                               */
/*   blue        #2C4FA3   hero band / blobs                            */
/*   blue-soft   #3358B5   overlay blobs                                */
/*   blue-deep   #1E3F8F   quote form card                              */
/*   blue-bright #2F7DE1   service icon discs                           */
/*   teal        #45D9C6   accent / buttons                             */
/*   card        #222D44   cards                                        */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: ClipboardList,
    title: "A little Information",
    paragraphs: [
      "Provide some basic details about yourself and your vehicle. This takes about 2 minutes and lets us generate personalized, accurate results, not generic quotes.",
      "The service is free and you are never obligated to buy anything.",
    ],
    image: "/ill_comp_blue.svg",
  },
  {
    icon: Car,
    title: "A bit of Magic",
    paragraphs: [
      "Our matching engine compares your profile in real time against dozens of top carriers. You'll see the best available rates for your area side by side.",
      "No waiting, no back-and-forth with agents. The quotes reflect actual current rates, not ballpark estimates.",
    ],
    image: "/ill_hero_blue.svg",
  },
  {
    icon: DollarSign,
    title: "A Lot of Savings",
    paragraphs: [
      "Review your options and choose the policy that fits your budget and coverage needs. If you're ready, you can purchase directly through the carrier.",
      "If not, just walk away with no pressure, no follow-up calls.",
    ],
    image: "/ill_mobile_blue.svg",
  },
];

const bestServices = [
  {
    icon: ShieldCheck,
    title: "Free, always",
    text: "The service is free and you are never obligated to buy the presented policy. No hidden fees, no credit card required. Just real rates from real carriers, at no cost to you.",
  },
  {
    icon: PhoneOff,
    title: "No spam calls",
    text: "Compare quotes without a flood of follow-up calls. You decide who to talk to. We never sell your phone number to telemarketers. Your contact details stay between you and the carrier you choose.",
  },
  {
    icon: Zap,
    title: "Real-time matching",
    text: "Your details are compared live against a database connected to dozens of top insurance carriers. The quotes you see reflect actual current rates, not ballpark estimates generated days later.",
  },
  {
    icon: BadgeCheck,
    title: "Carriers you recognize",
    text: "Get matched with established providers you actually know, willing to insure you. No obscure names, only trusted carriers with strong reputations and solid claims track records.",
  },
];

const clients = [
  {
    name: "Derek Okafor",
    role: "Columbus, OH",
    text: "I'd been on the same plan for 4 years and honestly had no idea I was overpaying. Took me maybe 10 minutes to compare and switch. Saving $58 a month now.",
    image: "/person1.png",
  },
  {
    name: "Amanda Reyes",
    role: "Phoenix, AZ",
    text: "I hate dealing with insurance stuff, so I kept putting it off. This actually made it painless. Got 3 solid quotes, picked one, done. Wish I'd done it sooner.",
    image: "/person2.png",
  },
  {
    name: "Tom Vasquez",
    role: "Tampa, FL",
    text: "Was skeptical at first. I figured there'd be a catch or they'd just spam me with calls. Neither happened. Got matched with a provider I actually recognized and the rate was lower than what I had.",
    image: "/person3.png",
  },
];

const achievements = [
  {
    icon: Layers,
    stat: "Dozens",
    caption: "of top carriers compared in real time",
  },
  {
    icon: Clock,
    stat: "Minutes",
    caption: "to compare and switch, not hours of paperwork",
  },
  {
    icon: ShieldCheck,
    stat: "Free",
    caption: "no obligation to buy, ever",
  },
];

const insights = [
  {
    title: "Why You Might Be Overpaying for Auto Insurance",
    desc: "Most drivers stick with the same policy for years without realizing rates have shifted around them.",
    img: "/auto_pic/WhatsApp Image 2026-03-05 at 15.34.51 (1).jpeg",
  },
  {
    title: "How Your Credit Score Affects Auto Rates",
    desc: "In most states, insurers use credit-based scoring as part of the premium calculation.",
    img: "/auto_pic/cartooncar.jpeg",
  },
  {
    title: "Bundling Home and Auto: Is It Worth It?",
    desc: "Multi-policy discounts can be significant. Here's when bundling actually saves money.",
    img: "/auto_pic/discussingpolicies.jpeg",
  },
  {
    title: "What Happens After an Accident?",
    desc: "A step-by-step guide to filing a claim and what to expect from your carrier.",
    img: "/auto_pic/girlhandouttawindow.jpg",
  },
  {
    title: "5 Things That Quietly Drive Up Your Premium",
    desc: "Common factors that raise rates without most drivers noticing.",
    img: "/auto_pic/happyfamilyouttawindow.png",
  },
];

const partners = ["GEICO", "Allstate", "Prudential", "HSBC", "AIG"];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("quote") === "1") {
      setTimeout(() => {
        const input = document.querySelector<HTMLInputElement>('input[aria-label="Zipcode"]');
        if (!input) return;
        input.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          input.focus();
        }, 400);
      }, 300);
    }
  }, []);

  return (
    <div
      className={`${display.variable} ${body.variable} [font-family:var(--font-body)] min-h-screen w-full bg-[#262B31] text-white overflow-x-hidden`}
    >
      <Navbar />

      {/* Hero + Services + Best Services share one flowing blob backdrop */}
      <div className="relative">
        <BlobBackdrop />
        <div className="relative">
          <HeroSection />
          <ServicesSection />
          <BestServices />
        </div>
      </div>

      <Clients />
      <Achievements />
      <Insights />
      <Partners />
      <FAQAccordion />
      <ContactFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Blob backdrop — the big blue organic shapes behind the top sections  */
/* ------------------------------------------------------------------ */

function BlobBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 1700"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 H1200 V470
             C1100,520 1020,500 960,540
             C900,580 930,660 880,720
             C810,800 600,760 480,830
             C360,900 300,980 180,1010
             C100,1030 40,1010 0,1020 Z"
          fill="#2C4FA3"
        />
        <path
          d="M0,980
             C140,960 220,1030 210,1140
             C200,1260 120,1340 0,1360 Z"
          fill="#2C4FA3"
        />
        <path
          d="M-60,40
             C220,-30 480,40 520,160
             C560,290 420,380 240,400
             C60,420 -80,330 -60,40 Z"
          fill="#3358B5"
          opacity="0.65"
        />
        <path
          d="M-40,560
             C120,500 300,560 320,690
             C340,820 220,900 80,900
             C-40,900 -120,760 -40,560 Z"
          fill="#3358B5"
          opacity="0.55"
        />
      </svg>

      <div className="absolute top-[140px] right-[3%] w-20 h-20 rounded-full border border-white/15" />
      <div className="absolute top-[200px] right-[6%] flex flex-col gap-1.5">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-white/40" />
        ))}
      </div>
      <span className="absolute top-[430px] left-[10%] w-4 h-4 rounded-full bg-[#45D9C6]" />
      <span className="absolute top-[460px] left-[12%] w-2 h-2 rounded-full bg-[#45D9C6]/70" />
      <div className="absolute top-[560px] left-[4%] w-32 h-32 rounded-full border border-white/10" />
      <span className="absolute top-[1050px] left-[30%] w-4 h-4 rounded-full bg-[#45D9C6]" />
      <div className="absolute top-[300px] left-[45%] w-24 h-24 rounded-full border border-white/10" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                               */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
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
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 md:pt-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-start">
          <div className="pt-6 md:pt-14">
            <h1 className="[font-family:var(--font-display)] text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.15] text-white">
              We provide the best
              <br />
              value insurance
            </h1>
            <p className="mt-6 text-sm md:text-base text-white/70 max-w-sm leading-relaxed">
              Simple Steps You Can Take to Improve Your Financial Well-Being
              for the rest of Your Life
            </p>
          </div>

          <div className="flex md:justify-end">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");
  const { updateForm } = useForm();
  const router = useRouter();

  const handleSubmit = () => {
    setError("");
    const trimmed = zipcode.trim();
    if (!trimmed) {
      setError("Please enter a zipcode");
      return;
    }
    if (!/^[0-9]{5}$/.test(trimmed)) {
      setError("Invalid zip");
      return;
    }
    updateForm({ zipcode: trimmed });
    router.push("/quote/1");
  };

  return (
    <div className="w-full max-w-sm bg-[#1E3F8F] rounded-3xl p-8 md:p-9 shadow-2xl shadow-black/30">
      <h2 className="[font-family:var(--font-display)] text-xl font-bold text-center mb-3">
        Get a Quote
      </h2>
      <p className="text-xs text-white/70 text-center mb-8">
        Enter your zipcode to compare auto insurance rates in your area.
      </p>

      <input
        type="text"
        inputMode="numeric"
        maxLength={5}
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value.replace(/[^0-9]/g, ""))}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Enter zipcode"
        aria-label="Zipcode"
        className="w-full bg-transparent border-b border-white/25 pb-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#45D9C6] transition text-center tracking-widest"
      />

      <button
        onClick={handleSubmit}
        className="mt-8 w-full bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] text-sm font-semibold py-3 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Get Quote
      </button>

      <p role="status" className="mt-3 min-h-[20px] text-xs text-red-200 text-center">
        {error}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Services — icon rail + copy + offset image card                      */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 md:gap-14 items-center">
          <div
            role="tablist"
            aria-label="How it works steps"
            className="flex md:flex-col items-center justify-center gap-5"
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={s.title}
                  onClick={() => setActive(i)}
                  className="relative w-12 h-12 flex items-center justify-center cursor-pointer focus-visible:outline-none group"
                >
                  <span
                    aria-hidden
                    className={`absolute -inset-2 rounded-full border transition ${
                      isActive ? "border-white/30" : "border-transparent"
                    }`}
                  />
                  <span
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition motion-reduce:transition-none ${
                      isActive
                        ? "bg-[#2F7DE1] text-white shadow-lg shadow-[#2F7DE1]/30 scale-110"
                        : "bg-[#2F61C9]/60 text-white/80 group-hover:bg-[#2F7DE1]/80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <h2 className="[font-family:var(--font-display)] text-2xl md:text-[28px] font-bold mb-5">
              {service.title}
            </h2>
            {service.paragraphs.map((p) => (
              <p
                key={p}
                className="text-xs md:text-sm text-white/75 leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="relative mx-auto md:mx-0">
            <div
              aria-hidden
              className="absolute -top-6 -left-6 w-full h-full bg-[#3358B5]/70 rounded-[28px]"
            />
            <div className="relative w-[260px] h-[180px] sm:w-[300px] sm:h-[200px] rounded-[22px] shadow-2xl shadow-black/30 bg-white overflow-hidden flex items-center justify-center">
              <Image
                key={service.image}
                src={service.image}
                alt={service.title}
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Best Services / Features                                             */
/* ------------------------------------------------------------------ */

function BestServices() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold mb-12">
          Why drivers compare with us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {bestServices.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title}>
                <Icon className="w-8 h-8 text-[#45D9C6] mb-5" strokeWidth={1.6} />
                <h3 className="[font-family:var(--font-display)] font-bold text-base mb-3">
                  {s.title}
                </h3>
                <p className="text-xs text-white/55 leading-relaxed max-w-[180px]">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Clients / Testimonials                                               */
/* ------------------------------------------------------------------ */

function Clients() {
  const [current, setCurrent] = useState(0);
  const len = clients.length;
  const client = clients[current];
  const prevClient = clients[(current - 1 + len) % len];

  const prev = () => setCurrent((p) => (p === 0 ? len - 1 : p - 1));
  const next = () => setCurrent((p) => (p === len - 1 ? 0 : p + 1));

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden
        className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2"
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden opacity-40">
          <Image src={prevClient.image} alt="" fill className="object-cover" />
        </div>
      </div>

      <span
        aria-hidden
        className="absolute top-12 left-[28%] w-2 h-2 rounded-full bg-[#45D9C6]"
      />
      <span
        aria-hidden
        className="absolute bottom-16 right-[12%] w-1.5 h-1.5 rounded-full bg-[#45D9C6]/70"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-4">
          What our customers say
        </h2>
        <p className="text-sm text-white/60 text-center max-w-md mx-auto mb-14">
          Thousands of drivers trust us to find them the best auto insurance
          rates available.
        </p>

        <div className="relative flex flex-col md:flex-row items-center">
          <div className="relative shrink-0 md:-mr-16 z-10 mb-8 md:mb-0">
            <span
              aria-hidden
              className="absolute -inset-8 rounded-full border border-white/10"
            />
            <span
              aria-hidden
              className="absolute -inset-16 rounded-full border border-white/5"
            />
            <span
              aria-hidden
              className="absolute -top-6 right-0 w-2 h-2 rounded-full bg-[#45D9C6]"
            />
            <div
              key={current}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-black/40 ring-4 ring-[#45D9C6]/30"
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 bg-[#2C4FA3] rounded-sm py-10 px-8 md:py-12 md:pl-24 md:pr-12">
            <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  fill="#45D9C6"
                  color="#45D9C6"
                />
              ))}
            </div>
            <h3 className="[font-family:var(--font-display)] text-lg font-bold text-[#45D9C6]">
              {client.name}
            </h3>
            <p className="text-xs text-white/60 mt-0.5 mb-5 flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5" />
              Verified Buyer · {client.role}
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-white/85 max-w-2xl">
              &ldquo;{client.text}&rdquo;
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-8 pr-2">
          <button
            onClick={prev}
            aria-label="Previous client"
            className="text-white/50 hover:text-[#45D9C6] transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to client ${i + 1}`}
                className={`h-0.5 transition-all cursor-pointer ${
                  i === current ? "w-10 bg-white/80" : "w-4 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next client"
            className="text-white/50 hover:text-[#45D9C6] transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Achievements                                                         */
/* ------------------------------------------------------------------ */

function Achievements() {
  const [active, setActive] = useState(0);
  const len = achievements.length;

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % len), 4000);
    return () => clearInterval(id);
  }, [len]);

  const prev = () => setActive((p) => (p === 0 ? len - 1 : p - 1));
  const next = () => setActive((p) => (p === len - 1 ? 0 : p + 1));

  const leftIdx = (active - 1 + len) % len;
  const rightIdx = (active + 1) % len;

  const CenterIcon = achievements[active].icon;
  const LeftIcon = achievements[leftIdx].icon;
  const RightIcon = achievements[rightIdx].icon;

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold mb-3">
          Achievements
        </h2>
        <p className="text-sm text-white/60 max-w-xl mx-auto mb-14">
          Built to earn drivers&apos; trust. Here&apos;s what comparing with us
          gets you.
        </p>

        <div className="relative flex items-center justify-center">
          <svg
            aria-hidden
            className="absolute inset-x-0 top-1/2 w-full h-24 -translate-y-1/2"
            viewBox="0 0 600 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 H600"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          </svg>

          <button
            onClick={prev}
            aria-label={`Previous: ${achievements[leftIdx].stat}`}
            className="absolute left-0 sm:left-8 md:left-16 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#2C4FA3]/40 border border-white/15 flex items-center justify-center opacity-50 hover:opacity-80 transition cursor-pointer"
          >
            <LeftIcon className="w-7 h-7 md:w-8 md:h-8 text-white/70" />
          </button>

          <div
            key={active}
            className="relative z-10 w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#3358B5] to-[#1E3F8F] border-4 border-[#45D9C6] flex items-center justify-center shadow-2xl shadow-black/50 transition-all duration-500"
          >
            <span
              aria-hidden
              className="absolute -inset-3 rounded-full border border-white/15"
            />
            <CenterIcon className="w-20 h-20 md:w-24 md:h-24 text-white" />
          </div>

          <button
            onClick={next}
            aria-label={`Next: ${achievements[rightIdx].stat}`}
            className="absolute right-0 sm:right-8 md:right-16 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#2C4FA3]/40 border border-white/15 flex items-center justify-center opacity-50 hover:opacity-80 transition cursor-pointer"
          >
            <RightIcon className="w-7 h-7 md:w-8 md:h-8 text-white/70" />
          </button>
        </div>

        <div key={`label-${active}`} className="mt-10">
          <p className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-[#45D9C6]">
            {achievements[active].stat}
          </p>
          <p className="mt-2 text-sm md:text-base text-white/75 max-w-md mx-auto leading-relaxed">
            {achievements[active].caption}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Previous"
            className="text-white/40 hover:text-[#45D9C6] transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {achievements.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to achievement ${i + 1}`}
                className={`h-0.5 transition-all cursor-pointer ${
                  i === active ? "w-8 bg-[#45D9C6]" : "w-3 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="text-white/40 hover:text-[#45D9C6] transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Insights                                                             */
/* ------------------------------------------------------------------ */

function InsightCard({
  item,
  className = "",
}: {
  item: (typeof insights)[number];
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-[#2F3D5C]/60 hover:border-[#45D9C6]/40 transition ${className}`}
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <Image src={item.img} alt={item.title} fill className="object-cover" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#1A1E24]/95 via-[#262B31]/55 to-[#262B31]/10"
      />

      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <span className="text-[10px] text-[#45D9C6] border border-[#45D9C6]/50 rounded-full px-3 py-1 w-fit mb-3">
          Read
        </span>
        <h3 className="[font-family:var(--font-display)] text-base md:text-lg font-bold leading-snug mb-2">
          {item.title}
        </h3>
        <p className="text-xs md:text-sm text-white/70 line-clamp-2">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function Insights() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold">
            Insights for smarter drivers
          </h2>
          <p className="mt-4 text-sm text-white/60">
            Quick reads on saving money, choosing coverage, and getting the most
            out of your auto policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[240px]">
          <InsightCard
            item={insights[0]}
            className="lg:row-span-2 lg:h-auto h-[440px] md:h-[480px]"
          />
          <InsightCard item={insights[1]} />
          <InsightCard item={insights[2]} />
          <InsightCard item={insights[3]} />
          <InsightCard item={insights[4]} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Partners                                                             */
/* ------------------------------------------------------------------ */

function Partners() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20">
      <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-12">
        Partners
      </h2>

      <div className="bg-[#3B4148] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6">
          {partners.map((p) => (
            <span
              key={p}
              className="[font-family:var(--font-display)] text-lg md:text-xl font-bold tracking-wide text-white/85 select-none"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        <span className="h-0.5 w-3 bg-white/25" />
        <span className="h-0.5 w-8 bg-[#45D9C6]" />
        <span className="h-0.5 w-3 bg-white/25" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact Us + Footer                                                  */
/* ------------------------------------------------------------------ */

const footerLinks: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

const FOOTER_DISCLAIMER =
  "TryAutoQuote.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which TryAutoQuote.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. TryAutoQuote.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states.";

function ContactFooter() {
  const [zipcode, setZipcode] = useState("");
  const [zipError, setZipError] = useState("");
  const { updateForm } = useForm();
  const router = useRouter();

  const handleSubmit = () => {
    setZipError("");
    const trimmed = zipcode.trim();
    if (!trimmed) {
      setZipError("Please enter a zipcode");
      return;
    }
    if (!/^[0-9]{5}$/.test(trimmed)) {
      setZipError("Invalid zip");
      return;
    }
    updateForm({ zipcode: trimmed });
    router.push("/quote/1");
  };

  return (
    <footer className="relative pt-10 md:pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-14">
          Get A Quote
        </h2>

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

          <div>
            <h3 className="[font-family:var(--font-display)] font-bold text-base mb-5">
              Compare rates in your area
            </h3>
            <div className="flex items-center bg-[#1E232A] rounded-full p-1.5 max-w-md">
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={zipcode}
                onChange={(e) =>
                  setZipcode(e.target.value.replace(/[^0-9]/g, ""))
                }
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Enter zipcode"
                aria-label="Zipcode"
                className="flex-1 bg-transparent px-4 text-xs text-white placeholder:text-white/40 focus:outline-none tracking-widest"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Quote
              </button>
            </div>
            <p role="status" className="mt-2 min-h-[18px] text-xs text-red-200">
              {zipError}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/70">
            {footerLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-[#45D9C6] transition">
                {l.label}
              </Link>
            ))}
          </nav>
          {/* <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#!"
                aria-label={label}
                onClick={(e) => e.preventDefault()}
                className="text-white/50 hover:text-[#45D9C6] transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
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
              All Rights Reserved &copy; TryAutoQuote, {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <div aria-hidden className="h-2 bg-[#2C4FA3]" />
    </footer>
  );
}
