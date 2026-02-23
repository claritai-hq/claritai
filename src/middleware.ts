import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Check for any Supabase auth cookie
  const cookies = request.cookies.getAll()
  const hasSession = cookies.some(c => c.name.startsWith('sb-') && c.name.endsWith('-auth-token'))

  const { pathname } = request.nextUrl
  const protectedPaths = ['/dashboard', '/team', '/integrations', '/insights', '/alerts', '/settings']
  const isProtected = protectedPaths.some(p => pathname.startsWith(p))

  if (isProtected && !hasSession) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/team/:path*', '/integrations/:path*', '/insights/:path*', '/alerts/:path*', '/settings/:path*']
}
