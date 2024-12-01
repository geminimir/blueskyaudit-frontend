export type Integration = 'zoom' | 'slack' | 'jira'

export type Meeting = {
  id: string
  title: string
  date: string
  duration: string
  participants: number
  status: 'Completed' | 'Processing'
  tags: string[]
  integrations: Integration[]
  summary?: {
    keyPoints: string[]
    decisions: string[]
    actionItems: {
      id: string
      task: string
      assignee: string
      status: 'pending' | 'completed'
      priority: 'low' | 'medium' | 'high'
      dueDate?: string
      integrationRef?: {
        type: 'jira'
        id: string
        url: string
      }
    }[]
  }
  transcript?: string
} 