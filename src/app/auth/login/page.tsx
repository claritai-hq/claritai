'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Zap, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message === 'Invalid login credentials' ? 'Wrong email or password.' : error.message)
      setLoading(false)
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0a0a0f' }}>
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: '#3b82f6' }}>
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Claritai</span>
        </div>
        <div className="rounded-2xl p-8" style={{ background: '#12121a', border: '1px solid #1e1e2e' }}>
          <h1 className="text-xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-sm mb-6" style={{ color: '#64748b' }}>Sign in to your account</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" required
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none"
                style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none"
                style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }} />
            </div>
            {error && <p className="text-xs px-3 py-2 rounded-lg" style={{ color: '#ef4444', background: '#ef444410' }}>{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60 hover:opacity-90 transition-opacity"
              style={{ background: '#3b82f6' }}>
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Signing in...</> : 'Sign in'}
            </button>
          </form>
          <p className="text-sm text-center mt-6" style={{ color: '#64748b' }}>
            No account?{' '}
            <Link href="/auth/signup" className="font-medium" style={{ color: '#3b82f6' }}>Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}