'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

type HeroSectionProps = {
  formData: {
    email: string
    status: 'idle' | 'loading' | 'processing-payment' | 'success' | 'error'
  }
  onEmailChange: (email: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function HeroSection({ formData, onEmailChange, onSubmit }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-18 sm:pt-24 px-4 sm:px-6 py-16 sm:py-32 lg:px-8 bg-gradient-to-b from-white to-[#F7FBFF]">
      <div className="mx-auto max-w-2xl text-center">
        {/* Pre-heading Launch Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 bg-[#F0F8FF] px-3 py-1 rounded-full"
        >
          <span className="animate-pulse inline-flex h-2 w-2 rounded-full bg-[#0185FF]"></span>
          <span className="text-sm font-medium text-[#0185FF]">Pioneer Access - Limited Spots</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          Collaborate with Creators on <span className="relative inline-block">
            Bluesky
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#0185FF]/40 via-[#0185FF] to-[#0185FF]/40"
            />
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 w-[70%] h-[2px] bg-[#0185FF]/30 blur-[1px]"
            />
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-600"
        >
          The first influencer marketing platform built exclusively for Bluesky.
        </motion.p>

        {/* Waitlist Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={onSubmit} 
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="flex-1 max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={formData.email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#0185FF] sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={formData.status === 'loading'}
            className="flex-none rounded-lg bg-[#0185FF] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0165CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0185FF] disabled:opacity-50 transition-all duration-200"
          >
            <span className="flex items-center gap-2 justify-center">
              {formData.status === 'loading' ? (
                <>
                  <span className="animate-pulse">Joining...</span>
                </>
              ) : (
                <>
                  Secure Your Spot!
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </span>
          </button>
        </motion.form>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm"
        >
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <img
                className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/avatars/alex.png"
                alt="Creator"
              />
              <img
                className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/avatars/alexandria.png"
                alt="Creator"
              />
              <img
                className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src="/avatars/marc.png"
                alt="Creator"
              />
            </div>
            <span className="ml-4 text-gray-500">
              Connect with <span className="font-medium text-[#0185FF]">23+ million</span> creators on Bluesky
            </span>
          </div>
        </motion.div>

        {/* Early Access Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Beta Partner Pricing
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            First Access to Features
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Dedicated Support
          </span>
        </motion.div>
      </div>
    </section>
  )
}
