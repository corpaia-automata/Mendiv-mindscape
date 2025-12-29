"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle2, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function AssessmentPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hearAboutUs: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, this would send to a backend API
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Thank You!</h1>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            We've received your information. Our team will reach out shortly to discuss next steps.
          </p>
          <Link href="/">
            <Button size="lg" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Abstract Gradient Graphic - Top Right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] -mr-[200px] -mt-[200px] pointer-events-none z-0">
        <div className="relative w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-2 rounded-full"
              style={{
                top: `${i * 7}%`,
                left: `${i * 3}%`,
                background: `linear-gradient(90deg, transparent, hsl(${155 - i * 1.5}, 65%, ${45 + i * 1.5}%), transparent)`,
                transform: `rotate(${-18 + i * 1.2}deg)`,
                opacity: 0.6 + i * 0.02,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/mendiv.png"
            alt="Mendiv"
            width={140}
            height={50}
            className="h-8 md:h-10 w-auto"
          />
        </Link>
        <Link href="/">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-3">
            Let's get started
          </h1>
          <p className="text-base text-gray-600">
            Join thousands taking control of their health and future with Mendiv.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white w-full rounded-lg p-8 shadow-sm border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name
              </Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Enter your first name"
                className="h-12 rounded-lg border-gray-300 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name
              </Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Enter your last name"
                className="h-12 rounded-lg border-gray-300 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="h-12 rounded-lg border-gray-300 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hearAboutUs" className="text-sm font-medium text-gray-700">
                How did you hear about us?
              </Label>
              <div className="relative">
                <select
                  id="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                  className="w-full h-12 px-3 py-2 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 appearance-none cursor-pointer"
                >
                  <option value="">Select a category</option>
                  <option value="social-media">Social Media</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="referral">Friend/Colleague Referral</option>
                  <option value="podcast">Podcast</option>
                  <option value="article">Article/Blog</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg text-base font-medium shadow-sm"
          >
            Continue
          </Button>

          <p className="text-xs text-gray-600 text-center leading-relaxed px-2">
            By continuing, you agree to receive emails about Mendiv as described in our{" "}
            <Link href="/privacy" className="text-gray-900 hover:underline font-medium">
              Privacy Policy
            </Link>
            . You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </main>
  )
}
