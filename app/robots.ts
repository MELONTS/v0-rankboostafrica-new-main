import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.rankboost.africa"

  return {
    rules: [
      // Allow legitimate search engines
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot-News",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Slurp",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      {
        userAgent: "facebot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      // Block malicious and scraper bots
      ...[
        "AhrefsBot",
        "SemrushBot",
        "MJ12bot",
        "DotBot",
        "BLEXBot",
        "MegaIndex",
        "SerpstatBot",
        "DataForSeoBot",
        "Rogerbot",
        "SeekportBot",
        "ZoominfoBot",
        "Bytespider",
        "GPTBot",
        "CCBot",
        "anthropic-ai",
        "Claude-Web",
        "Scrapy",
        "HTTrack",
        "WebCopier",
        "WebZIP",
        "Teleport",
        "SiteSnagger",
        "WebStripper",
        "WebCapture",
        "Offline Explorer",
        "emailsiphon",
        "EmailWolf",
        "ExtractorPro",
        "Harvest",
        "CherryPicker",
        "NICErsPRO",
        "Alexibot",
      ].map((bot) => ({
        userAgent: bot,
        disallow: "/",
      })),
      // Default rule for all other bots
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/admin",
          "/login",
          "/register",
          "/dashboard",
          "/config",
          "/.env",
          "/.git",
          "/wp-admin",
          "/wp-login",
          "/administrator",
          "/phpmyadmin",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
