"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqSections = [
  {
    title: "Mendiv's Approach",
    questions: [
      {
        question: "What is Mendiv and how can it help me?",
        answer:
          "Mendiv is a global life-engineering platform focused on optimizing quality of life and longevity. We align biology, mind, and environment through data-driven insights, personalized interventions, and intelligent design. We help high-performing professionals achieve measurable improvements in health, energy, cognitive performance, and overall quality of life.",
      },
      {
        question: "How is Mendiv different from a regular doctor or a concierge medical practice?",
        answer:
          "Mendiv complements traditional healthcare with a focus on preventive health optimization rather than treating illness. While traditional medicine addresses symptoms and diseases, Mendiv works on optimizing your biology before problems arise. We use advanced diagnostics, continuous biomarker tracking, and personalized protocols to enhance performance and longevity. We work alongside your existing healthcare providers, focusing on lifestyle interventions, nutrition, and performance enhancement rather than medical diagnosis or treatment.",
      },
      {
        question: "What makes the Mendiv experience unique compared to similar companies?",
        answer:
          "Mendiv's uniqueness lies in our comprehensive 'life-engineering' approach that integrates biology, mind, and environment. We build a Digital Twin of your health that continuously learns and adapts. Our protocols are highly personalized based on your unique genetics, biomarkers, and lifestyle. We prioritize measurable results through continuous tracking and data-driven adjustments. Unlike generic wellness programs, every aspect of our platform is tailored to your specific biology and goals.",
      },
      {
        question: "Who leads Mendiv's medical team?",
        answer:
          "Mendiv's team consists of experts across multiple disciplines including physicians, nutritionists, exercise physiologists, sleep specialists, and data scientists. Our clinical team reviews all results and protocols to ensure they meet the highest standards of safety and efficacy. All recommendations are evidence-based and reviewed by qualified professionals.",
      },
    ],
  },
  {
    title: "Your Test Results and Next Steps",
    questions: [
      {
        question: "What types of tests and assessments are included?",
        answer:
          "Mendiv's assessment includes comprehensive biomarker testing, genetic analysis, sleep architecture evaluation, cognitive assessments, and lifestyle factor analysis. The specific tests depend on your chosen program and goals. We use advanced diagnostics including metabolic panels, hormone testing, inflammatory markers, and epigenetic analysis to build a complete picture of your health status.",
      },
      {
        question: "How long does it take to receive my results?",
        answer:
          "Initial test results typically take 2-4 weeks after sample collection, depending on the specific tests. Some specialized tests may take longer. Once results are received, our team synthesizes the data into a comprehensive report, which you'll review in a one-on-one consultation with a Mendiv specialist, usually within 1-2 weeks of receiving results.",
      },
      {
        question: "What happens after I receive my results?",
        answer:
          "After receiving your results, you'll have a detailed consultation with a Mendiv specialist who will explain your findings, identify key areas for optimization, and outline your personalized protocol. You'll receive a comprehensive action plan including nutrition recommendations, exercise protocols, supplement strategies, lifestyle modifications, and follow-up testing schedules. Ongoing support and protocol adjustments are provided throughout your program.",
      },
      {
        question: "Can I share my results with my primary care physician?",
        answer:
          "Yes, absolutely. We encourage sharing your Mendiv results with your healthcare providers. All reports are designed to be physician-friendly and include relevant clinical context. We can provide summaries or full reports that can be easily shared with your medical team to ensure coordinated care.",
      },
    ],
  },
  {
    title: "Programs and Services",
    questions: [
      {
        question: "What programs does Mendiv offer?",
        answer:
          "Mendiv offers several specialized programs including BioAlign™ (comprehensive life optimization), NeuroSleep™ (precision sleep and nervous system reset), LifeScript (personalized longevity plan), and BioBrain Studio (cognitive performance enhancement). Each program is tailored to specific health goals and can be customized to your needs.",
      },
      {
        question: "How long do the programs last?",
        answer:
          "Program duration varies by type. BioAlign™ typically runs 6-12 months, NeuroSleep™ is 3-6 months, while other programs have variable timelines. The length depends on your goals, progress, and the complexity of optimization needed. Many clients continue with ongoing support after completing their initial program.",
      },
      {
        question: "Is Mendiv available globally?",
        answer:
          "Yes, Mendiv operates globally with clients across North America, Europe, the Middle East, and Asia. Our platform is fully remote—consultations, testing coordination, and ongoing support are delivered digitally. We partner with local laboratories and practitioners worldwide to ensure seamless testing and protocol implementation, regardless of your location.",
      },
      {
        question: "Who is Mendiv for?",
        answer:
          "Mendiv is designed for high-performing executives, entrepreneurs, and professionals who demand measurable results. Our clients are typically 35-55 years old, experiencing early signs of cognitive or physical decline, or seeking to optimize their health for peak performance. We work with individuals who view health as an investment in long-term performance, not a quick fix.",
      },
    ],
  },
  {
    title: "Getting Started",
    questions: [
      {
        question: "How do I get started with Mendiv?",
        answer:
          "Getting started is simple. Begin by completing our comprehensive health assessment, which helps us understand your current health status, goals, and needs. Based on your assessment, we'll recommend the most appropriate program and create a personalized plan. You can start the assessment online, and our team will guide you through the next steps.",
      },
      {
        question: "What is the investment for Mendiv programs?",
        answer:
          "Investment varies depending on the program selected, level of support needed, and specific services included. Pricing is customized based on your requirements. We offer various packages to suit different needs and budgets. Please contact us for detailed pricing information tailored to your goals.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Results vary by individual and program. Most clients report initial improvements in energy and sleep quality within 2-4 weeks. Measurable biomarker changes typically appear within 8-12 weeks. Long-term optimization—including metabolic rebalancing and cognitive enhancement—unfolds over 6-12 months. Our approach prioritizes sustainable, compounding improvements over quick fixes.",
      },
      {
        question: "Do you offer consultations before committing to a program?",
        answer:
          "Yes, we offer consultation calls to discuss your goals, answer questions, and determine if Mendiv is the right fit for you. These consultations help us understand your needs and provide recommendations for the best program and approach for your situation.",
      },
    ],
  },
]

export default function FaqPage() {
  const [openQuestion, setOpenQuestion] = useState<{ sectionIndex: number; questionIndex: number } | null>(null)

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    const key = `${sectionIndex}-${questionIndex}`
    if (openQuestion?.sectionIndex === sectionIndex && openQuestion?.questionIndex === questionIndex) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion({ sectionIndex, questionIndex })
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Dark Blue Header Section */}
      <section className="relative bg-primary text-white py-32 px-6 lg:px-8 min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold leading-tight max-w-4xl">
            Frequently Asked
            <br />
            Questions
          </h1>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-16">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Section Title */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>

                {/* Right Column - FAQ Items for this Section */}
                <div className="space-y-0">
                  {section.questions.map((faq, questionIndex) => (
                    <div key={questionIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                        className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                      >
                        <span className="font-medium text-lg text-gray-900 pr-8">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${openQuestion?.sectionIndex === sectionIndex &&
                            openQuestion?.questionIndex === questionIndex
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>

                      {openQuestion?.sectionIndex === sectionIndex &&
                        openQuestion?.questionIndex === questionIndex && (
                          <div className="pb-6 pt-2">
                            <div className="text-gray-600 leading-relaxed">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

