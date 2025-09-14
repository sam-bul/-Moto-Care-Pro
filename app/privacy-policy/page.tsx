import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Moto Care Pro",
  description: "Privacy Policy for Moto Care Pro motorcycle repair services in Hyderabad",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8 text-lg">Last updated: 1/01/2025</p>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            At Moto Care Pro, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and address when you book a service or contact us.</li>
              <li><strong>Vehicle Information:</strong> Details about your motorcycle, including make, model, and service history.</li>
              <li><strong>Payment Information:</strong> Credit/debit card details or other payment information for processing transactions.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and pages visited.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>• To provide and manage our services, including repairs, maintenance, and pickup/dropoff.</li>
              <li>• To process payments and send invoices.</li>
              <li>• To communicate with you about appointments, updates, and promotions.</li>
              <li>• To improve our website and services based on your feedback and usage patterns.</li>
              <li>• To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing services (e.g., payment processors).</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>• Access, update, or delete your personal information.</li>
              <li>• Opt-out of receiving promotional communications.</li>
              <li>• Request a copy of the data we hold about you.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at info@motocarepro.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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
