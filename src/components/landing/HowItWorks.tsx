'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, CheckCircle, Sparkles, Mic, Globe, Users2, Share } from 'lucide-react'
import TypewriterText from '@/components/ui/TypewriterText'

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-base font-semibold leading-7 text-[#6366F1]">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Meetings, Automatically Organized
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Focus on the conversation while Recapify handles everything else - from transcription to task creation
            </p>
          </motion.div>
        </div>

        {/* Steps Container */}
        <div className="space-y-32">
          {/* Step 1: Connect */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left side - Text */}
              <div className="lg:pr-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                    <span className="text-xl font-semibold text-indigo-600">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">One-Click Setup</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Connect your favorite tools in seconds. Recapify works seamlessly with your existing workflow - no new tabs or apps to manage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">No New Apps to Learn</h4>
                      <p className="text-gray-600">Works with the tools you already use daily</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Secure OAuth Integration</h4>
                      <p className="text-gray-600">Connect securely with just a few clicks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Customizable Workflow</h4>
                      <p className="text-gray-600">Configure exactly how you want to use each tool</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Supported Integrations */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <h4 className="text-base font-medium text-gray-500 mb-8">Supported Integrations</h4>
                  <div className="grid grid-cols-5 gap-8">
                    {[
                      { name: 'Zoom', category: 'Meetings' },
                      { name: 'Teams', category: 'Meetings' },
                      { name: 'Slack', category: 'Communication' },
                      { name: 'Jira', category: 'Tasks' },
                      { name: 'Asana', category: 'Tasks' },
                    ].map((tool) => (
                      <div
                        key={tool.name}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors">
                          <Image
                            src={`/logos/${tool.name.toLowerCase()}.svg`}
                            alt={tool.name}
                            width={32}
                            height={32}
                            className="opacity-75 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <span className="text-sm text-gray-600 text-center">{tool.name}</span>
                        <span className="text-xs text-gray-400 text-center">{tool.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 2: Meeting Magic */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left side - Zoom Meeting Mock */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Zoom Header */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logos/zoom.svg"
                        alt="Zoom"
                        width={20}
                        height={20}
                        className="opacity-75"
                      />
                      <span className="text-gray-700 text-sm font-medium">Product Team Sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Recording
                      </div>
                    </div>
                  </div>

                  {/* Meeting Content */}
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Live Transcription */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-600 text-sm font-medium">Sarah K.</span>
                          <TypewriterText text="We need to finalize the launch timeline for the new feature." />
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-600 text-sm font-medium">John D.</span>
                          <p className="text-gray-600 text-sm">
                            I can have the designs ready by next week. Let's aim for March 15th.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-600 text-sm font-medium">Mike P.</span>
                          <p className="text-gray-600 text-sm">
                            Perfect, I'll start preparing the marketing assets.
                          </p>
                        </div>
                      </div>

                      {/* AI Detection */}
                      <div className="border-t border-gray-100 pt-4 mt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-4 h-4 text-indigo-600" />
                          <span className="text-sm text-indigo-600 font-medium">AI Insights</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-indigo-50 rounded-lg px-4 py-3 border border-indigo-100">
                            <span className="block text-xs font-medium text-indigo-600 mb-1">Decision</span>
                            <p className="text-gray-600 text-sm">Launch date: March 15th</p>
                          </div>
                          <div className="bg-green-50 rounded-lg px-4 py-3 border border-green-100">
                            <span className="block text-xs font-medium text-green-600 mb-1">Task</span>
                            <p className="text-gray-600 text-sm">Design specs due next week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Text */}
              <div className="lg:pl-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                    <span className="text-xl font-semibold text-indigo-600">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Meeting Magic</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Join your meeting as usual. Recapify listens, transcribes, and identifies key moments in real-time.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: <Mic className="w-5 h-5" />, title: 'Smart Transcription', description: 'Industry-leading accuracy with speaker detection' },
                    { icon: <Brain className="w-5 h-5" />, title: 'AI Understanding', description: 'Identifies decisions, tasks, and follow-ups' },
                    { icon: <Globe className="w-5 h-5" />, title: 'Any Platform', description: 'Works with Zoom, Teams, Meet, and more' },
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 3: Automated Output */}
          <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                    <span className="text-xl font-semibold text-indigo-600">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Instant Organization</h3>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meeting ends, work begins. Get AI-powered summaries in Slack and auto-generated tasks in your project tools.
                </p>
              </motion.div>

              {/* Integration Previews */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Slack Preview */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3" />
                  <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden">
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
                        <button className="hover:text-white transition-colors">
                          <Users2 className="w-4 h-4" />
                        </button>
                        <button className="hover:text-white transition-colors">
                          <Share className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Message Content */}
                    <div className="p-4 hover:bg-gray-50 transition-colors">
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
                            <div className="mt-2 bg-gray-50 rounded border-l-4 border-indigo-500 p-3 space-y-4">
                              <div>
                                <p className="font-medium mb-2">Key Decisions:</p>
                                <ul className="space-y-1.5 text-[15px]">
                                  <li>• Launch date set for March 15th</li>
                                  <li>• Marketing timeline approved - 2 weeks prep time</li>
                                  <li>• Design system updates to be included in launch</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium mb-2">Action Items:</p>
                                <ul className="space-y-1.5 text-[15px]">
                                  <li>• <button className="text-[#1264A3] hover:underline">@sarah</button> to finalize designs by Friday</li>
                                  <li>• <button className="text-[#1264A3] hover:underline">@mike</button> to prep marketing assets</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium mb-2">Follow-ups:</p>
                                <ul className="space-y-1.5 text-[15px]">
                                  <li>• Review meeting scheduled for next Thursday</li>
                                  <li>• Beta testing to begin next week</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Slack Reactions */}
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            <button className="inline-flex items-center gap-1 hover:bg-gray-100 bg-gray-50 rounded px-2 py-0.5 text-xs border border-gray-200">
                              👍 <span className="text-gray-600">3</span>
                            </button>
                            <button className="inline-flex items-center gap-1 hover:bg-gray-100 bg-gray-50 rounded px-2 py-0.5 text-xs border border-gray-200">
                              ✅ <span className="text-gray-600">2</span>
                            </button>
                            <button className="inline-flex items-center gap-1 hover:bg-gray-100 bg-gray-50 rounded px-2 py-0.5 text-xs border border-gray-200">
                              🎯 <span className="text-gray-600">1</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Jira Preview */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3" />
                  <div className="relative bg-[#F4F5F7] rounded-xl p-6">
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
                        },
                        {
                          key: 'RECAP-44',
                          title: 'Schedule user research interviews for new feature',
                          priority: 'high', 
                          status: 'To Do',
                          assignee: 'AM',
                          assigneeColor: 'bg-indigo-600',
                          dueDate: '3 days',
                          type: 'task'
                        }
                      ].map((task) => (
                        <div 
                          key={task.key} 
                          className="group flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:bg-[#F8F9FA] transition-all duration-200 border border-[#DFE1E6] cursor-pointer"
                        >
                          {/* Priority Icon */}
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
                </motion.div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
