import "./globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "@/components/Providers"

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
