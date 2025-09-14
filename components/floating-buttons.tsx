"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  const handleCall = () => {
    window.location.href = "tel:+916305034341"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/916305034341?text=Hi, I need motorcycle repair service", "_blank")
  }

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col space-y-3">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg"
        onClick={handleWhatsApp}
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-14 h-14 p-0 shadow-lg"
        onClick={handleCall}
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  )
}
