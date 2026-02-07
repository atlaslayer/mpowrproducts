import { Factory, Users, Award, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">About MPowr Products</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Over 20 years of manufacturing excellence, serving industry leaders 
            across North America.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                A Rich History in Manufacturing
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  MPowr Products Inc. has provided hundreds of thousands of proven 
                  Canadian-manufactured door closers for over 25 years. Based in London, 
                  Ontario, Canada, we've built a reputation for quality and reliability 
                  that industry leaders across North America depend on.
                </p>
                <p>
                  Our closers are designed to be affordable, durable, and environmentally 
                  safe. The MP-800 POWR-Closer features a lightweight design with a maximum 
                  pull force of 35 lbs, perfect for light-duty applications. Prior to becoming 
                  MPowr, our closer products were known as Rota-closer by Lee Products and Ives.
                </p>
                <p>
                  Today, MPowr serves diverse sectors including building construction, medical, 
                  pharmaceutical, chemical, environmental, and insurance industries. Our closers 
                  are trusted in applications ranging from screen doors and slab doors to garbage 
                  chutes, fire-proof cabinets, and laboratory environments.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-gray-600">NAFTA Made</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">1000s</div>
                <div className="text-sm text-gray-600">Units Shipped</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-sm text-gray-600">Distributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Drives Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">
                Every product is built to exceed expectations and stand the test of time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Local Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Proudly made in North America, supporting local jobs and supply chains.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                We listen to our customers and continuously improve our products.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">
                Consistent quality and on-time delivery you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>London, Ontario, Canada</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Our Location
              </span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Based in the Heart of Ontario
              </h2>
              <p className="mt-6 text-gray-600">
                Our manufacturing facility in London, Ontario puts us at the center of 
                North American industry. With easy access to major transportation routes, 
                we can efficiently serve customers across the United States, Canada, and Mexico.
              </p>
              <div className="mt-8 space-y-3 text-gray-600">
                <p className="flex items-center">
                  <span className="font-semibold text-slate-900 mr-2">Address:</span>
                  London, Ontario, Canada
                </p>
                <p className="flex items-center">
                  <span className="font-semibold text-slate-900 mr-2">Email:</span>
                  <a href="mailto:info@mpowrproducts.com" className="text-orange-500 hover:underline">
                    info@mpowrproducts.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Whether you need products for your business or want to become a distributor, 
            we'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/distributors"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Become a Distributor
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
