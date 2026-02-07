import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | MPowr Products",
  description: "Browse our industrial-grade door closers. The MP-800 POWR-Closer series offers reliable, NAFTA-made solutions for light-duty applications.",
  keywords: ["door closers", "industrial door closers", "MP-800", "hydraulic door closer"],
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
