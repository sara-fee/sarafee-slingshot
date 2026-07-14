import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Personal Website | Your Name',
  description: 'Personal website showcasing my work, skills, and experience',
  keywords: ['portfolio', 'web developer', 'projects', 'resume'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Personal Website | Your Name',
    description: 'Personal website showcasing my work, skills, and experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}