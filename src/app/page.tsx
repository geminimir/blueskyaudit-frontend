'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, ArrowDownToLine, Wand2, Brain, Clock, ChevronDown, Shield, Menu, X, Share, ArrowUpRight, Mic, Sparkles, CheckCircle, Users2, Handshake, Users, Code2, LineChart, Target, CheckSquare, MessageSquare, Link } from 'lucide-react'
import Toast from '@/components/Toast'

// Types for form handling
type WaitlistFormData = {
  email: string
  status: 'idle' | 'loading' | 'processing-payment' | 'success' | 'error'
  message?: string
}

// Fix the 'any' type warnings by creating a proper window interface
interface CustomWindow extends Window {
  gtag: (command: string, action: string, params: object) => void;
}

// Add this component before your Home component
const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1)
      }, 30) // Adjust typing speed here (lower = faster)

      return () => clearTimeout(timer)
    }
  }, [index, text])

  // Show full text immediately but with opacity 0
  return (
    <div className="relative">
      {/* Hidden full text to maintain correct spacing */}
      <span className="invisible">{text}</span>
      {/* Animated text overlay */}
      <span className="absolute top-0 left-0">
        {displayedText}
      </span>
    </div>
  )
}

export default function Home() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: '',
    status: 'idle'
  })
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null)

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormData(prev => ({ ...prev, status: 'loading' }))

    try {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email || !emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Send to API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist. Please try again.')
      }

      // Track signup event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'waitlist_signup', {
          email: formData.email,
        })
      }

      // Success
      setFormData(prev => ({
        ...prev,
        status: 'success',
        email: ''
      }))
      setToast({
        message: 'Successfully joined the waitlist! We\'ll be in touch soon.',
        type: 'success'
      })

    } catch (error) {
      console.error('Waitlist error:', error)
      setFormData(prev => ({
        ...prev,
        status: 'error'
      }))
      setToast({
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        type: 'error'
      })
    } finally {
      setFormData(prev => ({ ...prev, status: 'idle' }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="pt-24 sm:pt-40 px-4 sm:px-6 py-16 sm:py-32 lg:px-8 bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Meeting Notes to Action Items Instantly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Stop context switching between meetings, Slack, and Jira. 
            Get AI-powered summaries and automated task creation where your team already works.
          </motion.p>

          {/* Waitlist Form */}
          <form onSubmit={handleJoinWaitlist} className="mt-10 flex gap-x-4 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="min-w-0 flex-auto rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
            <button
              type="submit"
              disabled={formData.status === 'loading'}
              className="flex-none rounded-lg bg-[#6366F1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              <span className="flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </form>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              50% Launch Discount
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Priority Access
            </span>
          </div>
        </div>
      </section>

      {/* Product Preview Section - Add after Hero section */}
      <section id="howitworks" className="py-12 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Adjust header spacing */}
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-base font-semibold leading-7 text-[#6366F1]">How It Works</h2>
              <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Turn Your Meetings Into Action in 3 Simple Steps
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Focus on the conversation, let Recapify handle the rest
              </p>
            </motion.div>
          </div>

          {/* Adjust timeline container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line - Hide on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-indigo-100 md:left-1/2 hidden md:block" />

            {/* Steps Container */}
            <div className="space-y-12 md:space-y-24">
              {/* Step 1: Connect */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative ml-0 sm:ml-20 md:ml-0 md:mr-[50%] md:pr-16"
              >
                {/* Number indicator */}
                <div className="absolute left-0 sm:left-[-56px] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-indigo-100 bg-white md:left-auto md:right-[-32px] z-10">
                  <span className="text-base sm:text-lg font-semibold text-[#6366F1]">1</span>
                </div>

                {/* Content card */}
                <div className="ml-16 sm:ml-0 bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Connect Your Tools</h3>
                  <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-8">
                    Sign up and link Recapify to your favorite tools. Configure your preferences in just a few clicks.
                  </p>
                  
                  {/* Tool grid - Made more responsive */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    {['zoom', 'slack', 'asana', 'jira'].map((tool) => (
                      <div key={tool} className="bg-gray-50 p-3 sm:p-4 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <Image
                          src={`/logos/${tool}.svg`}
                          alt={tool}
                          width={80}
                          height={24}
                          className="h-5 sm:h-6 object-contain opacity-75 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Run Meeting */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative ml-0 sm:ml-20 md:ml-[50%] md:pl-16"
              >
                {/* Number indicator */}
                <div className="absolute left-0 sm:left-[-56px] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-indigo-100 bg-white md:left-[-32px] z-10">
                  <span className="text-base sm:text-lg font-semibold text-[#6366F1]">2</span>
                </div>

                {/* Content card */}
                <div className="ml-16 sm:ml-0 bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Run Your Meeting</h3>
                  <p className="text-base text-gray-500 mb-8">
                    Host your meeting as usual. Recapify listens in and transcribes automatically.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm text-gray-400">Recording in progress...</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-indigo-600">SK</span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-sm text-gray-400">
                        <TypewriterText text="We need to finalize the launch timeline..." />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Get Summary */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative ml-0 sm:ml-20 md:ml-0 md:mr-[50%] md:pr-16"
              >
                {/* Number indicator */}
                <div className="absolute left-0 sm:left-[-56px] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-indigo-100 bg-white md:left-auto md:right-[-32px] z-10">
                  <span className="text-base sm:text-lg font-semibold text-[#6366F1]">3</span>
                </div>

                {/* Content card */}
                <div className="ml-16 sm:ml-0 bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Summary & Tasks</h3>
                  <p className="text-base text-gray-500 mb-8">
                    Receive instant summaries in Slack and auto-generated tasks in your project tools.
                  </p>
                  <div className="space-y-6">
                    {/* Slack Summary */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      {/* Slack Header */}
                      <div className="bg-[#1A1D21] text-white px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/logos/slack.svg"
                            alt="Slack"
                            width={16}
                            height={16}
                          />
                          <span className="text-sm font-medium">#team-updates</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <button className="hover:text-white">
                            <Users2 className="w-4 h-4" />
                          </button>
                          <button className="hover:text-white">
                            <Share className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Message Content */}
                      <div className="p-4 hover:bg-gray-50 transition-colors">
                        {/* Bot Message */}
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600">
                            <Sparkles className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900 hover:underline cursor-pointer">Recapify</span>
                              <div className="flex items-center gap-1">
                                <span className="text-[10px] font-medium text-white bg-emerald-500 px-1 rounded">APP</span>
                              </div>
                              <span className="text-gray-500 text-xs hover:underline cursor-pointer">11:30 AM</span>
                            </div>
                            <div className="mt-1 text-gray-900">
                              <p className="font-medium mb-2">📝 Meeting Summary - Product Sync</p>
                              <div className="mt-2 bg-gray-50 rounded border-l-4 border-indigo-500 p-3">
                                <p className="font-medium mb-2">Key Decisions & Action Items:</p>
                                <ul className="space-y-1.5 text-[15px]">
                                  <li>• Launch date set for March 15th</li>
                                  <li>• <button className="text-[#1264A3] hover:underline">@sarah</button> to finalize designs</li>
                                  <li>• <button className="text-[#1264A3] hover:underline">@mike</button> to prep marketing</li>
                                </ul>
                              </div>
                            </div>
                            {/* Slack Reactions */}
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              <button className="inline-flex items-center gap-1 hover:bg-gray-100 bg-gray-50 rounded px-2 py-0.5 text-xs border border-gray-200">
                                👍 <span className="text-gray-600">3</span>
                              </button>
                              <button className="inline-flex items-center gap-1 hover:bg-gray-100 bg-gray-50 rounded px-2 py-0.5 text-xs border border-gray-200">
                                ✅ <span className="text-gray-600">2</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Jira Tasks */}
                    <div className="bg-[#F4F5F7] rounded-xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/logos/jira.svg"
                            alt="Jira"
                            width={20}
                            height={20}
                            className="opacity-75"
                          />
                          <span className="text-sm font-medium text-[#42526E]">Created in Jira</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-[#42526E] hover:bg-[#DFE1E6] p-1 rounded transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            key: 'RECAP-42',
                            title: 'Finalize design specs for mobile app wireframes',
                            priority: 'high',
                            status: 'To Do',
                            assignee: 'SK',
                            assigneeColor: 'bg-indigo-500',
                            dueDate: '2 days',
                            type: 'task'
                          },
                          {
                            key: 'RECAP-43',
                            title: 'Coordinate Q2 marketing campaign launch',
                            priority: 'medium',
                            status: 'In Progress',
                            assignee: 'JD',
                            assigneeColor: 'bg-indigo-400',
                            dueDate: '5 days',
                            type: 'task'
                          }
                        ].map((task) => (
                          <div 
                            key={task.key} 
                            className="group flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:bg-[#F8F9FA] transition-all duration-200 border border-[#DFE1E6] cursor-pointer"
                          >
                            {/* Left Column - Priority */}
                            <div className="mt-1">
                              {task.priority === 'high' ? (
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="#CD1316">
                                  <path d="M8.0001 1.333C11.6821 1.333 14.6667 4.318 14.6667 8C14.6667 11.682 11.6821 14.6666 8.0001 14.6666C4.3181 14.6666 1.33344 11.682 1.33344 8C1.33344 4.318 4.3181 1.333 8.0001 1.333ZM8.0001 2.333C4.8701 2.333 2.33344 4.87 2.33344 8C2.33344 11.13 4.8701 13.6666 8.0001 13.6666C11.1301 13.6666 13.6667 11.13 13.6667 8C13.6667 4.87 11.1301 2.333 8.0001 2.333ZM7.33344 4.333H8.66677V9.333H7.33344V4.333Z" />
                                </svg>
                              ) : (
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="#0052CC">
                                  <path d="M8 1.33325C11.682 1.33325 14.6667 4.31825 14.6667 7.99992C14.6667 11.6816 11.682 14.6666 8 14.6666C4.318 14.6666 1.33334 11.6816 1.33334 7.99992C1.33334 4.31825 4.318 1.33325 8 1.33325Z" fillOpacity="0.4" />
                                </svg>
                              )}
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-medium text-[#42526E] hover:text-[#0052CC] hover:underline transition-colors">
                                  {task.key}
                                </span>
                                <span className={`px-2 py-0.5 text-xs font-medium rounded-full
                                  ${task.status === 'In Progress' 
                                    ? 'bg-indigo-50 text-indigo-600' 
                                    : 'bg-[#DFE1E6] text-[#42526E]'
                                  }`}>
                                  {task.status}
                                </span>
                              </div>
                              <p className="text-sm text-[#172B4D] font-medium mb-3 hover:text-indigo-600 transition-colors line-clamp-2">
                                {task.title}
                              </p>
                              <div className="flex items-center justify-between text-xs text-[#42526E]">
                                <div className="flex items-center gap-3">
                                  <div className={`w-6 h-6 rounded-full ${task.assigneeColor} text-white flex items-center justify-center text-xs font-medium shadow-sm`}>
                                    {task.assignee}
                                  </div>
                                  <span className="flex items-center gap-1.5 text-[#42526E]/70">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <circle cx="12" cy="12" r="10" />
                                      <path d="M12 6v6l4 2" />
                                    </svg>
                                    {task.dueDate}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                  <button className="p-1 hover:bg-[#DFE1E6] rounded transition-colors">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
            {[
              {
                title: 'Engineering Standups',
                description: 'Keep your team aligned and track progress effortlessly',
                icon: <Code2 className="w-6 h-6 text-indigo-600" />,
                features: [
                  'Automatic task creation in Jira',
                  'Instant standup summaries in Slack',
                  'Blocker and dependency tracking'
                ],
                example: {
                  input: "We need to fix the API rate limiting before the next release...",
                  output: {
                    summary: "API Performance Updates",
                    tasks: [
                      "Implement rate limiting fix",
                      "Update API documentation",
                      "Schedule load testing"
                    ],
                    integrations: ['jira', 'slack']
                  }
                }
              },
              {
                title: 'Project Planning',
                description: 'Capture decisions and track action items seamlessly',
                icon: <Target className="w-6 h-6 text-indigo-600" />,
                features: [
                  'Automated task assignment in Asana',
                  'Real-time meeting summaries',
                  'Decision tracking and follow-ups'
                ],
                example: {
                  input: "Let's prioritize the mobile app launch for Q2...",
                  output: {
                    summary: "Q2 Mobile App Launch Plan",
                    tasks: [
                      "Create launch timeline",
                      "Define success metrics",
                      "Prepare marketing assets"
                    ],
                    integrations: ['asana', 'slack']
                  }
                }
              },
              {
                title: 'Client Meetings',
                description: 'Never miss important requirements or commitments',
                icon: <Users2 className="w-6 h-6 text-indigo-600" />,
                features: [
                  'Professional meeting summaries',
                  'Automated follow-up tasks',
                  'Key requirement tracking'
                ],
                example: {
                  input: "We'd like to see the new dashboard features by next month...",
                  output: {
                    summary: "Dashboard Feature Requirements",
                    tasks: [
                      "Design dashboard mockups",
                      "Create feature timeline",
                      "Schedule progress review"
                    ],
                    integrations: ['jira', 'slack']
                  }
                }
              }
            ].map((useCase, index) => (
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
                          <div className="text-sm font-medium text-gray-900 mb-3">
                            {useCase.example.output.summary}
                          </div>
                          <div className="space-y-2">
                            {useCase.example.output.tasks.map((task, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-500" />
                                {task}
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
      
      {/* Core Features Section */}
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
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Speaker Recognition</h4>
                        <p className="text-sm text-gray-500">Automatically identifies and labels different speakers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Technical Accuracy</h4>
                        <p className="text-sm text-gray-500">98% accuracy with industry-specific terminology</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Real-time Processing</h4>
                        <p className="text-sm text-gray-500">Live transcription with minimal latency</p>
                      </div>
                    </div>
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
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="text-sm font-medium text-blue-600">SK</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 mb-1">Sarah Kim</div>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                          "Let's discuss the Q2 roadmap priorities..."
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                        <span className="text-sm font-medium text-purple-600">JD</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 mb-1">John Doe</div>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                          "I think we should prioritize the mobile app launch..."
                        </div>
                      </div>
                    </div>
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
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Smart Extraction</h4>
                        <p className="text-sm text-gray-500">Automatically identifies key discussion points</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Decision Tracking</h4>
                        <p className="text-sm text-gray-500">Never miss important decisions and commitments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Custom Templates</h4>
                        <p className="text-sm text-gray-500">Tailor summaries to your team's needs</p>
                      </div>
                    </div>
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
                      <Handshake className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Works with your existing tools. Automatically sync summaries and tasks 
                    to your team's favorite platforms.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">One-Click Setup</h4>
                        <p className="text-sm text-gray-500">Connect your tools in seconds</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Auto-Sync</h4>
                        <p className="text-sm text-gray-500">Tasks automatically created in your project tools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Custom Workflows</h4>
                        <p className="text-sm text-gray-500">Configure how and where content is shared</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['slack-long', 'asana-long', 'jira-long', 'teams', 'zoom', 'google-meet'].map((tool) => (
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

      {/* FAQ Section */}
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

      {/* Final CTA */}
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

            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                href="https://linkedin.com/company/recapify"
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

      {/* Add Toast at the end */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

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
