"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const contentFeatures = [
  "SEO-Optimised Website Content",
  "Blog Writing & Management",
  "Social Media Content Strategy",
  "Email Marketing Campaigns",
  "Performance Analytics & Reporting",
  "Conversion Rate Optimisation",
]

export function ContentSection() {
  return (
    <section id="content" className="py-12 sm:py-16 md:py-20 bg-secondary/30 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Order changes on mobile */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/content-marketing.jpg"
                alt="Content marketing strategy and digital analytics workspace"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                10x
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Engagement Growth</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
              Content & Digital Marketing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">
              Content That Drives Results
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Engage your audience with compelling content that converts. Our digital marketing
              experts create strategic content that builds brand authority, drives organic traffic,
              and turns visitors into loyal customers.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {contentFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <ContactForm
              defaultService="content"
              defaultSubject="Content Marketing Inquiry"
              defaultMessage="Hi RankBoost Africa,

I am interested in your Content Marketing Services. I would like to discuss:

- SEO-Optimised Website Content
- Blog Writing & Management
- Social Media Content Strategy
- Email Marketing Campaigns

Please contact me to discuss how you can help grow my online presence.

Thank you!"
              trigger={
                <Button size="lg" className="group">
                  Contact Content Team
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
