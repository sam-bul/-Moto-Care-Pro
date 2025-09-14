import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://motocarepro.com'),
  title: {
    default: "Moto Care Pro - Best Motorcycle Repair Service in Hyderabad | Free Pickup & Drop",
    template: "%s | Moto Care Pro - Hyderabad's #1 Bike Service"
  },
  description: "Moto Care Pro is Hyderabad's #1 trusted motorcycle repair service. Expert mechanics, free pickup & drop, 30-day warranty. Call +91 6305034341 for Royal Enfield, Honda, Yamaha, Bajaj, TVS, KTM repair services.",
  keywords: [
    "motorcycle repair Hyderabad",
    "bike service Hyderabad", 
    "Moto Care Pro",
    "free pickup drop Hyderabad",
    "Royal Enfield repair Hyderabad",
    "Honda bike service Hyderabad",
    "Yamaha motorcycle repair",
    "Bajaj bike service",
    "TVS motorcycle repair",
    "KTM bike service",
    "motorcycle mechanic Hyderabad",
    "bike repair near me",
    "two wheeler service Hyderabad",
    "motorcycle maintenance Hyderabad",
    "bike engine repair",
    "motorcycle electrical repair",
    "bike brake service",
    "motorcycle clutch repair",
    "bike suspension repair",
    "motorcycle battery service",
    "bike service center Hyderabad",
    "motorcycle workshop Hyderabad",
    "bike repair shop Hyderabad",
    "two wheeler repair Hyderabad"
  ],
  authors: [{ name: "Moto Care Pro" }],
  creator: "Moto Care Pro",
  publisher: "Moto Care Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://motocarepro.com",
    siteName: "Moto Care Pro",
    title: "Moto Care Pro - Best Motorcycle Repair Service in Hyderabad",
    description: "Hyderabad's #1 trusted motorcycle repair service with expert mechanics, free pickup & drop, and 30-day warranty. Call +91 6305034341 for all bike brands.",
    images: [
      {
        url: "/professional-motorcycle-repair-workshop-with-mecha.jpg",
        width: 1200,
        height: 630,
        alt: "Moto Care Pro - Professional Motorcycle Repair Workshop in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moto Care Pro - Best Motorcycle Repair Service in Hyderabad",
    description: "Hyderabad's #1 trusted motorcycle repair service with expert mechanics, free pickup & drop, and 30-day warranty.",
    images: ["/professional-motorcycle-repair-workshop-with-mecha.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Automotive Services",
  classification: "Motorcycle Repair and Maintenance Services",
  other: {
    "contact:phone_number": "+91 6305034341",
    "contact:country_name": "India",
    "contact:region": "Telangana",
    "contact:locality": "Hyderabad",
    "business:contact_data:street_address": "Hyderabad, Telangana",
    "business:contact_data:locality": "Hyderabad",
    "business:contact_data:region": "Telangana",
    "business:contact_data:postal_code": "500034",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": "+91 6305034341",
    "business:contact_data:website": "https://motocarepro.com",
    "place:location:latitude": "17.3850",
    "place:location:longitude": "78.4867",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://motocarepro.com" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Moto Care Pro" />
        <meta name="application-name" content="Moto Care Pro" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
