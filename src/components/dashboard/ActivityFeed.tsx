import { MessageSquare, Users, Star, TrendingUp, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface Activity {
    id: string
    type: 'message' | 'collaboration' | 'review' | 'milestone' | 'reminder'
    title: string
    description: string
    timestamp: Date
    status?: string
}

interface ActivityFeedProps {
    limit?: number
}

export default function ActivityFeed({ limit = 5 }: ActivityFeedProps) {
    const activities: Activity[] = [
        {
            id: '1',
            type: 'message',
            title: 'New Message',
            description: 'Sarah Chen sent you a campaign proposal',
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
            status: 'unread'
        },
        {
            id: '2',
            type: 'collaboration',
            title: 'Campaign Update',
            description: 'Tech Launch campaign reached 50% completion',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        },
        {
            id: '3',
            type: 'review',
            title: 'Content Review',
            description: 'New content ready for review from Alex Rivera',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
        },
        {
            id: '4',
            type: 'milestone',
            title: 'Milestone Achieved',
            description: 'AI Product campaign reached 1M impressions',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        },
        {
            id: '5',
            type: 'reminder',
            title: 'Campaign Ending Soon',
            description: 'Summer Tech Launch ends in 3 days',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        }
    ]

    const getActivityIcon = (type: Activity['type']) => {
        switch (type) {
            case 'message':
                return <MessageSquare className="w-5 h-5" />
            case 'collaboration':
                return <Users className="w-5 h-5" />
            case 'review':
                return <Star className="w-5 h-5" />
            case 'milestone':
                return <TrendingUp className="w-5 h-5" />
            case 'reminder':
                return <Clock className="w-5 h-5" />
        }
    }

    const getActivityColor = (type: Activity['type']) => {
        switch (type) {
            case 'message':
                return 'bg-blue-100 text-blue-600'
            case 'collaboration':
                return 'bg-purple-100 text-purple-600'
            case 'review':
                return 'bg-yellow-100 text-yellow-600'
            case 'milestone':
                return 'bg-green-100 text-green-600'
            case 'reminder':
                return 'bg-red-100 text-red-600'
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-[#0185FF]">View All</button>
            </div>
            
            <div className="space-y-4">
                {activities.slice(0, limit).map((activity) => (
                    <div 
                        key={activity.id}
                        className={`flex gap-4 p-3 rounded-lg ${
                            activity.status === 'unread' ? 'bg-[#F7FBFF]' : ''
                        }`}
                    >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${getActivityColor(activity.type)} flex items-center justify-center`}>
                            {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium text-gray-900">{activity.title}</p>
                                    <p className="text-sm text-gray-600">{activity.description}</p>
                                </div>
                                <span className="text-xs text-gray-500 whitespace-nowrap">
                                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {activities.length > limit && (
                <button className="w-full mt-4 py-2 text-sm text-[#0185FF] border border-[#0185FF]/20 rounded-lg hover:bg-[#F7FBFF] transition-colors">
                    Show More
                </button>
            )}
        </div>
    )
}
