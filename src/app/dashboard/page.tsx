'use client'

import { useState } from 'react'
import InfluencerDiscovery from '@/components/dashboard/InfluencerDiscovery'
import CampaignManagement from '@/components/dashboard/CampaignManagement'
import CampaignAnalytics from '@/components/dashboard/CampaignAnalytics'

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('influencers')

    const tabs = [
        { id: 'influencers', name: 'Influencer Discovery', component: <InfluencerDiscovery /> },
        { id: 'campaigns', name: 'Campaign Management', component: <CampaignManagement /> },
        { id: 'analytics', name: 'Analytics', component: <CampaignAnalytics /> },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section with Integrated Tabs */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Welcome back, here's what's happening today
                            </p>
                        </div>
                    </div>
                    {/* Tab Navigation Integrated into Header */}
                    <nav className="mt-4 border-b border-gray-200" aria-label="Tabs">
                        <div className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                                        ${activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }
                                    `}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Tab Content */}
                <div className="mt-6">
                    {tabs.find(tab => tab.id === activeTab)?.component}
                </div>
            </main>
        </div>
    )
}
