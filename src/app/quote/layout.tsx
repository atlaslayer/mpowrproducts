import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote | MPowr Products",
  description: "Request pricing for MP-800 door closers. Get competitive quotes for bulk orders and distribution partnerships.",
  keywords: ["door closer quote", "MP-800 pricing", "bulk order door closers"],
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
