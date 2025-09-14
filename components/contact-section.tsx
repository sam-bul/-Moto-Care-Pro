import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to get your motorcycle serviced? Contact us today for expert repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                    <p className="text-2xl font-bold text-primary">+91 6305034341</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-lg text-foreground">Quick Chat Support</p>
                    <p className="text-sm text-muted-foreground">Instant responses during business hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Service Area</h3>
                    <p className="text-lg text-foreground">All Hyderabad</p>
                    <p className="text-sm text-muted-foreground">Free pickup & drop anywhere in the city</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Working Hours</h3>
                    <p className="text-lg text-foreground">Mon - Sat: 9 AM - 8 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: 10 AM - 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Book?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get your motorcycle serviced by Hyderabad's most trusted repair experts. Call us now or send a WhatsApp
              message to schedule your free pickup.
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white hover:text-white text-lg py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 6305034341
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-6 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Emergency Service</h4>
              <p className="text-sm text-muted-foreground">
                Bike breakdown? We provide 24/7 emergency pickup service. Call us anytime for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="font-bold text-xl text-foreground">Moto Care Pro</span>
            </div>
            <p className="text-muted-foreground mb-4">Hyderabad's Most Trusted Motorcycle Repair & Pickup Service</p>
            <p className="text-sm text-muted-foreground">© 2024 Moto Care Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
