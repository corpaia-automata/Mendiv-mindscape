"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

export function Navigation() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-full px-6 py-4 shadow-lg flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mendiv.png"
              alt="Mendiv"
              width={140}
              height={50}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Center Navigation Links with Dividers */}
          <div className="hidden lg:flex items-center gap-0 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="text-sm font-medium text-black px-4"
            >
              Home
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/about"
              className="text-sm font-medium text-black px-4"
            >
              About
            </Link>
            <span className="text-white/30">|</span>
            <div
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <Link
                href="/programs"
                className="text-sm font-medium text-black px-4"
              >
                Programs
              </Link>
              {isProgramsOpen && (
                <div className="absolute top-full left-0 pt-2 bg-transparent">
                  <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                    <Link
                      href="/lifescript"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      LifeScript
                    </Link>
                    <Link
                      href="/neurosleep"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      NeuroSleep
                    </Link>
                    <Link
                      href="/bioalign"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      BioAlign
                    </Link>
                    <Link
                      href="/biobrain-studio"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      BioBrain Studio
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <span className="text-white/30">|</span>
            <Link
              href="/digital-twin"
              className="text-sm font-medium text-black px-4"
            >
              Digital Twin
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/faq"
              className="text-sm font-medium text-black px-4"
            >
              FAQs
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/contact"
              className="text-sm font-medium text-black px-4"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <Link href="/contact">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex text-black hover:bg-transparent hover:text-black"
              >
                Book Consultation
              </Button>
            </Link>
            <Link href="/assessment">
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white border-0 rounded-full py-6 px-6"
              >
                Start Assessment
              </Button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/mendiv.png"
                  alt="Mendiv"
                  width={140}
                  height={50}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                About
              </Link>

              {/* Programs with Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span>Programs</span>
                  {isMobileProgramsOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {isMobileProgramsOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/lifescript"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      LifeScript
                    </Link>
                    <Link
                      href="/neurosleep"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      NeuroSleep
                    </Link>
                    <Link
                      href="/bioalign"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      BioAlign
                    </Link>
                    <Link
                      href="/biobrain-studio"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      BioBrain Studio
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/digital-twin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                Digital Twin
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-8 space-y-3 pt-8 border-t border-gray-200">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full text-black border-gray-300 hover:bg-gray-50 mb-4"
                >
                  Book Consultation
                </Button>
              </Link>
              <Link href="/assessment" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
