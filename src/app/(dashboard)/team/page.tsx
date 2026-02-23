'use client'
import { TopBar } from '@/components/layout/TopBar'
import { teamMembers } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'
import { TrendingUp, TrendingDown, UserPlus } from 'lucide-react'
export default function TeamPage() {
  return (
    <div>
      <TopBar title="Team" />
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: '#64748b' }}>{teamMembers.length} members</p>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: '#3b82f6' }}>
            <UserPlus className="h-4 w-4" />Add Member
          </button>
        </div>
        <div className="rounded-xl" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
          <table className="w-full">
            <thead><tr style={{ borderBottom: '1px solid #1e1e2e' }}>
              {['Member','Role','Primary Tool','This Week','This Month','Trend'].map(h => (
                <th key={h} className="text-left px-6 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: '#64748b' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[...teamMembers].sort((a,b) => b.thisMonth - a.thisMonth).map((m, i, arr) => (
                <tr key={m.id} className="hover:bg-white/[0.02]" style={i < arr.length-1 ? { borderBottom: '1px solid #1e1e2e' } : {}}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold" style={{ background: '#3b82f620', color: '#3b82f6' }}>{m.name.charAt(0)}</div>
                      <div><p className="text-sm font-medium text-white">{m.name}</p><p className="text-xs" style={{ color: '#64748b' }}>{m.email}</p></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: '#94a3b8' }}>{m.role}</td>
                  <td className="px-6 py-4"><span className="px-2.5 py-1 rounded text-xs" style={{ background: '#1e1e2e', color: '#94a3b8' }}>{m.primaryTool}</span></td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">{formatCurrency(m.thisWeek)}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">{formatCurrency(m.thisMonth)}</td>
                  <td className="px-6 py-4">
                    {m.trend === 'up' ? <><TrendingUp className="h-4 w-4 inline" style={{ color: '#22c55e' }}/><span className="text-xs ml-1" style={{ color: '#22c55e' }}>{m.trendPct}%</span></> : m.trend === 'down' ? <><TrendingDown className="h-4 w-4 inline" style={{ color: '#ef4444' }}/><span className="text-xs ml-1" style={{ color: '#ef4444' }}>{m.trendPct}%</span></> : <span style={{ color: '#64748b' }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}