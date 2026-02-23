'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Zap } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
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
          <h1 className="text-xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-sm mb-6" style={{ color: '#64748b' }}>Start tracking AI spend for free</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); router.push('/dashboard') }}>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/40"
                style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Work Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/40"
                style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748b' }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/40"
                style={{ background: '#0a0a0f', border: '1px solid #1e1e2e' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: '#3b82f6' }}
            >
              Get started free
            </button>
          </form>
          <p className="text-xs text-center mt-4" style={{ color: '#64748b' }}>
            No credit card required
          </p>
          <p className="text-sm text-center mt-3" style={{ color: '#64748b' }}>
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium" style={{ color: '#3b82f6' }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}