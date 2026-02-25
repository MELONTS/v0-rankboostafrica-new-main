import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ChevronRight, Target, TrendingUp, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About RankBoost Africa | Digital Marketing Experts in South Africa",
  description:
    "Learn about RankBoost Africa — a South African digital marketing agency helping SMEs, e-commerce brands, and government institutions grow their online presence through expert SEO, web development, and content strategies.",
  alternates: {
    canonical: "https://www.rankboost.africa/about",
  },
  openGraph: {
    title: "About RankBoost Africa | Digital Marketing Experts in South Africa",
    description:
      "Learn about RankBoost Africa — a South African digital marketing agency helping SMEs, e-commerce brands, and government institutions grow online.",
    type: "website",
    locale: "en_ZA",
    url: "https://www.rankboost.africa/about",
    siteName: "RankBoost Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RankBoost Africa | Digital Marketing Experts",
    description:
      "Learn about RankBoost Africa — a South African digital marketing agency helping SMEs and brands grow their online presence.",
  },
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy we implement is designed to deliver measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: TrendingUp,
    title: "Data-Led Decisions",
    description:
      "We use analytics and real-time data to guide our recommendations, ensuring every rand spent delivers ROI.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your goals are our goals. We build lasting partnerships by understanding your business inside and out.",
  },
  {
    icon: Shield,
    title: "Ethical Practices",
    description:
      "We follow white-hat SEO techniques and transparent reporting so you always know exactly what we are doing.",
  },
]

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankboost.africa" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.rankboost.africa/about" },
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RankBoost Africa",
    url: "https://www.rankboost.africa",
    logo: "https://www.rankboost.africa/favicon.png",
    description:
      "Expert digital marketing services including SEO, web development, hosting, and content marketing for SMEs in South Africa.",
    foundingDate: "2025",
    founder: { "@type": "Organization", name: "Sabe Investment Holdings (Pty) Ltd" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "South Africa",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.instagram.com/sabeconnect/",
      "https://www.facebook.com/sabeconnect/",
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
                About Our Agency
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                About RankBoost Africa
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                RankBoost Africa is a proudly South African digital marketing agency founded by Sabe
                Investment Holdings (Pty) Ltd. We specialise in helping SMEs, e-commerce brands, and
                government institutions build and grow their online presence through data-driven
                strategies that deliver real results.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                From search engine optimisation and high-performance web development to secure hosting
                and strategic content marketing, our team combines technical expertise with creative
                thinking to give your business the competitive edge it needs in the digital landscape.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/rankboost-team.jpg"
                  alt="RankBoost Africa digital marketing team collaborating on a website project in their South African office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            To empower South African businesses with affordable, world-class digital marketing
            solutions that level the playing field against larger competitors. We believe every SME
            deserves access to the same calibre of SEO, web development, and content strategy that
            enterprise-level companies enjoy.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Our approach is simple: understand your business goals, build a strategy rooted in data,
            execute with precision, and measure everything. We do not chase vanity metrics -- we
            chase revenue, leads, and growth.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              These principles guide every project we take on and every recommendation we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-5 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* South African Focus */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Proudly South African
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Being based in South Africa gives us a deep understanding of the local market dynamics,
            consumer behaviour, and competitive landscape. We know what it takes to rank on Google
            for South African search queries because we live and breathe this market every day.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you are a Cape Town startup, a Johannesburg e-commerce store, or a government
            agency looking to improve your digital services, RankBoost Africa has the local
            expertise and global best practices to help you succeed.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
