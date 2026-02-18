"use client"


import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What factors affect my car insurance premium?",
    answer:
      "Insurance premiums are determined by several factors including your driving history, age, location, vehicle type, and coverage preferences. Safe drivers with clean records generally receive better rates.",
  },
  {
    question: "How quickly can I get matched with providers?",
    answer:
      "Our system compares quotes in real time and presents you with options within minutes after submitting your information.",
  },
  {
    question: "Is the service really free?",
    answer:
      "Yes. Our comparison service is completely free and you are never obligated to purchase a policy.",
  },
  {
    question: "Will checking quotes affect my credit score?",
    answer:
      "No. Checking quotes through our platform does not impact your credit score.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#F3E8FF] py-24">
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden"
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
                    ? "max-h-40 py-4"
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
