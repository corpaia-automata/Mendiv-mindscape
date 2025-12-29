import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="w-full text-left sm:text-center max-w-5xl mx-auto pt-20">
        <div className="space-y-1">
          <div className="">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-base tracking-tight text-white">
              Unlock Your Biological Age Today
            </h1>
          </div>

          <div className="max-w-5xl mx-auto pt-8">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-light">
              Discover your true biological age and take control of your longevity journey with personalized insights and actionable strategies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 pt-8">
            <Link href="/assessment" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12">
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-12 border-2 border-white text-white bg-transparent hover:bg-white/10">
                Book Consultation
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
