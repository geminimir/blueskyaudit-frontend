'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How does Recapify work?",
    answer: "Recapify uses AI to analyze your meeting recordings or transcripts, automatically extracting key points, decisions, and action items. It then creates summaries and tasks that are distributed to your team's preferred tools.",
  },
  {
    question: "What platforms do you integrate with?",
    answer: "We currently support Zoom, Google Meet, Slack, Asana, and Jira. More integrations are being added based on user feedback.",
  },
  {
    question: "How accurate are the meeting summaries?",
    answer: "Our AI has been trained on thousands of meetings and consistently captures 95%+ of key points and action items. You can always review and edit summaries before they're distributed.",
  },
  {
    question: "How can I join the waitlist?",
    answer: "Simply enter your email address to join. You'll be among the first to try it and get special early access pricing.",
  },
  {
    question: "When will it be available?",
    answer: "We're launching soon! Join the waitlist to be among the first to try it and get special early access pricing.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#6366F1]">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="py-6"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
