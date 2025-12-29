/**
 * JSON-ready content blocks for Mendiv
 * Structured, reusable content definitions
 */

export const contentBlocks = {
  hero: {
    title: "Unlock Your Biological Age Today",
    subtitle: "Discover your true biological age and take control of your longevity journey with personalized insights and actionable strategies.",
    cta: {
      primary: {
        text: "Start Assessment",
        href: "/assessment",
      },
      secondary: {
        text: "Book Consultation",
        href: "/contact",
      },
    },
  },

  about: {
    label: "ABOUT US",
    paragraphs: [
      {
        text: [
          { word: "Mendiv", highlight: true },
          { word: "is a", highlight: false },
          { word: "global", highlight: true },
          { word: "life-engineering", highlight: false },
          { word: "platform", highlight: true },
          { word: "focused on", highlight: false },
          { word: "optimizing", highlight: true },
          { word: "quality of life", highlight: false },
          { word: "and", highlight: true },
          { word: "longevity.", highlight: false },
        ],
      },
      {
        text: [
          { word: "We align", highlight: true },
          { word: "biology, mind, and", highlight: false },
          { word: "environment", highlight: true },
          { word: "through", highlight: false },
          { word: "data-driven", highlight: true },
          { word: "insights,", highlight: false },
          { word: "personalized", highlight: true },
          { word: "interventions, and", highlight: false },
          { word: "intelligent", highlight: true },
          { word: "design", highlight: false },
          { word: "transforming", highlight: true },
          { word: "health into a", highlight: false },
          { word: "measurable,", highlight: true },
          { word: "sustainable", highlight: false },
          { word: "experience.", highlight: true },
        ],
      },
    ],
  },

  method: {
    label: "OUR METHOD",
    title: "How Mendiv Works",
    description: "Mendiv delivers the most advanced approach to preventive care, translating deep diagnostics into personalized insights and pairing them with expert-led support built around you.",
    steps: [
      {
        number: 1,
        title: "Complete your health assessment",
        description: "This isn't an annual physical. It's the most complete health evaluation available, with 30+ advanced diagnostics completed in a single day.",
        image: "/step1.png",
      },
      {
        number: 2,
        title: "Review your results",
        description: "Our team translates your results into a detailed risk profile, which you'll review 1:1 with a Mendiv doctor a few weeks after your visit.",
        image: "/step2.png",
      },
      {
        number: 3,
        title: "Improve your health",
        description: "Your personalized plan continues virtually with expert guidance on exercise, nutrition, and follow-up testing tailored to your risk profile.",
        image: "/step3.png",
      },
    ],
  },

  problem: {
    title: "The Problem",
    subtitle: "Modern life is creating a health crisis for high-performers.",
    items: [
      {
        title: "Fragmented Health",
        description: "Disconnected data, contradictory advice, no unified approach.",
      },
      {
        title: "Poor Sleep",
        description: "Chronic fatigue affecting performance, mood, and longevity.",
      },
      {
        title: "Accelerated Aging",
        description: "Preventable decline driven by lifestyle misalignment.",
      },
      {
        title: "Mental Misalignment",
        description: "Stress, cognitive decline, and emotional dysregulation.",
      },
    ],
  },

  pillars: {
    title: "Core Pillars",
    subtitle: "Three interconnected systems working together for optimal results.",
    items: [
      {
        title: "BioAlign™",
        tagline: "Full Life Optimization",
        description: "Comprehensive biological optimization through DNA analysis, epigenetics, biomarkers, and personalized protocols.",
        link: "/bioalign",
      },
      {
        title: "NeuroSleep™",
        tagline: "Precision Sleep Reset",
        description: "End chronic fatigue with precision sleep science and nervous system optimization.",
        link: "/neurosleep",
      },
      {
        title: "Digital Twin",
        tagline: "Your Health Intelligence",
        description: "A living model of your health that learns, adapts, and guides your optimization journey.",
        link: "/digital-twin",
      },
    ],
  },

  whyMendiv: {
    title: "Why Mendiv Is Different",
    subtitle: "We're not another wellness program. We're a life-engineering platform.",
    items: [
      {
        title: "Data-Driven",
        description: "Every decision backed by comprehensive biological and behavioral data.",
      },
      {
        title: "Personalized",
        description: "No generic programs. Your protocols are built specifically for you.",
      },
      {
        title: "Measurable Outcomes",
        description: "Track real improvements in biomarkers, sleep quality, and life performance.",
      },
      {
        title: "Digital + Physical Ecosystem",
        description: "Seamless integration between online platform and offline centers.",
      },
    ],
  },

  faq: {
    label: "LEARN MORE",
    title: "Frequently asked questions",
    cta: {
      text: "Visit our FAQ",
      href: "/faq",
    },
    items: [
      {
        question: "What makes Mendiv different from wellness programs?",
        answer: "Mendiv is not a wellness program—it's a precision health intelligence platform. We don't offer generic advice or one-size-fits-all solutions. Instead, we build a Digital Twin of your biology using continuous biomarker tracking, advanced diagnostics, and AI-driven analysis. Every protocol is personalized to your unique physiology and adapts in real-time as your body changes.",
      },
      {
        question: "Is this medical treatment?",
        answer: "Mendiv is not a medical treatment or a replacement for medical care. We are a health optimization platform that works alongside your existing healthcare providers. Our protocols focus on lifestyle interventions, nutritional optimization, and performance enhancement. We do not diagnose, treat, or cure medical conditions. Always consult with your physician before making significant health changes.",
      },
      {
        question: "Who is Mendiv for?",
        answer: "Mendiv is designed for high-performing executives, entrepreneurs, and professionals who demand measurable results. Our clients are typically 35-55 years old, experiencing early signs of cognitive or physical decline, and seeking data-driven solutions rather than generic wellness advice. We work with individuals who view health as an investment in long-term performance, not a quick fix.",
      },
      {
        question: "How long does it take to see results?",
        answer: "Results vary by individual and program. Most clients report initial improvements in energy and sleep quality within 2-4 weeks. Measurable biomarker changes typically appear within 8-12 weeks. Long-term optimization—including metabolic rebalancing and cognitive enhancement—unfolds over 6-12 months. Our approach prioritizes sustainable, compounding improvements over quick fixes.",
      },
      {
        question: "Is Mendiv available globally?",
        answer: "Yes. Mendiv operates globally with clients across North America, Europe, the Middle East, and Asia. Our platform is fully remote—consultations, testing coordination, and ongoing support are delivered digitally. We partner with local laboratories and practitioners worldwide to ensure seamless testing and protocol implementation, regardless of your location.",
      },
    ],
  },
} as const

