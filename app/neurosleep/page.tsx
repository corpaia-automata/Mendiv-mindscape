import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Moon, Zap, Activity, CheckCircle2, ArrowRight, Clock, AlertCircle, Heart, Shield, HeartPulse } from "lucide-react"
import Link from "next/link"

export default function NeuroSleepPage() {
  const painPoints = [
    {
      icon: Clock,
      title: "Difficulty Falling Asleep",
      description: "Racing thoughts and inability to wind down at night",
    },
    {
      icon: Activity,
      title: "Poor Sleep Quality",
      description: "Waking frequently, unrefreshing sleep, morning fatigue",
    },
    {
      icon: AlertCircle,
      title: "Chronic Fatigue",
      description: "Persistent exhaustion despite adequate sleep hours",
    },
    {
      icon: Zap,
      title: "High Stress Load",
      description: "Nervous system dysregulation from chronic stress",
    },
  ]

  const assessmentComponents = [
    "Comprehensive sleep architecture analysis",
    "Nervous system state evaluation",
    "Circadian rhythm assessment",
    "Environmental sleep factor audit",
    "Stress and recovery balance testing",
    "Hormone and biomarker screening",
  ]

  const protocolAreas = [
    {
      title: "Sleep Architecture Repair",
      description: "Restore healthy sleep cycles and deep sleep phases through targeted interventions.",
    },
    {
      title: "Nervous System Regulation",
      description: "Balance your autonomic nervous system for optimal rest and recovery.",
    },
    {
      title: "Circadian Optimization",
      description: "Align your biological clock with natural rhythms using light, timing, and behavior.",
    },
    {
      title: "Smart Sleep Environment",
      description: "Engineer your bedroom for optimal temperature, light, sound, and air quality.",
    },
  ]

  const outcomes = [
    {
      phase: "Short-term",
      duration: "Weeks 1-4",
      results: ["Improved sleep onset time", "Reduced nighttime wakings", "Better morning energy", "Decreased anxiety"],
    },
    {
      phase: "Medium-term",
      duration: "Months 2-3",
      results: [
        "Restored sleep architecture",
        "Consistent energy throughout day",
        "Enhanced cognitive performance",
        "Improved stress resilience",
      ],
    },
    {
      phase: "Long-term",
      duration: "Months 4-6+",
      results: [
        "Sustainable sleep optimization",
        "Peak performance capacity",
        "Reduced disease risk factors",
        "Lasting lifestyle integration",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero2.png')",
          }}
        />

        {/* Light Overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-sm" />

        <div className="container max-w-5xl relative z-0 ml-0 lg:ml-8 xl:ml-16">
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-primary/10 text-foreground text-sm font-medium mb-6">
              NeuroSleep Program
            </div>

            {/* Headline with gradient on "longevity" */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Sleep is the foundation of{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                longevity
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Sleep drives DNA repair, metabolism, emotional regulation, and cognitive function.
              <br />
              Rebuild your nightly repair system and wake up energized.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Begin NeuroSleep Reset
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

      {/* Why NeuroSleep Exists */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Why NeuroSleep Exists
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most people don't have a sleep problem — they have a{" "}
              <span className="font-bold text-foreground">nervous system problem</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                text: "Circadian rhythm restoration",
              },
              {
                icon: Brain,
                text: "Nervous system balance",
              },
              {
                icon: Moon,
                text: "Deep and REM sleep",
              },
              {
                icon: Shield,
                text: "Recovery and repair",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>

                {/* Description Text */}
                <p className="text-base font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The NeuroSleep Process */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-green-900 via-green-800 to-black min-h-screen">
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Title and Intro */}
            <div className="flex flex-col justify-center">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-lg bg-green-400/20 text-white text-sm font-medium mb-6">
                  Process
                </div>

                {/* Main Title */}
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
                  The NeuroSleep Process
                </h2>

                {/* Intro Text */}
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  A systematic approach to restoring your sleep architecture and nervous system balance, combining precision assessment with personalized interventions for lasting transformation.
                </p>
              </div>
            </div>

            {/* Right Side - Numbered Steps */}
            <div className="space-y-6 lg:space-y-8">
              {[
                {
                  number: "01",
                  title: "Sleep & HRV Tracking",
                  description: "Monitor your sleep patterns and heart rate variability",
                },
                {
                  number: "02",
                  title: "Chronotype Assessment",
                  description: "Identify your natural sleep-wake rhythm and optimal timing",
                },
                {
                  number: "03",
                  title: "Nervous System Evaluation",
                  description: "Assess autonomic nervous system balance and stress response",
                },
                {
                  number: "04",
                  title: "Personalized Protocol Design",
                  description: "Create customized interventions based on your unique biology",
                },
                {
                  number: "05",
                  title: "Ongoing Optimization",
                  description: "Continuous monitoring and protocol adjustments for sustained sleep improvement",
                },
              ].map((step, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Circular Number Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-green-400/30 flex items-center justify-center">
                      <span className="text-xl font-bold text-white font-mono leading-none">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 rounded-xl bg-green-900/50 backdrop-blur-sm p-6 border border-green-800/30">
                    <h3 className="text-xl sm:text-2xl text-white font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes You Can Expect */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Outcomes You Can Expect
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Through systematic sleep architecture restoration and nervous system optimization, NeuroSleep delivers measurable improvements that transform your daily energy, mental clarity, and overall well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                text: "Wake up energized",
              },
              {
                icon: Brain,
                text: "Improved focus & creativity",
              },
              {
                icon: Heart,
                text: "Lower stress levels",
              },
              {
                icon: Shield,
                text: "Better emotional balance",
              },
              {
                icon: HeartPulse,
                text: "Strengthened immune system",
              },
              {
                icon: Moon,
                text: "Faster cellular repair",
              },
            ].map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <outcome.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Outcome Text */}
                <p className="text-base font-semibold text-foreground">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Ready to Fix Your Sleep?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with our comprehensive sleep assessment to identify the root causes of your sleep issues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/assessment">
              <Button size="lg" className="px-8">
                Start Sleep Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Book Consultation
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Duration: 3-6 months | Investment: Custom pricing</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
