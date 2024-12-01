'use client'

import { Suspense } from 'react'
import { UserProfile } from '@/components/dashboard/UserProfile'
import { DashboardStats } from '@/components/dashboard/DashboardStats'
import { MeetingSummaries } from '@/components/dashboard/MeetingSummaries'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { IntegrationStatus } from '@/components/dashboard/IntegrationStatus'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Left side - Page Title & Description */}
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Welcome back, here's what's happening today
                            </p>
                        </div>

                        {/* Right side - Stats & Actions */}
                        <div className="flex items-center gap-4">
                            <Suspense fallback={<LoadingSpinner />}>
                                <DashboardStats />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Left Column - Meeting Summaries */}
                    <div className="lg:col-span-2">
                        <Suspense fallback={<LoadingSpinner />}>
                            <MeetingSummaries />
                        </Suspense>
                    </div>

                    {/* Right Column - Quick Actions & Integrations */}
                    <div className="space-y-8">
                        <Suspense fallback={<LoadingSpinner />}>
                            <QuickActions />
                        </Suspense>
                        <Suspense fallback={<LoadingSpinner />}>
                            <IntegrationStatus />
                        </Suspense>
                    </div>
                </div>
            </main>
        </div>
    )
}
