import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect /admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Don't protect the login page itself
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  const authToken = request.cookies.get('admin_token')?.value;

  // If no token, redirect to login
  if (!authToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Validate token (in this case, just check if it matches our simple hash)
  if (authToken !== 'admin_authenticated') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 