"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of motorcycles do you service?",
    answer:
      "We service all major motorcycle brands including Honda, Yamaha, Bajaj, TVS, Hero, Royal Enfield, KTM, and many more. Our expert mechanics are trained to work on both domestic and imported bikes.",
  },
  {
    question: "Do you provide pickup and drop service?",
    answer:
      "Yes! We offer free pickup and drop service anywhere in Hyderabad. Just call us at +91 9876543210 and we'll collect your bike from your location and deliver it back after service.",
  },
  {
    question: "How long does a general service take?",
    answer:
      "A general service typically takes 2-4 hours depending on the bike's condition. For major repairs, it may take 1-2 days. We'll provide you with an estimated timeline when you bring in your bike.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer:
      "Yes, we provide a warranty on all repairs and services. If you face any issues with our work within 30 days, we'll fix it free of charge.",
  },
  {
    question: "What are your service charges?",
    answer:
      "Our service charges vary depending on the type of service and bike model. We provide transparent pricing with no hidden costs. Contact us for a detailed quote based on your specific requirements.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer:
      "Yes, we use only genuine OEM parts and high-quality aftermarket parts from trusted brands. We never compromise on quality to ensure your bike's performance and safety.",
  },
  {
    question: "Can I track my bike's service status?",
    answer:
      "We provide regular updates via WhatsApp and phone calls about your bike's service progress. You can also call us anytime to check the status.",
  },
  {
    question: "Do you provide emergency breakdown service?",
    answer:
      "Yes, we offer 24/7 emergency breakdown service in Hyderabad. Call our emergency helpline and our team will reach your location to provide immediate assistance.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Frequently Asked{" "}
            <span className="text-primary">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            Got questions? We've got answers! Find everything you need to know about our
            <span className="text-primary font-semibold"> motorcycle repair services</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border-2 border-primary/20 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-display text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-300" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-primary/20 pt-4">
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
