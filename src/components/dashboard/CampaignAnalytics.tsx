import { useState } from 'react'

interface Metric {
  label: string
  value: string
  change: string
  positive: boolean
}

interface OptimizationSuggestion {
  id: number
  text: string
  priority: 'high' | 'medium' | 'low'
}

const metrics: Metric[] = [
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
  },
  {
    label: "Click-through Rate",
    value: "3.2%",
    change: "-0.5%",
    positive: false
  },
  {
    label: "Conversion Rate",
    value: "2.1%",
    change: "+0.3%",
    positive: true
  }
]

const suggestions: OptimizationSuggestion[] = [
  {
    id: 1,
    text: 'Increase posting frequency during peak engagement hours (2PM - 5PM)',
    priority: 'high'
  },
  {
    id: 2,
    text: 'Engage more with comments to boost interaction rates',
    priority: 'medium'
  },
  {
    id: 3,
    text: 'Leverage more video content to increase engagement',
    priority: 'high'
  }
]

export default function CampaignAnalytics() {
  const [timeRange, setTimeRange] = useState('30')
  const engagementData = [40, 65, 45, 50, 80, 70, 60]

  return (
    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      {/* Header with Time Range Selector */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-900">Campaign Analytics</h3>
        <select 
          className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {metrics.map((metric) => (
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
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium text-gray-900">Engagement Overview</h4>
          <div className="flex gap-2">
            {['Posts', 'Stories', 'Comments'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" className="text-[#0185FF]" defaultChecked />
                <span className="text-sm text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Chart */}
        <div className="h-48 bg-gray-50 rounded-xl p-4">
          <div className="h-full w-full flex items-end gap-2">
            {engagementData.map((height, i) => (
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

      {/* Audience Demographics */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Audience Demographics</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h5 className="text-sm font-medium text-gray-700 mb-3">Age Distribution</h5>
            <div className="space-y-2">
              {[
                { age: '18-24', percentage: 35 },
                { age: '25-34', percentage: 45 },
                { age: '35-44', percentage: 15 },
                { age: '45+', percentage: 5 },
              ].map((group) => (
                <div key={group.age} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-12">{group.age}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0185FF] rounded-full"
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{group.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h5 className="text-sm font-medium text-gray-700 mb-3">Top Locations</h5>
            <div className="space-y-3">
              {[
                { location: 'United States', percentage: 45 },
                { location: 'United Kingdom', percentage: 20 },
                { location: 'Canada', percentage: 15 },
                { location: 'Australia', percentage: 10 },
              ].map((location) => (
                <div key={location.location} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{location.location}</span>
                  <span className="text-sm font-medium text-gray-900">{location.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      <div className="bg-[#E6F3FF] rounded-xl p-4">
        <h4 className="font-medium text-[#0185FF] mb-3">Optimization Suggestions</h4>
        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-start gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                suggestion.priority === 'high' 
                  ? 'bg-[#0185FF]' 
                  : suggestion.priority === 'medium'
                    ? 'bg-[#0185FF]/70'
                    : 'bg-[#0185FF]/50'
              }`}>
                <span className="text-xs text-white font-medium">{suggestion.id}</span>
              </div>
              <p className="text-sm text-gray-600">{suggestion.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}