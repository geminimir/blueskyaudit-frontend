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
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Ready to transform your meetings?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join innovative teams who are already saving hours with AI-powered meeting summaries.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={formData.email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="min-w-0 flex-auto rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
            <button
              type="submit"
              disabled={formData.status === 'loading'}
              className="flex-none rounded-lg bg-[#6366F1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {formData.status === 'loading' ? (
                <span className="flex justify-center">Processing...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              50% Launch Discount
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Priority Access
            </span>
          </div>

          {/* Add social links */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <a
              href="https://x.com/khalilmerc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/recapifyio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}