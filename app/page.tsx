"use client";

import { useEffect, useState } from "react";
import { Quicksand, Poppins } from "next/font/google";
import {
  Phone,
  Search,
  LayoutGrid,
  Car,
  Home as HomeIcon,
  PawPrint,
  Plane,
  Headphones,
  FilePenLine,
  WalletCards,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Mail,
  Image as ImageIcon,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

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
/* Palette (slightly lifted from the original near-black)               */
/*   bg          #262B31   main background                              */
/*   bg-deep     #20242A   bottom copyright bar                         */
/*   band        #3B4148   partners strip                               */
/*   blue        #2C4FA3   hero band / blobs                            */
/*   blue-soft   #3358B5   overlay blobs                                */
/*   blue-deep   #1E3F8F   quote form card                              */
/*   blue-bright #2F7DE1   service icon discs                           */
/*   teal        #45D9C6   accent / buttons                             */
/*   card        #222D44   news cards                                   */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Image placeholder (swap for next/image once assets exist)            */
/* ------------------------------------------------------------------ */

function ImagePlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Image placeholder"}
      className={`bg-gradient-to-br from-[#39455C] via-[#2E3950] to-[#222B3D] flex flex-col items-center justify-center gap-2 text-white/30 select-none ${className}`}
    >
      <ImageIcon className="w-8 h-8" aria-hidden />
      {label && (
        <span className="text-[10px] uppercase tracking-widest">{label}</span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Car,
    title: "Car Insurance",
    paragraphs: [
      "Make a plan for the emergence of life. We protect your most precious assets, allowing you to devote your time and energy to more essential things in life.",
      "Discover the most appropriate fit for you and your Family.",
    ],
  },
  {
    icon: HomeIcon,
    title: "Home Insurance",
    paragraphs: [
      "Your home is more than a building — it is where life happens. Cover the structure, your belongings, and your peace of mind in one simple policy.",
      "Flexible plans shaped around the way you actually live.",
    ],
  },
  {
    icon: PawPrint,
    title: "Pet Insurance",
    paragraphs: [
      "Vet bills should never decide your pet's care. From routine check-ups to the unexpected, keep every member of the family protected.",
      "Choose the level of cover that fits your companion.",
    ],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    paragraphs: [
      "Lost luggage, cancelled flights, medical surprises abroad — travel cover that lets you focus on the journey instead of the what-ifs.",
      "Single trips or a full year of wandering, your choice.",
    ],
  },
];

const bestServices = [
  {
    icon: Headphones,
    title: "24x7 Support",
    text: "Client is our most important priority",
  },
  {
    icon: FilePenLine,
    title: "Easy Claim System",
    text: "Express your desires and needs to us",
  },
  {
    icon: WalletCards,
    title: "Easy installments",
    text: "Less complicated payment system",
  },
  {
    icon: ShieldCheck,
    title: "Strongly Secured",
    text: "We can secure your precious assets",
  },
];

const clients = [
  {
    name: "Charlotte Mason",
    role: "Athlete",
    text: "Customer service is accessible at all times and responds promptly to your requests and claims. They are kind and will guide you to your Representative and assist you in obtaining the funds you need. You can trust this company. I had a great experience.",
  },
  {
    name: "Daniel Whitfield",
    role: "Architect",
    text: "Switching providers felt effortless. Every question was answered the same day and the claim I filed last spring was settled within the week. It is rare to find a company this consistent.",
  },
  {
    name: "Priya Raman",
    role: "Entrepreneur",
    text: "I compared four insurers before choosing this one and the difference shows in the details — clear policies, honest pricing, and people who actually pick up the phone.",
  },
];

const achievements = [
  { caption: "27th Asia Insurance Industry Award 2020" },
  { caption: "Best Customer Experience, FinServe Honors 2019" },
  { caption: "Top Rated Claims Team, Coverage Awards 2021" },
];

const news = [
  {
    date: "24 July, 2021",
    tag: "Thoughts",
    title: "A pandemic may cause life insurance coverage",
    excerpt:
      "In the aftermath of the Covid epidemic, life insurance firms have been more cautious and have tightened underwriting standards for policies with large cash values......",
  },
  {
    date: "29 July, 2021",
    tag: "Health",
    title: "Top 10 health insurance companies in the Germany",
    excerpt:
      "There are numerous private healthcare insurance experts in Germany. Insurance protects against financial loss and reduces uncertainty. It ensures safety and security......",
  },
  {
    date: "16 August, 2021",
    tag: "Life",
    title: "Why do you need several life insurance policies?",
    excerpt:
      "In the event of the insured's death, life insurance protects the nominees financially. It is possible to have several life insurance policies with various insurance providers......",
  },
];

const partners = ["GEICO", "Allstate", "Prudential", "HSBC", "AIG"];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
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
      <RecentNews />
      <Partners />
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
      {/* Main blue band: full width through the hero, curling down-left
          through services and trailing into Best Services */}
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
        {/* Tail blob curling along the far left into Best Services */}
        <path
          d="M0,980
             C140,960 220,1030 210,1140
             C200,1260 120,1340 0,1360 Z"
          fill="#2C4FA3"
        />
        {/* Softer overlay blob behind the headline */}
        <path
          d="M-60,40
             C220,-30 480,40 520,160
             C560,290 420,380 240,400
             C60,420 -80,330 -60,40 Z"
          fill="#3358B5"
          opacity="0.65"
        />
        {/* Overlay blob around the icon rail / services area */}
        <path
          d="M-40,560
             C120,500 300,560 320,690
             C340,820 220,900 80,900
             C-40,900 -120,760 -40,560 Z"
          fill="#3358B5"
          opacity="0.55"
        />
      </svg>

      {/* Decorative outline circles + teal dots */}
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

const navLinks = ["Products", "News & Blog", "Contact us"];

function Navbar() {
  return (
    <header className="relative z-20 bg-[#262B31]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="[font-family:var(--font-display)] text-2xl font-bold tracking-tight"
        >
          <span className="text-[#45D9C6]">en</span>
          <span className="text-white">surance</span>
        </a>

        {/* Call us */}
        <p className="hidden lg:flex items-center gap-2 text-xs text-white/70">
          <Phone className="w-3.5 h-3.5 text-[#45D9C6]" />
          Call Us Now{" "}
          <span className="text-[#45D9C6] font-medium">+215 (362) 4579</span>
        </p>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs">
          <a
            href="#"
            className="flex items-center gap-1.5 text-white font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#45D9C6]" aria-hidden />
            home
          </a>
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/70 hover:text-[#45D9C6] transition"
            >
              {l}
            </a>
          ))}
          <button
            aria-label="Search"
            className="text-white/70 hover:text-[#45D9C6] transition cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            aria-label="Menu"
            className="text-white/70 hover:text-[#45D9C6] transition cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — headline left, underlined quote form card right               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 md:pt-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-start">
          {/* Headline */}
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

          {/* Quote form */}
          <div className="flex md:justify-end">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const insuranceCategories = [
  "Insurance Category",
  "Car Insurance",
  "Home Insurance",
  "Pet Insurance",
  "Travel Insurance",
];

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("Please enter your name and phone number.");
      return;
    }
    setStatus("Thanks! We'll be in touch shortly.");
  };

  const fieldClass =
    "w-full bg-transparent border-b border-white/25 pb-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#45D9C6] transition";

  return (
    <div className="w-full max-w-sm bg-[#1E3F8F] rounded-3xl p-8 md:p-9 shadow-2xl shadow-black/30">
      <h2 className="[font-family:var(--font-display)] text-xl font-bold text-center mb-8">
        Get a Quote
      </h2>

      <div className="flex flex-col gap-6">
        <input
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          aria-label="Your name"
          className={fieldClass}
        />
        <input
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="Phone"
          aria-label="Phone"
          className={`${fieldClass} font-medium`}
        />
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="Email"
          aria-label="Email"
          className={fieldClass}
        />
        <select
          value={form.category}
          onChange={update("category")}
          aria-label="Insurance category"
          className={`${fieldClass} appearance-none cursor-pointer ${
            form.category ? "text-white" : "text-white/50"
          } [&>option]:text-[#1E3F8F]`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='white' stroke-opacity='0.6' fill='none'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 4px center",
          }}
        >
          {insuranceCategories.map((c, i) => (
            <option key={c} value={i === 0 ? "" : c} disabled={i === 0}>
              {c}
            </option>
          ))}
        </select>
        <textarea
          value={form.message}
          onChange={update("message")}
          placeholder="Message"
          aria-label="Message"
          rows={2}
          className={`${fieldClass} resize-none mt-2`}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] text-sm font-semibold py-3 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Get Quote
      </button>

      <p role="status" className="mt-3 min-h-[20px] text-xs text-white/80 text-center">
        {status}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Services — vertical icon rail, copy, offset image card               */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 md:gap-14 items-center">
          {/* Icon rail */}
          <div
            role="tablist"
            aria-label="Insurance types"
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
                  {/* Outline ring on the active disc */}
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

          {/* Copy */}
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

          {/* Image card on offset blue square */}
          <div className="relative mx-auto md:mx-0">
            <div
              aria-hidden
              className="absolute -top-6 -left-6 w-full h-full bg-[#3358B5]/70 rounded-[28px]"
            />
            <ImagePlaceholder
              label={service.title}
              className="relative w-[260px] h-[180px] sm:w-[300px] sm:h-[200px] rounded-[22px] shadow-2xl shadow-black/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Best Services — 4-column feature row                                 */
/* ------------------------------------------------------------------ */

function BestServices() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold mb-12">
          Best Services
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
                <p className="text-xs text-white/55 leading-relaxed max-w-[160px]">
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
/* Our Awesome Clients — circle portrait over blue panel carousel       */
/* ------------------------------------------------------------------ */

function Clients() {
  const [current, setCurrent] = useState(0);
  const len = clients.length;
  const client = clients[current];

  const prev = () => setCurrent((p) => (p === 0 ? len - 1 : p - 1));
  const next = () => setCurrent((p) => (p === len - 1 ? 0 : p + 1));

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Peeking previous portrait on the far left edge */}
      <div
        aria-hidden
        className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2"
      >
        <ImagePlaceholder className="w-32 h-32 rounded-full opacity-50" />
      </div>

      {/* Decorative dots */}
      <span
        aria-hidden
        className="absolute top-12 left-[28%] w-2 h-2 rounded-full bg-[#45D9C6]"
      />
      <span
        aria-hidden
        className="absolute bottom-16 right-[12%] w-1.5 h-1.5 rounded-full bg-[#45D9C6]/70"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-14">
          Our Awesome Clients
        </h2>

        <div className="relative flex flex-col md:flex-row items-center">
          {/* Portrait with concentric outline rings */}
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
            <ImagePlaceholder
              key={current}
              label={client.name}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl shadow-black/40"
            />
          </div>

          {/* Blue quote panel */}
          <div className="flex-1 bg-[#2C4FA3] rounded-sm py-10 px-8 md:py-12 md:pl-24 md:pr-12">
            <h3 className="[font-family:var(--font-display)] text-lg font-bold text-[#45D9C6]">
              {client.name}
            </h3>
            <p className="text-xs text-white/60 mt-0.5 mb-5">{client.role}</p>
            <p className="text-xs md:text-sm leading-relaxed text-white/85 max-w-2xl">
              {client.text}
            </p>
          </div>
        </div>

        {/* Controls — dash indicator like the template */}
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
/* Achievements — big circle slide with dim side circles                */
/* ------------------------------------------------------------------ */

function Achievements() {
  const [active, setActive] = useState(0);
  const len = achievements.length;

  // Gentle auto-rotate, matching the template's slider feel
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % len), 5000);
    return () => clearInterval(id);
  }, [len]);

  const prev = () => setActive((p) => (p === 0 ? len - 1 : p - 1));
  const next = () => setActive((p) => (p === len - 1 ? 0 : p + 1));

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold mb-16">
          Achievements
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Faint connecting arc */}
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

          {/* Left dim circle */}
          <button
            onClick={prev}
            aria-label="Previous achievement"
            className="absolute left-0 sm:left-8 md:left-16 opacity-50 hover:opacity-80 transition cursor-pointer"
          >
            <ImagePlaceholder className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
          </button>

          {/* Center circle */}
          <ImagePlaceholder
            key={active}
            label="Award photo"
            className="relative z-10 w-52 h-52 md:w-64 md:h-64 rounded-full shadow-2xl shadow-black/50"
          />

          {/* Right dim circle */}
          <button
            onClick={next}
            aria-label="Next achievement"
            className="absolute right-0 sm:right-8 md:right-16 opacity-50 hover:opacity-80 transition cursor-pointer"
          >
            <ImagePlaceholder className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
          </button>
        </div>

        {/* Caption */}
        <p
          key={`caption-${active}`}
          className="[font-family:var(--font-display)] mt-10 text-sm md:text-base font-semibold max-w-xs mx-auto leading-relaxed"
        >
          {achievements[active].caption}
        </p>

        {/* Chevrons + dash indicators */}
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
/* Recent News — 3 navy cards                                           */
/* ------------------------------------------------------------------ */

function RecentNews() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-14">
          Recent News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="bg-[#222D44] border border-[#2F3D5C]/60 rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-[#45D9C6]/40 transition motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] text-white/55">{n.date}</span>
                <span className="text-[10px] text-[#45D9C6] border border-[#45D9C6]/50 rounded-full px-3 py-1">
                  {n.tag}
                </span>
              </div>
              <h3 className="[font-family:var(--font-display)] font-bold text-base leading-snug mb-4">
                {n.title}
              </h3>
              <p className="text-xs text-white/55 leading-relaxed mb-6 flex-1">
                {n.excerpt}
              </p>
              <a
                href="#"
                aria-label={`Read more: ${n.title}`}
                className="text-[#45D9C6] hover:translate-x-1 transition inline-flex w-fit motion-reduce:transition-none"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#45D9C6] hover:gap-3 transition-all motion-reduce:transition-none"
          >
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Partners — lighter full-width logo strip                             */
/* ------------------------------------------------------------------ */

function Partners() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20">
      <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-12">
        Partners
      </h2>

      {/* Full-width lighter band */}
      <div className="bg-[#3B4148] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6">
          {/* Text wordmarks as logo placeholders — drop real SVGs in later */}
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

      {/* Dash indicators */}
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

const footerLinks = ["Home", "About Us", "Blog", "Services", "Terms and Policy"];

function ContactFooter() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("");

  const subscribe = () => {
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setSubStatus("Please enter a valid email address.");
      return;
    }
    setSubStatus("Subscribed — welcome aboard!");
    setEmail("");
  };

  return (
    <footer className="relative pt-10 md:pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-14">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Brand + contact details */}
          <div>
            <p className="[font-family:var(--font-display)] text-3xl font-bold mb-6">
              <span className="text-[#45D9C6]">en</span>surance
            </p>
            <ul className="flex flex-col gap-3 text-xs text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#45D9C6] shrink-0 mt-0.5" />
                <span>
                  2109 WS 09 Oxford Rd #127
                  <br />
                  ParkVilla Hills, MI 48334
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#45D9C6] shrink-0" />
                <a href="tel:+8801976456893" className="hover:text-[#45D9C6] transition">
                  +88 019 76456893
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#45D9C6] shrink-0" />
                <a
                  href="mailto:scrumbledegg@gmail.com"
                  className="hover:text-[#45D9C6] transition"
                >
                  scrumbledegg@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="[font-family:var(--font-display)] font-bold text-base mb-5">
              Subscribe to newsletter
            </h3>
            <div className="flex items-center bg-[#1E232A] rounded-full p-1.5 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && subscribe()}
                placeholder="Enter your Email"
                aria-label="Email for newsletter"
                className="flex-1 bg-transparent px-4 text-xs text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                onClick={subscribe}
                className="bg-[#45D9C6] hover:bg-[#2FC4B1] transition text-[#10306B] text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </div>
            <p role="status" className="mt-2 min-h-[18px] text-xs text-white/70">
              {subStatus}
            </p>
          </div>
        </div>

        {/* Links + socials */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/70">
            {footerLinks.map((l) => (
              <a key={l} href="#" className="hover:text-[#45D9C6] transition">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white/50 hover:text-[#45D9C6] transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 bg-[#20242A]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/45">
          <p>All rights Reserved © Your Company, 2021</p>
          <p>
            Made with heart by{" "}
            <span className="text-[#45D9C6]">Your Team</span>
          </p>
        </div>
      </div>

      {/* Thin blue strip at the very bottom edge, as in the design */}
      <div aria-hidden className="h-2 bg-[#2C4FA3]" />
    </footer>
  );
}