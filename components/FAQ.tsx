"use client"


import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
  question: "What factors affect my car insurance premium?",
  answer:
    "Your driving history is one of the biggest factors, including any accidents, tickets, or DUI records from the past 3 to 5 years. Your age and years of experience behind the wheel matter too, with younger drivers typically paying more. Where you live plays a major role since urban areas with higher traffic and theft rates tend to have higher premiums. The vehicle itself matters as well, including its make, model, year, safety ratings, and how expensive it is to repair. On top of that, the coverage types and limits you choose, your deductible amount, and even your credit score in most states will all influence your final rate.",
},
  {
    question: "How quickly can I get matched with providers?",
    answer:
      "Most users see results within 2 to 3 minutes. Once you submit your information, our matching engine runs it against a live database of dozens of carriers simultaneously, filtering out policies you would not qualify for and surfacing only the ones relevant to your situation. You do not have to fill out separate forms for each provider or wait for callbacks. Everything comes back in one place, ranked and ready to compare.",
  },
  {
    question: "Is the service really free?",
    answer:
      "Yes, completely free. You pay nothing to use TryAutoQuote and there is no catch. We are compensated by the insurance carriers and aggregators when a match is made, which is how we keep the service free for drivers. You are never obligated to purchase any policy that comes up in your results, and you can compare as many times as you like with no fees involved.",
  },
  {
    question: "Will checking quotes affect my credit score?",
    answer:
      "No, it will not. What insurance companies do is called a soft inquiry, which is different from the hard inquiry a lender runs when you apply for a loan or credit card. Soft inquiries are not reported to credit bureaus and have zero impact on your credit score. You can check quotes freely and repeatedly without any risk to your credit.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#EBF2FB] py-24">
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900"
              >
                {faq.question}

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[600px] py-4"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}



