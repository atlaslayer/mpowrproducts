import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/images/mpowr-logo.png" 
              alt="MPowr Products Inc." 
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm leading-6 mb-4">
              Manufacturing durable door closers and industrial parts for over 25 years. 
              Proudly NAFTA made, serving industry leaders throughout North America.
            </p>
            <p className="text-sm">
              London, Ontario, Canada
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/distributors" className="text-sm hover:text-white transition-colors">
                  Distributors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@mpowrproducts.com" className="hover:text-white transition-colors">
                  info@mpowrproducts.com
                </a>
              </li>
              <li>
                <a href="tel:+15191234567" className="hover:text-white transition-colors">
                  +1 (519) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} MPowr Products Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
