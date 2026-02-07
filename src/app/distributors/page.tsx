import Link from "next/link"
import { Download, FileText, Shield, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const documents = [
  {
    name: "USMCA Certificate 2026",
    description: "USMCA/NAFTA compliance certification for cross-border trade",
    file: "/docs/USMCA-Certificate-2026.pdf",
    category: "Trade Compliance",
  },
  {
    name: "EU RoHS Compliance Letter 2026",
    description: "Declaration of compliance with EU RoHS Directive",
    file: "/docs/EU-RoHS-Compliance-2026.pdf",
    category: "Environmental",
  },
  {
    name: "Regulatory Requirements Letter 2026",
    description: "Comprehensive regulatory compliance documentation",
    file: "/assets/MPowr-Regulatory-Requirements-2026.pdf",
    category: "Regulatory",
  },
  {
    name: "MP-800 Specification Sheet",
    description: "Complete technical specifications for the MP-800",
    file: "/docs/MP800-Spec-Sheet-2025.pdf",
    category: "Technical",
  },
]

const benefits = [
  "Competitive wholesale pricing",
  "Volume discounts available",
  "Priority order fulfillment",
  "Marketing support materials",
  "Dedicated account manager",
  "Technical training resources",
]

export default function DistributorsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Distributors & Dealers</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Partner with MPowr Products to offer quality door closers to your customers. 
            Access compliance documents and resources below.
          </p>
        </div>
      </section>

      {/* Become a Distributor */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Partnership Opportunity
              </span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Become an Authorized Distributor
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Join our network of trusted distributors across North America. 
                We provide the products, support, and documentation you need to succeed.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Apply to Become a Distributor
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">North America</h3>
                <p className="mt-2 text-sm text-gray-600">Coverage across US, Canada & Mexico</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Compliant</h3>
                <p className="mt-2 text-sm text-gray-600">USMCA, RoHS & REACH certified</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center col-span-2">
                <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Full Documentation</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Access all regulatory and compliance documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Downloads */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Compliance Documents</h2>
            <p className="mt-4 text-lg text-gray-600">
              Download regulatory forms and compliance documentation for your records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                      {doc.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{doc.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need additional documentation or custom compliance letters?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Existing Distributors */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Already a Distributor?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Log in to access your dealer portal for pricing, inventory, and order management.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
            disabled
          >
            Dealer Portal (Coming Soon)
          </Button>
        </div>
      </section>
    </>
  )
}
