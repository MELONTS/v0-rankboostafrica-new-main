import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Search,
  Code,
  Server,
  FileText,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "| RankBoost Africa | Experts in Digital Marketing",
  description:
    "Explore our full range of digital marketing services: Local, Regional & National SEO, WordPress & Shopify development, managed hosting, and content marketing for South African businesses.",
  alternates: {
    canonical: "https://www.rankboost.africa/services",
  },
  openGraph: {
    title: "Digital Marketing Services in South Africa | RankBoost Africa",
    description:
      "Explore our full range of digital marketing services for South African businesses — SEO, web development, hosting, and content marketing.",
    type: "website",
    locale: "en_ZA",
    url: "https://www.rankboost.africa/services",
    siteName: "RankBoost Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | RankBoost Africa",
    description:
      "SEO, web development, hosting, and content marketing services for South African businesses.",
  },
}

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    image: "/images/seo-analysis-dashboard.jpg",
    imageAlt: "Digital marketing professional analysing SEO keyword rankings and organic traffic data on an ultrawide monitor",
    description:
      "We help your business climb to the top of Google search results through proven, white-hat SEO strategies tailored to the South African market.",
    subServices: [
      {
        title: "Local SEO",
        description:
          "Dominate local search results and Google Maps. We optimise your Google Business Profile, build local citations, and target location-specific keywords to drive foot traffic and local leads.",
      },
      {
        title: "Regional SEO",
        description:
          "Expand your reach across provinces and regions. Our regional SEO strategies target multi-location businesses looking to grow their presence across South Africa.",
      },
      {
        title: "National SEO",
        description:
          "Compete at a national level with comprehensive SEO campaigns that cover technical audits, on-page optimisation, content strategy, and authority building.",
      },
    ],
    highlights: [
      "Technical SEO audits and fixes",
      "Keyword research and strategy",
      "On-page and off-page optimisation",
      "Monthly reporting and analytics",
    ],
    contactService: "seo",
    contactSubject: "SEO Services Inquiry",
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    image: "/images/web-development-workspace.jpg",
    imageAlt: "Professional web developer dual-monitor setup showing code editor and responsive website preview",
    description:
      "We build fast, responsive, SEO-optimised websites that convert visitors into customers. From corporate sites to full e-commerce stores, we deliver pixel-perfect results.",
    subServices: [
      {
        title: "Custom WordPress Build",
        description:
          "Custom WordPress websites built for performance and ease of management. We create themes, plugins, and content management solutions tailored to your needs.",
      },
      {
        title: "Shopify Web Development",
        description:
          "Launch your online store with a professionally designed Shopify storefront. We handle theme customisation, product setup, payment integration, and more.",
      },
      {
        title: "Corporate & Government Websites",
        description:
          "PAIA-compliant, accessible, and secure websites for government departments and agencies. We meet all regulatory requirements while delivering modern user experiences.",
      },
    ],
    highlights: [
      "Mobile-first responsive design",
      "Core Web Vitals optimisation",
      "E-commerce and WooCommerce",
      "Ongoing maintenance and support",
    ],
    contactService: "web-development",
    contactSubject: "Web Development Inquiry",
  },
  {
    id: "hosting",
    icon: Server,
    title: "Web Hosting",
    image: "/images/secure-server-room.jpg",
    imageAlt: "Premium secure server room with glass-enclosed racks, fibre optic cables, and real-time uptime monitoring",
    description:
      "Reliable, fast, and secure managed hosting that keeps your website online 24/7. We handle the technical side so you can focus on growing your business.",
    subServices: [
      {
        title: "Managed WordPress Hosting",
        description:
          "Fully managed WordPress hosting with automatic updates, security patches, and performance optimisation included as standard.",
      },
      {
        title: "SSL Certificates and Security",
        description:
          "Free SSL certificates, malware scanning, firewall protection, and regular security audits to keep your site and customer data safe.",
      },
      {
        title: "Email Hosting",
        description:
          "Professional email hosting with your own domain name. Reliable delivery, spam filtering, and generous storage for your team.",
      },
    ],
    highlights: [
      "99.9% uptime guarantee",
      "Daily automated backups",
      "Free SSL certificates",
      "South African server options",
    ],
    contactService: "hosting",
    contactSubject: "Web Hosting Inquiry",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    image: "/images/content-marketing-team.jpg",
    imageAlt: "Creative marketing team collaborating on content strategy with editorial calendars and audience analytics",
    description:
      "Strategic content creation and distribution that builds authority, drives organic traffic, and converts readers into customers.",
    subServices: [
      {
        title: "SEO Content Writing",
        description:
          "Professionally written, keyword-optimised blog posts, landing pages, and website copy that ranks on Google and engages your audience.",
      },
      {
        title: "Social Media Management",
        description:
          "Strategic social media content planning, creation, and scheduling across Instagram, Facebook, LinkedIn, and other platforms relevant to your audience.",
      },
      {
        title: "Email Marketing",
        description:
          "Effective email marketing campaigns that nurture leads, retain customers, and drive repeat business through personalised communication.",
      },
    ],
    highlights: [
      "Content calendar planning",
      "Blog writing and management",
      "Social media strategy",
      "Performance analytics",
    ],
    contactService: "content",
    contactSubject: "Content Marketing Inquiry",
  },
]

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankboost.africa" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.rankboost.africa/services",
      },
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "RankBoost Africa",
      url: "https://www.rankboost.africa",
    },
    serviceType: "Digital Marketing",
    name: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing services including SEO, web development, hosting, and content marketing for South African businesses.",
    areaServed: { "@type": "Country", name: "South Africa" },
    url: "https://www.rankboost.africa/services",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            <span className="text-foreground font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-xs sm:text-sm mb-3">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <time dateTime={new Date().toISOString().split("T")[0]}>
              {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
            What We Offer
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Digital Marketing Experts in South Africa 2026
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            From search engine optimisation to web development, hosting, and content marketing, we
            provide everything your business needs to thrive online. Every service is designed with
            South African businesses in mind.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-8 sm:py-10 md:py-12 scroll-mt-16 ${index % 2 === 1 ? "bg-secondary/30" : ""
            }`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            {/* Service Header */}
            <div
              className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-6 sm:mb-8 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3">
                  {service.description}
                </p>
                {service.id === "seo" && (
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                    Our <Link href="/about" className="text-primary hover:underline">experienced team</Link> uses industry-leading tools like Google Search Console, SEMrush, and Ahrefs to deliver measurable results for every campaign. Need help right away? <Link href="/contact" className="text-primary hover:underline">Reach out to our SEO specialists</Link>.
                  </p>
                )}
                {service.id === "web-development" && (
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                    Every website we build is designed with <Link href="/services#seo" className="text-primary hover:underline">SEO best practices</Link> baked in from the start, ensuring strong search visibility from day one. Paired with our <Link href="/services#hosting" className="text-primary hover:underline">managed hosting solutions</Link>, your site stays fast and secure.
                  </p>
                )}
                {service.id === "hosting" && (
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                    Our hosting infrastructure is optimised to support the <Link href="/services#web-development" className="text-primary hover:underline">high-performance websites we build</Link>, giving you a seamless experience from development to deployment. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for a hosting assessment.
                  </p>
                )}
                {service.id === "content" && (
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                    Our content marketing works hand in hand with our <Link href="/services#seo" className="text-primary hover:underline">SEO services</Link> to maximise your organic reach and search engine authority. <Link href="/about" className="text-primary hover:underline">Learn about our data-driven approach</Link> to content strategy.
                  </p>
                )}
                {!["seo", "web-development", "hosting", "content"].includes(service.id) && (
                  <div className="mb-5" />
                )}
                <ul className="space-y-2 mb-6">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <ContactForm
                  defaultService={service.contactService}
                  defaultSubject={service.contactSubject}
                  trigger={
                    <Button size="sm" className="group">
                      Enquire About {service.title.split(" (")[0]}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Sub-services */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {service.subServices.map((sub) => (
                <div
                  key={sub.title}
                  className="p-5 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{sub.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-8 sm:py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            Contact us today for a free consultation. We will analyse your current digital
            presence and recommend the right services to help your business grow.
          </p>
          <ContactForm
            trigger={
              <Button
                size="lg"
                variant="secondary"
                className="group text-sm sm:text-base px-8"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
