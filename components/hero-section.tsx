"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Code, Server, FileText } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden
      pt-14 pb-10
      sm:pt-16 sm:pb-12
      md:pt-20 md:pb-16
      lg:pt-24 lg:pb-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Digital marketing network visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      {/* ✅ UPDATED CONTAINER PADDING */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8
        py-6 sm:py-8 md:py-10 lg:py-12
        relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {"Africa's Top Digital Growth Partner"}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 text-balance">
            Best <span className="text-primary">SEO</span> and Web Development Services
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            From expert SEO to full web development, hosting, and copywriting, we provide growth-driven digital marketing services that help your business stand out in local and global search engine markets.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            {[
              { icon: Search, label: "SEO" },
              { icon: Code, label: "Web Dev" },
              { icon: Server, label: "Hosting" },
              { icon: FileText, label: "Content" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-card/50 backdrop-blur-sm rounded-md sm:rounded-lg border border-border"
              >
                <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto group">
              <a href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <ContactForm
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto bg-transparent"
                >
                  Contact Us
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
