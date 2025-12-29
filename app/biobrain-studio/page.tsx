import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Target, CheckCircle2, ArrowRight, Sparkles, Activity, Stethoscope, Users, BookOpen, Moon, Heart, Home, FileText, HeartPulse, Dumbbell, Wind } from "lucide-react"
import Link from "next/link"

export default function BioBrainStudioPage() {
  const features = [
    {
      icon: Brain,
      title: "Cognitive Enhancement",
      description: "Advanced protocols to optimize brain function, memory, and mental performance",
    },
    {
      icon: Zap,
      title: "Neuroplasticity Training",
      description: "Evidence-based techniques to strengthen neural pathways and cognitive resilience",
    },
    {
      icon: Target,
      title: "Peak Mental Performance",
      description: "Unlock your cognitive potential for enhanced focus, creativity, and decision-making",
    },
    {
      icon: Activity,
      title: "Brain Health Optimization",
      description: "Comprehensive approach to maintaining and improving long-term cognitive health",
    },
  ]

  const programComponents = [
    "Cognitive assessment and baseline testing",
    "Neuroplasticity training protocols",
    "Nutrition for brain health",
    "Sleep optimization for cognition",
    "Stress management and mental clarity",
    "Supplement optimization for brain function",
    "Mental performance tracking",
    "Personalized cognitive enhancement plan",
  ]

  const outcomes = [
    {
      phase: "Foundation",
      duration: "Weeks 1-4",
      results: [
        "Cognitive baseline established",
        "Initial performance improvements",
        "Enhanced focus and clarity",
        "Improved mental energy",
      ],
    },
    {
      phase: "Enhancement",
      duration: "Months 2-6",
      results: [
        "Significant cognitive improvements",
        "Enhanced memory and recall",
        "Better decision-making capabilities",
        "Increased creativity and problem-solving",
      ],
    },
    {
      phase: "Optimization",
      duration: "Months 6+",
      results: [
        "Peak cognitive performance",
        "Sustained mental clarity",
        "Long-term brain health maintenance",
        "Advanced cognitive capabilities",
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
              BioBrain Studio Program
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your physical space for{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                guided transformation
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              An immersive offline facility where clients experience comprehensive diagnostics, personalized coaching, and hands-on interventions for accelerated health transformation.
              <br />
              Where science meets practice in a dedicated space for your wellness journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Visit the BioBrain Studio
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

      {/* Purpose */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Purpose
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An immersive offline facility where clients experience comprehensive transformation through hands-on interventions and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Stethoscope,
                text: "Diagnostics",
              },
              {
                icon: Users,
                text: "Coaching",
              },
              {
                icon: BookOpen,
                text: "Workshops",
              },
              {
                icon: Moon,
                text: "Sleep analysis",
              },
              {
                icon: Heart,
                text: "Longevity therapies",
              },
              {
                icon: Home,
                text: "Mind-body-environment integration",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text */}
                <p className="text-base font-semibold text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive in-person services designed to accelerate your transformation journey with expert guidance and real-time support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                text: "BioAlign sessions",
              },
              {
                icon: Moon,
                text: "NeuroSleep diagnostics",
              },
              {
                icon: FileText,
                text: "LifeScript interpretation",
              },
              {
                icon: Users,
                text: "Coaching & psychotherapy",
              },
              {
                icon: HeartPulse,
                text: "Gut & metabolic interventions",
              },
              {
                icon: Dumbbell,
                text: "Habit training",
              },
              {
                icon: Wind,
                text: "Meditation & breathwork rooms",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text */}
                <p className="text-base font-semibold text-foreground">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Outcomes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience accelerated transformation through personalized, hands-on guidance in our dedicated facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                text: "Faster transformation",
              },
              {
                icon: Target,
                text: "Accountability",
              },
              {
                icon: Activity,
                text: "Real-time monitoring",
              },
              {
                icon: Users,
                text: "Hands-on guidance",
              },
            ].map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <outcome.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <p className="text-base font-semibold text-foreground">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Visit the BioBrain Studio</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience transformation in our dedicated physical space designed for your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Schedule a Visit
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

