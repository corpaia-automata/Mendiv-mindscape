import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProblemSection } from "@/components/problem-section"
import { MethodSection } from "@/components/method-section"
import { PillarsSection } from "@/components/pillars-section"
import { WhyMendivSection } from "@/components/why-mendiv-section"
import { GlobalSection } from "@/components/global-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import BeforeAfterSection from "@/components/BeforeAfterSection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <MethodSection />
      <BeforeAfterSection />
      <PillarsSection />
      <WhyMendivSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
