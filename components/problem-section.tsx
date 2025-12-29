import { AlertTriangle, Brain, Clock, TrendingDown } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Fragmented Health",
      description: "Disconnected data, contradictory advice, no unified approach.",
    },
    {
      icon: Clock,
      title: "Poor Sleep",
      description: "Chronic fatigue affecting performance, mood, and longevity.",
    },
    {
      icon: TrendingDown,
      title: "Accelerated Aging",
      description: "Preventable decline driven by lifestyle misalignment.",
    },
    {
      icon: Brain,
      title: "Mental Misalignment",
      description: "Stress, cognitive decline, and emotional dysregulation.",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">The Problem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern life is creating a health crisis for high-performers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="space-y-4 text-center">
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <problem.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
