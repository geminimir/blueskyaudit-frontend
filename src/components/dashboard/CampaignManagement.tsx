import { useState } from 'react'

interface Campaign {
  name: string
  status: string
  budget: string
  creators: number
  timeline: string
  progress: number
  tasks: { completed: number, total: number }
}

const initialCampaigns: Campaign[] = [
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
]

export default function CampaignManagement() {
  const [campaigns, setCampaigns] = useState(initialCampaigns)

  return (
    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      {/* Campaign Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-900">Campaign Management</h3>
        <button className="px-4 py-2 bg-[#0185FF] text-white rounded-lg text-sm font-medium hover:bg-[#0165CC] transition-colors">
          New Campaign +
        </button>
      </div>

      {/* Campaign Cards */}
      <div className="space-y-4">
        {campaigns.map((campaign) => (
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
  )
} 