'use client'

import { useSearchParams } from 'next/navigation'
import { MeetingSummary } from '@/components/meetings/MeetingSummary'
import type { Meeting } from '@/types/meetings'

export default function MeetingPage() {
  const searchParams = useSearchParams()
  const meetingData = searchParams.get('meeting')
  const meeting: Meeting = meetingData ? JSON.parse(meetingData) : null

  if (!meeting) {
    return <div>Meeting not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <MeetingSummary 
          meeting={meeting}
          onUpdateMeeting={(updatedMeeting) => {
            // Handle meeting updates
            console.log('Meeting updated:', updatedMeeting)
          }}
        />
      </div>
    </div>
  )
} 