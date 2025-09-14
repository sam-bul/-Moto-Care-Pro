import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const phoneNumber = "+916305034341"
  const whatsappNumber = "916305034341"

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Get Your Bike <span className="text-primary">Serviced?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 text-pretty leading-relaxed">
            Don't wait for problems to get worse. Book your motorcycle service today and experience
            <span className="text-primary font-semibold"> professional care</span> that keeps you riding safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-white/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 block"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-white mb-2">Call Now</h3>
              <p className="text-sm text-slate-300">Instant booking</p>
            </a>

            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 block"
            >
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-slate-300">Quick chat</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-white mb-2">Schedule</h3>
              <p className="text-sm text-slate-300">Pick your time</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-white mb-2">Pickup</h3>
              <p className="text-sm text-slate-300">Free service</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${phoneNumber}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 6305034341
              </Button>
            </a>

            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
