export function AboutSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Small ABOUT US label */}
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-8">
            ABOUT US
          </p>

          {/* Main content - all text black */}
          <div className="text-4xl sm:text-4xl md:text-2xl text-justify font-light leading-tight text-black">
            <p className="mb-4">
              Mendiv is a global life-engineering platform dedicated to optimizing quality of life and long-term longevity through a systems-driven approach to human health.
            </p>
            <p>
              By aligning biology, mind, and environment through data intelligence, personalized interventions, and intentional design, Mendiv transforms fragmented wellness practices into a measurable, sustainable, and continuously evolving health experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

