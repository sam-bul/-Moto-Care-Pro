import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Banjara Hills",
    bike: "Royal Enfield Classic 350",
    rating: 5,
    review:
      "Excellent service! My Royal Enfield was making strange noises and they diagnosed the problem quickly. The pickup and drop service was very convenient. Highly recommended!",
    image: "/happy-motorcycle-customer-testimonial.jpg",
  },
  {
    name: "Priya Sharma",
    location: "Jubilee Hills",
    bike: "Honda Activa 6G",
    rating: 5,
    review:
      "Very professional team. They explained everything clearly and the pricing was transparent. My Activa runs like new after their service. Will definitely come back!",
    image: "/happy-motorcycle-customer-testimonial.jpg",
  },
  {
    name: "Mohammed Ali",
    location: "Madhapur",
    bike: "Bajaj Pulsar 220F",
    rating: 5,
    review:
      "Best motorcycle service center in Hyderabad! They fixed my Pulsar's engine issue that other mechanics couldn't solve. Great work and reasonable prices.",
    image: "/happy-motorcycle-customer-testimonial.jpg",
  },
  {
    name: "Sneha Reddy",
    location: "Gachibowli",
    bike: "TVS Apache RTR 160",
    rating: 5,
    review:
      "Amazing experience! The staff is very knowledgeable and they completed the service on time. The free pickup and drop service saved me a lot of hassle.",
    image: "/happy-motorcycle-customer-testimonial.jpg",
  },
  {
    name: "Vikram Singh",
    location: "Kondapur",
    bike: "KTM Duke 390",
    rating: 5,
    review:
      "Top-notch service quality! They use genuine parts and provide warranty on their work. My KTM's performance has improved significantly after their service.",
    image: "/happy-motorcycle-customer-testimonial.jpg",
  },
  {
    name: "Anitha Rao",
    location: "Hitech City",
    bike: "Hero Splendor Plus",
    rating: 5,
    review:
      "Very satisfied with their service. They are honest, reliable, and skilled. The 30-day warranty gives me peace of mind. Definitely the best in the city!",
    image: "/happy-motorcycle-customer-testimonial.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about
            <span className="text-primary font-semibold"> our motorcycle repair services</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/60 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.review}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="font-display font-semibold text-primary text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.bike}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl px-8 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-display font-semibold text-foreground">4.9/5 Rating</div>
              <div className="text-sm text-muted-foreground">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
