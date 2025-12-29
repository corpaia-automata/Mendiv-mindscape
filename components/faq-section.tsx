"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What makes Mendiv different from wellness programs?",
    answer:
      "Mendiv is not a wellness program—it's a precision health intelligence platform. We don't offer generic advice or one-size-fits-all solutions. Instead, we build a Digital Twin of your biology using continuous biomarker tracking, advanced diagnostics, and AI-driven analysis. Every protocol is personalized to your unique physiology and adapts in real-time as your body changes.",
  },
  {
    question: "Is this medical treatment?",
    answer:
      "Mendiv is not a medical treatment or a replacement for medical care. We are a health optimization platform that works alongside your existing healthcare providers. Our protocols focus on lifestyle interventions, nutritional optimization, and performance enhancement. We do not diagnose, treat, or cure medical conditions. Always consult with your physician before making significant health changes.",
  },
  {
    question: "Who is Mendiv for?",
    answer:
      "Mendiv is designed for high-performing executives, entrepreneurs, and professionals who demand measurable results. Our clients are typically 35-55 years old, experiencing early signs of cognitive or physical decline, and seeking data-driven solutions rather than generic wellness advice. We work with individuals who view health as an investment in long-term performance, not a quick fix.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary by individual and program. Most clients report initial improvements in energy and sleep quality within 2-4 weeks. Measurable biomarker changes typically appear within 8-12 weeks. Long-term optimization—including metabolic rebalancing and cognitive enhancement—unfolds over 6-12 months. Our approach prioritizes sustainable, compounding improvements over quick fixes.",
  },
  {
    question: "Is Mendiv available globally?",
    answer:
      "Yes. Mendiv operates globally with clients across North America, Europe, the Middle East, and Asia. Our platform is fully remote—consultations, testing coordination, and ongoing support are delivered digitally. We partner with local laboratories and practitioners worldwide to ensure seamless testing and protocol implementation, regardless of your location.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Fixed */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">LEARN MORE</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Frequently asked questions
            </h2>
            <Button
              variant="outline"
              className="bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 rounded-lg px-6"
            >
              Visit our FAQ
            </Button>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="pb-6 pt-2">
                    <div className="text-gray-600 leading-relaxed space-y-4">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
