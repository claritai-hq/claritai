'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Plug, Lightbulb, Bell, Settings, Zap } from 'lucide-react'
const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/integrations', label: 'Integrations', icon: Plug },
  { href: '/insights', label: 'Insights', icon: Lightbulb },
  { href: '/alerts', label: 'Alerts', icon: Bell },
  { href: '/settings', label: 'Settings', icon: Settings },
]
export function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="fixed left-0 top-0 h-full w-60 flex flex-col" style={{ background: '#0d0d14', borderRight: '1px solid #1e1e2e' }}>
      <div className="flex items-center gap-2 px-6 py-5" style={{ borderBottom: '1px solid #1e1e2e' }}>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: '#3b82f6' }}>
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-bold text-white">Claritai</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all" style={isActive ? { background: '#3b82f6', color: '#fff' } : { color: '#64748b' }}>
              <Icon className="h-4 w-4" />{item.label}
            </Link>
          )
        })}
      </nav>
      <div className="px-3 py-4" style={{ borderTop: '1px solid #1e1e2e' }}>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ cursor: 'pointer' }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white" style={{ background: '#3b82f6' }}>A</div>
          <div><p className="text-sm font-medium text-white">Acme Corp</p><p className="text-xs" style={{ color: '#64748b' }}>admin@acme.com</p></div>
        </div>
      </div>
    </div>
  )
}