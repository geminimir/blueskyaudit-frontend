'use client'

import { useState } from 'react'
import { Search, Filter, MoreVertical, Calendar, Users2, Clock, Share2, ListTodo, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export function MeetingSummaries() {
  const [filter, setFilter] = useState('all')

  const meetings = [
    {
      id: "1",
      title: 'Weekly Product Sync',
      date: 'April 12, 2025',
      duration: '45 mins',
      participants: 5,
      transcript: 'This is a sample transcript',
      status: 'Completed',
      integrations: ['jira', 'slack'],
      summary: {
        keyPoints: ["Discussed Q2 roadmap", "Reviewed user feedback"],
        decisions: ["Prioritize mobile app development"],
        actionItems: [
          {
            id: "task-1",
            task: "Create mobile app wireframes",
            assignee: "Sarah Chen",
            status: 'pending',
            priority: 'high',
            dueDate: "2025-04-19",
            integrationRef: {
              type: 'jira',
              id: 'PROD-123',
              url: 'https://your-domain.atlassian.net/browse/PROD-123'
            }
          },
          {
            id: "task-2",
            task: "Schedule user research sessions",
            assignee: "Mike Johnson",
            status: 'pending',
            priority: 'medium',
            dueDate: "2025-04-20",
            integrationRef: {
              type: 'jira',
              id: 'PROD-124',
              url: 'https://your-domain.atlassian.net/browse/PROD-124'
            }
          }
        ]
      },
      tags: ['Product', 'Planning']
    },
    {
      id: "2",
      title: 'Q2 Planning',
      date: 'Today at 10:00 AM',
      duration: '60 mins',
      participants: 8,
      status: 'Processing',
      integrations: ['jira', 'slack'],
      tags: ['Strategy', 'Planning']
    },
    // Add more meetings as needed
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Meeting Summaries</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search meetings..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">Filter</span>
          </button>
        </div>
      </div>

      {/* Meeting Cards */}
      <div className="grid gap-4 max-h-[calc(100vh-16rem)] overflow-y-auto">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {meeting.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {meeting.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {meeting.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" />
                      {meeting.participants} participants
                    </span>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-50 rounded-lg">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-4">
                {meeting.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600"
                  >
                    {tag}
                  </span>
                ))}
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  meeting.status === 'Completed' 
                    ? 'bg-green-50 text-green-600'
                    : 'bg-yellow-50 text-yellow-600'
                }`}>
                  {meeting.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ListTodo className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {meeting.summary?.actionItems?.length || 0} Tasks
                    </span>
                  </div>
                  {/* Task status breakdown */}
                  {meeting.summary?.actionItems && meeting.summary.actionItems.length > 0 && (
                    <div className="flex gap-3 text-xs">
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-3 h-3" />
                        {meeting.summary.actionItems.filter(t => t.status === 'completed').length} Done
                      </span>
                      {meeting.summary.actionItems.some(t => t.integrationRef?.type === 'jira') && (
                        <span className="flex items-center gap-1 text-blue-600">
                          <img src="/logos/jira.svg" alt="Jira" className="w-3 h-3" />
                          {meeting.summary.actionItems.filter(t => t.integrationRef?.type === 'jira').length} In Jira
                        </span>
                      )}
                      {meeting.summary.actionItems.some(t => !t.assignee || !t.dueDate) && (
                        <span className="flex items-center gap-1 text-yellow-600">
                          <AlertCircle className="w-3 h-3" />
                          Needs Review
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex -space-x-2">
                  {meeting.integrations.map((integration) => (
                    <div
                      key={integration}
                      className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center"
                    >
                      <img
                        src={`/logos/${integration}.svg`}
                        alt={integration}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <Link 
                    href={{
                      pathname: `/meetings/${meeting.id}`,
                      query: { meeting: JSON.stringify(meeting) }
                    }}
                    className="px-3 py-1.5 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                  >
                    View Summary
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
