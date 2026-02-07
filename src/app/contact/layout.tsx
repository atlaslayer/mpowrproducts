import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | MPowr Products",
  description: "Get in touch with MPowr Products Inc. Contact us for product inquiries, technical support, or partnership opportunities.",
  keywords: ["contact MPowr", "door closer support", "industrial parts inquiry"],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
