import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of known malicious bot user agents
const BLOCKED_BOTS = [
  'semrushbot',
  'ahrefsbot',
  'mj12bot',
  'dotbot',
  'rogerbot',
  'seznambot',
  'dataforseo',
  'blexbot',
  'megaindex',
  'seekport',
  'serpstatbot',
  'mail.ru',
  'pinterestbot',
  'screaming frog',
  'netcraft',
  'zgrab',
  'masscan',
  'nikto',
  'sqlmap',
  'nessus',
  'openvas',
  'nmap',
  'dirbuster',
  'gobuster',
  'wpscan',
  'burpsuite',
  'acunetix',
  'havij',
  'sqlninja',
  'webscarab',
  'paros',
  'w3af',
  'skipfish',
  'arachni',
]

// Sensitive paths that should be protected
const PROTECTED_PATHS = [
  '/api/admin',
  '/api/internal',
  '/.env',
  '/.git',
  '/wp-admin',
  '/wp-login',
  '/administrator',
  '/phpmyadmin',
  '/config',
  '/backup',
  '/.htaccess',
  '/.htpasswd',
  '/web.config',
  '/server-status',
  '/server-info',
]

// File extensions to block
const BLOCKED_EXTENSIONS = [
  '.php',
  '.asp',
  '.aspx',
  '.jsp',
  '.cgi',
  '.pl',
  '.py',
  '.rb',
  '.sh',
  '.bat',
  '.cmd',
  '.sql',
  '.bak',
  '.old',
  '.orig',
  '.swp',
  '.swo',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  
  // Create response headers for security
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self), interest-cohort=()')
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; frame-ancestors 'self';"
  )
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  
  // Block malicious bots
  for (const bot of BLOCKED_BOTS) {
    if (userAgent.includes(bot)) {
      return new NextResponse('Access Denied', { status: 403 })
    }
  }
  
  // Block access to protected paths
  for (const path of PROTECTED_PATHS) {
    if (pathname.toLowerCase().startsWith(path.toLowerCase())) {
      return new NextResponse('Not Found', { status: 404 })
    }
  }
  
  // Block suspicious file extensions
  for (const ext of BLOCKED_EXTENSIONS) {
    if (pathname.toLowerCase().endsWith(ext)) {
      return new NextResponse('Not Found', { status: 404 })
    }
  }
  
  // Block common attack patterns
  const attackPatterns = [
    /(\.\.|%2e%2e)/i, // Directory traversal
    /(union\s+select|select\s+\*|insert\s+into|drop\s+table|delete\s+from)/i, // SQL injection
    /(<script|javascript:|vbscript:|onload=|onerror=)/i, // XSS
    /(\/etc\/passwd|\/etc\/shadow|\/proc\/self)/i, // LFI
    /(\$\{|%24%7b)/i, // Template injection
  ]
  
  const fullUrl = request.url
  for (const pattern of attackPatterns) {
    if (pattern.test(fullUrl) || pattern.test(pathname)) {
      return new NextResponse('Bad Request', { status: 400 })
    }
  }
  
  // Rate limiting header (actual rate limiting should be done at edge/CDN level)
  response.headers.set('X-RateLimit-Policy', 'contact-form=10/hour, api=100/minute')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
