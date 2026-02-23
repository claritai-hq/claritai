'use client'
import { TopBar } from '@/components/layout/TopBar'
import { Bell, Plus } from 'lucide-react'
const alerts = [
  { id: '1', name: 'Daily spend limit', condition: 'Total daily spend > $200', lastTriggered: '2 days ago' },
  { id: '2', name: 'Monthly budget', condition: 'Monthly spend > $4,000', lastTriggered: 'Never' },
  { id: '3', name: 'User spike', condition: 'Any user spend increases > 3x in a day', lastTriggered: '4 days ago' },
]
export default function AlertsPage() {
  return (
    <div>
      <TopBar title="Alerts" />
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: '#64748b' }}>{alerts.length} active alerts</p>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: '#3b82f6' }}>
            <Plus className="h-4 w-4"/>New Alert
          </button>
        </div>
        <div className="space-y-3">
          {alerts.map(a => (
            <div key={a.id} className="flex items-center justify-between rounded-xl px-6 py-4" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: '#3b82f618' }}><Bell className="h-4 w-4" style={{ color: '#3b82f6' }}/></div>
                <div><p className="text-sm font-semibold text-white">{a.name}</p><p className="text-xs" style={{ color: '#64748b' }}>{a.condition}</p></div>
              </div>
              <div className="flex items-center gap-6">
                <div><p className="text-xs" style={{ color: '#64748b' }}>Last triggered</p><p className="text-sm text-white">{a.lastTriggered}</p></div>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: '#22c55e18', color: '#22c55e' }}>Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}