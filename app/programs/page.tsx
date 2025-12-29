import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Brain, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  const programs = [
    {
      icon: Dna,
      name: "BioAlign™",
      tagline: "Full Life Optimization",
      description:
        "A comprehensive life-engineering program that optimizes your biology, mind, and environment for maximum quality of life and longevity.",
      whoFor: "Executives, entrepreneurs, and high-performers seeking complete health transformation",
      outcomes: [
        "Improved biomarkers and biological age",
        "Enhanced cognitive performance and mental clarity",
        "Optimized sleep and energy levels",
        "Personalized longevity protocols",
        "Smart environment integration",
      ],
      duration: "6-12 months",
      link: "/bioalign",
      featured: true,
    },
    {
      icon: Brain,
      name: "NeuroSleep™",
      tagline: "Precision Sleep & Nervous System Reset",
      description:
        "End chronic fatigue and sleep issues with our precision sleep science program that addresses the root causes of poor sleep and nervous system dysregulation.",
      whoFor: "Professionals struggling with sleep quality, chronic fatigue, or high stress",
      outcomes: [
        "Restored sleep architecture",
        "Eliminated chronic fatigue",
        "Reduced stress and anxiety",
        "Improved recovery and performance",
        "Long-term sleep optimization",
      ],
      duration: "3-6 months",
      link: "/neurosleep",
      featured: false,
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
              Our Programs
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Choose your path to{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                optimal health
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Each program is designed with scientific rigor and personalized to your unique biology.
              <br />
              Discover the transformation journey that aligns with your goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base rounded-lg"
                >
                  Start Assessment
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

      {/* Programs Comparison */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className={`border-2 hover:border-primary/50 transition-all duration-300 ${
                  program.featured ? "lg:scale-105 border-primary/30" : ""
                }`}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    {program.featured && (
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium uppercase tracking-wider">
                        Flagship
                      </span>
                    )}
                  </div>
                  <div>
                    <CardTitle className="font-serif text-3xl mb-2">{program.name}</CardTitle>
                    <CardDescription className="text-accent font-medium text-base">{program.tagline}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-serif text-lg text-foreground">Who It's For</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{program.whoFor}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-lg text-foreground">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Duration:</span> {program.duration}
                    </p>
                    <Link href={program.link} className="block">
                      <Button className="w-full" size="lg">
                        Learn More About {program.name}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Quick Comparison</h2>
            <p className="text-muted-foreground">Choose the program that aligns with your goals</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-serif text-lg text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-serif text-lg text-foreground">BioAlign™</th>
                  <th className="text-center py-4 px-4 font-serif text-lg text-foreground">NeuroSleep™</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-4 px-4 text-muted-foreground">DNA & Epigenetic Analysis</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">—</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="py-4 px-4 text-muted-foreground">Sleep Optimization</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-muted-foreground">Biomarker Tracking</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Limited</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="py-4 px-4 text-muted-foreground">Digital Twin Access</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-muted-foreground">Environment Optimization</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Sleep-focused</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="py-4 px-4 text-muted-foreground">Longevity Protocols</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take our comprehensive assessment to determine which program is right for you.
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
