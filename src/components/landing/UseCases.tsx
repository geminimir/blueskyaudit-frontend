'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2, Target, Users2, Check } from 'lucide-react'

const useCases = [
  {
    title: 'Engineering Standups',
    description: 'Transform daily standups into actionable insights and automated workflows',
    icon: <Code2 className="w-6 h-6 text-indigo-600" />,
    features: [
      'Real-time AI-powered meeting transcription',
      'Automatic task creation and assignment in Jira',
      'Instant standup summaries in Slack with @mentions',
      'Smart blocker and dependency detection'
    ],
    example: {
      input: "We're facing some API performance issues that might impact the release...",
      output: {
        summary: "API Performance Optimization Plan",
        tasks: [
          "Implement rate limiting and caching layer",
          "Set up performance monitoring alerts",
          "Schedule load testing session",
          "Update API documentation"
        ],
        integrations: ['jira', 'slack', 'teams']
      }
    }
  },
  {
    title: 'Project Planning',
    description: 'Never lose track of decisions or action items with AI-powered meeting intelligence',
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    features: [
      'Smart decision and commitment tracking',
      'Automated task creation with due dates',
      'Real-time meeting summaries with key points',
      'Seamless integration with project tools'
    ],
    example: {
      input: "Let's plan out the Q2 mobile app launch timeline and requirements...",
      output: {
        summary: "Q2 Mobile App Launch Strategy",
        tasks: [
          "Design system implementation by March 15",
          "Beta testing program setup",
          "Marketing assets preparation",
          "Launch day coordination plan"
        ],
        integrations: ['asana', 'slack', 'zoom']
      }
    }
  },
  {
    title: 'Client Meetings',
    description: 'Focus on building relationships while AI captures every detail and next step',
    icon: <Users2 className="w-6 h-6 text-indigo-600" />,
    features: [
      'Professional meeting transcripts and summaries',
      'Automated follow-up task creation',
      'Smart requirement and feedback tracking',
      'Instant sharing with internal teams'
    ],
    example: {
      input: "We need the new dashboard features ready for the Q2 launch, with a focus on analytics...",
      output: {
        summary: "Client Dashboard Requirements",
        tasks: [
          "Create detailed analytics wireframes",
          "Develop dashboard prototype",
          "Schedule UX review session",
          "Prepare technical specification"
        ],
        integrations: ['jira', 'slack', 'zoom']
      }
    }
  }
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Use Cases</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meetings Made Effortless
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From daily standups to client meetings, transform conversations into action
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-indigo-100 transition-all duration-200"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8">{useCase.description}</p>

                  <div className="space-y-3">
                    {useCase.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="p-1 bg-green-50 rounded-full mt-0.5">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Example */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-400 mb-2">Example Discussion</div>
                    <div className="bg-white rounded-lg p-4 text-sm text-gray-600 border border-gray-100">
                      "{useCase.example.input}"
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">Recapify Output</div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-100">
                        <div className="text-sm font-medium text-gray-900 mb-4">
                          {useCase.example.output.summary}
                        </div>
                        <div className="space-y-3">
                          {useCase.example.output.tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <div className="p-1 bg-green-50 rounded-full mt-0.5">
                                <Check className="w-3 h-3 text-green-500" />
                              </div>
                              <span className="text-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">Syncs with</span>
                        {useCase.example.output.integrations.map((tool) => (
                          <div key={tool}>
                            <Image
                              src={`/logos/${tool}.svg`}
                              alt={tool}
                              width={20}
                              height={20}
                              className="opacity-75 hover:opacity-100 transition-opacity"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
