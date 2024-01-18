import "@/styles/main.css"
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Providers } from "@/components/Providers"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })

export const metadata: Metadata = {
  title: 'Tarun Gowda',
  description: 'Website to stay updated with Tarun Gowda (ibizabroker) 👍',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
