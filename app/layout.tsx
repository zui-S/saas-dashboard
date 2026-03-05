import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS Dashboard - Professional Data Analytics',
  description: 'Build beautiful data dashboards with our SaaS platform',
  keywords: ['dashboard', 'analytics', 'saas', 'data visualization'],
  authors: [{ name: 'SaaS Dashboard Team' }],
  openGraph: {
    title: 'SaaS Dashboard',
    description: 'Professional data analytics platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
