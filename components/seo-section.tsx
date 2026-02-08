"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const seoFeatures = [
  "Technical SEO Audits & Implementation",
  "On-Page SEO Optimisation",
  "Local SEO for Business Visibility",
  "Keyword Research & Strategy",
  "Monthly SEO Retainer Packages",
  "Google Search Console Setup",
]

export function SEOSection() {
  return (
    <section id="seo" className="py-12 sm:py-16 md:py-20 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
              Search Engine Optimisation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">
              Dominate Google Rankings with Expert SEO Services
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Drive organic traffic and increase visibility with our comprehensive SEO strategies.
              From technical audits to on-page optimisation, we help your business rank higher and
              attract more qualified leads.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {seoFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <ContactForm
              defaultService="seo"
              defaultSubject="SEO Services Inquiry"
              defaultMessage="Hi RankBoost Africa,

I am interested in your SEO Services. I would like to learn more about:

- Technical SEO Audits & Implementation
- On-Page SEO Optimisation
- Local SEO for Business Visibility
- Keyword Research & Strategy

Please contact me to discuss how you can help improve my website rankings.

Thank you!"
              trigger={
                <Button size="lg" className="group">
                  Contact SEO Team
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/seo-services.jpg"
                alt="SEO analytics dashboard showing organic traffic growth and search rankings"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                300%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Average Traffic Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
