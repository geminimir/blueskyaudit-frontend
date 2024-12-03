'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

type FooterProps = {
  formData: {
    email: string
    status: 'idle' | 'loading' | 'processing-payment' | 'success' | 'error'
  }
  onEmailChange: (email: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function Footer({ formData, onEmailChange, onSubmit }: FooterProps) {
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Be Among the First Brands on Bluesky
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join forward-thinking brands already securing their spot in the next evolution of social media marketing.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={formData.email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="min-w-0 flex-auto rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#0185FF]"
            />
            <button
              type="submit"
              disabled={formData.status === 'loading'}
              className="flex-none rounded-lg bg-[#0185FF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0165CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0185FF] disabled:opacity-50"
            >
              {formData.status === 'loading' ? (
                <span className="flex justify-center">Processing...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Secure Your Spot
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#0185FF]" />
              Pioneer Pricing (50% off)
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#0185FF]" />
              Early Access Features
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#0185FF]" />
              Dedicated Support
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <a
              href="https://bsky.app/profile/bluebrandly.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0185FF] transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 -3.268 64 68.414" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/bluebrandly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0185FF] transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}