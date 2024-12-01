'use client'

import { Upload, Link, Wand2, Download } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      title: 'Import Meeting',
      description: 'Upload recording or transcript',
      icon: Upload,
      action: () => console.log('Import')
    },
    {
      title: 'Generate Summary',
      description: 'Process uploaded meeting',
      icon: Wand2,
      action: () => console.log('Generate')
    },
    {
      title: 'Export Summaries',
      description: 'Download all meeting summaries',
      icon: Download,
      action: () => console.log('Export')
    }
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
      <div className="grid gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={action.action}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left"
          >
            <div className="p-2 bg-indigo-50 rounded-lg">
              <action.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">{action.title}</h3>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
