import AnalyticsComp from '@/components/AnalyticsComp'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import { Navbar } from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recapify - Never Lose Track of Meeting Actions Again',
  description: 'Transform your meetings with AI-powered summaries and action items. Save 6+ hours every week.',
  metadataBase: new URL('https://recapify.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Recapify - Never Lose Track of Meeting Actions Again',
    description: 'Transform your meetings with AI-powered summaries and action items. Save 6+ hours every week.',
    url: 'https://recapify.io',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Recapify - AI Meeting Assistant',
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Recapify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recapify - Never Lose Track of Meeting Actions Again',
    description: 'Transform your meetings with AI-powered summaries and action items. Save 6+ hours every week.',
    images: ['/og-image.png'],
    creator: '@khalilmerc',
    site: '@recapify',
    domain: 'recapify.io',
  },
  keywords: [
    'meeting notes',
    'ai meeting assistant',
    'meeting transcription',
    'meeting summary',
    'action items',
    'meeting productivity',
    'team collaboration',
    'meeting automation'
  ],
  authors: [{ name: 'Recapify', url: 'https://recapify.io' }],
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
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:title" content="Recapify - Never Lose Track of Meeting Actions Again" />
        <meta property="linkedin:description" content="Transform your meetings with AI-powered summaries and action items. Save 6+ hours every week." />
        <meta property="linkedin:image" content="https://recapify.io/og-image.png" />
        
        <meta name="twitter:site" content="@recapify" />
        <meta name="twitter:domain" content="recapify.io" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Recapify" />
        
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
