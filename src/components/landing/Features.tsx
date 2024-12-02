'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mic, Brain, Globe, Check, Share } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Core Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your AI Meeting Assistant
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful features that transform how your team handles meetings
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl space-y-24">
          {/* Smart Transcription Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Mic className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Smart Transcription</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Crystal-clear transcripts powered by advanced AI. Handles multiple speakers, 
                  technical terms, and even cross-talk with exceptional accuracy.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Speaker Recognition',
                      description: 'Automatically identifies and labels different speakers'
                    },
                    {
                      title: 'Technical Accuracy',
                      description: '98% accuracy with industry-specific terminology'
                    },
                    {
                      title: 'Real-time Processing',
                      description: 'Live transcription with minimal latency'
                    }
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { name: 'Sarah Kim', initials: 'SK', message: "Let's discuss the Q2 roadmap priorities..." },
                    { name: 'John Doe', initials: 'JD', message: "I think we should prioritize the mobile app launch..." }
                  ].map((speaker) => (
                    <div key={speaker.name} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="text-sm font-medium text-blue-600">{speaker.initials}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 mb-1">{speaker.name}</div>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                          "{speaker.message}"
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Transcribing...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Summary Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Brain className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">AI-Powered Summary</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Get intelligent meeting summaries that capture key points, decisions, and action items. 
                  Our AI understands context and highlights what matters.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Smart Extraction',
                      description: 'Automatically identifies key discussion points'
                    },
                    {
                      title: 'Decision Tracking',
                      description: 'Never miss important decisions and commitments'
                    },
                    {
                      title: 'Custom Templates',
                      description: 'Tailor summaries to your team\'s needs'
                    }
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Meeting Summary</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Share className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Key Points</h4>
                    <ul className="space-y-2">
                      {[
                        'Mobile app launch scheduled for Q2',
                        'Marketing budget increased by 25%',
                        'New designer hiring approved'
                      ].map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-indigo-600 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Action Items</h4>
                    <div className="space-y-2">
                      {[
                        { assignee: 'Sarah', task: 'Finalize wireframes' },
                        { assignee: 'John', task: 'Update budget doc' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-indigo-600 font-medium">@{item.assignee}</span>
                          <span>{item.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Works with your existing tools. Automatically sync summaries and tasks 
                  to your team's favorite platforms.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'One-Click Setup',
                      description: 'Connect your tools in seconds'
                    },
                    {
                      title: 'Auto-Sync',
                      description: 'Tasks automatically created in your project tools'
                    },
                    {
                      title: 'Custom Workflows',
                      description: 'Configure how and where content is shared'
                    }
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['slack-long', 'asana-long', 'jira-long', 'teams', 'zoom-long', 'google-meet'].map((tool) => (
                  <div
                    key={tool}
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center"
                  >
                    <Image
                      src={`/logos/${tool}.svg`}
                      alt={tool}
                      width={100}
                      height={40}
                      className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
