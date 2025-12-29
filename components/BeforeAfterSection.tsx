
import { X, CheckCircle2, Activity, Moon, TrendingDown, Brain, Database, Zap, Target, Heart } from "lucide-react"

const beforeItems = [
  {
    icon: Activity,
    title: "Fragmented Health",
    description: "Disconnected data and conflicting advice.",
  },
  {
    icon: Moon,
    title: "Poor Sleep",
    description: "Chronic fatigue and low recovery.",
  },
  {
    icon: TrendingDown,
    title: "Accelerated Aging",
    description: "Lifestyle-driven biological decline.",
  },
  {
    icon: Brain,
    title: "Mental Misalignment",
    description: "Stress, overload, and emotional imbalance.",
  },
]

const afterItems = [
  {
    icon: Database,
    title: "Integrated Health Intelligence",
    description: "Unified data with clear, actionable direction.",
  },
  {
    icon: Zap,
    title: "Restorative Sleep",
    description: "Consistent recovery and sustainable energy.",
  },
  {
    icon: Target,
    title: "Optimized Longevity",
    description: "Biological age aligned with long-term intent.",
  },
  {
    icon: Heart,
    title: "Mental Clarity & Balance",
    description: "Focus, emotional stability, and resilience.",
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
              Engineering Better Health Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto">
          Mendiv applies systems thinking to human health aligning biological data, behavior, and environment to improve quality of life and longevity.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">

          {/* Divider with Arrow */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-[8px] border-l-green-500 border-y-[6px] border-y-transparent"></div>
            </div>
          </div>
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

          {/* BEFORE */}
          <div className="relative">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                <X className="w-4 h-4 text-red-600" />
                <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
                  Before Mendiv
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {beforeItems.map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div className="relative">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                  After Mendiv
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {afterItems.map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white border-2 border-green-100 rounded-lg shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
