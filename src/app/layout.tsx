import AnalyticsComp from '@/components/AnalyticsComp'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recapify - Meeting Notes That Write Themselves',
  description: 'Transform your meetings with AI-powered summaries, action items, and integrations. Save 6+ hours every week on meeting documentation.',
  openGraph: {
    title: 'Recapify - Meeting Notes That Write Themselves',
    description: 'Transform your meetings with AI-powered summaries and action items. Save 6+ hours every week.',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'en_US',
    siteName: 'Recapify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recapify - Meeting Notes That Write Themselves',
    description: 'Transform your meetings with AI-powered summaries and action items. Save 6+ hours every week.',
    images: ['/og-image.png'],
    creator: '@khalilmerc'
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
  authors: [{ name: 'Recapify' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <AnalyticsComp />
        <Analytics />
      </body>
    </html>
  )
}
