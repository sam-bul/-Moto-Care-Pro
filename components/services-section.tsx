import { Card, CardContent } from "@/components/ui/card"
import { Wrench, PenLine as Engine, Disc, Zap, Droplets, Truck, Shield, Clock, Star, Settings, Wrench as CustomMods, AlertTriangle, HelpCircle, Users } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "General Maintenance",
  },
  {
    icon: Engine,
    title: "Engine & Transmission",
  },
  {
    icon: Disc,
    title: "Brake Services",
  },
  {
    icon: Zap,
    title: "Electrical Repairs",
  },
  {
    icon: Settings,
    title: "Suspension & Steering",
  },
  {
    icon: Disc,
    title: "Tyre & Wheel Services",
  },
  {
    icon: Star,
    title: "Performance Upgrades",
  },
  {
    icon: CustomMods,
    title: "Custom Mods",
  },
  {
    icon: Truck,
    title: "Pickup & Drop",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
  },
  {
    icon: Shield,
    title: "Insurance Assistance",
  },
  {
    icon: Users,
    title: "Brand-Specific Experts",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Our Expert <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive motorcycle repair and maintenance services with professional expertise and
            <span className="text-primary font-semibold"> guaranteed quality</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 bg-white border-2 border-slate-300 hover:border-orange-400 hover:-translate-y-2 text-center rounded-3xl"
            >
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="w-12 h-12 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-3xl px-10 py-6 shadow-xl">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-slate-900 text-xl">Quality Guarantee</div>
              <div className="text-slate-600">warranty on all repairs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
