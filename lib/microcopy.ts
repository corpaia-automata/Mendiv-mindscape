/**
 * Micro-copy definitions for buttons, cards, and interactive elements
 * Concise, conversion-optimized copy that respects user intelligence
 */

export const microcopy = {
  buttons: {
    cta: {
      primary: {
        startAssessment: "Start Assessment",
        bookConsultation: "Book Consultation",
        getStarted: "Get Started",
        scheduleCall: "Schedule a Call",
        learnMore: "Learn More",
        viewPrograms: "View Programs",
        takeAssessment: "Take Assessment",
      },
      secondary: {
        contactUs: "Contact Us",
        viewFaq: "Visit our FAQ",
        explorePrograms: "Explore Programs",
        downloadGuide: "Download Guide",
        readMore: "Read More",
      },
      link: {
        learnMoreArrow: "Learn More →",
        exploreServices: "Explore Services",
        viewDetails: "View Details",
      },
    },
    actions: {
      submit: "Submit",
      cancel: "Cancel",
      close: "Close",
      next: "Next",
      back: "Back",
      continue: "Continue",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
    },
    navigation: {
      home: "Home",
      about: "About",
      programs: "Programs",
      contact: "Contact",
      insights: "Insights",
    },
  },

  cards: {
    cta: {
      learnMore: "Learn More",
      exploreProgram: "Explore Program",
      viewDetails: "View Details",
      getStarted: "Get Started",
    },
    metadata: {
      duration: "Duration",
      whoFor: "Ideal For",
      outcomes: "Key Outcomes",
      includes: "Includes",
    },
    states: {
      featured: "Featured Program",
      new: "New",
      popular: "Popular",
      comingSoon: "Coming Soon",
    },
  },

  labels: {
    sections: {
      about: "ABOUT US",
      method: "OUR METHOD",
      learnMore: "LEARN MORE",
      programs: "OUR PROGRAMS",
      services: "OUR SERVICES",
    },
    steps: {
      step: "Step",
      step1: "Step 1",
      step2: "Step 2",
      step3: "Step 3",
    },
  },

  placeholders: {
    form: {
      name: "Your name",
      email: "your@email.com",
      phone: "+1 (555) 000-0000",
      message: "Tell us about your goals...",
      company: "Company name",
    },
    search: {
      search: "Search programs, insights...",
      filter: "Filter by category",
    },
  },

  messages: {
    success: {
      formSubmitted: "Thank you. We'll be in touch soon.",
      assessmentStarted: "Assessment started. Complete it at your own pace.",
      consultationScheduled: "Consultation scheduled. Check your email for details.",
    },
    error: {
      formError: "Please check your information and try again.",
      generic: "Something went wrong. Please try again.",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
    },
    loading: {
      submitting: "Submitting...",
      loading: "Loading...",
      processing: "Processing...",
    },
  },

  tooltips: {
    assessment: "Complete our health assessment to get personalized insights",
    consultation: "Schedule a 30-minute consultation with our team",
    programs: "Explore our comprehensive health optimization programs",
    digitalTwin: "Your personalized health model that evolves with you",
  },

  aria: {
    buttons: {
      menuToggle: "Toggle navigation menu",
      closeMenu: "Close navigation menu",
      expandFaq: "Expand question",
      collapseFaq: "Collapse question",
      nextSlide: "Next slide",
      previousSlide: "Previous slide",
    },
    navigation: {
      main: "Main navigation",
      footer: "Footer navigation",
      breadcrumb: "Breadcrumb navigation",
    },
  },
} as const

