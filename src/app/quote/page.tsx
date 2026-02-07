"use client"

import { useState } from "react"
import { FileText, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "mp-800",
    quantity: "",
    deliveryLocation: "",
    timeline: "",
    additionalInfo: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    
    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus("sent")
  }

  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Request a Quote</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Fill out the form below and we'll get back to you with pricing 
            within 24 business hours.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {status === "sent" ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Quote Request Received!</h2>
              <p className="mt-4 text-gray-600 max-w-md mx-auto">
                Thank you for your interest. Our sales team will review your request 
                and send you a detailed quote within 24 business hours.
              </p>
              <Button 
                className="mt-8 bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => setStatus("idle")}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Order Details</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-900 mb-2">
                        Product *
                      </label>
                      <select
                        id="product"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      >
                        <option value="mp-800">MP-800 POWR-Closer (Aluminum)</option>
                        <option value="mp-800-ss">MP-800 SS POWR-Closer (Stainless Steel)</option>
                        <option value="other">Other / Multiple Products</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-900 mb-2">
                        Quantity *
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        required
                        placeholder="e.g., 100, 500, 1000+"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="deliveryLocation" className="block text-sm font-medium text-slate-900 mb-2">
                        Delivery Location *
                      </label>
                      <input
                        type="text"
                        id="deliveryLocation"
                        required
                        placeholder="City, State/Province, Country"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={formData.deliveryLocation}
                        onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-900 mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      >
                        <option value="">Select timeline...</option>
                        <option value="asap">As soon as possible</option>
                        <option value="2-weeks">Within 2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-900 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      rows={4}
                      placeholder="Any specific requirements, custom packaging needs, or questions..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Quote Request
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted by our sales team 
                regarding your quote request.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
