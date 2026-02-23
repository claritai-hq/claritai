'use client'
import { Bell } from 'lucide-react'
import { useState } from 'react'
export function TopBar({ title }: { title: string }) {
  const [selected, setSelected] = useState('30d')
  return (
    <div className="flex items-center justify-between px-8 py-4" style={{ borderBottom: '1px solid #1e1e2e', background: '#0a0a0f' }}>
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 rounded-lg p-1" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
          {['7d','30d','90d'].map(r => (
            <button key={r} onClick={() => setSelected(r)} className="px-3 py-1 rounded-md text-sm font-medium transition-all" style={selected===r ? {background:'#3b82f6',color:'#fff'} : {color:'#64748b'}}>{r}</button>
          ))}
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ border: '1px solid #1e1e2e' }}>
          <Bell className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </div>
  )
}