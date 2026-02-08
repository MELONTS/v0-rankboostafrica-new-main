import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RankBoost | SEO, Web Development & Hosting Services",
  description: "Rank your business on Google's first page with our expert Digital Marketing services.",
  authors: [{ name: 'Sabeconnect' }],
  keywords: [
    'SEO services South Africa',
    'SEO services Cape Town',
    'web development South Africa',
    'web development Cape Town',
    'web hosting South Africa',
    'website development services',
    'SEO services',
    'web hosting services services',
    'digital marketing South Africa',
    'digital marketing Africa',
    'digital marketing Cape Town',
    'content marketing',
    'RankBoost Africa',
    'SEO agency',
    'website design',
    'WordPress development',
    'e-commerce development',
  ],
  metadataBase: new URL('https://www.rankboost.africa'),
  alternates: {
    canonical: 'https://www.rankboost.africa',
    languages: {
      'en': 'https://www.rankboost.africa',
    },
  },
  openGraph: {
    title: 'RankBoost Africa | Digital Marketing Services',
    description: 'Expert digital marketing services including SEO, web development, hosting, and content marketing for SMEs.',
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.rankboost.africa',
    siteName: 'RankBoost Africa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RankBoost Africa | Digital Marketing Services',
    description: 'Expert digital marketing services including SEO, web development, hosting, and content marketing services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-GKVD70ZN3Q'
  
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      // GA4
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });

      // Google Ads base tag
      gtag('config', 'AW-17934460660');
    `,
  }}
/>
        
        {/* Structured Data / JSON-LD */}
        <StructuredData />
        
        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://www.rankboost.africa" />
        <link rel="alternate" href="https://rankboost.africa" hrefLang="en-ZA" />
        <link rel="alternate" href="https://www.rankboost.africa" hrefLang="x-default" />
        
        {/* Geographic and Regional SEO */}
        <meta name="geo.region" content="ZA" />
        <meta name="geo.placename" content="South Africa" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
        
        {/* Core Web Vitals and Performance */}
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="msapplication-TileColor" content="#1d4ed8" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RankBoost Africa" />
        
        {/* DNS Prefetch and Preconnect for Performance */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://www.rankboost.africa" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.rankboost.africa" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Search Engine Directives */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Site Links Search Box */}
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
