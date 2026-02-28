import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ChevronRight, Clock, Calendar, ArrowLeft, ArrowRight, User } from "lucide-react"
import { articles, getArticleBySlug } from "@/lib/articles"

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: "Article Not Found" }

  return {
    title: `${article.title} | RankBoost Africa Hub`,
    description: article.description,
    alternates: {
      canonical: `https://www.rankboost.africa/hub/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "en_ZA",
      url: `https://www.rankboost.africa/hub/${article.slug}`,
      siteName: "RankBoost Africa",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: `https://www.rankboost.africa${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const currentIndex = articles.findIndex((a) => a.slug === slug)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankboost.africa" },
      { "@type": "ListItem", position: 2, name: "Hub", item: "https://www.rankboost.africa/hub" },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.rankboost.africa/hub/${article.slug}`,
      },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://www.rankboost.africa${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://www.rankboost.africa",
    },
    publisher: {
      "@type": "Organization",
      name: "RankBoost Africa",
      url: "https://www.rankboost.africa",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rankboost.africa/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.rankboost.africa/hub/${article.slug}`,
    },
    keywords: article.tags.join(", "),
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/hub" className="hover:text-primary transition-colors">
              Hub
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {article.category}
            </span>
            <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(article.publishedAt)}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 text-balance leading-tight">
            {article.title}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5">
            {article.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4 text-primary" />
            <span>By {article.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl -mt-0 mb-8 sm:mb-10">
        <div className="relative aspect-[2/1] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="prose-content">
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-10 mb-3 sm:mb-4 text-balance"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              return (
                <p
                  key={index}
                  className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5"
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-border">
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevArticle ? (
              <Link
                href={`/hub/${prevArticle.slug}`}
                className="group flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                    Previous
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {prevArticle.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle && (
              <Link
                href={`/hub/${nextArticle.slug}`}
                className="group flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors text-right sm:justify-end"
              >
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                    Next
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {nextArticle.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-8 sm:py-10 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">More from the Hub</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/hub/${related.slug}`}
                className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={related.image}
                    alt={related.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {related.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold mt-2 mb-1.5 group-hover:text-primary transition-colors text-balance leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/hub"
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">
            Ready to Put These Insights Into Action?
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            Our team can implement these strategies for your business. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-background/90 transition-colors text-sm sm:text-base"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
