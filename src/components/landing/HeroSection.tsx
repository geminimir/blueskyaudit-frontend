'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const [handle, setHandle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    if (!handle) {
      console.error('Handle is required')
      return
    }

    setIsLoading(true)
    try {
      // Remove @ if present and clean up the handle
      const cleanHandle = handle.replace('@', '').trim()
      
      // Update the redirect path to /profile instead of /score
      router.push(`/profile/${cleanHandle}`)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

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
          <span className="text-sm font-medium text-[#0185FF]">BlueskyAudit - Discover Your SkyScore</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          What's my <span className="relative inline-block">
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
          Score?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-600"
        >
          A free, fun tool to score your Bluesky profile and get personalized recommendations.
        </motion.p>

        {/* User Handle Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="flex-1 max-w-md">
            <input
              type="text"
              required
              placeholder="e.g. @username.bsky.social"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && handle) {
                  handleSubmit()
                }
              }}
              className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#0185FF] sm:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading || !handle}
            className="flex-none rounded-lg bg-[#0185FF] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0165CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0185FF] transition-all duration-200"
          >
            <span className="flex items-center gap-2 justify-center">
              {isLoading ? 'Loading...' : "Let's go!"}
              {!isLoading && <ArrowRight className="h-4 w-4" />}
            </span>
          </button>
        </motion.div>

        {/* Added Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://bsky.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0185FF] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Powered by</span>
            <Image
              src="/logos/bluesky.svg"
              alt="Bluesky"
              width={20}
              height={20}
              className="text-current"
            />
          </motion.a>
          <motion.p 
            className="mt-2 text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Made with 💙 by the community
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
