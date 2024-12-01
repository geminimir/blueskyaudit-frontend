import { ArrowUp, ArrowDown, Clock, CheckCircle2 } from 'lucide-react'

export function DashboardStats() {
  const stats = [
    {
      label: 'Meetings Processed',
      value: '15',
      change: '+3',
      trend: 'up',
      icon: Clock
    },
    {
      label: 'Tasks Assigned',
      value: '45',
      change: '+12',
      trend: 'up',
      icon: CheckCircle2
    },
    {
      label: 'Completion Rate',
      value: '80%',
      change: '+5%',
      trend: 'up',
      icon: CheckCircle2
    }
  ]

  return (
    <div className="flex gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <stat.icon className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">
                  {stat.value}
                </span>
                <span className={`flex items-center text-xs ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-3 h-3" />
                  ) : (
                    <ArrowDown className="w-3 h-3" />
                  )}
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
