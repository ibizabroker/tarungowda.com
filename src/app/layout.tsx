import "@/styles/main.css"
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Providers } from "@/components/Providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })

export const metadata: Metadata = {
  title: {
    default: 'Tarun Gowda',
    template: '%s | Tarun Gowda'
  },
  metadataBase: new URL('https://tarungowda.com'),
  description: 'Website to stay updated with Tarun Gowda (ibizabroker) 👍',
  openGraph: {
    title: {
      default: 'Tarun Gowda',
      template: '%s | Tarun Gowda'
    },
    description: 'Website to stay updated with Tarun Gowda (ibizabroker) 👍',
    url: 'https://tarungowda.com',
    siteName: "tarungowda.com",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <GoogleAnalytics gaId="G-X1DBV519P3" />
      <body className={`${inter.variable} ${manrope.variable} dark:bg-dark-1 bg-light-1`}>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
