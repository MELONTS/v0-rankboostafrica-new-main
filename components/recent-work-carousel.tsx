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
    description: "Boosted organic traffic by 202% for a Cape Town-based sneaker online store through technical SEO and content strategy.",
    image: "/images/carousel-ecommerce-seo.jpg",
    imageAlt: "SEO analytics dashboard displaying organic traffic growth charts and keyword ranking improvements for an e-commerce client",
  },
  {
    title: "Corporate WordPress Website",
    category: "Web Development",
    description: "Designed and built a high-performance WordPress site for a Cape Town legal practice firm with a SEO-friendly build.",
    image: "/images/carousel-corporate-website.jpg",
    imageAlt: "SEO-website for a legal practice firm South Africa",
  },
  {
    title: "Managed Hosting Migration",
    category: "Hosting",
    description: "Migrated a travel agency website to a managed hosting platform, reducing page load times and eliminating downtime.",
    image: "/images/carousel-hosting-migration.jpg",
    imageAlt: "Best Managed hosting services and monitoring",
  },
  {
    title: "Content Marketing Strategy",
    category: "Content",
    description: "Developed a 12-month content calendar and produced 48 SEO-optimised blog posts that generated 4,000+ organic leads through SERPs.",
    image: "/images/carousel-content-strategy.jpg",
    imageAlt: "Content marketing planning workspace with editorial calendar, blog drafts, and social media engagement analytics",
  },
  {
    title: "Local SEO Campaign",
    category: "SEO",
    description: "Optimised Google Business Profiles and local citations for a 5-location mapping, increasing local search visibility and key events.",
    image: "/images/carousel-local-seo.jpg",
    imageAlt: "Smartphone showing Google Maps local business search results with star ratings in front of a restaurant storefront",
  },
  {
    title: "Shopify Store Launch",
    category: "Web Development",
    description: "Built custom Shopify storefronts for South African fashion, beauty and health brands, designed with optimised product pages and payment integration.",
    image: "/images/carousel-shopify-store.jpg",
    imageAlt: "Custom e-commerce for mobile and desktop beauty and health",
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
    <section className="py-8 sm:py-10 md:py-12 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-7 md:mb-8">
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
