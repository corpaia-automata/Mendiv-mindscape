import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhoHealthDomains } from "@/components/who-health-domains"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Brain, Home, Target, Shield, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BioAlignPage() {
  const pillars = [
    {
      icon: Dna,
      title: "Internal Biological Optimization",
      description:
        "DNA analysis, epigenetics, biomarker tracking, and personalized nutrition and supplementation protocols.",
      details: [
        "Comprehensive genetic and epigenetic assessment",
        "Advanced biomarker panels (metabolic, hormonal, inflammatory)",
        "Personalized nutrition based on your biology",
        "Targeted supplementation protocols",
        "Biological age tracking and reversal strategies",
      ],
    },
    {
      icon: Brain,
      title: "Mental & Emotional Alignment",
      description:
        "Cognitive optimization, habit formation, emotional regulation, and mental clarity through evidence-based protocols.",
      details: [
        "Cognitive performance assessment and enhancement",
        "Science-backed habit design and implementation",
        "Emotional regulation and stress management",
        "Sleep architecture optimization",
        "Peak performance state cultivation",
      ],
    },
    {
      icon: Home,
      title: "External Environment Engineering",
      description:
        "AI-powered spaces, sensory optimization, and environmental factors that impact your health and performance.",
      details: [
        "Smart home health integration",
        "Circadian rhythm optimization (light, temperature)",
        "Air and water quality assessment",
        "EMF and environmental toxin reduction",
        "Workspace and living space optimization",
      ],
    },
  ]

  const outcomes = [
    {
      icon: Target,
      title: "Enhanced Quality of Life",
      description: "Measurable improvements in energy, mental clarity, physical performance, and overall well-being.",
    },
    {
      icon: TrendingUp,
      title: "Extended Longevity",
      description: "Science-backed strategies to slow biological aging and prevent age-related disease.",
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Proactive protocols to reduce risk factors for chronic diseases before they manifest.",
    },
  ]

  const qualifications = [
    "You're committed to a 6-12 month transformation journey",
    "You value data-driven approaches over quick fixes",
    "You're willing to invest in comprehensive testing and analysis",
    "You seek measurable, sustainable improvements",
    "You understand that optimization is a personalized process",
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
              BioAlign Program
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Optimize your biology for{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                longevity
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Comprehensive biological optimization through DNA analysis, epigenetics, biomarkers, and personalized protocols.
              <br />
              Align your biology, mind, and environment for maximum quality of life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Apply for BioAlign™
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

      {/* What BioAlign Is */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-center">What BioAlign™ Is</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              BioAlign™ is not a wellness program. It's a complete life-engineering ecosystem designed for
              high-performers who demand measurable results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We combine cutting-edge biological testing, advanced data analytics, and personalized protocols to create
              a comprehensive optimization strategy tailored to your unique genetic makeup, lifestyle, and goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The result is a systematic approach to improving your quality of life, extending your healthspan, and
              preventing disease before it starts.
            </p>
          </div>
        </div>
      </section>

      {/* WHO's 10 Dimensions of Health */}
      <WhoHealthDomains />


      {/* Three Pillars */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">Three Pillars of BioAlign</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A holistic approach that addresses every dimension of human optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl mb-2">{pillar.title}</CardTitle>
                    <CardDescription className="text-base">{pillar.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Twin Integration */}
      <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">Digital Twin Integration</h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Every BioAlign™ member receives full access to their Digital Twin—a living model of your health that
            continuously learns from your data, adapts to your progress, and provides real-time insights and
            recommendations.
          </p>
          <Link href="/digital-twin">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Learn About Digital Twin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Expected Outcomes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What you can expect from completing the BioAlign™ program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <outcome.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="font-serif text-2xl">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Ready to Transform?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Apply for BioAlign™ and begin your journey to optimal health, clarity, and longevity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/assessment">
              <Button size="lg" className="px-8">
                Apply for BioAlign™
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
