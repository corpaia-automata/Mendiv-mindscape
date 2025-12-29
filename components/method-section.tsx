import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MethodSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="text-left md:text-center mb-10">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">OUR METHOD</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How Mendiv Works
          </h2>
          <p className="text-lg text-gray-600 max-w-5xl md:mx-auto mb-2 leading-relaxed">
            Mendiv delivers the most advanced approach to preventive care, translating deep diagnostics into personalized insights and pairing them with expert-led support built around you.
          </p>
        </div>

        {/* Three Step Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Step 1 */}
          <div className="flex flex-col">
            <img
              src="/step1.png"
              alt="Complete your health assessment"
              className="w-full h-96 mb-6 rounded-lg object-contain"
            />
            <div className="space-y-4">
              <div className="inline-block bg-gray-200 px-3 py-1 rounded">
                <p className="text-sm text-gray-600 uppercase tracking-wide">Step 1</p>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Complete your health assessment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This isn't an annual physical. It's the most complete health evaluation available, with 30+ advanced diagnostics completed in a single day.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <img
              src="/step2.png"
              alt="Review your results"
              className="w-full h-96 mb-6 rounded-lg object-contain"
            />
            <div className="space-y-4">
              <div className="inline-block bg-gray-200 px-3 py-1 rounded">
                <p className="text-sm text-gray-600 uppercase tracking-wide">Step 2</p>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Review your results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team translates your results into a detailed risk profile, which you'll review 1:1 with a Mendiv doctor a few weeks after your visit.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <img
              src="/step3.png"
              alt="Improve your health"
              className="w-full h-96 mb-6 rounded-lg object-contain"
            />
            <div className="space-y-4">
              <div className="inline-block bg-gray-200 px-3 py-1 rounded">
                <p className="text-sm text-gray-600 uppercase tracking-wide">Step 3</p>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Improve your health
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your personalized plan continues virtually with expert guidance on exercise, nutrition, and follow-up testing tailored to your risk profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
