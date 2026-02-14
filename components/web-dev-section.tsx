"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const webDevFeatures = [
  "Custom Wordpress Design",
  "E-commerce (Shopify) Development Solutions",
  "Responsive Mobile-First Design",
  "Website Performance Optimisation",
  "CMS Integration & Management",
  "Website Maintenance & Support",
]

export function WebDevSection() {
  return (
    <section id="web-development" className="py-12 sm:py-16 md:py-20 bg-secondary/30 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Order changes on mobile */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/web-development.jpg"
                alt="Modern web development workspace with responsive website designs"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                100+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Websites Delivered</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
              Website Development
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">
              Professional Web Development That Converts
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Build a powerful online presence with our custom website development services. We
              create stunning, high-performance websites optimised for conversions and designed to
              grow with your business.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {webDevFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <ContactForm
              defaultService="web-development"
              defaultSubject="Web Development Inquiry"
              defaultMessage="Hi RankBoost Africa,

I am interested in your Web Development Services. I would like to discuss:

- Custom WordPress Design
- E-commerce (Shopify) Development
- Responsive Mobile-First Design
- Website Performance Optimisation

Please contact me to discuss my website project requirements.

Thank you!"
              trigger={
                <Button size="lg" className="group">
                  Contact Web Development
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
