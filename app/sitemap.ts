import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rankboost.africa"
  const now = new Date().toISOString()

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/hub/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hub`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...articleEntries,
  ]
}
