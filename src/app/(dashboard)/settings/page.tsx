'use client'
import { TopBar } from '@/components/layout/TopBar'
import { User, Building, CreditCard } from 'lucide-react'
export default function SettingsPage() {
  return (
    <div>
      <TopBar title="Settings" />
      <div className="p-8 space-y-6 max-w-2xl">
        {[
          { icon: User, title: 'Profile', fields: [{ label: 'Full Name', value: 'Admin User' }, { label: 'Email', value: 'admin@acme.com' }] },
          { icon: Building, title: 'Organization', fields: [{ label: 'Company Name', value: 'Acme Corp' }, { label: 'Monthly Budget ($)', value: '3840' }] },
        ].map(s => (
          <section key={s.title} className="rounded-xl" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
            <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <s.icon className="h-4 w-4" style={{ color: '#64748b' }}/>
              <h2 className="text-sm font-semibold text-white">{s.title}</h2>
            </div>
            <div className="px-6 py-5 space-y-4">
              {s.fields.map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>{f.label}</label>
                  <input defaultValue={f.value} className="w-full px-3 py-2 rounded-lg text-sm text-white outline-none" style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }}/>
                </div>
              ))}
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: '#3b82f6' }}>Save changes</button>
            </div>
          </section>
        ))}
        <section className="rounded-xl" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
          <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
            <CreditCard className="h-4 w-4" style={{ color: '#64748b' }}/>
            <h2 className="text-sm font-semibold text-white">Plan</h2>
          </div>
          <div className="px-6 py-5">
            <div className="flex items-center justify-between">
              <div><p className="text-sm font-semibold text-white">Free Plan</p><p className="text-xs mt-1" style={{ color: '#64748b' }}>1 user · 2 integrations · 30-day history</p></div>
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: '#3b82f618', color: '#3b82f6' }}>Current</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}