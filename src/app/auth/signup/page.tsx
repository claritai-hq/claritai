'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Zap, Loader2 } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: name } }
    })
    if (error) { setError(error.message); setLoading(false); return }
    setSuccess(true)
    setTimeout(() => router.push('/dashboard'), 1500)
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
          {success ? (
            <div className="text-center">
              <div className="text-3xl mb-4">✅</div>
              <h1 className="text-xl font-bold text-white mb-2">Account created!</h1>
              <p className="text-sm" style={{ color: '#64748b' }}>Redirecting to dashboard...</p>
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold text-white mb-1">Create your account</h1>
              <p className="text-sm mb-6" style={{ color: '#64748b' }}>Start tracking AI spend for free</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Full Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/40"
                    style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Work Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" required
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/40"
                    style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required minLength={6}
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/40"
                    style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }} />
                </div>
                {error && <p className="text-xs" style={{ color: '#ef4444' }}>{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ background: '#3b82f6' }}>
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Creating account...</> : 'Get started free'}
                </button>
              </form>
              <p className="text-xs text-center mt-4" style={{ color: '#64748b' }}>No credit card required</p>
              <p className="text-sm text-center mt-3" style={{ color: '#64748b' }}>
                Already have an account?{' '}<Link href="/auth/login" className="font-medium" style={{ color: '#3b82f6' }}>Sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}