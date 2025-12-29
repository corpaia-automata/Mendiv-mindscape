"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Target, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Heart, Dna, HeartPulse, CheckCircle, AlertTriangle, Utensils, Pill, Zap, Brain } from "lucide-react"
import Link from "next/link"

function LifeScriptProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Genetic & Microbiome Sampling",
      description: "Simple at-home collection of your DNA and gut microbiome samples",
    },
    {
      number: "02",
      title: "Epigenetic Lifestyle Audit",
      description: "Comprehensive analysis of your habits, environment, and behaviors",
    },
    {
      number: "03",
      title: "Data Analysis & Interpretation",
      description: "Advanced laboratory analysis of your biological markers",
    },
    {
      number: "04",
      title: "Personal LifeScript Session",
      description: "One-on-one consultation to understand your personalized blueprint",
    },
    {
      number: "05",
      title: "30-Day Follow-Up",
      description: "Alignment check and protocol adjustments based on your progress",
    },
  ]

  return (
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
                The LifeScript Process
              </h2>

              {/* Intro Text */}
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                The LifeScript journey follows a structured approach to create your personalized longevity plan, integrating comprehensive biological analysis with actionable insights.
              </p>
            </div>
          </div>

          {/* Right Side - Numbered Steps */}
          <div className="space-y-6 lg:space-y-8">
            {steps.map((step, index: number) => (
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
  )
}

export default function LifeScriptPage() {
  const features = [
    {
      icon: FileText,
      title: "Comprehensive Health Assessment",
      description: "Complete evaluation of your current health status and biological markers",
    },
    {
      icon: Target,
      title: "Personalized Health Plan",
      description: "Custom roadmap designed specifically for your biology and goals",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Continuous monitoring and adjustment of your health optimization journey",
    },
    {
      icon: Heart,
      title: "Longevity Focus",
      description: "Evidence-based protocols to extend healthspan and improve quality of life",
    },
  ]

  const lifescriptDimensions = [
    {
      icon: Dna,
      title: "Genetics",
      description: "Your unique biological tendencies and predispositions",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Sparkles,
      title: "Epigenetics",
      description: "The habits and behaviors turning your genes on or off",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: HeartPulse,
      title: "Gut Microbiome",
      description: "The engine of immunity, mood, and metabolism",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const benefits = [
    {
      phase: "Initial",
      duration: "Weeks 1-4",
      results: [
        "Baseline health assessment",
        "Personalized plan development",
        "Initial protocol implementation",
        "First progress measurements",
      ],
    },
    {
      phase: "Optimization",
      duration: "Months 2-6",
      results: [
        "Improved biomarker profiles",
        "Enhanced energy and vitality",
        "Better sleep and recovery",
        "Increased cognitive performance",
      ],
    },
    {
      phase: "Long-term",
      duration: "Months 6+",
      results: [
        "Sustained health improvements",
        "Reduced biological age markers",
        "Optimized longevity protocols",
        "Peak performance maintenance",
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
              LifeScript Program
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your Personalized{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                Longevity Plan
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              A comprehensive, data-driven approach to optimizing your health, extending your healthspan, and maximizing your quality of life through personalized protocols and continuous monitoring.
              <br />
              Create your roadmap to optimal health and longevity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Start Your LifeScript
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

      {/* What is LifeScript */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-center">
            What is Lifescript
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              LifeScript is a comprehensive health optimization program that creates a personalized roadmap for your longevity journey. Based on your unique biology, genetics, and lifestyle, we develop a detailed plan that addresses every aspect of your health.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From nutrition and exercise to sleep and stress management, LifeScript provides you with the tools, insights, and support needed to achieve and maintain optimal health throughout your life.
            </p>
          </div>
        </div>
      </section>

      {/* What LifeScript Does */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              What LifeScript Does
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              LifeScript provides comprehensive biological analysis across three critical dimensions, giving you actionable insights into your unique health blueprint.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Analyzes your genetic tendencies",
                description: "Uncover your inherited biological patterns and predispositions through advanced DNA analysis",
              },
              {
                title: "Measures epigenetic markers (modifiable behaviors)",
                description: "Track how your lifestyle choices influence gene expression and biological function",
              },
              {
                title: "Maps your gut microbiome balance",
                description: "Understand the composition and health of your gut ecosystem and its impact on immunity, mood, and metabolism",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300 flex items-start gap-6"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The LifeScript Process */}
      <LifeScriptProcessSection />

      {/* The Problems It Solves */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              The Problems It Solves
            </h2>
            <p className="text-md sm:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              LifeScript addresses the root causes of common health challenges by providing personalized insights into your unique biology, helping you overcome persistent issues that traditional approaches often miss.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Chronic fatigue",
              "Inflammation",
              "Stress intolerance",
              "Vitamin deficiencies",
              "Food intolerances",
              "Emotional instability",
              "Metabolic slowdown",
              "Poor detox capacity",
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 border border-gray-100"
              >
                {/* Teal Checkmark Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Problem Text */}
                <p className="text-base font-semibold text-foreground">{problem}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* LifeScript Outcomes */}
      {/* <section className="py-20 px-6 lg:px-8 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              LifeScript Outcomes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Through comprehensive biological analysis and personalized protocols, LifeScript delivers actionable insights and sustainable improvements across all dimensions of your health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                text: "Clear understanding of your biological risks",
              },
              {
                icon: Utensils,
                text: "Personalized nutrition",
              },
              {
                icon: Pill,
                text: "Supplement pathways",
              },
              {
                icon: Zap,
                text: "Energy enhancement",
              },
              {
                icon: Brain,
                text: "Mood & emotional stability",
              },
            ].map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
      {/* <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <outcome.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                <p className="text-base font-semibold text-foreground">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>  */}

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Decode your LifeScript.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Begin your personalized health optimization journey with our comprehensive assessment.
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
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

