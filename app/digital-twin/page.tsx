import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Heart, Moon, TrendingUp, Zap, RefreshCw, Lock, ArrowRight, Database, Sparkles, HeartPulse } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DigitalTwinPage() {
  const trackingCategories = [
    {
      icon: Moon,
      title: "Sleep Patterns",
      description: "Deep sleep, REM cycles, and sleep quality metrics",
    },
    {
      icon: Heart,
      title: "HRV & Stress",
      description: "Heart rate variability and stress level monitoring",
    },
    {
      icon: HeartPulse,
      title: "Gut-Mood Connection",
      description: "Microbiome health and emotional state correlations",
    },
    {
      icon: TrendingUp,
      title: "Biological Age",
      description: "Track your biological vs chronological age",
    },
    {
      icon: Sparkles,
      title: "Epigenetic Markers",
      description: "How your lifestyle affects gene expression",
    },
    {
      icon: Brain,
      title: "Energy Cycles",
      description: "Daily energy patterns and optimal performance times",
    },
  ]

  const evolutionFeatures = [
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Your Digital Twin becomes more accurate over time as it learns from your data patterns.",
    },
    {
      icon: Zap,
      title: "Predictive Insights",
      description: "Anticipate potential health issues before they manifest based on trend analysis.",
    },
    {
      icon: RefreshCw,
      title: "Adaptive Protocols",
      description: "Recommendations adjust in real-time based on your current state and progress.",
    },
    {
      icon: Database,
      title: "Integrated Intelligence",
      description: "Combines data from multiple sources to create a complete picture of your health.",
    },
  ]

  const privacyPrinciples = [
    {
      title: "Your Data, Your Control",
      description: "You own all your health data. We never sell or share it without explicit consent.",
    },
    {
      title: "Bank-Level Encryption",
      description: "All data is encrypted in transit and at rest using industry-leading security protocols.",
    },
    {
      title: "Privacy by Design",
      description: "Our systems are built with privacy as a core principle, not an afterthought.",
    },
    {
      title: "Transparent Usage",
      description: "You can see exactly how your data is being used and make informed decisions.",
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
              Digital Twin Platform
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your AI Powered Longetivity{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                Companion
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              A living model of your health that continuously learns from your data, adapts to your progress, and provides real-time insights.
              <br />
              Make data-driven decisions with precision recommendations tailored to your unique biology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Activate Digital Twin
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

      {/* What is Digital Twin */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/twin.jpg"
                alt="Digital Twin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right side - Content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">What is a Digital Twin?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your Digital Twin is a comprehensive, AI-powered model of your health that exists in digital form. It's
                  not just a dashboard or tracker—it's an intelligent system that understands your unique biology,
                  lifestyle, and goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Think of it as a living representation of your health that evolves with you. It integrates data from
                  multiple sources including  biological testing, wearable devices, lifestyle inputs, and subjective reports to create
                  a complete picture of your well-being.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result is personalized insights, predictive analytics, and adaptive recommendations that help you
                  optimize your health with precision and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Tracks */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">What Your Digital Twin Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data integration across all dimensions of your health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackingCategories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl group overflow-hidden"
              >
                <CardContent className="p-5 flex flex-col items-center text-center">
                  {/* Circular Icon with Gradient */}
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400/20 via-green-500/30 to-green-600/20 flex items-center justify-center group-hover:from-green-400/30 group-hover:via-green-500/40 group-hover:to-green-600/30 transition-all duration-300">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
                        <category.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Evolves */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">How Your Digital Twin Evolves</h2>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
              Your Digital Twin continuously improves as more data is added, delivering more accurate insights and personalized recommendations over time.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evolutionFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-xl group overflow-hidden relative"
              >
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  {/* Circular Icon with Gradient - Purple/Blue theme */}
                  <div className="mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400/20 via-green-500/30 to-green-600/20 flex items-center justify-center group-hover:from-green-400/30 group-hover:via-green-500/40 group-hover:to-green-600/30 transition-all duration-300">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 via-green-600 to-green-700 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Dashboard Preview */}
      <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">Real-Time Health Intelligence</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Access your Digital Twin through an intuitive dashboard that provides actionable insights at a glance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Health Score", value: "92/100", trend: "+5%" },
              { label: "Sleep Quality", value: "8.4/10", trend: "+12%" },
              { label: "Biological Age", value: "-3.2 yrs", trend: "Improving" },
              { label: "Stress Level", value: "Low", trend: "-18%" },
              { label: "Recovery Status", value: "97%", trend: "Optimal" },
              { label: "Energy Level", value: "High", trend: "+24%" },
            ].map((metric, index) => (
              <div key={index} className="p-6 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 mb-2">{metric.label}</p>
                <p className="text-2xl font-serif font-semibold mb-1">{metric.value}</p>
                <p className="text-sm text-primary-foreground/70">{metric.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Ready to Activate Your Digital Twin?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with a comprehensive assessment to begin building your personalized health intelligence model.
          </p>
          <Link href="/assessment">
            <Button size="lg" className="px-8">
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
