import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { WorkingProcessSection } from "@/components/working-process-section"
import { BrandsSection } from "@/components/brands-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { StickyHeader } from "@/components/sticky-header"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkingProcessSection />
      <BrandsSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
