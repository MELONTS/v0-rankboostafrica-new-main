"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"
import { InteractiveCard } from "@/components/interactive-card"
import FaqSection from "@/components/sections/faq-section"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Service Retainers" },
]

const projects = [
  { name: "E-commerce Growth", industry: "Retail", result: "250% Revenue Increase" },
  { name: "Local SEO Campaign", industry: "Search", result: "Top 3 Google Rankings" },
  { name: "Brand Website Launch", industry: "Technology", result: "10K Monthly Visitors" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 sm:mb-12 md:mb-16">
          {/* Image */}
          <div className="relative mb-6 lg:mb-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/team.jpg"
                alt="RankBoost Africa digital marketing team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 block">
              About Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Your Digital Growth Partners
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-5">
              RankBoost Africa is a team of passionate digital marketing experts
              dedicated to helping SMEs, brands, and government institutions
              thrive in the digital landscape.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              From startups to enterprise and government projects, we deliver
              data-driven SEO, high-performance web development, and scalable
              digital solutions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-10 sm:mb-12">
          {stats.map((stat) => (
            <InteractiveCard key={stat.label}>
              <div className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-xl border border-border">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-8 sm:mb-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">
            Featured Project Results
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {projects.map((project) => (
              <InteractiveCard key={project.name}>
                <div className="p-4 sm:p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
                  <div className="text-xs sm:text-sm text-primary font-semibold mb-1">
                    {project.industry}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1">
                    {project.name}
                  </h4>
                  <div className="text-muted-foreground text-sm">
                    {project.result}
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* FAQs – tight spacing */}
        <div className="mt-6 sm:mt-8">
          <FaqSection />
        </div>
      </div>
    </section>
  )
}
