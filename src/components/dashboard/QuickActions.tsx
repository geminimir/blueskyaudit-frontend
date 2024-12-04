import { Plus, Search, TrendingUp, MessageSquare } from 'lucide-react'

interface QuickActionsProps {
    onCreateCampaign: () => void
    onFindCreators: () => void
}

export default function QuickActions({ onCreateCampaign, onFindCreators }: QuickActionsProps) {
    const actions = [
        {
            icon: <Plus className="w-5 h-5" />,
            label: 'Create Campaign',
            description: 'Start a new campaign',
            onClick: onCreateCampaign,
            primary: true
        },
        {
            icon: <Search className="w-5 h-5" />,
            label: 'Find Creators',
            description: 'Discover new creators',
            onClick: onFindCreators
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            label: 'Messages',
            description: '3 unread messages',
            onClick: () => {}
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            label: 'Reports',
            description: 'View campaign reports',
            onClick: () => {}
        }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
                {actions.map((action) => (
                    <button
                        key={action.label}
                        onClick={action.onClick}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            action.primary
                                ? 'bg-[#0185FF] text-white hover:bg-[#0165CC]'
                                : 'border border-gray-200 hover:border-[#0185FF]/30 hover:bg-[#F7FBFF]'
                        }`}
                    >
                        <div className={`${
                            action.primary
                                ? 'text-white'
                                : 'text-[#0185FF]'
                        }`}>
                            {action.icon}
                        </div>
                        <div className="text-left">
                            <div className={`font-medium ${
                                action.primary ? 'text-white' : 'text-gray-900'
                            }`}>
                                {action.label}
                            </div>
                            <div className={`text-sm ${
                                action.primary ? 'text-white/80' : 'text-gray-500'
                            }`}>
                                {action.description}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
