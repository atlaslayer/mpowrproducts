import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | MPowr Products",
  description: "Learn about MPowr Products Inc. - over 25 years of manufacturing excellence in industrial door closers. Based in London, Ontario, Canada.",
  keywords: ["MPowr Products", "door closer manufacturer", "London Ontario", "NAFTA manufacturer"],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
