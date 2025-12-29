"use client";

import Image from "next/image";

const founders = [
  {
    name: "Mr. OA Vahab",
    role: "Managing Director, Tree G Group",
    img: "/founders/oavahab.jpg",
  },
  {
    name: "Dr. Muhammed Hussain KM",
    role: "MBBS, MMST (IIT Kharagpur)",
    img: "/founders/drhuzain.jpg",
  },
  {
    name: "Mr. SALEEQUE MP",
    role: "AI Consultant | DeepTech Architect",
    img: "/founders/saleeque.png",
  },
  {
    name: "Dr. Abdussalam OK",
    role: "M.Phil Clinical Psychology",
    img: "/founders/aslam.jpg",
  },
  {
    name: "Mr. Aslam Sidheek",
    role: "MBBS (AIIMS), MD Psychiatry (NIMHANS)",
    img: "/founders/abdusalam.png",
  },
];

export default function ExpandingFounderStrip() {
  return (
    <div className="w-full py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            The Founders Behind Mendiv
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto">
            Visionaries shaping the future of wellness, longevity, and human performance.
          </p>
        </div>

        {/* Grid Layout for Founders - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Portrait Image - Square with rounded corners */}
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-gray-900">
                <Image
                  src={founder.img}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: "center",
                  }}
                />
                {/* Spotlight effect overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.2) 100%)'
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="text-black text-base md:text-lg font-semibold mb-1">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-black text-sm md:text-base uppercase tracking-wide">
                {founder.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

