"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import ExpandingFounderStrip from "@/components/founder-section"

export default function AboutPage() {
  const values = [
    {
      title: "Truth",
      description:
        "We commit to honest, transparent communication and evidence-based insights. No hype, no false promises—only what the data reveals and what science validates.",
    },
    {
      title: "Compassion",
      description: "Every individual's health journey is unique. We approach each person with empathy, understanding, and genuine care for their well-being and success.",
    },
    {
      title: "Growth",
      description: "We believe in continuous improvement—for ourselves, our platform, and most importantly, for those we serve. Growth is a lifelong journey we share together.",
    },
    {
      title: "Alignment",
      description: "We align biology, mind, and environment. We align our methods with your goals. We align our values with our actions. Everything must connect.",
    },
    {
      title: "Science",
      description: "Every protocol, recommendation, and decision is grounded in rigorous scientific research. We let the evidence guide us, not assumptions or trends.",
    },
    {
      title: "Accountability",
      description: "We take responsibility for our outcomes and commitments. We measure what matters, track progress transparently, and hold ourselves accountable to the highest standards.",
    },
  ]

  const foundations = [
    {
      title: "WHO-Aligned Standards",
      description:
        "Our health optimization protocols align with World Health Organization guidelines and international best practices.",
    },
    {
      title: "Evidence-Based Medicine",
      description:
        "We integrate the latest research in longevity science, sleep medicine, epigenetics, and preventive health.",
    },
    {
      title: "Interdisciplinary Approach",
      description:
        "Combining insights from biology, psychology, environmental science, and data science for holistic optimization.",
    },
  ]

  // Core Values Section Component
  function CoreValuesSection({ values }: { values: Array<{ title: string; description: string }> }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)
    const valueRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.3,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = valueRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      }, observerOptions)

      valueRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })

      return () => {
        valueRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref)
        })
      }
    }, [])

    return (
      <section ref={sectionRef} className="py-24 px-6 lg:px-8 bg-white min-h-screen">
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* CORE VALUES Heading - Left Side (Sticky) */}
            <div className="lg:sticky lg:top-32 lg:self-start lg:h-screen lg:flex lg:flex-col lg:justify-start lg:pt-8">
              <div className="max-w-2xl">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">CORE VALUES</p>
                <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-900 font-bold leading-none mb-8">
                  CORE VALUES
                </h2>

                {/* Progress Indicators - Dots */}
                <div className="flex items-center gap-3 mt-8">
                  {values.map((_, index: number) => (
                    <div
                      key={index}
                      className={`transition-all duration-300 rounded-full ${index === activeIndex
                        ? "w-3 h-3 bg-gray-900"
                        : index < activeIndex
                          ? "w-2 h-2 bg-gray-400"
                          : "w-2 h-2 bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* All Values - Right Side (Scrollable) */}
            <div className="space-y-24 lg:space-y-32 lg:max-w-2xl pb-24">
              {values.map((value: { title: string; description: string }, index: number) => (
                <div
                  key={index}
                  ref={(el) => {
                    valueRefs.current[index] = el
                  }}
                  id={`value-${index}`}
                  className="text-left scroll-mt-32"
                >
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                    {value.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        {/* <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero2.png')",
          }}
        /> */}

        {/* Light Overlay for readability */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 bg-white/80 backdrop-blur-sm" />

        <div className="container max-w-5xl relative z-0 mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-primary/10 text-foreground text-sm font-medium mb-6">
              About Us
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Engineering the future of{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                health
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mb-8">
              Personalized health optimization through biology, intelligence, and environment designed for measurable long-term impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Explore Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 h-12 text-base rounded-lg"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl relative">
          {/* Vision - Left */}
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">OUR VISION</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              Take charge of your health today
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To build a global community where quality of life and longevity are intentionally designed empowering individuals to live healthier, clearer, and longer lives across every dimension of human well-being.
            </p>
          </div>

          {/* Mission - Right (offset) */}
          <div className="lg:ml-auto lg:max-w-2xl">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">OUR MISSION</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              Drive meaningful advances in healthspan
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To enable personalized longevity by integrating genetics, epigenetics, sleep science, gut health, intelligent environments, and AI-driven insights transforming health into a measurable, sustainable, and lifelong experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValuesSection values={values} />

      {/* Founders Section */}
      <section className="bg-white w-full">
        <ExpandingFounderStrip />
      </section>

      

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Join Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Begin your journey to optimal health, clarity, and longevity with Mendiv.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/assessment">
              <Button size="lg" className="px-8">
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
