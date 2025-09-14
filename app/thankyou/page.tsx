import React from 'react'
import Link from 'next/link'
import { CheckCircle, Phone, Clock, ArrowLeft, Star } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-12 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-white/90 text-lg">
              Your service request has been submitted successfully
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What happens next?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our team will review your request and contact you within the next few minutes to confirm your appointment and pickup details.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">We'll call you</h3>
                  <p className="text-slate-600 text-sm">Our team will contact you to confirm your service details and schedule pickup.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1"> pickup</h3>
                  <p className="text-slate-600 text-sm">We'll pick up your motorcycle from your location at the scheduled time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Expert service</h3>
                  <p className="text-slate-600 text-sm">Our certified mechanics will provide professional repair and maintenance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Safe delivery</h3>
                  <p className="text-slate-600 text-sm">We'll deliver your motorcycle back to you after completing the service.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-orange-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">Call us anytime</p>
                  <a href="tel:+916305034341" className="text-orange-600 font-bold text-lg hover:text-orange-700">
                    +91 6305034341
                  </a>
                </div>
                <div className="w-px h-16 bg-orange-200"></div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">Service hours</p>
                  <p className="text-orange-600 font-bold text-sm">24/7 Available</p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="text-center mb-8">
              <p className="text-slate-600 mb-4">How was your experience with us?</p>
              <div className="flex justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-sm text-slate-500">We appreciate your feedback!</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl text-center transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <a 
                href="tel:+916305034341"
                className="flex-1 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-6 rounded-xl text-center transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-8 py-6 text-center">
            <p className="text-slate-600 text-sm">
              Thank you for choosing <span className="font-bold text-orange-600">Moto Care Pro</span> for your motorcycle service needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}