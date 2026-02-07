import Link from "next/link"
import { ArrowRight, Shield, Globe, Award, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Industrial-Grade
                <span className="block text-orange-500">Door Closers</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                For over 25 years, MPowr Products has been manufacturing durable hydraulic door closers 
                for industry leaders across North America. Quality you can trust, proudly NAFTA made.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-slate-800 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl font-bold text-orange-500 mb-4">MP-800</div>
                  <div className="text-xl text-gray-300">POWR-Closer Hydraulic Door Closer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose MPowr?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built for durability, designed for performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Built to Last</h3>
              <p className="text-gray-600">
                Industrial-grade construction designed for demanding environments and heavy use.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">NAFTA Made</h3>
              <p className="text-gray-600">
                Proudly manufactured in North America, supporting local industry and supply chains.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">25+ Years Experience</h3>
              <p className="text-gray-600">
                Over two decades of manufacturing excellence serving industry leaders.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-6">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Easy Installation</h3>
              <p className="text-gray-600">
                Simple mounting and reversible design for both left and right-hand doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Featured Product
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                MP-800 POWR-Closer
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                The MP-800 is a light-duty rotary door closer specifically suited for interior, screen, 
                or storm doors. The hydraulic mechanism regulates door closing speed for smooth, 
                controlled operation.
              </p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-orange-500">✓</span>
                  <span className="ml-3 text-gray-600">35 lb. door capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-orange-500">✓</span>
                  <span className="ml-3 text-gray-600">Reversible for left or right-hand doors</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-orange-500">✓</span>
                  <span className="ml-3 text-gray-600">Includes all mounting hardware</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-orange-500">✓</span>
                  <span className="ml-3 text-gray-600">Aluminum finish</span>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/products/mp-800">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    View Product Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-slate-900 mb-4">MP-800</div>
                  <div className="text-lg text-gray-500">Hydraulic POWR-Closer</div>
                  <div className="mt-6 text-sm text-gray-400">
                    Dimensions: 1-3/4" Dia. x 3"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Contact us today for pricing, bulk orders, or to become an authorized distributor.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
