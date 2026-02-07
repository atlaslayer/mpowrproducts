import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Distributors | MPowr Products",
  description: "Become an authorized MPowr Products distributor. Access compliance documents, USMCA certificates, and partnership opportunities.",
  keywords: ["door closer distributor", "MPowr distributor", "USMCA certification", "RoHS compliance"],
}

export default function DistributorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
