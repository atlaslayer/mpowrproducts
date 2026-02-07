import Link from "next/link"
import { ArrowLeft, Download, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MP800Page() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-slate-900 text-white py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-7xl font-bold text-slate-900 mb-4">MP-800</div>
                <div className="text-xl text-gray-500">POWR-Closer</div>
                <div className="mt-4 text-sm text-gray-400">Part # MP-800</div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Hydraulic Door Closer
              </span>
              <h1 className="mt-2 text-4xl font-bold text-slate-900">
                MP-800 POWR-Closer
              </h1>
              
              <p className="mt-6 text-lg text-gray-600">
                Meet the incredible hydraulic POWR-Closer 800, a light duty rotary door closer 
                that can be used for dozens of applications. The POWR-Closer 800 is specifically 
                suited for use on lightweight interior, screen or storm doors.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-600 font-medium">In Stock</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Request a Quote
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-slate-300">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Online
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t">
                <a 
                  href="/assets/MP800-Specification-Sheet.pdf" 
                  target="_blank"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Specification Sheet (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Application */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Application</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Light Duty Interior or Exterior Doors
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  35 lb. Capacity
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Push Side Installation
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Designed for interior, storm or screen doors up to 35 lbs.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Commercial and Industrial uses include laundry chutes, garbage chutes and metal storage compartments
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Reversible, works with both left and right-hand doors
                </li>
              </ul>
            </div>

            {/* Physical */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Physical</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Aluminum finish
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Approximate dimensions: 1-3/4" Dia. x 3"
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Non-Handled, Reversible
                </li>
              </ul>
            </div>

            {/* Included */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Included</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Closer Body
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Arm
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Mounting Bracket
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Screw Packs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Open the Door To</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-slate-900">Affordable Solutions</h3>
              <p className="mt-2 text-gray-600">
                Cost-effective door control without compromising on quality.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-semibold text-slate-900">Environmental Safety</h3>
              <p className="mt-2 text-gray-600">
                Manufactured with environmentally responsible practices.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl mb-4">🇨🇦</div>
              <h3 className="text-lg font-semibold text-slate-900">Reliable NAFTA Product</h3>
              <p className="mt-2 text-gray-600">
                Proudly made in North America for North American markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Downloads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="/assets/MP800-Specification-Sheet.pdf"
              target="_blank"
              className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Download className="h-5 w-5 text-orange-500 mr-3" />
              <div>
                <div className="font-medium">Specification Sheet</div>
                <div className="text-sm text-gray-400">PDF</div>
              </div>
            </a>
            <a 
              href="/files/mpowr/MPOWR-POWR-Closer-800-instructions.pdf"
              target="_blank"
              className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Download className="h-5 w-5 text-orange-500 mr-3" />
              <div>
                <div className="font-medium">Installation Instructions</div>
                <div className="text-sm text-gray-400">PDF</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Order?</h2>
          <p className="mt-4 text-lg opacity-90">
            Contact us for pricing, bulk orders, or technical questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
