'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, CheckCircle, Sparkles, Mic, Globe, Users2, Share, Search, Filter, Star } from 'lucide-react'
import TypewriterText from '@/components/ui/TypewriterText'

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-24 overflow-hidden bg-gradient-to-b from-white to-[#F7FBFF]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-base font-semibold leading-7 text-[#0185FF]">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Grow Your Brand on Bluesky
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with authentic creators, launch impactful campaigns, and measure real results in the decentralized social space
            </p>
          </motion.div>
        </div>

        {/* Steps Container */}
        <div className="space-y-32">
          {/* Step 1: Discover */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left side - Text */}
              <div className="lg:pr-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F3FF]">
                    <span className="text-xl font-semibold text-[#0185FF]">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Discover Perfect Creators</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Find creators who align with your brand using our AI-powered discovery engine that analyzes engagement, audience authenticity, and content quality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0185FF] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Advanced Creator Search</h4>
                      <p className="text-gray-600">Filter by niche, engagement rate, and audience demographics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0185FF] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Authenticity Scoring</h4>
                      <p className="text-gray-600">Verify real engagement and genuine following</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0185FF] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Content Analysis</h4>
                      <p className="text-gray-600">Review past performance and content quality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Creator Discovery UI */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0185FF]/10 to-[#00B4FF]/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  {/* Search and Filter Bar */}
                  <div className="mb-6">
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Search creators..."
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg pl-10"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                      <button className="px-4 py-2 bg-[#0185FF] text-white rounded-lg flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Filters
                      </button>
                    </div>
                    {/* Filter Pills */}
                    <div className="flex gap-2 flex-wrap">
                      {['Tech', 'Gaming', '10k+ followers', 'High Engagement'].map((filter) => (
                        <span key={filter} className="px-3 py-1 bg-[#E6F3FF] text-[#0185FF] text-sm rounded-full">
                          {filter} ×
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Creator Cards */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Sarah Chen",
                        handle: "techsarah",
                        avatar: "/avatars/sarah.png",
                        rating: 4.9,
                        followers: "28.5k",
                        engagementRate: "6.8%",
                        authScore: 96,
                        tags: ["Tech", "AI", "Startups"]
                      },
                      {
                        name: "Alex Rivera",
                        handle: "alexcodes",
                        avatar: "/avatars/alex.png",
                        rating: 4.7,
                        followers: "15.2k",
                        engagementRate: "8.3%",
                        authScore: 94,
                        tags: ["Development", "Web3"]
                      }
                    ].map((creator) => (
                      <div key={creator.handle} className="p-4 border border-gray-100 rounded-xl hover:border-[#0185FF]/30 transition-colors">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                            <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-gray-900">{creator.name}</h4>
                                <p className="text-sm text-gray-600">@{creator.handle}</p>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-[#0185FF]">
                                <Star className="w-4 h-4 fill-[#0185FF]" />
                                <span>{creator.rating}</span>
                              </div>
                            </div>
                            {/* Stats */}
                            <div className="mt-3 flex gap-4 text-sm text-gray-600">
                              <div>
                                <span className="font-medium">{creator.followers}</span> Followers
                              </div>
                              <div>
                                <span className="font-medium">{creator.engagementRate}</span> Eng. Rate
                              </div>
                              <div>
                                <span className="font-medium">{creator.authScore}</span> Auth. Score
                              </div>
                            </div>
                            {/* Tags */}
                            <div className="mt-3 flex gap-2 flex-wrap">
                              {creator.tags.map((tag) => (
                                <span key={tag} className="px-2 py-0.5 bg-[#E6F3FF] text-[#0185FF] text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View More Button */}
                  <button className="w-full mt-4 py-2 text-[#0185FF] text-sm font-medium border border-[#0185FF]/20 rounded-lg hover:bg-[#0185FF]/5 transition-colors">
                    View More Creators
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 2: Campaign Management */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left side - Campaign Dashboard */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0185FF]/10 to-[#00B4FF]/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  {/* Campaign Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg text-gray-900">Active Campaigns</h3>
                    <button className="px-4 py-2 bg-[#0185FF] text-white rounded-lg text-sm font-medium hover:bg-[#0165CC] transition-colors">
                      New Campaign +
                    </button>
                  </div>

                  {/* Campaign Cards */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Summer Tech Launch",
                        status: "In Progress",
                        budget: "$15,000",
                        creators: 5,
                        timeline: "Jun 15 - Jul 15",
                        progress: 65,
                        tasks: { completed: 8, total: 12 }
                      },
                      {
                        name: "AI Product Review",
                        status: "Planning",
                        budget: "$8,000",
                        creators: 3,
                        timeline: "Jul 1 - Jul 30",
                        progress: 25,
                        tasks: { completed: 2, total: 8 }
                      }
                    ].map((campaign) => (
                      <div key={campaign.name} className="border border-gray-100 rounded-xl p-4 hover:border-[#0185FF]/30 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                            <p className="text-sm text-gray-500">{campaign.timeline}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            campaign.status === "In Progress" 
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {campaign.status}
                          </span>
                        </div>

                        {/* Campaign Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Budget</p>
                            <p className="font-medium text-gray-900">{campaign.budget}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Creators</p>
                            <p className="font-medium text-gray-900">{campaign.creators}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Tasks</p>
                            <p className="font-medium text-gray-900">{campaign.tasks.completed}/{campaign.tasks.total}</p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Campaign Progress</span>
                            <span className="text-[#0185FF] font-medium">{campaign.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#0185FF] rounded-full transition-all duration-500"
                              style={{ width: `${campaign.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-2 mt-4">
                          <button className="flex-1 px-3 py-2 text-sm text-gray-700 font-medium border border-gray-200 rounded-lg hover:border-[#0185FF]/30 hover:text-[#0185FF] transition-colors">
                            View Details
                          </button>
                          <button className="flex-1 px-3 py-2 text-sm text-gray-700 font-medium border border-gray-200 rounded-lg hover:border-[#0185FF]/30 hover:text-[#0185FF] transition-colors">
                            Message Creators
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Campaign Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#E6F3FF] rounded-xl">
                      <h4 className="font-medium text-[#0185FF] mb-2">Content Calendar</h4>
                      <p className="text-sm text-gray-600">3 posts scheduled this week</p>
                    </div>
                    <div className="p-4 bg-[#E6F3FF] rounded-xl">
                      <h4 className="font-medium text-[#0185FF] mb-2">Pending Approvals</h4>
                      <p className="text-sm text-gray-600">2 items need review</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Text */}
              <div className="lg:pl-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F3FF]">
                    <span className="text-xl font-semibold text-[#0185FF]">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Launch & Manage Campaigns</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Create, manage, and track campaigns with ease. Our platform streamlines collaboration between brands and creators.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: <Users2 className="w-5 h-5" />, title: 'Seamless Collaboration', description: 'Direct messaging and content approval workflow' },
                    { icon: <Share className="w-5 h-5" />, title: 'Content Management', description: 'Track deliverables and maintain brand guidelines' },
                    { icon: <Globe className="w-5 h-5" />, title: 'Real-time Updates', description: 'Monitor campaign progress and creator activity' },
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#E6F3FF] flex items-center justify-center text-[#0185FF]">
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

          {/* Step 3: Analytics & Insights */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left side - Text */}
              <div className="lg:pr-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F3FF]">
                    <span className="text-xl font-semibold text-[#0185FF]">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Measure & Optimize</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Get detailed insights into campaign performance with our comprehensive analytics dashboard.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0185FF] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Real-time Analytics</h4>
                      <p className="text-gray-600">Track engagement, reach, and ROI in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0185FF] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Audience Insights</h4>
                      <p className="text-gray-600">Understand audience demographics and behavior</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0185FF] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Performance Reports</h4>
                      <p className="text-gray-600">Generate detailed campaign reports and ROI analysis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Simplified Analytics Dashboard */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0185FF]/10 to-[#00B4FF]/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  {/* Header with Time Range Selector */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg text-gray-900">Campaign Analytics</h3>
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm">
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                      <option>This Year</option>
                    </select>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        label: "Total Reach",
                        value: "1.2M",
                        change: "+12.5%",
                        positive: true
                      },
                      {
                        label: "Engagement Rate",
                        value: "5.8%",
                        change: "+0.8%",
                        positive: true
                      }
                    ].map((metric) => (
                      <div key={metric.label} className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                        <div className="flex items-end justify-between">
                          <span className="text-2xl font-semibold text-gray-900">{metric.value}</span>
                          <span className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Engagement Chart */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">Engagement Overview</h4>
                    {/* Chart Placeholder */}
                    <div className="h-48 bg-gray-50 rounded-xl p-4">
                      <div className="h-full w-full flex items-end gap-2">
                        {[40, 65, 45, 50, 80, 70, 60].map((height, i) => (
                          <div key={i} className="flex-1 bg-[#0185FF]/20 rounded-t-lg relative" style={{ height: `${height}%` }}>
                            <div 
                              className="absolute bottom-0 left-0 right-0 bg-[#0185FF] rounded-t-lg transition-all"
                              style={{ height: `${height * 0.7}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Optimization Suggestions */}
                  <div className="bg-[#E6F3FF] rounded-xl p-4">
                    <h4 className="font-medium text-[#0185FF] mb-3">Optimization Suggestions</h4>
                    <div className="space-y-2">
                      {[
                        'Increase posting frequency during peak engagement hours',
                        'Engage more with comments to boost interaction'
                      ].map((suggestion, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#0185FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-white font-medium">{i + 1}</span>
                          </div>
                          <p className="text-sm text-gray-600">{suggestion}</p>
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
  )
}
