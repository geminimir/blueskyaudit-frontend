import { useState, useEffect } from 'react'
import {
  Clock,
  Users2,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  Share2,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
  ListTodo,
  Send,
  Circle,
  Pencil,
  Save
} from 'lucide-react'
import type { Meeting } from '@/types/meetings'

type MeetingSummaryProps = {
  meeting: Meeting
  onUpdateMeeting?: (meeting: Meeting) => void
}

// Update the Meeting type to only allow specific integrations
type Integration = 'zoom' | 'slack' | 'jira'

type IntegrationAction = {
  type: Integration
  status: 'completed' | 'failed'
  timestamp?: string
  error?: string
}

type Task = {
  id: string
  task: string
  status: 'pending' | 'completed'
  assignee?: string
  dueDate?: string
  integrationRef?: {
    type: string
    id: string
    url: string
  }
}

export function MeetingSummary({ meeting, onUpdateMeeting }: MeetingSummaryProps) {
  const [showTranscript, setShowTranscript] = useState(false)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)
  const [integrationStatus, setIntegrationStatus] = useState<IntegrationAction[]>([])
  const [isCreatingTasks, setIsCreatingTasks] = useState(false)
  const [isSharingToSlack, setIsSharingToSlack] = useState(false)
  const [activeSection, setActiveSection] = useState<'keyPoints' | 'decisions' | 'actions'>('keyPoints')
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)


  const handleCopyToClipboard = async () => {
    const summaryText = `
Meeting: ${meeting.title}
Date: ${meeting.date}
Duration: ${meeting.duration}

Key Points:
${meeting.summary?.keyPoints.map(point => `• ${point}`).join('\n')}

Decisions Made:
${meeting.summary?.decisions.map(decision => `• ${decision}`).join('\n')}

Action Items:
${meeting.summary?.actionItems.map(item => `• ${item.task} (Assigned to: ${item.assignee})`).join('\n')}
    `.trim()

    await navigator.clipboard.writeText(summaryText)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  const handleCreateJiraTasks = async () => {
    setIsCreatingTasks(true)
    try {
      // Mock API call for MVP
      await new Promise(resolve => setTimeout(resolve, 1500))

      // In real implementation: 
      // - Create Jira tasks from action items
      // - Link them back to this meeting summary
      // - Update UI with success/failure

      setIntegrationStatus(prev => [...prev, {
        type: 'jira',
        status: 'completed',
        timestamp: new Date().toISOString()
      }])
    } catch (error) {
      setIntegrationStatus(prev => [...prev, {
        type: 'jira',
        status: 'failed',
        error: 'Failed to create Jira tasks'
      }])
    } finally {
      setIsCreatingTasks(false)
    }
  }

  const handleShareToSlack = async () => {
    setIsSharingToSlack(true)
    try {
      // Mock API call for MVP
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In real implementation:
      // - Share to selected Slack channel
      // - Include key points, decisions, and action items
      // - Add link back to full summary

      setIntegrationStatus(prev => [...prev, {
        type: 'slack',
        status: 'completed',
        timestamp: new Date().toISOString()
      }])
    } catch (error) {
      setIntegrationStatus(prev => [...prev, {
        type: 'slack',
        status: 'failed',
        error: 'Failed to share to Slack'
      }])
    } finally {
      setIsSharingToSlack(false)
    }
  }

  const handleTaskStatusChange = (taskId: string) => {
    if (!meeting.summary) return

    const updatedMeeting = {
      ...meeting,
      summary: {
        ...meeting.summary,
        actionItems: meeting.summary.actionItems.map(item =>
          item.id === taskId
            ? { ...item, status: item.status === 'completed' ? 'pending' : 'completed' }
            : item
        )
      }
    }

    onUpdateMeeting?.(updatedMeeting as Meeting)
  }

  const handleCopyKeyPoints = async () => {
    if (!meeting.summary?.keyPoints) return;
    
    const text = meeting.summary.keyPoints
      .map((point, index) => `${index + 1}. ${point}`)
      .join('\n');

    await navigator.clipboard.writeText(text);
    // Show toast or feedback
  };

  const handleCopyDecisions = async () => {
    if (!meeting.summary?.decisions) return;
    
    const text = meeting.summary.decisions
      .map((decision, index) => `• ${decision}`)
      .join('\n');

    await navigator.clipboard.writeText(text);
    // Show toast or feedback
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col min-h-[600px]">
      {/* Upper content wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Header (fixed) */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {meeting.title}
              </h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
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

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyToClipboard}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copiedToClipboard ? 'Copied!' : 'Copy Summary'}
              </button>
              <button
                onClick={handleShareToSlack}
                disabled={isSharingToSlack}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <img
                  src="/logos/slack.svg"
                  alt="Slack"
                  className="w-4 h-4"
                />
                {isSharingToSlack ? 'Sharing...' : 'Share to Slack'}
              </button>
            </div>
          </div>

          {/* Status badges */}
          <div className="mt-4 flex items-center gap-3">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${meeting.status === 'Completed'
                ? 'bg-green-50 text-green-600'
                : 'bg-yellow-50 text-yellow-600'
              }`}>
              {meeting.status}
            </span>
            {meeting.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Tabs (fixed) */}
        <div className="border-b border-gray-100">
          <nav className="flex gap-4 px-4" aria-label="Meeting summary sections">
            {['keyPoints', 'decisions', 'actions'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section as typeof activeSection)}
                className={`py-3 px-1 text-sm font-medium border-b-2 ${activeSection === section
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                {section === 'keyPoints' ? 'Key Points' :
                  section === 'decisions' ? 'Decisions' :
                    'Action Items'}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content (scrollable) */}
        <div className="p-4 flex-1 overflow-y-auto">
          {activeSection === 'actions' && (
            <div>
              {/* Action Items Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ListTodo className="w-5 h-5 text-gray-500" />
                  <h3 className="font-medium text-gray-900">
                    Action Items ({meeting.summary?.actionItems.filter(item => item.status === 'completed').length || 0}/{meeting.summary?.actionItems.length || 0})
                  </h3>
                </div>

                {/* Quick filters */}
                <div className="flex gap-2 text-sm">
                  <button className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100">
                    All
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-100">
                    Pending
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-100">
                    Completed
                  </button>
                </div>
              </div>

              {/* Tasks Grid */}
              <div className="grid gap-3">
                {meeting.summary?.actionItems.map((item) => (
                  <TaskDisplay
                    key={item.id}
                    task={item}
                    onStatusChange={handleTaskStatusChange}
                  />
                ))}
              </div>

              {/* Empty State */}
              {(!meeting.summary?.actionItems || meeting.summary.actionItems.length === 0) && (
                <div className="text-center py-12">
                  <ListTodo className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-gray-900 font-medium mb-1">No action items yet</h3>
                  <p className="text-gray-500 text-sm">
                    Action items from the meeting will appear here
                  </p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'keyPoints' && (
            <div>
              {/* Key Points Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                  <h3 className="font-medium text-gray-900">
                    Key Points ({meeting.summary?.keyPoints.length || 0})
                  </h3>
                </div>

                <button
                  onClick={handleCopyToClipboard}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-full flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy All
                </button>
              </div>

              {/* Key Points Grid */}
              <div className="grid gap-3">
                {meeting.summary?.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-200"
                  >
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <p className="text-gray-600">{point}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {(!meeting.summary?.keyPoints || meeting.summary.keyPoints.length === 0) && (
                <div className="text-center py-12">
                  <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-gray-900 font-medium mb-1">No key points yet</h3>
                  <p className="text-gray-500 text-sm">
                    Key discussion points from the meeting will appear here
                  </p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'decisions' && (
            <div>
              {/* Decisions Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gray-500" />
                  <h3 className="font-medium text-gray-900">
                    Decisions Made ({meeting.summary?.decisions.length || 0})
                  </h3>
                </div>

                <button
                  onClick={handleCopyToClipboard}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-full flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy All
                </button>
              </div>

              {/* Decisions Grid */}
              <div className="grid gap-3">
                {meeting.summary?.decisions.map((decision, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-200"
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-600">{decision}</p>
                        {/* Optional: Add metadata or tags */}
                        <div className="flex gap-2">
                          {decision.toLowerCase().includes('schedule') && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                              Schedule
                            </span>
                          )}
                          {decision.toLowerCase().includes('priority') && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700">
                              Priority
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {(!meeting.summary?.decisions || meeting.summary.decisions.length === 0) && (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-gray-900 font-medium mb-1">No decisions recorded</h3>
                  <p className="text-gray-500 text-sm">
                    Important decisions made during the meeting will appear here
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Transcript Section (fixed at bottom) */}
      {meeting.transcript && (
        <div className="border-t border-gray-100">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="w-full p-4 flex items-center justify-between text-sm text-gray-500 hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              View Meeting Transcript
            </div>
            {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showTranscript && (
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                {meeting.transcript}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function TaskDisplay({ task, onStatusChange }: { task: Task; onStatusChange: (taskId: string) => void }) {
  const hasJiraTicket = task.integrationRef?.type === 'jira';

  return (
    <div className="rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-200">
      <div className="p-4">
        {/* Task Content */}
        <div className="flex items-start gap-3">
          {/* Completion Status */}
          <button
            onClick={() => onStatusChange(task.id)}
            className="mt-1 flex-shrink-0"
          >
            {task.status === 'completed' ? (
              <div className="rounded-full bg-green-100 p-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
            ) : (
              <div className="rounded-full border-2 border-gray-200 p-1 hover:border-gray-300">
                <Circle className="w-4 h-4 text-gray-300" />
              </div>
            )}
          </button>

          {/* Task Details */}
          <div className="flex-1 min-w-0">
            {/* Task Title and Metadata */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-gray-900 font-medium">{task.task}</p>
                {hasJiraTicket && (
                  <span className="flex-shrink-0 flex items-center gap-1.5 px-2 py-1 text-sm text-blue-600 bg-blue-50 rounded-md">
                    <img src="/logos/jira.svg" alt="Jira" className="w-4 h-4" />
                    {task.integrationRef?.id}
                  </span>
                )}
              </div>

              {/* Task Metadata */}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                {task.assignee && (
                  <span className="flex items-center gap-1.5">
                    <Users2 className="w-4 h-4" />
                    {task.assignee}
                  </span>
                )}
                {task.dueDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Jira Link Button - Moved to right */}
          {hasJiraTicket && (
            <div className="flex-shrink-0">
              <a
                href={task.integrationRef?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <img src="/logos/jira.svg" alt="Jira" className="w-4 h-4" />
                View in Jira
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Integration Status Bar */}
      {hasJiraTicket && (
        <div className="border-t border-gray-100 px-4 py-2 bg-gray-50/50 rounded-b-xl text-sm text-gray-500">
          Updates and progress are managed in Jira
        </div>
      )}
    </div>
  );
}


