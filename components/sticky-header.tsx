"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Wrench, Star, Shield } from "lucide-react"
import Link from "next/link"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200 py-2" 
          : "bg-transparent py-4"
      } ${!isScrolled ? "hidden md:block" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                isScrolled 
                  ? "bg-gradient-to-br from-orange-500 to-orange-600" 
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}>
                <Wrench className={`w-9 h-9 transition-colors duration-500 ${
                  isScrolled ? "text-white" : "text-white"
                }`} />
              </div>
              <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                isScrolled ? "bg-orange-400" : "bg-white/30"
              }`}>
                <Star className="w-3 h-3 fill-white text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-3xl transition-colors duration-500 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}>
                Moto Care Pro
              </span>
              <div className="flex items-center space-x-1">
                <Shield className={`w-4 h-4 transition-colors duration-500 ${
                  isScrolled ? "text-orange-500" : "text-white/80"
                }`} />
                <span className={`text-sm font-medium transition-colors duration-500 ${
                  isScrolled ? "text-slate-600" : "text-white/80"
                }`}>
                  Hyderabad's Trusted Service
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors font-medium text-lg ${
                isScrolled 
                  ? "text-slate-700 hover:text-orange-600" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className={`transition-colors font-medium text-lg ${
                isScrolled 
                  ? "text-slate-700 hover:text-orange-600" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("brands")}
              className={`transition-colors font-medium text-lg ${
                isScrolled 
                  ? "text-slate-700 hover:text-orange-600" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Brands
            </button>
            <Link href="/contact">
              <button
                className={`transition-colors font-medium text-lg ${
                  isScrolled 
                    ? "text-slate-700 hover:text-orange-600" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </button>
            </Link>
            <a href="tel:+916305034341">
              <Button className={`font-semibold px-6 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isScrolled 
                  ? "bg-orange-500 hover:bg-orange-600 text-white" 
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
              }`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-3 rounded-xl transition-colors ${
              isScrolled 
                ? "bg-orange-100 hover:bg-orange-200" 
                : "bg-white/20 hover:bg-white/30"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-orange-600" : "text-white"
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-orange-600" : "text-white"
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden mt-6 pb-6 border-t transition-colors ${
            isScrolled ? "border-slate-200" : "border-white/20"
          }`}>
            <div className="flex flex-col space-y-4 pt-6">
              <button
                onClick={() => scrollToSection("services")}
                className={`text-left transition-colors font-medium text-lg py-2 ${
                  isScrolled 
                    ? "text-slate-700 hover:text-orange-600" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className={`text-left transition-colors font-medium text-lg py-2 ${
                  isScrolled 
                    ? "text-slate-700 hover:text-orange-600" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("brands")}
                className={`text-left transition-colors font-medium text-lg py-2 ${
                  isScrolled 
                    ? "text-slate-700 hover:text-orange-600" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Brands
              </button>
              <Link href="/contact">
                <button
                  className={`text-left transition-colors font-medium text-lg py-2 ${
                    isScrolled 
                      ? "text-slate-700 hover:text-orange-600" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Contact
                </button>
              </Link>
              <a href="tel:+916305034341" className="w-fit">
                <Button className={`font-semibold px-6 py-3 text-lg rounded-xl shadow-lg w-fit transition-all duration-300 ${
                  isScrolled 
                    ? "bg-orange-500 hover:bg-orange-600 text-white" 
                    : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                }`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 6305034341
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
