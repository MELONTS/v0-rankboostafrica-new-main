"use client"

import Image from "next/image"

interface Tool {
  name: string
  src: string
}

interface ToolsCarouselProps {
  tools: Tool[]
  label?: string
}

export function ToolsCarousel({ tools, label }: ToolsCarouselProps) {
  /* Duplicate the list once for seamless CSS loop -- each tool appears only once per half */
  const items = [...tools, ...tools]

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8">
      {label && (
        <p className="text-center text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6 tracking-wide uppercase font-medium">
          {label}
        </p>
      )}

      <div className="relative mx-auto max-w-5xl">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex items-center justify-center">
          <div
            className="flex items-center gap-12 sm:gap-16 md:gap-20 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {items.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="relative flex-shrink-0 h-6 sm:h-8 md:h-9 w-24 sm:w-32 md:w-36 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={tool.src}
                  alt={`${tool.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────── Web Dev Platform Logos ─────────────── */

export const webDevTools: Tool[] = [
  { name: "Shopify",     src: "/logos/shopify.png" },
  { name: "Next.js",     src: "/logos/nextjs.png" },
  { name: "React",       src: "/logos/react.png" },
  { name: "WooCommerce", src: "/logos/woocommerce.png" },
  { name: "WordPress",   src: "/logos/wordpress.png" },
  { name: "Webflow",     src: "/logos/webflow.png" },
]
