import { Card, CardContent } from "@/components/ui/card"
import { Phone, Truck, Wrench, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Book Service",
    description: "Call us or book online. We'll schedule a convenient pickup time for your motorcycle.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Free Pickup",
    description: "Our team will pick up your motorcycle from your location anywhere in Hyderabad.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Expert Repair",
    description: "Our certified mechanics diagnose and repair your motorcycle with genuine parts.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Quality Check & Delivery",
    description: "After thorough quality checks, we deliver your motorcycle back to your doorstep.",
  },
]

export function WorkingProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
            Our <span className="text-primary">Working Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Simple, transparent, and hassle-free process to get your motorcycle serviced
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 bg-white border-2 border-slate-200 hover:border-primary hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.step}
                </div>

                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-slate-600 group-hover:text-white" />
                </div>

                <h3 className="font-display text-xl font-semibold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-50 border-2 border-slate-200 rounded-2xl px-8 py-4 shadow-lg">
            <CheckCircle className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-display font-semibold text-slate-900">Simple & Transparent</div>
              <div className="text-sm text-slate-600">No hidden charges, clear communication throughout</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
