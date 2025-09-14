import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"

export function PickupDropSection() {
  return (
    <section id="pickup-drop" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Free Pickup & Drop Across Hyderabad
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We provide FREE pickup & drop service anywhere in Hyderabad. Just call us, and we'll take care of the
              rest.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Free pickup from your location</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Professional handling and transport</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Free drop back to your location</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Available across all areas of Hyderabad</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Step 1</div>
                  <div className="text-xs text-muted-foreground">Call Us</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Step 2</div>
                  <div className="text-xs text-muted-foreground">We Pickup</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Step 3</div>
                  <div className="text-xs text-muted-foreground">We Deliver</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hyderabad-city-map-with-motorcycle-delivery-routes.jpg"
              alt="Hyderabad pickup and drop service coverage map"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center bg-background/90 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">All Hyderabad Areas</h3>
                <p className="text-muted-foreground">
                  Secunderabad, Gachibowli, Hitech City, Madhapur, Kukatpally, Begumpet, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
