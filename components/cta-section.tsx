"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Code, Server, FileText } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const serviceLinks = [
  {
    icon: Search,
    label: "SEO Services",
    service: "seo",
    subject: "SEO Services Inquiry",
    message:
      "Hi RankBoost Africa,\n\nI am interested in your SEO Services including Technical SEO Audits, On-Page Optimisation, and Keyword Research.\n\nPlease contact me to discuss.\n\nThank you!",
  },
  {
    icon: Code,
    label: "Web Development",
    service: "web-development",
    subject: "Web Development Inquiry",
    message:
      "Hi RankBoost Africa,\n\nI am interested in your Web Development Services including WordPress Design, E-commerce Development, and Responsive Design.\n\nPlease contact me to discuss.\n\nThank you!",
  },
  {
    icon: Server,
    label: "Web Hosting",
    service: "hosting",
    subject: "Web Hosting Inquiry",
    message:
      "Hi RankBoost Africa,\n\nI am interested in your Web Hosting Services including Managed WordPress Hosting, SSL Certificates, and Email Hosting.\n\nPlease contact me to discuss.\n\nThank you!",
  },
  {
    icon: FileText,
    label: "Content Marketing",
    service: "content",
    subject: "Content Marketing Inquiry",
    message:
      "Hi RankBoost Africa,\n\nI am interested in your Content Marketing Services including SEO Content, Blog Writing, and Social Media Strategy.\n\nPlease contact me to discuss.\n\nThank you!",
  },
]

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">
            Ready to Rank  <span className="text-primary">Number One</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team today and discover how we can help grow your business on Google search by ranking on the first page for your service queries and
            keywords with our expert digital marketing services.
          </p>

          {/* Main CTA */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <ContactForm
              trigger={
                <Button size="lg" className="text-sm sm:text-base px-8 sm:px-10 md:px-12 group">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>

          {/* Service-Specific Links */}
          <div className="border-t border-border pt-8 sm:pt-10 md:pt-12">
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6 md:mb-8">
              Or reach out for a specific service:
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {serviceLinks.map((link) => (
                <ContactForm
                  key={link.label}
                  defaultService={link.service}
                  defaultSubject={link.subject}
                  defaultMessage={link.message}
                  trigger={
                    <Button variant="outline" size="sm" className="group bg-transparent text-xs sm:text-sm">
                      <link.icon className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      <span className="truncate">{link.label}</span>
                    </Button>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
