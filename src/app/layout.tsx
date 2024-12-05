import AnalyticsComp from '@/components/AnalyticsComp'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import { Navbar } from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlueSkyAudit - Share Your Bluesky Profile',
  description: 'Create and share beautiful screenshots of your Bluesky social profile. A fun and easy way to showcase your Bluesky presence.',
  metadataBase: new URL('https://blueskyaudit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BlueSkyAudit - Share Your Bluesky Profile',
    description: 'Create and share beautiful screenshots of your Bluesky social profile. A fun and easy way to showcase your Bluesky presence.',
    url: 'https://blueskyaudit.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BlueSkyAudit - Profile Screenshot Tool',
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'BlueSkyAudit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueSkyAudit - Share Your Bluesky Profile',
    description: 'Create and share beautiful screenshots of your Bluesky social profile. A fun and easy way to showcase your Bluesky presence.',
    images: ['/og-image.png'],
    creator: '@blueskyaudit',
    site: '@blueskyaudit',
    domain: 'blueskyaudit.com',
  },
  keywords: [
    'bluesky profile',
    'profile screenshot',
    'social media',
    'bluesky social',
    'profile sharing',
    'screenshot tool',
    'social profile',
    'bluesky tools'
  ],
  authors: [{ name: 'BlueBrandly', url: 'https://bluebrandly.com' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="BlueBrandly - Premium Brand Development & Marketing" />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Expert brand development and marketing solutions for businesses looking to stand out. Transform your brand identity and market presence." />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://bluebrandly.com/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bluebrandly" />
        <meta name="twitter:title" content="BlueBrandly - Premium Brand Development & Marketing" />
        <meta name="twitter:description" content="Expert brand development and marketing solutions for businesses looking to stand out. Transform your brand identity and market presence." />
        <meta name="twitter:image" content="https://bluebrandly.com/og-image.png" />
        <meta name="twitter:creator" content="@bluebrandly" />
        <meta name="twitter:domain" content="bluebrandly.com" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="BlueBrandly" />
        
        <meta name="theme-color" content="#ffffff" />
        
        <meta name="facebook-domain-verification" content="your-verification-code" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <ErrorBoundary>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
        </ErrorBoundary>
        <AnalyticsComp />
        <Analytics />
      </body>
    </html>
  )
}
