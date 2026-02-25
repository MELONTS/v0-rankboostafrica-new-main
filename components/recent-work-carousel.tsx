"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce SEO Campaign",
    category: "SEO",
    description: "Boosted organic traffic by 180% for a Johannesburg-based online retailer through technical SEO and content strategy.",
    image: "/images/seo-services.jpg",
    imageAlt: "SEO analytics dashboard showing ranking improvements for e-commerce client",
  },
  {
    title: "Corporate WordPress Website",
    category: "Web Development",
    description: "Designed and built a high-performance WordPress site for a Cape Town financial services firm with Core Web Vitals scores in the green.",
    image: "/images/web-development.jpg",
    imageAlt: "Modern responsive corporate website displayed on multiple devices",
  },
  {
    title: "Managed Hosting Migration",
    category: "Hosting",
    description: "Migrated a government agency website to our managed hosting platform, reducing page load times by 65% and eliminating downtime.",
    image: "/images/web-hosting.jpg",
    imageAlt: "Server infrastructure dashboard showing uptime monitoring",
  },
  {
    title: "Content Marketing Strategy",
    category: "Content",
    description: "Developed a 12-month content calendar and produced 48 SEO-optimised blog posts that generated 2,400+ organic leads.",
    image: "/images/content-marketing.jpg",
    imageAlt: "Content strategy planning board with analytics and performance metrics",
  },
  {
    title: "Local SEO for Restaurant Chain",
    category: "SEO",
    description: "Optimised Google Business Profiles and local citations for a 5-location restaurant chain, increasing local search visibility by 220%.",
    image: "/images/local-seo.jpg",
    imageAlt: "Local SEO results showing Google Maps visibility improvements",
  },
  {
    title: "Shopify Store Launch",
    category: "Web Development",
    description: "Built a custom Shopify storefront for a South African fashion brand, complete with optimised product pages and payment integration.",
    image: "/images/shopify-development.jpg",
    imageAlt: "Custom Shopify e-commerce storefront displaying fashion products",
  },
]

export function RecentWorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
          <div>
            <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance">
              Recent Work
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-xl leading-relaxed">
              See how we have helped South African businesses grow their online presence with real results.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="View previous projects"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="View next projects"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-3 sm:-ml-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0 pl-3 sm:pl-4"
              >
                <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="text-sm sm:text-base font-semibold mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
