export function AboutSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left">
          {/* Small ABOUT US label */}
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-8">
            ABOUT US
          </p>
          
          {/* Main content with alternating colors */}
          <div className="text-4xl sm:text-4xl md:text-5xl text-left md:text-justify font-light leading-tight">
            <p className="mb-4">
              <span className="text-primary">Mendiv</span>{" "}
              <span className="text-gray-400">is a</span>{" "}
              <span className="text-primary">global</span>{" "}
              <span className="text-gray-400">life-engineering</span>{" "}
              <span className="text-primary">platform</span>{" "}
              <span className="text-gray-400">focused on</span>{" "}
              <span className="text-primary">optimizing</span>{" "}
              <span className="text-gray-400">quality of life</span>{" "}
              <span className="text-primary">and</span>{" "}
              <span className="text-gray-400">longevity.</span>
            </p>
            <p>
              <span className="text-primary">We align</span>{" "}
              <span className="text-gray-400">biology, mind, and</span>{" "}
              <span className="text-primary">environment</span>{" "}
              <span className="text-gray-400">through</span>{" "}
              <span className="text-primary">data-driven</span>{" "}
              <span className="text-gray-400">insights,</span>{" "}
              <span className="text-primary">personalized</span>{" "}
              <span className="text-gray-400">interventions, and</span>{" "}
              <span className="text-primary">intelligent</span>{" "}
              <span className="text-gray-400">design </span>{" "}
              <span className="text-primary">transforming</span>{" "}
              <span className="text-gray-400">health into a</span>{" "}
              <span className="text-primary">measurable,</span>{" "}
              <span className="text-gray-400">sustainable</span>{" "}
              <span className="text-primary">experience.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

