"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const hostingFeatures = [
  "99.9% Uptime Guarantee",
  "Managed WordPress Hosting",
  "Secure SSL Certificates",
  "Daily Automated Backups",
  "Professional Email Hosting",
  "24/7 Technical Support",
]

export function HostingSection() {
  return (
    <section id="hosting" className="py-12 sm:py-16 md:py-20 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
              Web Hosting Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">
              Reliable Web Hosting You Can Trust
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Keep your website fast, secure, and always online with our managed hosting solutions.
              From small business sites to high-traffic e-commerce platforms, we provide the
              infrastructure your business needs to succeed.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {hostingFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <ContactForm
              defaultService="hosting"
              defaultSubject="Web Hosting Inquiry"
              defaultMessage="Hi RankBoost Africa,

I am interested in your Web Hosting Services. I would like to learn more about:

- Managed WordPress Hosting
- Secure SSL Certificates
- Daily Automated Backups
- Professional Email Hosting

Please contact me to discuss hosting solutions for my website.

Thank you!"
              trigger={
                <Button size="lg" className="group">
                  Contact Hosting Support
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/web-hosting.jpg"
                alt="Secure data center with server infrastructure"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
