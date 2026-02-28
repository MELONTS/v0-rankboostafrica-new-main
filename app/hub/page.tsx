import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ChevronRight, Clock, ArrowRight, BookOpen, Calendar } from "lucide-react"
import { articles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Digital Marketing Hub | RankBoost Africa - SEO, Web Dev & Content Insights",
  description:
    "Explore expert articles on SEO, web development, content marketing, and social media. Free educational resources to help South African businesses grow their online presence.",
  alternates: {
    canonical: "https://www.rankboost.africa/hub",
  },
  openGraph: {
    title: "Digital Marketing Hub | RankBoost Africa",
    description:
      "Free educational articles on SEO, web development, content marketing, and social media for South African businesses.",
    type: "website",
    locale: "en_ZA",
    url: "https://www.rankboost.africa/hub",
    siteName: "RankBoost Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Hub | RankBoost Africa",
    description:
      "Free educational articles on SEO, web development, content marketing, and social media.",
  },
}

const categoryColors: Record<string, string> = {
  SEO: "bg-blue-100 text-blue-700",
  "Web Development": "bg-emerald-100 text-emerald-700",
  "Content Marketing": "bg-amber-100 text-amber-700",
  "Social Media": "bg-rose-100 text-rose-700",
}

export default function HubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankboost.africa" },
      { "@type": "ListItem", position: 2, name: "Hub", item: "https://www.rankboost.africa/hub" },
    ],
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Digital Marketing Hub",
    description:
      "Expert articles on SEO, web development, content marketing, and social media for South African businesses.",
    url: "https://www.rankboost.africa/hub",
    publisher: {
      "@type": "Organization",
      name: "RankBoost Africa",
      url: "https://www.rankboost.africa",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.rankboost.africa/hub/${article.slug}`,
        name: article.title,
      })),
    },
  }

  const featuredArticle = articles[0]
  const remainingArticles = articles.slice(1)

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Hub</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm mb-3">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <time dateTime={new Date().toISOString().split("T")[0]}>
                  {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
                Knowledge Centre
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 text-balance">
                Digital Marketing Hub
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Your go-to resource for actionable digital marketing insights. We publish expert
                articles on SEO, web development, content strategy, and social media marketing to
                help South African businesses grow smarter online.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>{articles.length} articles published</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/hub/hub-hero.jpg"
                  alt="Digital marketing knowledge hub with educational resources on a laptop screen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 sm:py-10 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Article</h2>
          <Link href={`/hub/${featuredArticle.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[240px]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[featuredArticle.category]}`}
                  >
                    {featuredArticle.category}
                  </span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">All Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {remainingArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/hub/${article.slug}`}
                className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors text-balance leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary font-medium text-sm mt-3 group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual Service Links */}
      <section className="py-8 sm:py-10 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">
              Put These Insights Into Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Every article in our hub is backed by real services we deliver for South African businesses.
              Explore how we can help you implement these strategies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "SEO Services",
                href: "/services#seo",
                description:
                  "From keyword research to technical audits, our SEO services drive measurable organic growth for your business.",
              },
              {
                title: "Web Development",
                href: "/services#web-development",
                description:
                  "Custom WordPress and Shopify websites built with SEO best practices and responsive design from day one.",
              },
              {
                title: "Content Marketing",
                href: "/services#content",
                description:
                  "Strategic blog content, landing page copy, and editorial calendars that build authority and attract traffic.",
              },
              {
                title: "Managed Hosting",
                href: "/services#hosting",
                description:
                  "Fast, secure hosting infrastructure optimised for performance, uptime, and search engine rankings.",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-5 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="flex items-center gap-1.5 text-primary font-medium text-sm group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">
            Want These Strategies Working for Your Business?
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            Our team implements the exact strategies we write about. Get in touch for a free consultation
            and let us help your business grow.
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
