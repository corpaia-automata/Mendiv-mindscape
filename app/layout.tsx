import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mendiv - Your Next Chapter | Life Engineering Platform",
  description:
    "Mendiv is a premium life engineering platform that unlocks your biological age through personalized health optimization. Discover BioAlign, NeuroSleep, LifeScript, and Digital Twin technologies for measurable longevity and performance enhancement.",
  generator: "Next.js",
  applicationName: "Mendiv",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Mendiv",
    "mendiv",
    "life engineering",
    "health optimization",
    "longevity",
    "biological age",
    "biohacking",
    "sleep science",
    "NeuroSleep",
    "BioAlign",
    "LifeScript",
    "Digital Twin",
    "preventive health",
    "health intelligence",
    "personalized health",
    "wellness platform",
    "health optimization platform",
    "longevity science",
    "epigenetics",
    "gut microbiome",
    "biomarker tracking",
  ],
  authors: [{ name: "Mendiv" }],
  creator: "Mendiv",
  publisher: "Mendiv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.mendiv.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mendiv - Your Next Chapter | Life Engineering Platform",
    description:
      "Engineering better health, clarity, and longevity through biology, mind, and environment. A premium health intelligence platform for high-performing professionals.",
    siteName: "Mendiv",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mendiv - Life Engineering Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendiv - Your Next Chapter | Life Engineering Platform",
    description:
      "Engineering better health, clarity, and longevity through biology, mind, and environment.",
    images: ["/og-image.png"],
    creator: "@mendiv",
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
