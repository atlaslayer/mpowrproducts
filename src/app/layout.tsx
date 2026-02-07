import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MPowr Products Inc. | Industrial Door Closers",
  description: "Manufacturing durable hydraulic door closers for over 25 years. NAFTA made, serving industry leaders throughout North America.",
  keywords: ["door closer", "hydraulic door closer", "MP-800", "industrial door closer", "NAFTA", "made in Canada"],
  icons: {
    icon: "/images/mpowr-logo.png",
    apple: "/images/mpowr-logo.png",
  },
  openGraph: {
    title: "MPowr Products Inc. | Industrial Door Closers",
    description: "Manufacturing durable hydraulic door closers for over 25 years. NAFTA made.",
    siteName: "MPowr Products Inc.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
