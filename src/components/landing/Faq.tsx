'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is BlueBrandly?",
    answer: "BlueBrandly is the first influencer marketing platform built specifically for Bluesky. We help brands discover authentic creators, manage campaigns, and measure results in the decentralized social space.",
  },
  {
    question: "How does creator discovery work?",
    answer: "Our AI-powered platform analyzes Bluesky creators based on their content quality, engagement rates, and audience authenticity. You can filter by niche, location, and other metrics to find the perfect match for your brand.",
  },
  {
    question: "What features are included in the Pioneer Program?",
    answer: "Pioneer members get access to all platform features including AI-powered creator discovery, campaign management tools, and analytics dashboard. You'll also receive priority support and 50% off regular pricing for life.",
  },
  {
    question: "How do you verify creator authenticity?",
    answer: "We analyze multiple data points including engagement patterns, audience growth, and content consistency to verify authentic creators. Our platform also integrates with Bluesky's AT Protocol to verify account ownership.",
  },
  {
    question: "When will BlueBrandly launch?",
    answer: "We're launching soon! Join our Pioneer Program to be among the first brands to access the platform and secure special early-access pricing.",
  },
  {
    question: "What makes BlueBrandly different from other platforms?",
    answer: "BlueBrandly is built specifically for Bluesky, leveraging the platform's unique features and decentralized nature. We focus on authentic engagement and provide tools tailored to Bluesky's creator ecosystem.",
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#0185FF]">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about BlueBrandly and our Pioneer Program
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="py-6"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    <ChevronDown className="h-5 w-5 text-[#0185FF] group-open:rotate-180 transition-transform" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
