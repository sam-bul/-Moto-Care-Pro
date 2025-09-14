import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | Moto Care Pro",
  description: "Refund and Cancellation Policy for Moto Care Pro motorcycle repair services in Hyderabad",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Refund and Cancellation Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8 text-lg">Last updated: 1/01/2025</p>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            At Moto Care Pro, we strive to provide the best service for your motorcycle repair and maintenance needs. This Refund and Cancellation Policy outlines the terms and conditions for cancellations and refunds.
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Cancellation Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may cancel your service appointment at any time before our team picks up your motorcycle. However, if you cancel the service after our team has already picked up your motorcycle, a cancellation fee of ₹300 will be charged to cover transportation and administrative costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Refunds are processed under the following conditions:
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li><strong>Pre-Paid Services:</strong> If you have pre-paid for a service and wish to cancel before pickup, you will receive a full refund.</li>
              <li><strong>Post-Service Refunds:</strong> If you are dissatisfied with the service provided, please contact us within 7 days of service completion. We will review your case and may offer a partial or full refund depending on the circumstances.</li>
              <li><strong>Non-Refundable Services:</strong> Customization and upgrade services are non-refundable once work has begun, as these are tailored to your specific requirements.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. How to Cancel</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To cancel a service, please contact us at least 24 hours before your scheduled appointment. You can reach us via:
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +91 6305034341
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Refund Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Refunds will be processed within 2 business days after approval. The refund will be credited to the original payment method used during the transaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Moto Care Pro reserves the right to modify this Refund and Cancellation Policy at any time. Any changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this policy, please contact us at:
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
