import { Globe, Laptop, Building2, Handshake } from "lucide-react"

export function GlobalSection() {
  const features = [
    {
      icon: Laptop,
      title: "Online Platform",
      description: "Access your Digital Twin, protocols, and insights from anywhere.",
    },
    {
      icon: Building2,
      title: "Offline Centres",
      description: "Premium physical locations for assessments and advanced treatments.",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description: "Partnerships with leading research institutions and health organizations.",
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Serving clients in North America, Europe, Middle East, and Asia.",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">Global Readiness</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A unified ecosystem designed for international scale and accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-xl">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
