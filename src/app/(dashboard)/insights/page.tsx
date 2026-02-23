'use client'
import { TopBar } from '@/components/layout/TopBar'
import { insights } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'
import { AlertTriangle, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react'
const typeConfig: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  anomaly: { icon: AlertTriangle, color: '#f59e0b', bg: '#f59e0b18', label: 'Anomaly' },
  recommendation: { icon: Lightbulb, color: '#3b82f6', bg: '#3b82f618', label: 'Recommendation' },
  alert: { icon: AlertTriangle, color: '#ef4444', bg: '#ef444418', label: 'Alert' },
  spike: { icon: TrendingUp, color: '#8b5cf6', bg: '#8b5cf618', label: 'Usage Spike' },
}
export default function InsightsPage() {
  return (
    <div>
      <TopBar title="Insights" />
      <div className="p-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {insights.map(insight => {
            const c = typeConfig[insight.type]
            const Icon = c.icon
            return (
              <div key={insight.id} className="rounded-xl p-6 flex flex-col gap-4" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: c.bg, color: c.color }}>
                    <Icon className="h-3 w-3"/>{c.label}
                  </span>
                  {insight.savings && <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: '#22c55e18', color: '#22c55e' }}>Save {formatCurrency(insight.savings)}/mo</span>}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2">{insight.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{insight.description}</p>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#3b82f6' }}>
                  {insight.action}<ArrowRight className="h-3.5 w-3.5"/>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}