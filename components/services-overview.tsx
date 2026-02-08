"use client"

import { Search, Code, Server, FileText } from "lucide-react"
import Link from "next/link"
import { InteractiveCard } from "@/components/interactive-card"

const services = [
  {
    id: "seo",
    icon: Search,
    title: "SEO",
    description: "Rank on Google’s #1 page with our search engine optimization services.",
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Custom web development services tailored to your business needs.",
  },
  {
    id: "hosting",
    icon: Server,
    title: "Web Hosting",
    description: "Secure, fast, and reliable managed hosting services for your website.",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    description: "Strategic content creation that drives engagement and conversions.",
  },
]

export function ServicesOverview() {
  const triggerHaptic = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(15)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Our Digital Marketing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Comprehensive digital solutions to transform your online presence and drive measurable
            growth through AI innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service) => (
            <InteractiveCard key={service.id}>
              <Link
                href={`#${service.id}`}
                onClick={triggerHaptic}
                className="group block h-full p-4 sm:p-5 md:p-6 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">{service.description}</p>
              </Link>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  )
}
