import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "mp-800",
    name: "MP-800 POWR-Closer",
    description: "Light-duty hydraulic rotary door closer for interior, screen, or storm doors.",
    capacity: "35 lb",
    finish: "Aluminum",
    featured: true,
  },
  {
    id: "mp-800-ss",
    name: "MP-800 SS POWR-Closer",
    description: "Stainless steel version for enhanced corrosion resistance and marine applications.",
    capacity: "35 lb",
    finish: "Stainless Steel",
    featured: false,
    comingSoon: true,
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Industrial-grade door closers built to last. All products are NAFTA made 
            and backed by our commitment to quality.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="relative bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                {product.comingSoon && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
                {product.featured && (
                  <span className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                
                <div className="aspect-video bg-white rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900">{product.name.split(" ")[0]}</div>
                    <div className="text-sm text-gray-500 mt-1">{product.finish}</div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
                <p className="mt-3 text-gray-600">{product.description}</p>
                
                <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <span className="font-semibold text-slate-900 mr-1">Capacity:</span>
                    {product.capacity}
                  </span>
                  <span className="flex items-center">
                    <span className="font-semibold text-slate-900 mr-1">Finish:</span>
                    {product.finish}
                  </span>
                </div>

                <div className="mt-8">
                  {product.comingSoon ? (
                    <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed">
                      Coming Soon
                    </Button>
                  ) : (
                    <Link href={`/products/${product.id}`}>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Need bulk pricing?</h2>
          <p className="mt-2 text-gray-600">
            Contact us for volume discounts and custom orders.
          </p>
          <div className="mt-6">
            <Link href="/quote">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
