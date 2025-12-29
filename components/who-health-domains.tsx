import Image from "next/image"

export function WhoHealthDomains() {
  const domains = [
    {
      name: "Physical",
      description: "Biological function, energy levels, recovery, and physiological resilience.",
      hasImage: true,
    },
    {
      name: "Mental",
      description: "Cognitive clarity, focus, memory, and psychological performance.",
      hasImage: false,
    },
    {
      name: "Emotional",
      description: "Emotional regulation, stress response, and inner stability.",
      hasImage: true,
    },
    {
      name: "Social",
      description: "Quality of relationships, communication, and social connection.",
      hasImage: false,
    },
    {
      name: "Spiritual",
      description: "Sense of purpose, meaning, and internal alignment.",
      hasImage: true,
    },
    {
      name: "Environmental",
      description: "Impact of surroundings including light, air, sound, and space.",
      hasImage: false,
    },
    {
      name: "Occupational",
      description: "Work-life balance, performance sustainability, and burnout prevention.",
      hasImage: true,
    },
    {
      name: "Intellectual",
      description: "Learning capacity, curiosity, adaptability, and mental growth.",
      hasImage: false,
    },
    {
      name: "Financial",
      description: "Financial stability, security, and stress reduction.",
      hasImage: true,
    },
    {
      name: "Cultural",
      description: "Values, identity, traditions, and cultural alignment.",
      hasImage: false,
    },
  ]

  // Split into rows: 4, 3, 3
  const row1 = domains.slice(0, 4)
  const row2 = domains.slice(4, 7)
  const row3 = domains.slice(7, 10)

  const renderCard = (domain: typeof domains[0], index: number) => {
    if (domain.hasImage) {
      return (
        <div
          key={index}
          className="relative h-[300px] overflow-hidden group cursor-pointer"
        >
          <Image
            src="/meditation.png"
            alt={domain.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-serif text-xl font-semibold mb-2">{domain.name}</h3>
            <p className="text-sm text-white/90 leading-relaxed">{domain.description}</p>
          </div>
        </div>
      )
    }

    return (
      <div
        key={index}
        className="h-[300px] p-6 bg-card border border-border/50 transition-all duration-200 flex flex-col justify-center"
      >
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          {domain.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {domain.description}
        </p>
      </div>
    )
  }

  return (
    <section className="py-16 px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            WHO's 10 Dimensions of Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive framework Mendiv uses to align health, performance, and longevity across the full human system.
          </p>
        </div>

        {/* WHO Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-7xl mx-auto">
            <Image
              src="/who.png"
              alt="WHO Health Dimensions"
              width={600}
              height={300}
              className="w-full h-auto object-contain"
              sizes="(max-width: 500px) 100vw, (max-width: 1024px) 50vw, 1200px"
            />
          </div>
        </div>


      </div>
    </section>
  )
}

