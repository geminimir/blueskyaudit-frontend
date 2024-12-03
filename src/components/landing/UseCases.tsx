'use client'

import { motion } from 'framer-motion'
import { Code, Rocket, Users, Zap } from 'lucide-react'

const useCases = [
  {
    title: 'Early-Stage Startups',
    description: 'Build your presence on Bluesky from day one',
    icon: <Rocket className="w-6 h-6 text-[#0185FF]" />,
    capabilities: [
      'Connect with tech early adopters',
      'Build authentic community relationships',
      'Get real product feedback',
    ],
    features: [
      'AI-powered creator discovery',
      'Engagement analytics',
      'Campaign management tools'
    ]
  },
  {
    title: 'Developer Tools',
    description: 'Reach developers where discussions happen',
    icon: <Code className="w-6 h-6 text-[#0185FF]" />,
    capabilities: [
      'Join technical discussions',
      'Share product updates',
      'Build developer relations',
    ],
    features: [
      'Topic-based creator matching',
      'Content performance tracking',
      'Automated outreach tools'
    ]
  },
  {
    title: 'Web3 Projects',
    description: 'Connect with the decentralized community',
    icon: <Zap className="w-6 h-6 text-[#0185FF]" />,
    capabilities: [
      'Build credibility in Web3',
      'Engage with crypto natives',
      'Drive protocol adoption',
    ],
    features: [
      'Web3-focused creator discovery',
      'Community growth tracking',
      'Multi-campaign coordination'
    ]
  },
  {
    title: 'Creator Platforms',
    description: 'Grow your platform through creator partnerships',
    icon: <Users className="w-6 h-6 text-[#0185FF]" />,
    capabilities: [
      'Partner with content creators',
      'Drive platform adoption',
      'Build creator community',
    ],
    features: [
      'Creator relationship management',
      'Content collaboration tools',
      'Performance analytics'
    ]
  }
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 bg-gradient-to-b from-white to-[#F7FBFF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-base font-semibold leading-7 text-[#0185FF]">Use Cases</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for Growth-Focused Teams
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how BlueBrandly can help you build your presence on Bluesky
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0185FF]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header */}
              <div className="relative flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#F0F8FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-8">
                {/* Capabilities */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                    What You Can Do
                    <div className="h-px flex-1 bg-gray-100" />
                  </h4>
                  <ul className="space-y-3">
                    {useCase.capabilities.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0185FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                    Key Features
                    <div className="h-px flex-1 bg-gray-100" />
                  </h4>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0185FF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
