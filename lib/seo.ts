import type { Metadata } from "next"

/**
 * SEO-optimized metadata configurations
 * Structured for maximum search visibility while maintaining brand voice
 */

const baseMetadata = {
  siteName: "Mendiv",
  siteUrl: "https://mendiv.com",
  defaultTitle: "Mendiv - Your Next Chapter | Life Engineering Platform",
  defaultDescription:
    "Engineering better health, clarity, and longevity through biology, mind, and environment. A premium health intelligence platform for high-performing professionals.",
  keywords: [
    "longevity",
    "health optimization",
    "sleep science",
    "biohacking",
    "life engineering",
    "digital twin",
    "biological age",
    "preventive care",
    "health intelligence",
    "personalized health",
    "biomarker tracking",
    "cognitive optimization",
    "epigenetics",
    "precision medicine",
  ],
  author: "Mendiv",
  creator: "Mendiv",
  publisher: "Mendiv",
} as const

export const seoConfig = {
  home: {
    title: "Mendiv - Unlock Your Biological Age | Life Engineering Platform",
    description:
      "Discover your true biological age and take control of your longevity journey. Mendiv delivers personalized health optimization through advanced diagnostics, AI-driven insights, and expert guidance for high-performers.",
    keywords: [
      ...baseMetadata.keywords,
      "biological age test",
      "health assessment",
      "longevity program",
      "executive health",
    ],
    openGraph: {
      title: "Mendiv - Unlock Your Biological Age",
      description:
        "Discover your true biological age and take control of your longevity journey with personalized insights and actionable strategies.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mendiv - Unlock Your Biological Age",
      description:
        "Discover your true biological age and take control of your longevity journey.",
    },
  },

  about: {
    title: "About Mendiv | Life Engineering & Health Optimization Platform",
    description:
      "Mendiv is a global life-engineering platform focused on optimizing quality of life and longevity. We align biology, mind, and environment through data-driven insights, personalized interventions, and intelligent design.",
    keywords: [
      ...baseMetadata.keywords,
      "about mendiv",
      "life engineering",
      "health platform",
      "biotech company",
    ],
    openGraph: {
      title: "About Mendiv | Life Engineering Platform",
      description:
        "A global life-engineering platform focused on optimizing quality of life and longevity through biology, mind, and environment alignment.",
    },
  },

  programs: {
    title: "Mendiv Programs | BioAlign, NeuroSleep & Health Optimization",
    description:
      "Explore Mendiv's comprehensive health optimization programs: BioAlign™ for full life optimization, NeuroSleep™ for precision sleep reset, and Digital Twin for continuous health intelligence.",
    keywords: [
      ...baseMetadata.keywords,
      "bioalign program",
      "neurosleep program",
      "health programs",
      "optimization programs",
    ],
    openGraph: {
      title: "Mendiv Programs | Health Optimization Programs",
      description:
        "Comprehensive health optimization programs designed for high-performing professionals seeking measurable results.",
    },
  },

  bioalign: {
    title: "BioAlign™ | Full Life Optimization Program | Mendiv",
    description:
      "Comprehensive biological optimization through DNA analysis, epigenetics, biomarkers, and personalized protocols. BioAlign™ optimizes your biology, mind, and environment for maximum quality of life and longevity.",
    keywords: [
      ...baseMetadata.keywords,
      "bioalign",
      "dna analysis",
      "epigenetics",
      "biomarker tracking",
      "biological optimization",
    ],
    openGraph: {
      title: "BioAlign™ | Full Life Optimization",
      description:
        "Comprehensive biological optimization through DNA analysis, epigenetics, biomarkers, and personalized protocols.",
    },
  },

  neurosleep: {
    title: "NeuroSleep™ | Precision Sleep Reset Program | Mendiv",
    description:
      "End chronic fatigue with precision sleep science and nervous system optimization. NeuroSleep™ addresses the root causes of poor sleep through evidence-based protocols and personalized interventions.",
    keywords: [
      ...baseMetadata.keywords,
      "neurosleep",
      "sleep optimization",
      "sleep science",
      "chronic fatigue",
      "nervous system optimization",
    ],
    openGraph: {
      title: "NeuroSleep™ | Precision Sleep Reset",
      description:
        "End chronic fatigue with precision sleep science and nervous system optimization.",
    },
  },

  digitalTwin: {
    title: "Digital Twin | Your Health Intelligence Platform | Mendiv",
    description:
      "A living model of your health that learns, adapts, and guides your optimization journey. Your Digital Twin continuously evolves with real-time data and provides actionable insights for better health decisions.",
    keywords: [
      ...baseMetadata.keywords,
      "digital twin",
      "health intelligence",
      "health modeling",
      "personalized health",
      "health data platform",
    ],
    openGraph: {
      title: "Digital Twin | Your Health Intelligence",
      description:
        "A living model of your health that learns, adapts, and guides your optimization journey.",
    },
  },

  assessment: {
    title: "Health Assessment | Mendiv Comprehensive Health Evaluation",
    description:
      "Complete your comprehensive health assessment with 30+ advanced diagnostics. Get personalized insights into your biological age, biomarkers, and optimization opportunities.",
    keywords: [
      ...baseMetadata.keywords,
      "health assessment",
      "health evaluation",
      "diagnostics",
      "biological age test",
      "health screening",
    ],
    openGraph: {
      title: "Health Assessment | Comprehensive Health Evaluation",
      description:
        "The most complete health evaluation available, with 30+ advanced diagnostics completed in a single day.",
    },
  },

  contact: {
    title: "Contact Mendiv | Schedule a Consultation",
    description:
      "Get in touch with Mendiv to schedule a consultation, learn more about our programs, or discuss your health optimization goals. Available globally.",
    keywords: [
      ...baseMetadata.keywords,
      "contact mendiv",
      "schedule consultation",
      "book appointment",
    ],
    openGraph: {
      title: "Contact Mendiv | Schedule a Consultation",
      description: "Get in touch with Mendiv to discuss your health optimization goals.",
    },
  },

  insights: {
    title: "Health Insights & Research | Mendiv",
    description:
      "Evidence-based insights on longevity, health optimization, sleep science, and biological age. Stay informed with the latest research and practical strategies.",
    keywords: [
      ...baseMetadata.keywords,
      "health insights",
      "longevity research",
      "health articles",
      "biohacking tips",
    ],
    openGraph: {
      title: "Health Insights & Research | Mendiv",
      description: "Evidence-based insights on longevity, health optimization, and biological age.",
    },
  },
} as const

/**
 * Helper function to generate Next.js Metadata object from SEO config
 */
export function generateMetadata(
  page: keyof typeof seoConfig,
  overrides?: Partial<Metadata>
): Metadata {
  const config = seoConfig[page]
  const defaultImage = `${baseMetadata.siteUrl}/og-image.jpg`
  const path = page === "home" ? "" : page

  return {
    title: config.title,
    description: config.description,
    keywords: [...config.keywords],

    openGraph: {
      ...config.openGraph,
      url: `${baseMetadata.siteUrl}/${path}`,
      siteName: baseMetadata.siteName,
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: config.openGraph.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: "twitter" in config && config.twitter
      ? {
        ...config.twitter,
        images: [defaultImage],
      }
      : undefined,

    alternates: {
      canonical: `${baseMetadata.siteUrl}/${path}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    ...overrides,
  }
}
