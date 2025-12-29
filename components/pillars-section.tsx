import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Brain, Home, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PillarsSection() {
  const pillars = [
    {
      icon: Dna,
      title: "BioAlign™",
      tagline: "Full Life Optimization",
      description:
        "Comprehensive biological optimization through DNA analysis, epigenetics, biomarkers, and personalized protocols.",
      link: "/bioalign",
      color: "from-green-600 to-green-700",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Brain,
      title: "NeuroSleep™",
      tagline: "Precision Sleep Reset",
      description: "End chronic fatigue with precision sleep science and nervous system optimization.",
      link: "/neurosleep",
      color: "from-green-600 to-green-700",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: FileText,
      title: "LifeScript",
      tagline: "Personalized Longevity Plan",
      description: "A comprehensive, data-driven approach to optimizing your health, extending your healthspan, and maximizing quality of life.",
      link: "/lifescript",
      color: "from-green-600 to-green-700",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Home,
      title: "Digital Twin",
      tagline: "Your Health Intelligence",
      description: "A living model of your health that learns, adapts, and guides your optimization journey.",
      link: "/digital-twin",
      color: "from-green-600 to-green-700",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Core Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four interconnected systems working together for optimal health outcomes and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Link key={index} href={pillar.link} className="group">
              <Card className="h-full border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                  </div>
                  <CardTitle className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {pillar.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                  <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                    <span className={`bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      Learn More
                    </span>
                    <ArrowRight className={`w-4 h-4 ${pillar.iconColor} ml-1 group-hover:translate-x-1 transition-transform`} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
