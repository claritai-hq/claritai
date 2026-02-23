'use client'
import { TopBar } from '@/components/layout/TopBar'
import { integrations } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'
export default function IntegrationsPage() {
  return (
    <div>
      <TopBar title="Integrations" />
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4">
          {integrations.map(i => (
            <div key={i.id} className="rounded-xl p-5 flex flex-col gap-4" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white" style={{ background: i.color+'22', border: '1px solid '+i.color+'40' }}>{i.name.charAt(0)}</div>
                {i.connected ? (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: '#22c55e18', color: '#22c55e' }}>Connected</span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full text-xs" style={{ background: '#1e1e2e', color: '#64748b' }}>Not connected</span>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{i.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#64748b' }}>{i.description}</p>
                {i.connected && i.spend && <p className="text-xs mt-2" style={{ color: '#64748b' }}><span className="text-white font-semibold">{formatCurrency(i.spend)}</span> this month</p>}
              </div>
              <button className="w-full py-2 rounded-lg text-sm font-medium transition-all" style={i.connected ? { background: '#1e1e2e', color: '#94a3b8' } : { background: '#3b82f6', color: '#fff' }}>
                {i.connected ? 'Configure' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}