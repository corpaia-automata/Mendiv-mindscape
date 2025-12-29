import Image from "next/image"

export function WhyMendivSection() {
  const differentiators = [
    {
      number: "01",
      title: "Data-Driven",
      description: "Every decision backed by comprehensive biological and behavioral data.",
    },
    {
      number: "02",
      title: "Personalized",
      description: "No generic programs. Your protocols are built specifically for you.",
    },
    {
      number: "03",
      title: "Measurable Outcomes",
      description: "Track real improvements in biomarkers, sleep quality, and life performance.",
    },
    {
      number: "04",
      title: "Digital + Physical Ecosystem",
      description: "Seamless integration between online platform and offline centers.",
    },
  ]

  return (
    <section className="py-24 px-2 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            A New Standard for Human Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Mendiv unifies biology, mind, and environment into a single intelligent system designed for measurable quality of life and longevity.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative w-full h-full min-h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/meditation.png"
              alt="Meditation and wellness"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right side - Differentiators in 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl opacity-50 font-bold text-primary mb-4 font-mono tracking-tight">
                  {item.number}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
