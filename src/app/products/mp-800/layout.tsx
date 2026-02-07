import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MP-800 POWR-Closer | MPowr Products",
  description: "The MP-800 is a light-duty hydraulic rotary door closer for interior, screen, or storm doors up to 35 lbs. Reversible, aluminum finish, includes all mounting hardware.",
  keywords: ["MP-800", "POWR-Closer", "door closer", "hydraulic door closer", "light duty door closer", "screen door closer"],
  openGraph: {
    title: "MP-800 POWR-Closer | MPowr Products",
    description: "Light-duty hydraulic rotary door closer for interior, screen, or storm doors.",
    type: "website",
  },
}

export default function MP800Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
