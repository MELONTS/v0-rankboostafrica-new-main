import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.rankboost.africa"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/login",
          "/register",
          "/private/",
          "/config/",
          "/.env",
          "/.git",
          "/phpmyadmin",
        ],
      },

      // Block aggressive scraping bots
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "MegaIndex",
          "SerpstatBot",
          "Bytespider",
          "GPTBot",
          "CCBot",
          "anthropic-ai",
        ],
        disallow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}