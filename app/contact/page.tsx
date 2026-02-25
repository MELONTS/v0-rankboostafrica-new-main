import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail, MapPin, Phone, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact RankBoost Africa | Get a Free Digital Marketing Consultation",
  description:
    "Get in touch with RankBoost Africa for a free digital marketing consultation. We help South African businesses grow with expert SEO, web development, hosting, and content marketing services.",
  alternates: {
    canonical: "https://www.rankboost.africa/contact",
  },
  openGraph: {
    title: "Contact RankBoost Africa | Free Consultation",
    description:
      "Get in touch with RankBoost Africa for a free digital marketing consultation for your South African business.",
    type: "website",
    locale: "en_ZA",
    url: "https://www.rankboost.africa/contact",
    siteName: "RankBoost Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RankBoost Africa",
    description:
      "Get in touch for a free digital marketing consultation for your South African business.",
  },
}

const contactDetails = [
  {
    icon: Mail,
    label: "General Inquiries",
    value: "info@rankboost.africa",
    href: "mailto:info@rankboost.africa",
  },
  {
    icon: Mail,
    label: "Service Support",
    value: "service@rankboost.africa",
    href: "mailto:service@rankboost.africa",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 63 740 9880",
    href: "tel:+27637409880",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Africa",
    href: null,
  },
]

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankboost.africa" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.rankboost.africa/contact" },
    ],
  }

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact RankBoost Africa",
    description:
      "Get in touch with RankBoost Africa for a free digital marketing consultation.",
    url: "https://www.rankboost.africa/contact",
    mainEntity: {
      "@type": "Organization",
      name: "RankBoost Africa",
      telephone: "+27-63-740-9880",
      email: "info@rankboost.africa",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Contact RankBoost Africa
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Ready to grow your business online? We would love to hear from you. Reach out for a free
            consultation and discover how we can help your South African business thrive in the
            digital space.
          </p>
        </div>
      </section>

      {/* Contact Details + CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                How to Reach Us
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Whether you need help with SEO, web development, hosting, or content marketing, our
                team is ready to assist. Get in touch using any of the methods below, or open our
                contact form to send us a detailed message.
              </p>

              <div className="space-y-4 sm:space-y-5 mb-8">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block mb-0.5">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-base font-medium">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <ContactForm
                trigger={
                  <Button size="lg" className="group">
                    <Send className="mr-2 w-4 h-4" />
                    Open Contact Form
                  </Button>
                }
              />
            </div>

            {/* Response promise card */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                What Happens Next?
              </h3>
              <ol className="space-y-4 sm:space-y-5">
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold">We Review Your Message</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Our team reads every message and will get back to you within 24 hours on business days.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold">Free Consultation Call</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      We schedule a no-obligation call to understand your business goals and current digital presence.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold">Custom Strategy Proposal</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      We put together a tailored digital marketing strategy with clear deliverables and transparent pricing.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold">Launch and Grow</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Once you approve the plan, we get to work immediately and provide regular progress updates.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
