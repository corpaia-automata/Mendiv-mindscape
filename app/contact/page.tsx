"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, this would send to a backend API
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@mendiv.com",
      link: "mailto:hello@mendiv.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 88913 23977",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Manjeri, Kerala, India",
      link: null,
    },
  ]

  if (submitted) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-24 px-6 lg:px-8">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">Message Sent</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <Button size="lg" onClick={() => (window.location.href = "/")}>
              Return to Home
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Dark Blue Hero Section */}
      <section className="relative bg-primary text-white py-32 px-6 lg:px-8 min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight max-w-4xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section - Two Column Layout */}
      <section className="pt-24 pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - "Let's get in Touch" Heading */}
            <div className="flex flex-col justify-center lg:min-h-[600px]">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8">
                Let's get in{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>

              {/* Contact Info */}
              <div className="space-y-6 mt-2">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-foreground transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a subject</option>
                        <option value="consultation">Schedule a Consultation</option>
                        <option value="program-info">Program Information</option>
                        <option value="pricing">Pricing & Investment</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                      />
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and consent to be contacted by our team.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Additional CTA */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Prefer to Start with an Assessment?</h2>
          <p className="text-muted-foreground mb-8">
            Take our comprehensive assessment to get personalized program recommendations.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent"
            onClick={() => (window.location.href = "/assessment")}
          >
            Start Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
