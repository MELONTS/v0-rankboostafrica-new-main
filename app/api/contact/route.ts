import { NextRequest, NextResponse } from 'next/server'
import nodemailer from "nodemailer"

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // requests per window
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

// Spam keywords to filter
const SPAM_KEYWORDS = [
  'viagra',
  'cialis',
  'casino',
  'lottery',
  'winner',
  'crypto',
  'bitcoin',
  'investment opportunity',
  'earn money fast',
  'click here',
  'act now',
  'limited time',
  'free money',
  'nigerian prince',
  'inheritance',
  'urgent response',
  'dear friend',
  'congratulations you have won',
]

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Check for spam content
function containsSpam(text: string): boolean {
  const lowerText = text.toLowerCase()
  return SPAM_KEYWORDS.some(keyword => lowerText.includes(keyword))
}

// Validate phone number (basic check)
function isValidPhone(phone: string): boolean {
  if (!phone) return true // Phone is optional
  const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/
  return phoneRegex.test(phone)
}

// Check rate limit
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT - 1 }
  }
  
  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 }
  }
  
  record.count++
  return { allowed: true, remaining: RATE_LIMIT - record.count }
}

// Sanitize input
function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '3600',
          }
        }
      )
    }
    
    const body = await request.json()
    const { name, email, phone, service, subject, message, honeypot, timestamp } = body
    
    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      // Silently reject but return success to fool bots
      return NextResponse.json({ success: true, message: 'Message sent successfully' })
    }
    
    // Timestamp check - form should take at least 3 seconds to fill
    const submissionTime = Date.now()
    const formLoadTime = parseInt(timestamp, 10)
    if (isNaN(formLoadTime) || (submissionTime - formLoadTime) < 3000) {
      return NextResponse.json(
        { error: 'Form submitted too quickly. Please try again.' },
        { status: 400 }
      )
    }
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }
    
    // Validate email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }
    
    // Validate phone
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      )
    }
    
    // Check for spam
    if (containsSpam(name) || containsSpam(subject) || containsSpam(message)) {
      return NextResponse.json(
        { error: 'Your message was flagged as potential spam. Please revise and try again.' },
        { status: 400 }
      )
    }
    
    // Sanitize all inputs
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      service: sanitize(service || 'general'),
      subject: sanitize(subject),
      message: sanitize(message),
      submittedAt: new Date().toISOString(),
      ip: ip,
      userAgent: request.headers.get('user-agent') || 'unknown',
    }
    
    // Here you would typically:
    // 1. Send email via SMTP service (SendGrid, Mailgun, etc.)
    // 2. Store in database
    // 3. Send to CRM
    
// 🔹 Decide recipient based on service
const recipientEmail =
  sanitizedData.service === "general"
    ? "info@rankboost.africa"
    : "service@rankboost.africa"

// 🔹 Create transporter (Afrihost SMTP)
const transporter = nodemailer.createTransport({
  host: "mail.rankboost.africa",
  port: 465, // ✅ Afrihost SSL SMTP
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // ✅ Required for Afrihost
  },
})

// 🔹 Send email
await transporter.sendMail({
  from: `"RankBoost Africa" <${process.env.SMTP_USER}>`,
  to: recipientEmail,
  replyTo: sanitizedData.email,
  subject: `[${sanitizedData.service.toUpperCase()}] ${sanitizedData.subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${sanitizedData.name}</p>
    <p><strong>Email:</strong> ${sanitizedData.email}</p>
    <p><strong>Phone:</strong> ${sanitizedData.phone || "Not provided"}</p>
    <p><strong>Service:</strong> ${sanitizedData.service}</p>
    <p><strong>Message:</strong></p>
    <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
    <hr />
    <small>IP: ${sanitizedData.ip}</small>
  `,
})
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.' 
      },
      {
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        }
      }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
