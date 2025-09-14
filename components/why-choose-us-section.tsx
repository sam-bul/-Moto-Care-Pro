import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users, Truck, Shield, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Trusted Service",
    description:
      "Over 500+ satisfied customers trust us with their motorcycles. We maintain the highest standards of service quality.",
    stat: "500+",
    statLabel: "Happy Customers",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quick turnaround times without compromising quality. Most repairs completed within 24-48 hours.",
    stat: "24-48h",
    statLabel: "Turnaround Time",
  },
  {
    icon: Users,
    title: "Expert Mechanics",
    description: "Our certified mechanics have years of experience working with all motorcycle brands and models.",
    stat: "10+",
    statLabel: "Years Experience",
  },
  {
    icon: Truck,
    title: " Pickup & Drop",
    description: "Complimentary pickup and drop service anywhere in Hyderabad. No extra charges, just convenience.",
    stat: "Pickup & Drop",
    statLabel: " Service",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Why Choose <span className="text-primary">Moto Care Pro</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            We're committed to providing the{" "}
            <span className="text-primary font-semibold">best motorcycle repair experience</span> in Hyderabad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/whychoose.jpg"
                alt="Trusted motorcycle repair service"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-display text-4xl font-bold">500+</div>
                <div className="text-lg">Satisfied Customers</div>
              </div>
            </div>
            {/* Yellow shadow effect */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/30 rounded-3xl -z-10"></div>
          </div>

          {/* Right Side - Text with Icons */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Certified Professionals</h3>
                <p className="text-slate-300">
                  Our team consists of certified mechanics with 10+ years of experience in motorcycle repair and
                  maintenance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Quality Guarantee</h3>
                <p className="text-slate-300">
                  We provide  warranty on all repairs and use only genuine parts for lasting performance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Fast Turnaround</h3>
                <p className="text-slate-300">
                  Most repairs completed within 24-48 hours without compromising on quality or safety standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2"> Pickup & Drop</h3>
                <p className="text-slate-300">
                  Complimentary pickup and delivery service anywhere in Hyderabad for your convenience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Customer Satisfaction</h3>
                <p className="text-slate-300">
                  4.9/5 star rating with 500+ happy customers who trust us with their valuable motorcycles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center bg-white border-0 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-1">{feature.stat}</div>
                <div className="text-sm text-slate-600">{feature.statLabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
