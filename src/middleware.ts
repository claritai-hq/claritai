import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const protectedPaths = ['/dashboard', '/team', '/integrations', '/insights', '/alerts', '/settings']
  const isProtected = protectedPaths.some(p => pathname.startsWith(p))
  if (!isProtected) return NextResponse.next()

  // Check for Supabase session cookie
  const supabaseToken = request.cookies.get('sb-lbcmgnesmwgecepeaqsw-auth-token')
  if (!supabaseToken) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/team/:path*', '/integrations/:path*', '/insights/:path*', '/alerts/:path*', '/settings/:path*']
}
