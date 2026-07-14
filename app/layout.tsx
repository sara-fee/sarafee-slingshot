import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

// Enhanced SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'),
  title: {
    default: 'Your Name | Full Stack Developer & Creative Problem Solver',
    template: '%s | Your Name'
  },
  description: 'Full Stack Developer specializing in modern web applications, UI/UX design, and performance optimization. Based in San Francisco, CA. Available for freelance projects worldwide.',
  keywords: ['full stack developer', 'web developer', 'React', 'Next.js', 'TypeScript', 'UI/UX design', 'portfolio', 'San Francisco developer', 'freelance developer'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name Portfolio',
    title: 'Your Name | Full Stack Developer & Creative Problem Solver',
    description: 'Full Stack Developer specializing in modern web applications, UI/UX design, and performance optimization. Based in San Francisco, CA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications, UI/UX design, and performance optimization.',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B7355',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Fira+Code:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        
        {/* JSON-LD Structured Data for Person/Professional */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              url: 'https://yourwebsite.com',
              image: 'https://yourwebsite.com/profile-image.jpg',
              sameAs: [
                process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yourusername',
                process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
                process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/yourusername',
              ],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Tech Company Inc.',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Your University',
              },
              knowsAbout: [
                'Web Development',
                'React.js',
                'Next.js',
                'TypeScript',
                'Node.js',
                'UI/UX Design',
                'Performance Optimization',
              ],
            }),
          }}
        />
        {/* JSON-LD Structured Data for Website */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Your Name Portfolio',
              url: 'https://yourwebsite.com',
              description: 'Full Stack Developer portfolio showcasing projects, skills, and experience',
              author: {
                '@type': 'Person',
                name: 'Your Name',
              },
              inLanguage: 'en-US',
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <Analytics />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}