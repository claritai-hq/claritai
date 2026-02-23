'use client'
import { TopBar } from '@/components/layout/TopBar'
import { spendData, teamMembers, totalThisMonth, dailyAverage } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'
import { TrendingUp, TrendingDown, DollarSign, Users, Cpu, BarChart2 } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function DashboardPage() {
  const topSpenders = [...teamMembers].sort((a, b) => b.thisWeek - a.thisWeek).slice(0, 5)
  const providers = [
    { name: 'OpenAI', amount: totalThisMonth * 0.62, pct: 62, color: '#10a37f' },
    { name: 'Anthropic', amount: totalThisMonth * 0.30, pct: 30, color: '#d4a853' },
    { name: 'Gemini', amount: totalThisMonth * 0.06, pct: 6, color: '#4285f4' },
    { name: 'Cursor', amount: totalThisMonth * 0.02, pct: 2, color: '#8b5cf6' },
  ]
  return (
    <div>
      <TopBar title="Dashboard" />
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Total This Month', value: formatCurrency(totalThisMonth), change: '+12%', icon: DollarSign, color: '#3b82f6' },
            { label: 'Daily Average', value: formatCurrency(dailyAverage), change: '+5%', icon: BarChart2, color: '#8b5cf6' },
            { label: 'Top Provider', value: 'OpenAI', change: '62%', icon: Cpu, color: '#10a37f' },
            { label: 'Active Members', value: '8', change: '+2', icon: Users, color: '#f59e0b' },
          ].map((c) => {
            const Icon = c.icon
            return (
              <div key={c.label} className="rounded-xl p-5" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm" style={{ color: '#64748b' }}>{c.label}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: c.color + '18' }}>
                    <Icon className="h-4 w-4" style={{ color: c.color }} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{c.value}</p>
                <p className="text-xs font-medium" style={{ color: '#22c55e' }}>{c.change}</p>
              </div>
            )
          })}
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 rounded-xl p-6" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
            <h2 className="text-base font-semibold text-white mb-6">Spend Over Time</h2>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={spendData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10a37f" stopOpacity={0.3}/><stop offset="95%" stopColor="#10a37f" stopOpacity={0}/></linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#d4a853" stopOpacity={0.3}/><stop offset="95%" stopColor="#d4a853" stopOpacity={0}/></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e"/>
                <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: '#1e1e2e' }} tickLine={false} interval={4}/>
                <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => '$'+v}/>
                <Tooltip contentStyle={{ background: '#12121a', border: '1px solid #1e1e2e', borderRadius: '8px' }}/>
                <Area type="monotone" dataKey="OpenAI" stroke="#10a37f" strokeWidth={2} fill="url(#g1)"/>
                <Area type="monotone" dataKey="Anthropic" stroke="#d4a853" strokeWidth={2} fill="url(#g2)"/>
                <Legend wrapperStyle={{ fontSize: '12px', color: '#64748b' }}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="rounded-xl p-6" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
            <h2 className="text-base font-semibold text-white mb-6">By Provider</h2>
            <div className="space-y-5">
              {providers.map(p => (
                <div key={p.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ background: p.color }}/>
                      <span className="text-sm font-medium text-white">{p.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{formatCurrency(p.amount)}</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: '#1e1e2e' }}>
                    <div className="h-1.5 rounded-full" style={{ width: p.pct+'%', background: p.color }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
            <h2 className="text-base font-semibold text-white">Top Spenders This Week</h2>
            <a href="/team" className="text-sm font-medium" style={{ color: '#3b82f6' }}>View all →</a>
          </div>
          <table className="w-full">
            <thead><tr style={{ borderBottom: '1px solid #1e1e2e' }}>
              {['Member','Primary Tool','This Week','This Month','Trend'].map(h => (
                <th key={h} className="text-left px-6 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: '#64748b' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {topSpenders.map((m, i) => (
                <tr key={m.id} className="hover:bg-white/[0.02]" style={i < topSpenders.length-1 ? { borderBottom: '1px solid #1e1e2e' } : {}}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold" style={{ background: '#3b82f620', color: '#3b82f6' }}>{m.name.charAt(0)}</div>
                      <div><p className="text-sm font-medium text-white">{m.name}</p><p className="text-xs" style={{ color: '#64748b' }}>{m.role}</p></div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs" style={{ background: '#1e1e2e', color: '#94a3b8' }}>{m.primaryTool}</span></td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">{formatCurrency(m.thisWeek)}</td>
                  <td className="px-6 py-4 text-sm text-white">{formatCurrency(m.thisMonth)}</td>
                  <td className="px-6 py-4">
                    {m.trend === 'up' ? <TrendingUp className="h-4 w-4 inline" style={{ color: '#22c55e' }}/> : m.trend === 'down' ? <TrendingDown className="h-4 w-4 inline" style={{ color: '#ef4444' }}/> : <span style={{ color: '#64748b' }}>—</span>}
                    {m.trend !== 'stable' && <span className="text-xs ml-1" style={{ color: m.trend === 'up' ? '#22c55e' : '#ef4444' }}>{m.trendPct}%</span>}
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