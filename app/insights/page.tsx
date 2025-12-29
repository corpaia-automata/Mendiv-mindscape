import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function InsightsPage() {
  const categories = ["All", "Sleep Science", "Longevity", "Epigenetics", "Performance", "Environment"]

  const articles = [
    {
      title: "The Science of Sleep Architecture: Why Deep Sleep Matters More Than Duration",
      excerpt:
        "Most people focus on sleep quantity, but quality—specifically deep sleep phases—is what truly drives recovery and cognitive performance.",
      category: "Sleep Science",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "sleep-architecture-deep-sleep",
    },
    {
      title: "Epigenetic Age Reversal: Emerging Research and Practical Applications",
      excerpt:
        "New studies show that biological age can be reversed through targeted interventions. Here's what the science says and how to apply it.",
      category: "Epigenetics",
      date: "2024-01-10",
      readTime: "12 min read",
      slug: "epigenetic-age-reversal",
    },
    {
      title: "The Circadian Code: How Light Exposure Shapes Your Health",
      excerpt:
        "Light is the most powerful regulator of your internal clock. Understanding circadian biology can transform your energy, sleep, and longevity.",
      category: "Environment",
      date: "2024-01-05",
      readTime: "10 min read",
      slug: "circadian-code-light-exposure",
    },
    {
      title: "Biomarkers That Matter: Which Tests Actually Predict Longevity",
      excerpt:
        "Not all blood tests are created equal. We break down the biomarkers with the strongest predictive value for healthspan and lifespan.",
      category: "Longevity",
      date: "2023-12-28",
      readTime: "15 min read",
      slug: "biomarkers-predict-longevity",
    },
    {
      title: "Cognitive Performance Optimization: Beyond Coffee and Nootropics",
      excerpt:
        "Peak mental performance requires more than stimulants. Learn the science-backed strategies for sustained cognitive enhancement.",
      category: "Performance",
      date: "2023-12-20",
      readTime: "11 min read",
      slug: "cognitive-performance-optimization",
    },
    {
      title: "Case Study: Reversing Metabolic Syndrome Through Personalized Protocols",
      excerpt:
        "How a 52-year-old executive reversed pre-diabetes and improved his metabolic health through targeted interventions and lifestyle optimization.",
      category: "Case Studies",
      date: "2023-12-15",
      readTime: "14 min read",
      slug: "case-study-metabolic-syndrome",
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
              Research & Insights
            </div>

            {/* Headline with gradient */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Evidence-based{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                insights
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Sleep science, longevity, epigenetics, and health optimization from the Mendiv team.
              <br />
              Stay informed with the latest research and practical strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-transparent"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <CardHeader>
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-serif text-xl leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">Stay Updated</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get the latest insights on health optimization, longevity science, and personalized medicine delivered to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <button className="px-6 py-3 rounded-md bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
