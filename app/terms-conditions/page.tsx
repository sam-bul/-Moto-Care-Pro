import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Moto Care Pro",
  description: "Terms and Conditions for Moto Care Pro motorcycle repair services in Hyderabad",
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8 text-lg">
            Welcome to Moto Care Pro! These terms and conditions outline the rules and regulations for the use of our services.
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Services Offered</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moto Care Pro provides the following services:
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>• Motorcycle Repair</li>
              <li>• Engine Diagnostics and Repair</li>
              <li>• Motorcycle Electrical Repairs</li>
              <li>• Motorcycle Regular Maintenance</li>
              <li>• Customization and Upgrades</li>
              <li>• Pickup & Dropoff Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Booking and Appointments</h2>
            <p className="text-muted-foreground leading-relaxed">
              To book a service, you must provide accurate information about your motorcycle and the required service. Appointments are subject to availability, and we reserve the right to reschedule if necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due upon completion of the service unless otherwise agreed. We accept cash, credit/debit cards, and other approved payment methods. Additional charges may apply for parts or unforeseen repairs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Cancellation Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you need to cancel or reschedule an appointment, please notify us at least 24 hours in advance. Failure to do so may result in a cancellation fee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Moto Care Pro is not liable for any damage, loss, or theft of personal items left in your motorcycle during repairs. We take utmost care during servicing, but we are not responsible for pre-existing conditions or damages unrelated to the service provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a limited warranty on repairs and parts for a specified period. The warranty does not cover damages caused by misuse, accidents, or unauthorized modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Pickup & Dropoff Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our pickup and dropoff service is available within a specified radius. Additional charges may apply for locations outside this area. You must ensure the motorcycle is accessible and ready for pickup at the scheduled time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Customer Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for providing accurate information about your motorcycle and its condition. Failure to disclose relevant details may affect the quality of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Moto Care Pro reserves the right to modify these terms and conditions at any time. Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these terms, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +91 6305034341
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
