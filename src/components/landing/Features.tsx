'use client'

import { motion } from 'framer-motion'
import { 
  Search, Target, BarChart3, Shield, 
  Users, Globe, Zap, MessageSquare, 
  Calendar, BadgeCheck, Bot, Sparkles 
} from 'lucide-react'

const features = [
  {
    title: 'AI Matching',
    description: 'Find creators that perfectly align with your brand values',
    icon: <Bot className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Authenticity Verification',
    description: 'Ensure genuine engagement and real audience growth',
    icon: <Shield className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Global Reach',
    description: 'Connect with creators across different regions and languages',
    icon: <Globe className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and campaign workflows',
    icon: <Sparkles className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Content Approval',
    description: 'Streamlined content review and approval process',
    icon: <BadgeCheck className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team and creators',
    icon: <Users className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Campaign Calendar',
    description: 'Visual timeline for content scheduling',
    icon: <Calendar className="w-6 h-6 text-[#0185FF]" />
  },
  {
    title: 'Real-time Analytics',
    description: 'Track performance metrics as they happen',
    icon: <BarChart3 className="w-6 h-6 text-[#0185FF]" />
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-[#F7FBFF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-base font-semibold leading-7 text-[#0185FF]">Platform Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive tools designed for modern influencer marketing
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#0185FF]/30 transition-colors">
                  <div className="p-2 bg-[#F0F8FF] rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
