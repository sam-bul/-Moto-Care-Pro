import { Button } from "@/components/ui/button"
import { Phone, Calendar, Star, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 sm:gap-3 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-2.5 border border-primary/20 bg-white/10 shadow-sm">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-white whitespace-nowrap">Hyderabad's #1 Trusted Service</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>

            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center lg:text-left text-white">
              Premium <span className="text-primary">Motorcycle</span> Care & Service
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Experience luxury-grade motorcycle servicing with{" "}
              <span className="text-primary font-bold">complimentary pickup & delivery</span> across Hyderabad. Where
              precision meets excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="tel:+916305034341">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white hover:text-white text-sm sm:text-base px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg hover:scale-105 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">Call Now: </span>+91 6305034341
                </Button>
              </a>

             
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 pt-4 lg:pt-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display">500+</div>
                <div className="text-xs text-slate-300 mt-0.5">Happy Clients</div>
              </div>
              <div className="text-center p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display">24/7</div>
                <div className="text-xs text-slate-300 mt-0.5">Service</div>
              </div>
              <div className="text-center p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display">FREE</div>
                <div className="text-xs text-slate-300 mt-0.5">Pickup</div>
              </div>
              <div className="text-center p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display">100%</div>
                <div className="text-xs text-slate-300 mt-0.5">Quality</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3]">
                <img
                  src="/hero.jpg"
                  alt="Professional motorcycle repair workshop"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/15"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
            </div>
            
            {/* Refined Decorative elements */}
            <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-8 h-8 lg:w-10 lg:h-10 border-2 border-primary/40 rounded-full animate-pulse bg-white/5 backdrop-blur-sm"></div>
            <div className="absolute -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary/20 to-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 -right-1 lg:-right-2 w-4 h-4 lg:w-6 lg:h-6 bg-primary/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/4 -left-1 lg:-left-2 w-3 h-3 lg:w-5 lg:h-5 bg-primary/30 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
