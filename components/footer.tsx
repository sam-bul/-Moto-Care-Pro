import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Moto Care Pro</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Your trusted motorcycle repair service in Hyderabad. Professional care, expert mechanics, and guaranteed
              quality for all bike brands.
            </p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-600 hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-slate-600 hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-slate-600 hover:text-primary transition-colors">
                  Working Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-600 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-slate-900 mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-600">General Bike Service</span>
              </li>
              <li>
                <span className="text-slate-600">Engine Repair</span>
              </li>
              <li>
                <span className="text-slate-600">Brake & Clutch Repair</span>
              </li>
              <li>
                <span className="text-slate-600">Electrical Work</span>
              </li>
              <li>
                <span className="text-slate-600">Washing & Detailing</span>
              </li>
              <li>
                <span className="text-slate-600">Pickup & Drop Service</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-slate-900 mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-600">
                  123 Main Road, Banjara Hills,
                  <br />
                  Hyderabad, Telangana 500034
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-slate-600">+91 6305034341
                </span>
              </div>
             
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div className="text-slate-600">
                  <div>24/7</div>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-600 mb-4 md:mb-0">© 2025 <a href="https://edonesolution.com/" className="text-primary">EdoNe Solution</a> All rights reserved.</div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="text-slate-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-slate-600 hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/refund-policy" className="text-slate-600 hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
