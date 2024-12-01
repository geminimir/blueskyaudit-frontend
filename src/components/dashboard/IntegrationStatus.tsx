'use client'
import { useState } from 'react'

export function IntegrationStatus() {
  const [managingIntegrations, setManagingIntegrations] = useState(false)

  const integrations = [
    {
      name: 'Zoom',
      status: 'connected',
      icon: '/logos/zoom.svg',
      lastSync: 'Last sync: 2h ago'
    },
    {
      name: 'Slack',
      status: 'connected',
      icon: '/logos/slack.svg',
      lastSync: 'Last sync: 1h ago'
    },
    {
      name: 'Asana',
      status: 'disconnected',
      icon: '/logos/asana.svg',
      lastSync: null
    }
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-[calc(24rem+2rem)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Integrations</h2>
        <button 
          onClick={() => setManagingIntegrations(true)}
          className="text-sm text-indigo-600 hover:text-indigo-700"
        >
          Manage
        </button>
      </div>
      <div className="grid gap-4 max-h-[calc(100vh-36rem)] overflow-y-auto">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-900">
                {integration.name}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">
                {integration.lastSync || 'Not connected'}
              </span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              integration.status === 'connected'
                ? 'bg-green-50 text-green-600'
                : 'bg-gray-50 text-gray-600'
            }`}>
              {integration.status === 'connected' ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
