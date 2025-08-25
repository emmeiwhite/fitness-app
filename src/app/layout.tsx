import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'FitNfine - Transform Body, Transform Life',
  description:
    'Join our fitness program and feel the change & confidence. Get trained with expert trainers. Start your transformation today.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
