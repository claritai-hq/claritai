'use client'
import { useState, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { supabase } from '@/lib/supabase'
import { Loader2, Check, X, ExternalLink } from 'lucide-react'

const providers = [
  { id: 'openai', name: 'OpenAI', color: '#10a37f', description: 'GPT-4, GPT-3.5, DALL-E, Whisper', docsUrl: 'https://platform.openai.com/api-keys' },
  { id: 'anthropic', name: 'Anthropic', color: '#d4a853', description: 'Claude 3, Claude 2', docsUrl: 'https://console.anthropic.com/', comingSoon: true },
  { id: 'google', name: 'Google AI', color: '#4285f4', description: 'Gemini Pro, PaLM', comingSoon: true },
]

export default function IntegrationsPage() {
  const [user, setUser] = useState<any>(null)
  const [connected, setConnected] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState<Record<string, boolean>>({})
  const [modal, setModal] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user)
        loadIntegrations(data.user.id)
      }
    })
  }, [])

  async function loadIntegrations(userId: string) {
    const res = await fetch(`/api/integrations/openai?userId=${userId}`)
    const data = await res.json()
    if (data.integrations) {
      const c: Record<string, boolean> = {}
      data.integrations.forEach((i: any) => c[i.provider] = true)
      setConnected(c)
    }
  }

  async function handleConnect(provider: string) {
    if (!user) return
    setError('')
    setLoading(l => ({ ...l, [provider]: true }))
    
    const res = await fetch('/api/integrations/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey, userId: user.id })
    })
    
    const data = await res.json()
    setLoading(l => ({ ...l, [provider]: false }))
    
    if (data.error) {
      setError(data.error)
      return
    }
    
    setConnected(c => ({ ...c, [provider]: true }))
    setModal(null)
    setApiKey('')
  }

  async function handleDisconnect(provider: string) {
    if (!user) return
    setLoading(l => ({ ...l, [provider]: true }))
    
    await fetch('/api/integrations/openai', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, provider })
    })
    
    setLoading(l => ({ ...l, [provider]: false }))
    setConnected(c => ({ ...c, [provider]: false }))
  }

  return (
    <div>
      <TopBar title="Integrations" />
      <div className="p-8">
        <p className="text-sm mb-6" style={{ color: '#64748b' }}>Connect your AI providers to track spend in real-time.</p>
        <div className="grid grid-cols-3 gap-4">
          {providers.map(p => (
            <div key={p.id} className="rounded-xl p-5 flex flex-col gap-4" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white" style={{ background: p.color + '22', border: '1px solid ' + p.color + '40' }}>{p.name.charAt(0)}</div>
                {connected[p.id] ? (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ background: '#22c55e18', color: '#22c55e' }}><Check className="h-3 w-3" />Connected</span>
                ) : p.comingSoon ? (
                  <span className="px-2.5 py-1 rounded-full text-xs" style={{ background: '#1e1e2e', color: '#64748b' }}>Coming soon</span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full text-xs" style={{ background: '#1e1e2e', color: '#64748b' }}>Not connected</span>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#64748b' }}>{p.description}</p>
              </div>
              {p.comingSoon ? (
                <button disabled className="w-full py-2 rounded-lg text-sm font-medium" style={{ background: '#1e1e2e', color: '#64748b', cursor: 'not-allowed' }}>Coming soon</button>
              ) : connected[p.id] ? (
                <button onClick={() => handleDisconnect(p.id)} disabled={loading[p.id]} className="w-full py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2" style={{ background: '#1e1e2e', color: '#94a3b8' }}>
                  {loading[p.id] ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}Disconnect
                </button>
              ) : (
                <button onClick={() => setModal(p.id)} className="w-full py-2 rounded-lg text-sm font-medium" style={{ background: '#3b82f6', color: '#fff' }}>Connect</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.8)' }}>
          <div className="w-full max-w-md rounded-xl p-6" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
            <h2 className="text-lg font-bold text-white mb-2">Connect {providers.find(p => p.id === modal)?.name}</h2>
            <p className="text-sm mb-4" style={{ color: '#64748b' }}>
              Enter your API key. <a href={providers.find(p => p.id === modal)?.docsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1" style={{ color: '#3b82f6' }}>Get your key <ExternalLink className="h-3 w-3" /></a>
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none mb-3"
              style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }}
            />
            {error && <p className="text-xs mb-3 px-3 py-2 rounded" style={{ color: '#ef4444', background: '#ef444410' }}>{error}</p>}
            <div className="flex gap-3">
              <button onClick={() => { setModal(null); setApiKey(''); setError('') }} className="flex-1 py-2 rounded-lg text-sm font-medium" style={{ background: '#1e1e2e', color: '#94a3b8' }}>Cancel</button>
              <button onClick={() => handleConnect(modal)} disabled={loading[modal] || !apiKey} className="flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50" style={{ background: '#3b82f6', color: '#fff' }}>
                {loading[modal] ? <><Loader2 className="h-4 w-4 animate-spin" />Connecting...</> : 'Connect'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}